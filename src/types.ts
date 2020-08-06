export type chatListItem = {
  imageUrl: string,
  name: string,
  id: string,
  date: number,
  lastMessageText: string
};

export type user = {
  login: string,
  avatarUrl: string
};

export type message = {
  date: number,
  author: string,
  text: string,
  id: string
};

export type messageList = {
  [key:string]: {
    users: user [],
    messages: message []
  }
};