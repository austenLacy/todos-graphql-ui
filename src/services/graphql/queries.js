import { gql } from 'apollo-boost'

import Fragments from 'services/graphql/fragments'

export default {
  getTodos: gql`
    query Todos {
      Toods {
        __typename
        ...TodoParts
      }
    }
    ${Fragments.TodoParts}
  `
}
