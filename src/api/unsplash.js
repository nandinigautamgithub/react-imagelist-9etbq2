import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID RScUtyjFGOap-DKqz7-H14WCvqj4EG75v5R9fLG5z0A'
  }
});