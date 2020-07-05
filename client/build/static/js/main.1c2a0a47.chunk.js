(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/banner3.05a54d2b.jpeg"},19:function(e,t,a){e.exports=a(46)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),l=a.n(s),i=a(2),c=a(3),o=a(4),m=a(5),u=a(6),d=a.n(u),p=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={ranking:[]},e.fetchRankingList=function(){d.a.get("../".concat(e.props.url)).then((function(t){if(e.props.url.includes("userlist")){var a=t.data,n=[];for(var r in a)r.includes("rank")&&n.push(a[r]);e.setState({ranking:n})}else{var s=t.data.slice(0,10);e.setState({ranking:s})}}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.fetchRankingList()}},{key:"componentDidUpdate",value:function(e){this.props.url!==e.url&&this.fetchRankingList()}},{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("h4",null,this.props.title),r.a.createElement("ol",null,this.state.ranking.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))}}]),a}(r.a.Component),b=a(18),h=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={boxrecList:[]},e.renderRankSelectOption=function(){if(e.state.boxrecList){var t=e.state.boxrecList.map((function(e,t){return r.a.createElement("option",{key:t},e)}));return t.unshift(r.a.createElement("option",{key:"default-select",value:"DEFAULT",hidden:!0,disabled:!0},"Select")),t}},e.renderRankSelect=function(){if(e.state.boxrecList){for(var t=[],a=1;a<=10;a++)t.push(r.a.createElement("div",{key:a,className:"field is-horizontal"},r.a.createElement("div",{className:"field-label is-normal"},r.a.createElement("label",{className:"label"},"Rank #",a)),r.a.createElement("div",{className:"field-body"},r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"select"},r.a.createElement("select",{defaultValue:"DEFAULT",name:"rank_".concat(a),required:!0},e.renderRankSelectOption())))))));return t}return r.a.createElement("div",null,"Loading..")},e.onNewUserListFormSubmit=function(t){t.preventDefault();var a,n={},r=new FormData(t.target),s=!1,l=Object(b.a)(r.entries());try{for(l.s();!(a=l.n()).done;){var i=a.value,c=document.getElementsByName(i[0])[0].parentElement;c.classList.remove("is-danger"),Object.values(n).indexOf(i[1])>-1&&(c.classList.add("is-danger"),s=!0),n[i[0]]=i[1]}}catch(o){l.e(o)}finally{l.f()}s?document.getElementById("test-hidden").style.visibility="visible":d.a.post("/userlist",n).then((function(t){console.log(t),e.props.onNewUserSubmit(n.userID)})).catch((function(e){console.log(e)}))},e.onLoadUserSubmit=function(t){t.preventDefault();var a=new FormData(t.target);e.props.onLoadUserSubmit(t,a.getAll("userID")[0])},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("/rankings/boxrec").then((function(t){var a=t.data;a.sort(),e.setState({boxrecList:a})})),document.getElementById("test-hidden").style.visibility="hidden"}},{key:"render",value:function(){return r.a.createElement("div",{className:"field"},r.a.createElement("form",{onSubmit:this.onLoadUserSubmit},r.a.createElement("p",{className:"help"},"Have a list already? Load it here"),r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control is-expanded"},r.a.createElement("input",{name:"userID",className:"input",type:"text",placeholder:"User ID"})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-link"},"Load")))),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:this.onNewUserListFormSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Create your list")),r.a.createElement("div",{className:"field"},r.a.createElement("input",{name:"userID",className:"input",type:"text",placeholder:"User ID",required:!0})),r.a.createElement("div",{id:"rank-select-container",className:"field"},this.renderRankSelect(),r.a.createElement("p",{id:"test-hidden",className:"help is-danger"},"Invalid input: duplicate entry")),r.a.createElement("div",{className:"field is-grouped"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-link"},"Submit")),r.a.createElement("div",{className:"control"},r.a.createElement("button",{onClick:this.props.toggleModal,className:"button is-link is-light"},"Cancel")))))}}]),a}(r.a.Component),f=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return this.props.show?r.a.createElement("div",{className:"modal is-active"},r.a.createElement("div",{className:"modal-background"}),r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"box"},r.a.createElement(h,{key:"user-list-form",onLoadUserSubmit:this.props.onLoadUserSubmit,toggleModal:this.props.toggleModal,onNewUserSubmit:this.props.onNewUserSubmit}))),r.a.createElement("button",{className:"modal-close is-large","aria-label":"close",onClick:this.props.toggleModal})):null}}]),a}(r.a.Component),v=(a(41),function(){var e={espn:"https://www.espn.com/boxing/story/_/id/28785006/pound-pound-rankings-tyson-fury-makes-debut",cbssports:"https://www.cbssports.com/boxing/news/boxing-pound-for-pound-rankings-tyson-fury-becomes-a-crossover-star-in-grabbing-heavyweight-title/",complex:"https://www.complex.com/sports/best-pound-for-pound-boxers-ranked/",forbes:"https://www.forbes.com/sites/joshkatzowitz/2020/04/07/the-10-best-pound-for-pound-fighters-in-boxing-april-2020/#1ed140324d2d"},t=Object.keys(e).map((function(t){return r.a.createElement("li",{key:t,className:"other-list-item"},r.a.createElement("a",{href:e[t]},t))}));return r.a.createElement("div",{className:"container content other-list-container"},r.a.createElement("h2",null,"Misc. Lists"),r.a.createElement("ul",{className:"other-list"},t))}),E=(a(42),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={showUserListModal:!1,mylist:null,mylistURL:null},e.renderRankLists=function(){return r.a.createElement(r.a.Fragment,null,e.state.mylist&&r.a.createElement("div",{className:"rank-list column"},r.a.createElement(p,{key:"ml",title:e.state.mylist,url:e.state.mylistURL})),r.a.createElement("div",{className:"rank-list column"},r.a.createElement(p,{key:"tpc",title:"The People's Champ",url:"community"})),r.a.createElement("div",{className:"rank-list column"},r.a.createElement(p,{key:"br",title:"Boxrec",url:"rankings/boxrec"})),r.a.createElement("div",{className:"rank-list column"},r.a.createElement(p,{key:"tbrb",title:"TBRB",url:"rankings/tbrb"})),r.a.createElement("div",{className:"rank-list column"},r.a.createElement(p,{key:"ring",title:"The Ring",url:"rankings/thering"})))},e.toggleModal=function(t){t.preventDefault(),e.setState({showUserListModal:!e.state.showUserListModal})},e.onLoadUserSubmit=function(t,a){t.preventDefault(),e.setState({mylist:"".concat(a,"'s list"),mylistURL:"userlist/".concat(a),showUserListModal:!1})},e.onNewUserSubmit=function(t){e.setState({mylist:"".concat(t,"'s list"),mylistURL:"userlist/".concat(t),showUserListModal:!1})},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"is-centered"},r.a.createElement("button",{className:"button is-text create-button",onClick:this.toggleModal},"Create / Load List"),r.a.createElement("div",{className:"columns rank-list-col"},this.renderRankLists()),r.a.createElement(v,null),r.a.createElement(f,{show:this.state.showUserListModal,toggleModal:this.toggleModal,onLoadUserSubmit:this.onLoadUserSubmit,onNewUserSubmit:this.onNewUserSubmit}))}}]),a}(r.a.Component)),g=a(17),k=a.n(g),y=(a(43),function(){return r.a.createElement("div",{className:"container content"},r.a.createElement("div",{className:"banner"},r.a.createElement("img",{className:"banner-img",src:k.a,alt:"banner"})),r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,"THE PEOPLE'S CHAMP")))}),N=(a(44),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(y,null),r.a.createElement(E,null))}}]),a}(r.a.Component));a(45);l.a.render(r.a.createElement(N,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1c2a0a47.chunk.js.map