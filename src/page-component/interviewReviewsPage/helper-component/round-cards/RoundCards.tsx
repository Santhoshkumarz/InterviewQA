import React, { useState } from "react";
import {
  ReviewCard,
  ProfileImage,
  Details,
  Title,
  DateText,
  CutOffText,
  ExpandButton,
  CardHeader,
  CardContent,
} from "./RoundCards.styled";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({
  profileImg,
  name,
  company,
  round,
  sharedDate,
  intro,
  project,
  tasks,
  additionalContent,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const renderAdditionalContent = () => {
    if (expanded) {
      return additionalContent;
    } else {
      return additionalContent.length > 100
        ? `${additionalContent.slice(0, 100)}...`
        : additionalContent;
    }
  };

  return (
    <ReviewCard>
      <CardHeader>
        <ProfileImage>
          <img src={profileImg} alt={name} />
        </ProfileImage>
        <Details>
          <Title>{`${name} | ${company} | ${round}`}</Title>
          <DateText>Shared at {sharedDate}</DateText>
        </Details>
      </CardHeader>
      <CardContent>
        <CutOffText>
          <ol>
            <li>{intro}</li>
            <li>{project}</li>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ol>
          {renderAdditionalContent()}
        </CutOffText>
        {additionalContent.length > 100 && (
          <ExpandButton type="button" onClick={toggleExpanded}>
            {expanded ? "Show Less" : "Show More"}
          </ExpandButton>
        )}
      </CardContent>
    </ReviewCard>
  );
};

export default Card;
