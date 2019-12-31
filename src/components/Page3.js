import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Line } from '../icon/line.svg';

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
        {this.props.page === 3 ? (
          <div className="page">
            <Line className="mb20"/>
            <p style={styles.fadeInUp1s}>Meanwhile</p>
            <p style={styles.fadeInUp1s} className="mb20">
              With your hits
            </p>
            {this.props.info.addLines !== 0 ? (
              <p style={styles.fadeInUp2s}>
                add
                <span className="stress">{this.props.info.addLines}</span>
                lines
              </p>
            ) : (
              <p style={styles.fadeInUp2s}>no added lines</p>
            )}
            {this.props.info.addLines !== 0 ? (
              <p style={styles.fadeInUp2s}>
                delete
                <span className="stress">{this.props.info.deleteLines}</span>
                lines
              </p>
            ) : (
              <p style={styles.fadeInUp2s}>no deleted lines</p>
            )}
            {this.props.info.addLines !== 0 ? (
              <p style={styles.fadeInUp2s}>
                in all, you change
                <span className="stress">{this.props.info.totalLines}</span>
                lines
              </p>
            ) : (
              <p style={styles.fadeInUp2s}>no changes</p>
            )}
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page2;
