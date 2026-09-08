import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { skills } from '../data/constants.js';
import { getSkillDetails } from '../utils/skillIcons.jsx';

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

const CategoryCard = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  padding: 22px;
  background: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px -2px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  position: relative;

  &:hover {
    border-color: rgba(0, 0, 0, 0.25);
    box-shadow: 0 10px 24px -4px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CategoryTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.015em;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 500;
  color: #27272A;
  background: #FFFFFF;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 5px 10px;
  border-radius: 7px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
  transition: all 0.16s ease;
  cursor: default;

  .icon-holder {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: ${({ $color }) => $color || '#71717A'};
    transition: transform 0.16s ease;
  }

  &:hover {
    color: #09090B;
    background: #FAFAFA;
    border-color: rgba(0, 0, 0, 0.25);
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

    .icon-holder {
      transform: scale(1.12);
    }
  }
`;

const SkillCard = ({ cat }) => {
  const cardRef = useRef(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <CategoryCard
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(380px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(0, 0, 0, 0.028), transparent 70%), #FFFFFF`,
      }}
    >
      <CategoryHeader>
        <CategoryTitle>{cat.category}</CategoryTitle>
      </CategoryHeader>
      <TagList>
        {cat.items.map((skill, sIdx) => {
          const { Icon, color } = getSkillDetails(skill);
          return (
            <SkillBadge key={sIdx} $color={color}>
              <span className="icon-holder">
                <Icon />
              </span>
              <span>{skill}</span>
            </SkillBadge>
          );
        })}
      </TagList>
    </CategoryCard>
  );
};

const Skills = () => {
  return (
    <Section id="skills">
      <HeaderRow>
        <HeaderBlock>
          <SectionTag>Technical Stack</SectionTag>
          <SectionTitle>Skills &amp; Technologies</SectionTitle>
          <SectionDesc>Production toolset spanning full-stack web, cloud, and distributed architectures.</SectionDesc>
        </HeaderBlock>
      </HeaderRow>

      <Grid>
        {skills.map((cat, idx) => (
          <SkillCard key={idx} cat={cat} />
        ))}
      </Grid>
    </Section>
  );
};

export default Skills;