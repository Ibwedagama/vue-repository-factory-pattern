import Repository from './Repository';

const resource = '/pokemon';

export default {

  getPokemon(params = {}) {
    return Repository.get(`${resource}`, { params });
  },

  getPokemonById(pokemonId, params = {}) {
    return Repository.get(`${resource}/${pokemonId}`, { params });
  },
};
