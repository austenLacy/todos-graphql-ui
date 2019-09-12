import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'

const ROOT_URL = `${process.env.REACT_APP_API_HOST}` || 'localhost:8001'

let apolloClient = null

export const initApolloClient = () => {
  apolloClient = new ApolloClient({
    uri: `${ROOT_URL}/graphql`,
    cache: new InMemoryCache({
      addTypename: true,
      dataIdFromObject: (object) => {
        return `${object.__typename}:${object.id || object._id}`
      }
    })
  })
}

export const getApolloClient = () => {
  if (!apolloClient) {
    initApolloClient()
  }

  return apolloClient
}
