import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Talk } from '../icon/talk.svg';

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
        {this.props.page === 8 ? (
          <div className="page">
          <Talk className="mb20"/>
            <p style={styles.fadeInUp1s}>As a member of the community</p>
            <p style={styles.fadeInUp1_5s}>In 2019 </p>
            {this.props.info.issueNums !== 0 ? (
              <p style={styles.fadeInUp2s}>
                You join <span className="stress">{this.props.info.issueNums}</span> issue
              </p>
            ) : (
              <p style={styles.fadeInUp2s}>You observe in secret</p>
            )}
            {this.props.info.starNums !== 0 ? (
              <p style={styles.fadeInUp2_5s}>
                star <span className="stress">{this.props.info.starNums}</span> repos
              </p>
            ) : (
              <p style={styles.fadeInUp2_5s}>no repos wish your star</p>
            )}
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
