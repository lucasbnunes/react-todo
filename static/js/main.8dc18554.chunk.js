(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n(2),c=n.n(i),a=n(9),r=n.n(a),l=n(8),d=n(6),u=n(10);n(16);var o=function(e){var t=e.value,n=(e.text,e.onChange),c=e.onClick,a=e.placeholder,r=Object(i.useRef)();return Object(s.jsx)("form",{onSubmit:function(e){return function(e){r.current.focus(),e.preventDefault()}(e)},className:"Input",children:Object(s.jsxs)("div",{className:"Input__searchbar",children:[Object(s.jsx)("input",{ref:r,value:t,onChange:n,placeholder:a}),Object(s.jsx)("button",{onClick:c,children:Object(s.jsx)(u.a,{})})]})})},j=n(5);n(17);var f=function(e){var t=e.tasks,n=e.deleteTask,c=e.enableEdit,a=e.editIndex,r=e.handleEdit,l=e.disableEdit,d=e.finishTask,u=e.areFinished,o=Object(i.useRef)();return u?Object(s.jsx)("div",{className:"TaskList --finished",children:t.filter((function(e){return e.finished})).map((function(e){return Object(s.jsxs)("div",{className:"TaskList__row",children:[Object(s.jsx)("span",{className:"TaskList__text",ref:o,children:e.task}),Object(s.jsxs)("div",{className:"TaskList__icons",children:[Object(s.jsx)("div",{}),Object(s.jsx)(j.a,{onClick:function(){return n(e.id)}})]})]},e.id)}))}):Object(s.jsx)("div",{className:"TaskList",children:t.filter((function(e){return!e.finished})).map((function(e){return e.id===a?Object(s.jsxs)("div",{className:"TaskList__row",children:[Object(s.jsx)("input",{value:e.task,onChange:r,className:"TaskList__text",onBlur:l,autoFocus:!0}),Object(s.jsx)("div",{className:"TaskList__icons"})]},e.id):Object(s.jsxs)("div",{className:"TaskList__row",children:[Object(s.jsx)("span",{className:"TaskList__text",ref:o,onClick:function(){return c(e.id,o)},children:e.task}),Object(s.jsxs)("div",{className:"TaskList__icons",children:[Object(s.jsx)(j.b,{onClick:function(){return d(e.id)}}),Object(s.jsx)(j.a,{onClick:function(){return n(e.id)}})]})]},e.id)}))})};n(18);var b=function(){var e=Object(i.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)([]),r=Object(d.a)(a,2),u=r[0],j=r[1],b=Object(i.useState)(null),h=Object(d.a)(b,2),O=h[0],k=h[1];function x(e){var t=e.target;if(null!==O){var n=Object(l.a)(u);n[O]=t.value,j(n)}else c(t.value)}function v(e){var t=u.filter((function(t){return t.id!==e}));j(t),k(null)}function m(e,t){k(e),t.current.focus()}return Object(i.useEffect)((function(){var e=localStorage.getItem("tasks");e&&j(JSON.parse(e))}),[]),Object(i.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(u))}),[u]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o,{value:n,text:"Add",onChange:x,onClick:function(){if(n){var e={id:u.length?u[u.length-1].id+1:0,task:n,finished:!1};j((function(t){return[].concat(Object(l.a)(t),[e])})),c(""),k(null)}},placeholder:"Cook dinner"}),Object(s.jsxs)("div",{className:"App__section",children:[Object(s.jsx)("h3",{children:"Unfinished tasks \ud83c\udfaf"}),u&&null===O&&Object(s.jsx)(f,{tasks:u,enableEdit:m,deleteTask:v,finishTask:function(e){j((function(t){return t.map((function(t){return t.id===e&&(t.finished=!0),t}))}))},areFinished:!1})||u&&null!==O&&Object(s.jsx)(f,{tasks:u,enableEdit:m,deleteTask:v,editIndex:O,handleEdit:x,disableEdit:function(){return k(null)},areFinished:!1})]}),Object(s.jsxs)("div",{className:"App__section",children:[Object(s.jsx)("h3",{children:"Finished tasks \u2714\ufe0f"}),Object(s.jsx)(f,{tasks:u,deleteTask:v,areFinished:!0})]})]})};n(19);r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.8dc18554.chunk.js.map