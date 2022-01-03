import axios from 'axios';

const baseDomain = process.env.VUE_APP_POKEMON_API_BASE_URL;

const baseURL = `${baseDomain}/api/v2`;

export default axios.create({
  baseURL,
  // Tambahkan apabila kita membutuhkan konfigurasi headers
  // headers: { "Authorization: Bearer yourTokenHere" }
});
