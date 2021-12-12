import axios from 'axios';

/**
 * `baseDomain` merupakan variabel yang kita gunakan untuk menyimpan
 *  domain dari API yang akan kita gunakan.
 */
const baseDomain = 'https://jsonplaceholder.typicode.com';

/**
 * `baseURL` merupakan variabel yang kita gunakan untuk menyimpan
 *  full domain dari API. Biasanya pada beberapa kasus ada yang menggunakan url seperti ini
 * `http://example.com/api/v1`
 *
 *  tapi pada kasus ini kita tidak menambahkan apa - apa karena `jsonplaceholder` tidak memiliki
 *  path tambahan seperti `/api/v1`
 *
 */
const baseURL = `${baseDomain}`;
// const baseURL = `${baseDomain}/api/v1`

/**
 *  Inisialisasi axios instance
 */
export default axios.create({
  baseURL,
  // Tambahkan apabila kita membutuhkan konfigurasi headers
  // headers: { "Authorization: Bearer yourTokenHere" }
});
