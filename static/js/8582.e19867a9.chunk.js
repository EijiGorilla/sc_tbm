"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[8582],{18582:(e,t,n)=>{n.d(t,{A:()=>Ze});var r=n(35143),o=n(63241),i=n(50076),s=n(49304),a=n(76460),l=n(91291),c=n(50346),u=n(68134),p=n(46053),f=(n(81806),n(47249),n(85842)),d=n(9392),h=n(76797),v=n(89189),m=n(13904),g=n(65215),y=n(52896),x=n(79629);const w="Expected location to be a Point instance";class A extends i.A{constructor(){super("invalid-input:location",w)}}var b=n(14894),S=n(5845),M=n(32186),R=n(56623),F=n(99773),_=n(99785),I=n(42294),k=n(48620);let j=null;function O(e){if(0===e.length)return I.v_;const t=(0,I.vt)([Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY]);return(0,I.Hq)(t,e),t}function N(e,t){const[n,r,o,i,s,a]=O(e);return new h.A({xmin:n,ymin:r,zmin:o,xmax:i,ymax:s,zmax:a,spatialReference:t})}var T=n(20664),P=n(64232),L=n(84640);const C="esri.geometry.support.meshUtils.centerAt";function U(e,t,n){var r,o;if(null===(r=e.vertexAttributes)||void 0===r||!r.position)return;const{vertexSpace:i}=e,s=null!==(o=null===n||void 0===n?void 0:n.origin)&&void 0!==o?o:e.anchor,l=null===n||void 0===n?void 0:n.geographic,c=(0,L.QD)(C,i,s.spatialReference,l);(0,F.Hq)(i)?function(e,t,n){const{vertexSpace:r}=e;if(!(0,F.Hq)(r))return;const o=z,i=E;if(!(0,P.g)(t,i,e.spatialReference))return void a.A.getLogger(C).error("Failed to project centerAt location (wkid:".concat(t.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,"). Projection may be possible after calling projection.load()."));if(!(0,P.g)(n,o,e.spatialReference)){const t=e.origin;o[0]=t.x,o[1]=t.y,o[2]=t.z,a.A.getLogger(C).error("Failed to project specified origin (wkid:".concat(n.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,"). Projection may be possible after calling projection.load()."))}const s=(0,T.f)(B,i,o);r.origin=(0,T.g)((0,d.vt)(),r.origin,s)}(e,t,s):c?function(e,t,n){const r=(0,k.RN)(e.vertexAttributes,n),{position:o,normal:i,tangent:s}=(0,k.wD)(r,t,!1);e.vertexAttributes.position=o,e.vertexAttributes.normal=i,e.vertexAttributes.tangent=s,e.vertexAttributesChanged()}(e,t,s):function(e,t,n){const r=z,o=E;if((0,P.g)(t,o,e.spatialReference)){if(!(0,P.g)(n,r,e.spatialReference)){const t=e.origin;r[0]=t.x,r[1]=t.y,r[2]=t.z,a.A.getLogger(C).error("Failed to project specified origin (wkid:".concat(n.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,"). Projection may be possible after calling projection.load()."))}(function(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=t[o]-n[o]})(e.vertexAttributes.position,o,r),e.vertexAttributesChanged()}else a.A.getLogger(C).error("Failed to project centerAt location (wkid:".concat(t.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,"). Projection may be possible after calling projection.load()."))}(e,t,s)}const E=(0,d.vt)(),z=(0,d.vt)(),B=(0,d.vt)();var D=n(90534);async function Z(e,t,r){const{source:o}=t,{loadGLTFMesh:s}=await(0,c.qr)(n.e(7359).then(n.bind(n,17359)),r),a=await async function(e,t){if(Array.isArray(e)){if(!e.length)throw new i.A("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?function(e){return G(e.map((e=>({name:e.name,mimeType:e.type,source:H(e)}))))}(e):async function(e,t){const n=await(0,c.nA)(e.map((async e=>{const n=await async function(e,t){const{parts:n,assetMimeType:r,assetName:o}=e;if(1===n.length)return new K(n[0].partUrl);const i=await e.toBlob(t);return(0,c.Te)(t),K.fromBlob(i,Q(o,r))}(e);return(0,c.Te)(t),{name:e.assetName,mimeType:e.assetMimeType,source:n}})));if((0,c.G4)(t))throw n.forEach((e=>e.source.dispose())),(0,c.NK)();return G(n)}(e,t)}return H(e)}(o,r);(0,c.Te)(r);const l=s(new m.A({x:0,y:0,z:0,spatialReference:e.spatialReference}),a.url,{resolveFile:q(a),signal:null===r||void 0===r?void 0:r.signal,expectedType:a.type});l.then((()=>a.dispose()),(()=>a.dispose()));const{vertexAttributes:u,components:p}=await l;e.vertexAttributes=u,e.components=p}function q(e){const t=(0,D.nM)(e.url);return n=>{var r;const o=(0,D.V1)(n,t,t),i=o?o.replace(/^ *\.\//,""):null;return null!==(r=i?e.files.get(i):null)&&void 0!==r?r:n}}function H(e){return K.fromBlob(e,Q(e.name,e.type))}const V=/^model\/gltf\+json$/,$=/^model\/gltf-binary$/,Y=/\.gltf$/i,W=/\.glb$/i;function G(e){const t=new Map;let n,r=null;for(const{name:o,mimeType:i,source:s}of e)null===r&&(V.test(i)||Y.test(o)?(r=s.url,n="gltf"):($.test(i)||W.test(o))&&(r=s.url,n="glb")),t.set(o,s.url),s.files.forEach(((e,n)=>t.set(n,e)));if(null==r)throw new i.A("mesh-load-external:missing-files","Missing files to load external mesh source");return new K(r,(()=>e.forEach((e=>{let{source:t}=e;return t.dispose()}))),t,n)}class K{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Map,r=arguments.length>3?arguments[3]:void 0;this.url=e,this.dispose=t,this.files=n,this.type=r}static fromBlob(e,t){const n=URL.createObjectURL(e);return new K(n,(()=>URL.revokeObjectURL(n)),void 0,t)}}function Q(e,t){return V.test(t)||Y.test(e)?"gltf":$.test(t)||Y.test(e)?"glb":void 0}var X=n(69098),J=n(19276),ee=n(57045);let te=class extends X.P{constructor(){super(),this.externalSources=new J.A,this._explicitDisplaySource=null,this.addHandles((0,u.on)((()=>this.externalSources),"after-remove",(e=>{let{item:t}=e;t===this._explicitDisplaySource&&(this._explicitDisplaySource=null)}),{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){var e;return null!==(e=this._explicitDisplaySource)&&void 0!==e?e:this._implicitDisplaySource}set displaySource(e){if(null!=e&&!(0,ee.yr)(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every((t=>!(0,ee.in)(t,e)))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter((t=>(0,ee.eN)(t,e)))}get _implicitDisplaySource(){return this.externalSources.find(ee.yr)}};(0,r._)([(0,p.MZ)()],te.prototype,"externalSources",void 0),(0,r._)([(0,p.MZ)()],te.prototype,"displaySource",null),(0,r._)([(0,p.MZ)()],te.prototype,"_implicitDisplaySource",null),(0,r._)([(0,p.MZ)()],te.prototype,"_explicitDisplaySource",void 0),te=(0,r._)([(0,f.$)("esri.geometry.support.meshUtils.Metadata")],te);var ne=n(44680);const re={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[3,1,2],west:[-3,-1,2],north:[-1,3,2],south:[1,-3,2],up:[1,2,3],down:[1,-2,-3]}};function oe(e,t,n){e.isPlane||function(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}(e),function(e,t){if(null!=t){le[0]=t[0],le[4]=t[1],le[8]=t[2];for(let t=0;t<e.position.length;t+=3){for(let n=0;n<3;n++)ae[n]=e.position[t+n];(0,T.t)(ae,ae,le);for(let n=0;n<3;n++)e.position[t+n]=ae[n]}if(t[0]!==t[1]||t[1]!==t[2]){le[0]=1/t[0],le[4]=1/t[1],le[8]=1/t[2];for(let t=0;t<e.normal.length;t+=3){for(let n=0;n<3;n++)ae[n]=e.normal[t+n];(0,T.t)(ae,ae,le),(0,T.n)(ae,ae);for(let n=0;n<3;n++)e.normal[t+n]=ae[n]}}}}(e,function(e,t,n){const r=(0,k.nX)(t,n);if(null==e&&1===r)return null;if(null==e)return[r,r,r];if("number"==typeof e){const t=e*r;return[t,t,t]}return[null!=e.width?e.width*r:r,null!=e.depth?e.depth*r:r,null!=e.height?e.height*r:r]}(null===n||void 0===n?void 0:n.size,null===n||void 0===n?void 0:n.unit,t.spatialReference));const{vertexAttributes:r,vertexSpace:o,transform:i}=(0,k.qD)(e,t,{vertexSpace:null===n||void 0===n?void 0:n.vertexSpace,geographic:null===n||void 0===n?void 0:n.geographic});return{vertexAttributes:new R.H({...r,uv:e.uv}),vertexSpace:o,transform:i,components:[new x.A({faces:e.faces,material:(null===n||void 0===n?void 0:n.material)||null})],spatialReference:t.spatialReference}}const ie={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},se={south:0,east:1,north:2,west:3,up:4,down:5},ae=(0,d.vt)(),le=(0,ne.vt)();var ce=n(86300),ue=n(34761),pe=n(13191),fe=n(60008),de=n(4336),he=n(98510),ve=n(5809),me=n(26375);function ge(e,t,n){let{vertexSpace:r,spatialReference:o}=n;if("georeferenced"===r.type){const n=e;if(!(0,P.g)(t,n,o))return!1;const{origin:i}=r;return(0,T.f)(e,n,i),!0}const i=(0,he.lO)(o),s=e;if(!(0,P.g)(t,s,i))return!1;const{origin:a}=r,l=ye;if(!(0,ve.l)(o,a,l,i))return!1;const c=(0,ue.B8)(ye,l);return null!=c&&((0,T.e)(e,s,c),!0)}const ye=(0,pe.vt)(),xe="esri.geometry.support.meshUtils.rotate";function we(e,t,n){var r,o;if(null===(r=e.vertexAttributes)||void 0===r||!r.position||0===t[3])return;const{spatialReference:i,vertexSpace:s}=e,l=null!==(o=null===n||void 0===n?void 0:n.origin)&&void 0!==o?o:e.anchor,c=null===n||void 0===n?void 0:n.geographic,u=(0,L.QD)(xe,s,i,c);(0,F.CK)(e)?function(e,t,n){var r;null!==(r=e.transform)&&void 0!==r||(e.transform=new M.A);const{vertexSpace:o,transform:i,spatialReference:s}=e,[l,c,u]=o.origin,p=new m.A({x:l,y:c,z:u,spatialReference:s}),f=be;if(p.equals(n))(0,T.s)(f,0,0,0);else if(!ge(f,n,e))return void a.A.getLogger(xe).error("Failed to project specified origin (wkid:".concat(n.spatialReference.wkid,") to mesh (wkid:").concat(s.wkid,") ").concat(o.type," vertex space. Projection may be possible after calling projection.load()."));(0,fe.x8)(Ie,(0,y.yo)(t),(0,y.$I)(t));const h=(0,ue.O7)(Se,Ie,d.uY,d.Un,f),{localMatrix:v}=i,g=(0,ue.lw)(Se,h,v);i.scale=(0,ue.IL)((0,d.vt)(),g),(0,ue.hs)(g,g,(0,T.i)(be,i.scale)),i.rotation=(0,y.ui)(g),i.translation=(0,ue.sC)((0,d.vt)(),g)}(e,t,l):u?function(e,t,n){const r=e.spatialReference,o=(0,he.lO)(r),i=_e;(0,P.g)(n,i,o)||(0,P.g)(e.origin,i,o);const s=e.vertexAttributes.position,a=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,c=new Float64Array(s.length),u=null!=a?new Float32Array(a.length):null,p=null!=l?new Float32Array(l.length):null;(0,ve.l)(o,i,Re,o),(0,ce.z0)(Fe,Re);const f=Me;(0,T.t)((0,y.yo)(Me),(0,y.yo)(t),Fe),f[3]=t[3],(0,me.gr)(s,r,c),null!=a&&null!=u&&(0,me.X4)(a,s,c,r,u),null!=l&&null!=p&&(0,me.xA)(l,s,c,r,p),Ae(c,f,3,i),(0,me.$5)(c,s,r),null!=a&&null!=u&&(Ae(u,f,3),(0,me.si)(u,s,c,r,a)),null!=l&&null!=p&&(Ae(p,f,4),(0,me.Mv)(p,s,c,r,l)),e.vertexAttributesChanged()}(e,t,l):function(e,t,n){const r=_e;if(!(0,P.g)(n,r,e.spatialReference)){const t=e.origin;r[0]=t.x,r[1]=t.y,r[2]=t.z,a.A.getLogger(xe).error("Failed to project specified origin (wkid:".concat(n.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,"). Projection may be possible after calling projection.load()."))}Ae(e.vertexAttributes.position,t,3,r),Ae(e.vertexAttributes.normal,t,3),Ae(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}(e,t,l)}function Ae(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d.uY;if(null!=e){(0,ue.$0)(Re,(0,y.$I)(t),(0,y.yo)(t));for(let t=0;t<e.length;t+=n){for(let n=0;n<3;n++)be[n]=e[t+n]-r[n];(0,T.e)(be,be,Re);for(let n=0;n<3;n++)e[t+n]=be[n]+r[n]}}}const be=(0,d.vt)(),Se=(0,pe.vt)(),Me=(0,y.vt)(),Re=(0,pe.vt)(),Fe=(0,ne.vt)(),_e=(0,d.vt)(),Ie=(0,de.vt)(),ke="esri.geometry.support.meshUtils.scale";function je(e,t,n){var r,o;if(null===(r=e.vertexAttributes)||void 0===r||!r.position)return;const{vertexSpace:i,spatialReference:s}=e,l=null!==(o=null===n||void 0===n?void 0:n.origin)&&void 0!==o?o:e.anchor,c=null===n||void 0===n?void 0:n.geographic,u=(0,L.QD)(ke,i,s,c);(0,F.CK)(e)?function(e,t,n){var r;null!==(r=e.transform)&&void 0!==r||(e.transform=new M.A);const{vertexSpace:o,transform:i,spatialReference:s}=e,[l,c,u]=o.origin,p=new m.A({x:l,y:c,z:u,spatialReference:s}),f=Ne;if(p.equals(n))(0,T.s)(f,0,0,0);else if(!ge(f,n,e))return void a.A.getLogger(ke).error("Failed to project specified origin (wkid:".concat(n.spatialReference.wkid,") to mesh (wkid:").concat(s.wkid,") ").concat(o.type," vertex space. Projection may be possible after calling projection.load()."));const h=(0,T.s)(Te,t,t,t),v=(0,ue.O7)(Pe,de.zK,d.uY,h,f),{localMatrix:g}=i,x=(0,ue.lw)(Pe,v,g);i.scale=(0,ue.IL)((0,d.vt)(),x),(0,ue.hs)(x,x,(0,T.i)(Ne,i.scale)),i.rotation=(0,y.ui)(x),i.translation=(0,ue.sC)((0,d.vt)(),x)}(e,t,l):u?function(e,t,n){const r=e.spatialReference,o=(0,he.lO)(r),i=Le;(0,P.g)(n,i,o)||(0,P.g)(e.origin,i,o);const s=e.vertexAttributes.position,a=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,c=new Float64Array(s.length),u=null!=a?new Float32Array(a.length):null,p=null!=l?new Float32Array(l.length):null;(0,me.gr)(s,r,c),null!=a&&null!=u&&(0,me.X4)(a,s,c,r,u),null!=l&&null!=p&&(0,me.xA)(l,s,c,r,p),Oe(c,t,i),(0,me.$5)(c,s,r),null!=a&&null!=u&&(0,me.si)(u,s,c,r,a),null!=l&&null!=p&&(0,me.Mv)(p,s,c,r,l),e.vertexAttributesChanged()}(e,t,l):function(e,t,n){const r=Le;if(!(0,P.g)(n,r,e.spatialReference)){const t=e.origin;r[0]=t.x,r[1]=t.y,r[2]=t.z,a.A.getLogger(ke).error("Failed to project specified origin (wkid:".concat(n.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,"). Projection may be possible after calling projection.load()."))}Oe(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}(e,t,l)}function Oe(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d.uY;if(e)for(let r=0;r<e.length;r+=3){for(let t=0;t<3;t++)Ne[t]=e[r+t]-n[t];(0,T.h)(Ne,Ne,t);for(let t=0;t<3;t++)e[r+t]=Ne[t]+n[t]}}const Ne=(0,d.vt)(),Te=(0,d.vt)(),Pe=(0,pe.vt)(),Le=(0,d.vt)();var Ce;const Ue="esri.geometry.Mesh";function Ee(){return a.A.getLogger(Ue)}const ze={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:b.A,local:S.A}};let Be=Ce=class extends(s.A.LoadableMixin((0,l.g)(v.A))){constructor(e){super(e),this.components=null,this.vertexSpace=new b.A,this.transform=null,this.metadata=new te,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new R.H,this.type="mesh"}initialize(){(0===this.metadata.externalSources.length||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when((()=>{this.addHandles((0,u.wB)((()=>{var e;return{vertexAttributes:this.vertexAttributes,components:null===(e=this.components)||void 0===e?void 0:e.map((e=>e.clone()))}}),(()=>this._clearSources()),{once:!0,sync:!0}))}))}get hasExtent(){var e;return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):null!=(null===(e=this.metadata.displaySource)||void 0===e?void 0:e.extent)}get _transformedExtent(){const{components:e,spatialReference:t,vertexAttributes:n,vertexSpace:r}=this,o=n.position;if(0===o.length||e&&0===e.length)return new h.A({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t});if((0,F.Hq)(r)){const{_untransformedBounds:e,transform:n}=this;return function(e,t,n,r){var o;let[i,s,a,l,c,u]=e;null!==(o=j)&&void 0!==o||(j=new Float64Array(24));const p=j;return p[0]=i,p[1]=s,p[2]=a,p[3]=i,p[4]=c,p[5]=a,p[6]=l,p[7]=c,p[8]=a,p[9]=l,p[10]=s,p[11]=a,p[12]=i,p[13]=s,p[14]=u,p[15]=i,p[16]=c,p[17]=u,p[18]=l,p[19]=c,p[20]=u,p[21]=l,p[22]=s,p[23]=u,(0,k.project)({positions:p,transform:t,vertexSpace:n,inSpatialReference:r,outSpatialReference:r,outPositions:p}),N(p,r)}(e,n,r,t)}return N(o,t)}get _untransformedBounds(){return O(this.vertexAttributes.position)}get anchor(){const e=(0,F.MW)(this.vertexSpace,this.spatialReference);if(null!=e)return e;const{center:t,zmin:n}=this._transformedExtent;return new m.A({x:t.x,y:t.y,z:n,spatialReference:this.spatialReference})}get origin(){const e=(0,F.MW)(this.vertexSpace,this.spatialReference);return null!=e?e:this._transformedExtent.center}get extent(){var e;return this.loaded||null==(null===(e=this.metadata)||void 0===e||null===(e=e.displaySource)||void 0===e?void 0:e.extent)?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(x.A.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(-1!==t)return this.components.splice(t,1),void this.notifyChange("components")}Ee().error("removeComponent()","Provided component is not part of the list of components")}}rotate(e,t,n,r){return(0,y.AU)(e,t,n,De),we(this,De,r),this}offset(e,t,n){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:r,vertexAttributes:o}=this,i=null===o||void 0===o?void 0:o.position;if(!i)return this;if((0,F.Hq)(r)){const[o,i,s]=r.origin;r.origin=(0,d.fA)(o+e,i+t,s+n)}else{for(let r=0;r<i.length;r+=3)i[r]+=e,i[r+1]+=t,i[r+2]+=n;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?(je(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(U(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(Z(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneWithVertexSpace(this.vertexSpace.clone())}cloneWithVertexSpace(e){var t,n;let r=null;if(this.components){const e=new Map,t=new Map;r=this.components.map((n=>n.cloneWithDeduplication(e,t)))}const o={components:r,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),vertexSpace:e,transform:null!==(t=null===(n=this.transform)||void 0===n?void 0:n.clone())&&void 0!==t?t:null,metadata:this.metadata.clone()};return new Ce(o)}cloneShallow(){return new Ce({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const t=n.e(7834).then(n.bind(n,57834)),r=this.load(),o=await Promise.all([t,r]),{toBinaryGLTF:i}=o[0];return i(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,null!=this.components)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(Ee().error(e,"Mesh must be loaded before applying operations"),!1)}static createBox(e,t){if(!(e instanceof m.A))return Ee().error(".createBox()",w),null;const n=new Ce(oe(function(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=ie,r=4*e.length,o=new Float64Array(3*r),i=new Float32Array(3*r),s=new Float32Array(2*r),a=new Uint32Array(2*e.length*3);let l=0,c=0,u=0,p=0;for(let f=0;f<e.length;f++){const r=e[f],d=l/3;for(const e of t)a[p++]=d+e;const h=r.corners;for(let e=0;e<4;e++){const t=h[e];let a=0;s[u++]=.25*n[e][0]+r.uvOrigin[0],s[u++]=r.uvOrigin[1]-.25*n[e][1];for(let e=0;e<3;e++)0!==r.axis[e]?(o[l++]=.5*r.axis[e],i[c++]=r.axis[e]):(o[l++]=.5*t[a++],i[c++]=0)}}return{position:o,normal:i,uv:s,faces:a}}(),e,t));return null!==t&&void 0!==t&&t.imageFace&&"all"!==t.imageFace?function(e,t){const n=e.components[0],r=n.faces,o=se[t],i=6*o,s=new Array(6),a=new Array(r.length-6);let l=0,c=0;for(let u=0;u<r.length;u++)u>=i&&u<i+6?s[l++]=r[u]:a[c++]=r[u];if(null!=e.vertexAttributes.uv){const t=new Float32Array(e.vertexAttributes.uv),n=4*o*2,r=[0,1,1,1,1,0,0,0];for(let e=0;e<r.length;e++)t[n+e]=r[e];e.vertexAttributes.uv=t}return e.components=[new x.A({faces:s,material:n.material}),new x.A({faces:a})],e}(n,t.imageFace):n}static createSphere(e,t){return e instanceof m.A?new Ce(oe(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,o=new Float64Array(3*r),i=new Float32Array(3*r),s=new Float32Array(2*r),a=new Uint32Array((t-1)*n*2*3);let l=0,c=0,u=0,p=0;for(let f=0;f<=t;f++){const e=f/t*Math.PI+.5*Math.PI,r=Math.cos(e),d=Math.sin(e);ae[2]=d;const h=0===f||f===t,v=h?n-1:n;for(let m=0;m<=v;m++){const e=m/v*2*Math.PI;ae[0]=-Math.sin(e)*r,ae[1]=Math.cos(e)*r;for(let t=0;t<3;t++)o[l]=.5*ae[t],i[l]=ae[t],++l;s[c++]=(m+(h?.5:0))/n,s[c++]=f/t,0!==f&&m!==n&&(f!==t&&(a[u++]=p,a[u++]=p+1,a[u++]=p-n),1!==f&&(a[u++]=p,a[u++]=p-n,a[u++]=p-n-1)),p++}}return{position:o,normal:i,uv:s,faces:a}}((null===t||void 0===t?void 0:t.densificationFactor)||0),e,t)):(Ee().error(".createSphere()",w),null)}static createCylinder(e,t){return e instanceof m.A?new Ce(oe(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const t=Math.round(16*2**e),n=4*(t+1)+2*t,r=new Float64Array(3*n),o=new Float32Array(3*n),i=new Float32Array(2*n),s=new Uint32Array(4*t*3);let a=0,l=0,c=0,u=0,p=0;for(let f=0;f<=5;f++){const e=0===f||5===f,n=f<=1||f>=4,d=2===f||4===f,h=e?t-1:t;for(let v=0;v<=h;v++){const m=v/h*2*Math.PI,g=e?0:.5;ae[0]=g*Math.sin(m),ae[1]=g*-Math.cos(m),ae[2]=f<=2?.5:-.5;for(let e=0;e<3;e++)r[a++]=ae[e],o[l++]=n?2===e?f<=1?1:-1:0:2===e?0:ae[e]/g;i[c++]=(v+(e?.5:0))/t,i[c++]=f<=1?1*f/3:f<=3?1*(f-2)/3+1/3:1*(f-4)/3+2/3,d||0===f||v===t||(5!==f&&(s[u++]=p,s[u++]=p+1,s[u++]=p-t),1!==f&&(s[u++]=p,s[u++]=p-t,s[u++]=p-t-1)),p++}}return{position:r,normal:o,uv:i,faces:s}}((null===t||void 0===t?void 0:t.densificationFactor)||0),e,t)):(Ee().error(".createCylinder()",w),null)}static createPlane(e,t){var n;if(!(e instanceof m.A))return Ee().error(".createPlane()",w),null;const r=null!==(n=null===t||void 0===t?void 0:t.facing)&&void 0!==n?n:"up",o=function(e,t){const n="number"==typeof t?t:null!=t?t.width:1,r="number"==typeof t?t:null!=t?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}(r,null===t||void 0===t?void 0:t.size);return new Ce(oe(function(e){const t=re.facingAxisOrderSwap[e],n=re.position,r=re.normal,o=new Float64Array(n.length),i=new Float32Array(r.length);let s=0;for(let a=0;a<4;a++){const e=s;for(let a=0;a<3;a++){const l=t[a],c=Math.abs(l)-1,u=l>=0?1:-1;o[s]=n[e+c]*u,i[s]=r[e+c]*u,s++}}return{position:o,normal:i,uv:new Float32Array(re.uv),faces:new Uint32Array(re.faces),isPlane:!0}}(r),e,{...t,size:o}))}static createFromPolygon(e,t){var n;if(!(e instanceof g.A))return Ee().error(".createFromPolygon()","Expected polygon to be a Polygon instance"),null;const r=(0,_.lO)(e);return new Ce({vertexAttributes:new R.H({position:r.position}),components:[new x.A({faces:r.faces,shading:"flat",material:null!==(n=null===t||void 0===t?void 0:t.material)&&void 0!==n?n:null})],spatialReference:e.spatialReference,vertexSpace:new b.A})}static async createFromGLTF(e,t,r){if(!(e instanceof m.A)){const e=new A;throw Ee().error(".createfromGLTF()",e.message),e}const{loadGLTFMesh:o}=await(0,c.qr)(n.e(7359).then(n.bind(n,17359)),r);return new Ce(await o(e,t,r))}static async createFromFiles(e,t,n){(0,o.eO)(Ee(),"`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'",{replacement:"SceneLayer.convertMesh",version:"4.29"});if(!(e instanceof m.A)){const e=new A;throw(e=>{Ee().error(".createFromFiles()",e.message)})(e),e}if(null===n||void 0===n||!n.layer)throw new i.A("invalid:no-layer","SceneLayer required for file to mesh conversion.");return n.layer.convertMesh(t,{location:e,...n})}static createWithExternalSource(e,t,n){var r,o,i,s;const a=null!==(r=null===n||void 0===n?void 0:n.extent)&&void 0!==r?r:null,{x:l,y:c,z:u,spatialReference:p}=e,f=null!==(o=null===n||void 0===n||null===(i=n.transform)||void 0===i?void 0:i.clone())&&void 0!==o?o:new M.A,h=(0,d.fA)(l,c,null!==u&&void 0!==u?u:0),v=(0,F.by)(null!==(s=null===n||void 0===n?void 0:n.vertexSpace)&&void 0!==s?s:(0,F.Uj)(p),h),m={source:t,extent:a},g=new te;return g.externalSources.push(m),new Ce({metadata:g,transform:f,vertexSpace:v,spatialReference:p})}static createIncomplete(e,t){var n,r,o;const{x:s,y:a,z:l,spatialReference:c}=e,u=null!==(n=null===t||void 0===t||null===(r=t.transform)||void 0===r?void 0:r.clone())&&void 0!==n?n:new M.A,p=(0,d.fA)(s,a,null!==l&&void 0!==l?l:0),f=(0,F.by)(null!==(o=null===t||void 0===t?void 0:t.vertexSpace)&&void 0!==o?o:(0,F.Uj)(c),p),h=new Ce({transform:u,vertexSpace:f,spatialReference:c});return h.addResolvingPromise(Promise.reject(new i.A("mesh-incomplete","Mesh resources are not complete"))),h}};(0,r._)([(0,p.MZ)({type:[x.A],json:{write:!0}})],Be.prototype,"components",void 0),(0,r._)([(0,p.MZ)({nonNullable:!0,types:ze,constructOnly:!0,json:{write:!0}})],Be.prototype,"vertexSpace",void 0),(0,r._)([(0,p.MZ)({type:M.A,json:{write:!0}})],Be.prototype,"transform",void 0),(0,r._)([(0,p.MZ)({constructOnly:!0})],Be.prototype,"metadata",void 0),(0,r._)([(0,p.MZ)()],Be.prototype,"hasExtent",null),(0,r._)([(0,p.MZ)()],Be.prototype,"_transformedExtent",null),(0,r._)([(0,p.MZ)()],Be.prototype,"_untransformedBounds",null),(0,r._)([(0,p.MZ)()],Be.prototype,"anchor",null),(0,r._)([(0,p.MZ)()],Be.prototype,"origin",null),(0,r._)([(0,p.MZ)({readOnly:!0,json:{read:!1}})],Be.prototype,"extent",null),(0,r._)([(0,p.MZ)({readOnly:!0,json:{read:!1,write:!0,default:!0}})],Be.prototype,"hasZ",void 0),(0,r._)([(0,p.MZ)({readOnly:!0,json:{read:!1,write:!0,default:!1}})],Be.prototype,"hasM",void 0),(0,r._)([(0,p.MZ)({type:R.H,nonNullable:!0,json:{write:!0}})],Be.prototype,"vertexAttributes",void 0),Be=Ce=(0,r._)([(0,f.$)(Ue)],Be);const De=(0,y.vt)(),Ze=Be},57045:(e,t,n)=>{n.d(t,{Bq:()=>l,Qp:()=>a,WN:()=>y,dK:()=>x,eN:()=>h,fH:()=>g,in:()=>v,yr:()=>c});var r=n(3825),o=n(18690),i=n(50346),s=n(19463);class a{constructor(e,t,n){this.assetName=e,this.assetMimeType=t,this.parts=n}equals(e){return this===e||this.assetName===e.assetName&&this.assetMimeType===e.assetMimeType&&(0,o.aI)(this.parts,e.parts,((e,t)=>e.equals(t)))}isOnService(e){return this.parts.every((t=>t.isOnService(e)))}makeHash(){let e="";for(const t of this.parts)e+=t.partHash;return e}async toBlob(e){const{parts:t}=this;if(1===t.length)return t[0].toBlob(e);const n=await Promise.all(t.map((t=>t.toBlob(e))));return(0,i.Te)(e),new Blob(n)}}class l{constructor(e,t){this.partUrl=e,this.partHash=t}equals(e){return this===e||this.partUrl===e.partUrl&&this.partHash===e.partHash}isOnService(e){return this.partUrl.startsWith("".concat(e.path,"/assets/"))}async toBlob(e){const{data:t}=await(0,r.A)(this.partUrl,{responseType:"blob"});return(0,i.Te)(e),t}}function c(e){return function(e){if(!e)return!1;if(Array.isArray(e))return e.some(d);return d(e)}(null===e||void 0===e?void 0:e.source)}function u(e){return!!Array.isArray(e)&&e.every((e=>e instanceof a))}const p=/^(model\/gltf\+json)|(model\/gltf-binary)$/,f=/\.(gltf|glb)/i;function d(e){if(e instanceof File){const{type:t,name:n}=e;return p.test(t)||f.test(n)}return p.test(e.assetMimeType)||f.test(e.assetName)}function h(e,t){if(!e)return!1;const{source:n}=e;return function(e,t){if(Array.isArray(e)){const n=e;return n.length>0&&n.every((e=>m(e,t)))}return m(e,t)}(n,t)}function v(e,t){if(e===t)return!0;const{source:n}=e,{source:r}=t;if(n===r)return!0;if(u(n)&&u(r)){if(n.length!==r.length)return!1;const e=(e,t)=>e.assetName<t.assetName?-1:e.assetName>t.assetName?1:0,t=[...n].sort(e),o=[...r].sort(e);for(let n=0;n<t.length;++n)if(!t[n].equals(o[n]))return!1;return!0}return!1}function m(e,t){return e instanceof a&&e.isOnService(t)}function g(e,t){var n;return e instanceof File?(0,s.rq)(e,t):null!==(n=(0,s.R_)(e.assetMimeType,t))&&void 0!==n?n:(0,s.E1)(e.assetName,t)}function y(e){return Array.isArray(e)?e:[e]}function x(e){return!!e.original}}}]);
//# sourceMappingURL=8582.e19867a9.chunk.js.map