(this["webpackJsonpairbnb-clone"]=this["webpackJsonpairbnb-clone"]||[]).push([[0],{107:function(e,t,i){},124:function(e,t,i){},125:function(e,t,i){},126:function(e,t,i){},127:function(e,t,i){},128:function(e,t,i){},129:function(e,t,i){},130:function(e,t,i){},131:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i.n(n),c=i(30),a=i.n(c),r=(i(95),i(96),i(79)),o=i.n(r),d=i(84),h=i.n(d),l=i(83),b=i.n(l),j=i(149),m=i(55),p=i(1),u=function(){return Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)(m.b,{to:"/",children:Object(p.jsx)("img",{className:"header__icon",src:"https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png",alt:"https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"})}),Object(p.jsxs)("div",{className:"header__center",children:[Object(p.jsx)("input",{type:"text"}),Object(p.jsx)(o.a,{})]}),Object(p.jsxs)("div",{className:"header__right",children:[Object(p.jsx)("p",{children:"Become a Host"}),Object(p.jsx)(b.a,{}),Object(p.jsx)(h.a,{}),Object(p.jsx)(j.a,{})]})]})},g=i(25),x=i(148),f=(i(107),i(108),i(109),i(85)),O=i(86),_=i.n(O),v=i(8),w=function(){var e=Object(v.f)(),t=Object(n.useState)(new Date),i=Object(g.a)(t,2),s=i[0],c=i[1],a=Object(n.useState)(new Date),r=Object(g.a)(a,2),o=r[0],d=r[1],h={startDate:s,endDate:o,key:"selection"};return Object(p.jsxs)("div",{className:"search",children:[Object(p.jsx)(f.DateRangePicker,{ranges:[h],onChange:function(e){c(e.selection.startDate),d(e.selection.endDate)}}),Object(p.jsxs)("h2",{children:["Number of guests ",Object(p.jsx)(_.a,{})]}),Object(p.jsx)("input",{type:"number",min:0,defaultValue:2}),Object(p.jsx)(x.a,{onClick:function(){return e.push("./search")},children:"Search Airbnb"})]})},y=(i(124),function(){var e=Object(v.f)(),t=Object(n.useState)(!1),i=Object(g.a)(t,2),s=i[0],c=i[1];return Object(p.jsxs)("div",{className:"banner",children:[Object(p.jsxs)("div",{className:"banner__search",children:[s&&Object(p.jsx)(w,{}),Object(p.jsx)(x.a,{onClick:function(){c(!s)},className:"banner__search-button",varient:"outlined",children:s?"Hide":"Search Dates"})]}),Object(p.jsxs)("div",{className:"banner__info",children:[Object(p.jsx)("h1",{children:"Get out and stretch your imagination"}),Object(p.jsx)("h5",{children:"Plan a difference kind of getaway to uncover the hidden gems near you."}),Object(p.jsx)(x.a,{onClick:function(){return e.push("./search")},varient:"outlined",children:"Explore Nearby"})]})]})}),N=(i(125),function(e){var t=e.src,i=e.title,n=e.description,s=e.price;return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{src:t,alt:""}),Object(p.jsxs)("div",{className:"card__info",children:[Object(p.jsx)("h2",{children:i}),Object(p.jsx)("h4",{children:n}),Object(p.jsx)("h3",{children:s})]})]})}),P=(i(126),function(){return Object(p.jsxs)("div",{className:"home",children:[Object(p.jsx)(y,{}),Object(p.jsxs)("div",{className:"home__section",children:[Object(p.jsx)(N,{src:"https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",title:"Online Experiences",description:"Unique activities we can do together, led by a world of hosts."}),Object(p.jsx)(N,{src:"https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720",title:"Unique stays",description:"Spaces that are more than just a place to sleep."}),Object(p.jsx)(N,{src:"https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",title:"Entire homes",description:"Comfortable private places, with room for friends or family."})]}),Object(p.jsxs)("div",{className:"home__section",children:[Object(p.jsx)(N,{src:"https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg",title:"3 Bedroom Flat in Bournemouth",description:"Superhost with a stunning view of the beachside in Sunny Bournemouth",price:"\xa3130/night"}),Object(p.jsx)(N,{src:"https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg",title:"Penthouse in London",description:"Enjoy the amazing sights of London with this stunning penthouse",price:"\xa3350/night"}),Object(p.jsx)(N,{src:"https://media.nomadicmatt.com/2018/apartment.jpg",title:"1 Bedroom apartment",description:"Superhost with great amenities and a fabolous shopping complex nearby",price:"\xa370/night"})]})]})}),F=(i(127),function(){return Object(p.jsxs)("div",{className:"footer",children:[Object(p.jsx)("p",{children:"\xa9 2020 Airbnb clone! No rights reserved - this is a demo!"}),Object(p.jsx)("p",{children:"Privacy \xb7 Terms \xb7 Sitemap \xb7 Company Details"})]})}),S=(i(128),i(129),i(87)),k=i.n(S),L=i(88),C=i.n(L),A=function(e){var t=e.data;return Object(p.jsxs)("div",{className:"searchResults",children:[Object(p.jsx)("img",{src:t.img,alt:t.img}),Object(p.jsx)(k.a,{className:"searchResults__heart"}),Object(p.jsxs)("div",{className:"searchResults__info",children:[Object(p.jsxs)("div",{className:"searchResults__info-top",children:[Object(p.jsx)("p",{children:t.location}),Object(p.jsx)("h3",{children:t.title}),Object(p.jsx)("p",{children:"____"}),Object(p.jsx)("p",{children:t.description})]}),Object(p.jsxs)("div",{className:"searchResults__info-bottom",children:[Object(p.jsxs)("div",{className:"searchResults__info-bottom-stars",children:[Object(p.jsx)(C.a,{className:"searchResults__info-bottom-stars-star"}),Object(p.jsx)("p",{children:Object(p.jsx)("strong",{children:t.star})})]}),Object(p.jsxs)("div",{className:"searchResults__info-bottom-price",children:[Object(p.jsx)("h2",{children:t.price}),Object(p.jsx)("p",{children:t.total})]})]})]})]})},D=[{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",location:"Private room in center of London",title:"Stay at this spacious Edwardian House",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:"4.73",price:"\xa330 / night",total:"\xa3117 total"},{img:"https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg",location:"Private room in center of London",title:"Independant luxury studio apartment",description:"2 guest \xb7 3 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen",star:"4.3",price:"\xa340 / night",total:"\xa3157 total"},{img:"https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg",location:"Private room in center of London",title:"London Studio Apartments",description:"4 guest \xb7 4 bedroom \xb7 4 bed \xb7 2 bathrooms \xb7 Free parking \xb7 Washing Machine",star:"3.8",price:"\xa335 / night",total:"\xa3207 total"},{img:"https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI",location:"Private room in center of London",title:"30 mins to Oxford Street, Excel London",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:"4.1",price:"\xa355 / night",total:"\xa3320 total"},{img:"https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg",location:"Private room in center of London",title:"Spacious Peaceful Modern Bedroom",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Free parking \xb7 Dry Cleaning",star:"5.0",price:"\xa360 / night",total:"\xa3450 total"},{img:"https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937",location:"Private room in center of London",title:"The Blue Room In London",description:"2 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Washing Machine",star:"4.23",price:"\xa365 / night",total:"\xa3480 total"},{img:"https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp",location:"Private room in center of London",title:"5 Star Luxury Apartment",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:"3.85",price:"\xa390 / night",total:"\xa3650 total"}],R=function(){var e=D.map((function(e){return Object(p.jsx)(A,{data:e})}));return Object(p.jsxs)("div",{className:"searchPage",children:[Object(p.jsxs)("div",{className:"searchPage__info",children:[Object(p.jsx)("p",{children:"62 stays \xb7 26 august to 30 august \xb7 2 guest"}),Object(p.jsx)("h1",{children:"Stays nearby"}),Object(p.jsx)(x.a,{variant:"outlined",children:"Cancellation Flexibility"}),Object(p.jsx)(x.a,{variant:"outlined",children:"Type of Place"}),Object(p.jsx)(x.a,{variant:"outlined",children:"Price"}),Object(p.jsx)(x.a,{variant:"outlined",children:"Rooms and beds"}),Object(p.jsx)(x.a,{variant:"outlined",children:"More filters"})]}),e]})},W=(i(130),function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(m.a,{children:[Object(p.jsx)(u,{}),Object(p.jsxs)(v.c,{children:[Object(p.jsx)(v.a,{path:"/search",children:Object(p.jsx)(R,{})}),Object(p.jsx)(v.a,{path:"/",children:Object(p.jsx)(P,{})})]}),Object(p.jsx)(F,{})]})})}),B=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,150)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;i(e),n(e),s(e),c(e),a(e)}))};a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(W,{})}),document.getElementById("root")),B()},95:function(e,t,i){},96:function(e,t,i){}},[[131,1,2]]]);
//# sourceMappingURL=main.bfcbca00.chunk.js.map