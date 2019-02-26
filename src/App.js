import React, { Component } from 'react'
import { 
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Navbar from './components/Navbar'
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
      align-items: center;
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
      <BrowserRouter>
        <Wrapper>
          <Nav>
            <Navbar />
          </Nav>
          <Main>
            <Content>
              <Switch>
                <Route activeClassName='active' path='/' component={Portfolio} exact />
                <Route activeClassName='active' path='/about' component={About} />
                <Route activeClassName='active' path='/contact' component={Contact} />
              </Switch>
            </Content>
          </Main>
          <Footer>
            Footer
          </Footer>
        </Wrapper>
      </BrowserRouter>
    )
  }
}

export default App
