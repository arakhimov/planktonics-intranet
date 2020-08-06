import React, { Component, FormEvent, ChangeEvent } from 'react';
import './AddMessageForm.css';

type stateProps = {
  messageText: string
};

type AddMessagesFormProps = {

};

export class AddMessageForm extends Component {

  state: stateProps = {
    messageText: ''
  };

  handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({messageText: event.target.value});
  }

  handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState({messageText: ''});
  }

  render() {
    return (
      <form className="form">
        <textarea name="message" 
                  id="message" 
                  className="form__textarea"
                  value={ this.state.messageText }
                  onChange={ this.handleChange }
                  required />
        <button onSubmit={ this.handleSubmit } 
                type="submit" 
                className="form__button">Отправить</button>
      </form>
    )
  }
};