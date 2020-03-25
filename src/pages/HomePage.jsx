import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

const HomePage = () => {
  return (
    <div class="homePage">
      <h1>Welcome to Austin's Favorite Bands</h1>
      <p>
        <Link to="/1">Nirvana</Link>
      </p>
      <p>
        <Link to="/2">Radiohead</Link>
      </p>
      <p>
        <Link to="/3">Red Hot Chili Peppers</Link>
      </p>
    </div>
  )
}

export default HomePage
