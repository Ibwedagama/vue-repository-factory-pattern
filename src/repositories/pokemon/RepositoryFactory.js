/* eslint-disable import/prefer-default-export */

import pokemonRepository from './pokemonRepository';

const repositories = {
  pokemon: pokemonRepository,
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};
