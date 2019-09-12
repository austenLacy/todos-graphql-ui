import { gql } from 'apollo-boost'

import Fragments from 'services/graphql/fragments'

export default {
  createTodo: gql`
    mutation CreateTodo($todo: TodoInput!) {
      createTodo(todo: $todo) {
        __typename
        ...TodoParts
      }
    }
    ${Fragments.TodoParts}
  `,
  updateTodoById: gql`
    mutation UpdateTodoById($todoId: UUID!, $todo: TodoInput!) {
      updateTodoById(todoId: $todoId, todo: $todo) {
        __typename
        ...TodoParts
      }
      ${Fragments.TodoParts}
    }
  `,
  deleteTodoById: gql`
    mutation DeleteTodoById($id: UUID!) {
      deleteTodoById(id: $id) {
        __typename
      }
    }
  `
}
