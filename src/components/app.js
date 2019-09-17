import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { withApollo } from 'react-apollo'

import AppBar from 'components/appBar'
import Sidebar from 'components/sidebar'
import Todos from 'components/todos'

class App extends Component {
  state = {
    isSidebarOpen: false
  }

  constructor(props) {
    super(props)

    this.renderMain = this.renderMain.bind(this)
    this.renderTodos = this.renderTodos.bind(this)
  }

  renderMain({ Component }) {
    const { isSidebarOpen } = this.state

    return (
      <main className="app-main">
        <div className="app-container">
          <Sidebar
            isOpen={isSidebarOpen}
            onCloseClick={() => this.setState({ isSidebarOpen: false })}
          />
          <div className="app-content">
            <AppBar
              isSidebarOpen={isSidebarOpen}
              onSidebarOpenClick={() => this.setState({ isSidebarOpen: true })}
            />
            <div className="app-page-content">
              {Component}
            </div>
          </div>
        </div>
      </main>
    )
  }

  renderTodos() {
    return this.renderMain(<Todos />)
  }

  render() {
    return (
      <div className="app">
        <Sidebar />
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
