import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const get = (endpoint) => axios.get(`http://6zgkhz8h.ablogcms.io/field${endpoint}/api/summary_hero_index/`, {
  headers: { 'X-API-KEY': process.env.API_KEY },
});
