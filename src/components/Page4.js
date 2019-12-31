import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Day } from '../icon/day.svg';

class Page1 extends Component {
  render() {
    const styles = {
      fadeInUp1s: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
      },
      fadeInUp1_5s: {
        animation: 'x 1.5s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
      },
      fadeInUp2s: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
      },
      fadeInUp2_5s: {
        animation: 'x 2.5s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
      },
      fadeInUp3s: {
        animation: 'x 3s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
      },
    };
    return (
      <StyleRoot>
        {this.props.info.specialDay.date !== '' && this.props.page === 4 ? (
          <div className="page">
            <Day className="mb20"/>
            <p style={styles.fadeInUp1s} className="stress">
              {this.props.info.specialDay.date.getMonth() + 1}月{this.props.info.specialDay.date.getDate()}日
            </p>
            <p style={styles.fadeInUp1_5s} className="mb20">
              may be a special day
            </p>
            <p style={styles.fadeInUp2s}>at this day</p>
            <p style={styles.fadeInUp2_5s}>
              you commited to
              <span className="stress">{this.props.info.specialDay.repo}</span>
              about
            </p>
            <p style={styles.fadeInUp3s}>
              <span className="stress">{this.props.info.specialDay.count}</span>
              times
            </p>
          </div>
        ) : this.props.page === 4 ? (
          <div className="page">
          <Day/>
            <p style={styles.fadeInUp1s}>You do not have special day</p>
            <p style={styles.fadeInUp1s}>Every day is special day</p>
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
