import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)

let section = document.createElement('section');
section.className = "todoapp"
document.body.appendChild(section);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  section
)
