import React from 'react';
import styled from 'styled-components';
import { Bio } from '../data/constants.js';

const FooterContainer = styled.footer`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.border};
  background-color: #FFFFFF;
  padding: 28px 0 36px;
  margin-top: 0;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 640px) {
    padding: 0 16px;
    gap: 20px;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BrandName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.01em;
`;

const BrandRole = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.text_muted};
`;

const NavLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;

  @media (max-width: 640px) {
    gap: 14px;
  }
`;

const NavLink = styled.a`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.borderSubtle};
  font-size: 12.5px;
  color: ${({ theme }) => theme.text_muted};

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
`;

const TextLink = styled.a`
  font-size: 12.5px;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  font-size: 12.5px;
  color: ${({ theme }) => theme.text_muted};
  font-family: ${({ theme }) => theme.font_mono};
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper>
        <TopRow>
          <Brand>
            <BrandName>{Bio.name}</BrandName>
            <BrandRole>{Bio.roles ? Bio.roles.join(' • ') : 'Software Engineer'}</BrandRole>
          </Brand>

          <NavLinks>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </NavLinks>
        </TopRow>

        <BottomRow>
          <Copyright>
            &copy; {currentYear} {Bio.name}. Designed &amp; built with modern React &amp; Vite.
          </Copyright>

          <SocialLinks>
            <TextLink href={Bio.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </TextLink>
            <TextLink href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </TextLink>
            <TextLink href={Bio.resume} target="_blank" rel="noopener noreferrer">
              Resume ↗
            </TextLink>
            <TextLink href={`mailto:${Bio.email}`}>
              Email ↗
            </TextLink>
          </SocialLinks>
        </BottomRow>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;