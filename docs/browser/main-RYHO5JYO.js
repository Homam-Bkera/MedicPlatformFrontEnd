import{a as G}from"./chunk-PL4GZNMM.js";import{a as B}from"./chunk-IYUU4MXV.js";import{D as _,F as g,H as o,I as n,J as c,K as E,L as I,M as P,N as L,O as j,Q as r,S as N,Y as x,fa as R,ha as S,i as O,m as A,ma as k,n as T,o as w,oa as z,pa as H,q as f,qa as U,sa as F,ta as v,u as m,ua as V,wa as W,xa as D,y as s,ya as p,z as u,za as d}from"./chunk-GP3ZQSRD.js";var q=(()=>{let e=class e{constructor(l,i,a){this.authService=l,this.tokenStorage=i,this.router=a}canActivate(){return!!(this.authService.getRole()=="user"&&this.tokenStorage.getToken())}};e.\u0275fac=function(i){return new(i||e)(m(d),m(p),m(v))},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var J=(()=>{let e=class e{constructor(l,i,a){this.authService=l,this.tokenStorage=i,this.router=a}canActivate(){return!!(this.authService.getRole()=="admin"&&this.tokenStorage.getToken())}};e.\u0275fac=function(i){return new(i||e)(m(d),m(p),m(v))},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var K=(()=>{let e=class e{constructor(l,i,a){this.authService=l,this.tokenStorage=i,this.router=a}canActivate(){return!!(this.authService.getRole()=="superAdmin"&&this.tokenStorage.getToken())}};e.\u0275fac=function(i){return new(i||e)(m(d),m(p),m(v))},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Q=(()=>{let e=class e{constructor(l,i){this.tokenStorage=l,this.auth=i}canActivate(){return this.tokenStorage.getToken()&&(this.auth.islogged=!1),!0}};e.\u0275fac=function(i){return new(i||e)(m(p),m(d))},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var X=[{path:"auth",loadChildren:()=>import("./chunk-H2URKTAU.js").then(t=>t.AUTH_ROUTES),canActivate:[Q]},{path:"user",loadChildren:()=>import("./chunk-QPBFL2J5.js").then(t=>t.USERS_ROUTES),canActivate:[q]},{path:"admin",loadChildren:()=>import("./chunk-ECYMQQJE.js").then(t=>t.ADMIN_ROUTES),canActivate:[J]},{path:"superAdmin",loadChildren:()=>import("./chunk-L63ZNSAE.js").then(t=>t.SUPER_ADMIN_ROUTES),canActivate:[K]},{path:"",redirectTo:"auth",pathMatch:"full"},{path:"**",pathMatch:"full",component:G}];var Y={providers:[W(X),U(),z()]};function et(t,e){if(t&1){let C=E();o(0,"div")(1,"div",22)(2,"div",23)(3,"div",24),I("click",function(){A(C);let i=P();return T(i.isHide=!i.isHide)}),c(4,"span")(5,"span")(6,"span"),n(),o(7,"div",3)(8,"p")(9,"span"),r(10,"Medic"),n(),r(11,"Platform"),n()()(),o(12,"div",25)(13,"ul",26)(14,"li",27)(15,"a"),r(16,"Home"),n()(),o(17,"li",28)(18,"a"),r(19,"Storages"),n()(),o(20,"li",29)(21,"a"),r(22,"About Us"),n()(),o(23,"li",29)(24,"a"),r(25,"Content Us"),n()()()(),o(26,"div",30)(27,"div",31)(28,"span"),r(29,"1"),n(),c(30,"i",32),n(),o(31,"div",33)(32,"span"),r(33,"1"),n(),c(34,"i",34),n()()()()}if(t&2){let C=P();s(14),L("routerLink",C.role)}}function nt(t,e){if(t&1&&(o(0,"li",35),c(1,"i",36),r(2),n()),t&2){let C=P();s(2),N("Wallet ",C.userWallet," ")}}function it(t,e){t&1&&(o(0,"li",37),c(1,"i",38),r(2,"All Medicine "),n())}function ot(t,e){t&1&&(o(0,"li",39),c(1,"i",40),r(2,"All Order "),n())}function rt(t,e){t&1&&(o(0,"li",41),c(1,"i",32),r(2," Cart "),n())}function at(t,e){t&1&&(o(0,"li",42),c(1,"i",34),r(2," Notification "),n())}function ct(t,e){t&1&&(o(0,"li",43),c(1,"i",44),r(2,"Search "),n())}function lt(t,e){t&1&&(o(0,"li",45),c(1,"img",46),r(2," Add Medicine "),n())}function st(t,e){t&1&&(o(0,"li",47),w(),o(1,"svg",48),c(2,"path",49),n(),r(3," Storage "),n())}function gt(t,e){t&1&&(o(0,"li",50),c(1,"i",51),r(2,"CreateAdmins "),n())}function mt(t,e){t&1&&(o(0,"li",52),c(1,"i",51),r(2," CreateStorage "),n())}function pt(t,e){t&1&&(o(0,"li",53),c(1,"i",54),r(2," All Storages "),n())}var Z=(()=>{let e=class e{constructor(l,i,a){this.AuthService=l,this.tokenStorage=i,this.wallet=a,this.isHide=!0,this.userWallet="",this.AuthService.isLogged(),this.getWallet(),this.AuthService.getRole()&&(this.role=this.AuthService.getRole())}togleNavicationSlide(){return this.isHide?"disappeared-slide-navication":"appearance-slide-navication"}getWallet(){}};e.\u0275fac=function(i){return new(i||e)(u(d),u(p),u(B))},e.\u0275cmp=O({type:e,selectors:[["app-navbar"]],standalone:!0,features:[x],decls:34,vars:14,consts:[[4,"ngIf"],[1,"navigation-slide",3,"ngClass"],[1,"content-slide"],[1,"logo"],["class","ChargeWallet",4,"ngIf"],["routerLink","user/allMedicine",4,"ngIf"],["routerLink","user/allOrders",4,"ngIf"],["routerLink","user/cart",4,"ngIf"],["routerLink","user/notification",4,"ngIf"],["routerLink","user/search",4,"ngIf"],["routerLink","admin/add-medicine",4,"ngIf"],["routerLink","admin/storage",4,"ngIf"],["routerLink","superAdmin/createAdmins",4,"ngIf"],["routerLink","superAdmin/createStorage",4,"ngIf"],["routerLink","superAdmin/allStorage",4,"ngIf"],[1,"line"],[1,"fa","fa-language"],[1,"fa","fa-cog"],[3,"routerLink"],[1,"fa","fa-user-circle"],["routerLink","auth",3,"click"],[1,"fa","fa-sign-out"],[1,"content-navigation"],[1,"start"],[1,"togle-slide-navigation",3,"click"],[1,"center"],[1,"navigation"],[1,"nav",3,"routerLink"],["routerLink","user/storages",1,"nav"],["routerLink","routePath",1,"nav"],[1,"end"],["routerLink","user/cart",1,"cart"],[1,"fa","fa-shopping-cart"],["routerLink","user/notification",1,"notification"],[1,"fa","fa-bell"],[1,"ChargeWallet"],[1,"fa","fa-money"],["routerLink","user/allMedicine"],[1,"fa","fa-list-alt"],["routerLink","user/allOrders"],[1,"fa","fa-list-ol"],["routerLink","user/cart"],["routerLink","user/notification"],["routerLink","user/search"],[1,"fa","fa-search"],["routerLink","admin/add-medicine"],["src","../../../../assets/medicine.icon..png"],["routerLink","admin/storage"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 576 512",1,"fontawesomesvg"],["d","M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z"],["routerLink","superAdmin/createAdmins"],[1,"fa","fa-user-plus"],["routerLink","superAdmin/createStorage"],["routerLink","superAdmin/allStorage"],[1,"fa-store"]],template:function(i,a){i&1&&(_(0,et,35,1,"div",0),o(1,"div",1)(2,"div",2)(3,"ul")(4,"div",3)(5,"p")(6,"span"),r(7,"Medic"),n(),r(8,"Platform"),n()(),_(9,nt,3,1,"li",4)(10,it,3,0,"li",5)(11,ot,3,0,"li",6)(12,rt,3,0,"li",7)(13,at,3,0,"li",8)(14,ct,3,0,"li",9)(15,lt,3,0,"li",10)(16,st,4,0,"li",11)(17,gt,3,0,"li",12)(18,mt,3,0,"li",13)(19,pt,3,0,"li",14),c(20,"li",15),o(21,"li"),c(22,"i",16),r(23," Change Language"),n(),o(24,"li"),c(25,"i",17),r(26,"Setting"),n(),c(27,"li",15),o(28,"li",18),c(29,"i",19),r(30,"Pofile "),n(),o(31,"li",20),I("click",function(){return a.AuthService.logout()}),c(32,"i",21),r(33,"Sign out"),n()()()()),i&2&&(g("ngIf",a.AuthService.islogged),s(),g("ngClass",a.togleNavicationSlide()),s(8),g("ngIf",a.role=="user"),s(),g("ngIf",a.role=="user"),s(),g("ngIf",a.role=="user"),s(),g("ngIf",a.role=="user"),s(),g("ngIf",a.role=="user"),s(),g("ngIf",a.role=="user"),s(),g("ngIf",a.role=="admin"),s(),g("ngIf",a.role=="admin"),s(),g("ngIf",a.role=="superAdmin"),s(),g("ngIf",a.role=="superAdmin"),s(),g("ngIf",a.role=="superAdmin"),s(9),j("routerLink","",a.role,"/profile"))},dependencies:[k,R,S,D,V],styles:[".content-navigation[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;background-color:#fff;box-shadow:0 8px 10px 2px #0000001c;width:100%;height:62px;max-height:62px;min-height:62px;padding:0px 2.9rem;z-index:100}.content-navigation[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.content-navigation[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%]   .togle-slide-navigation[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 15px;cursor:pointer}.content-navigation[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%]   .togle-slide-navigation[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:25px;height:3px;margin:2px 0;background-color:#000}.content-navigation[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{list-style:none;display:flex;flex-direction:row;font-size:1.2rem}.content-navigation[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{padding:20px;font-weight:800;transition:.3s}.content-navigation[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]:hover{background-color:var(--main-color);color:#fff}.content-navigation[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{display:flex;flex-direction:row}.content-navigation[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:relative;padding:0 15px;transition:.3s ease-in-out}.content-navigation[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.content-navigation[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2.1rem}.content-navigation[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;display:flex;right:5px;top:0;justify-content:center;align-items:center;border-radius:50%;width:20px;height:20px;background-color:var(--font-color);font-size:1rem;color:#fff}.content-navigation[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:relative;padding:0 15px;transition:.3s ease-in-out}.content-navigation[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.content-navigation[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.7rem}.content-navigation[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;display:flex;right:5px;top:0;justify-content:center;align-items:center;border-radius:50%;width:20px;height:20px;background-color:var(--font-color);font-size:1rem;color:#fff}.navigation-slide[_ngcontent-%COMP%]{position:fixed;top:62px;height:100%;transition:.3s ease-in-out;z-index:100}.navigation-slide[_ngcontent-%COMP%]   .content-slide[_ngcontent-%COMP%]{display:flex;min-height:100%;width:100%;flex-direction:column;box-shadow:3px 4px 4px #0000002d;background-color:#fff}.navigation-slide[_ngcontent-%COMP%]   .content-slide[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}.navigation-slide[_ngcontent-%COMP%]   .content-slide[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-weight:700;font-size:1.2rem;margin:15px 0;display:flex;justify-content:center;align-items:center}.navigation-slide[_ngcontent-%COMP%]   .content-slide[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--font-color);font-size:1.8rem;font-weight:bolder;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.navigation-slide[_ngcontent-%COMP%]   .content-slide[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-weight:600;font-size:1.2rem;color:#000;padding:20px 50px 20px 10px;transition:.3s;cursor:pointer}.navigation-slide[_ngcontent-%COMP%]   .content-slide[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#e4e4e4;color:#000}.navigation-slide[_ngcontent-%COMP%]   .content-slide[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.2rem;padding:0 15px;transition:.3s}.navigation-slide[_ngcontent-%COMP%]   .content-slide[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:16px;margin:0 15px;transition:.3s}.navigation-slide[_ngcontent-%COMP%]   .content-slide[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:18px;transition:.3s;margin:0 15px}.navigation-slide[_ngcontent-%COMP%]   .content-slide[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .navigation-slide[_ngcontent-%COMP%]   .content-slide[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .navigation-slide[_ngcontent-%COMP%]   .content-slide[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.3)}.navigation-slide[_ngcontent-%COMP%]   .content-slide[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:100%;height:1px;padding:0;background-color:#00000034}.disappeared-slide-navication[_ngcontent-%COMP%]{left:-400px}.appearance-slide-navication[_ngcontent-%COMP%]{left:0}@media (max-width: 768px){.content-navigation[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%], .content-navigation[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{display:none}}"]});let t=e;return t})();function dt(t,e){t&1&&c(0,"app-navbar")}var $=(()=>{let e=class e{constructor(l){this.TokenStorage=l}};e.\u0275fac=function(i){return new(i||e)(u(p))},e.\u0275cmp=O({type:e,selectors:[["app-root"]],standalone:!0,features:[x],decls:3,vars:1,consts:[[4,"ngIf"],[1,"container"]],template:function(i,a){i&1&&(_(0,dt,1,0,"app-navbar",0),o(1,"div",1),c(2,"router-outlet"),n()),i&2&&g("ngIf",a.TokenStorage.getToken())},dependencies:[F,Z,k,S]});let t=e;return t})();H($,Y).catch(t=>console.error(t));