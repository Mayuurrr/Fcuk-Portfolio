import React, { useState, useRef } from 'react';
import styled from 'styled-components';

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
  gap: 14px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const SchoolBlock = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`;

const SchoolInitial = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: #18181B;
  color: #FAFAFA;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.font_mono};
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
`;

const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const SchoolName = styled.h3`
  font-size: 16.5px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.015em;
`;

const Degree = styled.div`
  font-size: 13.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
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

const GradeBadge = styled.span`
  display: inline-block;
  font-size: 11.5px;
  font-weight: 550;
  color: ${({ theme }) => theme.text_primary};
  background: #FAFAFA;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 2px 7px;
  border-radius: 5px;
  width: fit-content;
  margin-top: 4px;
`;

const Description = styled.p`
  font-size: 13.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
`;

const Highlights = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.borderSubtle};
`;

const HighlightTag = styled.span`
  font-size: 11.5px;
  font-weight: 450;
  color: ${({ theme }) => theme.text_muted};
  background: #FAFAFA;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 3px 8px;
  border-radius: 5px;
  transition: all 0.16s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: default;

  &:hover {
    color: #FAFAFA;
    background: #18181B;
    border-color: #18181B;
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
  }
`;

const EducationCard = ({ education }) => {
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

  const initial = education.school ? education.school.charAt(0) : 'E';

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
        <SchoolBlock>
          <SchoolInitial>{initial}</SchoolInitial>
          <TitleInfo>
            <SchoolName>{education.school}</SchoolName>
            <Degree>{education.degree}</Degree>
            {education.grade && <GradeBadge>Grade: {education.grade}</GradeBadge>}
          </TitleInfo>
        </SchoolBlock>

        <MetaBlock>
          <DateBadge>{education.date}</DateBadge>
          {education.location && <LocationText>{education.location}</LocationText>}
        </MetaBlock>
      </HeaderRow>

      {education.desc && <Description>{education.desc}</Description>}

      {education.highlights && (
        <Highlights>
          {education.highlights.map((item, index) => (
            <HighlightTag key={index}>{item}</HighlightTag>
          ))}
        </Highlights>
      )}
    </Card>
  );
};

export default EducationCard;