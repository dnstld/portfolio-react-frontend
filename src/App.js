import React, { Component } from 'react'
import { 
  BrowserRouter, 
  Switch, 
  Route
} from 'react-router-dom'

import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Portfolio} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
