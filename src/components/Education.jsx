import React, { useState } from 'react';
import styled from 'styled-components';
import EducationCard from '../components/Cards/EducationCard.jsx';
import { education } from '../data/constants.js';

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

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Education = () => {
  return (
    <Section id="education">
      <HeaderRow>
        <HeaderBlock>
          <SectionTag>Formal Education</SectionTag>
          <SectionTitle>Education &amp; Credentials</SectionTitle>
          <SectionDesc>Computer science foundation and computational coursework.</SectionDesc>
        </HeaderBlock>
      </HeaderRow>

      <EducationList>
        {education.map((item) => (
          <EducationCard key={item.id} education={item} />
        ))}
      </EducationList>
    </Section>
  );
};

export default Education;