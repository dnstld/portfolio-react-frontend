import React from 'react'

import { 
  NavLink
} from 'react-router-dom'

import styled from 'styled-components'

const Navbar = () => {
  const Menu = styled.ul`
    display: flex;
    height: 100%;
  `;
  const Item = styled.li`
    color: #fff;
  `;
  const StyledLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
    position: relative;
    font-weight: 300;
    text-transform: uppercase;
    user-select: none;

    &::before {
      content: "";
      width: 1px;
      position: absolute;
      left: 0;
      top: 1rem;
      bottom: 1rem;
      background-color: black;
    }
    &.active {
      opacity: .5;
    }
  `;

  return (
    <Menu>
      <Item>
        <StyledLink to="/" exact>Portfolio</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/about">About</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/contact">Contact</StyledLink>
      </Item>
    </Menu>
  )
}

export default Navbar