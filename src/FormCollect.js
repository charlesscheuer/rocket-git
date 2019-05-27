import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Input from './FormViews/Input';
import Success from './FormViews/Success';
import Error from './FormViews/Error';

ReactGA.initialize('UA-133410946-2');

const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class FormCollect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ctrSub: '',
      submitted: false,
      label: 'Email address',
      count: 125,
      error: false,
      input: true
    };
  }

  componentDidMount() {
    fetch('https://sleepy-lake-80658.herokuapp.com/count', {
      method: 'get',
      headers: { 'content-type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        if (data > 125) {
          this.setState({ count: data });
        } else {
          this.setState({ count: 125 });
        }
      });
  }

  goBackHandler = () => {
    fetch('https://sleepy-lake-80658.herokuapp.com/count', {
      method: 'get',
      headers: { 'content-type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        if (data > 125) {
          this.setState({ count: data });
        } else {
          const { count } = this.state;
          this.setState({ count: count + 1 });
        }
      })
      .then(this.setState({ submitted: false, error: false, input: true }));
  };

  onSubmitEmail = () => {
    const { ctrSub } = this.state;
    if (regexp.test(ctrSub) && ctrSub.length > 1) {
      fetch('https://sleepy-lake-80658.herokuapp.com/register', {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email: ctrSub
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data === 'success') {
            this.setState({ submitted: true, input: false });
          } else {
            ReactGA.event({
              category: 'FormSubmission',
              action: 'user submitted form with an error',
              storage: 'none'
            });
            this.setState({ submitted: false, input: false, error: true });
          }
        })
        .then(() => {
          ReactGA.event({
            category: 'FormSubmission',
            action: 'user submitted form succesfully',
            storage: 'none'
          });
        });
    } else {
      this.setState({
        label: 'Invalid email address, try again'
      });
    }
  };

  onEmailChange = event => {
    this.setState({ ctrSub: event.target.value });
  };

  render() {
    const { submitted, count, label, error, input } = this.state;
    return (
      <div className="ctr">
        {submitted ? <Success goBack={this.goBackHandler} /> : null}
        {error ? <Error goBack={this.goBackHandler} /> : null}
        {input ? (
          <Input
            counter={count}
            label={label}
            emailChange={this.onEmailChange}
            submit={this.onSubmitEmail}
          />
        ) : null}
      </div>
    );
  }
}
