import axios from 'axios'

export const CREATE_USER = 'create_user'

export function createUser(values, callback) {
  const request = axios.post('http://localhost:3000/api/new-user', values)
    .then(() => callback());

  return {
    type: CREATE_USER,
    payload: request
  };
}