webpackJsonp([1],{115:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[a("h1",[t._v(t._s(t.pagetitle))]),t._v(" "),a("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){e.preventDefault(),t.getUserData(e)}}},[a("v-text-field",{attrs:{label:"Enter Your Github's Username",rules:t.rules,required:"",autofocus:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),a("v-btn",{on:{click:t.getUserData}},[t._v("Search")]),t._v(" "),a("v-btn",{on:{click:t.clear}},[t._v("Clear")])],1),t._v(" "),a("br")],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[t.loading?a("div",{staticClass:"text-xs-center"},[a("label",[t._v("Getting your data...")])]):null!==t.user?a("v-card",[a("v-card-media",{attrs:{src:t.user.avatar_url,height:"500"}}),t._v(" "),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v(t._s(t.user.login))]),t._v(" "),a("div",[t._v("Profile name : "+t._s(t.user.name)),a("br"),t._v("Profile bio : "+t._s(t.user.bio))])])]),t._v(" "),a("v-card-actions",[null!==t.user.html_url?a("v-btn",{attrs:{flat:"",href:t.user.html_url,target:"_blank"}},[t._v("Visit Github Page")]):t._e(),t._v(" "),""!==t.user.blog?a("v-btn",{attrs:{flat:"",href:"https://"+t.user.blog,target:"_blank"}},[t._v("Visit Blog")]):t._e()],1)],1):t._e()],1)],1)],1)],1)},r=[],i={render:n,staticRenderFns:r};e.a=i},116:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[a("h1",[t._v("About")]),t._v(" "),a("p",[t._v("A simple application to search Github's user basic information using Github API.")]),t._v(" "),a("p",[t._v("\n           Created with help of "),a("a",{attrs:{href:"https://github.com/vuejs/vue-cli",target:"_blank"}},[t._v("vue-cli")]),t._v(" using\n            "),a("a",{attrs:{href:"https://vuetifyjs.com/en/getting-started/quick-start",target:"_blank"}},[t._v("vuetifyjs/pwa")]),t._v("'s\n            boilerplate. Source code will be available on my\n            "),a("a",{attrs:{href:"https://github.com/rakhaviantoni/rv-github-searcher",target:"_blank"}},[t._v("Github")]),t._v(".\n       ")])])],1)],1)],1)},r=[],i={render:n,staticRenderFns:r};e.a=i},117:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.items,function(e,n){return a("router-link",{key:n,attrs:{to:e.path,tag:"v-list-tile",exact:e.exact,value:"true"}},[a("v-list-tile-action",[a("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),t._v(" "),a("v-toolbar",{attrs:{app:"","clipped-left":t.clipped}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[a("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[a("v-icon",[t._v("web")])],1),t._v(" "),a("v-toolbar-title",{domProps:{textContent:t._s(t.pagetitle)}})],1),t._v(" "),a("v-content",[a("router-view",{attrs:{pagetitle:t.pagetitle}})],1),t._v(" "),a("v-footer",{attrs:{fixed:t.fixed,app:""}},[a("span",[t._v("© 2018 Rakha Viantoni")])])],1)},r=[],i={render:n,staticRenderFns:r};e.a=i},119:function(t,e){},121:function(t,e,a){"use strict";var n=a(25),r=a(122),i=a(28),s=a(49);n.a.use(r.a),e.a=new r.a({mode:"history",routes:[{path:"/",name:"Home",component:i.a},{path:"/about",name:"About",component:s.a}]})},27:function(t,e,a){"use strict";var n=a(28),r=a(49);e.a={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"home",title:"Home",path:"/",exact:!0},{icon:"info",title:"About",path:"/about",exact:!1}],miniVariant:!1,pagetitle:"VuetifyJS PWA using Github API"}},name:"App",components:{Home:n.a,About:r.a}}},28:function(t,e,a){"use strict";var n=a(29),r=a(115),i=a(16),s=i(n.a,r.a,!1,null,null,null);e.a=s.exports},29:function(t,e,a){"use strict";var n=a(55),r=a.n(n),i=a(58),s=a.n(i),o=a(94);e.a={props:["pagetitle"],data:function(){return{username:"",user:null,rules:[function(t){return!!t||"Username is required"},function(t){return t&&t.length>2||"Username must be not less than 2 characters"}],loading:!1}},name:"Home",methods:{getUserData:function(){var t=this;return s()(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.user=null,e.next=4,o.a.searchUser({username:t.username}).then(function(e){t.loading=!1,t.user=e.data}).catch(function(e){t.loading=!1,console.log(e)});case 4:a=e.sent;case 5:case"end":return e.stop()}},e,t)}))()},clear:function(){this.$refs.form.reset()}}}},49:function(t,e,a){"use strict";var n=a(50),r=a(116),i=a(16),s=i(n.a,r.a,!1,null,null,null);e.a=s.exports},50:function(t,e,a){"use strict";e.a={name:"About"}},51:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(25),r=a(54),i=a(118),s=a.n(i),o=a(119),u=(a.n(o),a(121));n.a.use(s.a),n.a.config.productionTip=!1,new n.a({el:"#app",render:function(t){return t(r.a)},router:u.a})},54:function(t,e,a){"use strict";var n=a(27),r=a(117),i=a(16),s=i(n.a,r.a,!1,null,null,null);e.a=s.exports},94:function(t,e,a){"use strict";var n=a(95);e.a={searchUser:function(t){return Object(n.a)().get("users/"+t.username)}}},95:function(t,e,a){"use strict";var n=a(96),r=a.n(n);e.a=function(){return r.a.create({baseURL:"https://api.github.com/"})}}},[51]);
//# sourceMappingURL=app.a02ceeb3af1f5f087d0e.js.map