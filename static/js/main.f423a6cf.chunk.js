(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),s=c(6),r=c(14),i=c(5),l=c(12),o=c(13),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(4),h=function(e){return{type:"filter/Status",payload:e}},f=function(e){return{type:"filter/Query",payload:e}},m={status:"all",query:""},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/Status":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});case"filter/Query":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});default:return e}},x=function(e){return{type:"todos/ADD",payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/ADD"===t.type?t.payload:e},v=Object(i.combineReducers)({currentTodo:j,filter:O,todos:p}),y=Object(i.createStore)(v,Object(l.composeWithDevTools)(Object(i.applyMiddleware)(o.a))),N=c(3),g=c(0),T=(c(22),c(23),s.b),k=s.c,w=c(1),S=function(){var e=T(),t=k((function(e){return e.todos})),c=k((function(e){return e.currentTodo})),n=k((function(e){return e.filter.status})),a=k((function(e){return e.filter.query})),s=Object(g.useMemo)((function(){var e=t.filter((function(e){switch(n){case"active":return!e.completed;case"completed":return e.completed;default:return e}}));return a&&(e=e.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}))),e}),[n,a,t]);return s?Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"#"}),Object(w.jsx)("th",{children:Object(w.jsx)("span",{className:"icon",children:Object(w.jsx)("i",{className:"fas fa-check"})})}),Object(w.jsx)("th",{children:"Title"}),Object(w.jsx)("th",{children:" "})]})}),Object(w.jsx)("tbody",{children:s.map((function(t){return Object(w.jsxs)("tr",{"data-cy":"todo",className:t.id===(null===c||void 0===c?void 0:c.id)?"has-background-info-light":"",children:[Object(w.jsx)("td",{className:"is-vcentered",children:t.id}),Object(w.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(w.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(w.jsx)("i",{className:"fas fa-check"})})}),Object(w.jsx)("td",{className:"is-vcentered is-expanded",children:Object(w.jsx)("p",{className:t.completed?"has-text-success":"has-text-danger",children:t.title})}),Object(w.jsx)("td",{className:"has-text-right is-vcentered",children:t.id===(null===c||void 0===c?void 0:c.id)?Object(w.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",children:Object(w.jsx)("span",{className:"icon",children:Object(w.jsx)("i",{className:"far fa-eye-slash"})})}):Object(w.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(t){e(d(t))}(t)},children:Object(w.jsx)("span",{className:"icon",children:Object(w.jsx)("i",{className:"far fa-eye"})})})})]},t.id)}))})]})}):Object(w.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})},E=function(){var e=T(),t=k((function(e){return e.filter.status})),c=k((function(e){return e.filter.query})),n=function(t){e(f(t))};return Object(w.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(w.jsx)("p",{className:"control",children:Object(w.jsx)("span",{className:"select",children:Object(w.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(t){return c=t.target.value,void e(h(c));var c},children:[Object(w.jsx)("option",{value:"all",children:"All"}),Object(w.jsx)("option",{value:"active",children:"Active"}),Object(w.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(w.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(w.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){return n(e.target.value)}}),Object(w.jsx)("span",{className:"icon is-left",children:Object(w.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(w.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(w.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return n("")}})})]})]})},C=(c(25),function(){return Object(w.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(w.jsx)("div",{className:"Loader__content"})})});function D(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var _=function(){var e=T(),t=Object(g.useState)(null),c=Object(N.a)(t,2),n=c[0],a=c[1],s=Object(g.useState)(!0),r=Object(N.a)(s,2),i=r[0],l=r[1],o=k((function(e){return e.currentTodo}));Object(g.useEffect)((function(){var e;o&&(e=o.userId,D("/users/".concat(e))).then(a).finally((function(){return l(!1)}))}),[]);return Object(w.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(w.jsx)("div",{className:"modal-background"}),i?Object(w.jsx)(C,{}):Object(w.jsxs)("div",{className:"modal-card",children:[Object(w.jsxs)("header",{className:"modal-card-head",children:[Object(w.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===o||void 0===o?void 0:o.id)}),Object(w.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return e(u())}})]}),Object(w.jsxs)("div",{className:"modal-card-body",children:[Object(w.jsx)("p",{className:"block","data-cy":"modal-title",children:null===o||void 0===o?void 0:o.title}),Object(w.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==o&&void 0!==o&&o.completed?Object(w.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(w.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(w.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})},q=function(){var e=T(),t=k((function(e){return e.currentTodo})),c=Object(g.useState)(!1),n=Object(N.a)(c,2),a=n[0],s=n[1];return Object(g.useEffect)((function(){s(!0),D("/todos").then((function(t){return e(x(t))})).finally((function(){return s(!1)}))}),[]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"section",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"box",children:[Object(w.jsx)("h1",{className:"title",children:"Todos:"}),Object(w.jsx)("div",{className:"block",children:Object(w.jsx)(E,{})}),Object(w.jsx)("div",{className:"block",children:a?Object(w.jsx)(C,{}):Object(w.jsx)(S,{})})]})})}),t&&Object(w.jsx)(_,{})]})},A=function(){return Object(w.jsx)(s.a,{store:y,children:Object(w.jsx)(r.a,{children:Object(w.jsx)(q,{})})})};a.a.render(Object(w.jsx)(A,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.f423a6cf.chunk.js.map