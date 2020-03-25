import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BandPage from './pages/BandPage'

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/1">Nirvana</Link>
          </li>

          <li>
            <Link to="/2">Radiohead</Link>
          </li>

          <li>
            <Link to="/3">Red Hot Chili Peppers</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:id" component={BandPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
