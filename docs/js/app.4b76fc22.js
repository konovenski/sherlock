(function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=t[2],p=0,m=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/sherlock/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"2a67":function(e,t,r){"use strict";var n=r("f360"),a=r.n(n);a.a},"2c57":function(e,t,r){},"3e41":function(e,t,r){"use strict";var n=r("2c57"),a=r.n(n);a.a},"497b":function(e,t,r){"use strict";var n=r("bf7f"),a=r.n(n);a.a},"539f":function(e,t,r){"use strict";var n=r("9acb"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("a026"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("navigation"),r("div",{staticClass:"main-container"},[r("div",{staticClass:"center-container"},[r("router-view")],1)])],1)},s=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navigation"},[r("ul",[e.isAuthenticated?r("li",{on:{click:e.logout}},[r("span",{staticClass:"logout"},[e._v("Logout")])]):e._e(),e.isAuthenticated?r("li",{on:{click:e.repos}},[r("span",{staticClass:"logout"},[e._v("Repos")])]):e._e()])])},i=[],c=r("5530"),u=r("2f62"),l="AUTH_REQUEST",p="AUTH_SUCCESS",m="AUTH_LOGOUT",d={name:"navigation",methods:{logout:function(){var e=this;this.$store.dispatch(m).then((function(){return e.$router.push("/login")}))},repos:function(){this.$router.push("/repos")}},computed:Object(c["a"])({},Object(u["b"])(["isAuthenticated"]))},f=d,h=(r("497b"),r("2877")),g=Object(h["a"])(f,o,i,!1,null,"03e7c83f",null),v=g.exports,b={components:{Navigation:v},name:"App"},_=b,w=(r("034f"),r("3e41"),Object(h["a"])(_,a,s,!1,null,"1d6e386e",null)),y=w.exports,S=r("8c4f"),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?e._e():r("div",[r("h1",[e._v("Select repositories to inspect:")]),r("input",{attrs:{type:"checkbox",value:"all"},on:{click:e.toggleAll}}),r("label",[e._v("Select All")]),r("br"),r("br"),r("form",{on:{submit:function(t){return t.preventDefault(),e.inspect(t)}}},[e._l(e.workspaces,(function(t){return r("div",{key:t.name},[r("h2",[e._v(e._s(t.name))]),r("input",{attrs:{type:"checkbox"},domProps:{value:t.name},on:{click:e.toggle}}),e._m(0,!0),e._l(e.repos,(function(t){return r("div",{key:t.uuid},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{type:"checkbox"},domProps:{value:t.full_name,checked:Array.isArray(e.selected)?e._i(e.selected,t.full_name)>-1:e.selected},on:{change:[function(r){var n=e.selected,a=r.target,s=!!a.checked;if(Array.isArray(n)){var o=t.full_name,i=e._i(n,o);a.checked?i<0&&(e.selected=n.concat([o])):i>-1&&(e.selected=n.slice(0,i).concat(n.slice(i+1)))}else e.selected=s},e.saveSelected]}}),r("label",[e._v(e._s(t.full_name))])])}))],2)})),r("hr"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],attrs:{type:"date"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}}),e._v(" "),r("br"),r("br"),r("button",{attrs:{type:"submit"}},[e._v(" Submit")])],2),r("button",{on:{click:e.getRepos}},[e._v("Refresh list")])]),e.loading?r("loading"):e._e()],1)},x=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",[r("b",[e._v("Select All")])])}],O=(r("a4d3"),r("e01a"),r("d28b"),r("99af"),r("4de4"),r("caad"),r("d81d"),r("d3b7"),r("ac1f"),r("2532"),r("3ca3"),r("1276"),r("ddb0"),r("96cf"),r("1da1")),j="REPOS_REQUEST",C="REPOS_SUCCESS",A="REPOS_CLEANUP",E={name:"repo-list",data:function(){return{loading:!1,repos:this.$store.getters.repos||[],selected:JSON.parse(localStorage.getItem("repo-list:selected"))||[],date:""}},methods:{toggleAll:function(e){e.target.checked?this.selected=this.repos.map((function(e){return e.full_name})):this.selected=[],this.saveSelected()},toggle:function(e){var t=this,r=e.target.value;e.target.checked?this.selected=this.selected.concat(this.workspaces[r].repos):this.selected=this.selected.filter((function(e){return!t.workspaces[r].repos.includes(e)})),this.saveSelected()},saveSelected:function(){localStorage.setItem("repo-list:selected",JSON.stringify(this.selected))},getRepos:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,this.$store.dispatch(j,this.$store.getters.credentials);case 4:this.repos=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),alert("Wrong credentials!");case 10:this.loading=!1;case 11:case"end":return e.stop()}}),e,this,[[1,7]])})));function t(){return e.apply(this,arguments)}return t}(),inspect:function(){var e=this.selected,t=this.date;this.$router.push({name:"UserList",query:{repos:e,date:t}})}},created:function(){this.$store.getters.cached||this.getRepos()},computed:{workspaces:function(){var e={},t=!0,r=!1,n=void 0;try{for(var a,s=this.repos[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var o=a.value,i=o.full_name.split("/")[0];void 0===e[i]&&(e[i]={name:i,repos:[]}),e[i].repos.push(o.full_name)}}catch(c){r=!0,n=c}finally{try{t||null==s.return||s.return()}finally{if(r)throw n}}return e}}},$=E,P=Object(h["a"])($,k,x,!1,null,"34073aa9",null),T=P.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?e._e():r("div",[r("h3",[e._v("Commits: "+e._s(e.users.total.commits))]),r("h3",[e._v("Merges: "+e._s(e.users.total.merges))]),r("b-table",{attrs:{items:e.users.list,fields:e.fields,striped:"",responsive:"sm"},scopedSlots:e._u([{key:"cell(commits)",fn:function(t){return[r("div",[e._v(e._s(t.item.commits.length))])]}},{key:"cell(merges)",fn:function(t){return[r("div",[e._v(e._s(t.item.merges.length))])]}},{key:"cell(+)",fn:function(t){return[r("b-button",{staticClass:"mr-2",attrs:{size:"sm"},on:{click:t.toggleDetails}},[e._v(" "+e._s(t.detailsShowing?"Hide":"Show")+" Details ")])]}},{key:"row-details",fn:function(t){return[r("hr"),r("b-card",[r("h2",[e._v("Commits")]),r("b-col",e._l(t.item.commits,(function(t){return r("b-row",{key:t.hash},[e._v(" "+e._s(e.hoursAgo(t.date))+" hours ago: "),r("a",{attrs:{href:t.link,target:"_blank"}},[e._v(e._s(t.message.substr(0,50))+"...")])])})),1),r("h2",[e._v("Merges")]),r("b-col",e._l(t.item.merges,(function(t){return r("b-row",{key:t.hash},[e._v(" "+e._s(e.hoursAgo(t.date))+" hours ago: "),r("a",{attrs:{href:t.link,target:"_blank"}},[e._v(e._s(t.message.substr(0,50))+"...")])])})),1)],1),r("hr")]}}],null,!1,708090968)})],1),e.loading?r("loading"):e._e()],1)},I=[],N=(r("0481"),r("4069"),r("07ac"),"COMMIT_REQUEST"),D="COMMIT_SUCCESS";function U(e){var t=(new Date).getTime();return parseInt((t-e.getTime())/1e3/60/60/24)}var J,M,L,q,H={name:"user-list",data:function(){var e=this.$route.query.repos||[],t=new Date(this.$route.query.date||null);return!Array.isArray(e)&&e&&(e=[e]),{loading:!1,fields:["name","commits","merges","+"],repos:e,users:{list:[],total:{commits:0,merges:0}},date:t}},methods:{hoursAgo:function(e){var t=new Date(e).getTime(),r=(new Date).getTime();return parseInt((r-t)/1e3/60/60)},list:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,s,o,i,c,u,l,p,m,d,f,h,g,v,b=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(this.loading=!0,t=[],r=!0,n=!1,a=void 0,e.prev=5,s=this.repos[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)i=o.value,t.push(this.$store.dispatch(N,{user:this.$store.getters.credentials,repo:i,maxDays:U(this.date)+1}));e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](5),n=!0,a=e.t0;case 13:e.prev=13,e.prev=14,r||null==s.return||s.return();case 16:if(e.prev=16,!n){e.next=19;break}throw a;case 19:return e.finish(16);case 20:return e.finish(13);case 21:return e.next=23,Promise.all(t);case 23:c=Object.values(this.$store.getters.commits).flat().filter((function(e){return new Date(e.date).toDateString()===b.date.toDateString()})),u={},l={commits:0,merges:0},p=!0,m=!1,d=void 0,e.prev=29,f=c[Symbol.iterator]();case 31:if(p=(h=f.next()).done){e.next=48;break}if(g=h.value,v=g.author,u[v]||(u[v]={name:v,commits:[],merges:[]}),!(g.parents.length>1)){e.next=39;break}return u[v].merges.push(g),l.merges++,e.abrupt("continue",45);case 39:if(!g.message.toLowerCase().includes("merge")){e.next=43;break}return u[v].merges.push(g),l.merges++,e.abrupt("continue",45);case 43:u[v].commits.push(g),l.commits++;case 45:p=!0,e.next=31;break;case 48:e.next=54;break;case 50:e.prev=50,e.t1=e["catch"](29),m=!0,d=e.t1;case 54:e.prev=54,e.prev=55,p||null==f.return||f.return();case 57:if(e.prev=57,!m){e.next=60;break}throw d;case 60:return e.finish(57);case 61:return e.finish(54);case 62:this.users.list=Object.values(u),this.users.total=l,this.loading=!1;case 65:case"end":return e.stop()}}),e,this,[[5,9,13,21],[14,,16,20],[29,50,54,62],[55,,57,61]])})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.list()}},Q=H,z=Object(h["a"])(Q,R,I,!1,null,null,null),W=z.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{staticClass:"login",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("h1",[e._v("Your bitbucket credentials")]),r("label",[e._v("Login")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{required:"",type:"text",placeholder:"Login"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),r("label",[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{required:"",type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("hr"),r("button",{attrs:{type:"submit"}},[e._v(" Submit ")])])])},G=[],V={name:"login",data:function(){return{username:"",password:""}},methods:{login:function(){var e=this,t=this.username,r=this.password;this.$store.dispatch(l,{username:t,password:r}).then((function(){e.$router.push("/repos")})).catch((function(){alert("Wrong credentials!")}))}}},Y=V,F=(r("539f"),Object(h["a"])(Y,B,G,!1,null,null,null)),K=F.exports,X=r("ade3"),Z=r("bc3a"),ee=r.n(Z),te={credentials:JSON.parse(localStorage.getItem("credentials"))||""},re={isAuthenticated:function(e){return!!e.credentials},credentials:function(e){return e.credentials}},ne=(J={},Object(X["a"])(J,l,(function(e,t){var r=e.commit;return new Promise((function(e,n){ee.a.get("https://api.bitbucket.org/2.0/user",{auth:t}).then((function(){localStorage.setItem("credentials",JSON.stringify(t)),r(p,t),e()})).catch((function(e){localStorage.removeItem("credentials"),n(e)}))}))})),Object(X["a"])(J,m,(function(e){var t=e.commit;return new Promise((function(e){t(m),localStorage.clear(),e()}))})),J),ae=(M={},Object(X["a"])(M,p,(function(e,t){e.credentials=t})),Object(X["a"])(M,m,(function(e){e.credentials=""})),M),se={state:te,getters:re,actions:ne,mutations:ae},oe=r("2909"),ie={repos:JSON.parse(localStorage.getItem("repos"))||""},ce={cached:function(e){return!!e.repos},repos:function(e){return e.repos}};function ue(e){return e.data.values.map((function(e){return{full_name:e.repository.full_name,uuid:e.repository.uuid}}))}var le=(L={},Object(X["a"])(L,j,function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,s,o,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,a=1,s=[],o=100;case 4:return e.prev=4,i="https://api.bitbucket.org/2.0/user/"+"permissions/repositories?pagelen=".concat(o,"&page=").concat(a),e.next=8,ee.a.get(i,{auth:r});case 8:return c=e.sent,s=[].concat(Object(oe["a"])(s),Object(oe["a"])(ue(c))),localStorage.setItem("repos",JSON.stringify(s)),e.next=13,n(C,s);case 13:e.next=19;break;case 15:throw e.prev=15,e.t0=e["catch"](4),localStorage.removeItem("repos"),e.t0;case 19:if(s.length===o&&a++){e.next=4;break}case 20:return e.abrupt("return",s);case 21:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t,r){return e.apply(this,arguments)}}()),Object(X["a"])(L,A,(function(e){var t=e.commit;return new Promise((function(e){t(A),localStorage.removeItem("repos"),e()}))})),L),pe=(q={},Object(X["a"])(q,C,(function(e,t){e.repos=t})),Object(X["a"])(q,A,(function(e){e.repos=""})),q),me={state:ie,getters:ce,actions:le,mutations:pe},de={commits:JSON.parse(localStorage.getItem("commits"))||{},lastCommit:JSON.parse(localStorage.getItem("last_commit"))||{}},fe={commits:function(e){return e.commits}};function he(e){var t=(new Date).getTime(),r=new Date(e).getTime();return parseInt((t-r)/1e3/60/60/24)}function ge(e,t,r){var n=[],a=!0,s=!1,o=void 0;try{for(var i,c=e.data.values[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var u=i.value;if(u.hash===t)break;if(he(u.date)>30)break;n.push({hash:u.hash,link:u.links.html.href,author:u.author.raw,parents:u.parents.length,date:u.date,message:u.message})}}catch(l){s=!0,o=l}finally{try{a||null==c.return||c.return()}finally{if(s)throw o}}return n}var ve=Object(X["a"])({},N,function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,s,o,i,c,u,l,p,m,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,a=t.state,s=r.user,o=r.repo,i=r.maxDays,c=100,u=1,l=[],p=[];case 6:return m="https://api.bitbucket.org/2.0/repositories/"+"".concat(o,"/commits?pagelen=").concat(c,"&page=").concat(u)+"&t=".concat((new Date).getTime()),e.next=9,ee.a.get(m,{auth:s});case 9:d=e.sent,l=ge(d,a.lastCommit[o],i),p=[].concat(Object(oe["a"])(p),Object(oe["a"])(l));case 12:if(0!==l.length&&u++){e.next=6;break}case 13:return n(D,{commits:p,repo:o}),e.abrupt("return",p);case 15:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),be=Object(X["a"])({},D,(function(e,t){var r=t.commits,n=t.repo;void 0===e.commits[n]&&(e.commits[n]=[]),e.commits[n]=[].concat(Object(oe["a"])(r),Object(oe["a"])(e.commits[n])),localStorage.setItem("commits",JSON.stringify(e.commits)),r.length>0&&(e.lastCommit[n]=r[0].hash,localStorage.setItem("last_commit",JSON.stringify(e.lastCommit)))})),_e={state:de,getters:fe,actions:ve,mutations:be};n["default"].use(u["a"]);var we=!1,ye=new u["a"].Store({modules:{auth:se,repo:me,inspection:_e},strict:we});n["default"].use(S["a"]);var Se=function(e,t,r){ye.getters.isAuthenticated?r("/users"):r()},ke=function(e,t,r){ye.getters.isAuthenticated?r():r("/login")},xe=new S["a"]({base:"/sherlock",mode:"history",routes:[{path:"/",redirect:"repos"},{path:"/repos",name:"RepoList",component:T,beforeEnter:ke},{path:"/users",name:"UserList",component:W,beforeEnter:ke},{path:"/login",name:"Login",component:K,beforeEnter:Se}]}),Oe=r("5f5b"),je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loader loader--style2"},[r("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50","xml:space":"preserve"}},[r("path",{attrs:{fill:"#000",d:"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"}},[r("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"}})],1)])])},Ce=[],Ae={name:"loading",props:{},components:{},data:function(){return{}}},Ee=Ae,$e=(r("2a67"),Object(h["a"])(Ee,je,Ce,!1,null,"fbca4912",null)),Pe=$e.exports;n["default"].config.productionTip=!1,n["default"].use(Oe["a"]),n["default"].component("loading",Pe),new n["default"]({render:function(e){return e(y)},router:xe,store:ye}).$mount("#app")},"85ec":function(e,t,r){},"9acb":function(e,t,r){},bf7f:function(e,t,r){},f360:function(e,t,r){}});
//# sourceMappingURL=app.4b76fc22.js.map