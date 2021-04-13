import { ApolloClient, InMemoryCache } from "@apollo/client"
import { Favourites } from './cache'

export const cache = new InMemoryCache

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          Favourites: {
            read() {
              return Favourites()
            }
          }
        }
      }
    }
  }), 
  uri: 'http://localhost:4000'
})

export default client