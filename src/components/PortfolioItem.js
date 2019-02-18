import React, { Component } from 'react'

export default class PortfolioItem extends Component {
  render() {
    const { portfolio } = this.props

    return (
      <li>
        <span>{portfolio.client}</span>
        <span>{portfolio.title}</span>
        <span>{portfolio.date}</span>
        <span>{portfolio.tools}</span>
        <span>{portfolio.category}</span>
        <span>{portfolio.description}</span>
        <span>{portfolio.imageUrl}</span>
        <span>{portfolio.imageAlt}</span>
      </li>
    )
  }
}