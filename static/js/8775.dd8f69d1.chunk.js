"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[8775,6141],{77176:(t,e,n)=>{n.d(e,{b:()=>s});var r=n(15941),o=n(38496);function s(t,e,n){var s;const u=Array.isArray(t),f=u?t.length/e:t.byteLength/(4*e),d=u?t:new Uint32Array(t,0,f*e),g=null!==(s=null===n||void 0===n?void 0:n.minReduction)&&void 0!==s?s:0,h=(null===n||void 0===n?void 0:n.originalIndices)||null,p=h?h.length:0,N=(null===n||void 0===n?void 0:n.componentOffsets)||null;let I=0;if(N)for(let r=0;r<N.length-1;r++){const t=N[r+1]-N[r];t>I&&(I=t)}else I=f;const A=Math.floor(1.1*I)+1;(null==l||l.length<2*A)&&(l=new Uint32Array((0,r.cU)(2*A)));for(let r=0;r<2*A;r++)l[r]=0;let v=0;const O=!!N&&!!h,m=O?p:f;let S=(0,o.my)(f);const w=new Uint32Array(p),E=1.96;let T=0!==g?Math.ceil(4*E*E/(g*g)*g*(1-g)):m,y=1,P=N?N[1]:m;for(let r=0;r<m;r++){if(r===T){const t=1-v/r;if(t+E*Math.sqrt(t*(1-t)/r)<g)return null;T*=2}if(r===P){for(let t=0;t<2*A;t++)l[t]=0;if(h)for(let t=N[y-1];t<N[y];t++)w[t]=S[h[t]];P=N[++y]}const t=O?h[r]:r,n=t*e,o=a(d,n,e);let s=o%A,c=v;for(;0!==l[2*s+1];){if(l[2*s]===o){const t=l[2*s+1]-1;if(i(d,n,t*e,e)){c=S[t];break}}s++,s>=A&&(s-=A)}c===v&&(l[2*s]=o,l[2*s+1]=t+1,v++),S[t]=c}if(0!==g&&1-v/f<g)return null;if(O){for(let t=N[y-1];t<w.length;t++)w[t]=S[h[t]];S=(0,o.Dg)(w)}const M=u?new Array(v):new Uint32Array(v*e);v=0;for(let r=0;r<m;r++)S[r]===v&&(c(d,(O?h[r]:r)*e,M,v*e,e),v++);if(h&&!O){const t=new Uint32Array(p);for(let e=0;e<t.length;e++)t[e]=S[h[e]];S=(0,o.Dg)(t)}return{buffer:Array.isArray(M)?M:M.buffer,indices:S,uniqueCount:v}}function i(t,e,n,r){for(let o=0;o<r;o++)if(t[e+o]!==t[n+o])return!1;return!0}function c(t,e,n,r,o){for(let s=0;s<o;s++)n[r+s]=t[e+s]}function a(t,e,n){let r=0;for(let o=0;o<n;o++)r=t[e+o]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let l=null},96141:(t,e,n)=>{n.d(e,{EdgeInputBufferLayout:()=>i,In:()=>u,gr:()=>l,vG:()=>f,vJ:()=>c,wO:()=>a});var r=n(57481),o=n(48549),s=n(66470);const i=(0,o.BP)().vec3f(s.r.POSITION).u16(s.r.COMPONENTINDEX).freeze(),c=(0,o.BP)().vec2u8(s.r.SIDENESS).freeze(),a=(0,r.U)(c),l=(0,o.BP)().vec3f(s.r.POSITION0).vec3f(s.r.POSITION1).vec2i16(s.r.NORMALCOMPRESSED).u16(s.r.COMPONENTINDEX).u8(s.r.VARIANTOFFSET,{glNormalized:!0}).u8(s.r.VARIANTSTROKE).u8(s.r.VARIANTEXTENSION,{glNormalized:!0}).freeze(),u=(0,o.BP)().vec3f(s.r.POSITION0).vec3f(s.r.POSITION1).vec2i16(s.r.NORMALCOMPRESSED).vec2i16(s.r.NORMAL2COMPRESSED).u16(s.r.COMPONENTINDEX).u8(s.r.VARIANTOFFSET,{glNormalized:!0}).u8(s.r.VARIANTSTROKE).u8(s.r.VARIANTEXTENSION,{glNormalized:!0}).freeze(),f=new Map([[s.r.POSITION0,0],[s.r.POSITION1,1],[s.r.COMPONENTINDEX,2],[s.r.VARIANTOFFSET,3],[s.r.VARIANTSTROKE,4],[s.r.VARIANTEXTENSION,5],[s.r.NORMALCOMPRESSED,6],[s.r.NORMAL2COMPRESSED,7],[s.r.SIDENESS,8]])},69413:(t,e,n)=>{n.d(e,{T:()=>I,k:()=>A});var r=n(47249),o=n(20664),s=n(9392),i=n(57481),c=n(25672),a=n(96141);class l{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?h:g}write(t,e,n){O.seed=this._edgeHashFunction(n);const r=O.getIntRange(0,255),o=O.getIntRange(0,this.settings.variants-1),s=O.getFloat(),i=255*(.5*function(t,e){return Math.abs(t)**e*Math.sign(t)}(-(1-Math.min(s/.7,1))+Math.max(0,s-.7)/(1-.7),1.2)+.5);t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1),t.componentIndex.set(e,n.componentIndex),t.variantOffset.set(e,r),t.variantStroke.set(e,o),t.variantExtension.set(e,i)}}const u=new Float32Array(6),f=new Uint32Array(u.buffer),d=new Uint32Array(1);function g(t){return u[0]=t.position0[0],u[1]=t.position0[1],u[2]=t.position0[2],u[3]=t.position1[0],u[4]=t.position1[1],u[5]=t.position1[2],d[0]=31*(31*(31*(31*(31*(166811+f[0])+f[1])+f[2])+f[3])+f[4])+f[5],d[0]}function h(t){const e=u;e[0]=N(t.position0[0]),e[1]=N(t.position0[1]),e[2]=N(t.position0[2]),e[3]=N(t.position1[0]),e[4]=N(t.position1[1]),e[5]=N(t.position1[2]),d[0]=5381;for(let n=0;n<f.length;n++)d[0]=31*d[0]+f[n];return d[0]}const p=1e4;function N(t){return Math.round(t*p)/p}class I{constructor(){this._commonWriter=new l}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return a.gr.createBuffer(t)}write(t,e,n){this._commonWriter.write(t,e,n),(0,o.g)(v,n.faceNormal0,n.faceNormal1),(0,o.n)(v,v);const{typedBuffer:r,typedBufferStride:s}=t.normalCompressed;(0,c.aT)(r,e,v[0],v[1],v[2],s)}}I.Layout=a.gr,I.glLayout=(0,i.U)(a.gr,1);class A{constructor(){this._commonWriter=new l}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return a.In.createBuffer(t)}write(t,e,n){this._commonWriter.write(t,e,n);{const{typedBuffer:r,typedBufferStride:o}=t.normalCompressed;(0,c.aT)(r,e,n.faceNormal0[0],n.faceNormal0[1],n.faceNormal0[2],o)}{const{typedBuffer:r,typedBufferStride:o}=t.normal2Compressed;(0,c.aT)(r,e,n.faceNormal1[0],n.faceNormal1[1],n.faceNormal1[2],o)}}}A.Layout=a.In,A.glLayout=(0,i.U)(a.In,1);const v=(0,s.vt)(),O=new r.A},7150:(t,e,n)=>{n.d(e,{K:()=>a});var r=n(15941),o=n(68930),s=n(20664),i=n(9392);const c=-1;function a(t,e,n){const r=t.vertices.position,o=t.vertices.componentIndex,i=p.position0,a=p.position1,f=p.faceNormal0,g=p.faceNormal1,{edges:h,normals:N}=u(t),I=h.length/4,A=e.allocate(I);let v=0;const O=I,w=null===n||void 0===n?void 0:n.allocate(O);let T=0,y=0,P=0;d.length=0;for(let c=0;c<I;++c){const t=4*c;r.getVec(h.data[t],i),r.getVec(h.data[t+1],a);const e=d.pushNew();e.index=4*c,e.length=(0,s.j)(i,a)}d.sort(((t,e)=>e.length-t.length));const M=new Array,R=new Array;d.forAll((t=>{let{length:u,index:d}=t;const I=h.data[d],O=h.data[d+1],L=h.data[d+2],V=h.data[d+3],b=V===c;if(r.getVec(I,i),r.getVec(O,a),b){const t=3*L;(0,s.i)(f,N.data[t],N.data[t+1],N.data[t+2]),(0,s.c)(g,f),p.componentIndex=o.get(I),p.cosAngle=(0,s.f)(f,g)}else{let t=3*L;if((0,s.i)(f,N.data[t],N.data[t+1],N.data[t+2]),t=3*V,(0,s.i)(g,N.data[t],N.data[t+1],N.data[t+2]),p.componentIndex=o.get(I),p.cosAngle=(0,s.f)(f,g),function(t,e){return t.cosAngle>e}(p,S))return;p.cosAngle<-.9999&&(0,s.c)(g,f)}y+=u,P++,b||function(t,e){return t.cosAngle<e}(p,E)?(e.write(A,v++,p),M.push(u)):l(p,m)&&(w&&n&&n.write(w,T++,p),R.push(u))}));const L=new Float32Array(M.reverse()),V=new Float32Array(R.reverse()),b=w&&n?{instancesData:w.slice(0,T),lodInfo:{lengths:V}}:void 0;return{regular:{instancesData:A.slice(0,v),lodInfo:{lengths:L}},silhouette:b,averageEdgeLength:y/P}}function l(t,e){const n=(0,r.XM)(t.cosAngle);return(0,s.o)(I,t.position1,t.position0),n*((0,s.f)((0,s.e)(N,t.faceNormal0,t.faceNormal1),I)>0?-1:1)>e}function u(t){const e=t.faces.length/3,n=t.faces,r=t.neighbors,o=t.vertices.position;g.length=h.length=0;for(let i=0;i<e;i++){const t=3*i,e=r[t],a=r[t+1],l=r[t+2],u=n[t],f=n[t+1],d=n[t+2];o.getVec(u,A),o.getVec(f,v),o.getVec(d,O),(0,s.d)(v,v,A),(0,s.d)(O,O,A),(0,s.e)(A,v,O),(0,s.n)(A,A),h.pushArray(A),(e===c||u<f)&&(g.push(u),g.push(f),g.push(i),g.push(e)),(a===c||f<d)&&(g.push(f),g.push(d),g.push(i),g.push(a)),(l===c||d<u)&&(g.push(d),g.push(u),g.push(i),g.push(l))}return{edges:g,normals:h}}class f{constructor(){this.index=0,this.length=0}}const d=new o.A({allocator:t=>t||new f,deallocator:null}),g=new o.A({deallocator:null}),h=new o.A({deallocator:null}),p=new class{constructor(){this.position0=(0,i.vt)(),this.position1=(0,i.vt)(),this.faceNormal0=(0,i.vt)(),this.faceNormal1=(0,i.vt)(),this.componentIndex=0,this.cosAngle=0}},N=(0,i.vt)(),I=(0,i.vt)(),A=(0,i.vt)(),v=(0,i.vt)(),O=(0,i.vt)(),m=(0,r.kU)(4),S=Math.cos(m),w=(0,r.kU)(35),E=Math.cos(w)},8775:(t,e,n)=>{n.d(e,{o6:()=>u,extractComponentsEdgeLocationsLayout:()=>N,hx:()=>f,Jb:()=>p});var r=n(77176);function o(t,e,n){const r=e/3,o=new Uint32Array(n+1),s=new Uint32Array(n+1),i=(t,e)=>{t<e?o[t+1]++:s[e+1]++};for(let I=0;I<r;I++){const e=t[3*I],n=t[3*I+1],r=t[3*I+2];i(e,n),i(n,r),i(r,e)}let c=0,a=0;for(let I=0;I<n;I++){const t=o[I+1],e=s[I+1];o[I+1]=c,s[I+1]=a,c+=t,a+=e}const l=new Uint32Array(6*r),u=o[n],f=(t,e,n)=>{if(t<e){const r=o[t+1]++;l[2*r]=e,l[2*r+1]=n}else{const r=s[e+1]++;l[2*u+2*r]=t,l[2*u+2*r+1]=n}};for(let I=0;I<r;I++){const e=t[3*I],n=t[3*I+1],r=t[3*I+2];f(e,n,I),f(n,r,I),f(r,e,I)}const d=(t,e)=>{const n=2*t,r=e-t;for(let o=1;o<r;o++){const t=l[n+2*o],e=l[n+2*o+1];let r=o-1;for(;r>=0&&l[n+2*r]>t;r--)l[n+2*r+2]=l[n+2*r],l[n+2*r+3]=l[n+2*r+1];l[n+2*r+2]=t,l[n+2*r+3]=e}};for(let I=0;I<n;I++)d(o[I],o[I+1]),d(u+s[I],u+s[I+1]);const g=new Int32Array(3*r),h=(e,n)=>e===t[3*n]?0:e===t[3*n+1]?1:e===t[3*n+2]?2:-1,p=(t,e)=>{const n=h(t,e);g[3*e+n]=-1},N=(t,e,n,r)=>{const o=h(t,e);g[3*e+o]=r;const s=h(n,r);g[3*r+s]=e};for(let I=0;I<n;I++){let t=o[I];const e=o[I+1];let n=s[I];const r=s[I+1];for(;t<e&&n<r;){const e=l[2*t],r=l[2*u+2*n];e===r?(N(I,l[2*t+1],r,l[2*u+2*n+1]),t++,n++):e<r?(p(I,l[2*t+1]),t++):(p(r,l[2*u+2*n+1]),n++)}for(;t<e;)p(I,l[2*t+1]),t++;for(;n<r;)p(l[2*u+2*n],l[2*u+2*n+1]),n++}return g}var s=n(48549),i=n(66470),c=n(96141),a=n(69413),l=n(7150);function u(t){const e=f(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return g.updateSettings(t.writerSettings),h.updateSettings(t.writerSettings),(0,l.K)(e,g,h)}function f(t,e,n,s){if(e){const e=o(n,s,t.count);return new d(n,s,e,t)}const i=(0,r.b)(t.buffer,t.stride/4,{originalIndices:n,originalIndicesLength:s}),a=o(i.indices,s,i.uniqueCount);return{faces:i.indices,facesLength:i.indices.length,neighbors:a,vertices:c.EdgeInputBufferLayout.createView(i.buffer)}}class d{constructor(t,e,n,r){this.faces=t,this.facesLength=e,this.neighbors=n,this.vertices=r}}const g=new a.T,h=new a.k,p=(0,s.BP)().vec3f(i.r.POSITION0).vec3f(i.r.POSITION1),N=(0,s.BP)().vec3f(i.r.POSITION0).vec3f(i.r.POSITION1).u16(i.r.COMPONENTINDEX)}}]);
//# sourceMappingURL=8775.dd8f69d1.chunk.js.map