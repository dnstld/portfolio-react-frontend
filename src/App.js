import React, { Component } from 'react'
import { 
  BrowserRouter, 
  Switch, 
  Route
} from 'react-router-dom'

import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'

import styled from 'styled-components'

import 'normalize.css'
import './App.css'

class App extends Component {
  render() {
    const Wrapper = styled.div`
      display: grid;
      height: 100vh;
      grid-template: auto 1fr auto / 100%;
      grid-template-areas:
        "nav"
        "main"
        "footer";
    `;
    const Nav = styled.nav`
      grid-area: nav;
      display: flex;
      justify-content: center;
      width: 100%;
      background-color: #24241C;
    `;
    const Main = styled.main`
      grid-area: main;
      overflow-y: auto;
      padding-bottom: 1.5rem;
    `;
    const Footer = styled.footer`
      grid-area: footer;
      display: flex;
      justify-content: center;
      background-color: #24241C;
      color: white;
    `;
    const Content = styled.div`
      width: 100%;
      box-sizing: border-box;
      max-width: 1200px;
      height: inherit;
      margin: 0 auto;

      @media (min-width: 600px) {
        padding: 1.5rem;
      }
    `;

    return (
      <Wrapper>
        <Nav>
          Nav
        </Nav>
        <Main>
          <Content>
            <BrowserRouter>
              <Switch>
                <Route exact path='/' component={Portfolio} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
              </Switch>
            </BrowserRouter>
          </Content>
        </Main>
        <Footer>
          Footer
        </Footer>
      </Wrapper>
    )
  }
}

export default App
