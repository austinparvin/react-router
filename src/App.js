import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Band1 from './pages/Band1'
import Band2 from './pages/Band2'
import Band3 from './pages/Band3'

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Band1">Band 1</Link>
          </li>

          <li>
            <Link to="/Band2">Band 2</Link>
          </li>

          <li>
            <Link to="/Band3">Band 3</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Band1" component={Band1} />
        <Route exact path="/Band2" component={Band2} />
        <Route exact path="/Band3" component={Band3} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
