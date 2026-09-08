import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { getSkillDetails } from '../../utils/skillIcons.jsx';
import { renderWithCodeTags } from '../../utils/formatText.jsx';

const Card = styled.div`
  width: 100%;
  background: #FFFFFF;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px -2px rgba(0, 0, 0, 0.02);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  position: relative;

  &:hover {
    border-color: rgba(0, 0, 0, 0.35);
    box-shadow: 0 12px 28px -6px rgba(0, 0, 0, 0.09), 0 4px 12px -2px rgba(0, 0, 0, 0.04);
    transform: translateY(-2px);
  }

  @media (max-width: 640px) {
    padding: 18px;
    gap: 14px;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const CompanyBlock = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`;

const CompanyInitial = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 9px;
  background: #18181B;
  color: #FAFAFA;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.font_mono};
  font-weight: 750;
  font-size: 15px;
  flex-shrink: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
`;

const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Role = styled.h3`
  font-size: 16.5px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.015em;
`;

const CompanyLine = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 13.5px;
`;

const Company = styled.span`
  font-weight: 550;
  color: ${({ theme }) => theme.text_secondary};
`;

const SubCompany = styled.span`
  color: ${({ theme }) => theme.text_muted};
  font-size: 12.5px;
`;

const MetaBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  white-space: nowrap;

  @media (max-width: 640px) {
    align-items: flex-start;
  }
`;

const DateBadge = styled.span`
  font-family: ${({ theme }) => theme.font_mono};
  font-size: 11.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.bgSubtle};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 3px 8px;
  border-radius: 6px;
`;

const LocationText = styled.span`
  font-size: 11.5px;
  color: ${({ theme }) => theme.text_muted};
`;

const PointsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding-left: 0;
  margin: 0;
  list-style: none;
`;

const PointItem = styled.li`
  font-size: 13.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  position: relative;
  padding-left: 18px;

  &::before {
    content: '•';
    position: absolute;
    left: 2px;
    color: #71717A;
    font-size: 14px;
  }

  code {
    font-family: ${({ theme }) => theme.font_mono};
    font-size: 12px;
    background: #F4F4F5;
    color: #09090B;
    padding: 1.5px 6px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    font-weight: 550;
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.borderSubtle};
`;

const SkillTag = styled.span`
  font-size: 11.5px;
  font-weight: 500;
  color: #3F3F46;
  background: #FAFAFA;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 3px 8px;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: all 0.16s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: default;

  .mini-icon {
    font-size: 12px;
    display: inline-flex;
    align-items: center;
    color: ${({ $color }) => $color || '#71717A'};
  }

  &:hover {
    color: #09090B;
    background: ${({ $bg }) => $bg || '#FFFFFF'};
    border-color: ${({ $color }) => ($color ? `${$color}66` : 'rgba(0, 0, 0, 0.2)')};
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  }
`;

const ExperienceCard = ({ experience }) => {
  const cardRef = useRef(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setSpotlightPos((prev) => ({ ...prev, opacity: 0 }));
  };

  const initial = experience.company ? experience.company.charAt(0) : 'E';

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: `radial-gradient(500px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(0, 0, 0, 0.025), transparent 70%), #FFFFFF`,
      }}
    >
      <HeaderRow>
        <CompanyBlock>
          <CompanyInitial>{initial}</CompanyInitial>
          <TitleInfo>
            <Role>{experience.role}</Role>
            <CompanyLine>
              <Company>{experience.company}</Company>
              {experience.subCompany && <SubCompany>({experience.subCompany})</SubCompany>}
            </CompanyLine>
          </TitleInfo>
        </CompanyBlock>

        <MetaBlock>
          <DateBadge>{experience.date}</DateBadge>
          {experience.location && <LocationText>{experience.location}</LocationText>}
        </MetaBlock>
      </HeaderRow>

      {experience.points && (
        <PointsList>
          {experience.points.map((point, index) => (
            <PointItem key={index}>{renderWithCodeTags(point)}</PointItem>
          ))}
        </PointsList>
      )}

      {experience.skills && (
        <SkillsWrapper>
          {experience.skills.map((skill, index) => {
            const { Icon, color, bg } = getSkillDetails(skill);
            return (
              <SkillTag key={index} $color={color} $bg={bg}>
                <span className="mini-icon">
                  <Icon />
                </span>
                <span>{skill}</span>
              </SkillTag>
            );
          })}
        </SkillsWrapper>
      )}
    </Card>
  );
};

export default ExperienceCard;