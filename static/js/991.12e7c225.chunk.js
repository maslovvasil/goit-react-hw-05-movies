"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[991],{207:function(e,t,n){n.d(t,{M1:function(){return f},TP:function(){return v},_L:function(){return u},q5:function(){return g},z1:function(){return p}});var r=n(861),a=n(757),i=n.n(a),c=n(243),o="cfd36bd93c69795ed373a1dd4901e0df",s="https://api.themoviedb.org/3/";function u(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 2:return t=e.sent,n=t.data.results.map((function(e){return{id:e.id,movieName:e.original_title}})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=true"));case 2:return n=e.sent,r=n.data.results.map((function(e){return{id:e.id,movieName:e.original_title}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=[n.data].map((function(e){return{poster:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),tag:e.tagline,movieName:e.original_title,userScore:e.vote_average,overview:e.overview,genres:e.genres.map((function(e){return e.name}))}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data.cast.map((function(e){return{castId:e.cast_id,name:e.original_name,character:e.character,castMemberPhoto:"https://themoviedb.org/t/p/w500/".concat(e.profile_path)}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data.results.map((function(e){return{reviewId:e.id,author:e.author,review:e.content}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},991:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(439),a=n(791),i=n(689),c=n(947),o=n(207),s={goBack_link:"MovieDetails_goBack_link__f+fJy",image:"MovieDetails_image__35XpB",movie_thumb:"MovieDetails_movie_thumb__aDTlG"},u=n(184);function l(){var e,t,n,l,p=(0,a.useState)(null),d=(0,r.Z)(p,2),v=d[0],h=d[1],f=(0,i.UO)().movieId,m=(0,i.s0)(),g=(0,i.TH)();(0,a.useEffect)((function(){o.TP(f).then(h).catch((function(e){m("/",{replace:!0}),console.error(e)}))}),[f,m]);var _=null!==(e=null===g||void 0===g||null===(t=g.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,u.jsxs)("div",{children:[(0,u.jsx)(c.rU,{to:_,className:s.goBack_link,children:"\u2190 Go Back"}),v&&(0,u.jsxs)("div",{className:s.movie_thumb,children:[(0,u.jsx)("img",{src:v[0].poster,alt:v[0].tag,className:s.image}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:v[0].movieName}),(0,u.jsxs)("p",{children:["User score: ",v[0].userScore]}),(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:v[0].overview}),(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("p",{className:s.genres,children:v[0].genres.join(",  ")})]})]}),(0,u.jsx)("hr",{}),(0,u.jsx)("h3",{children:"More information"}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("ul",{className:s.links,children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"cast",state:{from:null===g||void 0===g||null===(n=g.state)||void 0===n?void 0:n.from},children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"reviews",state:{from:null===g||void 0===g||null===(l=g.state)||void 0===l?void 0:l.from},children:"Reviews"})})]}),(0,u.jsx)(i.j3,{})]})]})}}}]);
//# sourceMappingURL=991.12e7c225.chunk.js.map