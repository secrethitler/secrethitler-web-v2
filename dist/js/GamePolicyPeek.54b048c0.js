(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GamePolicyPeek"],{1375:function(e,t,a){"use strict";var i=a("0613");t["a"]=function(){return{userId:i["a"].getters.userId,channelName:i["a"].getters.channelName}}},"2a13":function(e,t,a){e.exports=a.p+"img/policy_liberal.5217f3f3.jpg"},6492:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("page-title",[e._v("Policy Peek")]),i("div",{staticClass:"container flex justify-center"},[i("div",{staticClass:"lg:w-1/2"},[i("h3",{staticClass:"font-serif text-2xl mb-4"},[e._v("You may look at the top 3 policies from the card pile!")]),0===e.policies.length&&!1===e.showing?i("div",{staticClass:"flex justify-center"},[i("button",{staticClass:"btn",on:{click:e.getPeekedPolicies}},[e._v("Show Policies")])]):e._e(),e.policies.length>0?i("div",{staticClass:"flex"},e._l(e.policies,(function(t,n){return i("div",{key:n,staticClass:"px-2 w-full lg:w-1/3 mb-4"},[t===e.Policy.Liberal?i("div",[i("img",{attrs:{src:a("2a13"),alt:"Liberal Policy"}})]):e._e(),t===e.Policy.Fascist?i("div",[i("img",{attrs:{src:a("64be"),alt:"Fascist Policy"}})]):e._e()])})),0):e._e(),e.policies.length>0?i("div",{staticClass:"flex justify-center py-4"},[i("button",{staticClass:"btn shadow",on:{click:e.goBack}},[e._v("Back")])]):e._e()])])],1)},n=[],c=(a("96cf"),a("1da1")),s=a("d4ec"),r=a("bee2"),o=a("2caf"),l=a("262e"),u=a("9ab4"),f=a("2b0e"),p=a("2fe1"),b=a("2f62"),h=a("5530"),v=a("277d"),d=a("1375"),g=function(){var e=Object(h["a"])({},Object(d["a"])());return v["a"].get("/policy/peek",{params:e})},m=a("0613"),y=a("2247");function k(){return w.apply(this,arguments)}function w(){return w=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,a=t.data,m["a"].commit(y["b"].SET_PEEKED_POLICIES,a.policies);case 5:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}var _=a("9619"),j=a("b15c"),P=a("fe57"),x=function(e){Object(l["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.showing=!1,e.Policy=_["b"],e}return Object(r["a"])(a,[{key:"getPeekedPolicies",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.showing=!0,e.prev=1,e.next=4,k();case 4:this.$gtag.event("game",{event_category:"policy-peek",event_label:this.$store.getters.channelName}),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),this.showing=!1;case 10:case"end":return e.stop()}}),e,this,[[1,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"goBack",value:function(){Object(j["a"])(P["a"].GameInfo)}},{key:"policies",get:function(){return this.activeRound.secret.policyPeek}}]),a}(f["a"]);x=Object(u["a"])([Object(p["a"])({computed:Object(b["b"])(["activeRound"])})],x);var O=x,C=O,E=a("2877"),I=Object(E["a"])(C,i,n,!1,null,null,null);t["default"]=I.exports},"64be":function(e,t,a){e.exports=a.p+"img/policy_fascist.60739294.jpg"},9619:function(e,t,a){"use strict";var i,n,c;a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c})),function(e){e["Hitler"]="secret hitler",e["Fascist"]="fascist",e["Liberal"]="liberal"}(i||(i={})),function(e){e["Fascist"]="fascist",e["Liberal"]="liberal"}(n||(n={})),function(e){e["Fascist"]="fascist",e["Liberal"]="liberal"}(c||(c={}))},b15c:function(e,t,a){"use strict";a("caad"),a("2532");var i=a("fe57"),n=a("5f86"),c=a("0613"),s=a("2247"),r=[i["a"].GameIsKilled,i["a"].GameWon,i["a"].GameInfo];t["a"]=function(e){c["a"].getters.isDead&&!r.includes(e)||(n["a"].push({name:e,params:{id:c["a"].getters.channelName}}),c["a"].commit(s["b"].SET_CURRENT_ACTION,e))}}}]);
//# sourceMappingURL=GamePolicyPeek.54b048c0.js.map