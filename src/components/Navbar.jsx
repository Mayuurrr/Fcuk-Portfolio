import React from 'react';
import { Bio } from '../data/constants.js';
import styled from 'styled-components';

const Nav = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
      transition: 0.5s all ease;
    }
`;
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;


const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;
`;

const NavSpan = styled.div`
    padding: 0 3px;
    font-weight: 500;
    font-size: 22px;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;
    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }
    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;


const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const NavLogo = styled.a`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <NavSpan>&lt; </NavSpan>
          <Span>Mayur </Span>
          <NavSpan>/</NavSpan>
          <Span>Hegde </Span>
          <NavSpan>&gt;</NavSpan>
        </NavLogo>
        <NavItems>
          <NavLink href="#">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target='display'>Github Profile</GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar