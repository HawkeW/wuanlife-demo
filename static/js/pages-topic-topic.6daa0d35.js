(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-topic-topic"],{"1c26":function(t,n,e){"use strict";e.r(n);var i=e("9bd1"),c=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=c.a},"9bd1":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{id:"",content:""}},onLoad:function(n){this.id=n.id;this.content,uni.request({url:"http://dev-m.wuanlife.com/api/goodsTopic?id="+this.id,success:function(e){try{return e.data}catch(n){t("log",n," at pages/topic/topic.vue:27")}}})},methods:{getData:function(){t("log",this.content," at pages/topic/topic.vue:35")}}};n.default=e}).call(this,e("0de9")["log"])},a30f:function(t,n,e){"use strict";e.r(n);var i=e("dd50"),c=e("1c26");for(var u in c)"default"!==u&&function(t){e.d(n,t,(function(){return c[t]}))}(u);var o,a=e("f0c5"),r=Object(a["a"])(c["default"],i["b"],i["c"],!1,null,"af68eed6",null,!1,i["a"],o);n["default"]=r.exports},dd50:function(t,n,e){"use strict";var i,c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[t._v("topic页面："+t._s(t.id)),e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getData.apply(void 0,arguments)}}},[t._v("get data")])],1)},u=[];e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}))}}]);