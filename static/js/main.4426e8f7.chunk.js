(this["webpackJsonptypescript-usereducer"]=this["webpackJsonptypescript-usereducer"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),i=n.n(a),c=(n(11),n(4)),l=(new Date).toISOString().substring(0,10),u={id:0,discription:"",deadline:l,important:!1,done:!1,doneDate:""},d={todoForm:u,todoList:[]},s=n(5),p=n(3);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e,t){switch(t.type){case"RESET":return t.payload;case"ADD_DISCRIPTION":return f({},e,{todoForm:f({},e.todoForm,{discription:t.payload})});case"ADD_DEADLINE":return t.payload>=l?f({},e,{todoForm:f({},e.todoForm,{deadline:t.payload})}):e;case"ADD_IMPORTANT":return f({},e,{todoForm:f({},e.todoForm,{important:t.payload})});case"ADD_TODO":return f({},e,{todoForm:f({},u,{id:e.todoForm.id+1}),todoList:[].concat(Object(s.a)(e.todoList),[t.payload])});case"DELETE_TODO":return f({},e,{todoList:e.todoList.filter((function(e){return e.id!==t.payload.id}))});case"MAKEDONE_TODO":return f({},e,{todoList:e.todoList.map((function(e){return e.id===t.payload.id?f({},e,{done:!0,doneDate:l}):f({},e)}))});default:return e}},y=r.createContext(void 0),D=r.createContext(void 0),O=function(){var e=r.useContext(y);if(void 0===e)throw new Error("useAppState must be used within AppProvider");return e},v=function(){var e=r.useContext(D);if(void 0===e)throw new Error("useDispatchState must be used within AppProvider");return e},b=function(){var e=O(),t=v();return r.createElement("form",{onSubmit:function(n){n.preventDefault(),t({type:"ADD_TODO",payload:e.todoForm})}},r.createElement("h1",null,"Todo-List"),r.createElement("div",null,r.createElement("span",null,"Make new todo:"),r.createElement("br",null),r.createElement("span",null,"Fill out the task description: "),r.createElement("input",{type:"text",placeholder:"Discription...",value:e.todoForm.discription,required:!0,onChange:function(e){return t({type:"ADD_DISCRIPTION",payload:e.currentTarget.value})}})),r.createElement("div",null,r.createElement("span",null,"Deadline date: "),r.createElement("input",{type:"date",value:e.todoForm.deadline,onChange:function(e){return t({type:"ADD_DEADLINE",payload:e.currentTarget.value})}})),r.createElement("div",null,r.createElement("span",null,"Priority: "),r.createElement("input",{type:"checkbox",checked:e.todoForm.important,onChange:function(e){return t({type:"ADD_IMPORTANT",payload:e.currentTarget.checked})}})),r.createElement("button",{type:"submit"},"Submit"))},h=function(){var e=O(),t=v(),n=function(e){t({type:"DELETE_TODO",payload:e})};return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Tasks to do:"),o.a.createElement("ul",null,e.todoList.filter((function(e){return!e.done})).sort((function(e,t){return t.id-e.id})).map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("span",{style:e.important?{color:"red"}:void 0},e.discription,", deadline: ",e.deadline),o.a.createElement("button",{onClick:function(){return function(e){t({type:"MAKEDONE_TODO",payload:e})}(e)}},"Zrobione!"),o.a.createElement("button",{onClick:function(){return n(e)}},"Usu\u0144"))}))),o.a.createElement("p",null,"Tasks completed:"),e.todoList.filter((function(e){return e.done})).length>5&&o.a.createElement("em",null,"Only the last 5 tasks are displayed"),o.a.createElement("ul",null,e.todoList.filter((function(e){return e.done})).sort((function(e,t){return new Date(t.doneDate).getTime()-new Date(e.doneDate).getTime()})).slice(0,5).map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("span",null,e.discription,", done: ",e.doneDate),o.a.createElement("button",{onClick:function(){return n(e)}},"Usu\u0144"))}))))},g=(n(12),function(){var e=O(),t=v(),n=Object(r.useRef)(!1);return Object(r.useEffect)((function(){if(!n.current){var e=localStorage.getItem("data");e&&(t({type:"RESET",payload:JSON.parse(e)}),n.current=!0)}})),Object(r.useEffect)((function(){localStorage.setItem("data",JSON.stringify(e))}),[e]),o.a.createElement("div",{className:"App"},o.a.createElement(b,null),o.a.createElement("br",null),o.a.createElement(h,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement((function(e){var t=e.children,n=r.useReducer(E,d),o=Object(c.a)(n,2),a=o[0],i=o[1];return r.createElement(y.Provider,{value:a},r.createElement(D.Provider,{value:i},t))}),null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.4426e8f7.chunk.js.map