"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[1014],{28586:(t,e,n)=>{var i,r,a,o,s,c,l,u,p,g,N,f,d,m,S;n.d(e,{CP:()=>a,EF:()=>m,El:()=>l,LU:()=>i,Nt:()=>u,Pl:()=>h,Qg:()=>S,TJ:()=>d,_N:()=>s,eN:()=>o,h7:()=>r,vE:()=>b}),function(t){t.U8="U8",t.I8="I8",t.U16="U16",t.I16="I16",t.U32="U32",t.I32="I32",t.F32="F32",t.F64="F64",t.Utf8String="Utf8String",t.NotSet="NotSet"}(i||(i={})),function(t){t.Png="Png",t.Jpeg="Jpeg",t.Dds="Dds",t.Raw="Raw",t.Dxt1="Dxt1",t.Dxt5="Dxt5",t.Etc2="Etc2",t.Astc="Astc",t.Pvrtc="Pvrtc",t.NotSet="NotSet"}(r||(r={})),function(t){t.Rgb8="Rgb8",t.Rgba8="Rgba8",t.R8="R8",t.Bgr8="Bgr8",t.Bgra8="Bgra8",t.Rg8="Rg8",t.NotSet="NotSet"}(a||(a={})),function(t){t.Position="Position",t.Normal="Normal",t.TexCoord="TexCoord",t.Color="Color",t.Tangent="Tangent",t.FeatureIndex="FeatureIndex",t.UvRegion="UvRegion",t.NotSet="NotSet"}(o||(o={})),function(t){t.Opaque="Opaque",t.Mask="Mask",t.Blend="Blend"}(s||(s={})),function(t){t.None="None",t.Mask="Mask",t.Alpha="Alpha",t.PreMultAlpha="PreMultAlpha",t.NotSet="NotSet"}(c||(c={})),function(t){t.Points="Points",t.Lines="Lines",t.LineStrip="LineStrip",t.Triangles="Triangles",t.TriangleStrip="TriangleStrip",t.NotSet="NotSet"}(l||(l={})),function(t){t.None="None",t.WrapXBit="WrapXBit",t.WrapYBit="WrapYBit",t.WrapXy="WrapXy",t.NotSet="NotSet"}(u||(u={})),function(t){t.Linear="Linear",t.Nearest="Nearest",t.NotSet="NotSet"}(p||(p={})),function(t){t.Linear="Linear",t.Nearest="Nearest",t.NearestMipmapNearest="NearestMipmapNearest",t.LinearMipmapNearest="LinearMipmapNearest",t.NearestMipmapLinear="NearestMipmapLinear",t.LinearMipmapLinear="LinearMipmapLinear",t.NotSet="NotSet"}(g||(g={})),function(t){t.FeatureId="FeatureId",t.GlobalUid="GlobalUid",t.UnspecifiedDateTime="UnspecifiedDateTime",t.EcmaIso8601DateTime="EcmaIso8601DateTime",t.EcmaIso8601DateOnly="EcmaIso8601DateOnly",t.TimeOnly="TimeOnly",t.TimeStamp="TimeStamp",t.ColorRgb="ColorRgb",t.ColorRgba="ColorRgba",t.Unrecognized="Unrecognized",t.NotSet="NotSet"}(N||(N={})),function(t){t.Texture="Texture",t.VertexAtrb="VertexAtrb",t.Implicit="Implicit",t.NotSet="NotSet"}(f||(f={})),function(t){t.Front="Front",t.Back="Back",t.None="None",t.NotSet="NotSet"}(d||(d={})),function(t){t.Pbr="Pbr",t.Unlit="Unlit"}(m||(m={})),function(t){t[t.Succeeded=0]="Succeeded",t[t.Failed=1]="Failed",t[t.MissingInputs=2]="MissingInputs"}(S||(S={}));const h=-1,b=-2},43414:(t,e,n)=>{n.d(e,{a:()=>r,h:()=>a});var i=n(28899);function r(){return new Promise((t=>n.e(4001).then(n.bind(n,26382)).then((t=>t.l)).then((e=>{let{default:n}=e;const i=n({locateFile:o,onRuntimeInitialized:()=>t(i)})})))).catch((t=>{throw t}))}function a(){return new Promise((t=>n.e(3409).then(n.bind(n,23409)).then((t=>t.l)).then((e=>{let{default:n}=e;const i=n({locateFile:o,onRuntimeInitialized:()=>t(i)})})))).catch((t=>{throw t}))}function o(t){return(0,i.s)("esri/libs/lyr3d/".concat(t))}},1014:(t,e,n)=>{n.r(e),n.d(e,{destroyWasm:()=>c,initialize:()=>l,process:()=>s});var i=n(28586),r=n(43414);let a,o;async function s(t){if(await l(),t.inputs.length<1)return{result:{status:i.Qg.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]},transferList:[]};const e={ptrs:[],sizes:[]};for(const i of t.inputs){const t=o._malloc(i.byteLength);new Uint8Array(o.HEAPU8.buffer,t,i.byteLength).set(new Uint8Array(i)),e.ptrs.push(t),e.sizes.push(i.byteLength)}const n=o.process(t.jobDescJson,e,t.isMissingResourceCase),r=n.status===i.Qg.Succeeded&&n.data,a=n.status===i.Qg.MissingInputs&&n.missingInputUrls.length>0;if(r){const t=n.data.slice();n.data=t}else a&&(n.jobDescJson=n.jobDescJson.slice(0),n.originalInputs=t.inputs);for(let i=0;i<e.ptrs.length;++i)o._free(e.ptrs[i]);const s=[];if(r)s.push(n.data.buffer);else if(a)for(const i of t.inputs)s.push(i);return{result:n,transferList:s}}function c(){o&&(o.uninitialize_lyr3d_worker_wasm(),o=null)}function l(){return o?Promise.resolve():(a||(a=(0,r.h)().then((t=>{o=t,o.initialize_lyr3d_worker_wasm(),a=null}))),a)}}}]);
//# sourceMappingURL=1014.e6f18e89.chunk.js.map