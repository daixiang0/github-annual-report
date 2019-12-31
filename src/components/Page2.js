import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Repo } from '../icon/repo.svg';

class Page2 extends Component {
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
        {this.props.page === 2 ? (
          <div className="page">
            <Repo className="mb20"/>
            <p style={styles.fadeInUp1s}>In this year</p>
            <p style={styles.fadeInUp1s} className="mb20">
              You have
            </p>
            {this.props.info.languageNums !== 0 ? (
              <p style={styles.fadeInUp2s}>
                used
                <span className="stress">{this.props.info.languageNums}</span>
                programming languages
              </p>
            ) : (
              <p style={styles.fadeInUp2s}>hit keyboard</p>
            )}
            {this.props.info.repoNums !== 0 ? (
              <p style={styles.fadeInUp2s}>
                committed to
                <span className="stress">{this.props.info.repoNums}</span>
                repos onto master branch
              </p>
            ) : (
              <p style={styles.fadeInUp2s}>repo commit</p>
            )}
            {this.props.info.commitNums !== 0 ? (
              <p style={styles.fadeInUp2s}>
                committed
                <span className="stress">{this.props.info.commitNums}</span>
                times
              </p>
            ) : (
              <p style={styles.fadeInUp2s}>commit num</p>
            )}
            {this.props.info.eventNums !== 0 ? (
              <p style={styles.fadeInUp2s}>
                active for
                <span className="stress">{this.props.info.eventNums}</span>
                days
              </p>
            ) : (
              <p style={styles.fadeInUp2s}>active</p>
            )}
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page2;
