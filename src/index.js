import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'
import App from 'components/app'
import { initApolloClient, getApolloClient } from 'services/graphql/apolloClient'

import './index.scss'

initApolloClient()
const ApolloClient = getApolloClient()

ReactDOM.render((
  <ApolloProvider client={ApolloClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
), document.getElementById('root'))

registerServiceWorker()
