"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[1507],{5962:(f,p,e)=>{e.d(p,{W:()=>v});var s=e(1135),c=e(8505),l=e(5698),a=e(4004),u=e(3900),n=e(2843),E=e(9646),m=e(1723),h=e(4650),t=e(6717),D=e(529);class v{constructor(d,g){this._httpService=d,this._httpClient=g,this._brands=new s.X(null),this._categories=new s.X(null),this._pagination=new s.X(null),this._product=new s.X(null),this._products=new s.X(null),this._tags=new s.X(null),this._vendors=new s.X(null)}getDemandProductsList(){return this._httpService.getRequest(m.z.demandproducts.demandproductsList)}createDemandProduct(d){return this._httpService.post(m.z.demandproducts.Createdemandproducts,d)}deleteDemandProduct(d){return this._httpService.post(m.z.demandproducts.Deletedemandproducts,d)}updateDemandProduct(d){return this._httpService.post(m.z.demandproducts.Updatedemandproducts,d)}getDemandTransList(d){return this._httpService.post(m.z.demandTrans.demandsTransList,d)}getDemandComplateList(){return this._httpService.getRequest(m.z.demandComplate.demandsComplateList)}getDemandLists(){return this._httpService.getRequest(m.z.demands.demandsList)}createDemands(d){return this._httpService.post(m.z.demands.createdemand,d)}deleteDemands(d){return this._httpService.post(m.z.demands.deletedemand,d)}updateDemands(d){return this._httpService.post(m.z.demands.updatedemand,d)}updateBuyDemands(d){return this._httpService.post(m.z.demands.updatebuydemands,d)}getProducts(d=0,g=10,O="name",P="asc",T=""){return this._httpClient.get("api/apps/ecommerce/inventory/products",{params:{page:""+d,size:""+g,sort:O,order:P,search:T}}).pipe((0,c.b)(A=>{this._pagination.next(A.pagination),this._products.next(A.products)}))}getProductById(d){return this._products.pipe((0,l.q)(1),(0,a.U)(g=>{const O=g.find(P=>P.id===d)||null;return this._product.next(O),O}),(0,u.w)(g=>g?(0,E.of)(g):(0,n._)("Could not found product with id of "+d+"!")))}createProduct(){return this.products$.pipe((0,l.q)(1),(0,u.w)(d=>this._httpClient.post("api/apps/ecommerce/inventory/product",{}).pipe((0,a.U)(g=>(this._products.next([g,...d]),g)))))}get products$(){return this._products.asObservable()}}v.\u0275fac=function(d){return new(d||v)(h.LFG(t.O),h.LFG(D.eN))},v.\u0275prov=h.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"})},9345:(f,p,e)=>{e.d(p,{v:()=>a});var s=e(1723),c=e(4650),l=e(6717);class a{constructor(n){this._httpService=n}getcustomerlist(){return this._httpService.getRequest(s.z.customers.customerslist)}createCustomers(n){return this._httpService.post(s.z.customers.createCustomers,n)}getVetVetAnimalsType(){return this._httpService.getRequest(s.z.customers.animalsTypeList)}getAnimalBreedsDefList(){return this._httpService.getRequest(s.z.customers.animalBreedsDefList)}deleteCustomers(n){return this._httpService.post(s.z.customers.deleteCustomer,n)}getCustomersFindById(n){return this._httpService.post(s.z.customers.getCustomersFindById,n)}updateCustomerById(n){return this._httpService.post(s.z.customers.updateCustomerById,n)}createPatients(n){return this._httpService.post(s.z.customers.createPatient,n)}deletePatients(n){return this._httpService.post(s.z.customers.deletePatient,n)}getTransactionMovementList(n){return this._httpService.post(s.z.customers.getTransactionMovement,n)}}a.\u0275fac=function(n){return new(n||a)(c.LFG(l.O))},a.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})},9918:(f,p,e)=>{e.d(p,{b:()=>a});var s=e(1723),c=e(4650),l=e(6717);class a{constructor(n){this._httpService=n}getPaymentMethodsList(){return this._httpService.getRequest(s.z.paymentmethods.paymentmethodsList)}creatPaymentMethods(n){return this._httpService.post(s.z.paymentmethods.createPaymentMethods,n)}updatePaymentMethods(n){return this._httpService.post(s.z.paymentmethods.updatePaymentMethods,n)}deletedPaymentMethods(n){return this._httpService.post(s.z.paymentmethods.deletePaymentMethods,n)}}a.\u0275fac=function(n){return new(n||a)(c.LFG(l.O))},a.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})},6056:(f,p,e)=>{e.d(p,{d:()=>a});var s=e(1723),c=e(4650),l=e(6717);class a{constructor(n){this._httpService=n}GetProductDescriptionList(){return this._httpService.getRequest(s.z.productdescription.productdescriptionList)}createProductDescription(n){return this._httpService.post(s.z.productdescription.createProductDescriptions,n)}deleteProductDescription(n){return this._httpService.post(s.z.productdescription.deleteProductDescriptions,n)}updateProductDescription(n){return this._httpService.post(s.z.productdescription.updateProductDescriptions,n)}getProductDescriptionFilters(n){return this._httpService.post(s.z.productdescription.productDescriptionFilters,n)}}a.\u0275fac=function(n){return new(n||a)(c.LFG(l.O))},a.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})},182:(f,p,e)=>{e.d(p,{I:()=>a});var s=e(1723),c=e(4650),l=e(6717);class a{constructor(n){this._httpService=n}getBuySaleList(n){return this._httpService.post(s.z.saleBuy.saleBuyList,n)}getBuySaleFilterList(n){return this._httpService.post(s.z.saleBuy.saleBuyFilter,n)}createSaleBuy(n){return this._httpService.post(s.z.saleBuy.createSaleBuy,n)}deletedSaleBuy(n){return this._httpService.post(s.z.saleBuy.deleteSaleBuy,n)}}a.\u0275fac=function(n){return new(n||a)(c.LFG(l.O))},a.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})},3225:(f,p,e)=>{e.d(p,{R:()=>a});var s=e(1723),c=e(4650),l=e(6717);class a{constructor(n){this._httpService=n}getSuppliersList(){return this._httpService.getRequest(s.z.suppliers.suppliersList)}createSuppliers(n){return this._httpService.post(s.z.suppliers.Createsuppliers,n)}deleteSuppliers(n){return this._httpService.post(s.z.suppliers.Deletesuppliers,n)}updateSuppliers(n){return this._httpService.post(s.z.suppliers.Updatesuppliers,n)}}a.\u0275fac=function(n){return new(n||a)(c.LFG(l.O))},a.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})},4114:(f,p,e)=>{e.d(p,{N:()=>c});class c{constructor(a,u,n,E,m,h,t,D,v,C){this.id=a,this.productId=u,this.quantity=n,this.unitprice=E,this.amount=m,this.stockState=h,this.isActive=t,this.reserved=D,this.barcode=v,this.ownerId=C}}},377:(f,p,e)=>{e.d(p,{Z:()=>M});var s=e(4006),c=e(5412),l=e(487),a=e(9079),u=e(5263),n=e(5515),E=e(4114),m=e(7579),h=e(2722),t=e(4650),D=e(5707),v=e(182),C=e(9345),d=e(6056),g=e(9918),O=e(5962),P=e(4859),T=e(9549),A=e(7392),Z=e(284),S=e(6895),b=e(4385),R=e(3238),U=e(6308),L=e(148),W=e(6838);function F(o,i){1&o&&(t.TgZ(0,"span"),t._uU(1,"Al\u0131\u015f G\xfcncelle"),t.qZA())}function K(o,i){1&o&&(t.TgZ(0,"span"),t._uU(1,"Al\u0131\u015f Ekle"),t.qZA())}function w(o,i){if(1&o&&(t.TgZ(0,"mat-option",30),t._uU(1),t.qZA()),2&o){const r=i.$implicit;t.Q6J("value",r.id),t.xp6(1),t.Oqu(r.documentno)}}const z=function(){return{standalone:!0}};function N(o,i){if(1&o){const r=t.EpF();t.TgZ(0,"div",18)(1,"mat-form-field",14)(2,"mat-label"),t._uU(3,"Sipari\u015f D\xf6k\xfcman No"),t.qZA(),t.TgZ(4,"mat-select",28),t.NdJ("selectionChange",function(B){t.CHM(r);const y=t.oxw();return t.KtG(y.filterDocumentNo(B.value))}),t._UZ(5,"mat-select-filter",29),t.YNc(6,w,2,2,"mat-option",20),t.qZA()()()}if(2&o){const r=t.oxw();t.xp6(4),t.Q6J("formControlName","documentno")("placeholder","Sipari\u015f D\xf6k\xfcman No"),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(5,z))("ngModel",r.selectedDocumentNo),t.xp6(1),t.Q6J("ngForOf",r.demandcards)}}function J(o,i){if(1&o&&(t.TgZ(0,"div",58),t._uU(1),t.qZA()),2&o){const r=t.oxw().$implicit;t.xp6(1),t.hij(" ",r.name," ")}}function Q(o,i){if(1&o&&(t.ynx(0),t.YNc(1,J,2,1,"div",57),t.BQk()),2&o){const r=i.$implicit,_=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",r.id===_.productId)}}function Y(o,i){1&o&&(t.TgZ(0,"div",59),t._UZ(1,"div",60),t.qZA())}function k(o,i){1&o&&(t.TgZ(0,"div",61),t._UZ(1,"div",62),t.qZA())}function j(o,i){1&o&&(t.TgZ(0,"div",63),t._UZ(1,"div",64),t.qZA())}function G(o,i){1&o&&(t.ynx(0),t._UZ(1,"mat-icon",65),t.BQk()),2&o&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check"))}function V(o,i){1&o&&(t.ynx(0),t._UZ(1,"mat-icon",66),t.BQk()),2&o&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:x"))}function H(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",44)(2,"div",45)(3,"div",46),t._UZ(4,"img",47),t.TgZ(5,"div",48),t._uU(6," NO THUMB "),t.qZA()()(),t.TgZ(7,"div"),t.YNc(8,Q,2,1,"ng-container",49),t.qZA(),t.TgZ(9,"div",50),t._uU(10),t.ALo(11,"currency"),t.qZA(),t.TgZ(12,"div",51)(13,"div",52),t._uU(14),t.qZA(),t.YNc(15,Y,2,0,"div",53),t.YNc(16,k,2,0,"div",54),t.YNc(17,j,2,0,"div",55),t.qZA(),t.TgZ(18,"div",56),t.YNc(19,G,2,1,"ng-container",6),t.YNc(20,V,2,1,"ng-container",6),t.qZA()(),t.BQk()),2&o){const r=i.$implicit,_=t.oxw(6);t.xp6(8),t.Q6J("ngForOf",_.productdescription),t.xp6(2),t.hij(" ",t.gM2(11,8,r.reserved,"\u20ba","symbol","1.2-2")," "),t.xp6(4),t.Oqu(r.stockState),t.xp6(1),t.Q6J("ngIf",r.stockState<20),t.xp6(1),t.Q6J("ngIf",r.stockState>=20&&r.stockState<30),t.xp6(1),t.Q6J("ngIf",r.stockState>=30),t.xp6(2),t.Q6J("ngIf",1===r.isActive),t.xp6(1),t.Q6J("ngIf",0===r.isActive)}}function X(o,i){if(1&o&&(t.ynx(0),t.YNc(1,H,21,13,"ng-container",43),t.BQk()),2&o){const r=i.ngIf,_=t.oxw(5);t.xp6(1),t.Q6J("ngForOf",r)("ngForTrackBy",_.trackByFn)}}function $(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",39)(2,"div",40),t._UZ(3,"div"),t.TgZ(4,"div",41),t._uU(5,"\xdcr\xfcn Ad\u0131"),t.qZA(),t.TgZ(6,"div",41),t._uU(7," Toplam Tutar "),t.qZA(),t.TgZ(8,"div",42),t._uU(9," Adet "),t.qZA(),t.TgZ(10,"div",42),t._uU(11," Aktif "),t.qZA(),t._UZ(12,"div"),t.qZA(),t.YNc(13,X,2,2,"ng-container",6),t.qZA(),t.BQk()),2&o){const r=t.oxw(4);t.xp6(4),t.Q6J("mat-sort-header","productId"),t.xp6(2),t.Q6J("mat-sort-header",r.reserved),t.xp6(2),t.Q6J("mat-sort-header",r.stockState),t.xp6(2),t.Q6J("mat-sort-header","isActive"),t.xp6(3),t.Q6J("ngIf",r.demandTransList)}}function q(o,i){if(1&o&&(t.ynx(0),t.YNc(1,$,14,5,"ng-container",38),t.BQk()),2&o){const r=i.ngIf;t.oxw();const _=t.MAs(7);t.xp6(1),t.Q6J("ngIf",r.length>0)("ngIfElse",_)}}function tt(o,i){1&o&&(t.TgZ(0,"div",67),t._uU(1,"Veri bulunamad\u0131."),t.qZA())}function et(o,i){if(1&o&&(t.TgZ(0,"div",33)(1,"div",18)(2,"div",34)(3,"form",35)(4,"div",36),t.YNc(5,q,2,2,"ng-container",6),t.YNc(6,tt,2,0,"ng-template",null,37,t.W1O),t.qZA()()()()()),2&o){const r=t.oxw(2);t.xp6(5),t.Q6J("ngIf",r.demandTransList)}}function nt(o,i){if(1&o&&(t.TgZ(0,"div",31),t.YNc(1,et,8,1,"div",32),t.qZA()),2&o){const r=t.oxw();t.xp6(1),t.Q6J("ngIf",r.isVisible)}}function rt(o,i){if(1&o&&(t.TgZ(0,"mat-option",30),t._uU(1),t.qZA()),2&o){const r=i.$implicit;t.Q6J("value",r.recId),t.xp6(1),t.Oqu(r.name)}}class M{constructor(i,r,_,B,y,I,it,st,ot,x){this._dialogRef=i,this._formBuilder=r,this._translocoService=_,this._salebuyservice=B,this._customerListService=y,this._productdescriptionService=I,this._paymentmethodsService=it,this.demandProductsService=st,this.cdr=ot,this.data=x,this.customerlist=[],this.selectedDocumentNo="",this.selectedProductId="",this.productdescription=[],this.payments=[],this.demandTransList=[],this.demandTransListlast=[],this.isVisible=!1,this.selectedDemand=null,this._unsubscribeAll=new m.x,this.visibleCustomer=x.visibleCustomer,this.salebuyType=x.salebuyType,this.selectedsalebuy=x.selectedsalebuy,this.isSupplier=x.isSupplier,!1===this.isSupplier&&(this.selectedDocumentNo=x.demandList,this.selectedDemand=x.demandList)}ngOnInit(){this.salebuy=this._formBuilder.group({date:[new Date],productId:["00000000-0000-0000-0000-000000000000",s.kI.required],remark:[""],supplierId:["00000000-0000-0000-0000-000000000000"],invoiceNo:[""],paymentType:[1],amount:[1]}),this.getCustomerList(),this.getProductList(),this.paymentsList(),this.isSupplier?this.getDemands():(this.getDemandProducts(),this.toggleDetails(this.selectedDemand.id),this.isVisible=!0)}toggleDetails(i){var r=this.demandcards.find(_=>_.id===i);this.selectedDemand=r,this.cdr.markForCheck()}getDemandProducts(){const i=new E.N(this.selectedDemand.id,"00000000-0000-0000-0000-000000000000",0,0,0,0,0,0,"0","00000000-0000-0000-0000-000000000000");this.demandProductsService.getDemandTransList(i).pipe((0,h.R)(this._unsubscribeAll)).subscribe(r=>{r&&r.data&&(this.demandTransListlast=r.data,this.demandTransList=this.demandTransListlast.filter(_=>_.ownerId===this.selectedDemand.id),this.cdr.markForCheck(),console.log(this.demandTransList))})}getDemands(){this.demandProductsService.getDemandComplateList().pipe((0,h.R)(this._unsubscribeAll)).subscribe(i=>{i&&i.data&&(this.demandcards=i.data.filter(r=>!1===r.isBuying),this.cdr.markForCheck(),console.log(this.demandcards))})}getCustomerList(){this._customerListService.getcustomerlist().subscribe(i=>{this.customerlist=i.data,console.log(this.customerlist)})}getProductList(){this._productdescriptionService.GetProductDescriptionList().subscribe(i=>{this.productdescription=i.data})}paymentsList(){this._paymentmethodsService.getPaymentMethodsList().subscribe(i=>{this.payments=i.data,console.log(this.payments)})}closeDialog(){this._dialogRef.close({status:null})}filterDocumentNo(i){this.selectedDocumentNo=i,this.toggleDetails(i),this.getDemandProducts(),this.isVisible=!0}filterProductId(i){this.selectedDocumentNo=i}getFormValueByName(i){return this.salebuy.get(i).value}addOrUpdateSaleBuy(){this.addBuyOrder()}addBuyOrder(){if(this.salebuy.valid){const i=this.getFormValueByName("date").toISOString(),r=this.selectedDemand.documentno;this.demandTransList.forEach(_=>{const B=new n.w("00000000-0000-0000-0000-000000000000",i,_.productId,"test",this.salebuyType,this.selectedDemand.suppliers,r,this.getFormValueByName("paymentType"),_.stockState);this._salebuyservice.createSaleBuy(B).subscribe(y=>{y.isSuccessful?this.demandProductsService.updateBuyDemands(this.selectedDemand).subscribe(I=>{I.isSuccessful?(this.showSweetAlert("success","sweetalert.success"),this._dialogRef.close({status:!0})):this.showSweetAlert("error","sweetalert.error")},I=>{console.log(I)}):this.showSweetAlert("error","sweetalert.error")},y=>{console.log(y)})})}else this.salebuy.get("productId").value||this.showSweetAlert("error","\xdcr\xfcn Se\xe7imi Yap\u0131n\u0131z.")}updateBuySale(){}showSweetAlert(i,r){if("success"===i){const _=new l.c(this.translate(r),this.translate("sweetalert.transactionSuccessful"),a.p.success);u.m.sweetAlert(_)}else{const _=new l.c(this.translate(r),this.translate("sweetalert.transactionFailed"),a.p.error);u.m.sweetAlert(_)}}translate(i){return this._translocoService.translate(i)}}M.\u0275fac=function(i){return new(i||M)(t.Y36(c.so),t.Y36(s.qu),t.Y36(D.Vn),t.Y36(v.I),t.Y36(C.v),t.Y36(d.d),t.Y36(g.b),t.Y36(O.W),t.Y36(t.sBO),t.Y36(c.WI))},M.\u0275cmp=t.Xpm({type:M,selectors:[["app-create-edit-buying-order"]],decls:45,vars:17,consts:[["mat-dialog-title","",1,"mat-dialog-title"],[1,"dialog-close-button",3,"tabIndex","click"],[1,"material-icons"],[1,"modalForm"],[1,"modal-header"],[1,"modal-title"],[4,"ngIf"],[1,"modal-body","mbody-store"],[1,"qm-pr-content"],[1,"container-fluid",3,"formGroup"],[1,"row"],["class","float : left flex  gt-xs:flex-row",4,"ngIf"],["class"," float : left flex  gt-xs:flex-row overflow-hidden",4,"ngIf"],[1,"mt-5","float",":","left","flex","gt-xs:flex-row"],[1,"ml-5","flex-auto","gt-xs:pl-3"],["matInput","",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],["picker",""],[1,"float",":","left","flex","gt-xs:flex-row"],["name","paymentType",3,"formControlName","placeholder"],[3,"value",4,"ngFor","ngForOf"],[1,"flex","flex-col","sm:flex-row","sm:items-center","justify-between","mt-4","sm:mt-6"],[1,"-ml-2"],["mat-icon-button",""],[1,"icon-size-5",3,"svgIcon"],[1,"flex","items-center","mt-4","sm:mt-0"],["mat-stroked-button","",1,"ml-auto","sm:ml-0",3,"click"],["mat-flat-button","",1,"order-first","sm:order-last",3,"color","click"],["name","documentno",3,"formControlName","placeholder","selectionChange"],[3,"ngModelOptions","ngModel"],[3,"value"],[1,"float",":","left","flex","gt-xs:flex-row","overflow-hidden"],["class","",4,"ngIf"],[1,""],[1,"flex","border-b"],[1,"ml-8","flex","flex-col","w-full"],[1,"flex","flex-col","flex-2","sm:mb-25","overflow-hidden","sm:overflow-y-hidden"],["noTrans",""],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"inventory-grid","z-10","sticky","top-0","grid","gap-4","py-4","px-6","md:px-8","shadow","text-md","font-semibold","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],[1,"hidden","sm:block",3,"mat-sort-header"],[1,"hidden","lg:block",3,"mat-sort-header"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"inventory-grid","grid","items-center","gap-4","py-3","px-6","md:px-8","border-b"],[1,"flex","items-center"],[1,"relative","flex","flex-0","items-center","justify-center","w-12","h-12","mr-6","rounded","overflow-hidden","border"],[1,"w-8"],[1,"flex","items-center","justify-center","w-full","h-full","text-xs","font-semibold","leading-none","text-center","uppercase"],[4,"ngFor","ngForOf"],[1,"hidden","sm:block"],[1,"hidden","lg:flex","items-center"],[1,"min-w-4"],["class","flex items-end ml-2 w-1 h-4 bg-red-200 rounded overflow-hidden",4,"ngIf"],["class","flex items-end ml-2 w-1 h-4 bg-orange-200 rounded overflow-hidden",4,"ngIf"],["class","flex items-end ml-2 w-1 h-4 bg-green-100 rounded overflow-hidden",4,"ngIf"],[1,"hidden","lg:block"],["class","truncate",4,"ngIf"],[1,"truncate"],[1,"flex","items-end","ml-2","w-1","h-4","bg-red-200","rounded","overflow-hidden"],[1,"flex","w-full","h-1/3","bg-red-600"],[1,"flex","items-end","ml-2","w-1","h-4","bg-orange-200","rounded","overflow-hidden"],[1,"flex","w-full","h-2/4","bg-orange-400"],[1,"flex","items-end","ml-2","w-1","h-4","bg-green-100","rounded","overflow-hidden"],[1,"flex","w-full","h-full","bg-green-400"],[1,"text-green-400","icon-size-5",3,"svgIcon"],[1,"text-gray-400","icon-size-5",3,"svgIcon"],[1,"p-8","sm:p-16","border-t","text-4xl","font-semibold","tracking-tight","text-center"]],template:function(i,r){if(1&i&&(t.TgZ(0,"h1",0)(1,"button",1),t.NdJ("click",function(){return r.closeDialog()}),t.TgZ(2,"span",2),t._uU(3," highlight_off "),t.qZA()()(),t.TgZ(4,"div",3)(5,"mat-dialog-content")(6,"div",4)(7,"h5",5),t.YNc(8,F,2,0,"span",6),t.YNc(9,K,2,0,"span",6),t.qZA()(),t.TgZ(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10),t.YNc(14,N,7,6,"div",11),t.YNc(15,nt,2,1,"div",12),t.TgZ(16,"div",13)(17,"mat-form-field",14)(18,"mat-label"),t._uU(19,"Tarihi"),t.qZA(),t._UZ(20,"input",15)(21,"mat-datepicker-toggle",16)(22,"mat-datepicker",null,17),t.qZA()(),t.TgZ(24,"div",18)(25,"mat-form-field",14)(26,"mat-label"),t._uU(27,"\xd6deme \u0130\u015flemi"),t.qZA(),t.TgZ(28,"mat-select",19),t.YNc(29,rt,2,2,"mat-option",20),t.qZA()()()()()(),t.TgZ(30,"div",21)(31,"div",22)(32,"button",23),t._UZ(33,"mat-icon",24),t.qZA(),t.TgZ(34,"button",23),t._UZ(35,"mat-icon",24),t.qZA(),t.TgZ(36,"button",23),t._UZ(37,"mat-icon",24),t.qZA(),t.TgZ(38,"button",23),t._UZ(39,"mat-icon",24),t.qZA()(),t.TgZ(40,"div",25)(41,"button",26),t.NdJ("click",function(){return r.closeDialog()}),t._uU(42," Vazge\xe7 "),t.qZA(),t.TgZ(43,"button",27),t.NdJ("click",function(){return r.addOrUpdateSaleBuy()}),t._uU(44," Kaydet "),t.qZA()()()()()()),2&i){const _=t.MAs(23);t.xp6(1),t.Q6J("tabIndex",-1),t.xp6(7),t.Q6J("ngIf",r.selectedsalebuy),t.xp6(1),t.Q6J("ngIf",!r.selectedsalebuy),t.xp6(3),t.Q6J("formGroup",r.salebuy),t.xp6(2),t.Q6J("ngIf",r.isSupplier),t.xp6(1),t.Q6J("ngIf",r.isSupplier),t.xp6(5),t.Q6J("matDatepicker",_)("formControlName","date"),t.xp6(1),t.Q6J("for",_),t.xp6(7),t.Q6J("formControlName","paymentType")("placeholder","\xd6deme Tipi"),t.xp6(1),t.Q6J("ngForOf",r.payments),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:paper-clip"),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:link"),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:emoji-happy"),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:photograph"),t.xp6(4),t.Q6J("color","primary")}},dependencies:[s._Y,s.Fj,s.JJ,s.JL,s.On,s.F,P.lW,P.RK,T.KE,T.hX,T.R9,A.Hw,Z.Nt,s.sg,s.u,S.sg,S.O5,b.gD,R.ey,U.YE,U.nU,c.uh,c.xY,L.Mq,L.hl,L.nW,W.Fq,S.H9],styles:[".inventory-grid[_ngcontent-%COMP%]{grid-template-columns:40px auto 40px}@media (min-width: 600px){.inventory-grid[_ngcontent-%COMP%]{grid-template-columns:48px auto 112px 72px 96px 72px}}@media (min-width: 960px){.inventory-grid[_ngcontent-%COMP%]{grid-template-columns:48px 112px auto 112px 72px}}@media (min-width: 1280px){.inventory-grid[_ngcontent-%COMP%]{grid-template-columns:96px auto 112px 112px 96px 48px 96px 72px 72px}}"]})},5515:(f,p,e)=>{e.d(p,{w:()=>s});class s{constructor(l,a,u,n,E,m,h,t,D){this.customerId=l,this.date=a,this.productId=u,this.remark=n,this.type=E,this.supplierId=m,this.invoiceNo=h,this.paymentType=t,this.amount=D}}}}]);