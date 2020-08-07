import React from 'react';
import './Chat.css';
import { user, message } from '../../types';
import { Message } from '../Message/Message';
import { AddMessageForm } from '../AddMessageForm/AddMessageForm';

type ChatProps = {
  messageList: {
    users: user [],
    messages: message []
  },
  addMessage: (message: string) => void,
  deleteMessage: (idMessage: string) => void,
  currentUser: string
};

export const Chat:React.FC<ChatProps> = ({ messageList, addMessage, currentUser, deleteMessage }) => {

  return (
    <div className="Chat">
      <div className="Chat__list">
        {messageList?.messages?.map(message => <Message message={ message } key={message.id} currentUser={ currentUser } deleteMessage={ deleteMessage } />)}
      </div>
      <AddMessageForm addMessage={ addMessage } />
    </div>
  );
 
};