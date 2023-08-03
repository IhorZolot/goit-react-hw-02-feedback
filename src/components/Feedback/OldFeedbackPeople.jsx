import React from 'react';

import {
  Container,
  FeedbackButton,
  Button,
  ContainerStatistic,
  StatValue,
} from './FeedbackPeople.Styled';

export class FeedbackPeople extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return  good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();


    return (
      <Container>
        <FeedbackButton>
          <h2>Please leave Feedback</h2>
          <Button onClick={() => this.handleFeedback('good')}>Good</Button>
          <Button onClick={() => this.handleFeedback('neutral')}>
            Neutral
          </Button>
          <Button onClick={() => this.handleFeedback('bad')}>Bad</Button>
        </FeedbackButton>
        <ContainerStatistic>
          <h2>Statistic</h2>
          <StatValue>Good: {good}</StatValue>
          <StatValue>Neutral: {neutral}</StatValue>
          <StatValue>Bad: {bad}</StatValue>
          <StatValue>Total:{totalFeedback}</StatValue>
          <StatValue>Positive feedback:{positiveFeedbackPercentage}%</StatValue>
        </ContainerStatistic>
      </Container>
    );
  }
}
