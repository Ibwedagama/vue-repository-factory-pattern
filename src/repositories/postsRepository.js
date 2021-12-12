/**
 *  Import axios instance yang ada pada file Repository.js
 */
import Repository from './Repository';

/**
 *  pada variabel `resource` kita deklarasikan path yang akan kita gunakan
 *  di repository ini. Sebagai contoh kita akan gunakan `/posts` pada API milik
 *  `jsonplaceholder`
 */
const resource = '/posts';

/**
 *  Export seluruh request yang kita butuhkan untuk melakukan CRUD
 */
export default {
  /**
   * Ambil data posts dari API
   *
   * @param {Object} params
   * @returns Promise
   */
  getPosts(params = {}) {
    return Repository.get(`${resource}`, { params });
  },

  /**
   * Ambil satu post berdasarkan `postId`
   *
   * @param {String. Number} postId
   * @param {Object} params
   * @returns Promise
   */
  getPostById(postId) {
    return Repository.get(`${resource}/${postId}`);
  },

  /**
   * Simpan data post baru ke API
   *
   * @param {Object} payload
   * @returns
   */
  createPost(payload) {
    return Repository.post(`${resource}`, payload);
  },

  // updatePost(postId, payload) {
  //   return Repository.patch(`${resource}/${postId}`, payload)
  // },

  // deletePost(postId) {
  //   return Repository.delete(`${resource}/${postId}`)
  // }
};
