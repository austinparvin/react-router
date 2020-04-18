# React Router

A  multiple page app, using react-router.

# Objectives

- Create a SPA, with a few pages
- Learn to work with React Router Dom

# Includes: 

- [REACT](https://reactjs.org/docs/getting-started.html)
- [REACT ROUTER DOM](https://www.npmjs.com/package/react-router-dom)


- [NETLIFY](https://docs.netlify.com/?_ga=2.56383019.1272475466.1587169866-1421079835.1583768648)

## Live Site

[LIVE SITE](https://react-router-austinparvin.netlify.app/)

![react router](http://g.recordit.co/YCnCo9ALwk.gif)

## Featured Code

### Routing from Homepage Via Link 

```JSX
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
 ```
