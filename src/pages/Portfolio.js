import React, { Component } from 'react'

import api from '../services/api'
import PortfolioItem from '../components/PortfolioItem'
import socket from 'socket.io-client'

import styled from 'styled-components'

export default class Portfolio extends Component {
  state = {
    portfolio: []
  }

  async componentDidMount() {
    this.updatedPortfolioItem()

    const response = await api.get('/')

    this.setState({
      portfolio: response.data
    })
  }

  updatedPortfolioItem = () => {
    const io = socket('http://localhost:3000')

    io.on('portfolio', data => {
      this.setState({
        portfolio: [data, ...this.state.portofio]
      })
    })
  }

  render() {
    const PortfolioList = styled.ul `
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1.5rem;

      @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
      }
    `;

    return (
      <PortfolioList>
        { this.state.portfolio.map(portfolio => (
          <PortfolioItem key={portfolio._id} portfolio={portfolio} />
        ))}
      </PortfolioList>
    )
  }
}
