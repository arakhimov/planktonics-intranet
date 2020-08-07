import { chatListItem, messageList, message, user } from '../types';

interface DataStorageProps  {
  chatList: chatListItem [];
  messageList: messageList;
  nameActiveChat: string;
  currentUser: string;
};

export class DataStorage implements DataStorageProps {
  
  chatList: chatListItem [];
  messageList: messageList;
  nameActiveChat: string;
  currentUser: string;

  constructor(chatList: chatListItem[], messageList: messageList) {
    this.chatList = chatList;
    this.messageList = messageList;
    this.nameActiveChat = localStorage.nameActiveChat || chatList[0].name;
    this.currentUser = localStorage.currentUser || '';
  }

  // инициализация localStorage - сохраняем список чатов, сообщения всех чатов и имя активного чата для добавления сообщений
  initStorage() {
    if (!localStorage.chatList) {
      localStorage.chatList = JSON.stringify(this.chatList);
      localStorage.messageList = JSON.stringify(this.messageList);
      localStorage.nameActiveChat = this.nameActiveChat;
    }
  }

  getChatList() {
    return JSON.parse(localStorage.chatList);
  }

  getMessageList() {
    return JSON.parse(localStorage.messageList);
  }

  setNameActiveChat(name: string) {
    this.nameActiveChat = name;
    localStorage.nameActiveChat = this.nameActiveChat;
  }

  getNameActiveChat() {
    return localStorage.nameActiveChat;
  }

  setCurrentUser(user: string): void {
    this.currentUser = user;
    localStorage.currentUser = this.currentUser;
  }

  getCurrentUser(): string {
    return localStorage.currentUser;
  }

  // обновляем массив сообщений текущего чата после отправки сообщения
  setStorage(nameChat: string, messageList: { users: user [], messages: message [] }): void {
    const temp = this.getMessageList();
    temp[nameChat] = messageList;
    this.messageList = temp;
    this.nameActiveChat = nameChat;
    localStorage.messageList = JSON.stringify(this.messageList);
  }

  // обновляем массив пользователей - добавляем имя пользователя, под которым был совершен вход в систему
  addCurrentUser(user: string): void {
    const temp: messageList = JSON.parse(localStorage.messageList);
    for (let messagesListItem in temp) {
      temp[messagesListItem].users.push({
        login: user,
        avatarUrl: ''
      });
    }
    this.messageList = temp;
    localStorage.messageList = JSON.stringify(this.messageList);
  }
};