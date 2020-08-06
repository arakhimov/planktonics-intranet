import React from 'react';
import './ChatList.css';
import { ChatListItem } from '../ChatListItem/ChatListItem';
import { chatListItem } from '../../types';
import { RouteComponentProps } from 'react-router-dom';

type ChatListProps = {
  chats: chatListItem [],
  getSelectChatId: (chatName: string) => void
};

export const ChatList:React.FC<ChatListProps & RouteComponentProps> = ( props ) => {
  return (
    <div className="ChatList">
      {props.chats.map(chat => <ChatListItem chat={ chat } key={ chat.id } { ...props } getSelectChatId={ props.getSelectChatId } />)}
    </div>
  );
};