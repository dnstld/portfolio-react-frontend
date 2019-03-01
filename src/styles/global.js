import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  *:focus {
    outline: none;
  }

  html,
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0.0625em;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    line-height: 120%;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  a:hover,
  a:focus {
    color: inherit;
    text-decoration: none;
    outline: none;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  p {
    margin: 0;
  }
`;