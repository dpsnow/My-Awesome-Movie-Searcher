(this["webpackJsonpmy-awesome-movie-searcher"]=this["webpackJsonpmy-awesome-movie-searcher"]||[]).push([[0],{75:function(e,t,a){e.exports=a(86)},84:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),o=a(24),i=a(17),u=a(67),s=a(61),m=a.n(s),p=a(62),E=(a(84),a(51)),f=a(128),v=a(44),d=(Object(v.a)((function(e){return Array.from(e.movies.values()).filter((function(e){return e.isFav}))}),(function(e){return e})),Object(v.a)((function(e){if(void 0===e.search)return e.movies;var t=e.search.values,a=t.genre,n=t.text;if(a||n){var r=Array.from(e.movies.values()).filter((function(e){return"all"===a||e.genres.includes(a)})).filter((function(e){return""===n||e.title.includes(n)})).reduce((function(e,t){return e.concat([[t.id,t]])}),[]);return new Map(r)}return e.movies}),(function(e){return e}))),O=a(16),h=a(114),g=a(117),b=a(119),y=a(120),j=a(121),x=a(122),A=a(134),k=a(136),w=a(123),T=a(124),P=a(127),S=a(125),_=a(126),R=function(e){return{type:"@@APP/ROOT/ADD_SEARCH",payload:e}},C="https://devlab.website/",M="ZF9wbG90bmlrb3ZhOllpTnNJbFRUckQ=",F="".concat(C,"v1/movies"),U="".concat(C,"v1/movie/"),V="".concat(C,"v1/user/").concat("d_plotnikova"),L=Object(h.a)({root:{display:"flex",flexWrap:"wrap","& > *":{margin:"2px"}},expand:{transform:"rotate(0deg)"},expandOpen:{transform:"rotate(180deg)"}}),D=function(e){var t=Object(i.b)(),a=e.title,c=e.overview,l=e.genres,o=e.posterPath,u=e.id,s=(e.isFavorite,Object(n.useState)(!1)),m=Object(O.a)(s,2),p=m[0],f=m[1],v=Object(i.c)((function(e){return e.user.likes}));console.log(v);var d=v&&v.includes(u);console.log(d);var h=L();return r.a.createElement(g.a,null,r.a.createElement(b.a,{style:{height:"400px"},image:"".concat(C).concat(o)}),r.a.createElement(y.a,{title:a,titleTypographyProps:{align:"center"}}),r.a.createElement(j.a,{variant:"middle"}),r.a.createElement(x.a,null,r.a.createElement(A.a,{className:h.root},l.map((function(e){return r.a.createElement(k.a,{variant:"outlined",key:e,size:"small",label:e})})))),r.a.createElement(w.a,{disableSpacing:!0},r.a.createElement(T.a,{onClick:function(){t(function(e,t){return{type:"@@APP/ROOT/SET_FAV_MOVIE_SAGA",payload:{id:e,currentStatus:t}}}(u,Boolean(d)))},color:d?"secondary":"default"},r.a.createElement(S.a,null)," \u043e\u0442 user.likes"),r.a.createElement(T.a,{className:p?h.expandOpen:h.expand,onClick:function(){f(!p)},style:{marginLeft:"auto"}},r.a.createElement(_.a,null))),r.a.createElement(P.a,{in:p,timeout:"auto",unmountOnExit:!0},r.a.createElement(x.a,null,r.a.createElement(E.a,{paragraph:!0},"Overview:"),r.a.createElement(E.a,{paragraph:!0},c))))},G=function(){var e=Object(i.c)(d);return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"h3",component:"h1"},"Movies"),r.a.createElement(f.a,{container:!0,alignItems:"stretch",spacing:1},e&&Array.from(e.values()).map((function(e){return r.a.createElement(f.a,{item:!0,xs:12,sm:6,md:4,key:e.id},r.a.createElement(D,e))}))))},I=a(129),N=function(){return r.a.createElement(I.a,{maxWidth:"md",style:{marginTop:"60px"}},r.a.createElement(j.a,{variant:"fullWidth"}),r.a.createElement(f.a,{container:!0,spacing:1},r.a.createElement(A.a,null,r.a.createElement("a",{href:"/"},"Privacy Policy"),r.a.createElement("p",null,"\xa9 2010-",(new Date).getFullYear()," by Movier-plus.com, Inc."))))},W=a(87),H=a(138),B=a(130),z=a(135),J=a(137),Z=a(131),Q=Object(v.a)((function(e){var t=Array.from(e.movies.values()).map((function(e){return e.genres}));return new Set(t.flat())}),(function(e){return e})),Y=function(){var e=Object(i.b)(),t=Object(i.c)(Q),a=Object(i.c)((function(e){return e.search?e.search.last:[]})),c=Object(n.useState)("all"),l=Object(O.a)(c,2),o=l[0],u=l[1],s=Object(n.useState)(""),m=Object(O.a)(s,2),p=m[0],E=m[1];return r.a.createElement(B.a,{fullWidth:!0,size:"small",style:{display:"flex",flexDirection:"row"}},r.a.createElement(z.a,{id:"select",value:o,onChange:function(t){u(t.target.value),e(R({genre:t.target.value,text:p}))}},r.a.createElement(J.a,{value:"all"},"All"),0!==t.size&&Array.from(t).map((function(e){return r.a.createElement(J.a,{key:e,value:e},e)}))),r.a.createElement("input",{type:"search",name:"search",id:"search",list:"search-select",onBlur:function(t){E(t.target.value),e(R({genre:o,text:t.target.value}))}}),r.a.createElement("datalist",{id:"search-select"},a&&a.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement(Z.a,null))},$=a(132),q=a(66),K=a(133),X=function(){var e=Object(i.c)((function(e){return e.user.login})),t=Object(n.useState)(null),a=Object(O.a)(t,2),c=a[0],l=a[1],o=function(){l(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{"aria-controls":"user-menu","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)}},r.a.createElement(K.a,null),e),r.a.createElement(q.a,{id:"user-menu",anchorEl:c,open:Boolean(c),onClose:o},r.a.createElement(J.a,{onClick:o},"Profile"),r.a.createElement(J.a,{onClick:o},"Settings"),r.a.createElement(J.a,{onClick:o},"Logout")))},ee=function(){return r.a.createElement(W.a,null,r.a.createElement(I.a,{maxWidth:"md"},r.a.createElement(f.a,{container:!0,spacing:1},r.a.createElement(f.a,{item:!0},r.a.createElement("span",null,"Realise Calendar")," | ",r.a.createElement("span",null,"My List")," | ",r.a.createElement("span",null,"Coming soon")),r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,null,r.a.createElement(H.a,{value:"checkedC",inputProps:{"aria-label":"primary checkbox"}})))),r.a.createElement(f.a,{container:!0,spacing:1},r.a.createElement(f.a,{item:!0,xs:2},r.a.createElement(E.a,{variant:"h6"},">MOViER+")),r.a.createElement(f.a,{item:!0,xs:!0},r.a.createElement(A.a,{flexShrink:1},r.a.createElement(Y,null))),r.a.createElement(f.a,{item:!0,xs:2},r.a.createElement(X,null)))))},te=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null),r.a.createElement("div",{className:"App"},r.a.createElement(I.a,{maxWidth:"md"},r.a.createElement(G,null))),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=a(21),ne={movies:new Map,search:{values:{genre:"",text:""}},user:{}},re=new Map([["@@APP/ROOT/PUT_MOVIES",function(e,t){return Object(ae.a)({},e,{movies:t.payload})}],["@@APP/ROOT/CHANGE_FAV_MOVIE_STATUS",function(e,t){console.log("changeFavoriteMovie");var a=new Map(e.movies),n=a.get(t.payload);return n&&(n.isFavorite=!n.isFavorite,a.set(t.payload,n)),console.log(n),Object(ae.a)({},e,{movies:a})}],["@@APP/ROOT/CHANGE_MOVES_USER",function(e,t){console.log("changeUsersMovies");var a=t.payload,n=e.user,r=n.likes&&n.likes.indexOf(a);return console.log(r),-1!==r?n.likes.splice(r,1):n.likes.push(a),Object(ae.a)({},e,{user:n})}],["@@APP/ROOT/ADD_SEARCH",function(e,t){var a=new Set(e.search.last||[]);if(a.add(t.payload.text),a.size>=6){var n=Array.from(a.values());a.delete(n[0])}return Object(ae.a)({},e,{search:{values:{genre:t.payload.genre,text:t.payload.text},last:Array.from(a.values())}})}],["@@APP/ROOT/FETCH_USER",function(e,t){return Object(ae.a)({},e,{user:t.payload})}],["DEFAULT",function(e){return console.log("reducer DEFAULT"),Object(ae.a)({},e)}]]);var ce=a(23),le=a.n(ce),oe=a(19),ie=a(14);function ue(e){var t=Object.entries(e).reduce((function(e,t){var a,n=Object(O.a)(t,2),r=n[0],c=n[1];return Object(ae.a)({},e,Object(ie.a)({},(a=r).includes("_")?a.replace(/([-_]\w)/g,(function(e){return e[1].toUpperCase()})):a,c))}),{});return[e.id,t]}var se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return fetch(e,{method:t,body:a?JSON.stringify(a):null,headers:{"Content-Type":"application/json",Authorization:"Basic ".concat(M)}}).then((function(e){return e.json()}))},me={load:function(){return se(F).then((function(e){var t=e.map(ue);return new Map(t)}))},addLike:function(e){return se("".concat(U).concat(e,"/like"),"POST").then((function(e){if("success"===e.type)return e;throw Error("err")}))},removeLike:function(e){return se("".concat(U).concat(e,"/like"),"DELETE").then((function(e){if("success"===e.type)return e;throw Error("err")}))}},pe=function(){return se(V).then((function(e){return e}))},Ee=le.a.mark(Oe),fe=le.a.mark(he),ve=le.a.mark(ge),de=le.a.mark(be);function Oe(){var e;return le.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(oe.b)(me.load);case 2:return e=t.sent,t.next=5,Object(oe.d)({type:"@@APP/ROOT/PUT_MOVIES",payload:e});case 5:case"end":return t.stop()}}),Ee)}function he(){var e;return le.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(oe.b)(pe);case 2:return e=t.sent,t.next=5,Object(oe.d)({type:"@@APP/ROOT/FETCH_USER",payload:e});case 5:case"end":return t.stop()}}),fe)}function ge(e){var t,a,n;return le.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,a=t.id,n=t.currentStatus,console.log("SAGA-changeMoviesLikes",e),r.next=4,Object(oe.b)(n?me.removeLike:me.addLike,a);case 4:if("success"!==r.sent.type){r.next=12;break}return r.next=8,Object(oe.d)({type:"@@APP/ROOT/CHANGE_MOVES_USER",payload:a});case 8:return r.next=10,Object(oe.d)({type:"@@APP/ROOT/CHANGE_FAV_MOVIE_STATUS",payload:a});case 10:r.next=13;break;case 12:console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435");case 13:case"end":return r.stop()}}),ve)}function be(){return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(oe.a)([Object(oe.c)(he),Object(oe.c)(Oe)]);case 2:return e.next=4,Object(oe.e)("@@APP/ROOT/SET_FAV_MOVIE_SAGA",ge);case 4:case"end":return e.stop()}}),de)}var ye=Object(u.a)(),je=Object(o.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;console.log("rootReducer: action",t.type);var a=re.has(t.type)?re.get(t.type):re.get("DEFAULT");return a(e,t)}),void 0,Object(p.composeWithDevTools)(Object(o.applyMiddleware)(m.a,ye)));ye.run(be),l.a.render(r.a.createElement(i.a,{store:je},r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[75,1,2]]]);
//# sourceMappingURL=main.bc5afaa5.chunk.js.map