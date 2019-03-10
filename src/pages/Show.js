import React, { Component } from 'react'

import styled from 'styled-components'

export default class Show extends Component {
  render() {
    const { portfolio } = this.props.location.state

    const Image = styled.img `
      width: 250px;
    `;

    return (
      <div>
        <Image src={portfolio.imageUrl} alt={portfolio.imageAlt} />
        <h1>client: {portfolio.client}</h1>
        <h1>title: {portfolio.title}</h1>
        <h1>tools: {portfolio.tools}</h1>
        <h1>description: {portfolio.description}</h1>
      </div>
    )
  }
}