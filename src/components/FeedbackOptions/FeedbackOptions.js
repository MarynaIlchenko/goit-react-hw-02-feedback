import React, { Component } from 'react';
import './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    const keys = Object.keys(options);
    return (
      <div className={style.Options}>
        {keys.map(item => (
          <button
            key={item}
            type="button"
            className={style.Btn}
            name={item}
            onCklick={() => onLeaveFeedback(item)}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
