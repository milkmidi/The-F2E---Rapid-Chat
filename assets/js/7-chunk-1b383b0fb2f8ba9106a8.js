(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{NZ6x:function(t,a,n){"use strict";n.r(a);var e={components:{RapidCard:n("u/qd").a}},o=n("psIG"),i={methods:{startHandler:function(){this.$router.push("/login")}},components:{RapidChatInfo:Object(o.a)(e,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("RapidCard",{scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"sprite logo-rapid-chat"}),n("div",{staticClass:"h6"},[t._v("We create a private place to chat.")])]},proxy:!0},{key:"body",fn:function(){return[n("ul",{staticClass:"list-unstyled"},[n("li",{attrs:{"data-index":"①"}},[t._v("Randomly pick a person for you.")]),n("li",{attrs:{"data-index":"②"}},[t._v("Chat anything in ten minutes.")]),n("li",{attrs:{"data-index":"③"}},[t._v("Choose to exchange your contact info or not.")]),n("li",{attrs:{"data-index":"④"}},[t._v("Get the contact info if both of you choose to exchange at the same time.")])]),n("div",{staticClass:"btn btn-black effect-bubble w-100",on:{click:function(a){return t.$emit("start")}}},[t._v(" START"),n("i",{staticClass:"material-icons ml-2"},[t._v("arrow_forward")])])]},proxy:!0}])})},[],!1,null,null,null).exports}},s=Object(o.a)(i,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"home flex-center"},[a("RapidChatInfo",{on:{start:this.startHandler}})],1)},[],!1,null,null,null).exports;n.d(a,"default",function(){return s})}}]);