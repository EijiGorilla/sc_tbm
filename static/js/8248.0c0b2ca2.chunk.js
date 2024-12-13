"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[8248],{61196:(e,t,i)=>{function r(e,t,i,r,n){s(e,t,i||0,r||e.length-1,n||o)}function s(e,t,i,r,o){for(;r>i;){if(r-i>600){var l=r-i+1,a=t-i+1,u=Math.log(l),h=.5*Math.exp(2*u/3),p=.5*Math.sqrt(u*h*(l-h)/l)*(a-l/2<0?-1:1);s(e,t,Math.max(i,Math.floor(t-a*h/l+p)),Math.min(r,Math.floor(t+(l-a)*h/l+p)),o)}var c=e[t],d=i,g=r;for(n(e,i,t),o(e[r],c)>0&&n(e,i,r);d<g;){for(n(e,d,g),d++,g--;o(e[d],c)<0;)d++;for(;o(e[g],c)>0;)g--}0===o(e[i],c)?n(e,i,g):n(e,++g,r),g<=t&&(i=g+1),t<=g&&(r=g-1)}}function n(e,t,i){var r=e[t];e[t]=e[i],e[i]=r}function o(e,t){return e<t?-1:e>t?1:0}i.d(t,{q:()=>r})},90321:(e,t,i)=>{function r(e,t){return e?t?4:3:t?3:2}function s(e,t,i,s){if(null===t||void 0===t||!t.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const l=e.coords,a=[],u=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:h,coords:p}=t,c=r(i,s);let d=0;for(const r of h){const e=n(u,p,d,r,i,s);e&&a.push(e),d+=r*c}if(a.sort(((e,t)=>{let r=e[2]-t[2];return 0===r&&i&&(r=e[4]-t[4]),r})),a.length){let e=6*a[0][2];l[0]=a[0][0]/e,l[1]=a[0][1]/e,i&&(e=6*a[0][4],l[2]=0!==e?a[0][3]/e:0),(l[0]<u[0]||l[0]>u[1]||l[1]<u[2]||l[1]>u[3]||i&&(l[2]<u[4]||l[2]>u[5]))&&(l.length=0)}if(!l.length){const e=t.lengths[0]?o(p,0,h[0],i,s):null;if(!e)return null;l[0]=e[0],l[1]=e[1],i&&e.length>2&&(l[2]=e[2])}return e}function n(e,t,i,s,n,o){const l=r(n,o);let a=i,u=i+l,h=0,p=0,c=0,d=0,g=0;for(let r=0,f=s-1;r<f;r++,a+=l,u+=l){const i=t[a],r=t[a+1],s=t[a+2],o=t[u],l=t[u+1],y=t[u+2];let f=i*l-o*r;d+=f,h+=(i+o)*f,p+=(r+l)*f,n&&(f=i*y-o*s,c+=(s+y)*f,g+=f),i<e[0]&&(e[0]=i),i>e[1]&&(e[1]=i),r<e[2]&&(e[2]=r),r>e[3]&&(e[3]=r),n&&(s<e[4]&&(e[4]=s),s>e[5]&&(e[5]=s))}if(d>0&&(d*=-1),g>0&&(g*=-1),!d)return null;const y=[h,p,.5*d];return n&&(y[3]=c,y[4]=.5*g),y}function o(e,t,i,s,n){const o=r(s,n);let p=t,c=t+o,d=0,g=0,y=0,f=0;for(let r=0,v=i-1;r<v;r++,p+=o,c+=o){const t=e[p],i=e[p+1],r=e[p+2],n=e[c],o=e[c+1],v=e[c+2],m=s?a(t,i,r,n,o,v):l(t,i,n,o);if(m)if(d+=m,s){const e=h(t,i,r,n,o,v);g+=m*e[0],y+=m*e[1],f+=m*e[2]}else{const e=u(t,i,n,o);g+=m*e[0],y+=m*e[1]}}return d>0?s?[g/d,y/d,f/d]:[g/d,y/d]:i>0?s?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function l(e,t,i,r){const s=i-e,n=r-t;return Math.sqrt(s*s+n*n)}function a(e,t,i,r,s,n){const o=r-e,l=s-t,a=n-i;return Math.sqrt(o*o+l*l+a*a)}function u(e,t,i,r){return[e+.5*(i-e),t+.5*(r-t)]}function h(e,t,i,r,s,n){return[e+.5*(r-e),t+.5*(s-t),i+.5*(n-i)]}i.d(t,{Q:()=>s})},15477:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var r=i(35143),s=i(91967),n=i(5632),o=i(30726),l=i(46053),a=(i(81806),i(76460),i(47249),i(85842)),u=i(183),h=i(1723);let p=class extends((0,n.sA)(s.A)){constructor(e){super(e),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new c,this.suspended=!1}initialize(){this._set("processor",new u.K({owner:this}))}destroy(){this._set("processor",(0,o.pR)(this.processor))}get graphics(){var e;return null===(e=this.view)||void 0===e?void 0:e.graphics}get loadedGraphics(){return this.graphics}get updating(){var e;return!(null===(e=this.processor)||void 0===e||!e.updating)}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}graphicChanged(e){this.processor.graphicsCore.graphicUpdateHandler(e)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}highlight(e,t){return this.processor.highlight(e,null!==t&&void 0!==t?t:h.Tv)}maskOccludee(e){return this.processor.maskOccludee(e)}get test(){return{graphics3DProcessor:this.processor}}};(0,r._)([(0,l.MZ)({readOnly:!0})],p.prototype,"graphics",null),(0,r._)([(0,l.MZ)()],p.prototype,"loadedGraphics",null),(0,r._)([(0,l.MZ)({readOnly:!0})],p.prototype,"updating",null),(0,r._)([(0,l.MZ)({constructOnly:!0})],p.prototype,"view",void 0),(0,r._)([(0,l.MZ)()],p.prototype,"processor",void 0),(0,r._)([(0,l.MZ)({type:Boolean})],p.prototype,"slicePlaneEnabled",void 0),(0,r._)([(0,l.MZ)()],p.prototype,"layer",void 0),(0,r._)([(0,l.MZ)()],p.prototype,"suspended",void 0),p=(0,r._)([(0,a.$)("esri.views.3d.layers.GraphicsView3D")],p);class c extends n.LJ{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid}}const d=p},183:(e,t,i)=>{i.d(t,{K:()=>O});var r=i(35143),s=i(39356),n=i(91967),o=i(54901),l=i(30726),a=i(50346),u=i(68134),h=i(46053),p=(i(81806),i(76460),i(47249),i(85842)),c=i(15011),d=i(19451),g=i(25515),y=i(32535),f=i(86486),v=i(68295),m=i(57662),b=i(38865),_=i(29257),I=i(35148),w=i(31329),C=i(90592),E=i(93788),V=i(36423),M=i(42123),N=i(44513);let O=class extends n.A{constructor(e){super(e),this.type="graphics-3d",this.graphicsCore=null,this.drapeSourceType=m.Om.Features,this.scaleVisibilityEnabled=!1,this.frustumVisibilityEnabled=!1,this._suspendResumeExtent=null,this._updatingHandles=new d.U}initialize(){const{layer:e}=this,t="effectiveScaleRange"in e?e:null,i=this.scaleVisibilityEnabled&&null!=t,r=new _.w({owner:this,layer:this.owner.layer,preferredUpdatePolicy:N.q.SYNC,graphicSymbolSupported:!0,componentFactories:{elevationAlignment:(e,t)=>new I.V({graphicsCoreOwner:this,graphicsCore:e,queryGraphicUIDsInExtent:t,elevationProvider:this.view.elevationProvider}),scaleVisibility:i?(e,i)=>new E.N({graphicsCoreOwner:this,layer:t,queryGraphicUIDsInExtent:i,graphicsCore:e,basemapTerrain:this.owner.view.basemapTerrain}):null,objectStates:e=>new C.w(e)}});if(this._set("graphicsCore",r),this.frustumVisibilityEnabled&&this._set("frustumVisibility",new w.p({graphicsCoreOwner:this})),"fullOpacity"in this.owner){const e=this.owner;this._updatingHandles.add((()=>e.fullOpacity),(()=>this.graphicsCore.opacityChange()))}if("elevationInfo"in e){const t=e;this._updatingHandles.add((()=>t.elevationInfo),((e,t)=>{(0,c.Ui)(e,t)&&this._updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())}))}this._set("initializePromise",this._initializeAsync()),this._updatingHandles.addPromise(this.initializePromise)}async _initializeAsync(){try{await this.graphicsCore.initializePromise}catch(e){if((0,a.zf)(e))return;throw e}this.destroyed||(this.addHandles((0,u.wB)((()=>this.view.clippingArea),(()=>this._updateClippingExtent()),u.OH)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this._updatingHandles.destroy(),this._set("frustumVisibility",(0,l.pR)(this.frustumVisibility)),this._set("graphicsCore",(0,l.pR)(this.graphicsCore))}get layer(){return this.owner.layer}get view(){return this.owner.view}get scaleVisibility(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.scaleVisibility}get elevationAlignment(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.elevationAlignment}get scaleVisibilitySuspended(){return!(null==this.scaleVisibility||!this.scaleVisibility.suspended)}get frustumVisibilitySuspended(){return null!=this.frustumVisibility&&this.frustumVisibility.suspended}get suspended(){var e;return null!==(e=this.owner.suspended)&&void 0!==e&&e}get updating(){var e;return!!(null!==(e=this.graphicsCore)&&void 0!==e&&e.updating||null!=this.scaleVisibility&&this.scaleVisibility.updating||null!=this.frustumVisibility&&this.frustumVisibility.updating||this._updatingHandles.updating)}get graphics3DGraphics(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphics}get graphics3DGraphicsByObjectID(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphicsByObjectID}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){var e;return null!==(e=this.owner.fullOpacity)&&void 0!==e?e:1}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}notifyGraphicGeometryChanged(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}notifyGraphicVisibilityChanged(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}getRenderingInfo(e,t,i){const r=(0,f.vl)(e,{renderer:t,arcade:i});if(null!==r&&void 0!==r&&r.color){const e=r.color;e[0]=e[0]/255,e[1]=e[1]/255,e[2]=e[2]/255}return r}getRenderingInfoAsync(e,t,i,r){return(0,f.LO)(e,{renderer:t,arcade:i,...r})}getHit(e){if(this.owner.loadedGraphics){const t=this.owner.loadedGraphics.find((t=>t.uid===e));if(t){const e=this.layer instanceof g.A?this.layer:null,i=(0,y.wP)(t,e);return{type:"graphic",graphic:i,layer:i.layer}}}return null}whenGraphicBounds(e,t){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,t):Promise.reject()}computeAttachmentOrigin(e,t){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,t):null}getSymbolLayerSize(e,t){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,t):null}maskOccludee(e){var t;const i=null===(t=this.graphicsCore)||void 0===t?void 0:t.objectStates;if(!i)return(0,o.hA)();const{set:r,handle:s}=i.acquireOccludeeSet(null);return i.setUid(r,e.uid),s}highlight(e,t){var i;const r=null===(i=this.graphicsCore)||void 0===i?void 0:i.objectStates;if(!r)return G;if(e instanceof v.A)return G;const n=(0,M.UX)(e);if(0===n.length)return G;if(n[0]instanceof s.A){const e=n.map((e=>e.uid)),{set:i,handle:s}=r.acquireHighlightSet(t,null);return r.setUids(i,e),s}if("number"==typeof n[0]){const e=n,{set:i,handle:s}=r.acquireHighlightSet(t,null);return r.setObjectIds(i,e),s}return G}_setupSuspendResumeExtent(){const{scaleVisibility:e,frustumVisibility:t}=this;if(null==e&&null==t)return;const i=i=>{let{computedExtent:r,extentPadding:s}=i;this._suspendResumeExtent=(0,V.t8)(r,this._suspendResumeExtent,b.qD,s),null!=e&&e.setExtent(this._suspendResumeExtent),null!=t&&t.setExtent(this._suspendResumeExtent)};this.addHandles((0,u.wB)((()=>{var e,t;return{computedExtent:null===(e=this.graphicsCore)||void 0===e?void 0:e.computedExtent,extentPadding:null===(t=this.graphicsCore)||void 0===t?void 0:t.extentPadding}}),(e=>i(e)),u.pc))}_updateClippingExtent(){const e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}};(0,r._)([(0,h.MZ)()],O.prototype,"type",void 0),(0,r._)([(0,h.MZ)({constructOnly:!0})],O.prototype,"owner",void 0),(0,r._)([(0,h.MZ)()],O.prototype,"layer",null),(0,r._)([(0,h.MZ)()],O.prototype,"view",null),(0,r._)([(0,h.MZ)({constructOnly:!0})],O.prototype,"graphicsCore",void 0),(0,r._)([(0,h.MZ)()],O.prototype,"scaleVisibility",null),(0,r._)([(0,h.MZ)({constructOnly:!0})],O.prototype,"frustumVisibility",void 0),(0,r._)([(0,h.MZ)()],O.prototype,"elevationAlignment",null),(0,r._)([(0,h.MZ)()],O.prototype,"scaleVisibilitySuspended",null),(0,r._)([(0,h.MZ)({readOnly:!0})],O.prototype,"frustumVisibilitySuspended",null),(0,r._)([(0,h.MZ)()],O.prototype,"suspended",null),(0,r._)([(0,h.MZ)({readOnly:!0})],O.prototype,"updating",null),(0,r._)([(0,h.MZ)()],O.prototype,"loadedGraphics",null),(0,r._)([(0,h.MZ)()],O.prototype,"fullOpacity",null),(0,r._)([(0,h.MZ)()],O.prototype,"slicePlaneEnabled",null),(0,r._)([(0,h.MZ)()],O.prototype,"drapeSourceType",void 0),(0,r._)([(0,h.MZ)()],O.prototype,"updatePolicy",null),(0,r._)([(0,h.MZ)({constructOnly:!0})],O.prototype,"scaleVisibilityEnabled",void 0),(0,r._)([(0,h.MZ)({constructOnly:!0})],O.prototype,"frustumVisibilityEnabled",void 0),(0,r._)([(0,h.MZ)()],O.prototype,"initializePromise",void 0),O=(0,r._)([(0,p.$)("esri.views.3d.layers.graphics.GraphicsProcessor")],O);const G=(0,o.hA)()}}]);
//# sourceMappingURL=8248.0c0b2ca2.chunk.js.map