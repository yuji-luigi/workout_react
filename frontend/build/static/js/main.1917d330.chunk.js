(this.webpackJsonptailwind_workout=this.webpackJsonptailwind_workout||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(24),o=n.n(s),a=(n(31),n(3)),i=(n(32),n(10)),l=n(4),u=n(18),d=n(14),j=n(0),b=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("header",{className:"fixed w-screen top-0",children:Object(j.jsxs)("nav",{className:" bg-green-600  flex items-center justify-between",children:[Object(j.jsx)("div",{className:"",children:Object(j.jsx)("img",{src:"https://source.unsplash.com/random",alt:"",className:"mx-3 my-1 h-10 w-10 rounded-full"})}),Object(j.jsx)("h1",{className:"font-bold\ttext-2xl\t",children:"No Pain No Gain!!"}),Object(j.jsxs)("div",{className:"md:block md:static md:mx-3 relative mr-3",children:[Object(j.jsx)("button",{onClick:function(){return c(!n)},className:"btn md:hidden bg-green-300 hover:bg-green-200",children:Object(j.jsx)(u.a,{icon:n?d.a:d.b})}),Object(j.jsxs)("ul",{className:"sm:border sm:bg md:static absolute right-1 md:block ".concat(n?"block":"hidden"," z-10"),children:[Object(j.jsx)("li",{className:" btn btn-header-nav",children:"Logout"}),Object(j.jsx)("li",{className:" btn btn-header-nav",children:"Your workout"}),Object(j.jsx)("li",{className:" btn btn-header-nav",children:"Account"})]})]})]})})})},h=function(e){var t=e.routine;return Object(j.jsx)("div",{className:"m-3 flex-none w-11/12 text-center px-3 cursor-pointer snap-center",children:Object(j.jsx)(i.b,{to:"/routines".concat(t.link),children:Object(j.jsxs)("div",{className:"w-11/12 m-auto py-4 px-2 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out",children:[Object(j.jsx)("h1",{className:"font-bold pb-3",children:t.type}),Object(j.jsx)("img",{className:"w-72 h-48 w-auto m-auto rounded-lg",src:t.image,alt:""}),Object(j.jsx)("p",{className:"px-3",children:t.description})]})})})},f=function(e){var t=e.weeklyRoutines,n=e.header;return Object(j.jsxs)("div",{className:"bg-green-400 shadow",children:[Object(j.jsx)("div",{className:"h-0 w-full  z-0",children:Object(j.jsx)("img",{className:"mx-auto",src:"/images/forest_bg.jpg",alt:""})}),Object(j.jsxs)("div",{className:"flex text-center w-screen z-20 flex-col h-auto overflow-visible m-auto pt-3",children:[Object(j.jsx)("h4",{className:"pb-1 mb-2 w-3/5 mx-auto border-b-4 border-white font-bold text-xl text-white\t",children:"Weekly Programs"}),Object(j.jsxs)("div",{className:"container bg-gray-100 w-10/12 bg-opacity-30 rounded-lg",children:[Object(j.jsx)("h4",{className:" pb-1 w-3/5 mx-auto  font-bold text-xl text-white\t",children:n}),Object(j.jsx)("div",{className:"flex overflow-x-scroll w-full overflow-visible scroll-snap-x-mandatory  pb-10",children:t.map((function(e,t){return Object(j.jsx)(h,{routine:e},t)}))})]})]})]})};f.defaultProps={header:"Routines of the week!!"};var x=f,m=n(19),p=n(6),O=n.n(p),v=n(11),g=function(e){var t=e.changeLevel,n=function(e){document.querySelectorAll("button").forEach((function(e){e.classList.remove("bg-yellow-400","hover:bg-yellow-300")})),e.target.classList.add("bg-yellow-400","hover:bg-yellow-300")};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Chose your level"}),Object(j.jsx)("button",{className:"btn mx-2 font-bold bg-white hover:bg-gray-100",onClick:function(e){t("begginer"),n(e)},children:"Begginer"}),Object(j.jsx)("button",{className:"btn mx-2 font-bold bg-white hover:bg-gray-100",onClick:function(e){t("intermediate"),n(e)},children:"intermediate"}),Object(j.jsx)("button",{className:"btn mx-2 font-bold bg-white hover:bg-gray-100",onClick:function(e){t("advanced"),n(e)},children:"Expert"})]})},w=function(e){var t=e.workout,n=e.workoutIds,r=e.level;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(i.b,{to:"/workout/".concat(n,"/").concat(r),children:Object(j.jsxs)("div",{title:"Show detail",className:"bg-white flex  m-3 py-3 rounded-lg cursor-pointer",children:[Object(j.jsx)("img",{className:"mx-auto justify-self-center\tself-center h-20 w-20 ml-2",src:t.image,alt:""}),Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("h4",{className:"mb-0 font-bold text-lg",children:t.name}),Object(j.jsx)("p",{className:"my-1 mx-3 ",children:t.description})]})]})})})},y=function(e){var t=e.workouts,n=e.level;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"flex justify-center flex-col ",children:[Object(j.jsx)("h1",{className:"font-bold text-lg mx",children:t.title}),Object(j.jsx)("h4",{children:"Start Workout!!"})]}),t.map((function(e,t){return Object(j.jsx)(w,{level:n,workout:e.workoutByLevel,workoutIds:e.id},t)}))]})},k=function(){return Object(j.jsx)("div",{className:"flex justify-end",children:Object(j.jsx)("button",{onClick:function(){return window.history.back()},className:"btn absolute top-15 right-5 bg-green-200 hover:bg-green-100 ",children:"Back"})})},N=function(e){var t=e.setPlayVideo,n=e.playVideo,c=e.workout,s=e.restClicked,o=e.repsClicked,i=e.currentStatus,l=Object(r.useState)(5),u=Object(a.a)(l,2),d=u[0],b=u[1];Object(r.useEffect)((function(){var e=setInterval((function(){0===d&&clearInterval(e),d>=0&&b(d--)}),1e3);return function(){return clearInterval(e)}}),[]);return Object(j.jsxs)("div",{className:"fixed w-screen top-0 z-20 h-40 bg-yellow-200",children:[Object(j.jsx)("div",{className:"relative",children:Object(j.jsx)("button",{onClick:function(){return t(!n)},className:"absolute left-3 top-44 btn bg-white  ",children:"back"})}),Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("h1",{className:"mx-auto",children:c.name}),Object(j.jsxs)("div",{className:"flex m-0 p-0 border-black border-t-2 border-b-2",children:[Object(j.jsx)("h1",{children:"Sets"}),i&&i.reps.map((function(e,t){return Object(j.jsx)("h1",{className:" m-0 px-4 border-l-2 border-black ",children:"No".concat(t+1,": ").concat(e.count)})}))]}),Object(j.jsxs)("h1",{children:["Rest Time ",c.restTime]}),Object(j.jsx)("button",{className:"btn bg-white mx-1",onClick:function(){return o()},children:"reps"}),Object(j.jsx)("button",{className:"btn bg-white mx-1",onClick:function(){s()},children:"rest!"})]})]})},S=function(e){var t=e.video,n=Object(r.useRef)(),c=Object(r.useState)(0),s=Object(a.a)(c,2);s[0],s[1];return Object(j.jsx)("div",{className:"h-screen-70",onScroll:function(){return console.log("scrooooll")},children:Object(j.jsx)("video",{ref:n,className:"mx-auto h-screen-70",onMouseEnter:function(e){return e.target.play()},onMouseLeave:function(e){return e.target.pause()},children:Object(j.jsx)("source",{className:"",src:t})})})},E=function(e){e.level;var t=e.workout;e.workoutIds;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"routine-videos video-clips flex flex-col pb-10 justify-center h-screen-80 snap-center",children:[Object(j.jsx)("h1",{className:"mt-4 mb-4",children:t.name}),Object(j.jsx)(S,{video:t.video})]})})},L=function(e){var t=e.setPlayVideo,n=e.playVideo,c=e.workouts,s=e.level,o=Object(r.useState)([]),i=Object(a.a)(o,2),l=i[0],u=i[1],d=Object(r.useState)([]),b=Object(a.a)(d,2),h=b[0],f=b[1],x=Object(r.useState)(0),p=Object(a.a)(x,2),O=p[0],v=p[1],g=Object(r.useState)(""),w=Object(a.a)(g,2),y=w[0],k=w[1],S=Object(r.useState)([]),L=Object(a.a)(S,2),C=L[0],B=L[1],F=Object(r.useState)(0),P=Object(a.a)(F,2),T=P[0],_=P[1],I=Object(r.useState)(""),M=Object(a.a)(I,2),R=M[0],V=M[1],z=Object(r.useState)(!0),A=Object(a.a)(z,2),W=A[0],G=A[1],Y=Object(r.useState)(0),q=Object(a.a)(Y,2),H=q[0],J=q[1];Object(r.useEffect)((function(){var e=document.querySelectorAll(".routine-videos");u(e),U(e),B(D())}),[]),Object(r.useEffect)((function(){V(C[O])}),[C]);var U=function(e){f([]),e.forEach((function(e){var t=e.getBoundingClientRect().top;f((function(e){return[].concat(Object(m.a)(e),[t])}))}))},D=function(){for(var e=[],t=0;t<c.length;t++){var n={};n.name=c[t].workoutByLevel.name,n.finished=!1,n.reps=[];for(var r=0;r<c[t].workoutByLevel.sets;r++)n.reps.push({count:0,finished:!1});e.push(n)}return e};Object(r.useEffect)((function(){Q()}),[h]),Object(r.useEffect)((function(){k(c[O].workoutByLevel),V(C[O])}),[O]);var K=function(){var e=R.reps.map((function(e){return e.finished})).indexOf(!1);e<0&&(e=0),_(e)};Object(r.useEffect)((function(){R&&K()}),[R]),Object(r.useEffect)((function(){R&&K()}),[T]),Object(r.useEffect)((function(){if(R){if(K(),T>=R.reps.length)return;R.reps[T].count=H,G(!W)}}),[H]);var Q=function(){var e=h.map((function(e){return e>=50&&e<=800})).indexOf(!0);O!==(e=-1===e?0:e)&&v(e)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(N,{workout:y,indexWorkoutNow:O,setPlayVideo:t,playVideo:n,statusArray:C,currentStatus:R,repsClicked:function(){!1===R.finished&&J(H+1)},restClicked:function(){return function(){J(0);var e=R.reps.map((function(e){return e.finished})).indexOf(!1)+1;if(_(e),!0!==R.finished)return T>=R.reps.length-1?(console.log(T),R.reps[T-1].finished=!0,void(R.finished=!0)):(R.reps[e-1].finished=!0,console.log(R),void V(R))}()}}),Object(j.jsx)("div",{className:"container overflow-y-scroll h-screen-80 scroll-snap-y-mandatory",onScroll:function(){return U(l)},children:c.map((function(e,t){return Object(j.jsx)(E,{level:s,workout:e.workoutByLevel,workoutIds:e.id},t)}))})]})},C=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)("advanced"),o=Object(a.a)(s,2),i=o[0],b=o[1],h=Object(r.useState)(!1),f=Object(a.a)(h,2),x=f[0],p=f[1],w=Object(r.useState)([]),N=Object(a.a)(w,2),S=N[0],E=N[1],C=Object(l.e)().routine_id;Object(r.useEffect)((function(){var e=function(){var e=Object(v.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var B=function(){var e=Object(v.a)(O.a.mark((function e(){var t,n,r,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:4000/routines?routine_id=".concat(C));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,r=Object(a.a)(n,1),c=r[0],e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){if(n){var e=n.workouts.map((function(e){return e.ref}));F(e)}return E([])}),[n,i]);var F=function(){var e=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.forEach(function(){var e=Object(v.a)(O.a.mark((function e(t){var n,r,c,s,o,l;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:4000/workouts/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,c=r.id,s=r.variation_byLevel.filter((function(e){return e.level===i})),o=Object(a.a)(s,1),l=o[0],E((function(e){return[].concat(Object(m.a)(e),[{workoutByLevel:l,id:c}])}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(e){b(e)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(k,{}),Object(j.jsx)(g,{changeLevel:P}),Object(j.jsx)("h1",{className:"uppercase mt-3",children:i})]}),x?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(L,{playVideo:x,setPlayVideo:p,workouts:S,level:i})}):Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(u.a,{onClick:function(){return p(!x)},icon:d.c,className:"mt-3 mx-auto text-4xl cursor-pointer hover:text-white"}),Object(j.jsx)(y,{changeLevel:P,level:i,workouts:S})]})]})},B=function(e){var t=e.category;return Object(j.jsx)("div",{className:" relative w-72 h-52 m-3 flex-none text-center px-3 cursor-pointer snap-center",children:Object(j.jsx)(i.b,{to:"/routines/categories",children:Object(j.jsxs)("div",{className:"w-72 h-52 m-auto rounded-lg shadow-md bg-white bg-opacity-0 hover:shadow-xl transition-shadow duration-300 ease-in-out ",children:[t.image?Object(j.jsx)("video",{className:"w-72 h-52 absolute",onMouseEnter:function(e){return e.target.play()},onMouseLeave:function(e){return e.target.load()},children:Object(j.jsx)("source",{className:"w-72 h-52 absolute",src:"".concat(t.image)})}):Object(j.jsx)("iframe",{onMouseEnter:function(e){return function(e){console.log(e)}(e)},className:"w-72 h-52 absolute",src:"\n              ".concat(t.iframeLink),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(j.jsx)("div",{className:"absolute",children:Object(j.jsx)("h1",{className:"font-bold text-white pb-3",children:t.type})})]})})})},F=function(){return Object(j.jsx)("div",{children:"categories"})},P=function(e){var t=e.video,n=Object(r.useRef)(),c=Object(r.useRef)(t);return Object(r.useEffect)((function(){c!==t&&(n.current&&n.current.load(),c.current=t)})),Object(j.jsx)("video",{ref:n,className:"mx-auto w-2/4 h-2/4",onMouseEnter:function(e){return e.target.play()},onMouseLeave:function(e){return e.target.load()},children:Object(j.jsx)("source",{className:"",src:t})})},T=function(){var e=Object(l.e)(),t=e.workout_id,n=e.levelSelected,c=Object(r.useState)(""),s=Object(a.a)(c,2),o=s[0],i=s[1],u=Object(r.useState)(n),d=Object(a.a)(u,2),b=d[0],h=d[1];Object(r.useEffect)((function(){var e=function(){var e=Object(v.a)(O.a.mark((function e(t){var n,r,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:n=e.sent,r=n.variation_byLevel.filter((function(e){return e.level===b})),c=Object(a.a)(r,1),s=c[0],console.log(s),i(s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(t)}),[b]);var f=function(){var e=Object(v.a)(O.a.mark((function e(t){var n,r,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:4000/workouts?id=".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=Object(a.a)(r,1),s=c[0],e.abrupt("return",s);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"container ",children:[Object(j.jsx)("button",{onClick:function(){return window.history.back()},className:"btn absolute top-15 right-5 bg-green-200 hover:bg-green-100 ",children:"Back"}),Object(j.jsx)(g,{changeLevel:function(e){h(e)}}),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"  flex flex-col justyfy-center",children:[Object(j.jsx)("h1",{className:"mb-3",children:o.name}),Object(j.jsx)("h1",{className:"uppercase",children:o.level}),Object(j.jsx)("p",{children:o.description}),Object(j.jsx)(P,{video:o.video})]})})]})};var _=function(){var e=Object(r.useState)(window.innerWidth),t=Object(a.a)(e,2),n=t[0],c=t[1];console.log(n),Object(r.useEffect)((function(){return window.addEventListener("resize",(function(e){return s(e)})),function(){window.removeEventListener("resize",(function(e){return s(e)}))}}),[]);var s=function(e){c(window.innerWidth)};return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"bg-green-300",children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"mt-10",children:n<780?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(l.a,{path:"/",exact:!0,children:[Object(j.jsx)(x,{weeklyRoutines:[{id:1,title:"Upperbody Strength",type:"upperbody",image:"/images/dumbells.jpg",video:"",description:"Try this routine to tone your upper body. Hit Chest, arms, back and shoulders",link:"/1"},{id:2,type:"pushday",image:"/images/pushup.jpg",description:"Good value for your Push day! Focused on hypertrophy for this week!",link:"/2"},{id:3,type:"pullday",image:"/images/pullup.jpg",description:"Try this pull day routine for your max strength grow!!",link:"/3"}]}),Object(j.jsxs)("div",{className:"flex flex-col text-dark bg-yellow-200 mt-2 p-3 shadow-lg",children:[Object(j.jsxs)("div",{className:"flex content-center justify-between",children:[Object(j.jsx)("h2",{className:"font-bold text-xl mx-3",children:"Search By Categories!"}),Object(j.jsx)("h1",{className:"mr-9 font-bold p-2 rounded-full cursor-pointer ",children:"Show more"})]}),Object(j.jsx)("div",{className:"flex overflow-x-scroll scroll-snap-x-mandatory",children:[{id:1,title:"Upperbody",type:"upperbody",image:"/videos/ringdip1.mp4",description:"Try this routine to tone your upper body. Hit Chest, arms, back and shoulders",link:"/routines/upperbody/1"},{id:2,type:"Push",image:"/videos/ringdip1.mp4",description:"Good value for your Push day! Focused on hypertrophy for this week!",link:"/routines/pushday/1"},{id:3,type:"Pull",image:"/videos/reardeltrows.mp4",description:"Try this pull day routine for your max strength grow!!",link:"/routines/pullday/1"},{id:4,type:"Leg",description:"Try this pull day routine for your max strength grow!!",iframeLink:"https://www.youtube.com/embed/kvLSkIY0ozA"},{id:5,type:"Abs",image:"/images/pullup.jpg",description:"Try this pull day routine for your max strength grow!!",link:"/routines/pullday/1"}].map((function(e,t){return Object(j.jsx)(B,{category:e},t)}))})]})]}),Object(j.jsx)(l.a,{path:"/routines/:routine_id",exact:!0,children:Object(j.jsx)(C,{})}),Object(j.jsx)(l.a,{path:"/workout/:workout_id/:levelSelected",exact:!0,children:Object(j.jsx)(T,{})}),Object(j.jsx)(l.a,{path:"/routines/",exact:!0,children:Object(j.jsx)(F,{})}),")"]}):Object(j.jsxs)("div",{className:"flex flex-col justify-center items-center h-screen",children:[Object(j.jsx)("h1",{children:"Please make the screen smaller..."}),Object(j.jsx)("h1",{children:"This page is optimised for small screens."})]})})]})})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.1917d330.chunk.js.map