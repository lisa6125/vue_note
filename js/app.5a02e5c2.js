(function(e){function t(t){for(var s,a,i=t[0],c=t[1],f=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,f||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(s=!1)}s&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var s={},a={app:0},o={app:0},r=[];function i(e){return c.p+"js/"+({Home:"Home",notedetail:"notedetail"}[e]||e)+"."+{Home:"664f9739",notedetail:"acec5da9"}[e]+".js"}function c(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={Home:1,notedetail:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var s="css/"+({Home:"Home",notedetail:"notedetail"}[e]||e)+"."+{Home:"f3841e5f",notedetail:"9ec4706c"}[e]+".css",o=c.p+s,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var f=r[i],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===s||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){f=d[i],l=f.getAttribute("data-href");if(l===s||l===o)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var s=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete a[e],u.parentNode.removeChild(u),n(r)},u.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(u)})).then((function(){a[e]=0})));var s=o[e];if(0!==s)if(s)t.push(s[2]);else{var r=new Promise((function(t,n){s=o[e]=[t,n]}));t.push(s[2]=r);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;f=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",d.name="ChunkLoadError",d.type=s,d.request=a,n[1](d)}o[e]=void 0}};var u=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=s,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(n,s,function(t){return e[t]}.bind(null,s));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue_note/",c.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=t,f=f.slice();for(var d=0;d<f.length;d++)t(f[d]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=o,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{dark:"dark"===e.bgModel},attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"}},[n("router-view")],1),n("div",{staticClass:"showBgModel"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.modelShow&&"light"===e.bgModel,expression:"modelShow && bgModel==='light'"}],staticClass:"modelCard"},[e._m(0),n("p",[e._v("日間模式已開啟")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.modelShow&&"dark"===e.bgModel,expression:"modelShow  && bgModel==='dark'"}],staticClass:"modelCard dark"},[e._m(1),n("p",[e._v("夜間模式已開啟")])])])],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sun"},[n("i",{staticClass:"fas fa-sun"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"moon"},[n("i",{staticClass:"far fa-moon"})])}],r=(n("1c01"),n("58b2"),n("8e6e"),n("f3e2"),n("d25f"),n("ac6a"),n("456d"),n("bd86")),i=n("2f62");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={name:"app",computed:f({},Object(i["d"])(["bgModel","modelShow"]))},d=l,u=(n("5c0b"),n("2877")),b=Object(u["a"])(d,a,o,!1,null,null,null),p=b.exports,m=n("8c4f");s["default"].use(m["a"]);var j=new m["a"]({routes:[{path:"/",name:"Home",component:function(){return n.e("Home").then(n.bind(null,"bb51"))},meta:{title:"筆記"}},{path:"/note/:noteId",name:"noteDetail",component:function(){return n.e("notedetail").then(n.bind(null,"65b4"))},meta:{title:"筆記"}}]}),g=(n("7514"),n("c1df")),h=n.n(g),v=n("0e44");s["default"].use(i["a"]);var y=new i["a"].Store({state:{noteList:[{id:"1534179824",faver:!0,edit:!1,content:"<div><h1>test1</h1> <p>測試插入文本與圖片<span font-family: 'Open Sans', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif; font-size: 16px;>tinymce官方提供了一个vue的组件</span><span font-family: 'Open Sans', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif; font-size: 16px;>如果有注册或购买过服务的话，直接通过组件配置api-key直接使用，像我这种懒的注册或者购买的直接下载tinymce，自力更生</span></p> <p><span font-family: 'Open Sans', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif; font-size: 16px;><img src=\"https://i.pinimg.com/236x/8d/6a/16/8d6a164b9fad90d2a1a7940ebc090619.jpg\" alt=\"\" width=\"236\" height=\"278\" /></span></p> <p>&nbsp;</p> <p>&nbsp;</p></div>"},{id:"1634179777",faver:!1,edit:!1,content:"<h2><strong>Welcome</strong>&nbsp;</h2> <p><img src=\"https://i.pinimg.com/236x/d2/9d/90/d29d9084c262af2a98c5cad20c29e2ae.jpg\" alt=\"\" width=\"236\" height=\"271\" /></p> <p><span font-family: 'Open Sans', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif; font-size: 16px;>我使用这个源码，直接npm install ,然后预览，图标都是undefined，我百度了下，说是无法正常加载tinymce包里面的icons.js文件，直接变成了html页面，导致语法错误：</span><code style=\"box-sizing: border-box; font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; font-size: 14px; word-break: break-word; color: #f3a4b5;>Uncaught SyntaxError: Unexpected token '&lt;'</code><span font-family: 'Open Sans', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif; font-size: 16px;>,没有找到解决办法，应该怎么解决，如果有办法联系下微信a758922096,很</span></p>"},{id:"1634179888",faver:!0,edit:!1,content:"<h2><strong>Welcome</strong>&nbsp;</h2> <p><span font-family: 'Open Sans', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif; font-size: 16px;>我使用这个源码，直接npm install ,然后</span><span font-family: 'Open Sans', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif; font-size: 16px;>预览，图标都是undefined，我百度了下，说是无法正常加载tinymce包里面的icons.js文件，直接变成了html页面，导致语法错误：</span><code style=\"box-sizing: border-box; font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; font-size: 14px; word-break: break-word; color: #f3a4b5;>Uncaught SyntaxError: Unexpected token '&lt;'</code><span font-family: 'Open Sans', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif; font-size: 16px;>,没有找到解决办法，应该怎么解决，如果有办法联系下微信a758922096,很</span><img src=\"https://i.pinimg.com/236x/d2/9d/90/d29d9084c262af2a98c5cad20c29e2ae.jpg\" alt=\"\" width=\"236\" height=\"271\" /></p>"}],listStatus:"list",current:"",lastTime:"",filterStatus:"all",bgModel:"dark",modelShow:!1},mutations:{changeFaver:function(e,t){var n=e.noteList.find((function(e){return e.id===t}));n.faver=!n.faver},changeEdit:function(e,t){var n=e.noteList.find((function(e){return e.id===t.id}));n.edit=!n.edit},changeNoteContent:function(e,t){var n=e.noteList.find((function(t){return t.id===e.current.id}));n.content=t;var s=h()().unix();n.id=s},changeListStatus:function(e,t){e.listStatus=t},setCurrent:function(e,t){var n=e.noteList.find((function(e){return e.id===t}));e.current=n,e.lastTime=h.a.unix(e.current.id).format("LL")},pushNewNote:function(e,t){e.noteList.push(t)},selectFilterStatus:function(e,t){e.filterStatus=t},handleDelete:function(e,t){e.noteList=e.noteList.filter((function(e){return e.id!==t}))},changeModel:function(e){"dark"===e.bgModel?e.bgModel="light":e.bgModel="dark"},changeModelShow:function(e,t){e.modelShow=t}},actions:{},getters:{filterCardItems:function(e){if("all"===e.filterStatus)return e.noteList;var t=e.noteList.filter((function(e){return e.faver}));return t},openNote:function(e){return e.current}},plugins:[Object(v["a"])()]}),S=(n("3cc5"),n("5c96")),k=n.n(S);n("0fae"),n("15f5"),n("7051");s["default"].use(k.a),s["default"].config.productionTip=!1,new s["default"]({router:j,store:y,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var s=n("e332"),a=n.n(s);a.a},e332:function(e,t,n){}});
//# sourceMappingURL=app.5a02e5c2.js.map