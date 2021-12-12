/* eslint-disable import/prefer-default-export */

import postsRepository from './postsRepository';
// import anotherRepository from '...'
// import ... from ...

/**
 *  variabel `repositories` adalah tempat kita mendeklarasikan
 *  repository - repository yang kita miliki, dengan menggunakan Object
 *  kita dapat dengan mudah memilih repository mana yang akan kita gunakan
 *  nantinya.
 */
const repositories = {
  posts: postsRepository,
  // another: anotherRepository,
  // ....
};

export const RepositoryFactory = {
  // Kembalikan repository sesuai kebutuhan (berdasarkan key nya)
  get: (name) => repositories[name],
};
