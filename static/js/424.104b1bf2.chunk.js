"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[424],{207:function(t,e,n){n.d(e,{M1:function(){return l},TP:function(){return d},_L:function(){return s},q5:function(){return g},z1:function(){return f}});var r=n(861),a=n(757),c=n.n(a),i=n(243),u="cfd36bd93c69795ed373a1dd4901e0df",o="https://api.themoviedb.org/3/";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(u));case 2:return e=t.sent,n=e.data.results.map((function(t){return{id:t.id,movieName:t.original_title}})),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(o,"search/movie?api_key=").concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=true"));case 2:return n=t.sent,r=n.data.results.map((function(t){return{id:t.id,movieName:t.original_title}})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return n=t.sent,r=[n.data].map((function(t){return{poster:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),tag:t.tagline,movieName:t.original_title,userScore:t.vote_average,overview:t.overview,genres:t.genres.map((function(t){return t.name}))}})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=t.sent,r=n.data.cast.map((function(t){return{castId:t.cast_id,name:t.original_name,character:t.character,castMemberPhoto:"https://themoviedb.org/t/p/w500/".concat(t.profile_path)}})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return n=t.sent,r=n.data.results.map((function(t){return{reviewId:t.id,author:t.author,review:t.content}})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},424:function(t,e,n){n.r(e),n.d(e,{default:function(){return s}});var r=n(439),a=n(791),c=n(207),i={image:"Cast_image__Wb81U"},u=n(689),o=n(184);function s(){var t=(0,a.useState)(null),e=(0,r.Z)(t,2),n=e[0],s=e[1],p=(0,u.UO)().movieId;return(0,a.useEffect)((function(){c.M1(p).then(s)}),[p]),(0,o.jsxs)("div",{className:i.cast_thumb,children:[(0,o.jsx)("hr",{}),!n||(0===n.length?(0,o.jsx)("p",{children:"We don't have a cast for this movie"}):n.map((function(t){return(0,o.jsxs)("div",{children:[t.castMemberPhoto.includes("w500/null")?(0,o.jsx)("div",{}):(0,o.jsx)("img",{src:t.castMemberPhoto,alt:t.name,className:i.image}),(0,o.jsx)("h5",{children:t.name}),(0,o.jsx)("p",{children:t.character})]},t.castId)})))]})}}}]);
//# sourceMappingURL=424.104b1bf2.chunk.js.map