import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Focus } from '../icon/focus.svg';


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
        {this.props.info.mostDay.repo !== '' && this.props.page === 6 ? (
          <div className="page">
          <Focus className="mb20"/>
            <p style={styles.fadeInUp1s}>In 2019</p>
            <p style={styles.fadeInUp1s}>
              You have committed to
              <span className="stress">{this.props.info.mostDay.repo}</span>
            </p>
            <p style={styles.fadeInUp1s} className="mb20">
              for <span className="stress">{this.props.info.mostDay.count}</span> days
            </p>
            <p style={styles.fadeInUp2s}>It is your favorite</p>
          </div>
        ) : this.props.page === 6 ? (
          <div className="page">
          <Focus className="mb20"/>
            <p style={styles.fadeInUp1s}>In 2019</p>
            <p style={styles.fadeInUp1_5s}>You do not have favorite repo</p>
            <p style={styles.fadeInUp2s}>Maybe imporve yourself in project management</p>
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
