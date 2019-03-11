import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
import Users from './Users';
import Things from './Things';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      things: [],
    };
  }

  componentDidMount() {
    Promise.all([axios.get('/api/users'), axios.get('/api/things')])
      .then(([resUsers, resThings]) => {
        this.setState({ users: resUsers.data, things: resThings.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { users, things } = this.state;

    return (
      <div className="container my-3">
        <h1 className="mb-4">Acme Favorites</h1>
        <HashRouter>
          <div>
            <Nav numUsers={users.length} numThings={things.length} />
            <Switch>
              <Route path="/users" render={() => <Users users={users} />} />
              <Route path="/things" render={() => <Things things={things} />} />
              <Redirect to="/users" />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
