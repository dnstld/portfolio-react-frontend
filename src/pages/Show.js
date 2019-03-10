import React, { Component } from 'react'

export default class Show extends Component {
  render() {
    const { portfolio } = this.props.location.state

    return (
      <div>
        <h1>client: {portfolio.client}</h1>
        <h1>title: {portfolio.title}</h1>
        <h1>imageUrl: {portfolio.imageUrl}</h1>
        <h1>imageAlt: {portfolio.imageAlt}</h1>
        <h1>tools: {portfolio.tools}</h1>
        <h1>description: {portfolio.description}</h1>
      </div>
    )
  }
}