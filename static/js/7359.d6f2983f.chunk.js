"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[7359,7040],{52007:(e,t,n)=>{n.d(t,{a:()=>l,f:()=>i,n:()=>r});var o=n(78393);function r(e,t){l(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;const l=t.length/2;let i=0,u=0;if((0,o.cy)(t)||(0,o.dk)(t)){for(let o=0;o<l;++o)e[i]=t[u],e[i+1]=t[u+1],i+=n,u+=r;return}const c=(0,o.a3)(t);if((0,o.JI)(t))for(let o=0;o<l;++o)e[i]=Math.max(t[u]/c,-1),e[i+1]=Math.max(t[u+1]/c,-1),i+=n,u+=r;else for(let o=0;o<l;++o)e[i]=t[u]/c,e[i+1]=t[u+1]/c,i+=n,u+=r}function i(e,t,n,o){var r,l;const i=e.typedBuffer,u=e.typedBufferStride,c=null!==(r=null===o||void 0===o?void 0:o.count)&&void 0!==r?r:e.count;let s=(null!==(l=null===o||void 0===o?void 0:o.dstIndex)&&void 0!==l?l:0)*u;for(let a=0;a<c;++a)i[s]=t,i[s+1]=n,s+=u}Object.freeze(Object.defineProperty({__proto__:null,fill:i,normalizeIntegerBuffer:l,normalizeIntegerBufferView:r},Symbol.toStringTag,{value:"Module"}))},2e3:(e,t,n)=>{function o(e,t){r(e.typedBuffer,t,e.typedBufferStride)}function r(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;const o=t.typedBuffer,r=t.typedBufferStride,l=t.count;let i=0,u=0;for(let c=0;c<l;++c)e[i]=o[u],e[i+1]=o[u+1],e[i+2]=o[u+2],e[i+3]=o[u+3],i+=n,u+=r}function l(e,t,n,o,r,l){var i,u;const c=e.typedBuffer,s=e.typedBufferStride,a=null!==(i=null===l||void 0===l?void 0:l.count)&&void 0!==i?i:e.count;let f=(null!==(u=null===l||void 0===l?void 0:l.dstIndex)&&void 0!==u?u:0)*s;for(let d=0;d<a;++d)c[f]=t,c[f+1]=n,c[f+2]=o,c[f+3]=r,f+=s}n.d(t,{a:()=>r,c:()=>o,f:()=>l});Object.freeze(Object.defineProperty({__proto__:null,copy:r,copyView:o,fill:l},Symbol.toStringTag,{value:"Module"}))},17359:(e,t,n)=>{n.r(t),n.d(t,{loadGLTFMesh:()=>O});var o=n(69539),r=n(3825),l=n(50076),i=n(87663),u=n(15941),c=n(86300),s=n(44680),a=n(9392),f=n(55855),d=n(79629),p=n(44032),v=n(75257),m=n(63713),y=n(56623),g=n(99773),x=n(88105),T=n(45136),h=n(10947),b=n(6381);Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,n){var o,r;const l=e.typedBuffer,i=e.typedBufferStride,u=t.typedBuffer,c=t.typedBufferStride,s=n?n.count:t.count;let a=(null!==(o=null===n||void 0===n?void 0:n.dstIndex)&&void 0!==o?o:0)*i,f=(null!==(r=null===n||void 0===n?void 0:n.srcIndex)&&void 0!==r?r:0)*c;for(let d=0;d<s;++d){for(let e=0;e<9;++e)l[a+e]=u[f+e];a+=i,f+=c}}},Symbol.toStringTag,{value:"Module"}));Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,n){var o,r;const l=e.typedBuffer,i=e.typedBufferStride,u=t.typedBuffer,c=t.typedBufferStride,s=n?n.count:t.count;let a=(null!==(o=null===n||void 0===n?void 0:n.dstIndex)&&void 0!==o?o:0)*i,f=(null!==(r=null===n||void 0===n?void 0:n.srcIndex)&&void 0!==r?r:0)*c;for(let d=0;d<s;++d){for(let e=0;e<16;++e)l[a+e]=u[f+e];a+=i,f+=c}}},Symbol.toStringTag,{value:"Module"}));n(39539);var w=n(52007),B=n(64591),A=n(2e3);function S(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,b.GJ)(e.ElementType)))}var E=n(53848),R=n(11109),_=n(56516),I=n(420),C=n(37040),L=n(50791),M=n(93345);async function O(e,t,n){const c=new R.R(function(e){const t=null===e||void 0===e?void 0:e.resolveFile;return t?{busy:!1,request:async(e,n,o)=>{var l;const i=null!==(l=null===t||void 0===t?void 0:t(e))&&void 0!==l?l:e,u="image"===n?"image":"binary"===n||"image+type"===n?"array-buffer":"json";return(await(0,r.A)(i,{responseType:u,signal:null===o||void 0===o?void 0:o.signal,timeout:0})).data}}:null}(n)),s=(await(0,_.loadGLTF)(c,t,n,!0)).model,d=s.lods.shift(),T=new Map,h=new Map;s.textures.forEach(((e,t)=>T.set(t,function(e){return new v.A({data:((0,C.x3)(e.data),e.data),wrap:N(e.parameters.wrap)})}(e)))),s.materials.forEach(((e,t)=>h.set(t,function(e,t){const n=new o.A(function(e,t){return(0,f.fA)(z(e[0]),z(e[1]),z(e[2]),t)}(e.color,e.opacity)),r=e.emissiveFactor?new o.A(function(e){return(0,a.fA)(z(e[0]),z(e[1]),z(e[2]))}(e.emissiveFactor)):null,l=e=>{var t;return e?new m.A({scale:e.scale?[e.scale[0],e.scale[1]]:[1,1],rotation:(0,u.KJ)(null!==(t=e.rotation)&&void 0!==t?t:0),offset:e.offset?[e.offset[0],e.offset[1]]:[0,0]}):null};return new p.A({color:n,colorTexture:t.get(e.textureColor),normalTexture:t.get(e.textureNormal),emissiveColor:r,emissiveTexture:t.get(e.textureEmissive),occlusionTexture:t.get(e.textureOcclusion),alphaMode:P(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.textureMetallicRoughness),colorTextureTransform:l(e.colorTextureTransform),normalTextureTransform:l(e.normalTextureTransform),occlusionTextureTransform:l(e.occlusionTextureTransform),emissiveTextureTransform:l(e.emissiveTextureTransform),metallicRoughnessTextureTransform:l(e.metallicRoughnessTextureTransform)})}(e,T))));const b=function(e){let t=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},o=new Map,r=new Map,l=[];for(const u of e.parts){const{attributes:{position:e,normal:c,color:s,tangent:a,texCoord0:f}}=u,d="\n      ".concat(U(e,o),"/\n      ").concat(U(c,o),"/\n      ").concat(U(s,o),"/\n      ").concat(U(a,o),"/\n      ").concat(U(f,o),"/\n      ").concat(F(u.transform),"\n    ");let p=!1;const v=(0,i.tE)(r,d,(()=>(p=!0,{start:t,length:e.count})));p&&(t+=e.count),c&&(n.normal=!0),s&&(n.color=!0),a&&(n.tangent=!0),f&&(n.texCoord0=!0),l.push({gltf:u,writeVertices:p,region:v})}return{vertexAttributes:{position:S(x.Xm,t),normal:n.normal?S(x.xs,t):null,tangent:n.tangent?S(x.Eq,t):null,color:n.color?S(x.XP,t):null,texCoord0:n.texCoord0?S(x.gH,t):null},parts:l,components:[]}}(d);for(const o of b.parts)j(b,o,h);const{position:w,normal:B,tangent:A,color:I,texCoord0:L}=b.vertexAttributes,M=(0,g.TE)(e,n),O=e.spatialReference.isGeographic?(0,g.TE)(e):M,G=(0,E.UR)({vertexAttributes:{position:w.typedBuffer,normal:null===B||void 0===B?void 0:B.typedBuffer,tangent:null===A||void 0===A?void 0:A.typedBuffer},vertexSpace:O,spatialReference:e.spatialReference},M,{allowBufferReuse:!0,sourceUnit:null!==n&&void 0!==n&&n.unitConversionDisabled?void 0:"meters"});if(!G)throw new l.A("load-gltf-mesh:vertex-space-projection","Failed to load mesh from glTF because we could not convert the vertex space from ".concat(O.type," to ").concat(M.type));return{transform:null,vertexSpace:M,components:b.components,spatialReference:e.spatialReference,vertexAttributes:new y.H({...G,color:null===I||void 0===I?void 0:I.typedBuffer,uv:null===L||void 0===L?void 0:L.typedBuffer})}}function U(e,t){if(null==e)return"-";const n=e.typedBuffer;return"".concat((0,i.tE)(t,n.buffer,(()=>t.size)),"/").concat(n.byteOffset,"/").concat(n.byteLength)}function F(e){return null!=e?e.toString():"-"}function j(e,t,n){t.writeVertices&&function(e,t){const{position:n,normal:o,tangent:r,color:l,texCoord0:i}=e.vertexAttributes,a=t.region.start,{attributes:f,transform:d}=t.gltf,p=f.position.count;if((0,T.d)(n.slice(a,p),f.position,d),null!=f.normal&&null!=o){const e=(0,c.Ge)((0,s.vt)(),d),t=o.slice(a,p);(0,T.c)(t,f.normal,e),(0,u.or)(e)&&(0,T.e)(t,t)}else null!=o&&(0,B.f)(o,0,0,1,{dstIndex:a,count:p});if(null!=f.tangent&&null!=r){const e=(0,c.z0)((0,s.vt)(),d),t=r.slice(a,p);(0,h.a)(t,f.tangent,e),(0,u.or)(e)&&(0,h.n)(t,t)}else null!=r&&(0,A.f)(r,0,0,1,1,{dstIndex:a,count:p});if(null!=f.texCoord0&&null!=i?(0,w.n)(i.slice(a,p),f.texCoord0):null!=i&&(0,w.f)(i,0,0,{dstIndex:a,count:p}),null!=f.color&&null!=l){const e=f.color,t=l.slice(a,p);if(4===e.elementCount)e instanceof x.Eq?(0,h.s)(t,e,255):e instanceof x.XP?(0,A.c)(t,e):e instanceof x.Uz&&(0,h.s)(t,e,1/256);else{(0,A.f)(t,255,255,255,255);const n=x.eI.fromTypedArray(t.typedBuffer,t.typedBufferStride);e instanceof x.xs?(0,T.s)(n,e,255):e instanceof x.eI?(0,B.a)(n,e):e instanceof x.nS&&(0,T.s)(n,e,1/256)}}else null!=l&&(0,A.f)(l.slice(a,p),255,255,255,255)}(e,t);const{indices:o,attributes:r,primitiveType:l,material:i}=t.gltf;let a=(0,I.x)(o||r.position.count,l);const f=t.region.start;if(f){const e=new Uint32Array(a);for(let t=0;t<a.length;t++)e[t]+=f;a=e}e.components.push(new d.A({name:t.gltf.name,faces:a,material:n.get(i),shading:r.normal?"source":"flat",trustSourceNormals:!0}))}function P(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function N(e){return{horizontal:G(e.s),vertical:G(e.t)}}function G(e){switch(e){case M.pF.CLAMP_TO_EDGE:return"clamp";case M.pF.MIRRORED_REPEAT:return"mirror";case M.pF.REPEAT:return"repeat"}}function z(e){return e**(1/L.T)*255}},420:(e,t,n)=>{n.d(t,{x:()=>i});var o=n(78393),r=n(38496),l=n(93345);function i(e,t){switch(t){case l.WR.TRIANGLES:return"number"==typeof(n=e)?(0,r.tM)(n):(0,o.mg)(n)?new Uint16Array(n):n;case l.WR.TRIANGLE_STRIP:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return[];const n=t-2,o=(0,r.my)(3*n);if("number"==typeof e){let e=0;for(let t=0;t<n;t+=1)t%2==0?(o[e++]=t,o[e++]=t+1,o[e++]=t+2):(o[e++]=t+1,o[e++]=t,o[e++]=t+2)}else{let t=0;for(let r=0;r<n;r+=1)r%2==0?(o[t++]=e[r],o[t++]=e[r+1],o[t++]=e[r+2]):(o[t++]=e[r+1],o[t++]=e[r],o[t++]=e[r+2])}return o}(e);case l.WR.TRIANGLE_FAN:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const n=t-2,o=n<=65536?new Uint16Array(3*n):new Uint32Array(3*n);if("number"==typeof e){let e=0;for(let t=0;t<n;++t)o[e++]=0,o[e++]=t+1,o[e++]=t+2;return o}const r=e[0];let l=e[1],i=0;for(let u=0;u<n;++u){const t=e[u+2];o[i++]=r,o[i++]=l,o[i++]=t,l=t}return o}(e)}var n}},37040:(e,t,n)=>{n.d(t,{KB:()=>u,Xi:()=>l,pn:()=>c,x3:()=>i});var o=n(81806),r=n(83490);class l{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=r.JS.KTX2_ENCODING}}function i(e){return"encoded-mesh-texture"===(null===e||void 0===e?void 0:e.type)}async function u(e){const t=new Blob([e]),n=await t.text();return JSON.parse(n)}async function c(e,t){if(t===r.JS.KTX2_ENCODING)return new l(e);const n=new Blob([e],{type:t}),i=URL.createObjectURL(n),u=new Image;if((0,o.A)("esri-iPhone"))return new Promise(((e,t)=>{const n=()=>{r(),e(u)},o=e=>{r(),t(e)},r=()=>{URL.revokeObjectURL(i),u.removeEventListener("load",n),u.removeEventListener("error",o)};u.addEventListener("load",n),u.addEventListener("error",o),u.src=i}));try{u.src=i,await u.decode()}catch(c){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(i),u}},50791:(e,t,n)=>{n.d(t,{T:()=>o});const o=2.1}}]);
//# sourceMappingURL=7359.d6f2983f.chunk.js.map