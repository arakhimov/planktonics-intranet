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
    history.push(`/messenger/chats/${chatName}`);
    getSelectChatId(chatName);
  }

  // класс active для активного чата
  const classNameActiveChat = () => {
    return chat.name === history.location.pathname.replace(/\/messenger\/chats\/(.*)/, '$1') ? "ChatListItem ChatListItem_active" : "ChatListItem";
  }

  return (
    <div onClick={ () => handleClick(chat.name) } className={ classNameActiveChat() }>
      <img src={ chat.imageUrl } alt="" className="ChatListItem__image"/>
      {/* <div className="ChatListItem__description"> */}
        {/* <div className="ChatListItem__wrapper"> */}
          <h3 className="ChatListItem__name">{ chat.name }</h3>
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};