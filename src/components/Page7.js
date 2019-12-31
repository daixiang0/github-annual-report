import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Time } from '../icon/time.svg';

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
        {this.props.info.likePeriod.name !== '' && this.props.page === 7 ? (
          <div className="page">
          <Time className="mb20"/>
            <p style={styles.fadeInUp1s}>
              You love to commit at<span className="stress">{this.props.info.likePeriod.name}</span>
            </p>
            <p style={styles.fadeInUp1_5s}>
              Especially
              {this.props.info.likeWeekType.name === 'workday' ? 'busy' : 'quiet'}
              <span className="stress">{this.props.info.likeWeekType.name}</span>
            </p>
            <p style={styles.fadeInUp2s}>In 365 days</p>
            <p style={styles.fadeInUp2_5s}>
              Commit in <span className="stress">{this.props.info.likeWeekType.count}</span>days{this.props.info.likeWeekType.name}
            </p>
          </div>
        ) : this.props.page === 7 ? (
          <div className="page">
          <Time className="mb20"/>
            <p style={styles.fadeInUp1s}>Whatever busy work day</p>
            <p style={styles.fadeInUp1_5s}>Or quiet weekday</p>
            <p style={styles.fadeInUp2s}>You always commit</p>
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
