(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(38),c=n.n(o),i=n(9),l=n(23),s=(n(90),n(3)),u=n(4),d=n(6),p=n(5),m=n(7),f=n(56),h=n(2),b=n(76),g=function(){return{type:"TOGGLE_ADD_FOLDER"}},v=function(e){return{type:"ADD_FOLDER",name:e}},E=function(){return{type:"TOGGLE_LEFT_COLUMN"}},O=n(57);function y(){var e=Object(f.a)(['\n      display: "flex";\n      flex-direction: "column";\n      align-items: "center";\n      width: "100%";\n      //animation: '," 1s linear;\n    "]);return y=function(){return e},e}function D(){var e=Object(f.a)(["\n      0% { transform: scale(.2); }\n      100% { transform: scale(1); }\n    "]);return D=function(){return e},e}var j=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t,n=this,a=(e=new Date,t=new Date(this.props.dueDate),Math.trunc((t-e)/864e5)),o=function(e){var t="80",n=((e>4?4:e)/4*50).toString(10);return e<0?(t="65",n="0"):e>4&&(n="50"),["hsl(",n,",100%,",t,"%)"].join("")}(a),c=this.props.completed?"Complete!":a<0?"Overdue":"Incomplete";return r.a.createElement("div",{className:"card",style:Object(h.a)({},{margin:"5px",backgroundColor:"lightyellow",borderRadius:"5px",padding:"5px",width:"100%"},{backgroundColor:this.props.completed?"lightgreen":o})},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.props.name),r.a.createElement("p",{className:"card-text"},this.props.description),r.a.createElement("div",null,"Due Date: ",this.props.dueDate),r.a.createElement("h5",null,c),r.a.createElement("button",{href:"#",className:"btn btn-info",onClick:function(){return n.props.dispatch({type:"MARK_COMPLETE",id:n.props.id})}},"Mark Complete"),r.a.createElement("button",{href:"#",className:"btn btn-danger",onClick:function(){return n.props.dispatch((e=n.props.id,t=n.props.active_folder,{type:"DELETE_TODO",id:e,folder:t}));var e,t}},"Delete")))}}]),t}(a.Component),_=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Object(O.b)(D()),n=O.a.div(y(),t),a=this.props.folders.find(function(t){return t.name===e.props.page.active_folder}).todos.map(function(t){return e.props.todos.find(function(e){return e.id===t})});return r.a.createElement(n,null,a.sort(function(e,t){return new Date(e.dueDate)-new Date(t.dueDate)}).map(function(t,n){return r.a.createElement(j,Object.assign({},t,{dispatch:e.props.dispatch,active_folder:e.props.page.active_folder}))}))}}]),t}(a.Component),w=Object(i.b)(function(e){return{todos:e.todos,folders:e.folders,page:e.page}},null)(_),C=(n(31),n(32),function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t,n,a=this,o={borderStyle:"solid",borderColor:"#6c7c96",borderRadius:"10px",class:"form-group",padding:"10px",margin:"10px"},c=r.a.createElement("form",{style:o},r.a.createElement("div",{className:"form-group",width:"90%"},r.a.createElement("input",{type:"text",className:"form-control",ref:function(t){return e=t},placeholder:"Task Name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control",ref:function(e){return t=e},placeholder:"Description",rows:"2"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Due Date"),r.a.createElement("input",{type:"date",className:"form-control",ref:function(e){return n=e}})),r.a.createElement("button",{style:{marginRight:"5px"},type:"button",href:"#",className:"btn btn-secondary",onClick:function(){a.props.dispatch({type:"TOGGLE_ADD_TASK"})}},"Cancel"),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(r){var o,c,i,l;(r.preventDefault(),e.value.trim())&&(a.props.dispatch((o=e.value,c=t.value,i=n.value,l=a.props.page.active_folder,{id:Object(b.v4)(),type:"ADD_TODO",name:o,description:c,dueDate:i,folder:l})),e.value="",t.value="",n.value="")}},"Add Task"));if(!this.props.page.add_task_accept_input){var i={borderStyle:"solid",borderColor:"#6c7c96",borderRadius:"10px",padding:"10px",margin:"10px"};c=r.a.createElement("button",{style:i,href:"#",className:"btn btn-primary",onClick:function(){return a.props.dispatch({type:"TOGGLE_ADD_TASK"})}},r.a.createElement("span",{className:"glyphicon glyphicon-plus"},"+")," New Task")}return c}}]),t}(a.Component)),x=Object(i.b)(function(e){return{page:e.page}},null)(C);function k(e){return r.a.createElement("div",{style:{display:"flex",alignItems:"center",height:"30px",fontSize:"20px",color:"white"}},r.a.createElement("input",{type:"checkbox",id:e.filterId,name:e.filterId,style:{marginRight:"10px"}}),r.a.createElement("p",{style:{marginRight:"20px"}},e.filterName))}function N(e){return r.a.createElement("div",{style:{display:"flex",alignItems:"center",height:"30px"}},r.a.createElement("img",{style:{width:"20px"},src:"https://img.icons8.com/metro/26/000000/search.png",alt:"Search"}),r.a.createElement("input",{style:{margin:"0 0 0 15px",width:"120px"},type:"text",size:"10"}))}function T(){return r.a.createElement("div",{style:{padding:"15px"}},r.a.createElement(k,{filterId:"today",filterName:"Today"}),r.a.createElement(k,{filterId:"week",filterName:"Week"}),r.a.createElement(N,null))}function L(e){var t,n={margin:"5px",borderRadius:"5px",padding:"5px"},a=r.a.createElement("button",{style:n,href:"#",className:"btn btn-primary",onClick:function(){return e.dispatch(g())}},r.a.createElement("span",{className:"glyphicon glyphicon-plus"},"+")," New Folder");e.accept_input&&(a=r.a.createElement("div",{style:Object(h.a)({},n,{backgroundColor:"lightgreen",width:"100%"})},r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),e.dispatch(v(t.value))}},r.a.createElement("input",{style:{marginBottom:"5px"},type:"text",className:"form-control",placeholder:"Folder Name",ref:function(e){return t=e}}),r.a.createElement("button",{style:{marginRight:"5px"},type:"button",href:"#",className:"btn btn-secondary",onClick:function(){e.dispatch(g())}},"Cancel"),r.a.createElement("button",{type:"submit",href:"#",className:"btn btn-success"},r.a.createElement("span",{className:"glyphicon glyphicon-plus"},"+")))));return a}var A=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t={margin:"5px",backgroundColor:this.props.active_folder===this.props.name?"yellow":"lightyellow",borderRadius:"5px",padding:"5px",width:"100%",display:"flex"};return r.a.createElement("div",{style:Object(h.a)({},t)},r.a.createElement("div",{style:{flexGrow:1},onClick:function(t){t.preventDefault(),e.props.dispatch({type:"SET_ACTIVE_FOLDER",name:e.props.name})}},r.a.createElement("h5",null,this.props.name)),r.a.createElement("div",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"#"},"Rename"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Delete"))))}}]),t}(a.Component),R=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(L,{accept_input:this.props.page.add_folder_accept_input,dispatch:this.props.dispatch}),r.a.createElement("div",{style:{width:"100%"}},this.props.folders.sort(function(e,t){return e.name-t.name}).map(function(t,n){return r.a.createElement(A,Object.assign({},t,{dispatch:e.props.dispatch,active_folder:e.props.page.active_folder}))})))}}]),t}(a.Component),I=Object(i.b)(function(e){return{folders:e.folders,page:e.page}},null)(R),G="#6c7c96";function S(e){var t={backgroundColor:G,minHeight:"100%"};return r.a.createElement("div",{className:e.calcClass,style:t},r.a.createElement(T,null),r.a.createElement(I,null))}var F=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.calcClass},r.a.createElement(x,null),r.a.createElement(w,null))}}]),t}(a.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.page&&e.page.leftColumn&&e.page.leftColumn.visible;if((this.props.page&&this.props.page.leftColumn&&this.props.page.leftColumn.visible)!==n)return{stateFoo:"valueBar"}}},{key:"render",value:function(){var e="d-none d-sm-block col-sm-4",t="col-12 col-sm-8";return this.props.page&&this.props.page.leftColumn&&this.props.page.leftColumn.visible&&(e="col-12 col-sm-4",t="d-none d-sm-block col-sm-8"),r.a.createElement("div",{className:"container",style:{paddingTop:"50px"}},r.a.createElement("div",{className:"row"},r.a.createElement(S,{calcClass:e,style:{backgroundColor:"#9ab9ea"}}),r.a.createElement(F,{calcClass:t})))}}]),t}(a.Component),K=Object(i.b)(function(e){return{page:e.page}},null)(M),z="#47476b";function B(e){var t={backgroundColor:z,height:"50px",width:"100%",position:"fixed",zIndex:999};return r.a.createElement("div",{style:t},e.children)}var V=Object(i.b)()(function(e){return r.a.createElement(B,null,r.a.createElement("nav",{className:"navbar navbar-light navbar-2"},r.a.createElement("div",{className:"d-block d-sm-none"},r.a.createElement("button",{type:"button",onClick:function(){return e.dispatch(E())}},r.a.createElement("span",{className:"navbar-toggler-icon"})))))}),J=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={textAlign:"center",minHeight:"100vh",backgroundColor:"#e0e0eb"};return r.a.createElement("div",{style:e},r.a.createElement(V,null),r.a.createElement(K,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=n(79);function U(e){Y.collection("folders").where("name","==",e.name).get().then(function(t){t.forEach(function(t){console.log(t.id," => ",t.data()),Y.collection("folders").doc(t.id).update(e)})})}var W=Object(l.b)({todos:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_TODO":var r={id:a.id,name:a.name,description:a.description,dueDate:a.dueDate,completed:!1};return t=r,Y.collection("todos").add(t).then(function(e){console.log("Document written with ID: ",e.id)}).catch(function(e){console.error("Error adding document: ",e)}),[].concat(Object(P.a)(n),[r]);case"MARK_COMPLETE":return function(e,t,n){var a=Y.collection("todos").where("id","==",e),r={};r[t]=n,a.get().then(function(e){e.forEach(function(e){e.ref.update(r)})})}(a.id,"completed",!0),n.map(function(e){return e.id===a.id?Object(h.a)({},e,{completed:!0}):e});case"DELETE_TODO":return a.id&&n.filter(function(e){return e.id===a.id})&&(e=a.id,Y.collection("todos").where("id","==",e).get().then(function(e){e.forEach(function(e){e.ref.delete()})})),n.filter(function(e){return e.id!==a.id});default:return n}},folders:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_TODO":var a=t.find(function(e){return e.name===n.folder|"default"});return a.todos.push(n.id),U(a),t;case"DELETE_TODO":console.log("DELETE"),console.log(n.id);var r=t.find(function(e){return e.name===n.folder|"default"});return r.todos=r.todos.filter(function(e){return e!==n.id}),U(r),t;case"ADD_FOLDER":var o={name:n.name,todos:[]};return e=o,Y.collection("folders").add(e).then(function(e){console.log("Document written with ID: ",e.id)}).catch(function(e){console.error("Error adding document: ",e)}),t.concat([o]);default:return t}},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LEFT_COLUMN":var n=e&&e.leftColumn&&e.leftColumn.visible;return Object(h.a)({},e,{leftColumn:Object(h.a)({},e.leftColumn,{visible:!n})});case"SET_ACTIVE_FOLDER":return Object(h.a)({},e,{active_folder:t.name});case"TOGGLE_ADD_FOLDER":var a=e&&e.add_folder_accept_input;return Object(h.a)({},e,{add_folder_accept_input:!a});case"TOGGLE_ADD_TASK":var r=e&&e.add_task_accept_input;return Object(h.a)({},e,{add_task_accept_input:!r});case"ADD_FOLDER":return Object(h.a)({},e,{add_folder_accept_input:!1});case"ADD_TODO":return Object(h.a)({},e,{add_task_accept_input:!1});default:return e}}}),H=n(60);n(149);n.d(t,"db",function(){return Y});H.initializeApp({apiKey:"AIzaSyCDpV8g1oV0FuL7m0_xTD8ocd5J0Y9uobM",authDomain:"todo-74ead.firebaseapp.com",databaseURL:"https://todo-74ead.firebaseio.com",projectId:"todo-74ead",storageBucket:"todo-74ead.appspot.com",messagingSenderId:"11718190880"});var Y=H.firestore();var $=[],q=[];Y.collection("todos").get().then(function(e){e.forEach(function(e){console.log(e.data())}),e.forEach(function(e){$.push(e.data())}),Y.collection("folders").get().then(function(e){e.forEach(function(e){console.log(e.data())}),e.forEach(function(e){q.push(e.data())}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(l.c)(W,e);t.subscribe(function(){return console.log(t.getState())}),c.a.render(r.a.createElement(i.a,{store:t},r.a.createElement(J,null)),document.getElementById("root"))}({todos:$,folders:q,page:{active_folder:"default"}})})}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,n){e.exports=n(150)},90:function(e,t,n){}},[[81,1,2]]]);
//# sourceMappingURL=main.beaa72b9.chunk.js.map