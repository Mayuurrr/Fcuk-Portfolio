import React, { useState } from 'react';
import styled from 'styled-components';
import ExperienceCard from '../components/Cards/ExperienceCard.jsx';
import { experiences } from '../data/constants.js';

const Section = styled.section`
  padding: 40px 0 44px 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 640px) {
    padding: 28px 0 32px 0;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 24px;
  gap: 16px;
  flex-wrap: wrap;
`;

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const SectionTag = styled.span`
  font-family: ${({ theme }) => theme.font_mono};
  font-size: 11px;
  font-weight: 600;
  color: #52525B;
  background: #F4F4F5;
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 3px 8px;
  border-radius: 5px;
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const SectionTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.03em;
`;

const SectionDesc = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_muted};
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Experience = () => {
  return (
    <Section id="experience">
      <HeaderRow>
        <HeaderBlock>
          <SectionTag>Career History</SectionTag>
          <SectionTitle>Work Experience</SectionTitle>
          <SectionDesc>
            Engineering roles focused on platform scale, performance, and API design.
          </SectionDesc>
        </HeaderBlock>
      </HeaderRow>

      <ExperienceList>
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
          />
        ))}
      </ExperienceList>
    </Section>
  );
};

export default Experience;