(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GameChancellorSelectPolicy"],{1375:function(e,t,n){"use strict";var a=n("0613");t["a"]=function(){return{userId:a["a"].getters.userId,channelName:a["a"].getters.channelName}}},"2a13":function(e,t,n){e.exports=n.p+"img/policy_liberal.5217f3f3.jpg"},"64be":function(e,t,n){e.exports=n.p+"img/policy_fascist.60739294.jpg"},9619:function(e,t,n){"use strict";var a,i,c;n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),function(e){e["Hitler"]="secret hitler",e["Fascist"]="fascist",e["Liberal"]="liberal"}(a||(a={})),function(e){e["Fascist"]="fascist",e["Liberal"]="liberal"}(i||(i={})),function(e){e["Fascist"]="fascist",e["Liberal"]="liberal"}(c||(c={}))},b15c:function(e,t,n){"use strict";n("caad"),n("2532");var a=n("fe57"),i=n("5f86"),c=n("0613"),r=n("2247"),s=[a["a"].GameIsKilled,a["a"].GameWon,a["a"].GameInfo];t["a"]=function(e){c["a"].getters.isDead&&!s.includes(e)||(i["a"].push({name:e,params:{id:c["a"].getters.channelName}}),c["a"].commit(r["b"].SET_CURRENT_ACTION,e))}},b165:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("page-title",[e._v("Discard Policy")]),a("div",{staticClass:"container flex justify-center"},[a("div",{staticClass:"lg:w-1/2"},[e._m(0),a("div",{staticClass:"flex",class:{"pointer-events-none":e.discarding,"opacity-50":e.discarding}},e._l(e.policies,(function(t,i){return a("div",{key:i,staticClass:"px-2 w-full lg:w-1/2"},[t===e.Policy.Liberal?a("div",{on:{click:function(t){return e.enact(i)}}},[a("img",{attrs:{src:n("2a13"),alt:"Liberal Policy"}})]):e._e(),t===e.Policy.Fascist?a("div",{on:{click:function(t){return e.enact(i)}}},[a("img",{attrs:{src:n("64be"),alt:"Fascist Policy"}})]):e._e()])})),0),e.vetoPossible?a("div",{staticClass:"mt-8 flex justif-center"},[a("button",{staticClass:"btn shadow",on:{click:e.requestVeto}},[e._v(" Request Veto ")])]):e._e()])])],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-4"},[n("h3",{staticClass:"font-serif text-2xl mb-4"},[e._v("Select a policy to enact. The other one will be discarded.")])])}],c=(n("96cf"),n("1da1")),r=n("d4ec"),s=n("bee2"),o=n("2caf"),u=n("262e"),l=n("9ab4"),f=n("2b0e"),d=n("2f62"),p=n("2fe1"),b=n("b15c"),v=n("fe57"),h=n("5530"),m=n("277d"),g=n("1375"),y=function(e){var t=Object(h["a"])({discardedPolicy:e},Object(g["a"])());return m["a"].post("/policy/chancellor-pick",t)};function j(e){return w.apply(this,arguments)}function w(){return w=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:n=e.sent,n.data,Object(b["a"])(v["a"].GameInfo);case 5:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}var _=function(){var e=Object(h["a"])({},Object(g["a"])());return m["a"].post("/round/request-veto",e)},k=function(){return O.apply(this,arguments)};function O(){return O=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}var x=n("9619"),P=function(e){Object(u["a"])(n,e);var t=Object(o["a"])(n);function n(){var e;return Object(r["a"])(this,n),e=t.apply(this,arguments),e.discarding=!1,e.Policy=x["b"],e}return Object(s["a"])(n,[{key:"enact",value:function(e){var t=0===e?1:0;this.discard(this.policies[t])}},{key:"discard",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.discarding=!0,e.prev=1,e.next=4,j(t);case 4:this.$gtag.event("game",{event_category:"chancellor-pick-policy",event_label:this.$store.getters.channelName}),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),this.discarding=!1;case 10:case"end":return e.stop()}}),e,this,[[1,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"requestVeto",value:function(){k()}},{key:"policies",get:function(){return this.activeRound.secret.chancellorPolicies}},{key:"vetoPossible",get:function(){return this.activeRound.secret.vetoPossible}}]),n}(f["a"]);P=Object(l["a"])([Object(p["a"])({computed:Object(d["b"])(["activeRound"])})],P);var R=P,C=R,I=n("2877"),N=Object(I["a"])(C,a,i,!1,null,null,null);t["default"]=N.exports}}]);
//# sourceMappingURL=GameChancellorSelectPolicy.998da9ec.js.map