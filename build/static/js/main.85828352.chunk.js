(this.webpackJsonpmessenger=this.webpackJsonpmessenger||[]).push([[0],{20:function(e,t,a){e.exports=a(39)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(18),i=a.n(r),o=a(1),c=a(13),l=a(6),m=a(7),u=a(10),g=a(9),h=(a(25),a(26),a(27),function(e){var t=e.chat,a=e.history,s=e.getSelectChatId;return n.a.createElement("div",{onClick:function(){return e=t.name,a.push("/messenger/chats/".concat(e)),void s(e);var e},className:t.name===a.location.pathname.replace(/\/messenger\/chats\/(.*)/,"$1")?"ChatListItem ChatListItem_active":"ChatListItem"},n.a.createElement("img",{src:t.imageUrl,alt:"",className:"ChatListItem__image"}),n.a.createElement("h3",{className:"ChatListItem__name"},t.name))}),d=function(e){return n.a.createElement("div",{className:"ChatList"},e.chats.map((function(t){return n.a.createElement(h,Object.assign({chat:t,key:t.id},e,{getSelectChatId:e.getSelectChatId}))})))},p=(a(28),a(29),a(30),a(31),function(){return n.a.createElement("svg",{className:"DeleteIcon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 39 47.9"},n.a.createElement("rect",{x:"12",y:"14.9",width:"3",height:"24"}),n.a.createElement("rect",{x:"18",y:"14.9",width:"3",height:"24"}),n.a.createElement("rect",{x:"24",y:"14.9",width:"3",height:"24"}),n.a.createElement("path",{d:"M51.5,13.9H39.4V12.4A4.44,4.44,0,0,0,35,8H29a4.44,4.44,0,0,0-4.4,4.4v1.5H12.5v3h3.11L18.3,51.5A4.85,4.85,0,0,0,23,55.9H41a4.77,4.77,0,0,0,4.7-4.4l2.69-34.6H51.5ZM27.4,12.4A1.58,1.58,0,0,1,29,10.8h6a1.58,1.58,0,0,1,1.6,1.6v1.5H27.4ZM42.7,51.3A1.74,1.74,0,0,1,41,52.9H23a1.81,1.81,0,0,1-1.7-1.6L18.62,16.9H45.38Z",transform:"translate(-12.5 -8)"}))});var f=function(e){return/^\*.*\*$/.test(e)?{fontWeight:"900"}:/^_.*_$/.test(e)?(console.log(e),{fontStyle:"Italic"}):/^~.*~$/.test(e)?{textDecoration:"line-through"}:/^```.*```$/.test(e)?{fontFamily:"Courier New"}:{}},v=function(e){var t,a=e.message,s=e.currentUser,r=e.deleteMessage;return n.a.createElement("div",null,n.a.createElement("div",{onClick:function(e){e.target.classList.contains("DeleteIcon")&&r(a.id)},className:"Message"},n.a.createElement("header",{className:"Message__header"},n.a.createElement("h3",{className:"Message__author"},a.author),a.author===s?n.a.createElement(p,null):null),n.a.createElement("p",{style:f(a.text),className:"Message__text"},(t=a.text,/^\*.*\*$/.test(t)||/^_.*_$/.test(t)||/^~.*~$/.test(t)?t.slice(1,t.length-1):/^```.*```$/.test(t)?t.slice(3,t.length-3):t),n.a.createElement("time",{className:"Message__date"},function(e){var t=new Date(e),a=t.getHours().toString(),s=t.getMinutes().toString();return s.length<2&&(s=s.padStart(2,"0")),a.length<2&&(a=a.padStart(2,"0")),"".concat(a,":").concat(s)}(a.date)))),n.a.createElement("br",null))},C=(a(32),function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={messageText:""},e.handleChange=function(t){e.setState({messageText:t.target.value})},e.handleKeyDown=function(t){t.shiftKey||"Enter"!==t.key||(t.preventDefault(),e.submitMessage())},e.handleSubmit=function(t){t.preventDefault(),e.submitMessage()},e.submitMessage=function(){e.state.messageText.length>0&&(e.props.addMessage(e.state.messageText),e.setState({messageText:""}))},e}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.handleSubmit,onKeyDown:this.handleKeyDown,className:"form"},n.a.createElement("textarea",{name:"message",id:"message",className:"form__textarea",value:this.state.messageText,onChange:this.handleChange,required:!0}),n.a.createElement("button",{type:"submit",className:"form__button"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))}}]),a}(s.Component)),L=function(e){var t,a=e.messageList,s=e.addMessage,r=e.currentUser,i=e.deleteMessage;return n.a.createElement("div",{className:"Chat"},n.a.createElement("div",{className:"Chat__list"},null===a||void 0===a||null===(t=a.messages)||void 0===t?void 0:t.map((function(e){return n.a.createElement(v,{message:e,key:e.id,currentUser:r,deleteMessage:i})}))),n.a.createElement(C,{addMessage:s}))},y=new Date,S={general:{users:[{login:"piligrim",avatarUrl:"https://img.freepik.com/free-photo/_23-2147868989.jpg?size=626&ext=jpg"},{login:"ryoka",avatarUrl:"https://img.freepik.com/free-photo/3d_1048-6284.jpg?size=338&ext=jpg"}],messages:[{date:y.getTime(),author:"piligrim",text:"Lorem ipsum dolor",id:"0001"},{date:y.getTime(),author:"piligrim",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",id:"0002"},{date:y.getTime(),author:"piligrim",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",id:"0003"},{date:y.getTime(),author:"piligrim",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",id:"0004"},{date:y.getTime(),author:"piligrim",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",id:"0005"}]},communications:{users:[{login:"piligrim",avatarUrl:"https://img.freepik.com/free-photo/_23-2147868989.jpg?size=626&ext=jpg"},{login:"ryoka",avatarUrl:"https://img.freepik.com/free-photo/3d_1048-6284.jpg?size=338&ext=jpg"}],messages:[{date:y.getTime(),author:"piligrim",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",id:"0001"},{date:y.getTime(),author:"ryoka",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",id:"0002"},{date:y.getTime(),author:"ryoka",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",id:"0003"}]}},b=function(){function e(t,a){Object(l.a)(this,e),this.chatList=void 0,this.messageList=void 0,this.nameActiveChat=void 0,this.currentUser=void 0,this.chatList=t,this.messageList=a,this.nameActiveChat=localStorage.nameActiveChat||t[0].name,this.currentUser=localStorage.currentUser||""}return Object(m.a)(e,[{key:"initStorage",value:function(){localStorage.chatList||(localStorage.chatList=JSON.stringify(this.chatList),localStorage.messageList=JSON.stringify(this.messageList),localStorage.nameActiveChat=this.nameActiveChat)}},{key:"getChatList",value:function(){return JSON.parse(localStorage.chatList)}},{key:"getMessageList",value:function(){return JSON.parse(localStorage.messageList)}},{key:"setNameActiveChat",value:function(e){this.nameActiveChat=e,localStorage.nameActiveChat=this.nameActiveChat}},{key:"getNameActiveChat",value:function(){return localStorage.nameActiveChat}},{key:"setCurrentUser",value:function(e){this.currentUser=e,localStorage.currentUser=this.currentUser}},{key:"getCurrentUser",value:function(){return localStorage.currentUser}},{key:"setStorage",value:function(e,t){var a=this.getMessageList();a[e]=t,this.messageList=a,this.nameActiveChat=e,localStorage.messageList=JSON.stringify(this.messageList)}},{key:"addCurrentUser",value:function(e){var t=JSON.parse(localStorage.messageList);for(var a in t)t[a].users.push({login:e,avatarUrl:""});this.messageList=t,localStorage.messageList=JSON.stringify(this.messageList)}}]),e}(),E=(a(33),function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={login:"",password:"",validity:!1},e.inputValidity=function(){e.state.login.length>0&&e.state.password.length>0?e.setState((function(){return{validity:!0}})):e.setState((function(){return{validity:!1}}))},e.handleChange=function(t){"login"===t.target.name&&e.setState({login:t.target.value},(function(){return e.inputValidity()})),"password"===t.target.name&&e.setState({password:t.target.value},(function(){return e.inputValidity()}))},e.handleSubmit=function(t){t.preventDefault(),e.state.validity&&e.props.history.push("/messenger"),e.props.getCurrentUser(e.state.login)},e}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.handleSubmit,className:"AutorizationForm"},n.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.login,name:"login",placeholder:"\u041b\u043e\u0433\u0438\u043d",autoComplete:"off",className:"AutorizationForm__input",required:!0}),n.a.createElement("input",{type:"password",onChange:this.handleChange,value:this.state.password,name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",autoComplete:"off",className:"AutorizationForm__input",required:!0}),n.a.createElement("button",{type:"submit",className:"AutorizationForm__button"},"\u0412\u043e\u0439\u0442\u0438"))}}]),a}(s.Component)),_=new b([{imageUrl:"https://im0-tub-ru.yandex.net/i?id=7db1f856c2cf5bd97ff9bb190613c3f9&n=13&exp=1",name:"general",id:"0001",date:0,lastMessageText:""},{imageUrl:"https://yandex.ru/images/_crpd/Joli13717/c7d9679kZNM/TDs9OHZvuYToftjzLbekwzvQwR3QxWcI42FEnViRzuHNxXxa_yYNhrANcazr0b2LzQW7xM5YJIx6V2m7KlSSmEx8qb11uOvA_fyP5ON5Kpjw3k_CmNtvAnJgB5wPg10k3dzzQ",name:"communications",id:"0002",date:0,lastMessageText:""}],S);_.initStorage();var N=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={messageList:_.getMessageList()[_.getNameActiveChat()]||{users:[],messages:[]},nameCurrentChat:_.getNameActiveChat()||"",currentUser:_.getCurrentUser()||""},e.setMessageList=function(t){e.setState({messageList:_.getMessageList()[t],nameCurrentChat:t}),_.setNameActiveChat(t)},e.addNewMessage=function(t){var a=(e.state.messageList.messages.length+1).toString().padStart(4,"0");e.setState((function(s){return{messageList:{users:s.messageList.users,messages:s.messageList.messages.concat({date:(new Date).getTime(),author:e.state.currentUser,text:t,id:a})}}}),(function(){return _.setStorage(e.state.nameCurrentChat,e.state.messageList)}))},e.deleteMessage=function(t){e.setState((function(e){return{messageList:{users:e.messageList.users,messages:e.messageList.messages.filter((function(e){return e.id!==t}))}}}),(function(){return _.setStorage(e.state.nameCurrentChat,e.state.messageList)}))},e.getcurrentUser=function(t){e.setState({currentUser:t}),_.setCurrentUser(t),_.addCurrentUser(t)},e}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Messanger"},n.a.createElement(o.a,{path:"/"},n.a.createElement(E,Object.assign({},this.props,{getCurrentUser:this.getcurrentUser}))),n.a.createElement(o.a,{path:"/messenger"},n.a.createElement("header",{className:"Messanger__header"},n.a.createElement("h1",{className:"Messanger__title"},"Planktonics Intranet"),n.a.createElement("h2",{className:"Messanger__user"},this.state.currentUser)),n.a.createElement("main",{className:"Messanger__main"},n.a.createElement(d,Object.assign({},this.props,{chats:_.getChatList(),getSelectChatId:this.setMessageList})),n.a.createElement(o.a,{path:"/messenger/chats"},n.a.createElement(L,{messageList:this.state.messageList,addMessage:this.addNewMessage,deleteMessage:this.deleteMessage,currentUser:this.state.currentUser}))),n.a.createElement("footer",{className:"Messanger__footer"},n.a.createElement("h2",{className:"Messanger__author"},"\xa9arakhimov"))))}}]),a}(s.Component),x=Object(o.e)(N),M=function(){return n.a.createElement(c.a,null,n.a.createElement(x,null))};i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(M,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.85828352.chunk.js.map