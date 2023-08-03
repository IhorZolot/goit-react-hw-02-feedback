import React from 'react';
import PropTypes from 'prop-types';

import { FeedbackButton } from './FeedbackPeople.Styled';

export const Section = ({ title, children }) => {
  return (
    <FeedbackButton>
      <h2>{title}</h2>
      {children}
    </FeedbackButton>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};