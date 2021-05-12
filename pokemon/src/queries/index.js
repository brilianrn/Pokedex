import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        url
        name
        image
      }
    }
  }
`;

export const GET_POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      message
      status
    }
  }
`;

export const GET_TYPES = gql`
  query regions {
    regions {
      count
      next
      previous
      results {
        url
        name
      }
    }
  }
`;

export const FILTER_POKEMONS = gql`
  query region($region: String!) {
    region(region: $region) {
      params
      status
      message
      response
    }
  }
`;

// export const FILTER_POKEMONS = gql`
// query ability($ability: String!) {
//   ability(ability: $ability) {
//     params
//     status
//     message
//     response
//   }
// }
// `;