(function(){"use strict";var A={3672:function(A,s,e){var t=e(9242),n=e(3396);function o(A,s,e,t,o,i){const r=(0,n.up)("SideBar"),c=(0,n.up)("ComprasionItems");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(r,{menu:A.menu},null,8,["menu"]),(0,n.Wm)(c,{query:A.items[0]},null,8,["query"])],64)}var i=e(7139),r=e.p+"img/solidBars.5cb5d7e7.png";const c={class:"sidebar-menu"},a={class:"left-menu"},h={class:"right-menu"};function m(A,s,e,t,o,m){const u=(0,n.up)("MenuOption");return(0,n.wg)(),(0,n.iD)("header",c,[(0,n._)("img",{class:"sidebar-ico --bar-hide",src:r,alt:"no loaded solidBar.png",onClick:s[0]||(s[0]=s=>A.clickMobileMenu())}),(0,n._)("div",{class:(0,i.C_)(A.menuBox)},[(0,n._)("div",a,[(0,n.Wm)(u,{options:A.menu?.left},null,8,["options"])]),(0,n._)("div",h,[(0,n.Wm)(u,{options:A.menu?.right},null,8,["options"])])],2)])}const u={class:"options-text"},d=["src","alt"];function l(A,s,e,t,o,r){return(0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(A.options,((s,e)=>((0,n.wg)(),(0,n.iD)("div",{class:"menu-options",key:e},[(0,n._)("div",u,(0,i.zw)(A.styleText(s.text,s)),1),s?.icoUrl?((0,n.wg)(),(0,n.iD)("img",{key:0,class:"options-ico",src:s?.icoUrl,alt:"no loaded ico "+s?.icoUrl},null,8,d)):(0,n.kq)("",!0)])))),128)}var b=(0,n.aZ)({name:"MenuOption",props:{options:{type:Array}},methods:{styleText(A,s){return s?.style?.uppercase?A.toUpperCase():A}}}),p=e(89);const g=(0,p.Z)(b,[["render",l],["__scopeId","data-v-0a9d2fc6"]]);var w=g,f=(0,n.aZ)({name:"SideBar",components:{MenuOption:w},props:{menu:{type:Object}},data(){return{isOpenMobileMenu:!1}},computed:{menuBox(){const A=this.isOpenMobileMenu;return A?"menu-box --open-mb-menu":"menu-box --close-mb-menu"}},methods:{clickMobileMenu(){this.isOpenMobileMenu=!this.isOpenMobileMenu}}});const B=(0,p.Z)(f,[["render",m],["__scopeId","data-v-88412d38"]]);var y=B;const v={key:0,class:"loading-items"};function D(A,s,e,t,o,i){const r=(0,n.up)("ChipGroup"),c=(0,n.up)("ComparisonTable");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(r,{number:A.maxNumberСomparison,topic:A.query?.name,chipsPlaceholder:A.chipsPlaceholder,onClickNumber:A.changeNumberСomparison},null,8,["number","topic","chipsPlaceholder","onClickNumber"]),(0,n.Wm)(c,{items:A.gettedItems},null,8,["items"]),A.isLoadingItems?((0,n.wg)(),(0,n.iD)("div",v," Loading... ")):(0,n.kq)("",!0)],64)}const I={class:"items-view-table table-row"},C={class:"name-prop-box check-row"},Q={class:"table-text"},k={class:"properties-table"},Y={class:"name-prop-box title-propetry"},M={class:"table-text"},U={class:"table-text"};function z(A,s,e,o,r,c){const a=(0,n.up)("CheckBox"),h=(0,n.up)("ItemsCard"),m=(0,n.up)("IcoIsTrue");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",I,[(0,n._)("div",C,[(0,n._)("div",Q,[(0,n.Wm)(a,{content:A.contentComparsion,onCheckout:A.compareItems},null,8,["content","onCheckout"])])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(A.items,((A,s)=>((0,n.wg)(),(0,n.iD)("div",{class:"table-el item-view img-mobile",key:s},[(0,n.Wm)(h,{index:s,name:A.name,url:A.img,id:A.id},null,8,["index","name","url","id"])])))),128))]),(0,n._)("table",k,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(A.rowsTitle,((s,e)=>((0,n.wg)(),(0,n.iD)("div",{class:"table-row",key:e},[(0,n.wy)((0,n._)("div",Y,[(0,n._)("div",M,(0,i.zw)(s),1)],512),[[t.F8,A.isValidKey[e]]]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(A.items,((s,o)=>(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",{class:"table-el el-b-mobile",key:o},[(0,n._)("div",U,[(0,n.Uk)((0,i.zw)(A.getTableElement(s.main[e],e))+" ",1),A.isBoolean(s.main[e])?((0,n.wg)(),(0,n.j4)(m,{key:0,isTrue:A.isBoolean(s.main[e])},null,8,["isTrue"])):(0,n.kq)("",!0)])])),[[t.F8,A.isValidKey[e]]]))),128))])))),128))])])}const E={class:"box-img"},F={class:"img-item-left-pannel"},x=["src"],O={key:0,class:"loader"},K={class:"name-item"};function N(A,s,e,t,o,r){const c=(0,n.up)("DropDown");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",E,[(0,n._)("div",F,[A.isLoading?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(c,{key:0,index:A.index,items:A.searchingItems,directionDropDown:A.directionDropDown,idOldItem:A.id,onSetQuery:A.setQuery},null,8,["index","items","directionDropDown","idOldItem","onSetQuery"]))])]),(0,n._)("img",{class:"img-item",ref:"img-item",src:A.url},null,8,x),A.isLoading?((0,n.wg)(),(0,n.iD)("div",O)):(0,n.kq)("",!0),(0,n._)("div",K,(0,i.zw)(A.name),1)],64)}const P=["data-uid"],T=["data-uid"],j={class:"list-dropdown"},L=["data-uid","src"];function V(A,s,o,r,c,a){const h=(0,n.up)("ItemList");return(0,n.wg)(),(0,n.iD)("div",{class:"activator-dr-down","data-uid":A.uid,ref:"activator-dr-down"},[(0,n.wy)((0,n._)("div",{"data-uid":A.uid,class:(0,i.C_)(A.classDropDown)},[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":s[0]||(s[0]=s=>A.query=s),class:"input-search",type:"text",placeholder:"Поиск"},null,512),[[t.nr,A.query]]),(0,n._)("div",j,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(A.items,((s,e)=>((0,n.wg)(),(0,n.j4)(h,{key:e,index:A.index,name:s.name,url:s.img,id:s.id},null,8,["index","name","url","id"])))),128))])],10,T),[[t.F8,A.isShowDropdown]]),(0,n._)("img",{class:"img-activator","data-uid":A.uid,src:e(6135),alt:"не загрузился slider.png",onClick:s[1]||(s[1]=s=>A.clickSlider())},null,8,L)],8,P)}const Z={class:"box-list"},q=["src"],W={class:"img-boxs"},R=["src"],X={key:0,class:"loaders"},S={class:"name-items"};function H(A,s,t,o,r,c){return(0,n.wg)(),(0,n.iD)("div",Z,[(0,n._)("img",{class:"ico-change-item",onClick:s[0]||(s[0]=s=>A.clickIco()),src:e(3439)},null,8,q),(0,n._)("div",W,[(0,n._)("img",{class:"img-items",ref:"img-items",src:A.url},null,8,R),A.isLoading?((0,n.wg)(),(0,n.iD)("div",X)):(0,n.kq)("",!0)]),(0,n._)("div",S,(0,i.zw)(A.name),1)])}e(7658);var G=e(65);async function J(A,s){try{const e=await fetch(A,s);if(!e.ok)throw new Error("It is bad Response!");const t=await e.json();return t.data}catch{throw new Error(`Error in GET: ${A}`)}}const _=Symbol("ts_store");function $(){return(0,G.oR)(_)}const AA=(0,G.MT)({state:{comparison:{items:[],mappingIdIndex:{},displayItemsId:[],searchItems:{},defaultItems:3,userQuery:""}},getters:{displayItems(A){const s=A.comparison.items,e=A.comparison.displayItemsId,t=A.comparison.mappingIdIndex;return e.map((A=>s[t[A]]))},filterItemsbyQuery(A){const s=A.comparison.items.slice(0),e=A.comparison.userQuery,t=A.comparison.displayItemsId,n=A.comparison.mappingIdIndex,o=t.map((A=>n[A])),i=Object.values(o).sort(((A,s)=>s-A));return i.forEach(((A,e)=>{s.splice(A,1)})),e?s.filter((A=>-1!==A.name.indexOf(e))):s}},mutations:{setItems(A,s){A.comparison.items=s;const e=A.comparison.items,t=A.comparison.displayItemsId,n=A.comparison.mappingIdIndex,o=A.comparison.defaultItems;e.forEach(((A,s)=>{n[A.id]=s}));for(let i=0;i<o;i++)t[i]=e[i].id},setQuery(A,s){A.comparison.userQuery=s},changeItemsByID(A,s){const e=s.oldId,t=s.newId,n=A.comparison.displayItemsId;n[e]=t},addDisplayItem(A){const s=A.comparison.items,e=A.comparison.displayItemsId,t=A.comparison.mappingIdIndex,n=e.length,o=s.length,i=t[e[n-1]];if(i<o){let A=!0,t=i;for(t=i;A;t++)A=e.some((A=>A===s[t].id));e.push(s[t-1].id)}else e.push(0)},deleteDisplayItem(A){const s=A.comparison.displayItemsId;s.pop()}},actions:{async downloadItems(A,s,e){const t=await J(s,e);await new Promise((()=>{A.commit("setItems",t)}))}},modules:{}});var sA=(0,n.aZ)({name:"ItemList",props:{name:{type:String},url:{type:String},id:{type:Number},index:{type:Number}},data(){return{isLoading:!0}},setup(){const A=$();return{store:A}},mounted(){const A=this.$refs["img-items"];A.addEventListener("load",(()=>{this.isLoading=!1}))},methods:{clickIco(){this.store.commit("changeItemsByID",{oldId:this.index,newId:this.id})}}});const eA=(0,p.Z)(sA,[["render",H],["__scopeId","data-v-e3eba42a"]]);var tA=eA,nA=(0,n.aZ)({name:"DropDown",components:{ItemList:tA},mounted(){const A=document.querySelector("body");A.addEventListener("click",(A=>{const s=A.target;s&&(s.closest(`.img-activator[data-uid=${this.uid}]`)||s.closest(`.dropdown[data-uid=${this.uid}]`)||(this.isShowDropdown=!1))}))},props:{items:{type:Array},index:{type:Number},directionDropDown:{type:String}},data(){return{isShowDropdown:!1,query:"",slider:{},dropdown:{}}},computed:{uid(){return"_"+`${Math.random()}`.slice(2)},classDropDown(){switch(this.directionDropDown){case"right":return"dropdown right-dr";case"left":return"dropdown left-dr";default:return"dropdown left-dr"}}},methods:{clickSlider(){this.isShowDropdown=!this.isShowDropdown}},watch:{query(A){this.$emit("setQuery",A.trim())}}});const oA=(0,p.Z)(nA,[["render",V],["__scopeId","data-v-bede103c"]]);var iA=oA,rA=(0,n.aZ)({name:"ItemsCard",components:{DropDown:iA},setup(){const A=$();return{store:A}},props:{name:{type:String},url:{type:String},id:{type:Number},index:{type:Number}},data(){return{isLoading:!0}},mounted(){const A=this.$refs["img-item"];A.addEventListener("load",(()=>{this.isLoading=!1}))},computed:{searchingItems(){return this.store.getters.filterItemsbyQuery},directionDropDown(){const A=this.store.getters.displayItems.length;return this.index&&this.index>=A/2?"right":"left"}},methods:{setQuery(A){this.store.commit("setQuery",A)}}});const cA=(0,p.Z)(rA,[["render",N],["__scopeId","data-v-40dcd630"]]);var aA=cA;const hA={class:"owerflow-checkbox"},mA={class:"checkbox-content"};function uA(A,s,e,o,r,c){return(0,n.wg)(),(0,n.iD)("div",hA,[(0,n.wy)((0,n._)("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":s[0]||(s[0]=s=>A.checkout=s)},null,512),[[t.e8,A.checkout]]),(0,n._)("div",mA,(0,i.zw)(A.content),1)])}var dA=(0,n.aZ)({name:"ComparsionItems",props:{content:String},data(){return{checkout:!1}},watch:{checkout(A){this.$emit("checkout",A)}}});const lA=(0,p.Z)(dA,[["render",uA],["__scopeId","data-v-33b3ad0d"]]);var bA=lA;const pA=["src"];function gA(A,s,e,t,o,i){return(0,n.wg)(),(0,n.iD)("img",{class:"ico-check",src:A.url},null,8,pA)}var wA=(0,n.aZ)({name:"IcoIsTrue",props:{isTrue:Boolean},computed:{url(){return this.isTrue?e(5277):e(7903)}}});const fA=(0,p.Z)(wA,[["render",gA],["__scopeId","data-v-696f3b23"]]);var BA=fA,yA=(0,n.aZ)({name:"ItemsView",components:{ItemsCard:aA,CheckBox:bA,IcoIsTrue:BA},props:{items:{type:Array}},data(){return{rowsTitle:{manufacturer:"Производитель",general_year:"Год релиза",display_size__inch:"Диагональ экрана (дюйм)",country:"Страна-производитель",storage_capacity__gb:"Объем памяти",update_frequency:"Частота обновления экрана",NFC:"NFC",esim:"Поддержка eSIM",wireless_charging:"Поддержка беспроводной зарядки",price:"Цена",cpu_number_of_cores:"Количество процессоров"},contentComparsion:"Показать различия",isCompariosItems:!1,test:{}}},computed:{isValidKey(){if(this.isCompariosItems&&this.items)return this.isDifferencesForKey(this.items);const A={};return Object.keys(this.rowsTitle).forEach((s=>{A[s]=!0})),A}},methods:{compareItems(A){this.isCompariosItems=A},isDifferencesForKey(A){const s={},e={};A.forEach(((A,e)=>{const t=Object.keys(A.main);t.forEach((t=>{s[t]||(s[t]=[]),s[t][e]=A.main[t]}))}));const t=Object.keys(s);return t.forEach((A=>{const t=s[A][0],n=s[A].some((A=>A!==t));e[A]=n})),e},getTableElement(A,s){if(this.isBoolean(A))return"";switch(s){case"display_size__inch":return`${A}`.replace(".",",");case"storage_capacity__gb":return`${A} Гб`;case"update_frequency":return`${A} Гц`;case"price":return`${A} р`;default:return A}},isBoolean(A){return"boolean"===typeof A}}});const vA=(0,p.Z)(yA,[["render",z],["__scopeId","data-v-d1c3c706"]]);var DA=vA;const IA={class:"chip-group-box"},CA={class:"chip-group-topic"},QA={class:"box-chip"},kA={class:"chip-group"},YA={key:0},MA=["value"];function UA(A,s,e,t,o,r){return(0,n.wg)(),(0,n.iD)("div",IA,[(0,n._)("div",CA,(0,i.zw)(A.topic),1),(0,n._)("div",QA,[(0,n._)("div",kA,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(A.number,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"chip",key:e},[1===e?((0,n.wg)(),(0,n.iD)("div",YA,(0,i.zw)(A.chipsPlaceholder),1)):(0,n.kq)("",!0),1!==e?((0,n.wg)(),(0,n.iD)("div",{key:1,onClick:s[0]||(s[0]=s=>A.clickNumber(s)),value:e},(0,i.zw)(e),9,MA)):(0,n.kq)("",!0)])))),128))])])])}var zA=(0,n.aZ)({name:"ChipGroup",props:{number:Number,topic:String,chipsPlaceholder:String},setup(){const A=$();return{store:A}},methods:{clickNumber(A){const s=A.target,e=Number(s.textContent);this.$emit("clickNumber",e)}}});const EA=(0,p.Z)(zA,[["render",UA],["__scopeId","data-v-c15ba296"]]);var FA=EA,xA=(0,n.aZ)({name:"ItemsPage",components:{ComparisonTable:DA,ChipGroup:FA},setup(){const A=$();return{store:A}},props:{query:Object},data(){return{"defultNumberСomparison":3,"maxNumberСomparison":6,chipsPlaceholder:"Отобразить товары: "}},computed:{gettedItems(){return this.store.getters.displayItems},numberItems(){return Object.keys(this.gettedItems).length},isLoadingItems(){return 0===this.numberItems}},async mounted(){this.query&&this.store.dispatch("downloadItems",this.query.url)},methods:{"changeNumberСomparison"(A){const s=this.numberItems;if(A>this.numberItems)for(let e=A;e>s;e--)this.store.commit("addDisplayItem");if(A<this.numberItems)for(let e=A;e<s;e++)this.store.commit("deleteDisplayItem")}}});const OA=(0,p.Z)(xA,[["render",D],["__scopeId","data-v-db12c22a"]]);var KA=OA,NA=(0,n.aZ)({name:"App",components:{SideBar:y,ComprasionItems:KA},data(){return{menu:{left:[{text:"Каталог"}],right:[{text:"Сравнение",style:{uppercase:!0}},{text:"Личный кабинет",icoUrl:e(8793)}]},items:[{name:"Смартфоны",url:"https://markgrig.github.io/comparisonApp/db/smartphones.json"},{name:"Смартфоны",url:"https://dummyjson.com/products"},{name:"Смартфоны",url:"https://api.device-specs.io/api/smartphones",headers:{Authorization:"bearer XXX","Content-Type":"application/json"}}]}}});const PA=(0,p.Z)(NA,[["render",o]]);var TA=PA;const jA=(0,t.ri)(TA);jA.use(AA,_),jA.mount("#app")},7903:function(A){A.exports="data:image/png;base64,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"},3439:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFBSURBVHgBrZNPTsJAFMa/Nx1Yc4TeADYQl3IDlgZNhLVi5ATiCRD/rMWFhKU3qEsDJuoJ7BG6RjrPN0BjQ9pEpvxWM9Pml2++vhK2aNydXAE8MIib773pK3ZEZ8mYEekYIRxQWTLE3HzrT0M4QFmyeX/yCUcokW22LzDmC6549C0d8uXfCbegqAVXWD4KM/eJ6HGVDzwyDOfrMqlw1WH9tt3ZSCNW0uFZgQ6Txb6klN78V1obdvyy9xPI0A1m589P6WcqvZlfTMbSaVfKjbyFiZBDqbyoSJSKvDdu3B+f5ibchfpDu0aGAllaeSdJ6izMk9LB8OgwhvLhikdVIqxnWaTaaC8oFDMN48YOdpcYPhwxSlWV/cPWxlGhcDI+tZJeyg25IrLrWW8ycBZmyey5k9AOtsg+tmUWBQe0XvpZMssv+2CihUa/FywAAAAASUVORK5CYII="},5277:function(A,s,e){A.exports=e.p+"img/greenCheckMark.47adec7c.png"},8793:function(A){A.exports="data:image/jpeg;base64,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"},6135:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAYAAAB7/H1+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgBpZNRTgJBDIbbWUg0BjM3cI2BxDe8gdyAfQN8YDmB8QTqCfQG4AvytngCOAJvJoiBI2xcDYZlWzskSwAXEGkySWfa/5s2nUFdGtqRijoI2Phont3DHnZceb8GIDcKuaamMLXlzGbgOwncwj/NaIXxyIB5lcYT9dnKdon5xgRn8Ku3B9jRMpVB3WhnG4Ja0My+4DxYHhQBoS6ulhva1jio+e0LfxNQF4c6Oow80V3K1mdixxRqYriYeFTp5xUoT1wbgXsTSjnfrdNRIlRmQ2rqmdalkBEhOV/NXC+O42/Bqwwz3TFwWaOQrMIqPB74LEegIYeSc76Uo1bBviRYFBYM1AjTAjgQ0GJXMdR0lQRNrHhelTvUNIk6DJA391FIBbRQy/KkSs0M3dQ4cNbNYS04tky53wBU1aVDpqfgOedu0inYYgYgT2n+cYy/DbqTZUp9V55k9a/5P2OcpoDW6f6cAAAAAElFTkSuQmCC"}},s={};function e(t){var n=s[t];if(void 0!==n)return n.exports;var o=s[t]={exports:{}};return A[t](o,o.exports,e),o.exports}e.m=A,function(){var A=[];e.O=function(s,t,n,o){if(!t){var i=1/0;for(h=0;h<A.length;h++){t=A[h][0],n=A[h][1],o=A[h][2];for(var r=!0,c=0;c<t.length;c++)(!1&o||i>=o)&&Object.keys(e.O).every((function(A){return e.O[A](t[c])}))?t.splice(c--,1):(r=!1,o<i&&(i=o));if(r){A.splice(h--,1);var a=n();void 0!==a&&(s=a)}}return s}o=o||0;for(var h=A.length;h>0&&A[h-1][2]>o;h--)A[h]=A[h-1];A[h]=[t,n,o]}}(),function(){e.n=function(A){var s=A&&A.__esModule?function(){return A["default"]}:function(){return A};return e.d(s,{a:s}),s}}(),function(){e.d=function(A,s){for(var t in s)e.o(s,t)&&!e.o(A,t)&&Object.defineProperty(A,t,{enumerable:!0,get:s[t]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){e.o=function(A,s){return Object.prototype.hasOwnProperty.call(A,s)}}(),function(){e.p="/comparisonApp/dist/"}(),function(){var A={143:0};e.O.j=function(s){return 0===A[s]};var s=function(s,t){var n,o,i=t[0],r=t[1],c=t[2],a=0;if(i.some((function(s){return 0!==A[s]}))){for(n in r)e.o(r,n)&&(e.m[n]=r[n]);if(c)var h=c(e)}for(s&&s(t);a<i.length;a++)o=i[a],e.o(A,o)&&A[o]&&A[o][0](),A[o]=0;return e.O(h)},t=self["webpackChunkcomparison"]=self["webpackChunkcomparison"]||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))}();var t=e.O(void 0,[998],(function(){return e(3672)}));t=e.O(t)})();
//# sourceMappingURL=app.72361b47.js.map