import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Prize } from '../icon/prize.svg';

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
        {this.props.info.mostLanguage.name !== '' && this.props.page === 10 ? (
          <div className="page">
          <Prize className="mb20"/>
            <p style={styles.fadeInUp1s}>
              Your top programming language of this year is<span className="stress">{this.props.info.mostLanguage.name}</span>
            </p>
            <p style={styles.fadeInUp1_5s}>In this year, </p>
            <p style={styles.fadeInUp2s}>
              you commit to <span className="stress">{this.props.info.mostLanguage.repoNums}</span>个{this.props.info.mostLanguage.name}
              repo
            </p>
            <p style={styles.fadeInUp2_5s}>
              for <span className="stress">{this.props.info.mostLanguage.commitNums}</span>times
            </p>
          </div>
        ) : this.props.page === 10 ? (
          <div className="page">
          <Prize className="mb20"/>
            <p style={styles.fadeInUp1s}></p>
            <p style={styles.fadeInUp1_5s}></p>
            <p style={styles.fadeInUp2s}>在你面前</p>
            <p style={styles.fadeInUp2_5s}>都已自惭形秽</p>
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
