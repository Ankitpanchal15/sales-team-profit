(this["webpackJsonpsales-profit"]=this["webpackJsonpsales-profit"]||[]).push([[0],{24:function(e,s,c){},32:function(e,s,c){"use strict";c.r(s);var t=c(1),a=c(17),i=c.n(a),l=(c(24),c(25),c(0)),r=function(e){var s=e.avatar,c=e.name,t=e.designation,a=e.msg,i=e.online,r=e.typing;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("li",{children:[Object(l.jsxs)("div",{className:"avtar-wrap",children:[Object(l.jsx)("img",{className:"img-fluid rounded-circle",src:s}),Object(l.jsx)("div",{className:"icon-status",style:{color:i?"#1bb934":"#e68a2f"},children:Object(l.jsx)("i",{className:"fas fa-dot-circle"})})]}),Object(l.jsxs)("div",{className:"text-wrap",children:[Object(l.jsx)("h4",{children:c}),Object(l.jsxs)("p",{children:[" ",r?Object(l.jsx)("span",{className:"text-white",children:"Typing..."}):t]})]}),Object(l.jsx)("span",{className:"badge badge-primary rounded-circle",children:a})]})})},n=c(10),j=function(e){var s=Object(t.useState)(null),c=Object(n.a)(s,2),a=c[0],i=c[1],l=Object(t.useState)(null),r=Object(n.a)(l,2),j=r[0],d=r[1];return Object(t.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){i(e)})).catch((function(e){d(e.message)}))}),[e]),{data:a,error:j}},d=function(){var e=j("https://profitsales-f6634-default-rtdb.firebaseio.com/User/Jordan%20Jackson/friends.json"),s=e.data;e.error;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"friends-list-block px-30",children:[Object(l.jsxs)("div",{className:"d-flex align-items-center justify-content-between mb-4",children:[Object(l.jsx)("h3",{className:"display-6 m-0",children:"Friends"}),Object(l.jsx)("button",{className:"btn text-secondary p-0 ",children:Object(l.jsx)("i",{className:"fas fa-cog"})})]}),Object(l.jsx)("ul",{className:"friend-list list-unstyled",children:s&&s.map((function(e){return Object(l.jsx)(r,{avatar:e.avatar,name:e.name,designation:e.designation,typing:e.isTyping,online:e.isonline,msg:e.message},e.id)}))})]})})},b=c(4),h=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"sidebar-menu ",children:[Object(l.jsx)("h4",{className:"px-30 display-6 ",children:"Menu"}),Object(l.jsxs)("ul",{className:"nav flex-column",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(b.b,{exact:!0,className:"nav-link",to:"/",children:"Profit"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(b.b,{className:"nav-link",to:"/explore",children:"Explore"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(b.b,{className:"nav-link",to:"/profile",children:"Profile"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(b.b,{className:"nav-link",to:"/videos",children:"Videos"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(b.b,{className:"nav-link",to:"/invite",children:["Invite ",Object(l.jsx)("span",{className:"badge badge-primary float-right",children:"54"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(b.b,{className:"nav-link",to:"/music",children:"Music"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(b.b,{className:"nav-link",to:"/candidates",children:"Candidates"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(b.b,{className:"nav-link",to:"/calendar",children:"Calendar"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(b.b,{className:"nav-link",to:"/feedback",children:"Feedback"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(b.b,{className:"nav-link",to:"/help",children:"Help"})})]})]})})},x=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"search-bar px-30 text-success mb-5",children:[" ",Object(l.jsxs)("div",{className:"input-grp position-relative",children:[Object(l.jsx)("input",{type:"search",placeholder:"Search"}),Object(l.jsx)("button",{className:"btn button-transparent",children:Object(l.jsx)("i",{className:"fas fa-search"})})]})]})})},m=c.p+"static/media/avatar-1.1d4aa2c0.png",o=c.p+"static/media/avatar-2.3553a6ff.png",O=c.p+"static/media/avatar-3.adaea202.png",u=c.p+"static/media/avatar-4.fa388822.png",p=c.p+"static/media/avatar-5.0a627460.png",v=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"navbar-collapse ",id:"sidebar",children:Object(l.jsxs)("div",{className:"sidebar-left d-flex",children:[Object(l.jsxs)("button",{className:"navbar-toggler d-xl-none  navbar-btn",type:"button","data-toggle":"collapse","data-target":"#sidebar","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(l.jsx)("i",{className:"fas fa-chevron-left"}),Object(l.jsx)("i",{className:"fas fa-chevron-right"})]}),Object(l.jsxs)("div",{className:"d-flex m-0 w-100  ",children:[Object(l.jsxs)("div",{className:"sidebar-column-1",children:[Object(l.jsxs)("div",{className:"user-list",children:[Object(l.jsx)("div",{className:"user-image rounded mb-3",children:Object(l.jsx)("img",{className:"rounded-circle img-fluid",src:m,alt:"user pic"})}),Object(l.jsx)("div",{className:"user-image rounded mb-3 active",children:Object(l.jsx)("img",{className:"rounded-circle img-fluid",src:o,alt:"user pic"})}),Object(l.jsx)("div",{className:"user-image rounded mb-3",children:Object(l.jsx)("img",{className:"rounded-circle img-fluid",src:O,alt:"user pic"})}),Object(l.jsx)("div",{className:"user-image rounded mb-3",children:Object(l.jsx)("img",{className:"rounded-circle img-fluid",src:u,alt:"user pic"})}),Object(l.jsx)("div",{className:"user-image rounded mb-3",children:Object(l.jsx)("img",{className:"rounded-circle img-fluid",src:p,alt:"user pic"})})]}),Object(l.jsxs)("div",{className:"bottom-icon-group",children:[Object(l.jsx)("a",{href:"##",children:Object(l.jsx)("i",{className:"fas fa-th-large"})}),Object(l.jsx)("a",{href:"##",children:Object(l.jsx)("i",{className:"fas fa-cog"})})]})]}),Object(l.jsxs)("div",{className:"sidebar-column-2 pt-30",children:[Object(l.jsx)(h,{}),Object(l.jsx)(x,{}),Object(l.jsx)(d,{})]})]})]})})})},g=c(2),f=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(g.c,{children:[Object(l.jsx)(g.a,{exact:!0,path:"/",children:Object(l.jsx)("h2",{children:"Your Profit"})}),Object(l.jsx)(g.a,{exact:!0,path:"/explore",children:Object(l.jsx)("h2",{children:"Explore"})}),Object(l.jsx)(g.a,{exact:!0,path:"/profile",children:Object(l.jsx)("h2",{children:"Profile"})}),Object(l.jsx)(g.a,{exact:!0,path:"/videos",children:Object(l.jsx)("h2",{children:"videos"})}),Object(l.jsx)(g.a,{exact:!0,path:"/invite",children:Object(l.jsx)("h2",{children:"Invite"})}),Object(l.jsx)(g.a,{exact:!0,path:"/music",children:Object(l.jsx)("h2",{children:"Music"})}),Object(l.jsx)(g.a,{exact:!0,path:"/candidates",children:Object(l.jsx)("h2",{children:"Candidates"})}),Object(l.jsx)(g.a,{exact:!0,path:"/calendar",children:Object(l.jsx)("h2",{children:"Calendar"})}),Object(l.jsx)(g.a,{exact:!0,path:"/feedback",children:Object(l.jsx)("h2",{children:"Feedback"})}),Object(l.jsx)(g.a,{exact:!0,path:"/help",children:Object(l.jsx)("h2",{children:"Help"})})]})})},N=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("header",{className:"header-section bg-white",children:Object(l.jsxs)("div",{className:"row align-items-center",children:[Object(l.jsx)("div",{className:"col-sm-6 d-flex order-2 order-sm-0 mt-2 mt-sm-0 ",children:Object(l.jsx)(f,{})}),Object(l.jsx)("div",{className:"col-sm-6 d-flex justify-content-end order-1 order-sm-0 ",children:Object(l.jsxs)("div",{className:"user-header d-flex align-items-center",children:[Object(l.jsxs)("div",{className:"img-wrap position-relative",children:[Object(l.jsx)("img",{className:"rounded-circle img-fluid ",src:"https://firebasestorage.googleapis.com/v0/b/profitsales-f6634.appspot.com/o/Jordar-jacson.png?alt=media&token=4ca49c6a-56df-4d66-b72c-1cea72d7ec31",alt:"u"}),Object(l.jsx)("div",{className:"icon-status bg-white",children:Object(l.jsx)("i",{className:"fas fa-dot-circle"})})]}),Object(l.jsxs)("div",{className:"user-header-text",children:[Object(l.jsx)("h4",{children:"Jordan j."}),Object(l.jsx)("p",{children:"Administartor"})]}),Object(l.jsx)("i",{className:"icon fas fa-chevron-down"})]})})]})})})},w=function(e){var s=e.value,c=e.title,a=e.percentage,i=e.status,r=Object(t.useState)("increase"===i),j=Object(n.a)(r,2),d=j[0];j[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"card text-center  ".concat(!d&&"decrease","  "),children:[Object(l.jsxs)("div",{className:"card-body px-2",children:[Object(l.jsx)("h3",{children:s}),Object(l.jsx)("h5",{children:c})]}),Object(l.jsx)("div",{className:"card-footer px-2",children:Object(l.jsxs)("p",{children:[" ",Object(l.jsx)("i",{className:"fas fa-play-circle"})," ",a," ",i]})})]})})},y=function(){var e=j("https://profitsales-f6634-default-rtdb.firebaseio.com/User/Jordan%20Jackson/sales.json"),s=e.data;e.error;return Object(l.jsx)(l.Fragment,{children:s&&Object(l.jsx)("div",{className:"cards-box-container pb-4",children:Object(l.jsxs)("div",{className:"row gx-2",children:[Object(l.jsx)("div",{className:"col-sm-6  col-xl-3 mb-4 mb-xl-0  ",children:Object(l.jsx)(w,{title:"New Customer",value:s.new_order.value,percentage:s.new_order.percentage,status:s.new_order.status})}),Object(l.jsx)("div",{className:"col-sm-6  col-xl-3 mb-4 mb-xl-0",children:Object(l.jsx)(w,{title:"Total Sales",value:s.total_sales.value,percentage:s.total_sales.percentage,status:s.total_sales.status})}),Object(l.jsx)("div",{className:"col-sm-6 col-xl-3 mb-4 mb-sm-0",children:Object(l.jsx)(w,{title:"Total Paid Out",value:s.total_paid_out.value,percentage:s.total_paid_out.percentage,status:s.total_paid_out.status})}),Object(l.jsx)("div",{className:"col-sm-6  col-xl-3",children:Object(l.jsx)(w,{title:"New Customers",value:s.new_customer.value,percentage:s.new_customer.percentage,status:s.new_customer.status})})]})})})},k=function(){var e=j("https://profitsales-f6634-default-rtdb.firebaseio.com/User/Jordan%20Jackson.json"),s=e.data;e.error;return Object(l.jsx)(l.Fragment,{children:s&&Object(l.jsxs)("div",{className:"card profile-card p-2 bg-white",children:[Object(l.jsx)("button",{className:"btn rounded edit-button ",children:Object(l.jsx)("i",{className:"fas fa-pen"})}),Object(l.jsx)("div",{className:"cover-img",children:Object(l.jsx)("img",{className:"img-fluid",src:s.cover,alt:"cover"})}),Object(l.jsxs)("div",{className:"px-3",children:[Object(l.jsxs)("div",{className:"user-img-name text-center",children:[Object(l.jsx)("div",{className:"img-wrap",children:Object(l.jsx)("img",{className:"img-fluid",src:s.avatar,alt:"profile"})}),Object(l.jsx)("h3",{children:s.name}),Object(l.jsx)("p",{children:s.designation})]}),Object(l.jsxs)("div",{className:"user-details",children:[Object(l.jsxs)("div",{className:"list-group-item",children:[Object(l.jsx)("h5",{className:"",children:"Email"}),Object(l.jsx)("h3",{children:s.email})]}),Object(l.jsxs)("div",{className:"list-group-item",children:[Object(l.jsx)("h5",{children:"Mobile"}),Object(l.jsx)("h3",{children:s.mobile})]}),Object(l.jsxs)("div",{className:"list-group-item",children:[Object(l.jsx)("h5",{children:"Skil Level"}),Object(l.jsx)("h3",{children:s.skillLevel})]}),Object(l.jsxs)("div",{className:"list-group-item",children:[Object(l.jsx)("h5",{children:"Paid Out Limit"}),Object(l.jsxs)("div",{className:"progress-wrap d-flex",children:[Object(l.jsx)("div",{className:"progress",children:Object(l.jsx)("div",{className:"progress-bar"})}),Object(l.jsxs)("h5",{children:[Object(l.jsx)("span",{children:"$580"}),"/$750 "]})]})]}),Object(l.jsxs)("div",{className:"list-group-item",children:[Object(l.jsx)("h5",{children:"Bio "}),Object(l.jsx)("p",{children:s.bio})]}),Object(l.jsxs)("div",{className:"list-group-item",children:[Object(l.jsx)("h5",{children:"Skill "}),Object(l.jsx)("p",{children:s.skill.map((function(e,s){return Object(l.jsx)("span",{className:"badge ",children:e},s)}))})]})]})]})]})})},F=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"table-wrap w-100 overflow-auto",children:Object(l.jsxs)("table",{className:"w-100 table table-light",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:Object(l.jsx)("span",{children:"Referrer"})}),Object(l.jsx)("th",{children:"View"}),Object(l.jsx)("th",{children:"Sales"}),Object(l.jsx)("th",{children:"Conversion"}),Object(l.jsxs)("th",{children:["Total ",Object(l.jsx)("i",{className:"fa fa-fw fa-sort"})]})]})}),Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"note.com"}),Object(l.jsx)("td",{children:"54"}),Object(l.jsx)("td",{children:"12"}),Object(l.jsx)("td",{children:"10.5%"}),Object(l.jsx)("td",{children:"50%"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Direct, email, IM"}),Object(l.jsx)("td",{children:"96"}),Object(l.jsx)("td",{children:"24"}),Object(l.jsx)("td",{children:"25%"}),Object(l.jsx)("td",{children:"$10"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Recommended"}),Object(l.jsx)("td",{children:"5"}),Object(l.jsx)("td",{children:"5"}),Object(l.jsx)("td",{children:"100%"}),Object(l.jsx)("td",{children:"$10"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Dribbble"}),Object(l.jsx)("td",{children:"1"}),Object(l.jsx)("td",{children:"0"}),Object(l.jsx)("td",{children:"0.0%"}),Object(l.jsx)("td",{children:"$0"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"google.co.uk"}),Object(l.jsx)("td",{children:"5"}),Object(l.jsx)("td",{children:"0"}),Object(l.jsx)("td",{children:"0.0%"}),Object(l.jsx)("td",{children:"$0"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"google.com.tr"}),Object(l.jsx)("td",{children:"0"}),Object(l.jsx)("td",{children:"0"}),Object(l.jsx)("td",{children:"0.0%"}),Object(l.jsx)("td",{children:"$0"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"mail.google.com"}),Object(l.jsx)("td",{children:"1"}),Object(l.jsx)("td",{children:"0"}),Object(l.jsx)("td",{children:"0.0%"}),Object(l.jsx)("td",{children:"$0"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"facebook.com"}),Object(l.jsx)("td",{children:"5"}),Object(l.jsx)("td",{children:"0"}),Object(l.jsx)("td",{children:"0.0%"}),Object(l.jsx)("td",{children:"$0"})]})]})]})})})},J=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"card card profile-card event-card mt-4 p-4",children:[Object(l.jsx)("h5",{className:"mb-3",children:"Upcoming Events with Jordan"}),Object(l.jsxs)("ul",{className:"list-unstyled",children:[Object(l.jsxs)("li",{children:[Object(l.jsxs)("div",{className:"event-text",children:[Object(l.jsx)("h3",{children:"Super Photography 2016"}),Object(l.jsx)("p",{children:"January 13th, Vienna - 6:30 PM"})]}),Object(l.jsx)("div",{className:"badge-wrap",children:Object(l.jsx)("span",{className:"badge badge-primary",children:"Photography"})})]}),Object(l.jsxs)("li",{children:[Object(l.jsxs)("div",{className:"event-text",children:[Object(l.jsx)("h3",{children:"Photox Expo"}),Object(l.jsx)("p",{children:"March 28th, Paris - 7:30 PM"})]}),Object(l.jsx)("div",{className:"badge-wrap",children:Object(l.jsx)("span",{className:"badge badge-info",children:"Design"})})]})]})]})})},_=c(11),P=c.n(_),M=c(19),S=c.n(M),C=function(){var e={chart:{type:"area"},title:{text:"",x:0},legend:{layout:"vertical",align:"left",verticalAlign:"top",x:250,y:250,floating:!0,borderWidth:1,backgroundColor:P.a.defaultOptions.legend.backgroundColor||"#FFFFFF"},xAxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"]},yAxis:{title:{text:""}},tooltip:{shared:!0,valueSuffix:" units"},credits:{enabled:!1},plotOptions:{areaspline:{fillOpacity:.5}},series:[{name:"Earning",data:[0,100,300,80,300,100,200,300]}]};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"mb-4 bg-white p-3 p-md-3 card",children:[Object(l.jsxs)("div",{className:"high-chart-header d-flex mb-4 row",children:[Object(l.jsx)("div",{className:"col-md-6 mb-3 mb-md-0",children:Object(l.jsx)("h4",{className:"mb-0",children:"Earnings History"})}),Object(l.jsx)("div",{className:"col-md-6 d-flex justify-content-end",children:Object(l.jsxs)("ul",{className:"nav nav-pills ",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"##",children:"Weekly"})}),Object(l.jsx)("li",{className:"nav-item ",children:Object(l.jsx)("a",{className:"nav-link active",href:"##",children:"Monthly"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"##",children:"Yearly"})})]})})]}),Object(l.jsx)(S.a,{highcharts:P.a,options:e})]})})},E=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et tristique risus. Phasellus vitae libero dolor. Nulla ultrices vitae elit sed malesuada. Nam posuere ipsum ut est gravida, et lobortis nisi egestas. Nullam fringilla ante id semper lacinia. In eleifend accumsan tristique. Vivamus vehicula, tellus sit amet finibus vulputate, felis ipsum pulvinar turpis, in finibus nisl elit scelerisque augue."})})},$=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"main-wrapper ",children:[Object(l.jsx)(N,{}),Object(l.jsx)("div",{className:"container-fluid pt-30",children:Object(l.jsxs)("div",{className:"row px-xl-3",children:[Object(l.jsx)("div",{className:"col-md-8 col-xl-9",children:Object(l.jsxs)(g.c,{children:[Object(l.jsxs)(g.a,{exact:!0,path:"/",children:[Object(l.jsx)(C,{}),Object(l.jsx)(y,{}),Object(l.jsx)(F,{})]}),Object(l.jsx)(g.a,{path:"/explore",component:E}),Object(l.jsx)(g.a,{exact:!0,path:"/profile",component:E})]})}),Object(l.jsxs)("div",{className:"col-md-4 col-xl-3 mt-3 mt-md-0",children:[Object(l.jsx)(k,{}),Object(l.jsx)(J,{})]})]})})]})})};var A=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsxs)(b.a,{basename:"".concat("/sales-team-profit","/"),children:[Object(l.jsx)(v,{}),Object(l.jsx)($,{})]})})})};i.a.render(Object(l.jsx)(A,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.31bca3e8.chunk.js.map