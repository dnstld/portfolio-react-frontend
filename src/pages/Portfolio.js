import React, { Component } from 'react'

import api from '../services/api'
import PortfolioItem from '../components/PortfolioItem'
import socket from 'socket.io-client'

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
    return (
      <ul>
        { this.state.portfolio.map(portfolio => (
          <PortfolioItem key={portfolio._id} portfolio={portfolio} />
        ))}
      </ul>
    )
  }
}
