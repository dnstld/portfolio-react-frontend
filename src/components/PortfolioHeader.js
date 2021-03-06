import React, { Component } from 'react'

import styled from 'styled-components'

import { media } from '../styles/media'

export default class PortfolioHeader extends Component {
  render() {
    const Header = styled.header`
      padding: 1.5rem;
      background-color: #f7f7f7;
      background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23eaeaea' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
      border-bottom: 1px solid #f7f7f7;

      ${media.md`
        padding: 3rem;
      `}
    `;
    const Content = styled.div`
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    `;
    const Logo = styled.img`
      width: 5rem;
      margin-bottom: 1rem;

      ${media.sm`
        width: 6rem;
      `}
      ${media.md`
        width: 7rem;
      `}
    `;
    const Phrase = styled.h1`
      display: flex;
      flex-direction: column;
      text-align: center;
      font-weight: 300;
      font-size: 1.5rem;
      padding: 0 1.5rem;

      ${media.sm`
        font-size: 2rem;
      `}
      ${media.md`
        max-width: 75%;
      `}
    `;
    const LatestMessage = styled.span`
      margin-top: 1.5rem;
      font-size: 0.875rem;
      text-align: center;
    `;
    return (
      <Header>
        <Content>
          <Logo src="./assets/images/logo-denis-toledo.svg" alt="Denis Toledo's Logo" />
          <Phrase>
            <span>Hi, I am Denis.</span>
            <span>I am a Front-end Developer, an enthusiast User Experience and User Interface Designer and also a Designer.</span>
          </Phrase>
          <LatestMessage>&#8595; Take a look at some of my latest work &#8595;</LatestMessage>
        </Content>
      </Header>
    )
  }
}