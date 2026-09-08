import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Bio } from '../data/constants.js';

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background: rgba(250, 250, 250, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid ${({ theme }) => theme.border};
  transition: border-color 0.2s ease;
`;

const NavContainer = styled.div`
  width: 100%;
  height: 64px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 58px;
    gap: 12px;
  }
`;

const Brand = styled.a`
  font-size: 20px;
  font-weight: 800;
  color: #09090B;
  text-decoration: none;
  letter-spacing: -0.035em;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: opacity 0.15s ease;
  white-space: nowrap;

  &:hover {
    opacity: 0.75;
  }

  @media (max-width: 640px) {
    font-size: 18px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 860px) {
    display: none;
  }
`;

const NavButton = styled.a`
  font-size: 13.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 7px;
  transition: all 0.15s ease;

  &:hover {
    color: #09090B;
    background: rgba(0, 0, 0, 0.05);
  }
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ResumeButton = styled.a`
  font-size: 13px;
  font-weight: 550;
  color: #FAFAFA;
  background: #18181B;
  border: 1px solid #18181B;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  padding: 7px 16px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;

  .arrow {
    display: inline-block;
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover {
    background: #27272A;
    transform: translateY(-1px);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);

    .arrow {
      transform: translate(2px, -2px);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 7px;
  padding: 6px 9px;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  font-size: 15px;
  line-height: 1;

  @media (max-width: 860px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 8px;
  padding: 16px 20px 20px;
  background: #FFFFFF;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  @media (min-width: 861px) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  font-size: 14.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.15s ease;

  &:hover {
    color: #09090B;
    background: #F4F4F5;
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, #6366F1, #3B82F6, #10B981);
  width: ${({ $progress }) => `${$progress}%`};
  transition: width 0.05s ease-out;
  pointer-events: none;
`;

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrollPercent = (totalScroll / windowHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, scrollPercent)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Header>
      <NavContainer>
        <Brand href="#about">
          {Bio.name}
        </Brand>

        <NavLinks>
          {navItems.map((item) => (
            <NavButton key={item.label} href={item.href}>
              {item.label}
            </NavButton>
          ))}
        </NavLinks>

        <RightGroup>
          <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
            Resume <span className="arrow">↗</span>
          </ResumeButton>
          <MobileToggle
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </MobileToggle>
        </RightGroup>
      </NavContainer>

      <MobileMenu $isOpen={mobileMenuOpen}>
        {navItems.map((item) => (
          <MobileNavLink
            key={item.label}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </MobileNavLink>
        ))}
      </MobileMenu>

      <ProgressBar $progress={scrollProgress} />
    </Header>
  );
};

export default Navbar;