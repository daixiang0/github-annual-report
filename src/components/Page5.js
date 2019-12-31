import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Moon } from '../icon/moon.svg';

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
        {this.props.info.latestDay.date !== '' && this.props.page === 5 ? (
          <div className="page">
          <Moon className="mb20"/>
            <p style={styles.fadeInUp1s} className="stress">
              At{this.props.info.latestDay.date.getMonth() + 1}.{this.props.info.latestDay.date.getDate()}
            </p>
            <p style={styles.fadeInUp1s}>You sleep very late</p>
            <p style={styles.fadeInUp1_5s} className="mb20">
              <span className="stress">
                At{this.props.info.latestDay.date.getHours()}:{this.props.info.latestDay.date.getMinutes()}
              </span>
              You still play with codes
            </p>
            <p style={styles.fadeInUp2s}>At that moment</p>
            <p style={styles.fadeInUp2s}>
              You commited to
              <span className="stress">{this.props.info.latestDay.repo}</span>
              repo
            </p>
          </div>
        ) : this.props.page === 5 ? (
          <div className="page">
          <Moon className="mb20"/>
            <p style={styles.fadeInUp1s}>Every day</p>
            <p style={styles.fadeInUp1s}>You have good sleep</p>
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
