import axios from 'axios';


export function get_links() {
  return axios.get('/links.json');
};
