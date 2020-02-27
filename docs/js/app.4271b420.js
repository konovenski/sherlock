(function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=t[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},s={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),s=r.n(n);s.a},"2c57":function(e,t,r){},"3e41":function(e,t,r){"use strict";var n=r("2c57"),s=r.n(n);s.a},"497b":function(e,t,r){"use strict";var n=r("bf7f"),s=r.n(n);s.a},"539f":function(e,t,r){"use strict";var n=r("9acb"),s=r.n(n);s.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("a026"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("navigation"),r("div",{staticClass:"main-container"},[r("div",{staticClass:"center-container"},[r("router-view")],1)])],1)},a=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navigation"},[r("ul",[e.isAuthenticated?r("li",{on:{click:e.logout}},[r("span",{staticClass:"logout"},[e._v("Logout")])]):e._e(),e.isAuthenticated?r("li",{on:{click:e.repos}},[r("span",{staticClass:"logout"},[e._v("Repos")])]):e._e()])])},i=[],c=r("5530"),u=r("2f62"),l="AUTH_REQUEST",p="AUTH_SUCCESS",f="AUTH_LOGOUT",d={name:"navigation",methods:{logout:function(){var e=this;this.$store.dispatch(f).then((function(){return e.$router.push("/login")}))},repos:function(){this.$router.push("/repos")}},computed:Object(c["a"])({},Object(u["b"])(["isAuthenticated"]))},m=d,h=(r("497b"),r("2877")),v=Object(h["a"])(m,o,i,!1,null,"03e7c83f",null),b=v.exports,g={components:{Navigation:b},name:"App"},_=g,w=(r("034f"),r("3e41"),Object(h["a"])(_,s,a,!1,null,"1d6e386e",null)),y=w.exports,O=r("8c4f"),S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Select repositories to inspect:")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.inspect(t)}}},[e._l(e.repos,(function(t){return r("div",{key:t.uuid},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{type:"checkbox"},domProps:{value:t.full_name,checked:Array.isArray(e.selected)?e._i(e.selected,t.full_name)>-1:e.selected},on:{change:function(r){var n=e.selected,s=r.target,a=!!s.checked;if(Array.isArray(n)){var o=t.full_name,i=e._i(n,o);s.checked?i<0&&(e.selected=n.concat([o])):i>-1&&(e.selected=n.slice(0,i).concat(n.slice(i+1)))}else e.selected=a}}}),r("label",[e._v(e._s(t.full_name))])])})),r("hr"),r("button",{attrs:{type:"submit"}},[e._v(" Submit")])],2),r("button",{on:{click:e.getRepos}},[e._v("Refresh list")])])},k=[],x=(r("96cf"),r("1da1")),j="REPOS_REQUEST",P="REPOS_SUCCESS",E="REPOS_CLEANUP",$={name:"repo-list",data:function(){return{repos:this.$store.getters.repos||[],selected:[]}},methods:{getRepos:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$store.dispatch(j,this.$store.getters.credentials);case 3:this.repos=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),alert("Wrong credentials!");case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}(),inspect:function(){var e=this.selected;this.$router.push({name:"UserList",query:{repos:e}})}},created:function(){this.getRepos()}},A=$,R=Object(h["a"])(A,S,k,!1,null,"92a0c164",null),C=R.exports,U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-table",{attrs:{items:e.users,fields:e.fields,striped:"",responsive:"sm"},scopedSlots:e._u([{key:"cell(commits)",fn:function(t){return[r("div",[e._v(e._s(t.item.commits.length))])]}},{key:"cell(merges)",fn:function(t){return[r("div",[e._v(e._s(t.item.merges.length))])]}},{key:"cell(+)",fn:function(t){return[r("b-button",{staticClass:"mr-2",attrs:{size:"sm"},on:{click:t.toggleDetails}},[e._v(" "+e._s(t.detailsShowing?"Hide":"Show")+" Details ")])]}},{key:"row-details",fn:function(t){return[r("hr"),r("b-card",[r("h2",[e._v("Commits")]),r("b-col",e._l(t.item.commits,(function(t){return r("b-row",{key:t.hash},[r("a",{attrs:{href:t.links.html.href,target:"_blank"}},[e._v(e._s(t.summary.raw.substr(0,50))+"...")])])})),1),r("h2",[e._v("Merges")]),r("b-col",e._l(t.item.merges,(function(t){return r("b-row",{key:t.hash},[r("a",{attrs:{href:t.links.html.href,target:"_blank"}},[e._v(e._s(t.summary.raw.substr(0,50))+"...")])])})),1)],1),r("hr")]}}])})],1)},T=[],L=(r("a4d3"),r("e01a"),r("d28b"),r("99af"),r("caad"),r("d3b7"),r("07ac"),r("2532"),r("3ca3"),r("ddb0"),r("2909")),I="COMMIT_REQUEST";function N(e){var t=new Date(e).toDateString(),r=(new Date).toDateString();return r==t}var D,M,J,q,H={name:"user-list",data:function(){var e=this.$route.query.repos||[];return!Array.isArray(e)&&e&&(e=[e]),{fields:["name","commits","merges","+"],repos:e,users:[]}},methods:{list:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t,r,n,s,a,o,i,c,u,l,p,f,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=[],r=!0,n=!1,s=void 0,e.prev=4,a=this.repos[Symbol.iterator]();case 6:if(r=(o=a.next()).done){e.next=15;break}return i=o.value,e.next=10,this.$store.dispatch(I,{user:this.$store.getters.credentials,repo:i});case 10:c=e.sent,t=[].concat(Object(L["a"])(t),Object(L["a"])(c));case 12:r=!0,e.next=6;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](4),n=!0,s=e.t0;case 21:e.prev=21,e.prev=22,r||null==a.return||a.return();case 24:if(e.prev=24,!n){e.next=27;break}throw s;case 27:return e.finish(24);case 28:return e.finish(21);case 29:u={},l=0,p=t;case 31:if(!(l<p.length)){e.next=47;break}if(f=p[l],N(f.date)){e.next=35;break}return e.abrupt("continue",44);case 35:if(d=f.author.raw,u[d]||(u[d]={name:d,commits:[],merges:[]}),!(f.parents.length>1)){e.next=40;break}return u[d].merges.push(f),e.abrupt("continue",44);case 40:if(!f.message.toLowerCase().includes("merge")){e.next=43;break}return u[d].merges.push(f),e.abrupt("continue",44);case 43:u[d].commits.push(f);case 44:l++,e.next=31;break;case 47:this.users=Object.values(u);case 48:case"end":return e.stop()}}),e,this,[[4,17,21,29],[22,,24,28]])})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.list()}},Q=H,W=Object(h["a"])(Q,U,T,!1,null,null,null),z=W.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{staticClass:"login",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("h1",[e._v("Your bitbucket credentials")]),r("label",[e._v("Login")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{required:"",type:"text",placeholder:"Login"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),r("label",[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{required:"",type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("hr"),r("button",{attrs:{type:"submit"}},[e._v(" Submit ")])])])},Y=[],B={name:"login",data:function(){return{username:"",password:""}},methods:{login:function(){var e=this,t=this.username,r=this.password;this.$store.dispatch(l,{username:t,password:r}).then((function(){e.$router.push("/repos")})).catch((function(){alert("Wrong credentials!")}))}}},F=B,K=(r("539f"),Object(h["a"])(F,G,Y,!1,null,null,null)),V=K.exports,X=r("ade3"),Z=r("bc3a"),ee=r.n(Z),te={credentials:JSON.parse(localStorage.getItem("credentials"))||""},re={isAuthenticated:function(e){return!!e.credentials},credentials:function(e){return e.credentials}},ne=(D={},Object(X["a"])(D,l,(function(e,t){var r=e.commit;return new Promise((function(e,n){ee.a.get("https://api.bitbucket.org/2.0/user",{auth:t}).then((function(){localStorage.setItem("credentials",JSON.stringify(t)),r(p,t),e()})).catch((function(e){localStorage.removeItem("credentials"),n(e)}))}))})),Object(X["a"])(D,f,(function(e){var t=e.commit;return new Promise((function(e){t(f),localStorage.removeItem("credentials"),e()}))})),D),se=(M={},Object(X["a"])(M,p,(function(e,t){e.credentials=t})),Object(X["a"])(M,f,(function(e){e.credentials=""})),M),ae={state:te,getters:re,actions:ne,mutations:se},oe=(r("d81d"),{repos:JSON.parse(localStorage.getItem("repos"))||""}),ie={isUploaded:function(e){return!!e.repos},repos:function(e){return e.repos}};function ce(e){return e.data.values.map((function(e){return e.repository}))}var ue=(J={},Object(X["a"])(J,j,(function(e,t){var r=e.commit;return new Promise((function(e,n){ee.a.get("https://api.bitbucket.org/2.0/user/permissions/repositories?pagelen=100",{auth:t}).then((function(t){var n=ce(t);localStorage.setItem("repos",JSON.stringify(n)),r(P,n),e(n)})).catch((function(e){localStorage.removeItem("repos"),n(e)}))}))})),Object(X["a"])(J,E,(function(e){var t=e.commit;return new Promise((function(e){t(E),localStorage.removeItem("repos"),e()}))})),J),le=(q={},Object(X["a"])(q,P,(function(e,t){e.repos=t})),Object(X["a"])(q,E,(function(e){e.repos=""})),q),pe={state:oe,getters:ie,actions:ue,mutations:le},fe={},de={},me={},he=Object(X["a"])({},I,(function(e,t){var r=t.user,n=t.repo;return new Promise((function(e,t){ee.a.get("https://api.bitbucket.org/2.0/repositories/".concat(n,"/commits?pagelen=100"),{auth:r}).then((function(t){e(t.data.values)})).catch((function(e){t(e)}))}))})),ve={state:fe,getters:de,actions:he,mutations:me};n["default"].use(u["a"]);var be=!1,ge=new u["a"].Store({modules:{auth:ae,repo:pe,inspection:ve},strict:be});n["default"].use(O["a"]);var _e=function(e,t,r){ge.getters.isAuthenticated?r("/users"):r()},we=function(e,t,r){ge.getters.isAuthenticated?r():r("/login")},ye=new O["a"]({mode:"history",routes:[{path:"/",redirect:"repos"},{path:"/repos",name:"RepoList",component:C,beforeEnter:we},{path:"/users",name:"UserList",component:z,beforeEnter:we},{path:"/login",name:"Login",component:V,beforeEnter:_e}]}),Oe=r("5f5b");n["default"].use(Oe["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(y)},router:ye,store:ge}).$mount("#app")},"85ec":function(e,t,r){},"9acb":function(e,t,r){},bf7f:function(e,t,r){}});
//# sourceMappingURL=app.4271b420.js.map