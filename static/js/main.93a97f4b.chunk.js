(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{1364:function(e,t,c){},1365:function(e,t,c){},1366:function(e,t,c){},1367:function(e,t,c){},1368:function(e,t,c){},1369:function(e,t,c){},1370:function(e,t,c){},1371:function(e,t,c){},1374:function(e,t,c){},1375:function(e,t,c){},1376:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(0),a=c(20),i=c.n(a),r=c(17),j=c(30),d="SET_ACTIVE_ID",l="SET_MESSAGE",b="a30eb4c-6c8a-b0d-7ddb-8bbcd13b20e",o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;switch(c){case d:return s.activeId;default:return e}},O=c(23),h=Object(O.b)({id:null,imgAvatar:"",userName:"",message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, fugit!"}),u=Object(O.b)({entities:Object(O.a)({})}),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new u;return e},m=c(22),v=Object(O.b)({id:null,userId:null,messages:Object(O.a)({})}),f=Object(O.b)({author:"",date:"",message:""}),p=Object(O.b)({entities:Object(O.a)({})}),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new p,t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;switch(c){case l:var n=e.entities.find((function(e){return e.get("userId")===s.userId})),a=new f({author:b,date:s.date,message:s.message});return e.setIn(["entities",n.id,"messages"],[].concat(Object(m.a)(n.messages),[a]));default:return e}},g=Object(j.b)({activeId:o,usersList:x,chatList:N}),w=(c(86),c(50)),I=c.n(w),C=c(31),y=c.n(C),L={};try{for(var E=new u,S=new p,_=0;_<15;_++){var k=new h({id:I()(),userName:y.a.name.findName(),imgAvatar:"".concat(y.a.image.people(),"?random=").concat(_+10)});E=E.setIn(["entities",k.id],k);for(var W=new v({id:I()(),userId:k.id}),A=0;A<20;A++){var T=new f({author:1===Math.floor(Math.random()*Math.floor(2))?k.id:b,date:"22:44",message:y.a.lorem.sentence(5)});W=W.set("messages",[].concat(Object(m.a)(W.messages),[T]))}S=S.setIn(["entities",W.id],W)}L.usersList=E,L.chatList=S}catch(Ee){console.log("error",Ee),L={}}var D=L,F=Object(j.c)(g,D,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),M=(c(1364),c(16));var B=c(1393),R=c(1392),V=c(45),X=c.n(V),P=c(1391);c(1365);var z=function(e){var t=Object(n.useRef)(null);function c(c){t.current&&!t.current.contains(c.target)&&e.setIsOpen(!1)}return Object(n.useEffect)((function(){return document.addEventListener("mousedown",c),function(){document.removeEventListener("mousedown",c)}})),Object(s.jsx)(P.a,{in:e.isOpen,timeout:200,classNames:"menu",unmountOnExit:!0,onEnter:function(){return e.setIsOpen(!0)},onExited:function(){return e.setIsOpen(!1)},children:Object(s.jsx)("div",{ref:t,className:"dropdown-menu",children:Object(s.jsx)("ul",{children:e.children})})})};c(1366);var J=function(e){return Object(s.jsx)("li",{className:"dropdown-menu-item",children:Object(s.jsx)("div",{children:e.children})})},K=(c(1367),function(e){var t=e.user,c=e.lastMessage,a=e.active,i=e.onClick,r=Object(n.useState)(!1),j=Object(M.a)(r,2),d=j[0],l=j[1];return Object(s.jsxs)("div",{className:"ChatListItem".concat(a?" active":""),onClick:i,children:[Object(s.jsx)("div",{className:"ChatListItem--avatar",children:Object(s.jsx)(B.a,{src:t.imgAvatar})}),Object(s.jsxs)("div",{className:"ChatListItem--container",children:[Object(s.jsxs)("div",{className:"ChatListItem--container--line",children:[Object(s.jsx)("div",{className:"ChatListItem--user",children:t.userName}),Object(s.jsx)("div",{className:"ChatListItem--data",children:c.date})]}),Object(s.jsxs)("div",{className:"ChatListItem--container--line",children:[Object(s.jsx)("div",{className:"ChatListItem--message",children:Object(s.jsx)("p",{children:c.message})}),Object(s.jsxs)("div",{className:"container--line-btn",children:[Object(s.jsx)(R.a,{onClick:function(){return l(!d)},children:Object(s.jsx)(X.a,{})}),Object(s.jsxs)(z,{isOpen:d,setIsOpen:l,children:[Object(s.jsx)(J,{children:"\u0412 \u0430\u0440\u0445\u0438\u0432"}),Object(s.jsx)(J,{children:"\u0411\u0435\u0437 \u0437\u0432\u0443\u043a\u0430"}),Object(s.jsx)(J,{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0447\u0430\u0442"}),Object(s.jsx)(J,{children:"\u0417\u0430\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0447\u0430\u0442"}),Object(s.jsx)(J,{children:"\u041f\u043e\u043c\u0435\u0442\u0438\u0442\u044c \u043a\u0430\u043a \u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u043e\u0435"})]})]})]})]})]})}),U=c(51),q=c.n(U),G=c(58),H=c.n(G),Q=(c(1368),function(e){var t=e.isOpen,c=e.setIsOpen,a=Object(n.useState)(!0),i=Object(M.a)(a,2),r=i[0],j=i[1];if(r&&t)setTimeout((function(){j(!1)}));else if(r)return null;return Object(s.jsxs)("div",{className:"profile".concat(t&&!r?"":" hidden"),children:[Object(s.jsx)("header",{children:Object(s.jsx)("div",{className:"profile--header",children:Object(s.jsxs)("div",{className:"header--content",children:[Object(s.jsx)(R.a,{onClick:function(e){c(!1),setTimeout((function(){j(!0)}),500)},children:Object(s.jsx)(H.a,{})}),Object(s.jsx)("div",{className:"header--content--text",children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})]})})}),Object(s.jsxs)("div",{className:"profile--body",children:[Object(s.jsx)("div",{className:"profile--body--avatar",children:Object(s.jsx)(B.a,{})}),Object(s.jsxs)("div",{className:"profile--body--container",children:[Object(s.jsx)("div",{className:"body--label",children:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),Object(s.jsxs)("div",{className:"body--inputField",children:[Object(s.jsx)("div",{className:"inputField--input",children:Object(s.jsx)("input",{type:"text"})}),Object(s.jsx)("div",{className:"inputField--btn",children:Object(s.jsx)(R.a,{children:Object(s.jsx)(q.a,{})})})]})]}),Object(s.jsx)("div",{className:"profile--body--warning",children:"\u042d\u0442\u043e \u043d\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c. \u0414\u0430\u043d\u043d\u043e\u0435 \u0438\u043c\u044f \u0431\u0443\u0434\u0443\u0442 \u0432\u0438\u0434\u0435\u0442\u044c \u0432\u0430\u0448\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b \u0432 WhatsApp."}),Object(s.jsxs)("div",{className:"profile--body--container",children:[Object(s.jsx)("div",{className:"body--label",children:"\u0421\u0432\u0435\u0434\u0435\u043d\u0438\u044f"}),Object(s.jsxs)("div",{className:"body--inputField",children:[Object(s.jsx)("div",{className:"inputField--input",children:Object(s.jsx)("input",{type:"text"})}),Object(s.jsx)("div",{className:"inputField--btn",children:Object(s.jsx)(R.a,{children:Object(s.jsx)(q.a,{})})})]})]})]})]})}),Y=c(59),Z=c.n(Y),$=c(60),ee=c.n($),te=c(46),ce=c.n(te),se=c(47),ne=c.n(se),ae=(c(1369),function(){var e=Object(r.b)(),t=Object(n.useState)(!1),c=Object(M.a)(t,2),a=c[0],i=c[1],j=Object(n.useState)(!1),l=Object(M.a)(j,2),b=l[0],o=l[1],O=Object(r.c)((function(e){return e.activeId})),h=Object(r.c)((function(e){return e.usersList.entities})),u=Object(r.c)((function(e){return e.chatList.entities}));return Object(s.jsxs)("div",{className:"sidebar",children:[Object(s.jsxs)("div",{className:"main_sidebar",children:[Object(s.jsxs)("div",{className:"main_sidebar--header",children:[Object(s.jsx)(B.a,{onClick:function(){return i(!0)}}),Object(s.jsxs)("div",{className:"main_sidebar--header--buttons",children:[Object(s.jsx)("div",{className:"header--btn",children:Object(s.jsx)(R.a,{children:Object(s.jsx)(Z.a,{})})}),Object(s.jsx)("div",{className:"header--btn",children:Object(s.jsx)(R.a,{children:Object(s.jsx)(ee.a,{})})}),Object(s.jsxs)("div",{className:"header--btn",children:[Object(s.jsx)(R.a,{onClick:function(){return o(!b)},children:Object(s.jsx)(ce.a,{})}),Object(s.jsxs)(z,{isOpen:b,setIsOpen:o,children:[Object(s.jsx)(J,{children:"\u041d\u043e\u0432\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430"}),Object(s.jsx)(J,{children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043c\u043d\u0430\u0442\u0443"}),Object(s.jsx)(J,{children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}),Object(s.jsx)(J,{children:"\u0410\u0440\u0445\u0438\u0432"}),Object(s.jsx)(J,{children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435"}),Object(s.jsx)(J,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),Object(s.jsx)(J,{children:"\u0412\u044b\u0439\u0442\u0438"})]})]})]})]}),Object(s.jsx)("div",{className:"main_sidebar--search",children:Object(s.jsxs)("div",{className:"search--container",children:[Object(s.jsx)(ne.a,{fontSize:"small",color:"disabled"}),Object(s.jsx)("input",{placeholder:"\u041f\u043e\u0438\u0441\u043a \u0438\u043b\u0438 \u043d\u043e\u0432\u044b\u0439 \u0447\u0430\u0442"})]})}),Object(s.jsx)("div",{className:"main_sidebar--userList",children:u.valueSeq().map((function(t,c){var n=h.find((function(e){return e.get("id")===t.userId}));return Object(s.jsx)(K,{user:n,lastMessage:t.messages[t.messages.length-1],active:n.id===O,onClick:function(){return e(function(e){return{type:d,payload:{activeId:e}}}(n.id))}},c)}))})]}),Object(s.jsx)(Q,{isOpen:a,setIsOpen:i})]})}),ie=c(61),re=c.n(ie);c(1370);var je=function(){return Object(s.jsx)("div",{className:"ChatInfoWindow",children:Object(s.jsxs)("div",{className:"ChatInfoWindow--content",children:[Object(s.jsx)("div",{className:"ChatInfoWindow--content--img"}),Object(s.jsx)("h1",{children:"\u041d\u0435 \u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0439\u0442\u0435 \u0441\u0432\u043e\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(s.jsx)("div",{className:"ChatInfoWindow--text",children:"WhatsApp \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443, \u0447\u0442\u043e\u0431\u044b \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f. \u0427\u0442\u043e\u0431\u044b \u0441\u043d\u0438\u0437\u0438\u0442\u044c \u0442\u0440\u0430\u0444\u0438\u043a \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u043a Wi-Fi."}),Object(s.jsxs)("div",{className:"ChatInfoWindow--link",children:[Object(s.jsx)(re.a,{}),Object(s.jsxs)("div",{children:["WhatsApp \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0434\u043b\u044f Windows."," ",Object(s.jsx)("a",{href:"https://www.whatsapp.com/download",target:"_blank",rel:"noreferrer",children:"\u0421\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u0437\u0434\u0435\u0441\u044c"})]})]})]})})};var de=c(1390),le=c(63),be=c.n(le),oe=c(66),Oe=c.n(oe),he=c(67),ue=c.n(he),xe=c(68),me=c.n(xe),ve=c(62),fe=c.n(ve),pe=c(64),Ne=c.n(pe),ge=c(65),we=c.n(ge);c(1371);var Ie=function(e){var t=e.message,c=Object(n.useState)(!1),a=Object(M.a)(c,2),i=a[0],r=a[1];return Object(s.jsx)("div",{className:"messageBox--line",children:Object(s.jsxs)("div",{className:"messageBox--line--container".concat(t.author===b?" out":""),children:[Object(s.jsxs)("div",{className:"container--wrapper",children:[Object(s.jsx)("div",{className:"container--wrapper--message",children:t.message}),Object(s.jsx)("div",{className:"container--wrapper--time",children:t.date})]}),Object(s.jsxs)("div",{className:"container--btn",children:[Object(s.jsx)(R.a,{onClick:function(){return r(!i)},children:Object(s.jsx)(X.a,{})}),Object(s.jsxs)(z,{isOpen:i,setIsOpen:r,children:[Object(s.jsx)(J,{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438"}),Object(s.jsx)(J,{children:"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c"}),Object(s.jsx)(J,{children:"\u041f\u0435\u0440\u0435\u0441\u043b\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),Object(s.jsx)(J,{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432 \u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435"}),Object(s.jsx)(J,{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})]})]})]})})},Ce=c(69),ye=(c(1373),c(1374),function(){var e=Object(n.useRef)(null),t=Object(n.useState)(""),c=Object(M.a)(t,2),a=c[0],i=c[1],j=Object(n.useState)(!1),d=Object(M.a)(j,2),b=d[0],o=d[1],O=Object(n.useState)(!1),h=Object(M.a)(O,2),u=h[0],x=h[1],m=Object(r.b)(),v=Object(r.c)((function(e){return e.activeId})),f=Object(r.c)((function(e){return e.chatList.entities})).find((function(e){return e.get("userId")===v})),p=Object(r.c)((function(e){return e.usersList.getIn(["entities",v])}));function N(e){if(e.preventDefault(),a.length>0){var t=new Date;m(function(e,t,c){return{type:l,payload:{message:e,userId:t,date:c}}}(a,v,t.getHours()+":"+("0"+t.getMinutes()).slice(-2))),i("")}}return Object(n.useEffect)((function(){e.current.scrollIntoView()})),Object(s.jsxs)("div",{className:"chatWindow",children:[Object(s.jsxs)("header",{className:"chatWindow--header",children:[Object(s.jsx)("div",{className:"header--avatar",children:Object(s.jsx)(B.a,{src:p.imgAvatar})}),Object(s.jsxs)("div",{className:"header--container",children:[Object(s.jsx)("div",{className:"header--container--name",children:p.userName}),Object(s.jsx)("div",{className:"header--container--date",children:"\u0411\u044b\u043b \u0432 \u0441\u0435\u0442\u0438 \u0432\u0447\u0435\u0440\u0430"})]}),Object(s.jsxs)("div",{className:"header--buttons",children:[Object(s.jsx)("div",{className:"header--btn",children:Object(s.jsx)(R.a,{children:Object(s.jsx)(ne.a,{})})}),Object(s.jsxs)("div",{className:"header--btn",children:[Object(s.jsx)(R.a,{onClick:function(){return o(!b)},children:Object(s.jsx)(ce.a,{})}),Object(s.jsxs)(z,{isOpen:b,setIsOpen:o,children:[Object(s.jsx)(J,{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"}),Object(s.jsx)(J,{children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"}),Object(s.jsx)(J,{children:"\u0411\u0435\u0437 \u0437\u0432\u0443\u043a\u0430"}),Object(s.jsx)(J,{children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0447\u0430\u0442"}),Object(s.jsx)(J,{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0447\u0430\u0442"})]})]})]})]}),Object(s.jsxs)("div",{className:"chatWindow--messageWindow",children:[f.get("messages").map((function(e,t){return Object(s.jsx)(Ie,{message:e},t)})),Object(s.jsx)("div",{ref:e})]}),Object(s.jsx)("div",{className:"chatWindow--emojiField".concat(u?"":" hidden"),children:Object(s.jsx)(Ce.a,{showPreview:!1,showSkinTones:!1,emojiSize:32,onSelect:function(e){return i(a+e.native)}})}),Object(s.jsxs)("footer",{className:"chatWindow--footer",children:[Object(s.jsxs)("div",{className:"footer--buttons",children:[Object(s.jsx)(R.a,{className:"".concat(u?"":"hidden"),onClick:function(e){e.preventDefault(),x(!1)},children:Object(s.jsx)(fe.a,{})}),Object(s.jsx)(R.a,{onClick:function(e){e.preventDefault(),u||x(!0)},children:Object(s.jsx)(be.a,{style:{color:u?"#009688":"#919191"}})}),Object(s.jsx)(R.a,{className:"".concat(u?"":"hidden"),children:Object(s.jsx)(Ne.a,{})}),Object(s.jsx)(R.a,{className:"".concat(u?"":"hidden"),children:Object(s.jsx)(we.a,{})}),Object(s.jsx)(R.a,{children:Object(s.jsx)(Oe.a,{})})]}),Object(s.jsx)("div",{className:"footer--inputField",children:Object(s.jsx)(de.a,{rowsMax:5,value:a,onChange:function(e){return i(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",onKeyPress:function(e){13===e.which&&e.ctrlKey?i(e.target.value+"\n"):13===e.which&&N(e)}})}),Object(s.jsx)("div",{className:"footer--sendButton",children:a.length>0?Object(s.jsx)(R.a,{onClick:N,children:Object(s.jsx)(ue.a,{})}):Object(s.jsx)(R.a,{children:Object(s.jsx)(me.a,{})})})]})]})});c(1375);var Le=function(){var e=Object(r.c)((function(e){return e.activeId}));return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("div",{className:"App--wrapper",children:Object(s.jsxs)("div",{className:"App--body",children:[Object(s.jsx)(ae,{}),null==e?Object(s.jsx)(je,{}):Object(s.jsx)(ye,{})]})})})};i.a.render(Object(s.jsx)(r.a,{store:F,children:Object(s.jsx)(Le,{})}),document.getElementById("root"))}},[[1376,1,2]]]);
//# sourceMappingURL=main.93a97f4b.chunk.js.map