import { messageList } from '../types';

const today:Date = new Date();

export const initialMessageList:messageList = {
  'general': {
    users: [
      {
        login: 'piligrim',
        avatarUrl: 'https://img.freepik.com/free-photo/_23-2147868989.jpg?size=626&ext=jpg'
      },
      {
        login: 'ryoka',
        avatarUrl: 'https://img.freepik.com/free-photo/3d_1048-6284.jpg?size=338&ext=jpg'
      }
    ],
    messages: [
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor',
        id: '0001'
      },
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        id: '0002'
      },
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        id: '0003'
      },
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        id: '0004'
      },
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        id: '0005'
      }
    ]
  },
  'communications': {
    users: [
      {
        login: 'piligrim',
        avatarUrl: 'https://img.freepik.com/free-photo/_23-2147868989.jpg?size=626&ext=jpg'
      },
      {
        login: 'ryoka',
        avatarUrl: 'https://img.freepik.com/free-photo/3d_1048-6284.jpg?size=338&ext=jpg'
      }
    ],
    messages: [
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        id: '0001'
      },
      {
        date: today.getTime(),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        id: '0002'
      },
      {
        date: today.getTime(),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        id: '0003'
      },
    ]
  },
};