import axios from 'axios'

export const listRepositories = () => axios
  .get('https://api.github.com/repositories')
  .then(({ data }) => data)