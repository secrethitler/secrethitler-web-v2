(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GameVote"],{1375:function(e,t,n){"use strict";var r=n("0613");t["a"]=function(){return{userId:r["a"].getters.userId,channelName:r["a"].getters.channelName}}},cd12:function(e,t,n){e.exports=n.p+"img/vote_yes.3421e3c3.jpg"},fbc6:function(e,t,n){"use strict";n.r(t);var r,s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("page-title",[e._v("Election")]),r("div",{staticClass:"container flex justify-center"},[r("div",{staticClass:"lg:w-1/2"},[r("div",{staticClass:"mb-4"},[r("h3",{staticClass:"font-serif text-2xl mb-4"},[e._v(e._s(e.chancellor.userName||"")+" was nominated as chancellor.")]),r("p",[e._v("Do you accept this nomination?")])]),r("div",{staticClass:"pt-6 flex justify-center",class:{"opacity-50":e.hasVoted,"pointer-events-none":e.hasVoted}},[r("div",{staticClass:"p-6 max-w-xs cursor-pointer border-4 border-transparent",class:{"border-red-700":e.voted===e.UserVote.Yes},on:{click:function(t){return e.vote(!0)}}},[r("img",{attrs:{src:n("cd12"),alt:""}})]),r("div",{staticClass:"p-6 max-w-xs cursor-pointer border-4 border-transparent",class:{"border-red-700":e.voted===e.UserVote.No},on:{click:function(t){return e.vote(!1)}}},[r("img",{attrs:{src:n("fd81"),alt:""}})])]),r("div",{staticClass:"pt-8 text-center font-old text-4xl text-gray-700"},[e._v(e._s(e.count)+" / "+e._s(e.members.length)+" have voted.")])])])],1)},a=[],c=(n("7db0"),n("96cf"),n("1da1")),o=n("d4ec"),i=n("bee2"),u=n("2caf"),l=n("262e"),d=n("9ab4"),v=n("2f62"),p=n("2b0e"),f=n("2fe1"),h=n("5530"),b=n("277d"),m=n("1375"),g=function(e){var t=Object(h["a"])({votedYes:e},Object(m["a"])());return b["a"].post("/chancellor/vote",t)};function x(e){return j.apply(this,arguments)}function j(){return j=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:n=e.sent,n.data;case 4:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}(function(e){e[e["NotYet"]=0]="NotYet",e[e["Yes"]=1]="Yes",e[e["No"]=2]="No"})(r||(r={}));var w=function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.disable=!1,e.voted=r.NotYet,e.UserVote=r,e}return Object(i["a"])(n,[{key:"vote",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.disable=!0,e.prev=1,e.next=4,x(t);case 4:this.voted=t?r.Yes:r.No,this.$gtag.event("game",{event_category:"vote",event_label:this.$store.getters.channelName}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),this.disable=!1;case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"count",get:function(){return this.activeRound.votes.length}},{key:"hasFinished",get:function(){return this.count===this.members.length}},{key:"hasVoted",get:function(){var e=this;return this.disable||!!this.activeRound.votes.find((function(t){return t.userId===e.userId}))}}]),n}(p["a"]);w=Object(d["a"])([Object(f["a"])({computed:Object(v["b"])(["chancellor","members","activeRound","userId"])})],w);var y=w,_=y,O=n("2877"),k=Object(O["a"])(_,s,a,!1,null,null,null);t["default"]=k.exports},fd81:function(e,t,n){e.exports=n.p+"img/vote_no.65314b9f.jpg"}}]);
//# sourceMappingURL=GameVote.1db41eda.js.map