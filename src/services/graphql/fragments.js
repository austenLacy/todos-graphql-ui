import { gql } from 'apollo-boost'

export default {
  TodoParts: gql`
    fragment TodoParts on Account {
      __typename
      id
      description
      status
      deletedAt
    }
  `
}
