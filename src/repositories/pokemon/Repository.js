import axios from 'axios';

const baseDomain = 'https://pokeapi.co';

const baseURL = `${baseDomain}/api/v2`;

export default axios.create({
  baseURL,
  // Tambahkan apabila kita membutuhkan konfigurasi headers
  // headers: { "Authorization: Bearer yourTokenHere" }
});
