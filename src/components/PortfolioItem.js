import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Moment from 'moment'
import styled from 'styled-components'

import { media } from '../styles/media'

export default class PortfolioItem extends Component {
  render() {
    const { portfolio } = this.props

    const Item = styled.li `
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 
                  0 3px 1px -2px rgba(0,0,0,0.12), 
                  0 1px 5px 0 rgba(0,0,0,0.2);
      user-select: none;

      ${media.sm`
        border-radius: .25rem;
      `}
    `;
    const StyledLink = styled(NavLink) `
      display: block;
      height: 100%;
    `;
    const Header = styled.header `
      display: flex;
      padding: .5rem 1rem;
    `;
    const Avatar = styled.span `
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      margin-right: .5rem;
      background-color: #24241C;
      color: #fff;
    `;
    const Info = styled.section `
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
    `;
    const Client = styled.span `
      font-size: 0.750rem;
    `;
    const Title = styled.h1 `
      font-size: 0.750rem;
      font-weight: 700;
    `;
    const Date = styled.span `
      font-size: 0.625rem;
      color: #b7b7b7;
    `;
    const ImageContainer = styled.div `
      position: relative;
      height: 0;
      padding-bottom: 56.25%; /* 1280x720px (hd video 16:9) */
      background-color: #f1f1f1;
      border-top: 1px solid #f1f1f1;
      border-bottom: 1px solid #f1f1f1;
    `;
    const Image = styled.img `
      width: 100%;
    `;
    const Content = styled.div `
      display: grid;
      grid-row-gap: 1rem;
      padding: 1rem;
    `;
    const Tools = styled.div `
      display: flex;
      flex-direction: column;
    `;
    const Label = styled.h2 `
      font-size: 0.750rem;
      font-weight: 300;
      margin-bottom: .25rem;
    `;
    const List = styled.ul `
      display: flex;
      flex-wrap: wrap;
    `;
    const ListItem = styled.li `
      display: flex;
    `;
    const Tool = styled.span `
      font-size: 0.625rem;
      background-color: #24241C;
      color: #fff;
      border-radius: .25rem;
      padding: .25rem .5rem;
      margin: .25rem .25rem 0 0;
    `;
    const Text = styled.span `
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      
      @supports (-webkit-line-clamp: 2) {
        text-overflow: initial;
        white-space: initial;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    `;

    return (
      <Item>
        <StyledLink to={{
          pathname: `/portfolio/${portfolio._id}`,
          state: { portfolio }
        }}>
          <Header>
            <Avatar>{portfolio.client.charAt(0).toUpperCase()}</Avatar>
            <Info>
              <Client>{portfolio.client}</Client>
              <Title>{portfolio.title}</Title>
            </Info>
            <Date>{Moment(portfolio.createdAt).format('ll')}</Date>
          </Header>
          <ImageContainer>
            <Image src={portfolio.imageThumbUrl} alt={portfolio.imageAlt} />
          </ImageContainer>
          <Content>
            <Tools>
              <Label>Tools:</Label>
              <List>
                <ListItem>
                  {portfolio.tools.map(tool => (
                    <Tool key={tool}>{tool}</Tool>
                  ))}
                </ListItem>
              </List>
            </Tools>
            <span>
              <Label>Description:</Label>
              <Text>{portfolio.description}</Text>
            </span>
          </Content>
        </StyledLink>
      </Item>
    )
  }
}