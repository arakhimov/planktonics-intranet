import React from 'react';
import './Message.css';
import { message } from '../../types';
import { DeleteIcon } from '../DeleteIcon/DeleteIcon';
import { translateDate, textOptions, messageText } from '../../utils/utils';

type MessageProps = {
  message: message, 
  currentUser: string,
  deleteMessage: (idMessage: string) => void,
};

export const Message: React.FC<MessageProps> = ({ message, currentUser, deleteMessage }) => {

  // удаление добавленных сообщений
  const handleClickDelete = (event: React.MouseEvent<HTMLElement>): void => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('DeleteIcon')) {
      deleteMessage(message.id);
    }
  }

  return (
    <div>
      <div onClick={ handleClickDelete } className="Message">
        <header className="Message__header">
          <h3 className="Message__author">{message.author}</h3>
          {message.author === currentUser ? <DeleteIcon /> : null }
        </header>
        <p style={ textOptions(message.text) } className="Message__text">{messageText(message.text)}
          <time className="Message__date">{translateDate(message.date)}</time>
        </p>
      </div>
      <br />
    </div>
  );
};