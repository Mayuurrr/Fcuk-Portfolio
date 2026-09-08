import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { getSkillDetails } from '../../utils/skillIcons.jsx';
import { renderWithCodeTags } from '../../utils/formatText.jsx';

const Card = styled.div`
  width: 100%;
  background: #FFFFFF;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px -2px rgba(0, 0, 0, 0.02);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  position: relative;

  &:hover {
    border-color: rgba(0, 0, 0, 0.35);
    box-shadow: 0 12px 28px -6px rgba(0, 0, 0, 0.09), 0 4px 12px -2px rgba(0, 0, 0, 0.04);
    transform: translateY(-3px);
  }
`;

const ImageBanner = styled.div`
  width: 100%;
  height: 190px;
  background: #F4F4F5;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  overflow: hidden;
  position: relative;

  @media (max-width: 640px) {
    height: 160px;
  }
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);

  ${Card}:hover & {
    transform: scale(1.035);
  }
`;


const Content = styled.div`
  padding: 22px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;

  @media (max-width: 640px) {
    padding: 16px;
    gap: 10px;
  }
`;

const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CategoryBadge = styled.span`
  font-family: ${({ theme }) => theme.font_mono};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #52525B;
  background: #F4F4F5;
  padding: 3px 8px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

const DateText = styled.span`
  font-family: ${({ theme }) => theme.font_mono};
  font-size: 11.5px;
  color: ${({ theme }) => theme.text_muted};
  font-weight: 500;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Title = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.02em;
  line-height: 1.3;
`;

const Subtitle = styled.div`
  font-size: 12.5px;
  font-weight: 450;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.p`
  font-size: 13.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
`;

const PointsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 0;
  margin: 0;
  list-style: none;
  padding-top: 4px;
`;

const PointItem = styled.li`
  font-size: 12.5px;
  line-height: 1.55;
  color: ${({ theme }) => theme.text_secondary};
  position: relative;
  padding-left: 14px;

  &::before {
    content: '•';
    position: absolute;
    left: 1px;
    color: #71717A;
    font-size: 13px;
  }

  code {
    font-family: ${({ theme }) => theme.font_mono};
    font-size: 11.5px;
    background: #F4F4F5;
    color: #09090B;
    padding: 1px 5px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    font-weight: 550;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.borderSubtle};
`;

const Tag = styled.span`
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

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.borderSubtle};
  margin-top: 4px;
`;

const ActionLink = styled.a`
  font-size: 12.5px;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  background: #FFFFFF;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow_sm};
  padding: 6px 13px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);

  .arrow {
    display: inline-block;
    transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover {
    background: #18181B;
    color: #FAFAFA;
    border-color: #18181B;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.14);

    .arrow {
      transform: translate(2px, -2px);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const ProjectCard = ({ project, index = 0 }) => {
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

  const indexStr = String(index + 1).padStart(2, '0');

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: `radial-gradient(420px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(0, 0, 0, 0.032), transparent 70%), #FFFFFF`,
      }}
    >
      {project.image && (
        <ImageBanner>
          <PreviewImage src={project.image} alt={project.title} loading="lazy" />
        </ImageBanner>
      )}

      <Content>
        <MetaRow>
          <CategoryBadge>{project.category || 'Engineering'}</CategoryBadge>
          <DateText>{project.date}</DateText>
        </MetaRow>

        <TitleBlock>
          <Title>{project.title}</Title>
          {project.subtitle && <Subtitle>{project.subtitle}</Subtitle>}
        </TitleBlock>

        <Description>{project.description}</Description>

        {project.points && (
          <PointsList>
            {project.points.slice(0, 2).map((pt, i) => (
              <PointItem key={i}>{renderWithCodeTags(pt)}</PointItem>
            ))}
          </PointsList>
        )}

        <TagsContainer>
          {project.tags?.slice(0, 6).map((tag, i) => {
            const { Icon, color, bg } = getSkillDetails(tag);
            return (
              <Tag key={i} $color={color} $bg={bg}>
                <span className="mini-icon">
                  <Icon />
                </span>
                <span>{tag}</span>
              </Tag>
            );
          })}
        </TagsContainer>

        <ActionRow>
          {project.webapp && (
            <ActionLink href={project.webapp} target="_blank" rel="noopener noreferrer">
              Live Demo <span className="arrow">↗</span>
            </ActionLink>
          )}
          {project.github && (
            <ActionLink href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub <span className="arrow">↗</span>
            </ActionLink>
          )}
        </ActionRow>
      </Content>
    </Card>
  );
};

export default ProjectCard;

