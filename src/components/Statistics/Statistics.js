import React, { Component } from 'react';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

class Statistics extends Component {
  static defaultProp = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };
  render() {
    const entries = Object.entries(this.props);
    return (
      <div className={style.Statistics}>
        {entries.map(([key, value]) => (
          <p key={key}>
            <span>
              {key === 'positivePercentage' ? 'Positive feedback' : key} :{' '}
            </span>
            <span>
              {Math.round(value)}
              {key === 'positivePercentage' && '%'}
            </span>
          </p>
        ))}
      </div>
    );
  }
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
