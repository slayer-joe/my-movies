(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(21),i=c.n(r),s=(c(27),c(28),c(2)),o=c(10),l=c(3),u=c(4),p=c.n(u),j=c(6),m=c(0);var b=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],r=t[1],i=c[Math.floor(20*Math.random())];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/popular?api_key=9449551dec8662f64c113bec5d422444&language=ru&page=1");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r((function(e){return e.concat(c.results)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(m.jsx)(a.a.Fragment,{children:c.length>0?Object(m.jsx)("div",{className:"promo-container",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(i.backdrop_path,")")},children:Object(m.jsx)("div",{className:"film-info",children:Object(m.jsxs)("div",{className:"title",children:[Object(m.jsxs)("h2",{className:"name",children:[i.title," / ",i.original_title]}),Object(m.jsxs)("p",{className:"rating",children:["Rating: ",i.vote_average]})]})})}):""})};var d=function(e){var t=e.title,c=e.originalTitle,n=e.src,a=e.rating,r=e.description,i=e.id,s=e.bg,o=e.type,u=e.group,p=Object(l.e)();return Object(m.jsx)("li",{children:Object(m.jsx)("img",{src:n,alt:t,className:"film",onClick:function(){p.push("/".concat(o,"/").concat(i),{title:t,originalTitle:c,src:n,rating:a,description:r,id:i,bg:s,type:o,group:u})}})})};var h=function(e){var t=e.title,c=e.type,a=e.group,r=Object(n.useRef)(),i=Object(n.useState)(0),o=Object(s.a)(i,2),l=o[0],u=o[1],b=Object(n.useState)(1),h=Object(s.a)(b,2),f=h[0],x=h[1],O=Object(n.useState)(0),g=Object(s.a)(O,2),v=g[0],y=g[1],N=Object(n.useState)(1),k=Object(s.a)(N,2),S=k[0],A=k[1],E=Object(n.useState)([]),J=Object(s.a)(E,2),T=J[0],w=J[1],R=function(e){"prev"===e&&0!==l?(u((function(e){return e+165})),x((function(e){return e-1}))):"next"===e&&(u((function(e){return e-165})),x((function(e){return e+1})))};return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/".concat(c,"/").concat(a,"?api_key=9449551dec8662f64c113bec5d422444&language=ru&page=").concat(S));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,w((function(e){return e.concat(n.results)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[S,a,c]),Object(n.useEffect)((function(){f%15===0&&f>v&&(y((function(e){return e+15})),A((function(e){return e+1})))}),[f,v]),Object(n.useEffect)((function(){r.current.style.transform="translateX(".concat(l,"px)")}),[l]),Object(m.jsxs)("div",{className:"film-block",children:[Object(m.jsx)("h1",{children:t}),Object(m.jsx)("ul",{className:"film-row",ref:r,children:T.map((function(e,t){return Object(m.jsx)(d,{title:e.title?e.title:e.name,originalTitle:e.original_title?e.original_title:e.original_name,src:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),rating:e.vote_average,description:e.overview,id:e.id,bg:e.backdrop_path,type:c,group:a},e.id)}))}),Object(m.jsx)("button",{className:"btn btn-prev",onClick:function(){return R("prev")},children:"\u2039"}),Object(m.jsx)("button",{className:"btn btn-next",onClick:function(){return R("next")},children:"\u203a"})]})};var f=function(){var e="movie",t="popular",c="top_rated",n="upcoming",r="now_playing";return Object(m.jsxs)(a.a.Fragment,{children:[Object(m.jsx)(b,{}),Object(m.jsx)(h,{title:"POPULAR MOVIES",group:t,type:e}),Object(m.jsx)(h,{title:"TOP RATED",group:c,type:e}),Object(m.jsx)(h,{title:"UPCOMING",group:n,type:e}),Object(m.jsx)(h,{title:"NOW PLAYING",group:r,type:e})]})};var x=function(){return Object(m.jsxs)("div",{className:"nav-container",children:[Object(m.jsx)(o.c,{to:"/movies/popular",children:"POPULAR"}),Object(m.jsx)(o.c,{to:"/movies/top_rated",children:"TOP250"}),Object(m.jsx)(o.c,{to:"/tv",children:"TV Shows"}),Object(m.jsx)(o.c,{to:"/dairy",children:"My favourite"})]})};var O=function(e){var t=e.setSearchType,c=e.setSearchResponse,a=Object(n.useRef)(),r=Object(n.useRef)();return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(o.b,{to:"/",children:Object(m.jsxs)("div",{className:"logo-container",children:[Object(m.jsx)("h1",{className:"logo",children:"My movies"}),Object(m.jsx)("img",{src:"data:image/png;base64,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",alt:"logo"})]})}),Object(m.jsx)(x,{}),Object(m.jsxs)("div",{className:"search",children:[Object(m.jsxs)("select",{size:"1",name:"types",ref:r,onChange:function(){!function(e){t(e.current.options[e.current.selectedIndex].value),console.log(e.current.options[e.current.selectedIndex].value)}(r)},children:[Object(m.jsx)("option",{value:"movie",children:"movies"}),Object(m.jsx)("option",{value:"tv",children:"TV show"}),Object(m.jsx)("option",{value:"person",children:"People"})]}),Object(m.jsx)("input",{type:"text",name:"search",id:"search",placeholder:"search",ref:a}),Object(m.jsx)(o.b,{to:"/search-list",children:Object(m.jsx)("button",{className:"search-btn",onClick:function(e){""!==a.current.value&&(c(a.current.value),a.current.value="")},children:"search"})})]})]})},g=c(15);var v=function(e){var t=e.title,c=e.originalTitle,n=e.src,a=e.rating,r=e.description,i=e.id,s=e.bg,o=e.group,u=e.type,p=e.listItem,j=e.setLocalData,b=e.buttonName,d=(e.localData,Object(l.e)());return Object(m.jsxs)("li",{className:"item",children:[Object(m.jsx)("img",{src:n,alt:t,className:"film-image",onClick:function(){d.push("/".concat(u,"/").concat(i),{title:t,originalTitle:c,src:n,rating:a,description:r,id:i,bg:s,group:o,type:u})}}),Object(m.jsxs)("div",{className:"info-block",children:[Object(m.jsxs)("h2",{className:"name",children:[t," / ",c]}),"person"!==u?Object(m.jsxs)("p",{className:"rating",children:["Rating: ",a]}):"",Object(m.jsx)("p",{className:"description",children:r}),"person"!==u?Object(m.jsx)("button",{onClick:function(){!function(){if("Add to my List"===b)p.type=u,j((function(e){return[].concat(Object(g.a)(e),[p])}));else if("delete from list"===b){var e=JSON.parse(localStorage.getItem("list")).filter((function(e){return e.id!==i}));localStorage.setItem("list",JSON.stringify(e)),j(e)}}()},children:b}):""]})]})};var y=function(e){var t=e.type,c=e.title,a=e.group,r=Object(n.useState)(1),i=Object(s.a)(r,2),o=i[0],l=i[1],u=Object(n.useState)([]),b=Object(s.a)(u,2),d=b[0],h=b[1],f=Object(n.useState)(JSON.parse(localStorage.getItem("list"))||[]),x=Object(s.a)(f,2),O=x[0],g=x[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(e){return e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<1&&l((function(e){return e+1})),function(){document.removeEventListener("scroll")}}))}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(p.a.mark((function e(){var c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/".concat(t,"/").concat(a,"?api_key=9449551dec8662f64c113bec5d422444&language=ru&page=").concat(o));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,h((function(e){return e.concat(n.results)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o,a,t]),Object(n.useEffect)((function(){localStorage.setItem("list",JSON.stringify(O))}),[O]),Object(m.jsxs)("div",{className:"list-container",children:[Object(m.jsx)("h1",{children:c}),Object(m.jsx)("ul",{className:"list",children:d.map((function(e,c){return Object(m.jsx)(v,{listItem:e,setLocalData:g,localData:O,title:e.title?e.title:e.name,originalTitle:e.original_title?e.original_title:e.original_name,src:e.poster_path?"https://image.tmdb.org/t/p/original/".concat(e.poster_path):"https://image.tmdb.org/t/p/original/".concat(e.profile_path),rating:e.vote_average,description:e.overview,id:e.id,bg:e.backdrop_path,buttonName:"Add to my List",type:t,group:a},e.id+c)}))})]})};var N=function(){var e=JSON.parse(localStorage.getItem("list")),t=Object(n.useState)(JSON.parse(localStorage.getItem("list"))||[]),c=Object(s.a)(t,2),a=c[0],r=c[1];return Object(m.jsxs)("div",{className:"favourites",children:[Object(m.jsx)("h2",{children:"Favourites"}),e.length>0?e.map((function(e,t){return Object(m.jsx)(v,{title:e.title?e.title:e.name,localData:a,setLocalData:r,originalTitle:e.original_title?e.original_title:e.original_name,src:e.poster_path?"https://image.tmdb.org/t/p/original/".concat(e.poster_path):"https://image.tmdb.org/t/p/original/".concat(e.profile_path),rating:e.vote_average,description:e.overview,id:e.id,type:e.type,buttonName:"delete from list",bg:e.backdrop_path},e.id+t)})):Object(m.jsx)("h3",{children:"The List is EMPTY"})]})};var k=function(e){var t=e.title,c=e.searchType,a=e.searchResponse,r=Object(n.useState)([]),i=Object(s.a)(r,2),o=i[0],l=i[1],u=Object(n.useState)(1),b=Object(s.a)(u,2),d=b[0],h=b[1],f=Object(n.useState)(JSON.parse(localStorage.getItem("list"))||[]),x=Object(s.a)(f,2),O=x[0],g=x[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(e){return e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<1&&h((function(e){return e+1})),function(){document.removeEventListener("scroll")}}))}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/".concat(c,"?api_key=9449551dec8662f64c113bec5d422444&query=").concat(a,"&page=").concat(d,"&language=ru"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l((function(e){return e.concat(n.results)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[d]),Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/".concat(c,"?api_key=9449551dec8662f64c113bec5d422444&query=").concat(a,"&page=").concat(d,"&language=ru"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l((function(e){return n.results}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/".concat(c,"?api_key=9449551dec8662f64c113bec5d422444&query=").concat(a,"&page=").concat(d,"&language=ru"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l((function(e){return n.results}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),Object(n.useEffect)((function(){localStorage.setItem("list",JSON.stringify(O))}),[O]),Object(m.jsxs)("div",{className:"list-container",children:[Object(m.jsx)("h2",{children:t}),Object(m.jsx)("ul",{className:"list",children:o.length>0?o.map((function(e){return Object(m.jsx)(v,{listItem:e,title:e.title?e.title:e.name,localData:O,setLocalData:g,originalTitle:e.original_title?e.original_title:e.original_name,src:e.poster_path?"https://image.tmdb.org/t/p/original/".concat(e.poster_path):"https://image.tmdb.org/t/p/original/".concat(e.profile_path),rating:e.vote_average,description:e.overview,id:e.id,buttonName:"Add to my List",bg:e.backdrop_path,type:c},e.id)})):Object(m.jsx)("h3",{children:"Sorry we didn't search anythyng. Check your response"})})]})};var S=function(e){var t=e.comment;return Object(m.jsxs)("div",{className:"comment_item",children:[Object(m.jsx)("img",{src:"https://via.placeholder.com/100",alt:"authorlogo"}),Object(m.jsxs)("div",{className:"comment_text_block",children:[Object(m.jsx)("h3",{className:"comment_author_name",children:t.name}),Object(m.jsx)("p",{className:"comment_text",children:t.body}),Object(m.jsx)("p",{className:"comment_email",children:t.email})]})]})};var A=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(1),i=Object(s.a)(r,2),o=i[0],l=i[1],u=Object(n.useRef)(),b=Object(n.useRef)(),d=Object(n.useRef)();return Object(n.useEffect)((function(){var e=Math.floor(20*Math.random());l(e)}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts/".concat(o,"/comments"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),a(c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o]),Object(m.jsxs)("div",{className:"comment_block",children:[Object(m.jsx)("h2",{className:"comment_block_title",children:"Comments"}),c.map((function(e,t){return Object(m.jsx)(S,{comment:e},t)})),Object(m.jsxs)("form",{name:"comments",className:"comment_form",action:"",children:[Object(m.jsxs)("label",{htmlFor:"comment_title",children:["Message title:*",Object(m.jsx)("input",{type:"text",placeholder:"Enter comment title",ref:u,id:"comment_title"})]}),Object(m.jsxs)("label",{htmlFor:"comment_text",children:["Message text:*",Object(m.jsx)("input",{type:"text",placeholder:"Enter your comment",className:"comment_text_field",ref:b,id:"comment_text"})]}),Object(m.jsxs)("label",{htmlFor:"comment_email",children:["Author email:*",Object(m.jsx)("input",{type:"text",placeholder:"Enter your e-mail",className:"comment_email_field",ref:d,id:"comment_email"})]}),Object(m.jsx)("button",{type:"button",className:"comment_form_btn",onClick:function(){!function(e,t,c){var n={body:e.current.value,email:t.current.value,name:c.current.value};""!==e.current.value.trim()&&""!==t.current.value.trim()&&""!==c.current.value.trim()&&a((function(e){return[].concat(Object(g.a)(e),[n])}))}(b,d,u)},children:"Send"})]})]})};var E=function(e){var t=e.location,c=Object(n.useState)(""),a=Object(s.a)(c,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(p.a.mark((function e(){var c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/".concat(t.state.type,"/").concat(t.state.id,"/videos?api_key=9449551dec8662f64c113bec5d422444&language=en"));case 2:return c=e.sent,e.next=5,c.json();case 5:(n=e.sent).results&&n.results.length>0&&i(n.results[0].key);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]),Object(m.jsx)("li",{className:"card_item_container",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(t.state.bg,")")},children:Object(m.jsxs)("div",{className:"card_item",children:[Object(m.jsx)("img",{src:t.state.src,alt:t.state.title,className:"film-image"}),Object(m.jsxs)("div",{className:"info-block",children:[Object(m.jsxs)("h2",{className:"name",children:[t.state.title," / ",t.state.originalTitle]}),Object(m.jsxs)("p",{className:"rating",children:["Rating: ",t.state.rating]}),Object(m.jsx)("p",{className:"description",children:t.state.description})]}),Object(m.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(r),frameBorder:"1px solid black",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:t.state.title}),Object(m.jsx)(A,{})]})})};var J=function(e){var t=e.location,c=Object(n.useState)({}),a=Object(s.a)(c,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(p.a.mark((function e(){var c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/person/".concat(t.state.id,"?api_key=9449551dec8662f64c113bec5d422444&&language=ru"));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,i((function(e){return n})),console.log(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.state.id]),Object(m.jsx)("li",{className:"card_item_container",children:Object(m.jsxs)("div",{className:"card_item",children:[Object(m.jsx)("img",{src:t.state.src,alt:t.state.title,className:"film-image"}),Object(m.jsxs)("div",{className:"info-block",children:[Object(m.jsx)("h2",{className:"name",children:r.name}),Object(m.jsxs)("p",{className:"birth",children:["\u0420\u043e\u0434\u0438\u043b\u0441\u044f: ",r.birthday," \u0432 ",r.place_of_birth]}),Object(m.jsxs)("p",{className:"popular",children:["Rating: ",r.popularity]}),Object(m.jsx)("p",{className:"biography",children:r.biography?r.biography:"Sorry, we haven't got any biography information about this person"})]})]})})};var T=function(){var e="tv",t="movie",c="person",a="popular",r="top_rated",i=Object(n.useState)("movie"),u=Object(s.a)(i,2),p=u[0],j=u[1],b=Object(n.useState)(""),d=Object(s.a)(b,2),h=d[0],x=d[1];return Object(m.jsx)(o.a,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(O,{setSearchType:j,setSearchResponse:x}),Object(m.jsx)(l.a,{exact:!0,path:"/",component:f}),Object(m.jsx)(l.a,{exact:!0,path:"/movies/popular",children:Object(m.jsx)(y,{title:"Popular movies",group:a,type:t})}),Object(m.jsx)(l.a,{exact:!0,path:"/movies/top_rated",children:Object(m.jsx)(y,{title:"TOP RATED",group:r,type:t})}),Object(m.jsx)(l.a,{exact:!0,path:"/tv",children:Object(m.jsx)(y,{title:"TV shows",group:a,type:e})}),Object(m.jsx)(l.a,{exact:!0,path:"/dairy",children:Object(m.jsx)(N,{title:"My favourite"})}),Object(m.jsx)(l.a,{exact:!0,path:"/search-list",children:Object(m.jsx)(k,{title:"Results",searchType:p,searchResponse:h})}),Object(m.jsx)(l.a,{exact:!0,path:"/"+t+"/:id",component:E}),Object(m.jsx)(l.a,{exact:!0,path:"/"+e+"/:id",component:E}),Object(m.jsx)(l.a,{exact:!0,path:"/"+c+"/:id",component:J})]})})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.3c922d97.chunk.js.map