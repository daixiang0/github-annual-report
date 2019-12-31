import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import Button from 'antd/lib/button';
import Alert from 'antd/lib/alert';
import Modal from 'antd/lib/modal';
import { OWNER, REPO, USERNAME } from '../utils/constant';
import { queryParse } from '../utils/helper';

class Page1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      failed: false,
      saveSuccess: false,
    };
    this.issueNum = 1;
    const query = queryParse();
    if (localStorage.getItem(USERNAME) === query.username) {
      this.state.isSelf = true;
    } else {
      this.state.isSelf = false;
    }
  }

  showSaveSuccess = () => {
    this.setState({
      saveSuccess: true,
    });
  };

  handleShare = () => {
    const confirm = Modal.confirm;
    confirm({
      title: 'Do you sure that share your 2019?',
      content: 'Those info would be open in Github if confirm.',
      cancelText: 'cancel',
      okText: 'confirm',
      onOk: async () => {
        return this.props.octokit.issues
          .createComment({ owner: OWNER, repo: REPO, number: this.issueNum, body: JSON.stringify(this.props.info) })
          .then(() => {
            console.log('success');
            this.showSaveSuccess();
          })
          .catch(() => {
            this.setState({ failed: true });
          });
      },
      onCancel() {},
    });
  };

  handleUnsubscribe = () => {
    window.location.href = 'https://github.com/daixiang0/github-annual-report/issues/1';
  };

  handleBack = () => {
    window.location.href = '/';
  };

  handleCalc = () => {
    window.location.href = '/?isUpdate=true';
  };

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
        {this.props.page === 12 ? (
          <div className="page">
            {this.state.failed ? (
              <Alert message="Failed to get data, please retry with refresh" type="error" closable afterClose={this.onClose} />
            ) : null}
            {this.state.saveSuccess ? (
              <Alert
                className="saveSuccess"
                message="succeed in saving"
                description="click Unsubscribe button in issue to unsubscribe"
                type="success"
                banner
                closable
                showIcon
              />
            ) : null}
            <a
              style={styles.fadeInUp1s}
              className="mb5"
              href="https://github.com/daixiang0/github-annual-report"
            >
              GitHub repo, welcome to star!
            </a>
            {this.state.isSelf ? (
              <Button className="mb5" type="primary" onClick={this.handleCalc}>
               refresh to retry
              </Button>
            ) : (
              <Button className="mb5" type="primary" onClick={this.handleBack}>
                get your own report
              </Button>
            )}
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
