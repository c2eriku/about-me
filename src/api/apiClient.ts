import axios from 'axios';

export default function createApiClient(baseURL: string) {
  return axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
