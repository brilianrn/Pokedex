import { ApolloClient, InMemoryCache } from '@apollo/client';
import favoriteVar from './vars';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        favorites: {
          read() {
            return favoriteVar();
          }
        }
      }
    }
  }
});

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache
});

export default client;