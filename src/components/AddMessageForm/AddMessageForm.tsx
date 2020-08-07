import React, { Component, FormEvent, ChangeEvent } from 'react';
import './AddMessageForm.css';

type stateProps = {
  messageText: string,
};

type AddMessagesFormProps = {
  addMessage: (message: string) => void
};

export class AddMessageForm extends Component<AddMessagesFormProps> {

  state: stateProps = {
    messageText: '', 
  };

  handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    this.setState({messageText: event.target.value});
  }

  // Enter - отправка сообщения
  // Shift + Enter - перенос строки
  handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>): void => {
    if (!event.shiftKey && event.key === 'Enter') {
      event.preventDefault();
      this.submitMessage();
    }
  }

  // отправка формы по нажатию на кнопку отправить или по нажатию на Enter, если не нажат Shift
  handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.submitMessage();
  }

  // отправка сообщения
  submitMessage = () => {
    if (this.state.messageText.length > 0) {
      this.props.addMessage(this.state.messageText);
      this.setState({messageText: ''});
    }
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } 
            onKeyDown={ this.handleKeyDown }
            className="form">
        <textarea name="message" 
                  id="message" 
                  className="form__textarea"
                  value={ this.state.messageText }
                  onChange={ this.handleChange }
                  required />
        <button type="submit" className="form__button">Отправить</button>
      </form>
    )
  }
};