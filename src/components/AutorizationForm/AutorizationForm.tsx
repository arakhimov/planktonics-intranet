import React, { Component, FormEvent, ChangeEvent } from 'react';
import './AutorizationForm.css';
import { RouteComponentProps } from 'react-router-dom';

type stateType = {
  login: string,
  password: string,
  validity: boolean
};

type AutorizationFormProps = {
  getCurrentUser: (name: string) => void
};

export class AutorizationForm extends Component<RouteComponentProps & AutorizationFormProps> {

  state: stateType = {
    login: '',
    password: '',
    validity: false,
  };

  // валидация обоих полей
  inputValidity = () => {
    if (this.state.login.length > 0 && this.state.password.length > 0) {
      this.setState( () => ({validity: true}) );
    } else {
      this.setState( () => ({validity: false}) );
    }
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'login') {
      this.setState({ login: event.target.value }, () => this.inputValidity());
    }
    if (event.target.name === 'password') {
      this.setState({ password: event.target.value }, () => this.inputValidity());
    }
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.state.validity) {
      this.props.history.push('/messenger');
    }
    this.props.getCurrentUser(this.state.login);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } className="AutorizationForm">
        <input type="text" 
               onChange={ this.handleChange } 
               value={ this.state.login } 
               name="login" 
               placeholder="Логин" 
               autoComplete="off" 
               className="AutorizationForm__input" 
               required />
        <input type="password" 
               onChange={ this.handleChange } 
               value={ this.state.password } 
               name="password" 
               placeholder="Пароль" 
               autoComplete="off" 
               className="AutorizationForm__input" 
               required />
        <button type="submit" className="AutorizationForm__button">Войти</button>
      </form>
    );
  }
}