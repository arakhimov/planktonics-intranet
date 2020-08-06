import React, { Component } from 'react';
import './Messanger.css';
import { RouteComponentProps, Route } from 'react-router-dom';
import { ChatList } from '../ChatList/ChatList';
import { Chat } from '../Chat/Chat';
import { initialChatList } from '../../data/initilalChatList';
import { initialMessageList} from '../../data/initialMessageList';
import {DataStorage} from '../../modules/dataStorage';
import { user, message } from '../../types';

// сохраняем исходные данные в локальном хранилище
const dataStorage = new DataStorage(initialChatList, initialMessageList);
dataStorage.setStorage();

type stateProps = {
  messageList: { users: user [], messages: message [] },
};

export class Messanger extends Component<RouteComponentProps>  {

  state: stateProps = {
    messageList: {users: [], messages: []}
  };


  setMessageList = (name: string) => {
    // список текущих сообщений выбранного чата получаем исходя из значения history.location, которое измеется при выборе чата
    // const messagesCurrentChat = this.props.history.location.pathname.replace(/\/chats\/(.*)/, '$1');
    this.setState({ messageList: dataStorage.getMessageList()[name] });
    console.log(name);
    console.log(this.state);
  }

  render() {
    // console.log(this);
    // список текущих сообщений выбранного чата получаем исходя из значения history.location, которое измеется при выборе чата
    // const messagesCurrentChat = this.props.history.location.pathname.replace(/\/chats\/(.*)/, '$1');
    return (
      <div className="Messanger">
        <header className="Messanger__header">
          <h1 className="Messanger__title">Planktonics Intranet</h1>
          <h2 className="Messanger__user">asd</h2>
        </header>
        <main className="Messanger__main">
          <ChatList {...this.props} chats={ dataStorage.getChatList() } getSelectChatId={ this.setMessageList } />
          <Route path="/chats">
            {/* {this.setMessageList()} */}
            <Chat messageList={ this.state.messageList }/>
            {/* <Chat messageList={ dataStorage.getMessageList()[messagesCurrentChat] }/> */}
          </Route>
        </main>
        <footer className="Messanger__footer">
          <h2 className="Messanger__author">&copy;arakhimov</h2>
        </footer>
      </div>);
  }
};