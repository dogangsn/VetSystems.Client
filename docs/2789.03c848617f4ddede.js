"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[2789],{22789:(ft,T,i)=>{i.r(T),i.d(T,{BuyingModule:()=>rt});var v=i(89299),u=i(24006),l=i(30671),f=i(70487),g=i(69079),h=i(45263),C=i(43561),w=i(70377),t=i(94650),Z=i(65412),Y=i(30430),_=i(40182),d=i(4859),m=i(97392),B=i(98739),A=i(36895);const Q=["paginator"];function F(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1," Tarih "),t.qZA())}function J(e,o){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=o.$implicit,s=t.oxw();t.xp6(1),t.hij(" ",s.formatDate(n.date)," ")}}function L(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1," Fatura No "),t.qZA())}function k(e,o){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.invoiceNo," ")}}function j(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1,"Tedarik\xe7i"),t.qZA())}function P(e,o){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.supplierName," ")}}function $(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1," \xd6deme Y\xf6ntemi "),t.qZA())}function z(e,o){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.paymentName," ")}}function H(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1,"Net Tutar"),t.qZA())}function I(e,o){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.netPrice,"1.2-2")," ")}}function K(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1,"KDV"),t.qZA())}function M(e,o){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.kdv,"1.2-2")," ")}}function R(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1,"\u0130ndirim"),t.qZA())}function G(e,o){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.discount,"1.2-2")," ")}}function O(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1,"Tutar"),t.qZA())}function X(e,o){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.total,"1.2-2")," ")}}function E(e,o){1&e&&t._UZ(0,"tr",34)}function W(e,o){1&e&&t._UZ(0,"tr",35)}function V(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1," \u0130\u015flemler "),t.qZA())}function q(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"td",33)(1,"button",36),t.NdJ("click",function(){const c=t.CHM(n).$implicit,r=t.oxw();return t.KtG(r.redirectToUpdate(c.id))}),t.TgZ(2,"mat-icon",37),t._uU(3,"edit"),t.qZA()(),t.TgZ(4,"button",38),t.NdJ("click",function(){const c=t.CHM(n).$implicit,r=t.oxw();return t.KtG(r.redirectToDelete(c.id))}),t.TgZ(5,"mat-icon",39),t._uU(6,"delete"),t.qZA()(),t.TgZ(7,"button",36),t.NdJ("click",function(){const c=t.CHM(n).$implicit,r=t.oxw();return t.KtG(r.redirectToPrint(c.id))}),t.TgZ(8,"mat-icon",40),t._uU(9,"print"),t.qZA()()()}}const tt=function(){return[5,10,20]};let et=(()=>{class e{constructor(n,s,a){this._dialog=n,this._translocoService=s,this._salebuyservice=a,this.displayedColumns=["date","invoiceNo","supplierName","payment","netPrice","kdv","discount","total","actions"],this.salebuyList=[],this.dataSource=new l.by(this.salebuyList),this.redirectToUpdate=c=>{this.isUpdateButtonActive=!0},this.redirectToDelete=c=>{const r=new f.c(this.translate("sweetalert.areYouSure"),this.translate("sweetalert.areYouSureDelete"),g.p.warning);h.m.sweetAlertOfQuestion(r).then(ut=>{ut.isConfirmed&&this._salebuyservice.deletedSaleBuy({id:c}).subscribe(dt=>{if(dt.isSuccessful){this.getSaleBuy();const pt=new f.c(this.translate("sweetalert.success"),this.translate("sweetalert.transactionSuccessful"),g.p.success);h.m.sweetAlert(pt)}else console.error("Silme i\u015flemi ba\u015far\u0131s\u0131z.")})})}}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this.getSaleBuy()}getSaleBuy(){this._salebuyservice.getBuySaleList({type:2}).subscribe(s=>{this.salebuyList=s.data,console.log(this.salebuyList),this.dataSource=new l.by(this.salebuyList),this.dataSource.paginator=this.paginator,console.log(this.salebuyList)})}createsales(){this._dialog.open(C.A,{maxWidth:"100vw !important",disableClose:!0,data:{selectedsalebuy:null,visibleCustomer:!1,salebuyType:2,isSupplier:!0}}).afterClosed().subscribe(a=>{a.status&&this.getSaleBuy()})}createSupplierSales(){this._dialog.open(C.A,{maxWidth:"100vw !important",disableClose:!0,data:{selectedsalebuy:null,visibleCustomer:!1,salebuyType:2,isSupplier:!0}}).afterClosed().subscribe(a=>{a.status&&this.getSaleBuy()})}createBuyingOrder(){this._dialog.open(w.Z,{maxWidth:"100vw !important",disableClose:!0,data:{selectedsalebuy:null,visibleCustomer:!1,salebuyType:2,isSupplier:!0}}).afterClosed().subscribe(a=>{a.status&&this.getSaleBuy()})}showSweetAlert(n){if("success"===n){const s=new f.c(this.translate("sweetalert.success"),this.translate("sweetalert.transactionSuccessful"),g.p.success);h.m.sweetAlert(s)}else{const s=new f.c(this.translate("sweetalert.error"),this.translate("sweetalert.transactionFailed"),g.p.error);h.m.sweetAlert(s)}}translate(n){return this._translocoService.translate(n)}formatDate(n){return new Date(n).toLocaleString("tr-TR",{year:"numeric",month:"2-digit",day:"2-digit"})}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(Z.uw),t.Y36(Y.Vn),t.Y36(_.I))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["buying"]],viewQuery:function(s,a){if(1&s&&t.Gf(Q,5),2&s){let c;t.iGM(c=t.CRH())&&(a.paginator=c.first)}},decls:55,vars:10,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","pb-22","sm:pt-12","sm:pb-28","sm:px-10","bg-default","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"font-medium","tracking-tight","text-secondary"],[1,"flex","shrink-0","items-center","mt-6","sm:mt-0","sm:ml-4"],["mat-flat-button","",1,"ml-3",3,"click"],[1,"icon-size-5","mr-2",3,"svgIcon"],["mat-flat-button","",1,"ml-3",3,"color","click"],[1,"flex-auto","-mt-16","p-6","sm:p-10","rounded-t-2xl","shadow","bg-card"],[1,"mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","invoiceNo"],["matColumnDef","supplierName"],["matColumnDef","payment"],["matColumnDef","netPrice"],["matColumnDef","kdv"],["matColumnDef","discount"],["matColumnDef","total"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["matColumnDef","actions"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["paginator",""],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],["mat-icon-button","","color","accent",3,"click"],["aria-label","Edit"],["mat-icon-button","","color","warn",3,"click"],[1,"mat-18"],["aria-label","Print"]],template:function(s,a){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"a",4),t._UZ(6,"mat-icon",5),t.TgZ(7,"span",6),t._uU(8,"Back"),t.qZA()()()(),t.TgZ(9,"div",7)(10,"h2",8),t._uU(11," Al\u0131\u015flar "),t.qZA()(),t.TgZ(12,"div",9),t._uU(13,"M\xfc\u015fteri/Tedarik\xe7i vb. Kasa Giri\u015fleri (Bug\xfcn yap\u0131lan i\u015flemler)"),t.qZA()(),t.TgZ(14,"div",10)(15,"button",11),t.NdJ("click",function(){return a.createBuyingOrder()}),t._UZ(16,"mat-icon",12),t._uU(17," Kay\u0131tl\u0131 Sipari\u015ften Al\u0131\u015f "),t.qZA(),t.TgZ(18,"button",13),t.NdJ("click",function(){return a.createSupplierSales()}),t._UZ(19,"mat-icon",12),t._uU(20," Kay\u0131tl\u0131 Tedarik\xe7iden Al\u0131\u015f "),t.qZA()()(),t.TgZ(21,"div",14)(22,"div",15)(23,"table",16),t.ynx(24,17),t.YNc(25,F,2,0,"th",18),t.YNc(26,J,2,1,"td",19),t.BQk(),t.ynx(27,20),t.YNc(28,L,2,0,"th",18),t.YNc(29,k,2,1,"td",19),t.BQk(),t.ynx(30,21),t.YNc(31,j,2,0,"th",18),t.YNc(32,P,2,1,"td",19),t.BQk(),t.ynx(33,22),t.YNc(34,$,2,0,"th",18),t.YNc(35,z,2,1,"td",19),t.BQk(),t.ynx(36,23),t.YNc(37,H,2,0,"th",18),t.YNc(38,I,3,4,"td",19),t.BQk(),t.ynx(39,24),t.YNc(40,K,2,0,"th",18),t.YNc(41,M,3,4,"td",19),t.BQk(),t.ynx(42,25),t.YNc(43,R,2,0,"th",18),t.YNc(44,G,3,4,"td",19),t.BQk(),t.ynx(45,26),t.YNc(46,O,2,0,"th",18),t.YNc(47,X,3,4,"td",19),t.BQk(),t.YNc(48,E,1,0,"tr",27),t.YNc(49,W,1,0,"tr",28),t.ynx(50,29),t.YNc(51,V,2,0,"th",18),t.YNc(52,q,10,0,"td",19),t.BQk(),t.qZA(),t._UZ(53,"mat-paginator",30,31),t.qZA()()()),2&s&&(t.xp6(5),t.Q6J("routerLink","./.."),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-left"),t.xp6(10),t.Q6J("svgIcon","heroicons_solid:link"),t.xp6(2),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:link"),t.xp6(4),t.Q6J("dataSource",a.dataSource),t.xp6(25),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(4),t.Q6J("pageSizeOptions",t.DdM(9,tt)))},dependencies:[d.lW,d.RK,m.Hw,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,B.NW,v.rH,A.JJ],encapsulation:2})}return e})();var p=i(59549),y=i(284),b=i(85804),x=i(28255),N=i(84385),S=i(56709),nt=i(73162),U=i(3238),it=i(96308),ot=i(90455),st=i(10266),at=i(44466),D=i(99602),lt=i(36838);const ct=[{path:"",component:et}];let rt=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[u.u5,d.ot,p.lN,m.Ps,y.c,u.u5,u.UX,b.J,x.Tx,u.u5,l.p0,A.ez,m.Ps,p.lN,d.ot,p.lN,m.Ps,y.c,u.u5,u.UX,b.J,x.Tx,N.LD,m.Ps,S.p9,d.ot,S.p9,p.lN,m.Ps,y.c,x.Tx,B.TU,nt.Cv,U.si,it.JX,N.LD,ot.rP,st.AV,at.m,Z.Is,D.FA,p.lN,y.c,D.FA,U.XK,lt.FF,v.Bz.forChild(ct)]})}return e})()}}]);