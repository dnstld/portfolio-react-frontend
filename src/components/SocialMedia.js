import React, { Component } from 'react'

import { 
  Link
} from 'react-router-dom'

import styled from 'styled-components'

export default class SocialMedia extends Component {
  render() {
    const Content = styled.div`
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    `;
    const Aside = styled.aside`
      display: flex;
    `;
    const StyledLink = styled(Link)`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .5rem;
      margin: .5rem;
      background-color: #fff;
      border-radius: 50%;
    `;
    return (
      <Content>
        <Aside>
        <StyledLink to="https://github.com/dnstld" target="_blank">
          <img src="./assets/icons/github.svg" alt="My GitHub" />
        </StyledLink>
        <StyledLink to="https://twitter.com/dnstld" target="_blank">
          <img src="./assets/icons/twitter.svg" alt="My Twitter" />
        </StyledLink>
        <StyledLink to="https://www.linkedin.com/in/denistoledo" target="_blank">
          <img src="./assets/icons/linkedin.svg" alt="My LinkedIn" />
        </StyledLink>
        </Aside>
      </Content>
    )
  }
}