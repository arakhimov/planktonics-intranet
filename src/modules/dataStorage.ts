import { chatListItem, messageList } from '../types';

interface DataStorageProps  {
  chatList: chatListItem [];
  messageList: messageList;
};

export class DataStorage implements DataStorageProps {
  
  chatList: chatListItem [];
  messageList: messageList;

  constructor(chatList: chatListItem[], messageList: messageList) {
    this.chatList = chatList;
    this.messageList = messageList;
  }

  setStorage() {
    localStorage.chatList = JSON.stringify(this.chatList);
    localStorage.messageList = JSON.stringify(this.messageList);
  }

  getChatList() {
    return JSON.parse(localStorage.chatList);
  }

  getMessageList() {
    return JSON.parse(localStorage.messageList);
  }
};