(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(t,e,o){},function(t,e,o){"use strict";(function(t){var n=o(13),l=o(12);let s=0;e.a={beforeRouteLeave(e,o,n){console.log("todo update enter"),t.confirm("确认要离开当前页面么？")&&n()},components:{Item:n.a,Tabs:l.a},data:()=>({todos:[],filter:"all"}),computed:{filteredTodos(){if("all"===this.filter)return this.todos;const t="completed"===this.filter;return this.todos.filter(e=>t===e.completed)}},methods:{addTodo(t){this.todos.unshift({id:s++,content:t.target.value.trim(),completed:!1}),t.target.value=""},deleteTodo(t){this.todos.splice(this.todos.findIndex(e=>e.id===t),1)},toggleFilter(t){this.filter=t},clearAllCompleted(){this.todos=this.todos.filter(t=>!t.completed)}}}}).call(this,o(2))},function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},,function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o(19),e.default={data:function(){return{author:"PK"}},render:function(){var t=arguments[0];return t("div",{attrs:{id:"footer"}},[t("span",["study by ",this.author])])}}},,function(t,e,o){"use strict";var n={props:{filter:{type:String,required:!0},todos:{type:Array,required:!0}},data:()=>({states:["all","active","completed"]}),computed:{unFinishedTodoLength(){return this.todos.filter(t=>!t.completed).length}},methods:{toggleFilter(t){this.$emit("toggle",t)},clearAllCompleted(){this.$emit("clearAllCompleted")}}},l=(o(23),o(0)),s=Object(l.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"helper"},[o("span",{staticClass:"left"},[t._v(t._s(t.unFinishedTodoLength)+" items left")]),t._v(" "),o("span",{staticClass:"tabs"},t._l(t.states,function(e){return o("span",{key:e,class:[e,t.filter===e?"actived":""],on:{click:function(o){t.toggleFilter(e)}}},[t._v("\n            "+t._s(e)+"\n        ")])})),t._v(" "),o("span",{staticClass:"clear",on:{click:t.clearAllCompleted}},[t._v("Clear Completed")])])},[],!1,null,"2ecf4b09",null);e.a=s.exports},function(t,e,o){"use strict";var n={props:{todo:{type:Object,required:!0}},methods:{deleteTodo(){this.$emit("del",this.todo.id)}}},l=(o(21),o(0)),s=Object(l.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:["todo-item",t.todo.completed?"completed":""]},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.completed,expression:"todo.completed"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.todo.completed)?t._i(t.todo.completed,null)>-1:t.todo.completed},on:{change:function(e){var o=t.todo.completed,n=e.target,l=!!n.checked;if(Array.isArray(o)){var s=t._i(o,null);n.checked?s<0&&t.$set(t.todo,"completed",o.concat([null])):s>-1&&t.$set(t.todo,"completed",o.slice(0,s).concat(o.slice(s+1)))}else t.$set(t.todo,"completed",l)}}}),t._v(" "),o("label",[t._v(t._s(t.todo.content))]),t._v(" "),o("button",{staticClass:"destroy",on:{click:t.deleteTodo}})])},[],!1,null,"3a701790",null);e.a=s.exports},,,,function(t,e,o){"use strict";var n=o(3);o.n(n).a},,function(t,e,o){},,function(t,e,o){"use strict";var n=o(5);o.n(n).a},,function(t,e,o){"use strict";var n=o(6);o.n(n).a},,function(t,e,o){"use strict";var n=o(7);o.n(n).a},,function(t,e,o){"use strict";var n=o(8);o.n(n).a},,function(t,e,o){},,function(t,e,o){"use strict";o.r(e);var n=o(1),l=o(9),s=(o(17),o(0)),i=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"main-header"},[e("h1",[this._v("JTodo")])])}],!1,null,"30cdcd0a",null).exports,r=o(10),a=o.n(r),c=o(4).a,d=(o(25),Object(s.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"real-app"},[o("input",{staticClass:"add-input",attrs:{type:"text",autofocus:"autofocus",placeholder:"接下来要做什么"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null}}}),t._v(" "),t._l(t.filteredTodos,function(e){return o("Item",{key:e.id,attrs:{todo:e},on:{del:t.deleteTodo}})}),t._v(" "),o("Tabs",{attrs:{filter:t.filter,todos:t.todos},on:{toggle:t.toggleFilter,clearAllCompleted:t.clearAllCompleted}}),t._v(" "),o("router-view")],2)},[],!1,null,"7dc9ad89",null).exports),u={components:{Header:i,Footer:a.a,Todo:d},data:()=>({})},p=(o(27),Object(s.a)(u,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"cover"}}),t._v(" "),o("Header"),t._v(" "),o("router-link",{attrs:{to:"/login"}},[t._v("login")]),t._v(" "),o("router-link",{attrs:{to:"/test/list"}},[t._v("testlist")]),t._v(" "),o("router-link",{attrs:{to:"/test/update"}},[t._v("testupdate")]),t._v(" "),o("router-view"),t._v(" "),o("Footer")],1)},[],!1,null,"13c7eba9",null).exports),f=o(11),h=o.n(f);o(29);var v=[{path:"/",redirect:"/login"},{path:"/login",component:()=>o.e(2).then(o.bind(null,36))},{path:"/panel",component:()=>o.e(3).then(o.bind(null,37)),children:[{path:"/test/list",component:()=>o.e(4).then(o.bind(null,39))},{path:"/test/update",component:()=>o.e(5).then(o.bind(null,38))}]}];n.default.use(l.a),n.default.use(h.a);const m=new l.a({routes:v,mode:"history",linkActiveClass:"active-link",linkExactActiveClass:"exact-active-link",scrollBehavior:(t,e,o)=>o?(console.log("savedPosition---\x3e",o),o):{x:0,y:0},fallback:!0});m.beforeEach((t,e,o)=>{console.log("beforeEach"),o()}),new n.default({router:m,render:t=>t(p)}).$mount("#root")}],[[31,6,1]]]);