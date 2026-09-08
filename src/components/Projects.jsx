import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from './Cards/ProjectCard.jsx';
import { projects } from '../data/constants.js';

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

const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  margin-bottom: 24px;
`;

const FilterGroup = styled.div`
  display: flex;
  gap: 6px;
  background: #FFFFFF;
  padding: 3px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow_sm};
`;

const FilterButton = styled.button`
  font-size: 12px;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 6px;
  border: none;
  background: ${({ $active }) => ($active ? '#18181B' : 'transparent')};
  color: ${({ $active }) => ($active ? '#FAFAFA' : '#71717A')};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: all 0.15s ease;

  span {
    font-family: ${({ theme }) => theme.font_mono};
    font-size: 10.5px;
    opacity: ${({ $active }) => ($active ? '0.8' : '0.6')};
  }

  &:hover {
    color: ${({ $active }) => ($active ? '#FAFAFA' : '#18181B')};
  }
`;

const UniformGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((item) => item.category.toLowerCase() === filter.toLowerCase());

  const getCount = (cat) => {
    if (cat === 'All') return projects.length;
    return projects.filter((p) => p.category.toLowerCase() === cat.toLowerCase()).length;
  };

  return (
    <Section id="projects">
      <HeaderRow>
        <HeaderBlock>
          <SectionTag>Selected Works</SectionTag>
          <SectionTitle>Technical Projects</SectionTitle>
          <SectionDesc>
            Full-stack systems and user interfaces built with React, Node.js, and serverless AWS.
          </SectionDesc>
        </HeaderBlock>
      </HeaderRow>

      <ControlsRow>
        <FilterGroup>
          {['All', 'Full Stack', 'Frontend'].map((category) => (
            <FilterButton
              key={category}
              $active={filter === category}
              onClick={() => setFilter(category)}
            >
              {category} <span>({getCount(category)})</span>
            </FilterButton>
          ))}
        </FilterGroup>
      </ControlsRow>

      <UniformGrid>
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id || project.title}
            project={project}
            index={idx}
          />
        ))}
      </UniformGrid>
    </Section>
  );
};

export default Projects;
