import React from 'react';
import PropTypes from 'prop-types';

import { ContainerStatistic, StatValue  } from './FeedbackPeople.Styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ContainerStatistic>
      <StatValue>Good: {good}</StatValue>
      <StatValue>Neutral: {neutral}</StatValue>
      <StatValue>Bad: {bad}</StatValue>
      <StatValue>Total: {total}</StatValue>
      <StatValue>Positive Percentage: {positivePercentage}%</StatValue>
    </ContainerStatistic>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};