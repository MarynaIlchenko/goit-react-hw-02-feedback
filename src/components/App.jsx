import React, { Component } from 'react';
import { Container } from './Container';
import Section from './Section';
import FeedbackOptions from './Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handlerOnClick = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handlerOnClick}
          />
        </Section>
      </Container>
    );
  }
}
