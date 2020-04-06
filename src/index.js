import React from 'react'
import { render } from 'react-dom'

import 'core/i18n-config'
import 'core/axios-config'
import App from 'core/App'

const rootElement = document.getElementById('root')

render(<App />, rootElement)
