(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RQvv:function(t,a,e){},"cAO/":function(t,a,e){"use strict";var n=e("RQvv");e.n(n).a},lOe7:function(t,a,e){"use strict";e.r(a);var n=e("8VmE"),i=e.n(n),s=e("lOrp"),c=e("u/qd"),l=e("Wc11"),o={data:function(){return{nickName:"",socialName:"",socialList:["facebook","instagram","line"]}},components:{RapidCard:c.a,Input:l.a}},r=(e("cAO/"),e("psIG")),u=Object(r.a)(o,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("RapidCard",{staticClass:"rapid-chat-login",scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"sprite logo-rapid-chat"}),e("div",{staticClass:"h6"},[t._v("We create a private place to chat.")])]},proxy:!0},{key:"body",fn:function(){return[e("div",{staticClass:"h6"},[e("strong",[t._v("YOUR CONTACT INFO→")])]),e("Input",t._g({attrs:{placeholder:"NickName"},model:{value:t.nickName,callback:function(a){t.nickName=a},expression:"nickName"}},t.$listeners)),e("div",{staticClass:"social mb-4"},[t._l(t.socialList,function(a){var n;return[e("div",{staticClass:"fab",class:(n={on:t.socialName===a},n["fa-"+a]=!0,n),on:{click:function(e){t.socialName=a}}})]})],2),e("div",{staticClass:"btn btn-black effect-bubble w-100",on:{click:function(a){return t.$emit("start",{nickName:t.nickName,socialName:t.socialName})}}},[t._v(" START"),e("i",{staticClass:"material-icons ml-2"},[t._v("arrow_forward")])])]},proxy:!0}])})},[],!1,null,null,null).exports,d={methods:i()({},s.a.mapMutations(["setNickName","setSocialName"]),{startHandler:function(t){var a=t.nickName,e=t.socialName;this.setNickName(a),this.setSocialName(e),this.$router.push("/settingup")}}),components:{RapidChatLogin:u}},m=Object(r.a)(d,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"login flex-center"},[e("RapidChatLogin",{on:{start:t.startHandler,keydown:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.startHandler(a)}}})],1)},[],!1,null,null,null).exports;e.d(a,"default",function(){return m})}}]);