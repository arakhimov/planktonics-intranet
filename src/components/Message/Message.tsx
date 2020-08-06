import React from 'react';
import './Message.css';
import { message } from '../../types';
import { months } from '../../constants/constants';

type MessageProps = {
  message: message
};

// получение даты из timestamp и изменение формата даты
function translateDate(timestamp: number): string {
  const messageDate = new Date(timestamp);
  const day = messageDate.getDate();
  const month = months[messageDate.getMonth()];
  const year = messageDate.getFullYear();
  return `${day} ${month} ${year}`;
}

export const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div className="Message">
      <h3 className="Message__author">{message.author}</h3>
      <p className="Message__text">{message.text}
        <time className="Message__date">{translateDate(message.date)}</time>
      </p>
    </div>
  );
};