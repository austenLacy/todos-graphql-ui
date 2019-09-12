import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { withApollo } from 'react-apollo'

import Todos from 'components/todos'

class App extends Component {
  renderTodos() {
    return <Todos />
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => <Redirect to={{ pathname: '/todos' }} />} />
          <Route path="/todos" render={this.renderTodos} />
          <Route render={this.renderTodos} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(withApollo(App))
