(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(30)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(18),r=n(0),l=n.n(r),c=n(16),i=n.n(c),o=n(4),u=n(10),s=(n(28),n(5)),m=n(6),p=n(8),d=n(7),f=n(9),h=(n(29),"#47476b"),b="#6c7c96",y="#9ab9ea";function E(e){var t={backgroundColor:h,height:"50px"};return l.a.createElement("div",{style:t},e.children)}function v(){return l.a.createElement(E,null,l.a.createElement("p",null,"Checklist"))}function g(e){return l.a.createElement("div",{style:{display:"flex",alignItems:"center",height:"30px",fontSize:"20px"}},l.a.createElement("input",{type:"checkbox",id:e.filterId,name:e.filterId,style:{marginRight:"10px"}}),l.a.createElement("p",{style:{marginRight:"20px"}},e.filterName))}function O(e){return l.a.createElement("div",{style:{display:"flex",alignItems:"center",height:"30px"}},l.a.createElement("img",{style:{width:"20px"},src:"https://img.icons8.com/metro/26/000000/search.png",alt:"Search"}),l.a.createElement("input",{style:{margin:"0 0 0 15px",width:"120px"},type:"text",size:"10"}))}function x(){return l.a.createElement("div",{style:{display:"flex",flexDirection:"column",flexShrink:0,padding:"15px"}},l.a.createElement(g,{filterId:"today",filterName:"Today"}),l.a.createElement(g,{filterId:"nextTwoWeeks",filterName:"Next Two Weeks"}),l.a.createElement(O,null))}function j(){var e={backgroundColor:y,flexGrow:1,width:"100%"};return l.a.createElement("div",{style:e})}function w(){var e={display:"flex",flexDirection:"column",alignItems:"center",minWidth:"150px",height:"100%",backgroundColor:b};return l.a.createElement("div",{style:e},l.a.createElement(x,null),l.a.createElement(j,null))}var k=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("ul",null,this.props.todos.map(function(e,t){return l.a.createElement("li",{key:t},e.description)}))}}]),t}(r.Component),C=Object(o.b)(function(e){return{todos:e}},null)(k),D=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this;return l.a.createElement("div",{style:{flex:1}},l.a.createElement("form",{onSubmit:function(n){(n.preventDefault(),e.value.trim())&&(t.props.dispatch({type:"ADD_TODO",description:e.value}),e.value="")}},l.a.createElement("input",{ref:function(t){return e=t}}),l.a.createElement("button",{type:"submit"},"Add Todo")),l.a.createElement(C,null))}}]),t}(r.Component),I=Object(o.b)()(D),T=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e={flex:1,display:"flex",backgroundColor:"#e0e0eb"};return l.a.createElement("div",{style:e},l.a.createElement(w,null),l.a.createElement(I,null))}}]),t}(r.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null),l.a.createElement(T,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=Object(u.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(a.a)(e),[{name:t.name,description:t.description,completed:!1}]);default:return e}});S.subscribe(function(){return console.log(S.getState())}),i.a.render(l.a.createElement(o.a,{store:S},l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.c30b94c6.chunk.js.map