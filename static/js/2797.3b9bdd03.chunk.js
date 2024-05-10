"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[2797],{28586:(e,t,i)=>{var r,n,a,s,o,l,d,u,h,c,_,g,y,b,m;i.d(t,{CP:()=>a,EF:()=>b,El:()=>d,LU:()=>r,Nt:()=>u,Pl:()=>f,Qg:()=>m,TJ:()=>y,_N:()=>o,eN:()=>s,h7:()=>n,vE:()=>p}),function(e){e.U8="U8",e.I8="I8",e.U16="U16",e.I16="I16",e.U32="U32",e.I32="I32",e.F32="F32",e.F64="F64",e.Utf8String="Utf8String",e.NotSet="NotSet"}(r||(r={})),function(e){e.Png="Png",e.Jpeg="Jpeg",e.Dds="Dds",e.Raw="Raw",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.Etc2="Etc2",e.Astc="Astc",e.Pvrtc="Pvrtc",e.NotSet="NotSet"}(n||(n={})),function(e){e.Rgb8="Rgb8",e.Rgba8="Rgba8",e.R8="R8",e.Bgr8="Bgr8",e.Bgra8="Bgra8",e.Rg8="Rg8",e.NotSet="NotSet"}(a||(a={})),function(e){e.Position="Position",e.Normal="Normal",e.TexCoord="TexCoord",e.Color="Color",e.Tangent="Tangent",e.FeatureIndex="FeatureIndex",e.UvRegion="UvRegion",e.NotSet="NotSet"}(s||(s={})),function(e){e.Opaque="Opaque",e.Mask="Mask",e.Blend="Blend"}(o||(o={})),function(e){e.None="None",e.Mask="Mask",e.Alpha="Alpha",e.PreMultAlpha="PreMultAlpha",e.NotSet="NotSet"}(l||(l={})),function(e){e.Points="Points",e.Lines="Lines",e.LineStrip="LineStrip",e.Triangles="Triangles",e.TriangleStrip="TriangleStrip",e.NotSet="NotSet"}(d||(d={})),function(e){e.None="None",e.WrapXBit="WrapXBit",e.WrapYBit="WrapYBit",e.WrapXy="WrapXy",e.NotSet="NotSet"}(u||(u={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NotSet="NotSet"}(h||(h={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NearestMipmapNearest="NearestMipmapNearest",e.LinearMipmapNearest="LinearMipmapNearest",e.NearestMipmapLinear="NearestMipmapLinear",e.LinearMipmapLinear="LinearMipmapLinear",e.NotSet="NotSet"}(c||(c={})),function(e){e.FeatureId="FeatureId",e.GlobalUid="GlobalUid",e.UnspecifiedDateTime="UnspecifiedDateTime",e.EcmaIso8601DateTime="EcmaIso8601DateTime",e.EcmaIso8601DateOnly="EcmaIso8601DateOnly",e.TimeOnly="TimeOnly",e.TimeStamp="TimeStamp",e.ColorRgb="ColorRgb",e.ColorRgba="ColorRgba",e.Unrecognized="Unrecognized",e.NotSet="NotSet"}(_||(_={})),function(e){e.Texture="Texture",e.VertexAtrb="VertexAtrb",e.Implicit="Implicit",e.NotSet="NotSet"}(g||(g={})),function(e){e.Front="Front",e.Back="Back",e.None="None",e.NotSet="NotSet"}(y||(y={})),function(e){e.Pbr="Pbr",e.Unlit="Unlit"}(b||(b={})),function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed",e[e.MissingInputs=2]="MissingInputs"}(m||(m={}));const f=-1,p=-2},52797:(e,t,i)=>{i.r(t),i.d(t,{default:()=>L});var r=i(35143),n=i(3825),a=i(91967),s=i(76460),o=i(50346),l=i(68134),d=i(52394),u=i(46053),h=(i(81806),i(47249),i(85842)),c=i(28586),_=i(12016);class g extends _.B{constructor(e){super("Lyr3DWorker","process",{process:e=>e.inputs},e,{hasInitialize:!0})}destroyWasm(){return this.broadcast({},"destroyWasm")}}var y,b,m,f=i(43414),p=i(59097),w=i(1873);(m=y||(y={}))[m.Lifetime=0]="Lifetime",m[m.Jobs=1]="Jobs",m[m.Renderables=2]="Renderables",function(e){e[e.Critical=0]="Critical",e[e.Error=1]="Error",e[e.Warning=2]="Warning",e[e.Info=3]="Info"}(b||(b={}));let M=class extends a.A{constructor(e){super(e),this._lyr3DMainPromise=null,this._lyr3DMain=null,this._layers=new Map,this._debugFlags=new Set,this._debugLevel=b.Critical,this._pulseTaskHandle=null,this._session=null,this._debugFlags.add(y.Lifetime),this._debugFlags.add(y.Jobs),this._debugFlags.add(y.Renderables)}_debugLog(e,t,i){let r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(this._debugFlags.has(e)&&this._debugLevel>=t){const e=r?"[js] ".concat(i):"".concat(i);t===b.Critical||t===b.Error?s.A.getLogger(this).error(e):t===b.Warning&&s.A.getLogger(this).warn(e),s.A.getLogger(this).info(e)}}initialize(){this._debugLevel>b.Warning&&(s.A.getLogger(this).level="info"),this._debugLog(y.Lifetime,b.Info,"Lyr3DWasmPerSceneView.initialize()"),this.addHandles([(0,l.wB)((()=>{var e;return null===(e=this.view.state)||void 0===e?void 0:e.contentCamera}),(()=>this._updateWasmCamera()))]),this._pulseTaskHandle=(0,d.mg)({preRender:()=>this._pulseTask()})}destroy(){var e;this._debugLog(y.Lifetime,b.Info,"Lyr3DWasmPerSceneView.destroy()"),this._lyr3DMain&&(this._layers.forEach((e=>{e.abortController.abort()})),this._lyr3DMain.uninitialize_lyr3d_wasm(),this._lyr3DMain=null);const t=this._worker;t&&t.destroyWasm().then((()=>{var e;null!==(e=this._worker)&&void 0!==e&&e.destroy(),this._worker=null})),null!==(e=this._pulseTaskHandle)&&void 0!==e&&e.remove(),this._pulseTaskHandle=null}add3DTilesLayerView(e){return this._lyr3DMain?this._add3DTilesLayerView(e):(this._debugLog(y.Lifetime,b.Error,"Lyr3DWasmPerSceneView.add3DTilesLayerView() called when WASM wasn't initialized"),c.vE)}remove3DTilesLayerView(e){if(!this._lyr3DMain)return this._debugLog(y.Lifetime,b.Error,"Lyr3DWasmPerSceneView.remove3DTilesLayerView() called when WASM wasn't loaded!"),0;this._doRemoveLayerView(e);const t=this._layers.size;return 0===t&&(this._debugLog(y.Lifetime,b.Info,"Lyr3DWasmPerSceneView.remove3DTilesLayerView() no Lyr3D layers left after removing a layer, destroying"),this.destroy()),t}setEnabled(e,t){if(!this._lyr3DMain)return void this._debugLog(y.Lifetime,b.Error,"Lyr3DWasmPerSceneView.setEnabled() called when WASM wasn't loaded!");const i=this._layers.get(e.wasmLayerId);i&&(this._lyr3DMain.set_enabled(e.wasmLayerId,t),i.needMemoryUsageUpdate=!0)}setLayerOffset(e,t){this._lyr3DMain?this._layers.get(e.wasmLayerId)&&this._lyr3DMain.set_carto_offset_z(e.wasmLayerId,t):this._debugLog(y.Lifetime,b.Error,"Lyr3DWasmPerSceneView.setLayerOffset() called when WASM wasn't loaded!")}getAttributionText(){return this._lyr3DMain?this._lyr3DMain.get_current_attribution_text().split("|"):(this._debugLog(y.Lifetime,b.Error,"Lyr3DWasmPerSceneView.getAttributionText() called when WASM wasn't loaded!"),[])}onRenderableEvicted(e,t,i){this._lyr3DMain?this._layers.get(e.wasmLayerId)&&this._lyr3DMain.on_renderable_evicted(e.wasmLayerId,t,i):this._debugLog(y.Lifetime,b.Error,"Lyr3DWasmPerSceneView.onRenderableEvicted() called when WASM wasn't loaded!")}isUpdating(e){if(!this._lyr3DMain&&this._lyr3DMainPromise)return!0;const t=this._layers.get(e);return!!t&&(t.outstandingJobCount>0||t.outstandingRenderableCount>0)}initializeWasm(){return this._lyr3DMain?Promise.resolve():(this._debugLog(y.Lifetime,b.Info,"Lyr3DWasmPerSceneView.initializeWasm()"),this._lyr3DMainPromise||(this._lyr3DMainPromise=(0,f.a)().then((e=>{var t,i,r,n;this._lyr3DMain=e,this._lyr3DMainPromise=null;const a=this._lyr3DMain.addFunction(this._onNewJob.bind(this),"v"),s=this._lyr3DMain.addFunction(this._onNewRenderable.bind(this),"v"),o=this._lyr3DMain.addFunction(this._freeRenderables.bind(this),"viii"),l=this._lyr3DMain.addFunction(this._setRenderableVisibility.bind(this),"viiii"),d=this._lyr3DMain.addFunction(this._onWasmError.bind(this),"viiii"),u="global"===this.view.viewingMode,h=null!==(t=this.view.renderSpatialReference)&&void 0!==t&&t.isWebMercator?3857:null!==(i=null===(r=this.view.renderSpatialReference)||void 0===r?void 0:r.wkid)&&void 0!==i?i:-1,c=null===(n=this.view.heightModelInfo)||void 0===n?void 0:n.heightModel,_=!c||"gravity-related-height"===c;return this._lyr3DMain.initialize_lyr3d_wasm(d,a,s,o,l,u,_,h,this._debugLevel)?(this._worker=new g((0,w.m)(this.view.resourceController)),this._worker.promise?this._worker.promise:void 0):(this._lyr3DMain=null,void this._debugLog(y.Lifetime,b.Critical,"Lyr3d Main WASM failed to initialize",!1))})).catch((e=>{this._debugLog(y.Lifetime,b.Critical,"Lyr3d WASM failed to download error = ".concat(e),!1)}))),this._lyr3DMainPromise)}_pulseTask(){if(this._lyr3DMain){let e=0;this._layers.forEach((t=>{e+=t.layerView.usedMemory})),e/=1048576;const t=this.view.resourceController.memoryController,i=t.usedMemory*t.maxMemory-e,r=t.maxMemory-i+t.additionalCacheMemory;this._lyr3DMain.frame_pulse(r,e,i,t.maxMemory)}}_incrementJobCount(e){e.outstandingJobCount+=1,1===e.outstandingJobCount&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_decrementJobCount(e){e.outstandingJobCount-=1,0===e.outstandingJobCount&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_incrementRenderableCount(e){e.outstandingRenderableCount+=1,e.outstandingJobCount<1&&1===e.outstandingRenderableCount&&e.layerView.updatingFlagChanged()}_decrementRenderableCount(e){e.outstandingRenderableCount-=1,e.outstandingJobCount<1&&0===e.outstandingRenderableCount&&e.layerView.updatingFlagChanged()}_onJobFailed(e,t,i){t.error.length&&this._debugLog(y.Jobs,b.Error,t.error,!1),this._lyr3DMain&&this._lyr3DMain.on_job_failed(i.jobId,i.desc),this._decrementJobCount(e)}_onJobSucceeded(e,t,i){if(this._lyr3DMain){const e=t.data.byteLength,r=this._lyr3DMain._malloc(e);new Uint8Array(this._lyr3DMain.HEAPU8.buffer,r,e).set(t.data),this._lyr3DMain.on_job_completed(i.jobId,t.jobDescJson,r,e),this._lyr3DMain._free(r)}this._decrementJobCount(e)}_getRequestPromises(e,t){const i=[];for(const r of e){const e=new URL(r),a=e.searchParams.get("session");a?this._session=a:this._session&&e.searchParams.append("session",this._session),i.push((0,n.A)(e.toString(),t).then((e=>e.data)))}return i}_onNewJob(){const e=this._lyr3DMain.get_next_job(),t=this._layers.get(e.layerId);if(!t)return;this._incrementJobCount(t);const i=t.abortController.signal,r={responseType:"array-buffer",signal:i,query:{...t.customParameters,token:t.apiKey}},n={inputs:[],jobDescJson:e.desc,isMissingResourceCase:!1},a=this._getRequestPromises(e.urls,r);Promise.all(a).then((e=>(n.inputs=e,this._worker.invoke(n,i)))).then((e=>e)).catch((t=>((0,o.zf)(t)?this._debugLog(y.Jobs,b.Warning,"job ".concat(e.jobId," was cancelled.")):this._debugLog(y.Jobs,b.Error,"job ".concat(e.jobId," failed with error ").concat(t,".")),{status:c.Qg.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[],inputs:[]}))).then((a=>{if(a.status===c.Qg.Failed)this._onJobFailed(t,a,e);else if(a.status===c.Qg.Succeeded)this._onJobSucceeded(t,a,e);else if(a.status===c.Qg.MissingInputs){const s=this._getRequestPromises(a.missingInputUrls,r);Promise.all(s).then((e=>{n.jobDescJson=a.jobDescJson,a.originalInputs?n.inputs=a.originalInputs:n.inputs=[],n.isMissingResourceCase=!0;for(const t of e)n.inputs.push(t);return this._worker.invoke(n,i)})).then((i=>{i.status===c.Qg.Failed?this._onJobFailed(t,i,e):i.status===c.Qg.Succeeded&&this._onJobSucceeded(t,i,e)})).catch((i=>{this._decrementJobCount(t),(0,o.zf)(i)?this._debugLog(y.Jobs,b.Warning,"job ".concat(e.jobId," was cancelled.")):this._debugLog(y.Jobs,b.Error,"job ".concat(e.jobId," failed with error2 ").concat(i,".")),this._lyr3DMain&&this._lyr3DMain.on_job_failed(e.jobId,e.desc)}))}}))}_onNewRenderable(){const e=this._lyr3DMain.get_next_renderable(),t=e.meshData;if(t.data&&t.data.byteLength>0){const e=t.data.slice();t.data=e}const i=this._layers.get(e.layerId);i&&(this._incrementRenderableCount(i),i.layerView.createRenderable(e).then((t=>{this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!0,e.layerId,e.handle,t.memUsageBytes),this._decrementRenderableCount(i)})).catch((t=>{(0,o.zf)(t)||this._debugLog(y.Renderables,b.Error,"createRenderable failed with error ".concat(t,".")),this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!1,e.layerId,e.handle,0),this._decrementRenderableCount(i)})))}_freeRenderables(e,t,i){if(i<1)return;const r=this._layers.get(e);if(!r)return;const n=r.layerView,a=[],s=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,i);for(let o=0;o<i;++o)a.push(s[o]);for(let o=0;o<i;++o)n.freeRenderable(a[o])}_setRenderableVisibility(e,t,i,r){if(r<1)return;const n=this._layers.get(e);if(!n)return;const a=n.layerView,s=[],o=[],l=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,r),d=new Uint8Array(this._lyr3DMain.HEAPU8.buffer,i,r);for(let u=0;u<r;++u)s.push(l[u]),o.push(1===d[u]);a.setRenderableVisibility(s,o,r)}_onWasmError(e,t,i,r){this._lyr3DMain&&this._debugLog(i,r,this._lyr3DMain.UTF8ToString(e,t),!1)}_doRemoveLayerView(e){const t=this._layers.get(e.wasmLayerId);return!!t&&(t.abortController.abort(),this._lyr3DMain.remove_layer(e.wasmLayerId),this._layers.delete(e.wasmLayerId),!0)}_add3DTilesLayerView(e){var t,i,r,n;const a=e.layer;if(!a.url)return c.Pl;const s=this._lyr3DMain.get_next_layer_id(),o=new AbortController;this._layers.set(s,{layerView:e,abortController:o,needMemoryUsageUpdate:!1,outstandingJobCount:0,outstandingRenderableCount:0,customParameters:a.customParameters,apiKey:a.apiKey});const l=null!==(t=null===(i=a.elevationInfo)||void 0===i?void 0:i.offset)&&void 0!==t?t:0,d=null!==(r=a.elevationInfo)&&void 0!==r&&r.unit?(0,p.Ao)(null===(n=a.elevationInfo)||void 0===n?void 0:n.unit):1;return this._lyr3DMain.add_layer(a.url,s,l*d)?(this._updateWasmCamera(),s):(this._layers.delete(s),c.Pl)}_updateWasmCamera(){var e;const t=null===(e=this.view.state)||void 0===e?void 0:e.contentCamera;if(!t||!this._lyr3DMain)return;const{eye:i,center:r,up:n,near:a,far:s,fovY:o}=t,l=[t.viewport[2],t.viewport[3]],d=t.width/t.height;this._lyr3DMain.set_camera_parameters({eye:i,center:r,up:n,near:a,far:s,fov:o,aspectRatio:d,viewport:l})}};(0,r._)([(0,u.MZ)({constructOnly:!0})],M.prototype,"view",void 0),M=(0,r._)([(0,h.$)("esri.layers.Lyr3DWasmPerSceneView")],M);const L=M},43414:(e,t,i)=>{i.d(t,{a:()=>n,h:()=>a});var r=i(28899);function n(){return new Promise((e=>i.e(4001).then(i.bind(i,26382)).then((e=>e.l)).then((t=>{let{default:i}=t;const r=i({locateFile:s,onRuntimeInitialized:()=>e(r)})})))).catch((e=>{throw e}))}function a(){return new Promise((e=>i.e(3409).then(i.bind(i,23409)).then((e=>e.l)).then((t=>{let{default:i}=t;const r=i({locateFile:s,onRuntimeInitialized:()=>e(r)})})))).catch((e=>{throw e}))}function s(e){return(0,r.s)("esri/libs/lyr3d/".concat(e))}},1873:(e,t,i)=>{function r(e){return t=>{if(e.immediate)return e.immediate.schedule(t);const i="No immediate scheduler";throw console.error(i),new Error(i)}}i.d(t,{m:()=>r})}}]);
//# sourceMappingURL=2797.3b9bdd03.chunk.js.map