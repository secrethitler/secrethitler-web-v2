(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GameCreate"],{"3ccd":function(e,t,a){"use strict";var r=a("4578"),n=a.n(r);n.a},4578:function(e,t,a){},b15c:function(e,t,a){"use strict";a("caad"),a("2532");var r=a("fe57"),n=a("5f86"),s=a("0613"),c=a("2247"),i=[r["a"].GameIsKilled,r["a"].GameWon,r["a"].GameInfo];t["a"]=function(e){s["a"].getters.isDead&&!i.includes(e)||(n["a"].push({name:e,params:{id:s["a"].getters.channelName}}),s["a"].commit(c["b"].SET_CURRENT_ACTION,e))}},ced6:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"game-create min-h-screen"},[a("modal",{ref:"error-modal",attrs:{name:"error-modal"}},[a("div",{staticClass:"p-4"},[e._v(e._s(e.error))])]),a("div",{staticClass:"container font-serif text-white py-4 lg:py-12"},[a("h1",{staticClass:"text-5xl font-bold text-center mb-12"},[e._v("Create a Game")]),a("div",{staticClass:"flex flex-wrap -mx-4"},[a("div",{staticClass:"px-4 w-full lg:w-1/2 mb-8 lg:order-2"},[a("form",{ref:"form",staticClass:"block w-full",attrs:{action:"/game/create",method:"POST"},on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("div",{staticClass:"mb-8"},[a("ui-label",{attrs:{for:"userName"}},[e._v("Your Name")]),a("ui-input",{attrs:{id:"userName",type:"text",name:"userName",required:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),e._m(0)])]),e._m(1)])])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex justify-end"},[a("button",{staticClass:"btn"},[e._v("Create Game")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"px-4 w-full lg:w-1/2 mb-8 lg:order-1"},[r("div",{staticClass:"flex justify-center"},[r("img",{attrs:{src:a("d80d"),alt:"Bird"}})])])}],s=(a("96cf"),a("1da1")),c=a("d4ec"),i=a("bee2"),u=a("2caf"),o=a("262e"),l=a("9ab4"),m=a("2b0e"),f=a("5530"),d=a("0613"),b=a("277d"),p=function(e){var t={userName:e};return b["a"].post("/game/create",t)},v=a("2247"),h=a("b15c"),g=a("fe57"),w=function(e){return x.apply(this,arguments)};function x(){return x=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:a=e.sent,r=a.data,d["a"].commit(v["b"].INIT_GAME,Object(f["a"])({},r,{creatorId:r.userId})),Object(h["a"])(g["a"].GameLobby);case 6:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}var C=a("2fe1"),_=function(e){Object(o["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(c["a"])(this,a),e=t.apply(this,arguments),e.error="",e.userName="",e}return Object(i["a"])(a,[{key:"handleSubmit",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w(this.userName);case 2:this.$gtag.event("game",{event_category:"create"});case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),a}(m["a"]);_=Object(l["a"])([C["a"]],_);var N=_,j=N,y=(a("3ccd"),a("2877")),O=Object(y["a"])(j,r,n,!1,null,"137f081c",null);t["default"]=O.exports},d80d:function(e,t,a){e.exports=a.p+"img/bird.56805fb7.png"}}]);
//# sourceMappingURL=GameCreate.e3151444.js.map