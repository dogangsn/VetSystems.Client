"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[2789],{2789:(Y,x,o)=>{o.r(x),o.d(x,{BuyingModule:()=>p});var T=o(9299),l=o(4006),a=o(671),u=o(487),m=o(9079),v=o(5263),B=o(8247),Q=o(377),t=o(4650),A=o(5412),F=o(5707),J=o(182),f=o(4859),d=o(7392),b=o(8739),N=o(6895);const L=["paginator"];function k(e,n){1&e&&(t.TgZ(0,"th",32),t._uU(1," Tarih "),t.qZA())}function j(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const i=n.$implicit,s=t.oxw();t.xp6(1),t.hij(" ",s.formatDate(i.date)," ")}}function P(e,n){1&e&&(t.TgZ(0,"th",32),t._uU(1," Fatura No "),t.qZA())}function $(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.hij(" ",i.invoiceNo," ")}}function z(e,n){1&e&&(t.TgZ(0,"th",32),t._uU(1,"Tedarik\xe7i"),t.qZA())}function H(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.hij(" ",i.supplierName," ")}}function I(e,n){1&e&&(t.TgZ(0,"th",32),t._uU(1," \xd6deme Y\xf6ntemi "),t.qZA())}function K(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.hij(" ",i.paymentName," ")}}function M(e,n){1&e&&(t.TgZ(0,"th",32),t._uU(1,"Net Tutar"),t.qZA())}function R(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,i.netPrice,"1.2-2")," ")}}function G(e,n){1&e&&(t.TgZ(0,"th",32),t._uU(1,"KDV"),t.qZA())}function O(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,i.kdv,"1.2-2")," ")}}function X(e,n){1&e&&(t.TgZ(0,"th",32),t._uU(1,"\u0130ndirim"),t.qZA())}function E(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,i.discount,"1.2-2")," ")}}function W(e,n){1&e&&(t.TgZ(0,"th",32),t._uU(1,"Tutar"),t.qZA())}function V(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,i.total,"1.2-2")," ")}}function q(e,n){1&e&&t._UZ(0,"tr",34)}function tt(e,n){1&e&&t._UZ(0,"tr",35)}function et(e,n){1&e&&(t.TgZ(0,"th",32),t._uU(1," \u0130\u015flemler "),t.qZA())}function nt(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"td",33)(1,"button",36),t.NdJ("click",function(){const c=t.CHM(i).$implicit,r=t.oxw();return t.KtG(r.redirectToUpdate(c.id))}),t.TgZ(2,"mat-icon",37),t._uU(3,"edit"),t.qZA()(),t.TgZ(4,"button",38),t.NdJ("click",function(){const c=t.CHM(i).$implicit,r=t.oxw();return t.KtG(r.redirectToDelete(c.id))}),t.TgZ(5,"mat-icon",39),t._uU(6,"delete"),t.qZA()(),t.TgZ(7,"button",36),t.NdJ("click",function(){const c=t.CHM(i).$implicit,r=t.oxw();return t.KtG(r.redirectToPrint(c.id))}),t.TgZ(8,"mat-icon",40),t._uU(9,"print"),t.qZA()()()}}const it=function(){return[5,10,20]};class g{constructor(n,i,s){this._dialog=n,this._translocoService=i,this._salebuyservice=s,this.displayedColumns=["date","invoiceNo","supplierName","payment","netPrice","kdv","discount","total","actions"],this.salebuyList=[],this.dataSource=new a.by(this.salebuyList),this.redirectToUpdate=y=>{this.isUpdateButtonActive=!0},this.redirectToDelete=y=>{const c=new u.c(this.translate("sweetalert.areYouSure"),this.translate("sweetalert.areYouSureDelete"),m.p.warning);v.m.sweetAlertOfQuestion(c).then(r=>{r.isConfirmed&&this._salebuyservice.deletedSaleBuy({id:y}).subscribe(dt=>{if(dt.isSuccessful){this.getSaleBuy();const pt=new u.c(this.translate("sweetalert.success"),this.translate("sweetalert.transactionSuccessful"),m.p.success);v.m.sweetAlert(pt)}else console.error("Silme i\u015flemi ba\u015far\u0131s\u0131z.")})})}}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this.getSaleBuy()}getSaleBuy(){this._salebuyservice.getBuySaleList({type:2}).subscribe(i=>{this.salebuyList=i.data,console.log(this.salebuyList),this.dataSource=new a.by(this.salebuyList),this.dataSource.paginator=this.paginator,console.log(this.salebuyList)})}createsales(){this._dialog.open(B.A,{maxWidth:"100vw !important",disableClose:!0,data:{selectedsalebuy:null,visibleCustomer:!1,salebuyType:2,isSupplier:!0}}).afterClosed().subscribe(s=>{s.status&&this.getSaleBuy()})}createSupplierSales(){this._dialog.open(B.A,{maxWidth:"100vw !important",disableClose:!0,data:{selectedsalebuy:null,visibleCustomer:!1,salebuyType:2,isSupplier:!0}}).afterClosed().subscribe(s=>{s.status&&this.getSaleBuy()})}createBuyingOrder(){this._dialog.open(Q.Z,{maxWidth:"100vw !important",disableClose:!0,data:{selectedsalebuy:null,visibleCustomer:!1,salebuyType:2,isSupplier:!0}}).afterClosed().subscribe(s=>{s.status&&this.getSaleBuy()})}showSweetAlert(n){if("success"===n){const i=new u.c(this.translate("sweetalert.success"),this.translate("sweetalert.transactionSuccessful"),m.p.success);v.m.sweetAlert(i)}else{const i=new u.c(this.translate("sweetalert.error"),this.translate("sweetalert.transactionFailed"),m.p.error);v.m.sweetAlert(i)}}translate(n){return this._translocoService.translate(n)}formatDate(n){return new Date(n).toLocaleString("tr-TR",{year:"numeric",month:"2-digit",day:"2-digit"})}}g.\u0275fac=function(n){return new(n||g)(t.Y36(A.uw),t.Y36(F.Vn),t.Y36(J.I))},g.\u0275cmp=t.Xpm({type:g,selectors:[["buying"]],viewQuery:function(n,i){if(1&n&&t.Gf(L,5),2&n){let s;t.iGM(s=t.CRH())&&(i.paginator=s.first)}},decls:55,vars:10,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","pb-22","sm:pt-12","sm:pb-28","sm:px-10","bg-default","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"font-medium","tracking-tight","text-secondary"],[1,"flex","shrink-0","items-center","mt-6","sm:mt-0","sm:ml-4"],["mat-flat-button","",1,"ml-3",3,"click"],[1,"icon-size-5","mr-2",3,"svgIcon"],["mat-flat-button","",1,"ml-3",3,"color","click"],[1,"flex-auto","-mt-16","p-6","sm:p-10","rounded-t-2xl","shadow","bg-card"],[1,"mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","invoiceNo"],["matColumnDef","supplierName"],["matColumnDef","payment"],["matColumnDef","netPrice"],["matColumnDef","kdv"],["matColumnDef","discount"],["matColumnDef","total"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["matColumnDef","actions"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["paginator",""],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],["mat-icon-button","","color","accent",3,"click"],["aria-label","Edit"],["mat-icon-button","","color","warn",3,"click"],[1,"mat-18"],["aria-label","Print"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"a",4),t._UZ(6,"mat-icon",5),t.TgZ(7,"span",6),t._uU(8,"Back"),t.qZA()()()(),t.TgZ(9,"div",7)(10,"h2",8),t._uU(11," Al\u0131\u015flar "),t.qZA()(),t.TgZ(12,"div",9),t._uU(13,"M\xfc\u015fteri/Tedarik\xe7i vb. Kasa Giri\u015fleri (Bug\xfcn yap\u0131lan i\u015flemler)"),t.qZA()(),t.TgZ(14,"div",10)(15,"button",11),t.NdJ("click",function(){return i.createBuyingOrder()}),t._UZ(16,"mat-icon",12),t._uU(17," Kay\u0131tl\u0131 Sipari\u015ften Al\u0131\u015f "),t.qZA(),t.TgZ(18,"button",13),t.NdJ("click",function(){return i.createSupplierSales()}),t._UZ(19,"mat-icon",12),t._uU(20," Kay\u0131tl\u0131 Tedarik\xe7iden Al\u0131\u015f "),t.qZA()()(),t.TgZ(21,"div",14)(22,"div",15)(23,"table",16),t.ynx(24,17),t.YNc(25,k,2,0,"th",18),t.YNc(26,j,2,1,"td",19),t.BQk(),t.ynx(27,20),t.YNc(28,P,2,0,"th",18),t.YNc(29,$,2,1,"td",19),t.BQk(),t.ynx(30,21),t.YNc(31,z,2,0,"th",18),t.YNc(32,H,2,1,"td",19),t.BQk(),t.ynx(33,22),t.YNc(34,I,2,0,"th",18),t.YNc(35,K,2,1,"td",19),t.BQk(),t.ynx(36,23),t.YNc(37,M,2,0,"th",18),t.YNc(38,R,3,4,"td",19),t.BQk(),t.ynx(39,24),t.YNc(40,G,2,0,"th",18),t.YNc(41,O,3,4,"td",19),t.BQk(),t.ynx(42,25),t.YNc(43,X,2,0,"th",18),t.YNc(44,E,3,4,"td",19),t.BQk(),t.ynx(45,26),t.YNc(46,W,2,0,"th",18),t.YNc(47,V,3,4,"td",19),t.BQk(),t.YNc(48,q,1,0,"tr",27),t.YNc(49,tt,1,0,"tr",28),t.ynx(50,29),t.YNc(51,et,2,0,"th",18),t.YNc(52,nt,10,0,"td",19),t.BQk(),t.qZA(),t._UZ(53,"mat-paginator",30,31),t.qZA()()()),2&n&&(t.xp6(5),t.Q6J("routerLink","./.."),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-left"),t.xp6(10),t.Q6J("svgIcon","heroicons_solid:link"),t.xp6(2),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:link"),t.xp6(4),t.Q6J("dataSource",i.dataSource),t.xp6(25),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(4),t.Q6J("pageSizeOptions",t.DdM(9,it)))},dependencies:[f.lW,f.RK,d.Hw,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk,b.NW,T.rH,N.JJ],encapsulation:2});var h=o(9549),C=o(284),S=o(5804),Z=o(8255),U=o(4385),D=o(6709),ot=o(3162),w=o(3238),st=o(6308),at=o(455),lt=o(266),ct=o(4466),_=o(148),rt=o(6838);const ut=[{path:"",component:g}];class p{}p.\u0275fac=function(n){return new(n||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[l.u5,f.ot,h.lN,d.Ps,C.c,l.u5,l.UX,S.J,Z.Tx,l.u5,a.p0,N.ez,d.Ps,h.lN,f.ot,h.lN,d.Ps,C.c,l.u5,l.UX,S.J,Z.Tx,U.LD,d.Ps,D.p9,f.ot,D.p9,h.lN,d.Ps,C.c,Z.Tx,b.TU,ot.Cv,w.si,st.JX,U.LD,at.rP,lt.AV,ct.m,A.Is,_.FA,h.lN,C.c,_.FA,w.XK,rt.FF,T.Bz.forChild(ut)]})},487:(Y,x,o)=>{o.d(x,{c:()=>T});class T{constructor(a,u,m){this.title=a,this.text=u,this.icon=m}}}}]);