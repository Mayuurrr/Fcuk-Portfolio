import React from 'react';
import ProfileImg from '../images/Profile.png';
import { Bio } from '../data/constants.js';
import styled from 'styled-components';

const HeroContainer = styled.section`
  padding: 40px 0 32px 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 640px) {
    padding: 28px 0 24px 0;
  }
`;

const HeroLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const IdentityHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;

  @media (max-width: 640px) {
    gap: 16px;
  }
`;

const AvatarFrame = styled.div`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #FFFFFF;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 8px 20px rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
  background: #F4F4F5;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 12px 28px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 640px) {
    width: 68px;
    height: 68px;
  }
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  display: block;
`;

const IdentityInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const NameTitle = styled.h1`
  font-size: 36px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.15;
  letter-spacing: -0.035em;

  @media (max-width: 640px) {
    font-size: 27px;
  }
`;

const RoleLine = styled.div`
  font-size: 14.5px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  span {
    color: ${({ theme }) => theme.text_muted};
    font-weight: 400;
  }
`;

const Headline = styled.h2`
  font-size: 22px;
  line-height: 1.45;
  font-weight: 650;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.02em;
  max-width: 760px;

  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 1.4;
  }
`;

const Summary = styled.p`
  font-size: 14.5px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 780px;
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 4px;
`;

const PrimaryBtn = styled.a`
  font-size: 13px;
  font-weight: 500;
  color: #FAFAFA;
  background: #18181B;
  border: 1px solid #18181B;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.18);
  padding: 8px 16px;
  border-radius: 7px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);

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

const SecondaryBtn = styled.a`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: #FFFFFF;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow_sm};
  padding: 8px 14px;
  border-radius: 7px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);

  .arrow {
    display: inline-block;
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover {
    border-color: rgba(0, 0, 0, 0.25);
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadow_md};

    .arrow {
      transform: translate(2px, -2px);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const StatsStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: ${({ theme }) => theme.border};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow_sm};
  margin-top: 8px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 14px 18px;
  background: #FFFFFF;
  transition: background 0.15s ease;

  &:hover {
    background: #FAFAFA;
  }
`;

const StatNumber = styled.span`
  font-family: ${({ theme }) => theme.font_mono};
  font-size: 16px;
  font-weight: 650;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.02em;
`;

const StatLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 550;
`;

const StatDetail = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.text_muted};
  font-weight: 450;
`;

const HeroSection = () => {
  return (
    <HeroContainer id="about">
      <HeroLayout>
        <IdentityHeader>
          <AvatarFrame>
            <AvatarImg src={ProfileImg} alt={Bio.name} />
          </AvatarFrame>
          <IdentityInfo>
            <NameTitle>{Bio.name}</NameTitle>
            <RoleLine>Full-Stack Software Engineer <span>/ Bengaluru, India</span></RoleLine>
          </IdentityInfo>
        </IdentityHeader>

        <Headline>
          Building reliable web applications and scalable cloud systems.
        </Headline>

        <Summary>{Bio.summary}</Summary>

        <ActionRow>
          <PrimaryBtn href={Bio.resume} target="_blank" rel="noopener noreferrer">
            Resume <span className="arrow">↗</span>
          </PrimaryBtn>
          <SecondaryBtn href={Bio.github} target="_blank" rel="noopener noreferrer">
            GitHub <span className="arrow">↗</span>
          </SecondaryBtn>
          <SecondaryBtn href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <span className="arrow">↗</span>
          </SecondaryBtn>
          <SecondaryBtn href={`mailto:${Bio.email}`}>
            Email <span className="arrow">↗</span>
          </SecondaryBtn>
        </ActionRow>

        <StatsStrip>
          {Bio.stats?.map((stat, i) => (
            <StatItem key={i}>
              <StatNumber>{stat.value}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
              {stat.detail && <StatDetail>{stat.detail}</StatDetail>}
            </StatItem>
          ))}
        </StatsStrip>
      </HeroLayout>
    </HeroContainer>
  );
};

export default HeroSection;

