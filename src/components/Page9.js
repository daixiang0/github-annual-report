import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Language } from '../icon/language.svg';

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
        {this.props.info.forget.language !== '' && this.props.page === 9 ? (
          <div className="page">
          <Language className="mb20"/>
            <p style={styles.fadeInUp1s}>Do you remember</p>
            <p style={styles.fadeInUp1_5s}>the favorite language </p>
            <p style={styles.fadeInUp2s}>
              <span className="stress">{this.props.info.forget.language}</span> in the past?
            </p>
            <p style={styles.fadeInUp3s}>Seems you forget it recently</p>
          </div>
        ) : this.props.page === 9 ? (
          <div className="page">
          <Language className="mb20"/>
            <p style={styles.fadeInUp1s}>You still love your favorite without change</p>
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
