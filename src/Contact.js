import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Contact.css';


var request = require('request');

const postSlack = async (name, mail, message) => {

  const options = {
    url: 'https://xxx.xxx',
    method: 'POST',
    json: true,
    form: {
      mail: mail,
      name: name,
      message: message
    }
  }
  request(options, function (error, response, body) {
    if (error) {
      console.error(error)
    }
  })
}

class Contact extends Component {
  componentDidMount() {
    document.getElementById("content").style.marginBottom = '-101px';
  }
  constructor(props) {
    super(props);
    this.state = { value: '', mail: '', message: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.isDisableSubmit = this.isDisableSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleChangeMail(event) {
    this.setState({ mail: event.target.value });
  }

  handleChangeMessage(event) {
    this.setState({ message: event.target.value });
  }

  handleToSendPage = (event) => {
    postSlack(this.state.value, this.state.mail, this.state.message)
    this.props.history.push('/contactsend')
    event.preventDefault();

  }

  isDisableSubmit() {
    const validate = (this.state.mail === '' && this.state.message === '' && this.state.value === '') || (this.state.message == '')
    return validate
  }

  render() {
    return (
      <React.Fragment>
        <div className="commentContainer">
          <div className="commentArea">
          <div className="commentPadding"><h1>Contact</h1></div>
              <label>
                <div className="commentSub">お名前</div>
                <div className="commentValue"><input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Ian Curtis' /><div></div></div>
              </label>
              <label>
                <div className="commentSub">メールアドレス</div>
                <div className="commentValue"><input type="text" value={this.state.mail} onChange={this.handleChangeMail} placeholder='xxx@yyy.zzz'/><div></div></div>
              </label>
              <label>
                <div className="commentSub">本文 <span className="required">※必須</span></div>
                <div className="commentTextArea"><textarea value={this.state.message} onChange={this.handleChangeMessage}/></div>
              </label>
              <div className="submitButton"><button disabled={ this.isDisableSubmit() } onClick={this.handleToSendPage} >送信</button></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Contact);