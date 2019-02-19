(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),i=n.n(o),l=n(21),c=n(20),u=(n(78),n(5)),d=n(6),s=n(8),m=n(7),p=n(9),f=n(34),h=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t={margin:"5px",backgroundColor:"lightyellow",borderRadius:"5px",padding:"5px",width:"90%"},n={fontWeight:800,borderRadius:"5px"},a={margin:"5px",backgroundColor:"white",minHeight:"50px",borderRadius:"5px"};return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}},this.props.todos.sort(function(e,t){return new Date(e.dueDate)-new Date(t.dueDate)}).map(function(o,i){return r.a.createElement("div",{style:o.completed?Object(f.a)({},t,{backgroundColor:"lightgreen"}):t},r.a.createElement("div",{style:n},o.name),r.a.createElement("div",{style:a},o.description),r.a.createElement("div",null,"Due Date: ",o.dueDate),r.a.createElement("div",null,o.completed?"Complete!":"Incomplete"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.props.dispatch({type:"MARK_COMPLETE",name:o.name})},type:"button"},"Mark Complete"),r.a.createElement("button",{onClick:function(){return e.props.dispatch({type:"DELETE_TODO",name:o.name})},type:"button"},"Delete")))}))}}]),t}(a.Component),b=Object(l.b)(function(e){return{todos:e.todos}},null)(h),E=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e,t,n,a=this,o={backgroundColor:"pink",borderRadius:"10px",width:"250px",padding:"10px",margin:"10px"},i={marginTop:"2px"};return r.a.createElement("div",{style:o},r.a.createElement("form",{style:{display:"flex",flexDirection:"column",alignItems:"center"},onSubmit:function(r){var o,i,l;(r.preventDefault(),e.value.trim())&&(a.props.dispatch((o=e.value,i=t.value,l=n.value,{type:"ADD_TODO",name:o,description:i,dueDate:l})),e.value="",t.value="",n.value="")}},r.a.createElement("div",null,"Name"),r.a.createElement("input",{style:i,ref:function(t){return e=t}}),r.a.createElement("div",null,"Description"),r.a.createElement("input",{style:i,ref:function(e){return t=e}}),r.a.createElement("div",null,"Due Date"),r.a.createElement("input",{style:i,type:"date",ref:function(e){return n=e}}),r.a.createElement("button",{style:i,type:"submit"},"Add Task")))}}]),t}(a.Component),y=Object(l.b)()(E);function g(e){return r.a.createElement("div",{style:{display:"flex",alignItems:"center",height:"30px",fontSize:"20px",color:"white"}},r.a.createElement("input",{type:"checkbox",id:e.filterId,name:e.filterId,style:{marginRight:"10px"}}),r.a.createElement("p",{style:{marginRight:"20px"}},e.filterName))}function v(e){return r.a.createElement("div",{style:{display:"flex",alignItems:"center",height:"30px"}},r.a.createElement("img",{style:{width:"20px"},src:"https://img.icons8.com/metro/26/000000/search.png",alt:"Search"}),r.a.createElement("input",{style:{margin:"0 0 0 15px",width:"120px"},type:"text",size:"10"}))}function x(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",flexShrink:0,padding:"15px"}},r.a.createElement(g,{filterId:"today",filterName:"Today"}),r.a.createElement(g,{filterId:"nextTwoWeeks",filterName:"Next Two Weeks"}),r.a.createElement(v,null))}var O="#ff00ff",D="#1d006d",j="#00d0ff";function w(e){var t={backgroundColor:O,height:"50px"};return r.a.createElement("div",{style:t},e.children)}function k(){return r.a.createElement(w,null,r.a.createElement("p",null,"Checklist"))}function C(){var e={backgroundColor:j,flexGrow:1,width:"100%"};return r.a.createElement("div",{style:e})}function I(){var e={display:"flex",flexDirection:"column",alignItems:"center",minWidth:"150px",height:"100%",backgroundColor:D};return r.a.createElement("div",{style:e},r.a.createElement(x,null),r.a.createElement(C,null))}var T=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement(y,null),r.a.createElement(b,null))}}]),t}(a.Component),R=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e={flex:1,display:"flex",backgroundColor:"#3c0042"};return r.a.createElement("div",{style:e},r.a.createElement(I,null),r.a.createElement(T,null))}}]),t}(a.Component),A=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"center",height:"100vh",flexDirection:"column",display:"flex"}},r.a.createElement(k,null),r.a.createElement(R,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(68);var _=Object(c.b)({todos:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_TODO":var r={name:a.name,description:a.description,dueDate:a.dueDate,completed:!1};return t=r,M.collection("todos").add(t).then(function(e){console.log("Document written with ID: ",e.id)}).catch(function(e){console.error("Error adding document: ",e)}),[].concat(Object(S.a)(n),[r]);case"MARK_COMPLETE":return n.map(function(e){return e.name===a.name?Object(f.a)({},e,{completed:!0}):e});case"DELETE_TODO":return e=a.name,M.collection("todos").where("name","==",e).get().then(function(e){e.forEach(function(e){e.ref.delete()})}),n.filter(function(e){return e.name!==a.name});default:return n}}}),L=n(51);n(133);n.d(t,"db",function(){return M});L.initializeApp({apiKey:"AIzaSyCDpV8g1oV0FuL7m0_xTD8ocd5J0Y9uobM",authDomain:"todo-74ead.firebaseapp.com",databaseURL:"https://todo-74ead.firebaseio.com",projectId:"todo-74ead",storageBucket:"todo-74ead.appspot.com",messagingSenderId:"11718190880"});var M=L.firestore();var W=[];M.collection("todos").get().then(function(e){e.forEach(function(e){console.log(e.data())}),e.forEach(function(e){W.push(e.data())}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.c)(_,e);t.subscribe(function(){return console.log(t.getState())}),i.a.render(r.a.createElement(l.a,{store:t},r.a.createElement(A,null)),document.getElementById("root"))}({todos:W})}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,t,n){e.exports=n(134)},78:function(e,t,n){}},[[69,1,2]]]);
//# sourceMappingURL=main.94d1bffe.chunk.js.map