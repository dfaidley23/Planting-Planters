(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var a,r,s,c,i,l=n(0),o=n.n(l),d=n(45),j=n.n(d),u=(n(110),n(111),n(34)),b=n(102),h=n(138),p=n(139),O=n(135),m=n(99),x=n(61),g=n(10),v=n(50),f=n(22),w=n(38),k=n(12),y=n(128),S=n(129),I=n(137),C=n(97),P=n(130),N=n(131),F=n(143),T=n(127),L=n(51),_=n(101),$=Object(_.b)(a||(a=Object(L.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),q=Object(_.b)(r||(r=Object(L.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),D=Object(_.b)(s||(s=Object(L.a)(["\n  mutation addPlant($input: savedPlants!) {\n    addPlant(input: $input) {\n      _id\n      username\n      email\n      plantCount\n      savedPlants {\n        bookId\n        authors\n        image\n        link\n        title\n        description\n      }\n    }\n  }\n"]))),E=Object(_.b)(c||(c=Object(L.a)(["\n  mutation removePlant($plantId: ID!) {\n    removePlant(plantId: $plantId) {\n      _id\n      username\n      email\n      plantCount\n      savedPlants {\n        bookId\n        authors\n        image\n        link\n        title\n        description\n      }\n    }\n  }\n"]))),A=n(23),B=n(24),G=n(83),U=n.n(G),V=new(function(){function e(){Object(A.a)(this,e)}return Object(B.a)(e,[{key:"getProfile",value:function(){return U()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return U()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),J=function(e){var t=localStorage.getItem("saved_plants")?JSON.parse(localStorage.getItem("saved_plants")):null;if(!t)return!1;var n=null===t||void 0===t?void 0:t.filter((function(t){return t!==e}));return localStorage.setItem("saved_plants",JSON.stringify(n)),!0},Y=n(2),H=function(){var e=Object(l.useState)([]),t=Object(k.a)(e,2),n=t[0],a=t[1],r=Object(l.useState)(""),s=Object(k.a)(r,2),c=s[0],i=s[1],o=Object(l.useState)(localStorage.getItem("saved_plants")?JSON.parse(localStorage.getItem("saved_plants")):[]),d=Object(k.a)(o,2),j=d[0],u=d[1],b=Object(T.a)(D),h=Object(k.a)(b,1)[0];Object(l.useEffect)((function(){return function(){var e;(e=j).length?localStorage.setItem("saved_plants",JSON.stringify(e)):localStorage.removeItem("saved_plants")}}));var p=function(){var e=Object(w.a)(Object(f.a)().mark((function e(t){var n,r,s,l;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(c));case 6:if((n=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,n.json();case 11:r=e.sent,s=r.items,l=s.map((function(e){var t;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(t=e.volumeInfo.imageLinks)||void 0===t?void 0:t.thumbnail)||""}})),a(l),i(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(w.a)(Object(f.a)().mark((function e(t){var a;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.find((function(e){return e.plantId===t})),V.loggedIn()?V.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,h({variables:{input:a}});case 7:u([].concat(Object(v.a)(j),[a.plantId])),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)(y.a,{fluid:!0,className:"text-light text-center background",children:[Object(Y.jsx)("h1",{className:"textWhite",children:"Find your Area"}),Object(Y.jsx)("iframe",{scrolling:"no",frameborder:"0",title:"Hardiness Map",height:"650px",width:"1100px","data-src":"https://usdaars.maps.arcgis.com/apps/webappviewer/index.html?id=00a463f18c254d39b5dd6274cc4f92f9",src:"https://usdaars.maps.arcgis.com/apps/webappviewer/index.html?id=00a463f18c254d39b5dd6274cc4f92f9"}),Object(Y.jsxs)(S.a,{children:[Object(Y.jsx)("h1",{children:"Search for Plants!"}),Object(Y.jsx)(I.a,{onSubmit:p,children:Object(Y.jsxs)(I.a.Row,{children:[Object(Y.jsx)(C.a,{xs:12,md:8,children:Object(Y.jsx)(I.a.Control,{name:"searchInput",value:c,onChange:function(e){return i(e.target.value)},type:"text",size:"lg",placeholder:"Search for a plant"})}),Object(Y.jsx)(C.a,{xs:12,md:4,children:Object(Y.jsx)(P.a,{type:"submit",variant:"success",size:"lg",children:"Submit Search"})})]})})]})]}),Object(Y.jsxs)(S.a,{children:[Object(Y.jsx)("h2",{children:n.length?"Viewing ".concat(n.length," results:"):"Search for a plant to begin"}),Object(Y.jsx)(N.a,{children:n.map((function(e){return Object(Y.jsxs)(F.a,{border:"dark",children:[e.image?Object(Y.jsx)(F.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,Object(Y.jsxs)(F.a.Body,{children:[Object(Y.jsx)(F.a.Title,{children:e.title}),Object(Y.jsxs)("p",{className:"small",children:["Authors: ",e.authors]}),Object(Y.jsx)(F.a.Text,{children:e.description}),V.loggedIn()&&Object(Y.jsx)(P.a,{disabled:null===j||void 0===j?void 0:j.some((function(t){return t===e.plantId})),className:"btn-block btn-info",onClick:function(){return O(e.plantId)},children:null!==j&&void 0!==j&&j.some((function(t){return t===e.plantId}))?"This plant has already been saved!":"Save this Plant!"})]})]},e.plantId)}))})]})]})},K=n(145),M=Object(_.a)(i||(i=Object(L.a)(["\n  query me {\n    me {\n      _id\n      username\n      email\n      plantCount\n      savedPlants {\n        bookId\n        authors\n        image\n        link\n        title\n        description\n      }\n    }\n  }\n"]))),W=function(){var e=Object(K.a)(M),t=e.loading,n=e.data,a=Object(T.a)(E),r=Object(k.a)(a,1)[0],s=(null===n||void 0===n?void 0:n.me)||[],c=function(){var e=Object(w.a)(Object(f.a)().mark((function e(t){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(V.loggedIn()?V.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,r({variables:{plantId:t}});case 6:J(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}();return t?Object(Y.jsx)("h2",{children:"LOADING..."}):Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(y.a,{fluid:!0,className:"text-light bg-dark",children:Object(Y.jsx)(S.a,{children:Object(Y.jsx)("h1",{children:"Viewing saved plants!"})})}),Object(Y.jsxs)(S.a,{children:[Object(Y.jsx)("h2",{children:s.savedPlants.length?"Viewing ".concat(s.savedPlants.length," saved ").concat(1===s.savedPlants.length?"plant":"plants",":"):"You have no saved plants!"}),Object(Y.jsx)(N.a,{children:s.savedPlants.map((function(e){return Object(Y.jsxs)(F.a,{border:"dark",children:[e.image?Object(Y.jsx)(F.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,Object(Y.jsxs)(F.a.Body,{children:[Object(Y.jsx)(F.a.Title,{children:e.title}),Object(Y.jsxs)("p",{className:"small",children:["Authors: ",e.authors]}),Object(Y.jsx)(F.a.Text,{children:e.description}),Object(Y.jsx)(P.a,{className:"btn-block btn-danger",onClick:function(){return c(e.plantId)},children:"Delete this Plant!"})]})]},e.plantId)}))})]})]})},z=n(141),R=n(140),Q=n(136),X=n(142),Z=n(55),ee=n(133),te=function(){var e=Object(l.useState)({username:"",email:"",password:""}),t=Object(k.a)(e,2),n=t[0],a=t[1],r=Object(l.useState)(!1),s=Object(k.a)(r,1)[0],c=Object(l.useState)(!1),i=Object(k.a)(c,2),o=i[0],d=i[1],j=Object(T.a)(q),b=Object(k.a)(j,1)[0],h=function(e){var t=e.target,r=t.name,s=t.value;a(Object(u.a)(Object(u.a)({},n),{},Object(Z.a)({},r,s)))},p=function(){var e=Object(w.a)(Object(f.a)().mark((function e(t){var r,s;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,b({variables:Object(u.a)({},n)});case 6:r=e.sent,s=r.data,V.login(s.addUser.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),d(!0);case 15:a({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsxs)(I.a,{noValidate:!0,validated:s,onSubmit:p,children:[Object(Y.jsx)(ee.a,{dismissible:!0,onClose:function(){return d(!1)},show:o,variant:"danger",children:"Something went wrong with your signup!"}),Object(Y.jsxs)(I.a.Group,{children:[Object(Y.jsx)(I.a.Label,{htmlFor:"username",children:"Username"}),Object(Y.jsx)(I.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:h,value:n.username,required:!0}),Object(Y.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Username is required!"})]}),Object(Y.jsxs)(I.a.Group,{children:[Object(Y.jsx)(I.a.Label,{htmlFor:"email",children:"Email"}),Object(Y.jsx)(I.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:h,value:n.email,required:!0}),Object(Y.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(Y.jsxs)(I.a.Group,{children:[Object(Y.jsx)(I.a.Label,{htmlFor:"password",children:"Password"}),Object(Y.jsx)(I.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:h,value:n.password,required:!0}),Object(Y.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(Y.jsx)(P.a,{disabled:!(n.username&&n.email&&n.password),type:"submit",variant:"success",children:"Submit"})]})})},ne=function(){var e=Object(l.useState)({email:"",password:""}),t=Object(k.a)(e,2),n=t[0],a=t[1],r=Object(l.useState)(!1),s=Object(k.a)(r,1)[0],c=Object(l.useState)(!1),i=Object(k.a)(c,2),o=i[0],d=i[1],j=Object(T.a)($),b=Object(k.a)(j,1)[0],h=function(e){var t=e.target,r=t.name,s=t.value;a(Object(u.a)(Object(u.a)({},n),{},Object(Z.a)({},r,s)))},p=function(){var e=Object(w.a)(Object(f.a)().mark((function e(t){var r,s;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,b({variables:Object(u.a)({},n)});case 6:r=e.sent,s=r.data,V.login(s.login.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),d(!0);case 15:a({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsxs)(I.a,{noValidate:!0,validated:s,onSubmit:p,children:[Object(Y.jsx)(ee.a,{dismissible:!0,onClose:function(){return d(!1)},show:o,variant:"danger",children:"Something went wrong with your login credentials!"}),Object(Y.jsxs)(I.a.Group,{children:[Object(Y.jsx)(I.a.Label,{htmlFor:"email",children:"Email"}),Object(Y.jsx)(I.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:h,value:n.email,required:!0}),Object(Y.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(Y.jsxs)(I.a.Group,{children:[Object(Y.jsx)(I.a.Label,{htmlFor:"password",children:"Password"}),Object(Y.jsx)(I.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:h,value:n.password,required:!0}),Object(Y.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(Y.jsx)(P.a,{disabled:!(n.email&&n.password),type:"submit",variant:"success",children:"Submit"})]})})},ae=function(){var e=Object(l.useState)(!1),t=Object(k.a)(e,2),n=t[0],a=t[1];return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(z.a,{className:"header textColor",variant:"dark",expand:"lg",children:Object(Y.jsxs)(S.a,{fluid:!0,children:[Object(Y.jsx)(z.a.Brand,{as:x.b,to:"/",children:"Planty Planter Pals"}),Object(Y.jsx)(z.a.Toggle,{"aria-controls":"navbar"}),Object(Y.jsx)(z.a.Collapse,{id:"navbar",children:Object(Y.jsxs)(R.a,{className:"ml-auto",children:[Object(Y.jsx)(R.a.Link,{as:x.b,to:"/search",children:"Search for your area"}),V.loggedIn()?Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(R.a.Link,{as:x.b,to:"/saved",children:"See your garden"}),Object(Y.jsx)(R.a.Link,{onClick:V.logout,children:"Logout"})]}):Object(Y.jsx)(R.a.Link,{onClick:function(){return a(!0)},children:"Login/Sign Up"})]})})]})}),Object(Y.jsx)(Q.a,{size:"lg",show:n,onHide:function(){return a(!1)},"aria-labelledby":"signup-modal",children:Object(Y.jsxs)(X.a.Container,{defaultActiveKey:"login",children:[Object(Y.jsx)(Q.a.Header,{closeButton:!0,children:Object(Y.jsx)(Q.a.Title,{id:"signup-modal",children:Object(Y.jsxs)(R.a,{variant:"pills",children:[Object(Y.jsx)(R.a.Item,{children:Object(Y.jsx)(R.a.Link,{eventKey:"login",children:"Login"})}),Object(Y.jsx)(R.a.Item,{children:Object(Y.jsx)(R.a.Link,{eventKey:"signup",children:"Sign Up"})})]})})}),Object(Y.jsx)(Q.a.Body,{children:Object(Y.jsxs)(X.a.Content,{children:[Object(Y.jsx)(X.a.Pane,{eventKey:"login",children:Object(Y.jsx)(ne,{handleModalClose:function(){return a(!1)}})}),Object(Y.jsx)(X.a.Pane,{eventKey:"signup",children:Object(Y.jsx)(te,{handleModalClose:function(){return a(!1)}})})]})})]})})]})},re=n.p+"static/media/Garden.f741fb42.jpeg",se=function(){return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsxs)("div",{className:"background textWhite",children:[Object(Y.jsx)("div",{children:Object(Y.jsx)("h1",{id:"homeHeader",children:"Welcome!"})}),Object(Y.jsx)("div",{className:"container-fluid justify-content-center background",children:Object(Y.jsxs)("div",{className:"row align-items-start",children:[Object(Y.jsx)("div",{className:"col",children:Object(Y.jsx)("img",{className:"homeImg",src:re,alt:"A lush green backyard with lots of plants"})}),Object(Y.jsxs)("div",{className:"col introStyle px-3",children:[Object(Y.jsx)("p",{className:"py-2",children:"As the founders of PPP we are all from the Colorado area. In our state weather can be unpredictable, sometimes the mystery of will it snow in late May is fun and other times it's down right frustrating."}),Object(Y.jsx)("p",{className:"py-2",children:"I think most of us at one point or another have gone to plant a garden in our backyard, put in a day of work getting it to look nice and then a late snow comes through and kills everything."}),Object(Y.jsx)("p",{className:"py-2",children:"As victims of Colorado weather in the past we said enough is enough, we want to make informed decisions about planning our gardens and thus PPP was born. Here to help you plan and maintain a beautfiul garden year round."})]})]})})]})})},ce=function(){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("div",{className:"my-0 splitter"}),Object(Y.jsxs)("div",{className:" pt-5 container-auto translate-middle center",children:[Object(Y.jsx)("div",{class:"",children:Object(Y.jsx)("h2",{className:"text-center textWhite",children:"Popular plants!"})}),Object(Y.jsxs)("div",{className:"text-center py-2",children:[Object(Y.jsx)("span",{class:"dot"}),Object(Y.jsx)("span",{class:"dot"}),Object(Y.jsx)("span",{class:"dot"}),Object(Y.jsx)("span",{class:"dot"}),Object(Y.jsx)("span",{class:"dot"})]})]})]})},ie=Object(b.a)({uri:"/graphql"}),le=Object(m.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(u.a)(Object(u.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),oe=new h.a({link:le.concat(ie),cache:new p.a});var de=function(){return Object(Y.jsxs)(O.a,{client:oe,children:[Object(Y.jsx)(x.a,{children:Object(Y.jsx)("div",{className:"flex-column justify-flex-start min-100-vh background",children:Object(Y.jsxs)("div",{className:"",children:[Object(Y.jsx)(ae,{}),Object(Y.jsxs)(g.c,{children:[Object(Y.jsx)(g.a,{path:"/",element:Object(Y.jsx)(se,{})}),Object(Y.jsx)(g.a,{path:"/saved",element:Object(Y.jsx)(W,{})}),Object(Y.jsx)(g.a,{path:"/search",element:Object(Y.jsx)(H,{})}),Object(Y.jsx)(g.a,{path:"*",element:Object(Y.jsx)("h1",{className:"display-2",children:"Wrong page!"})})]})]})})}),Object(Y.jsx)(ce,{})]})};j.a.render(Object(Y.jsx)(o.a.StrictMode,{children:Object(Y.jsx)("div",{className:"background",children:Object(Y.jsx)(de,{})})}),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.a088b41a.chunk.js.map