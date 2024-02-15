import axios from 'axios'

const API = axios.create({
   baseURL: 'https://it-intern-hub.freemyip.com/',
   headers: {
      'Content-Type': 'application/json',
   },
})
export default API
