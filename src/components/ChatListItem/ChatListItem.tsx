import React from 'react';
import './ChatListItem.css';
import { chatListItem } from '../../types';
import { RouteComponentProps } from 'react-router-dom';

type ChatListItemProps = {
  chat: chatListItem,
  getSelectChatId: (chatName: string) => void
};


export const ChatListItem:React.FC<ChatListItemProps & RouteComponentProps> = ({ chat, history, getSelectChatId }) => {

  const handleClick = (chatName: string) => {
    history.push(`/chats/${chatName}`);
    getSelectChatId(chatName);
  }

  return (
    <div onClick={ () => handleClick(chat.name) } className="ChatListItem">
      <img src={ chat.imageUrl } alt="" className="ChatListItem__image"/>
      <div className="ChatListItem__description">
        <div className="ChatListItem__wrapper">
          <h3 className="ChatListItem__name">{ chat.name }</h3>
          <time className="ChatListItem__date">{ chat.date }</time>
        </div>
        <p className="ChatListItem__text">{chat.lastMessageText}</p>
      </div>
    </div>
  );
};