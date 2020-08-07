import React, { Component } from 'react';
import './Messanger.css';
import { RouteComponentProps, Route } from 'react-router-dom';
import { ChatList } from '../ChatList/ChatList';
import { Chat } from '../Chat/Chat';
import { initialChatList } from '../../data/initilalChatList'; //исходные данные чатов
import { initialMessageList} from '../../data/initialMessageList'; //исходные данные сообщений
import { DataStorage } from '../../modules/dataStorage'; // API localStorage
import { user, message } from '../../types'; //types
import { AutorizationForm } from '../AutorizationForm/AutorizationForm';

// сохраняем исходные данные в локальном хранилище
const dataStorage = new DataStorage(initialChatList, initialMessageList);
dataStorage.initStorage();

type stateProps = {
  messageList: { users: user [], messages: message [] },
  nameCurrentChat: string,
  currentUser: string
};

export class Messanger extends Component<RouteComponentProps>  {

  // список сообщений, отображаемых в чате получаем из state, который может быть изменен либо при выборе другого чата, 
  // либо после добавления сообщений
  state: stateProps = {
    messageList:  dataStorage.getMessageList()[dataStorage.getNameActiveChat()] || {users: [], messages: []},
    nameCurrentChat: dataStorage.getNameActiveChat() || '',
    currentUser: dataStorage.getCurrentUser() || ''
  };

  // функция передается компоненту ChatListItem - для изменения значения state - при выборе другого чата
  setMessageList = (name: string): void => {
    this.setState({ 
      messageList: dataStorage.getMessageList()[name],
      nameCurrentChat: name
    });
    dataStorage.setNameActiveChat(name);
  }

  // добавление сообщения в state и localStorage
  addNewMessage = (message: string): void => {
    const idNewMessage = (this.state.messageList.messages.length + 1).toString().padStart(4, '0');
    this.setState((prevState: stateProps) => ({
      messageList: {
        users: prevState.messageList.users,
        messages: prevState.messageList.messages.concat({
          date: (new Date()).getTime(), 
          author: this.state.currentUser, 
          text: message, 
          id: idNewMessage
        })
      }
    }), () => dataStorage.setStorage(this.state.nameCurrentChat, this.state.messageList));
  }

  // удаление сообщений, обновление localStorage
  deleteMessage = (idMessage: string): void => {
    this.setState((prevState: stateProps) => ({
      messageList: {
        users: prevState.messageList.users,
        messages: prevState.messageList.messages.filter(message => message.id !== idMessage)
      }
    }), () => dataStorage.setStorage(this.state.nameCurrentChat, this.state.messageList));
  }

  // сохранение текущего user после входа в систему во всех чатах в localStorage
  getcurrentUser = (user: string): void => {
    this.setState({currentUser: user});
    dataStorage.setCurrentUser(user);
    dataStorage.addCurrentUser(user);
  }

  render() {
    return (
      <div className="Messanger">
        <Route path="/auth"><AutorizationForm {...this.props} getCurrentUser={ this.getcurrentUser } /></Route>
        <Route path="/messenger">
          <header className="Messanger__header">
            <h1 className="Messanger__title">Planktonics Intranet</h1>
            <h2 className="Messanger__user">{this.state.currentUser}</h2>
          </header>
          <main className="Messanger__main">
            <ChatList {...this.props} chats={ dataStorage.getChatList() } getSelectChatId={ this.setMessageList } />
            <Route path="/messenger/chats">
              <Chat messageList={ this.state.messageList } 
                    addMessage={ this.addNewMessage }
                    deleteMessage={ this.deleteMessage } 
                    currentUser={ this.state.currentUser }/>
            </Route>
          </main>
          <footer className="Messanger__footer">
            <h2 className="Messanger__author">&copy;arakhimov</h2>
          </footer>
        </Route>
      </div>
    );
  }
};