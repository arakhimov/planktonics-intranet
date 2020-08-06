import React, { Component } from 'react';
import './Chat.css';
import { user, message } from '../../types';
import { Message } from '../Message/Message';
import { AddMessageForm } from '../AddMessageForm/AddMessageForm';

type ChatProps = {
  messageList: {
    users: user [],
    messages: message []
  }
};

export class Chat extends Component<ChatProps> {

  render() {
    const messageList = this.props.messageList;
    return (
      <div className="Chat">
        <div className="Chat__list">
          {messageList.messages?.map(message => <Message message={ message } key={message.id} />)}
        </div>
        <AddMessageForm />
      </div>
    );
  }
 
};