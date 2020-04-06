import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, * {
    font-family: 'Muli', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #282c34;
    min-height: 100vh;
  }
`

export default GlobalStyle
