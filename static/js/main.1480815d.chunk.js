(this["webpackJsonpreact_redux-list-of-posts"]=this["webpackJsonpreact_redux-list-of-posts"]||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var c,r=n(8),s=n.n(r),a=n(5),o=n(14),u=n(3),i=n(2),l=n.n(i),p=n(0),b=(n(23),n(24),"https://mate.academy/students-api"),j=function(){var t=Object(u.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b,"/posts"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(u.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b,"/posts?userId=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(u.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b,"/posts/").concat(e));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(u.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b,"/posts/").concat(e),{method:"DELETE"});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=n(7);!function(t){t.SET_POSTS="SET_POSTS",t.SET_USERS="SET_USERS",t.SET_POST_ID="SET_POST_ID",t.SET_POST="SET_POST",t.SET_POST_COMMENTS="SET_POST_COMMENTS"}(c||(c={}));var O=Object(h.b)(c.SET_POSTS),x=Object(h.b)(c.SET_USERS),v=Object(h.b)(c.SET_POST_ID),_=Object(h.b)(c.SET_POST),S=Object(h.b)(c.SET_POST_COMMENTS),w=Object(h.c)({posts:[],users:[],selectedPostId:0,selectedPost:null,postComments:[]},(function(t){t.addCase(O,(function(t,e){t.posts=e.payload})).addCase(x,(function(t,e){t.users=e.payload})).addCase(v,(function(t,e){t.selectedPostId=e.payload})).addCase(_,(function(t,e){t.selectedPost=e.payload})).addCase(S,(function(t,e){t.postComments=e.payload}))})),N=Object(h.a)({reducer:w}),y=function(t){return t.posts},P=function(t){return t.users},T=function(t){return t.selectedPostId},E=function(t){return t.selectedPost},k=function(t){return t.postComments},C=(n(25),n(1)),g=function(t){var e=t.posts,n=t.onRequestPosts,c=Object(a.b)(),r=Object(a.c)(T),s=function(t){c(v(t))};return Object(C.jsxs)("div",{className:"PostsList",children:[Object(C.jsx)("h2",{children:"Posts:"}),Object(C.jsx)("ul",{className:"PostsList__list",children:e.map((function(t){return Object(C.jsxs)("li",{className:"PostsList__item",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("b",{children:"[User #".concat(t.userId,"]:")}),t.title]}),Object(C.jsxs)("div",{children:[t.id!==r?Object(C.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){s(t.id)},children:"Open"}):Object(C.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){s(0)},style:{backgroundColor:"red"},children:"Close"}),Object(C.jsx)("button",{type:"button",className:"button-close",onClick:Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t.id);case 2:n();case 3:case"end":return e.stop()}}),e)}))),children:"Delete"})]})]},t.id)}))})]})},D=n(6),I=n(13),A=n.n(I),q=function(){var t=Object(u.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b,"/comments?postId=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),L=function(){var t=Object(u.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b,"/comments/").concat(e),{method:"DELETE"});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),R=function(){var t=Object(u.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b,"/comments"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=(n(27),function(t){var e=t.post,n=t.onRequest,c=Object(p.useState)(""),r=Object(D.a)(c,2),s=r[0],a=r[1],o=Object(p.useState)(""),i=Object(D.a)(o,2),b=i[0],j=i[1],d=Object(p.useState)(""),f=Object(D.a)(d,2),m=f[0],h=f[1],O=function(){var t=Object(u.a)(l.a.mark((function t(c){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),r={postId:e.id,name:s,email:b,body:m},t.next=4,R(r);case 4:n(),a(""),j(""),h("");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(C.jsxs)("form",{className:"NewCommentForm",onSubmit:O,children:[Object(C.jsx)("div",{className:"form-field",children:Object(C.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:s,onChange:function(t){a(t.target.value)},required:!0})}),Object(C.jsx)("div",{className:"form-field",children:Object(C.jsx)("input",{type:"email",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:b,onChange:function(t){j(t.target.value)},required:!0})}),Object(C.jsx)("div",{className:"form-field",children:Object(C.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:m,onChange:function(t){h(t.target.value)},required:!0})}),Object(C.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),M=(n(28),function(){var t=Object(a.b)(),e=Object(a.c)(T),n=Object(a.c)(E),c=Object(a.c)(k),r=Object(p.useState)(!0),s=Object(D.a)(r,2),o=s[0],i=s[1],b=function(){var n=Object(u.a)(l.a.mark((function n(){var c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f(e);case 3:c=n.sent,t(_(c)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Error");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),j=function(){var n=Object(u.a)(l.a.mark((function n(){var c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,q(e);case 3:c=n.sent,t(S(c)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Error");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return Object(p.useEffect)((function(){b(),j()}),[e]),Object(C.jsxs)("div",{className:"PostDetails",children:[Object(C.jsx)("h2",{children:"Post details:"}),Object(C.jsx)("section",{className:"PostDetails__post",children:Object(C.jsx)("p",{children:null===n||void 0===n?void 0:n.title})}),Object(C.jsxs)("section",{className:"PostDetails__comments",children:[0===c.length&&"No comments",Object(C.jsx)("div",{className:A()({hidden:0===c.length}),children:o?Object(C.jsx)("button",{type:"button",className:"button",onClick:function(){i(!1)},children:"Hide ".concat(c.length," comments")}):Object(C.jsx)("button",{className:"button",type:"button",onClick:function(){i(!0)},children:"Show ".concat(c.length," comments")})}),o&&Object(C.jsx)("ul",{className:"PostDetails__list",children:c.map((function(t){return Object(C.jsxs)("li",{className:"PostDetails__list-item",children:[Object(C.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t.id);case 2:return e.next=4,j();case 4:case"end":return e.stop()}}),e)}))),children:"X"}),Object(C.jsx)("p",{children:t.body})]},t.id)}))})]}),Object(C.jsx)("section",{children:Object(C.jsx)("div",{className:"PostDetails__form-wrapper",children:n&&Object(C.jsx)(F,{post:n,onRequest:j})})})]})}),U=function(){var t=Object(u.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b,"/users"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),J=function(){var t=Object(a.b)(),e=Object(a.c)(y),n=Object(a.c)(P),c=Object(a.c)(T),r=function(){var e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j();case 3:n=e.sent,t(O(n)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:n=e.sent,t(x(n.slice(0,9))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(p.useEffect)((function(){s(),r()}),[]);var o=function(){var e=Object(u.a)(l.a.mark((function e(n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(+n.target.value);case 2:c=e.sent,t(O(c)),0===+n.target.value&&r();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)("header",{className:"App__header",children:Object(C.jsxs)("label",{children:["Select a user: \xa0",Object(C.jsxs)("select",{className:"App__user-selector",onChange:o,children:[Object(C.jsx)("option",{value:"0",children:"All users"}),n.map((function(t){return Object(C.jsx)("option",{value:t.id,children:t.name},t.id)}))]})]})}),Object(C.jsxs)("main",{className:"App__main",children:[Object(C.jsx)("div",{className:"App__sidebar",children:Object(C.jsx)(g,{posts:e,onRequestPosts:r})}),Object(C.jsx)("div",{className:"App__content",children:0!==c&&Object(C.jsx)(M,{})})]})]})},Y=function(){return Object(C.jsx)(a.a,{store:N,children:Object(C.jsx)(o.a,{children:Object(C.jsx)(J,{})})})};s.a.render(Object(C.jsx)(Y,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.1480815d.chunk.js.map