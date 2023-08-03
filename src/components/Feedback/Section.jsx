import React from 'react';
import { FeedbackButton } from './FeedbackPeople.Styled';

export const Section = ({ title, children }) => {
  return (
    <FeedbackButton>
      <h2>{title}</h2>
      {children}
    </FeedbackButton>
  );
};

