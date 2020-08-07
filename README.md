# Planktonics Intranet

## Проект опубликован по адресу: 

[https://arakhimov.github.io/planktonics-intranet](https://arakhimov.github.io/planktonics-intranet)

## Для запуска проекта необходимо в режиме разработки необходимо выполнить команды:

git clone https://github.com/arakhimov/planktonics-intranet.git

npm install

npm start

## Описание проекта

Корпоративная сеть компании Planktonics. Содержит два раздела: 
GENERAL - для обсуждения рабочих вопросов и 
COMMUNICATIONS - для свободного общения.

В каждом разделе отображается список текущих сообщений с возможностью отправки сообщений и 
удаления отправленных сообщений. 

Также предусмотрена возможность форматирования текста сообщений. Используюте следующие символы 
в начале и конце строки для форматирования:
*текст* - для жирного теста
_текст_ - для курсивного текста
~текст~ - для зачеркнутого текста
```текст```- для моноширинного текста

В приложении предусмотрена возможность авторизации пользователя по имени и паролю. 

## Структура проекта:


При первой загрузке пользователь попадает на страницу авторизации.В проекте предусмотрена простейшая авторизация - наличие 
непустых полей имени и пароля. За авторизацию отвечает компонент AutorizationForm и настроен Route exact paht="/". 

Также при первой загрузке в localStorage - сохраняютя исходные списки чатов и сообщений всех чатов.

После успешного прохождения авторизации через history.push меняется адрес на domain/messenger и отображаюсякомпоненты:
ChatList - список доступных чатов,
ChatListItem - элементы списка чатов,
Chat - чат без отображаемых сообщений.

Список сообщений чата добавляется после выбора нужного чата из списка. По клику на требуемый чат - компонент ChatListItem 
через callback передаем имя выбранного чата родительскому компоненту Messenger, который в свою очередь через props 
передает список сообщению другому дочернему компоненту Chat. После этого доступен список сообщений. При выборе текущего чата
из localStorage в state компонента Messenger загружаются сообщения данного чата. При выборе другого чата происходит изменение
state и соответсвенно изменяется список сообщений. 

В приложении предусмотрена возможность добавления сообщений. Для этого используется компонент AddMessageForm, который доступен
при выборе одного из чатов. У пользователя есть возможность отправлять сообщения клавишей Enter или по клику на кнопку отправить.
Предумотрен запрет отправки пустых сообщений. 

При добавлении нового сообщения текст сообщения через callback передается компоненту Messenger и через функциональный state 
происходит обновление состояния state и изменение текущего списка сообщений для данного чата в localStorage.

Также предусмотрена возможность удаления сообщении по клику на иконку удалить, которая добавляется только для отправленных
данных пользователем сообщений. При клике аналогично функционально обновляется state и значение localStarage.

У пользователя имееется возможность форматирования сообщении добавлением специальных символов в начало и конец строки. 
Для нахождения символов форматирования используются регулярные выражения.

### Использумые технологии: HTML, CSS, GIT, JS, React, Typescript, Webpack.
