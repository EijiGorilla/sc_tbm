"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[183],{29201:(e,t,i)=>{i.d(t,{I:()=>x,b:()=>w});var r,a,n,s=i(57528),l=i(34981),o=i(26917),d=i(59395),h=i(81993),u=i(90235),c=i(80883),p=i(3799),g=i(21390),v=i(64839),m=i(32307),y=i(70367),f=i(10773),_=i(66470);function w(e){const t=new m.N5,{vertex:i,fragment:w}=t;return(0,p.NB)(i,e),t.include(d.d,e),t.attributes.add(_.r.POSITION,"vec3"),t.attributes.add(_.r.UV0,"vec2"),e.perspectiveInterpolation&&t.attributes.add(_.r.PERSPECTIVEDIVIDE,"float"),t.varyings.add("vpos","vec3"),e.multipassEnabled&&t.varyings.add("depth","float"),i.code.add((0,v.H)(r||(r=(0,s.A)(["\n    void main(void) {\n      vpos = position;\n      ","\n      vTexCoord = uv0;\n      gl_Position = transformPosition(proj, view, vpos);\n\n      ","\n    }\n  "])),e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":"",e.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":"")),t.include(o.HQ,e),t.include(h.Q,e),w.uniforms.add(new y.N("tex",(e=>e.texture)),new g.m("opacity",(e=>e.opacity))),t.varyings.add("vTexCoord","vec2"),e.output===l.V.Alpha?w.code.add((0,v.H)(a||(a=(0,s.A)(["\n    void main() {\n      discardBySlice(vpos);\n      ","\n\n      float alpha = texture(tex, vTexCoord).a * opacity;\n      if (alpha  < ",") {\n        discard;\n      }\n\n      fragColor = vec4(alpha);\n    }\n    "])),e.multipassEnabled?"terrainDepthTest(depth);":"",v.H.float(u.H))):(w.include(c.a),w.code.add((0,v.H)(n||(n=(0,s.A)(["\n    void main() {\n      discardBySlice(vpos);\n      ","\n      fragColor = texture(tex, vTexCoord) * opacity;\n\n      if (fragColor.a < ",") {\n        discard;\n      }\n\n      fragColor = highlightSlice(fragColor, vpos);\n      ","\n    }\n    "])),e.multipassEnabled?"terrainDepthTest(depth);":"",v.H.float(u.H),e.transparencyPassType===f.y.Color?"fragColor = premultiplyAlpha(fragColor);":""))),t}const x=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}))},10183:(e,t,i)=>{i.d(t,{A:()=>G});var r=i(35143),a=i(98773),n=i(54901),s=i(76460),l=i(30726),o=i(50346),d=i(68134),h=i(46053),u=(i(81806),i(47249),i(85842)),c=i(76797),p=i(2413),g=i(57662),v=i(83491),m=i(44815),y=i(75002),f=i(50468),_=i(51799),w=i(62577),x=i(66470);function S(e,t){return(0,w.Gj)(e,[[t[0],t[1],-1],[t[2],t[1],-1],[t[2],t[3],-1],[t[0],t[3],-1]])}function E(e,t,i){if(!(0,p.HY)(t,i))return S(e,i);const r=[t[1]-i[1],Math.min(t[3],i[3])-Math.max(t[1],i[1]),i[3]-t[3],123456],a=[t[0]-i[0],Math.min(t[2],i[2])-Math.max(t[0],i[0]),i[2]-t[2],123456],n=i[2]-i[0],s=i[3]-i[1],l=a[0]>0&&a[2]>0?3:2,o=r[0]>0&&r[2]>0?3:2,d=(o+1)*(l+1),h=(0,m.jh)(3*d),u=(0,y.oe)(2*d),c=new Array(6*(o*l-1));let g=0,v=0,w=0,E=0,A=0;for(let p=0;p<4;p++){const e=r[p];if(e<=0)continue;let t=0;for(let r=0;r<4;r++){const e=a[r];e<=0||(h[v++]=i[0]+t,h[v++]=i[1]+g,h[v++]=-1,u[w++]=t/n,u[w++]=g/s,r<3&&p<3&&(1!==r||1!==p)&&(c[A++]=E,c[A++]=E+1,c[A++]=E+l+1,c[A++]=E+1,c[A++]=E+l+2,c[A++]=E+l+1),E++,t+=e)}g+=e}const I=new Array(c.length);return new _.V(e,[[x.r.POSITION,new f.n(h,c,3,!0)],[x.r.NORMAL,new f.n(R,I,3,!0)],[x.r.UV0,new f.n(u,c,2,!0)]])}const R=[0,0,1];var A=i(40200),I=i(22955),P=i(19539),b=i(57824),T=i(442),O=i(96897),C=i(44513),M=i(77447),D=i(91196),L=i(771),N=i(90992),V=i(93345);let H=class extends((0,L.A)((0,v.w)(D.A))){constructor(){super(...arguments),this.drapeSourceType=g.Om.RasterImage,this.updatePolicy=C.q.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=(0,o.sg)((async e=>{this.destroyed||await this._doRefresh(e).catch((e=>{(0,o.zf)(e)||s.A.getLogger(this).error(e)}))}),2e3)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.addHandles((0,n.hA)((()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this)))),this.addResolvingPromise((0,A.V)(this).then((e=>this._set("fullExtentInLocalViewSpatialReference",e)))),this._updatingHandles.add((()=>this.suspended),(()=>this._suspendedChangeHandler())),this.addHandles(this.view.resourceController.scheduler.registerIdleStateCallbacks((()=>{this._isScaleRangeActive()&&this.notifyChange("suspended")}),(()=>{}))),this._isScaleRangeLayer()&&this._updatingHandles.add((()=>this.layer.effectiveScaleRange),(()=>this.notifyChange("suspended")))}destroy(){this.clear()}setDrapingExtent(e,t){this._spatialReference=t,e.forEach(((e,t)=>{this._overlays[t]=e,this._updateImageExtent(e,t)}))}_updateImageExtent(e,t){const i=this._clippedExtent(e.extent,W);if(null==i)return;const r=function(e,t,i){const r=(0,p.VL)(e)/(0,p.uJ)(e),a={width:i,height:i};return r>1.0001?a.height=i/r:r<.9999&&(a.width=i*r),a.width=Math.round(a.width/((0,p.VL)(e)/(0,p.VL)(t))),a.height=Math.round(a.height/((0,p.uJ)(e)/(0,p.uJ)(t))),a}(e.extent,i,e.resolution);let a=e.pixelRatio*this.view.state.pixelRatio;const{layer:n}=this;if("imageMaxWidth"in n&&null!=n.imageMaxWidth||"imageMaxHeight"in n&&null!=n.imageMaxHeight){const e=n.imageMaxWidth,t=n.imageMaxHeight;if(r.width>e){const t=e/r.width;r.height=Math.floor(r.height*t),r.width=e,a*=t}if(r.height>t){const e=t/r.height;r.width=Math.floor(r.width*e),r.height=t,a*=e}}const l=this._extents[t];l&&(0,p.aI)(l.extent,i)&&this._imageSizeEquals(i,l.imageSize,r)||(this._extents[t]={extent:(0,p.vt)(i),imageSize:r,pixelRatio:a},this.suspended||this._fetch(t).catch((e=>{(0,o.zf)(e)||s.A.getLogger(this).error(e)})))}clear(){for(let e=0;e<this._images.length;e++)this._clearImage(e)}async doRefresh(){return this._doRefresh()}async _doRefresh(e){if(this.suspended)return;const t=[];for(let i=0;i<this._extents.length;i++)this._extents[i]&&t.push(this._fetch(i,e));await Promise.allSettled(t)}canResume(){if(!super.canResume())return!1;const e=this.layer;if(this._isScaleRangeActive()){const{minScale:t,maxScale:i}=e.effectiveScaleRange,r=this.view.scale;if(r<i||t>0&&r>t)return!1}return!0}async processResult(e,t,i){(t instanceof HTMLImageElement||t instanceof HTMLCanvasElement)&&(e.image=t)}findExtentInfoAt(e){for(const t of this._extents){const i=t.extent;if(new c.A(i[0],i[1],i[2],i[3],this._spatialReference).contains(e))return t}return null}getFetchOptions(){}async redraw(e,t){await(0,a.jJ)(this._images,(async(i,r)=>{i&&(await e(i,t),await this._createStageObjects(r,i.image,t))}))}_imageSizeEquals(e,t,i){if(!this.maximumDataResolution)return!1;const r=(0,p.VL)(e)/this.maximumDataResolution.x,a=(0,p.uJ)(e)/this.maximumDataResolution.y,n=r/t.width,s=a/t.height,l=r/i.width,o=a/i.height,d=Math.abs(n-l),h=Math.abs(s-o),u=I.b.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return d<=u&&h<=u}async _fetch(e,t){if(this.suspended)return;const i=this._extents[e],r=i.extent;this._images[e]||(this._images[e]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:(0,p.vt)(r)});const a=this._images[e];a.loadingAbortController=(0,l.DC)(a.loadingAbortController);const n=new c.A(r[0],r[1],r[2],r[3],this._spatialReference);if(0===n.width||0===n.height)return void this._clearImage(e);const d=new AbortController;a.loadingAbortController=d,(0,o.u7)(t,(()=>d.abort()));const h=d.signal,u=this._waitFetchReady(h).then((async()=>{const t={requestAsImageElement:!0,pixelRatio:this._overlays[e].pixelRatio,...this.getFetchOptions(),signal:h},{height:r,width:a}=i.imageSize;return this.layer.fetchImage(n,a,r,t)})).then((e=>{if((0,o.G4)(h))throw s.A.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),(0,o.NK)();return this.processResult(a,e)})).then((()=>{(0,p.C)(a.renderExtent,r)}));a.loadingPromise=u,await this._updatingHandles.addPromise(u.then((async()=>{(0,o.Te)(h),await this._createStageObjects(e,a.image,h)})).catch((e=>{throw e&&!(0,o.zf)(e)&&s.A.getLogger(this).error(e),e})).finally((()=>{u===a.loadingPromise&&(a.loadingPromise=null,a.loadingAbortController=null)})))}_clearImage(e){const t=this._images[e];if(t){null!=t.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([t.renderGeometry],b.q.UPDATE),t.renderGeometry=null);const e=this.view._stage,i=t.texture;null!==i&&void 0!==i&&i.unload(),e.remove(i),t.texture=null,e.remove(t.material),t.material=null,t.loadingAbortController=(0,l.DC)(t.loadingAbortController),t.loadingPromise=null,t.image=null,t.pixelData=null}}async _createStageObjects(e,t,i){const r=this.view._stage,n=this._images[e],s=()=>{var e;null!==(e=n.texture)&&void 0!==e&&e.unload(),r.remove(n.texture),n.texture=null,n.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([n.renderGeometry],b.q.UPDATE),n.renderGeometry=null)};if(t){const l=new O.g(t,{width:t.width,height:t.height,preMultiplyAlpha:!0,wrap:{s:V.pF.CLAMP_TO_EDGE,t:V.pF.CLAMP_TO_EDGE}});let d;if(await(0,a.Ke)(this._images[e===P.vr.INNER?P.vr.OUTER:P.vr.INNER].loadingPromise),(0,o.Te)(i),s(),await r.schedule((()=>l.load(r.renderView.renderingContext)),i),r.add(l),n.texture=l,null==n.material?(n.material=new M.r({transparent:!0,textureId:l.id}),r.add(n.material)):n.material.setParameters({textureId:l.id}),e===P.vr.INNER)d=S(n.material,n.renderExtent);else{const e=this._images[0].renderExtent;if(!e)return void s();d=E(n.material,e,n.renderExtent)}n.renderGeometry=new T.$(d),n.renderGeometry.localOrigin=this._overlays[e].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([n.renderGeometry],b.q.UPDATE)}else s(),r.remove(n.material),n.material=null}_isScaleRangeLayer(){return"effectiveScaleRange"in this.layer}_isScaleRangeActive(){const e=this.layer;if(!this._isScaleRangeLayer())return!1;const{minScale:t,maxScale:i}=e.effectiveScaleRange;return(0,N.WK)(t,i)}_clippedExtent(e,t){if("local"!==this.view.viewingMode)return(0,p.C)(t,e);const i=this.view.basemapTerrain;return i.ready?(0,p.E$)(e,i.extent,t):(0,p.C)(t,e)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(e){await(0,d.C_)((()=>this.view.stationary),e),(0,o.Te)(e)}};(0,r._)([(0,h.MZ)()],H.prototype,"layer",void 0),(0,r._)([(0,h.MZ)()],H.prototype,"suspended",void 0),(0,r._)([(0,h.MZ)({readOnly:!0})],H.prototype,"fullExtentInLocalViewSpatialReference",void 0),(0,r._)([(0,h.MZ)()],H.prototype,"updating",void 0),H=(0,r._)([(0,u.$)("esri.views.3d.layers.DynamicLayerView3D")],H);const G=H,W=(0,p.vt)()},83491:(e,t,i)=>{i.d(t,{w:()=>h});var r=i(35143),a=i(54901),n=i(50346),s=i(68134),l=i(46053),o=(i(81806),i(76460),i(47249),i(85842)),d=i(47700);const h=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,d.jI)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,a.hA)((()=>e.abort()))),await(0,s.C_)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),t),(0,n.Te)(t);const i=(0,d.Hu)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!(null!==e&&void 0!==e&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,r._)([(0,l.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,r._)([(0,o.$)("esri.views.3d.layers.LayerView3D")],t),t}},40200:(e,t,i)=>{i.d(t,{V:()=>n});var r=i(45417),a=i(39483);function n(e){const t=e.view.spatialReference,i=e.layer.fullExtent,n=null!=i&&i.spatialReference;if(null==i||!n)return Promise.resolve(null);if(n.equals(t))return Promise.resolve(i.clone());const s=(0,r.Cv)(i,t);return null!=s?Promise.resolve(s):e.view.state.isLocal?(0,a.projectGeometry)(i,t,e.layer.portalItem).then((t=>!e.destroyed&&t?t:null)).catch((()=>null)):Promise.resolve(null)}},77447:(e,t,i)=>{i.d(t,{r:()=>C});var r=i(88105),a=i(34981),n=i(83490),s=i(75803),l=i(45463),o=i(60322),d=i(77730),h=i(86994),u=i(66470),c=i(82809),p=i(86401),g=i(63928),v=i(52757),m=i(35143),y=(i(64839),i(16506)),f=i(42693),_=i(99415),w=i(28584),x=i(96643),S=i(10773),E=i(92656),R=i(29201),A=i(93345),I=i(57162);class P extends f.w{initializeProgram(e){return new w.B(e.rctx,P.shader.get().build(this.configuration),O)}_setPipelineState(e,t){const i=this.configuration,r=e===S.y.NONE,n=e===S.y.FrontFace;return(0,I.Ey)({blending:i.output!==a.V.Color&&i.output!==a.V.Alpha||!i.transparent?null:r?b:(0,o.ez)(e),culling:(0,I.Xt)(i.cullFace),depthTest:{func:(0,o.K_)(e)},depthWrite:r?i.writeDepth?I.kn:null:(0,o.XO)(e),colorWrite:I.wE,stencilWrite:i.hasOccludees?x.v0:null,stencilTest:i.hasOccludees?t?x.a9:x.qh:null,polygonOffset:r||n?null:(0,o.aB)(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}P.shader=new y.$(R.I,(()=>i.e(8391).then(i.bind(i,48391))));const b=(0,I.ox)(A.dn.ONE,A.dn.ONE_MINUS_SRC_ALPHA);class T extends E.E{constructor(){super(...arguments),this.output=a.V.Color,this.cullFace=n.s2.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=S.y.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}(0,m._)([(0,_.W)({count:a.V.COUNT})],T.prototype,"output",void 0),(0,m._)([(0,_.W)({count:n.s2.COUNT})],T.prototype,"cullFace",void 0),(0,m._)([(0,_.W)()],T.prototype,"hasSlicePlane",void 0),(0,m._)([(0,_.W)()],T.prototype,"transparent",void 0),(0,m._)([(0,_.W)()],T.prototype,"enableOffset",void 0),(0,m._)([(0,_.W)()],T.prototype,"writeDepth",void 0),(0,m._)([(0,_.W)()],T.prototype,"hasOccludees",void 0),(0,m._)([(0,_.W)({count:S.y.COUNT})],T.prototype,"transparencyPassType",void 0),(0,m._)([(0,_.W)()],T.prototype,"multipassEnabled",void 0),(0,m._)([(0,_.W)()],T.prototype,"cullAboveGround",void 0),(0,m._)([(0,_.W)()],T.prototype,"perspectiveInterpolation",void 0),(0,m._)([(0,_.W)({constValue:!1})],T.prototype,"occlusionPass",void 0);const O=new Map([[u.r.POSITION,0],[u.r.UV0,2],[u.r.PERSPECTIVEDIVIDE,3]]);class C extends g.W{constructor(e){super(e,new L),this.supportsEdges=!0,this.produces=new Map([[d.N.OPAQUE_MATERIAL,e=>e===a.V.Highlight||(0,a.j8)(e)&&!this.parameters.transparent],[d.N.TRANSPARENT_MATERIAL,e=>(0,a.j8)(e)&&this.parameters.transparent&&this.parameters.writeDepth],[d.N.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>(0,a.j8)(e)&&this.parameters.transparent&&!this.parameters.writeDepth],[d.N.DRAPED_MATERIAL,e=>(0,a.jS)(e)]]),this._vertexAttributeLocations=O,this._configuration=new T}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<o.xt,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(e){return new M(e)}createBufferWriter(){const e=p.zK.clone();return this.parameters.perspectiveInterpolation&&e.f32(u.r.PERSPECTIVEDIVIDE),new D(e)}}class M extends s.m{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(P,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==a.V.Color&&this._output!==a.V.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class D extends c.Z{write(e,t,i,a,n){for(const s of this.vertexBufferLayout.fields.keys()){const l=i.attributes.get(s);if(l)if(s===u.r.PERSPECTIVEDIVIDE){(0,h.vA)(1===l.size);const e=a.getField(s,r.Y$);e&&(0,v.uO)(l,e,n)}else(0,v.zC)(s,l,e,t,a,n)}}}class L extends l.qA{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=n.s2.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}},91196:(e,t,i)=>{i.d(t,{A:()=>g});var r=i(35143),a=i(91967),n=i(54099),s=i(5632),l=i(76460),o=i(30726),d=i(91291),h=i(46053),u=(i(81806),i(47249),i(85842)),c=i(19451);let p=class extends((0,s.sA)((0,d.g)(n.A.EventedMixin(a.A)))){constructor(e){super(e),this._updatingHandles=new c.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",r=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";l.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(r,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,o.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,r;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(r=this.parent)||void 0===r?void 0:r.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,r._)([(0,h.MZ)()],p.prototype,"fullOpacity",null),(0,r._)([(0,h.MZ)()],p.prototype,"layer",void 0),(0,r._)([(0,h.MZ)()],p.prototype,"parent",void 0),(0,r._)([(0,h.MZ)({readOnly:!0})],p.prototype,"suspended",null),(0,r._)([(0,h.MZ)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,r._)([(0,h.MZ)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,r._)([(0,h.MZ)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,r._)([(0,h.MZ)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,r._)([(0,h.MZ)()],p.prototype,"visible",null),(0,r._)([(0,h.MZ)()],p.prototype,"view",void 0),p=(0,r._)([(0,u.$)("esri.views.layers.LayerView")],p);const g=p},771:(e,t,i)=>{i.d(t,{A:()=>o});var r=i(35143),a=i(76460),n=i(50346),s=i(68134),l=(i(81806),i(47249),i(50076),i(85842));const o=e=>{let t=class extends e{initialize(){this.addHandles((0,s.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,n.zf)(e)||a.A.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,r._)([(0,l.$)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=183.0171d441.chunk.js.map