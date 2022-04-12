import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs'
import axios from 'axios'
import './App.css';

const currentYear = new Date().getFullYear()
const apiBaseUrl = 'https://golf-leaderboard-data.p.rapidapi.com/'
let apiOptions = {
  method: 'GET',
  url: apiBaseUrl,
  headers: {
    'X-RapidAPI-Host': 'golf-leaderboard-data.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
  }
};

function updateApiOptions(path) {
  apiOptions.url = `${apiBaseUrl}${path}`
}

function getNextTournament(stateFn, stateFn2) {
  console.log('getNextTournament()')
  updateApiOptions(`fixtures/2/${currentYear}`)
  axios.request(apiOptions).then((response) => {
    // console.log(response.data.results)
    for (const [i, tourney] of response.data.results.entries()) {
      const tourneyStart = dayjs(tourney.start_date)
      const tourneyStartFormatted = tourneyStart.format('MMMM D, YYYY');
      const diff = tourneyStart.diff(dayjs())
      if (diff > 0) {
        console.log('next tournament:', tourney.name)
        console.log(tourney)
        stateFn({
          tourneyId: tourney.id,
          name: tourney.name,
          course: tourney.course,
          startDate: tourneyStartFormatted,
        })
        getNextTournamentPlayers(stateFn2, tourney.id)
        break
      }
    }
  }).catch((error) => {
    console.error(error)
  })
}

function getNextTournamentPlayers(stateFn, tourneyId) {
  updateApiOptions(`entry-list/${tourneyId}`)
  axios.request(apiOptions).then((response) => {
    console.log(response.data.results.entry_list)
    let players = []
    for (const [i, player] of response.data.results.entry_list.entries()) {
      const playerName = `${player.first_name} ${player.last_name}`
      // console.log(playerName)
      players.push(playerName)
    }
    stateFn(players)
  }).catch((error) => {
    console.error(error)
  })
}

function App() {
  let [nextTournament, setNextTournament] = useState({});
  let [nextTournamentPlayers, setNextTournamentPlayers] = useState([]);

  useEffect(() => {
    let mounted = true;
    getNextTournament(setNextTournament, setNextTournamentPlayers)
    return () => mounted = false;
  }, [])

  return (
    <div className="app">
      <h1>Fantasy Golf</h1>
      <p>Next tournament: <b>{nextTournament.name}</b> at <i>{nextTournament.course}</i></p>
      <p>Start date: <b>{nextTournament.startDate}</b></p>
      <p className="fz-sm">API tournament ID: <code><b>{nextTournament.tourneyId}</b></code></p>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <ul style={{textAlign: 'left', listStyle: 'none'}}>
          {nextTournamentPlayers.map((player, i) => {
            return <li key={i}>({i+1}) — {player}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
