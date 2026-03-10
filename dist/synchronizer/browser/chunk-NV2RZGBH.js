import{A as $,C as qt,G as ve,H as we,K as xe,M as Ce,N as ft,P as Se,S as Ot,T as Lt,U as lt,V as Te,W as Ee,a as rt,b as Rt,c as ue,d as st,e as pe,ea as Ie,f as he,fa as j,g as be,h as fe,ha as V,i as ge,ia as Ut,ja as Y,ka as at,l as O,la as x,ma as _e,o as Wt,p as bt,q as me,s as Dt,w as jt,z as ye}from"./chunk-G76ABESE.js";import{k as ae,l as de,m as ce,n as Q,r as it,s as Ht}from"./chunk-3EEMYDF2.js";import{$ as vt,Ab as oe,Bb as ie,Cb as N,Db as nt,Eb as ot,Fb as ut,Hb as pt,Ia as C,Ib as ht,Kb as re,M as S,Mb as se,N as P,Na as Ct,Nb as T,Oa as St,Ob as _t,P as M,Pb as kt,R as p,Sa as Tt,Ta as tt,Va as ee,Vb as E,Y as K,Ya as k,Yb as Vt,Za as B,_ as Jt,_a as D,ab as v,bb as et,cb as Z,ea as wt,ia as te,ib as G,ic as F,ja as b,jc as A,la as J,lc as y,mc as le,pa as xt,pb as f,qb as Mt,qc as g,rb as Ft,rc as W,sb as dt,tb as $t,ub as zt,vb as ct,wb as Et,xb as It,yb as ne}from"./chunk-TPI5ET22.js";import{a as u,b as yt,c as Kt}from"./chunk-7CGTOI24.js";var Pt={};function X(o="pui_id_"){return Object.hasOwn(Pt,o)||(Pt[o]=0),Pt[o]++,`${o}${Pt[o]}`}function q(...o){if(o){let i=[];for(let t=0;t<o.length;t++){let e=o[t];if(!e)continue;let n=typeof e;if(n==="string"||n==="number")i.push(e);else if(n==="object"){let r=Array.isArray(e)?[q(...e)]:Object.entries(e).map(([s,l])=>l?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}var nn=Object.defineProperty,ke=Object.getOwnPropertySymbols,on=Object.prototype.hasOwnProperty,rn=Object.prototype.propertyIsEnumerable,De=(o,i,t)=>i in o?nn(o,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[i]=t,Oe=(o,i)=>{for(var t in i||(i={}))on.call(i,t)&&De(o,t,i[t]);if(ke)for(var t of ke(i))rn.call(i,t)&&De(o,t,i[t]);return o};function Le(...o){if(o){let i=[];for(let t=0;t<o.length;t++){let e=o[t];if(!e)continue;let n=typeof e;if(n==="string"||n==="number")i.push(e);else if(n==="object"){let r=Array.isArray(e)?[Le(...e)]:Object.entries(e).map(([s,l])=>l?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function sn(o){return typeof o=="function"&&"call"in o&&"apply"in o}function Zt(...o){return o?.reduce((i,t={})=>{for(let e in t){let n=t[e];if(e==="style")i.style=Oe(Oe({},i.style),t.style);else if(e==="class"||e==="className")i[e]=Le(i[e],t[e]);else if(sn(n)){let r=i[e];i[e]=r?(...s)=>{r(...s),n(...s)}:n}else i[e]=n}return i},{})}var Pe=(()=>{class o extends x{name="common";static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(o)))(n||o)}})();static \u0275prov=S({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),H=new M("PARENT_INSTANCE"),I=(()=>{class o{document=p(vt);platformId=p(xt);el=p(J);injector=p(Jt);cd=p(le);renderer=p(Tt);config=p(_e);$parentInstance=p(H,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=p(Pe);baseStyle=p(x);scopedStyleEl;parent=this.$params.parent;cn=q;_themeScopedListener;dt=y();unstyled=y();pt=y();ptOptions=y();$attrSelector=X("pc");get $name(){return this.componentName||this.constructor?.name?.replace(/^_/,"")||"UnknownComponent"}get $hostName(){return this.hostName}$unstyled=F(()=>this.unstyled()!==void 0?this.unstyled():this.config?.unstyled()||!1);$pt=F(()=>Ot(this.pt()||this.directivePT(),this.$params));directivePT=wt(void 0);get $globalPT(){return this._getPT(this.config?.pt(),void 0,t=>Ot(t,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,t=>this._getOptionValue(t,this.$hostName||this.$name,this.$params)||Ot(t,this.$params))}get $style(){return u(u({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let t=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:t}}}onInit(){}onChanges(t){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){A(t=>{this.document&&!Ht(this.platformId)&&(V.off("theme:change",this._themeScopedListener),this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener(this._themeScopedListener)):this._unloadScopedThemeStyles()),t(()=>{V.off("theme:change",this._themeScopedListener)})}),A(t=>{this.document&&!Ht(this.platformId)&&(V.off("theme:change",this._loadCoreStyles),this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))),t(()=>{V.off("theme:change",this._loadCoreStyles)})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(t){this.onChanges(t),this._hook("onChanges",t)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.el?.nativeElement?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(t,...e){return Ce(t)?t(...e):Zt(...e)}_getHostInstance(t){return t?this.$hostName?this.$name===this.$hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0}_getPropValue(t){return this[t]||this._getHostInstance(this)?.[t]}_getOptionValue(t,e="",n={}){return Te(t,e,n)}_hook(t,...e){if(!this.$hostName){let n=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${t}`),r=this._useDefaultPT(this._getOptionValue,`hooks.${t}`);n?.(...e),r?.(...e)}}_load(){at.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),at.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener(()=>this._load())}_loadGlobalStyles(){let t=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);ft(t)&&this.baseStyle.load(t,u({name:"global"},this.$styleOptions))}_loadCoreStyles(){!at.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),at.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!Y.isStyleNameLoaded("common")){let{primitive:t,semantic:e,global:n,style:r}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,u({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(e?.css,u({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,u({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(u({name:"global-style"},this.$styleOptions),r),Y.setLoadedStyleName("common")}if(!Y.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:t,style:e}=this.$style?.getComponentTheme?.()||{};this.$style?.load(t,u({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(u({name:`${this.$style?.name}-style`},this.$styleOptions),e),Y.setLoadedStyleName(this.$style?.name)}if(!Y.isStyleNameLoaded("layer-order")){let t=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,u({name:"layer-order",first:!0},this.$styleOptions)),Y.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(t){let{css:e}=this.$style?.getPresetTheme?.(t,`[${this.$attrSelector}]`)||{},n=this.$style?.load(e,u({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){at.clearLoadedStyleNames(),V.on("theme:change",t.bind(this))}_removeThemeListeners(){V.off("theme:change",this._loadCoreStyles),V.off("theme:change",this._load),V.off("theme:change",this._themeScopedListener)}_getPTValue(t={},e="",n={},r=!0){let s=/./g.test(e)&&!!n[e.split(".")[0]],{mergeSections:l=!0,mergeProps:a=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},c=r?s?this._useGlobalPT(this._getPTClassValue,e,n):this._useDefaultPT(this._getPTClassValue,e,n):void 0,d=s?void 0:this._usePT(this._getPT(t,this.$hostName||this.$name),this._getPTClassValue,e,yt(u({},n),{global:c||{}})),h=this._getPTDatasets(e);return l||!l&&d?a?this._mergeProps(a,c,d,h):u(u(u({},c),d),h):u(u({},d),h)}_getPTDatasets(t=""){let e="data-pc-",n=t==="root"&&ft(this.$pt()?.["data-pc-section"]);return t!=="transition"&&yt(u({},t==="root"&&yt(u({[`${e}name`]:lt(n?this.$pt()?.["data-pc-section"]:this.$name)},n&&{[`${e}extend`]:lt(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${e}section`]:lt(t.includes(".")?t.split(".").at(-1)??"":t)})}_getPTClassValue(t,e,n){let r=this._getOptionValue(t,e,n);return Lt(r)||Ee(r)?{class:r}:r}_getPT(t,e="",n){let r=(s,l=!1)=>{let a=n?n(s):s,c=lt(e),d=lt(this.$hostName||this.$name);return(l?c!==d?a?.[c]:void 0:a?.[c])??a};return t?.hasOwnProperty("_usept")?{_usept:t._usept,originalValue:r(t.originalValue),value:r(t.value)}:r(t,!0)}_usePT(t,e,n,r){let s=l=>e?.call(this,l,n,r);if(t?.hasOwnProperty("_usept")){let{mergeSections:l=!0,mergeProps:a=!1}=t._usept||this.config?.ptOptions()||{},c=s(t.originalValue),d=s(t.value);return c===void 0&&d===void 0?void 0:Lt(d)?d:Lt(c)?c:l||!l&&d?a?this._mergeProps(a,c,d):u(u({},c),d):d}return s(t)}_useGlobalPT(t,e,n){return this._usePT(this.$globalPT,t,e,n)}_useDefaultPT(t,e,n){return this._usePT(this.$defaultPT,t,e,n)}ptm(t="",e={}){return this._getPTValue(this.$pt(),t,u(u({},this.$params),e))}ptms(t,e={}){return t.reduce((n,r)=>(n=Zt(n,this.ptm(r,e))||{},n),{})}ptmo(t={},e="",n={}){return this._getPTValue(t,e,u({instance:this},n),!1)}cx(t,e={}){return this.$unstyled()?void 0:q(this._getOptionValue(this.$style.classes,t,u(u({},this.$params),e)))}sx(t="",e=!0,n={}){if(e){let r=this._getOptionValue(this.$style.inlineStyles,t,u(u({},this.$params),n)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,t,u(u({},this.$params),n));return u(u({},s),r)}}static \u0275fac=function(e){return new(e||o)};static \u0275dir=D({type:o,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[E([Pe,x]),te]})}return o})();var _=(()=>{class o{el;renderer;pBind=y(void 0);_attrs=wt(void 0);attrs=F(()=>this._attrs()||this.pBind());styles=F(()=>this.attrs()?.style);classes=F(()=>q(this.attrs()?.class));listeners=[];constructor(t,e){this.el=t,this.renderer=e,A(()=>{let l=this.attrs()||{},{style:n,class:r}=l,s=Kt(l,["style","class"]);for(let[a,c]of Object.entries(s))if(a.startsWith("on")&&typeof c=="function"){let d=a.slice(2).toLowerCase();if(!this.listeners.some(h=>h.eventName===d)){let h=this.renderer.listen(this.el.nativeElement,d,c);this.listeners.push({eventName:d,unlisten:h})}}else c==null?this.renderer.removeAttribute(this.el.nativeElement,a):(this.renderer.setAttribute(this.el.nativeElement,a,c.toString()),a in this.el.nativeElement&&(this.el.nativeElement[a]=c))})}ngOnDestroy(){this.clearListeners()}setAttrs(t){Se(this._attrs(),t)||this._attrs.set(t)}clearListeners(){this.listeners.forEach(({unlisten:t})=>t()),this.listeners=[]}static \u0275fac=function(e){return new(e||o)(tt(J),tt(Tt))};static \u0275dir=D({type:o,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(e,n){e&2&&(se(n.styles()),T(n.classes()))},inputs:{pBind:[1,"pBind"]}})}return o})(),gt=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=B({type:o});static \u0275inj=P({})}return o})();var Qt=(()=>{class o{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=" "+e)}static addMultipleClasses(t,e){if(t&&e)if(t.classList){let n=e.trim().split(" ");for(let r=0;r<n.length;r++)t.classList.add(n[r])}else{let n=e.split(" ");for(let r=0;r<n.length;r++)t.className+=" "+n[r]}}static removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,e){t&&e&&[e].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,e){return t&&e?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}static find(t,e){return Array.from(t.querySelectorAll(e))}static findSingle(t,e){return this.isElement(t)?t.querySelector(e):null}static index(t){let e=t.parentNode.childNodes,n=0;for(var r=0;r<e.length;r++){if(e[r]==t)return n;e[r].nodeType==1&&n++}return-1}static indexWithinGroup(t,e){let n=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<n.length;s++){if(n[s]==t)return r;n[s].attributes&&n[s].attributes[e]&&n[s].nodeType==1&&r++}return-1}static appendOverlay(t,e,n="self"){n!=="self"&&t&&e&&this.appendChild(t,e)}static alignOverlay(t,e,n="self",r=!0){t&&e&&(r&&(t.style.minWidth=`${o.getOuterWidth(e)}px`),n==="self"?this.relativePosition(t,e):this.absolutePosition(t,e))}static relativePosition(t,e,n=!0){let r=U=>{if(U)return getComputedStyle(U).getPropertyValue("position")==="relative"?U:r(U.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),l=e.offsetHeight,a=e.getBoundingClientRect(),c=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),h=this.getViewport(),w=r(t)?.getBoundingClientRect()||{top:-1*c,left:-1*d},L,R,mt="top";a.top+l+s.height>h.height?(L=a.top-w.top-s.height,mt="bottom",a.top+L<0&&(L=-1*a.top)):(L=l+a.top-w.top,mt="top");let Xt=a.left+s.width-h.width,en=a.left-w.left;if(s.width>h.width?R=(a.left-w.left)*-1:Xt>0?R=en-Xt:R=a.left-w.left,t.style.top=L+"px",t.style.left=R+"px",t.style.transformOrigin=mt,n){let U=he(/-anchor-gutter$/)?.value;t.style.marginTop=mt==="bottom"?`calc(${U??"2px"} * -1)`:U??""}}static absolutePosition(t,e,n=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,l=r.width,a=e.offsetHeight,c=e.offsetWidth,d=e.getBoundingClientRect(),h=this.getWindowScrollTop(),m=this.getWindowScrollLeft(),w=this.getViewport(),L,R;d.top+a+s>w.height?(L=d.top+h-s,t.style.transformOrigin="bottom",L<0&&(L=h)):(L=a+d.top+h,t.style.transformOrigin="top"),d.left+l>w.width?R=Math.max(0,d.left+m+c-l):R=d.left+m,t.style.top=L+"px",t.style.left=R+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))}static getScrollableParents(t){let e=[];if(t){let n=this.getParents(t),r=/(auto|scroll)/,s=l=>{let a=window.getComputedStyle(l,null);return r.test(a.getPropertyValue("overflow"))||r.test(a.getPropertyValue("overflowX"))||r.test(a.getPropertyValue("overflowY"))};for(let l of n){let a=l.nodeType===1&&l.dataset.scrollselectors;if(a){let c=a.split(",");for(let d of c){let h=this.findSingle(l,d);h&&s(h)&&e.push(h)}}l.nodeType!==9&&s(l)&&e.push(l)}}return e}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementDimensions(t){let e={};return t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",e}static scrollInView(t,e){let n=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=n?parseFloat(n):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),l=s?parseFloat(s):0,a=t.getBoundingClientRect(),d=e.getBoundingClientRect().top+document.body.scrollTop-(a.top+document.body.scrollTop)-r-l,h=t.scrollTop,m=t.clientHeight,w=this.getOuterHeight(e);d<0?t.scrollTop=h+d:d+w>m&&(t.scrollTop=h+d-m+w)}static fadeIn(t,e){t.style.opacity=0;let n=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-n)/e,t.style.opacity=r,n=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(t,e){var n=1,r=50,s=e,l=r/s;let a=setInterval(()=>{n=n-l,n<=0&&(n=0,clearInterval(a)),t.style.opacity=n},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,e){var n=Element.prototype,r=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,e)}static getOuterWidth(t,e){let n=t.offsetWidth;if(e){let r=getComputedStyle(t);n+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return n}static getHorizontalPadding(t){let e=getComputedStyle(t);return parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)}static getHorizontalMargin(t){let e=getComputedStyle(t);return parseFloat(e.marginLeft)+parseFloat(e.marginRight)}static innerWidth(t){let e=t.offsetWidth,n=getComputedStyle(t);return e+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}static width(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}static getInnerHeight(t){let e=t.offsetHeight,n=getComputedStyle(t);return e+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),e}static getOuterHeight(t,e){let n=t.offsetHeight;if(e){let r=getComputedStyle(t);n+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return n}static getHeight(t){let e=t.offsetHeight,n=getComputedStyle(t);return e-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),e}static getWidth(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),e}static getViewport(){let t=window,e=document,n=e.documentElement,r=e.getElementsByTagName("body")[0],s=t.innerWidth||n.clientWidth||r.clientWidth,l=t.innerHeight||n.clientHeight||r.clientHeight;return{width:s,height:l}}static getOffset(t){var e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,e){let n=t.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(e,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return!0;var n=t.indexOf("Trident/");if(n>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e&&e.el&&e.el.nativeElement)e.el.nativeElement.appendChild(t);else throw"Cannot append "+e+" to "+t}static removeChild(t,e){if(this.isElement(e))e.removeChild(t);else if(e.el&&e.el.nativeElement)e.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+e}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let e=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let e=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e}static invokeElementMethod(t,e,n){t[e].apply(t,n)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,e){t&&document.activeElement!==t&&t.focus(e)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,e=""){let n=this.find(t,this.getFocusableSelectorString(e)),r=[];for(let s of n){let l=getComputedStyle(s);this.isVisible(s)&&l.display!="none"&&l.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,e=""){let n=this.findSingle(t,this.getFocusableSelectorString(e));if(n){let r=getComputedStyle(n);if(this.isVisible(n)&&r.display!="none"&&r.visibility!="hidden")return n}return null}static getFirstFocusableElement(t,e=""){let n=this.getFocusableElements(t,e);return n.length>0?n[0]:null}static getLastFocusableElement(t,e){let n=this.getFocusableElements(t,e);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(t,e=!1){let n=o.getFocusableElements(t),r=0;if(n&&n.length>0){let s=n.indexOf(n[0].ownerDocument.activeElement);e?s==-1||s===0?r=n.length-1:r=s-1:s!=-1&&s!==n.length-1&&(r=s+1)}return n[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,e){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return e?.nextElementSibling;case"@prev":return e?.previousElementSibling;case"@parent":return e?.parentElement;case"@grandparent":return e?.parentElement?.parentElement;default:let n=typeof t;if(n==="string")return document.querySelector(t);if(n==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(l=>!!(l&&l.constructor&&l.call&&l.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,e){if(t){let n=t.getAttribute(e);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,e={},...n){if(t){let r=document.createElement(t);return this.setAttributes(r,e),r.append(...n),r}}static setAttribute(t,e="",n){this.isElement(t)&&n!==null&&n!==void 0&&t.setAttribute(e,n)}static setAttributes(t,e={}){if(this.isElement(t)){let n=(r,s)=>{let l=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((a,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")a.push(c);else if(d==="object"){let h=Array.isArray(c)?n(r,c):Object.entries(c).map(([m,w])=>r==="style"&&(w||w===0)?`${m.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${w}`:w?m:void 0);a=h.length?a.concat(h.filter(m=>!!m)):a}}return a},l)};Object.entries(e).forEach(([r,s])=>{if(s!=null){let l=r.match(/^on(.+)/);l?t.addEventListener(l[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(n("class",s))].join(" ").trim():r==="style"?n("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,e=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}}return o})();function Io(){ue({variableName:Ut("scrollbar.width").name})}function _o(){pe({variableName:Ut("scrollbar.width").name})}var Bt=class{element;listener;scrollableParents;constructor(i,t=()=>{}){this.element=i,this.listener=t}bindScrollListener(){this.scrollableParents=Qt.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Be=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var ln=`
    ${Be}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,an={root:({instance:o})=>{let i=typeof o.value=="function"?o.value():o.value,t=typeof o.size=="function"?o.size():o.size,e=typeof o.badgeSize=="function"?o.badgeSize():o.badgeSize,n=typeof o.severity=="function"?o.severity():o.severity;return["p-badge p-component",{"p-badge-circle":ft(i)&&String(i).length===1,"p-badge-dot":xe(i),"p-badge-sm":t==="small"||e==="small","p-badge-lg":t==="large"||e==="large","p-badge-xl":t==="xlarge"||e==="xlarge","p-badge-info":n==="info","p-badge-success":n==="success","p-badge-warn":n==="warn","p-badge-danger":n==="danger","p-badge-secondary":n==="secondary","p-badge-contrast":n==="contrast"}]}},Ne=(()=>{class o extends x{name="badge";style=ln;classes=an;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(o)))(n||o)}})();static \u0275prov=S({token:o,factory:o.\u0275fac})}return o})();var Ae=new M("BADGE_INSTANCE");var Yt=(()=>{class o extends I{$pcBadge=p(Ae,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(_,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=y();badgeSize=y();size=y();severity=y();value=y();badgeDisabled=y(!1,{transform:g});_componentStyle=p(Ne);static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(o)))(n||o)}})();static \u0275cmp=k({type:o,selectors:[["p-badge"]],hostVars:4,hostBindings:function(e,n){e&2&&(T(n.cn(n.cx("root"),n.styleClass())),re("display",n.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[E([Ne,{provide:Ae,useExisting:o},{provide:H,useExisting:o}]),et([_]),v],decls:1,vars:1,template:function(e,n){e&1&&_t(0),e&2&&kt(n.value())},dependencies:[Q,j,gt],encapsulation:2,changeDetection:0})}return o})(),Me=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=B({type:o});static \u0275inj=P({imports:[Yt,j,j]})}return o})();var cn=["*"],un=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Fe=(()=>{class o extends x{name="baseicon";css=un;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(o)))(n||o)}})();static \u0275prov=S({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Nt=(()=>{class o extends I{spin=!1;_componentStyle=p(Fe);getClassNames(){return q("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(o)))(n||o)}})();static \u0275cmp=k({type:o,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(e,n){e&2&&T(n.getClassNames())},inputs:{spin:[2,"spin","spin",g]},features:[E([Fe]),v],ngContentSelectors:cn,decls:1,vars:0,template:function(e,n){e&1&&(nt(),ot(0))},encapsulation:2,changeDetection:0})}return o})();var pn=["data-p-icon","spinner"],$e=(()=>{class o extends Nt{pathId;onInit(){this.pathId="url(#"+X()+")"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(o)))(n||o)}})();static \u0275cmp=k({type:o,selectors:[["","data-p-icon","spinner"]],features:[v],attrs:pn,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(e,n){e&1&&(K(),$t(0,"g"),ct(1,"path",0),zt(),$t(2,"defs")(3,"clipPath",1),ct(4,"rect",2),zt()()),e&2&&(G("clip-path",n.pathId),C(3),oe("id",n.pathId))},encapsulation:2})}return o})();var hn=["data-p-icon","times"],ri=(()=>{class o extends Nt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(o)))(n||o)}})();static \u0275cmp=k({type:o,selectors:[["","data-p-icon","times"]],features:[v],attrs:hn,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(e,n){e&1&&(K(),ct(0,"path",0))},encapsulation:2})}return o})();var ze=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var bn=`
    ${ze}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,fn={root:"p-ink"},Ve=(()=>{class o extends x{name="ripple";style=bn;classes=fn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(o)))(n||o)}})();static \u0275prov=S({token:o,factory:o.\u0275fac})}return o})();var He=(()=>{class o extends I{zone=p(St);_componentStyle=p(Ve);animationListener;mouseDownListener;timeout;constructor(){super(),A(()=>{it(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(t){let e=this.getInk();if(!e||this.document.defaultView?.getComputedStyle(e,null).display==="none")return;if(st(e,"p-ink-active"),!jt(e)&&!qt(e)){let l=Math.max(O(this.el.nativeElement),$(this.el.nativeElement));e.style.height=l+"px",e.style.width=l+"px"}let n=ye(this.el.nativeElement),r=t.pageX-n.left+this.document.body.scrollTop-qt(e)/2,s=t.pageY-n.top+this.document.body.scrollLeft-jt(e)/2;this.renderer.setStyle(e,"top",s+"px"),this.renderer.setStyle(e,"left",r+"px"),Rt(e,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&st(l,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let e=0;e<t.length;e++)if(typeof t[e].className=="string"&&t[e].className.indexOf("p-ink")!==-1)return t[e];return null}resetInk(){let t=this.getInk();t&&st(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),st(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ve(t))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(e){return new(e||o)};static \u0275dir=D({type:o,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[E([Ve]),v]})}return o})();var Re=(()=>{class o extends I{autofocus=!1;focused=!1;platformId=p(xt);document=p(vt);host=p(J);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){it(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=Qt.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(o)))(n||o)}})();static \u0275dir=D({type:o,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[v]})}return o})();var gn=["*"],mn={root:"p-fluid"},We=(()=>{class o extends x{name="fluid";classes=mn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(o)))(n||o)}})();static \u0275prov=S({token:o,factory:o.\u0275fac})}return o})();var je=new M("FLUID_INSTANCE"),qe=(()=>{class o extends I{$pcFluid=p(je,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(_,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=p(We);static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(o)))(n||o)}})();static \u0275cmp=k({type:o,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(e,n){e&2&&T(n.cx("root"))},features:[E([We,{provide:je,useExisting:o},{provide:H,useExisting:o}]),et([_]),v],ngContentSelectors:gn,decls:1,vars:0,template:function(e,n){e&1&&(nt(),ot(0))},dependencies:[Q],encapsulation:2,changeDetection:0})}return o})();var Ue=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var yn=["content"],vn=["loadingicon"],wn=["icon"],xn=["*"],Qe=(o,i)=>({class:o,pt:i});function Cn(o,i){o&1&&ne(0)}function Sn(o,i){if(o&1&&dt(0,"span",7),o&2){let t=N(3);T(t.cn(t.cx("loadingIcon"),"pi-spin",t.loadingIcon)),f("pBind",t.ptm("loadingIcon")),G("aria-hidden",!0)}}function Tn(o,i){if(o&1&&(K(),dt(0,"svg",8)),o&2){let t=N(3);T(t.cn(t.cx("loadingIcon"),t.spinnerIconClass())),f("pBind",t.ptm("loadingIcon"))("spin",!0),G("aria-hidden",!0)}}function En(o,i){if(o&1&&(Et(0),Z(1,Sn,1,4,"span",3)(2,Tn,1,5,"svg",6),It()),o&2){let t=N(2);C(),f("ngIf",t.loadingIcon),C(),f("ngIf",!t.loadingIcon)}}function In(o,i){}function _n(o,i){if(o&1&&Z(0,In,0,0,"ng-template",9),o&2){let t=N(2);f("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function kn(o,i){if(o&1&&(Et(0),Z(1,En,3,2,"ng-container",2)(2,_n,1,1,null,5),It()),o&2){let t=N();C(),f("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),C(),f("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",Vt(3,Qe,t.cx("loadingIcon"),t.ptm("loadingIcon")))}}function Dn(o,i){if(o&1&&dt(0,"span",7),o&2){let t=N(2);T(t.cn("icon",t.iconClass())),f("pBind",t.ptm("icon"))}}function On(o,i){}function Ln(o,i){if(o&1&&Z(0,On,0,0,"ng-template",9),o&2){let t=N(2);f("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Pn(o,i){if(o&1&&(Et(0),Z(1,Dn,1,3,"span",3)(2,Ln,1,1,null,5),It()),o&2){let t=N();C(),f("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),C(),f("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Vt(3,Qe,t.cx("icon"),t.ptm("icon")))}}function Bn(o,i){if(o&1&&(Mt(0,"span",7),_t(1),Ft()),o&2){let t=N();T(t.cx("label")),f("pBind",t.ptm("label")),G("aria-hidden",t.icon&&!t.label),C(),kt(t.label)}}function Nn(o,i){if(o&1&&dt(0,"p-badge",10),o&2){let t=N();f("value",t.badge)("severity",t.badgeSeverity)("pt",t.ptm("pcBadge"))}}var An={root:({instance:o})=>["p-button p-component",{"p-button-icon-only":(o.icon||o.buttonProps?.icon||o.iconTemplate||o._iconTemplate||o.loadingIcon||o.loadingIconTemplate||o._loadingIconTemplate)&&!o.label&&!o.buttonProps?.label,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading||o.buttonProps?.loading,"p-button-link":o.link||o.buttonProps?.link,[`p-button-${o.severity||o.buttonProps?.severity}`]:o.severity||o.buttonProps?.severity,"p-button-raised":o.raised||o.buttonProps?.raised,"p-button-rounded":o.rounded||o.buttonProps?.rounded,"p-button-text":o.text||o.variant==="text"||o.buttonProps?.text||o.buttonProps?.variant==="text","p-button-outlined":o.outlined||o.variant==="outlined"||o.buttonProps?.outlined||o.buttonProps?.variant==="outlined","p-button-sm":o.size==="small"||o.buttonProps?.size==="small","p-button-lg":o.size==="large"||o.buttonProps?.size==="large","p-button-plain":o.plain||o.buttonProps?.plain,"p-button-fluid":o.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:o})=>["p-button-icon",{[`p-button-icon-${o.iconPos||o.buttonProps?.iconPos}`]:o.label||o.buttonProps?.label,"p-button-icon-left":(o.iconPos==="left"||o.buttonProps?.iconPos==="left")&&o.label||o.buttonProps?.label,"p-button-icon-right":(o.iconPos==="right"||o.buttonProps?.iconPos==="right")&&o.label||o.buttonProps?.label},o.icon,o.buttonProps?.icon],spinnerIcon:({instance:o})=>Object.entries(o.iconClass()).filter(([,i])=>!!i).reduce((i,[t])=>i+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},Ze=(()=>{class o extends x{name="button";style=Ue;classes=An;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(o)))(n||o)}})();static \u0275prov=S({token:o,factory:o.\u0275fac})}return o})();var Ge=new M("BUTTON_INSTANCE");var Mn=(()=>{class o extends I{hostName="";$pcButton=p(Ge,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(_,{self:!0});_componentStyle=p(Ze);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=y(void 0,{transform:g});onClick=new Ct;onFocus=new Ct;onBlur=new Ct;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=p(qe,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[e])=>t+` ${e}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,[this.icon]:!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(o)))(n||o)}})();static \u0275cmp=k({type:o,selectors:[["p-button"]],contentQueries:function(e,n,r){if(e&1&&(ut(r,yn,5),ut(r,vn,5),ut(r,wn,5),ut(r,Ie,4)),e&2){let s;pt(s=ht())&&(n.contentTemplate=s.first),pt(s=ht())&&(n.loadingIconTemplate=s.first),pt(s=ht())&&(n.iconTemplate=s.first),pt(s=ht())&&(n.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",g],raised:[2,"raised","raised",g],rounded:[2,"rounded","rounded",g],text:[2,"text","text",g],plain:[2,"plain","plain",g],outlined:[2,"outlined","outlined",g],link:[2,"link","link",g],tabindex:[2,"tabindex","tabindex",W],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",g],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",g],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[E([Ze,{provide:Ge,useExisting:o},{provide:H,useExisting:o}]),et([_]),v],ngContentSelectors:xn,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt"]],template:function(e,n){e&1&&(nt(),Mt(0,"button",0),ie("click",function(s){return n.onClick.emit(s)})("focus",function(s){return n.onFocus.emit(s)})("blur",function(s){return n.onBlur.emit(s)}),ot(1),Z(2,Cn,1,0,"ng-container",1)(3,kn,3,6,"ng-container",2)(4,Pn,3,6,"ng-container",2)(5,Bn,2,5,"span",3)(6,Nn,1,3,"p-badge",4),Ft()),e&2&&(T(n.cn(n.cx("root"),n.styleClass,n.buttonProps==null?null:n.buttonProps.styleClass)),f("ngStyle",n.style||(n.buttonProps==null?null:n.buttonProps.style))("disabled",n.disabled||n.loading||(n.buttonProps==null?null:n.buttonProps.disabled))("pAutoFocus",n.autofocus||(n.buttonProps==null?null:n.buttonProps.autofocus))("pBind",n.ptm("root")),G("type",n.type||(n.buttonProps==null?null:n.buttonProps.type))("aria-label",n.ariaLabel||(n.buttonProps==null?null:n.buttonProps.ariaLabel))("tabindex",n.tabindex||(n.buttonProps==null?null:n.buttonProps.tabindex)),C(2),f("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),C(),f("ngIf",n.loading),C(),f("ngIf",!n.loading),C(),f("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.label),C(),f("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.badge))},dependencies:[Q,ae,ce,de,He,Re,$e,Me,Yt,j,_],encapsulation:2,changeDetection:0})}return o})(),pr=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=B({type:o});static \u0275inj=P({imports:[Q,Mn,j,j]})}return o})();var Ye=class o{static isArray(i,t=!0){return Array.isArray(i)&&(t||i.length!==0)}static isObject(i,t=!0){return typeof i=="object"&&!Array.isArray(i)&&i!=null&&(t||Object.keys(i).length!==0)}static equals(i,t,e){return e?this.resolveFieldData(i,e)===this.resolveFieldData(t,e):this.equalsByValue(i,t)}static equalsByValue(i,t){if(i===t)return!0;if(i&&t&&typeof i=="object"&&typeof t=="object"){var e=Array.isArray(i),n=Array.isArray(t),r,s,l;if(e&&n){if(s=i.length,s!=t.length)return!1;for(r=s;r--!==0;)if(!this.equalsByValue(i[r],t[r]))return!1;return!0}if(e!=n)return!1;var a=this.isDate(i),c=this.isDate(t);if(a!=c)return!1;if(a&&c)return i.getTime()==t.getTime();var d=i instanceof RegExp,h=t instanceof RegExp;if(d!=h)return!1;if(d&&h)return i.toString()==t.toString();var m=Object.keys(i);if(s=m.length,s!==Object.keys(t).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,m[r]))return!1;for(r=s;r--!==0;)if(l=m[r],!this.equalsByValue(i[l],t[l]))return!1;return!0}return i!==i&&t!==t}static resolveFieldData(i,t){if(i&&t){if(this.isFunction(t))return t(i);if(t.indexOf(".")==-1)return i[t];{let e=t.split("."),n=i;for(let r=0,s=e.length;r<s;++r){if(n==null)return null;n=n[e[r]]}return n}}else return null}static isFunction(i){return!!(i&&i.constructor&&i.call&&i.apply)}static reorderArray(i,t,e){let n;i&&t!==e&&(e>=i.length&&(e%=i.length,t%=i.length),i.splice(e,0,i.splice(t,1)[0]))}static insertIntoOrderedArray(i,t,e,n){if(e.length>0){let r=!1;for(let s=0;s<e.length;s++)if(this.findIndexInList(e[s],n)>t){e.splice(s,0,i),r=!0;break}r||e.push(i)}else e.push(i)}static findIndexInList(i,t){let e=-1;if(t){for(let n=0;n<t.length;n++)if(t[n]==i){e=n;break}}return e}static contains(i,t){if(i!=null&&t&&t.length){for(let e of t)if(this.equals(i,e))return!0}return!1}static removeAccents(i){return i&&(i=i.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),i}static isDate(i){return Object.prototype.toString.call(i)==="[object Date]"}static isEmpty(i){return i==null||i===""||Array.isArray(i)&&i.length===0||!this.isDate(i)&&typeof i=="object"&&Object.keys(i).length===0}static isNotEmpty(i){return!this.isEmpty(i)}static compare(i,t,e,n=1){let r=-1,s=this.isEmpty(i),l=this.isEmpty(t);return s&&l?r=0:s?r=n:l?r=-n:typeof i=="string"&&typeof t=="string"?r=i.localeCompare(t,e,{numeric:!0}):r=i<t?-1:i>t?1:0,r}static sort(i,t,e=1,n,r=1){let s=o.compare(i,t,n,e),l=e;return(o.isEmpty(i)||o.isEmpty(t))&&(l=r===1?e:r),l*s}static merge(i,t){if(!(i==null&&t==null)){{if((i==null||typeof i=="object")&&(t==null||typeof t=="object"))return u(u({},i||{}),t||{});if((i==null||typeof i=="string")&&(t==null||typeof t=="string"))return[i||"",t||""].join(" ")}return t||i}}static isPrintableCharacter(i=""){return this.isNotEmpty(i)&&i.length===1&&i.match(/\S| /)}static getItemValue(i,...t){return this.isFunction(i)?i(...t):i}static findLastIndex(i,t){let e=-1;if(this.isNotEmpty(i))try{e=i.findLastIndex(t)}catch{e=i.lastIndexOf([...i].reverse().find(t))}return e}static findLast(i,t){let e;if(this.isNotEmpty(i))try{e=i.findLast(t)}catch{e=[...i].reverse().find(t)}return e}static deepEquals(i,t){if(i===t)return!0;if(i&&t&&typeof i=="object"&&typeof t=="object"){var e=Array.isArray(i),n=Array.isArray(t),r,s,l;if(e&&n){if(s=i.length,s!=t.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(i[r],t[r]))return!1;return!0}if(e!=n)return!1;var a=i instanceof Date,c=t instanceof Date;if(a!=c)return!1;if(a&&c)return i.getTime()==t.getTime();var d=i instanceof RegExp,h=t instanceof RegExp;if(d!=h)return!1;if(d&&h)return i.toString()==t.toString();var m=Object.keys(i);if(s=m.length,s!==Object.keys(t).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,m[r]))return!1;for(r=s;r--!==0;)if(l=m[r],!this.deepEquals(i[l],t[l]))return!1;return!0}return i!==i&&t!==t}static minifyCSS(i){return i&&i.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(i){return this.isString(i)?i.replace(/(-|_)/g,"").toLowerCase():i}static isString(i,t=!0){return typeof i=="string"&&(t||i!=="")}},Xe=0;function fr(o="pn_id_"){return Xe++,`${o}${Xe}`}function Fn(){let o=[],i=(r,s)=>{let l=o.length>0?o[o.length-1]:{key:r,value:s},a=l.value+(l.key===r?0:s)+2;return o.push({key:r,value:a}),a},t=r=>{o=o.filter(s=>s.value!==r)},e=()=>o.length>0?o[o.length-1].value:0,n=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:n,set:(r,s,l)=>{s&&(s.style.zIndex=String(i(r,l)))},clear:r=>{r&&(t(n(r)),r.style.zIndex="")},getCurrent:()=>e(),generateZIndex:i,revertZIndex:t}}var At=Fn();var Ke=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`;var $n={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Je=(()=>{class o extends x{name="tooltip";style=Ke;classes=$n;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(o)))(n||o)}})();static \u0275prov=S({token:o,factory:o.\u0275fac})}return o})();var tn=new M("TOOLTIP_INSTANCE"),Pr=(()=>{class o extends I{zone;viewContainer;$pcTooltip=p(tn,{optional:!0,skipSelf:!0})??void 0;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;appendTo=y(void 0);$appendTo=F(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:X("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;rootPTClasses="";showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=p(Je);interactionInProgress=!1;ptTooltip=y();constructor(t,e){super(),this.zone=t,this.viewContainer=e,A(()=>{this.ptTooltip()&&this.directivePT.set(this.ptTooltip())})}onAfterViewInit(){it(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let e=this.el.nativeElement.querySelector(".p-component");e||(e=this.getTarget(this.el.nativeElement)),e.addEventListener("focus",this.focusListener),e.addEventListener("blur",this.blurListener)}})}onChanges(t){t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=u(u({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(rt(t.relatedTarget,"p-tooltip")||rt(t.relatedTarget,"p-tooltip-text")||rt(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener?.()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=bt("div",{class:this.cx("root"),"p-bind":this.ptm("root"),"data-pc-section":"root"});let t=bt("div",{class:"p-tooltip-arrow","p-bind":this.ptm("arrow"),"data-pc-section":"arrow"});this.container.appendChild(t),this.tooltipText=bt("div",{class:"p-tooltip-text","p-bind":this.ptm("text"),"data-pc-section":"text"}),this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?Wt(this.container,this.el.nativeElement):Wt(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",e=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),me(this.container,250),this.getOption("tooltipZIndex")==="auto"?At.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&At.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t&&typeof t.createEmbeddedView=="function"){let e=this.viewContainer.createEmbeddedView(t);e.detectChanges(),e.rootNodes.forEach(n=>this.tooltipText.appendChild(n))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),n={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]}[t]||[];for(let[r,s]of n.entries())if(r===0)s.call(this);else if(this.isOutOfBounds())s.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),e=t.left+fe(),n=t.top+ge();return{left:e,top:n}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?Dt(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,e=O(t),n=($(t)-$(this.container))/2;this.alignTooltip(e,n);let r=this.getArrowElement();r.style.top="50%",r.style.right=null,r.style.bottom=null,r.style.left="0"}alignLeft(){this.preAlign("left");let t=this.getArrowElement(),e=O(this.container),n=($(this.el.nativeElement)-$(this.container))/2;this.alignTooltip(-e,n),t.style.top="50%",t.style.right="0",t.style.bottom=null,t.style.left=null}alignTop(){this.preAlign("top");let t=this.getArrowElement(),e=this.getHostOffset(),n=O(this.container),r=(O(this.el.nativeElement)-O(this.container))/2,s=$(this.container);this.alignTooltip(r,-s);let l=e.left-this.getHostOffset().left+n/2;t.style.top=null,t.style.right=null,t.style.bottom="0",t.style.left=l+"px"}getArrowElement(){return Dt(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let t=this.getArrowElement(),e=O(this.container),n=this.getHostOffset(),r=(O(this.el.nativeElement)-O(this.container))/2,s=$(this.el.nativeElement);this.alignTooltip(r,s);let l=n.left-this.getHostOffset().left+e/2;t.style.top="0",t.style.right=null,t.style.bottom=null,t.style.left=l+"px"}alignTooltip(t,e){let n=this.getHostOffset(),r=n.left+t,s=n.top+e;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=u(u({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return rt(t,"p-inputwrapper")?Dt(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px",this.container.className=this.cn(this.cx("root"),this.ptm("root")?.class,"p-tooltip-"+t,this.getOption("tooltipStyleClass"))}isOutOfBounds(){let t=this.container.getBoundingClientRect(),e=t.top,n=t.left,r=O(this.container),s=$(this.container),l=be();return n+r>l.width||n<0||e<0||e+s>l.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Bt(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let e=this.el.nativeElement.querySelector(".p-component");e||(e=this.getTarget(this.el.nativeElement)),e.removeEventListener("focus",this.focusListener),e.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):we(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}onDestroy(){this.unbindEvents(),this.container&&At.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(e){return new(e||o)(tt(St),tt(ee))};static \u0275dir=D({type:o,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",g],showDelay:[2,"showDelay","showDelay",W],hideDelay:[2,"hideDelay","hideDelay",W],life:[2,"life","life",W],positionTop:[2,"positionTop","positionTop",W],positionLeft:[2,"positionLeft","positionLeft",W],autoHide:[2,"autoHide","autoHide",g],fitContent:[2,"fitContent","fitContent",g],hideOnEscape:[2,"hideOnEscape","hideOnEscape",g],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"],ptTooltip:[1,"ptTooltip"]},features:[E([Je,{provide:tn,useExisting:o},{provide:H,useExisting:o}]),v]})}return o})(),Br=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=B({type:o});static \u0275inj=P({imports:[gt,gt]})}return o})();export{X as a,H as b,I as c,_ as d,gt as e,Qt as f,Io as g,_o as h,Bt as i,Re as j,Yt as k,Me as l,qe as m,Nt as n,$e as o,ri as p,He as q,Mn as r,pr as s,Ye as t,fr as u,At as v,Pr as w,Br as x};
