import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';

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
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handlerOnClick}
          />
        </Section>
      </>
    );
  }
}
