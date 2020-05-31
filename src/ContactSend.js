import React, { Component } from 'react';
import './Contact.css';


class ContactSend extends Component {
  componentDidMount() {
    document.getElementById("content").style.marginBottom = '-101px';
  }

  render() {
    return (
      <React.Fragment>
        <div className="area">
          <div className="sendPadding">メッセージを送信しました！</div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactSend;