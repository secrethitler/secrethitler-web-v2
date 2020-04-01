(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GameJoin"],{"53e4":function(e,t,a){"use strict";var n=a("c246"),r=a.n(n);r.a},9236:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"game-join min-h-screen"},[a("modal",{ref:"error-modal",attrs:{name:"error-modal"}},[a("div",{staticClass:"p-4"},[e._v(e._s(e.error))])]),a("div",{staticClass:"container font-serif text-white py-4 lg:py-12"},[a("h1",{staticClass:"text-5xl font-bold text-center mb-12"},[e._v("Join a Lobby")]),a("div",{staticClass:"flex flex-wrap -mx-4"},[a("div",{staticClass:"px-4 w-full lg:w-1/2 mb-8 lg:order-2"},[a("form",{ref:"form",staticClass:"block w-full",attrs:{action:"/game/join",method:"POST"},on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("div",{staticClass:"mb-6"},[a("ui-label",{attrs:{for:"userName"}},[e._v("Your Name")]),a("ui-input",{attrs:{id:"userName",type:"text",name:"userName",required:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),a("div",{staticClass:"mb-8"},[a("ui-label",{attrs:{for:"channelName"}},[e._v("Lobby ID")]),a("ui-input",{attrs:{id:"channelName",type:"text",name:"channelName",required:""},model:{value:e.channelName,callback:function(t){e.channelName=t},expression:"channelName"}})],1),e._m(0)])]),e._m(1)])])],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex justify-end"},[a("button",{staticClass:"btn"},[e._v("Join Lobby")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"px-4 w-full lg:w-1/2 mb-8 lg:order-1"},[n("div",{staticClass:"flex justify-center"},[n("img",{attrs:{src:a("d80d"),alt:"Bird"}})])])}],i=(a("96cf"),a("1da1")),s=a("d4ec"),c=a("bee2"),u=a("2caf"),o=a("262e"),l=a("9ab4"),m=a("2b0e"),f=a("2fe1"),b=a("0613"),d=a("277d"),h=function(e,t){var a={userName:e,channelName:t};return d["a"].post("/game/join",a)},p=a("2247"),v=a("fe57"),g=a("b15c"),N=function(e,t){return x.apply(this,arguments)};function x(){return x=Object(i["a"])(regeneratorRuntime.mark((function e(t,a){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h(t,a);case 2:n=e.sent,r=n.data,b["a"].commit(p["b"].INIT_GAME,r),Object(g["a"])(v["a"].GameLobby);case 6:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}var y=function(e){Object(o["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.channelName="",e.userName="",e.error="",e.joining=!1,e}return Object(c["a"])(a,[{key:"handleSubmit",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.joining){e.next=2;break}return e.abrupt("return");case 2:return this.joining=!0,e.prev=3,e.next=6,N(this.userName,this.channelName);case 6:this.$gtag.event("game",{event_category:"join",event_label:this.channelName}),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](3),this.error=e.t0,this.joining=!1;case 13:case"end":return e.stop()}}),e,this,[[3,9]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){"string"===typeof this.$route.query.lobby&&(this.channelName=this.$route.query.lobby)}}]),a}(m["a"]);y=Object(l["a"])([f["a"]],y);var j=y,w=j,_=(a("53e4"),a("2877")),C=Object(_["a"])(w,n,r,!1,null,"10a24b09",null);t["default"]=C.exports},b15c:function(e,t,a){"use strict";a("caad"),a("2532");var n=a("fe57"),r=a("5f86"),i=a("0613"),s=a("2247"),c=[n["a"].GameIsKilled,n["a"].GameWon,n["a"].GameInfo];t["a"]=function(e){i["a"].getters.isDead&&!c.includes(e)||(r["a"].push({name:e,params:{id:i["a"].getters.channelName}}),i["a"].commit(s["b"].SET_CURRENT_ACTION,e))}},c246:function(e,t,a){},d80d:function(e,t,a){e.exports=a.p+"img/bird.56805fb7.png"}}]);
//# sourceMappingURL=GameJoin.5b75705d.js.map