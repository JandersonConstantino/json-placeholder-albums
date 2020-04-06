import React from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-image-lightbox/style.css'

import store from 'store'

import GlobalStyle from 'core/GlobalStyle'
import Routes from 'core/routes'
import Loader from 'components/Loader'

const App = () => (
  <Provider store={store}>
    <Loader />
    <ToastContainer />
    <GlobalStyle />
    <Routes />
  </Provider>
)

export default App
