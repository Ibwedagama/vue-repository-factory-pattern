<template>
  <ul>
    <li v-for="poke in pokemon" :key="poke.name">{{ poke.name }}</li>
  </ul>
</template>

<script>
import { RepositoryFactory } from '../repositories/pokemon/RepositoryFactory';

const PokemonRepository = RepositoryFactory.get('pokemon');

export default {
  name: 'PokemonList',
  data() {
    return {
      isLoading: false,
      pokemon: [],
      params: {
        limit: 10,
        offset: 0,
      },
    };
  },
  methods: {
    async fetchPokemon() {
      try {
        const { data } = await PokemonRepository.getPokemon(this.params);
        this.pokemon = data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchPokemon();
  },
};
</script>
