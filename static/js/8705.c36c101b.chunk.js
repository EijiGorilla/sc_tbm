"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[8705],{12016:(e,t,r)=>{r.d(t,{B:()=>l});var i=r(18690),s=r(54901),o=r(76460),n=r(50346),a=r(16783);class l{constructor(e,t,r,i){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};this._mainMethod=t,this._transferLists=r,this._listeners=[],this._promise=(0,a.ho)(e,{...s,schedule:i}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,s.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>o.A.getLogger("esri.core.workers.WorkerHandle").error("Failed to initialize ".concat(e," worker: ").concat(t))))}on(e,t){const r={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(r),this._connectListener(r),(0,s.hA)((()=>{r.removed=!0,(0,i.TF)(this._listeners,r),this._thread&&null!=r.threadHandle&&r.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const i=this._transferLists[e],s=i?i(t):[];return this._thread.invoke(e,t,{transferList:s,signal:r})}return this._promise?this._promise.then((()=>((0,n.Te)(r),this.invokeMethod(e,t,r)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}},78705:(e,t,r)=>{r.d(t,{A:()=>K});var i=r(35143),s=r(50076),o=r(81806),n=r(30726),a=r(68134),l=r(46053),u=r(76460),d=(r(47249),r(85842)),c=r(99784),p=r(99014),h=r(83491),y=r(32535),m=r(13070),f=r(14672),g=r(64340),v=r(91967),_=r(50346),F=r(41289),w=r(36643),b=r(78393),x=r(90632),M=r(12016),R=r(13312),P=r(44135);class q{constructor(e){this._controller=e,this._handle=new E((t=>e.schedule(t)))}destroy(){this._handle.destroy()}invoke(e,t){return e.buffer&&0!==e.buffer.byteLength?(e.options.sourceSpatialReference&&e.options.sourceSpatialReference instanceof R.A&&(e.options={...e.options,sourceSpatialReference:e.options.sourceSpatialReference.toJSON()}),this._handle.invoke(e,t).then((e=>{let t=0,r=0;const i=R.A.fromJSON(e.spatialReference);e.spatialReference=i;const s=async o=>{const n=e.fields;if(n)for(;t<n.length;)if(n[t]=P.A.fromJSON(n[t]),t++,o.madeProgress())return this._controller.reschedule((e=>s(e)));const a=e.features;for(;r<a.length;){const e=a[r];++r,e.uid=(0,x.c)();const t=e.geometry;if(null!=t&&(t.spatialReference=i,O(t),o.madeProgress()))return this._controller.reschedule((e=>s(e)))}return e};return this._controller.schedule((e=>s(e)))}))):Promise.resolve(null)}}function O(e){switch(e.type){case"polyline":e.paths.reduce(((e,t)=>e+t.length),0)<b.y9&&(e.paths=e.hasZ||e.hasM?e.paths.map((e=>e.map((e=>[e[0],e[1],e[2]])))):e.paths.map((e=>e.map((e=>[e[0],e[1]])))));break;case"polygon":e.rings.reduce(((e,t)=>e+t.length),0)<b.y9&&(e.rings=e.hasZ||e.hasM?e.rings.map((e=>e.map((e=>[e[0],e[1],e[2]])))):e.rings.map((e=>e.map((e=>[e[0],e[1]])))))}}class E extends M.B{constructor(e){super("PBFDecoderWorker","_parseFeatureQuery",{_parseFeatureQuery:e=>[e.buffer]},e)}}let Z=class extends v.A{constructor(e){super(e)}get implicitFields(){var e;if(!(null===(e=this.layer.outFields)||void 0===e?void 0:e.includes("*")))return new Set;const t=new Set(this.layerView.requiredFields),r=new Set(this.layerView.availableFields);return(0,F.iv)(r,t)}get queryFeaturesDehydrated(){const{layer:e}=this,t=e.capabilities,r=t&&t.query,i=r&&r.supportsFormatPBF,s=e.parsedUrl;if(i){var o,n;null==this._decoder&&(this._decoder=new q(this.controller));const t={sourceSpatialReference:null!==(o=null===(n=e.spatialReference)||void 0===n?void 0:n.toJSON())&&void 0!==o?o:null,applyTransform:!0,maxStringAttributeFields:this.implicitFields,maxStringAttributeLength:A};return(e,r)=>(0,w.GB)(s,e,"pbf",this._createRequestOptions(r)).then((e=>((0,_.Te)(r),null!=this._decoder?this._decoder.invoke({buffer:e.data,options:t},r.signal):Promise.reject((0,_.NK)()))))}return(t,r)=>(0,w.eW)(s,t,e.spatialReference,this._createRequestOptions(r)).then((e=>(0,c.JS)(e.data,{maxStringAttributeFields:this.implicitFields,maxStringAttributeLength:A})))}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}destroy(){this._decoder=(0,n.pR)(this._decoder)}_createRequestOptions(e){return{...e,query:{...this.layer.customParameters,token:this.layer.apiKey,...null===e||void 0===e?void 0:e.query}}}};(0,i._)([(0,l.MZ)({constructOnly:!0})],Z.prototype,"layer",void 0),(0,i._)([(0,l.MZ)({constructOnly:!0})],Z.prototype,"layerView",void 0),(0,i._)([(0,l.MZ)({constructOnly:!0})],Z.prototype,"controller",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],Z.prototype,"implicitFields",null),(0,i._)([(0,l.MZ)({readOnly:!0})],Z.prototype,"queryFeaturesDehydrated",null),Z=(0,i._)([(0,d.$)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],Z);let C=class extends v.A{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.layer.queryFeatures(e,t)}};(0,i._)([(0,l.MZ)({constructOnly:!0})],C.prototype,"layer",void 0),C=(0,i._)([(0,d.$)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileOGCServiceQuery3D")],C);let I=class extends v.A{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.source.queryFeaturesJSON(e,t).then(c.JS,(r=>{if(r&&"query-features-json:unsupported"===r.name)return this.layer.queryFeatures(e,t);throw r}))}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}};(0,i._)([(0,l.MZ)({constructOnly:!0})],I.prototype,"layer",void 0),(0,i._)([(0,l.MZ)({constructOnly:!0})],I.prototype,"source",void 0),I=(0,i._)([(0,d.$)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],I);const A=1024;class S{constructor(e){this._memoryCache=null;const t=e.layerView.layer;this._layerView=e.layerView,this.objectIdField=t.objectIdField,this.globalIdField="globalIdField"in t?t.globalIdField:null,this._returnZ=e.returnZ,this._returnM=e.returnM;const r=this._layerView.view.resourceController;this.query=function(e,t){const{layer:r}=e;return"feature"===r.type&&"feature-layer"===r.source.type||"catalog-footprint"===r.type?new Z({layer:r,layerView:e,controller:t}):"feature"===r.type&&"memory"===r.source.type||"csv"===r.type||"geojson"===r.type||"oriented-imagery"===r.type||"wfs"===r.type?new I({layer:r,source:r.source}):"ogc-feature"===r.type?new C({layer:r}):null}(this._layerView,r.normal),r&&this._memoryCacheEnabled&&(this._memoryCache=r.memoryController.newCache("fl-".concat(t.uid)))}get _memoryCacheEnabled(){switch(this._layerView.layer.source.type){case"feature-layer":case"ogc-feature":case"oriented-imagery":return!0;case"csv":case"parquet":case"geojson":case"memory":case"wfs":return!1}}destroy(){this._memoryCache=(0,n.pR)(this._memoryCache),this.query.destroy()}createQuery(){const e=this._layerView.layer.createQuery();return e.outFields=this._layerView.availableFields,e.returnZ=this._returnZ,e.returnM=this._returnM,e.outSpatialReference=this.tilingScheme.spatialReference,e}get memoryCache(){return this._memoryCache}get viewingMode(){return this._layerView.view.state.viewingMode}get tilingScheme(){return this._layerView.view.featureTiles.tilingScheme}get scheduler(){var e;return null===(e=this._layerView.view.resourceController)||void 0===e?void 0:e.scheduler}get geometryType(){return this._layerView.layer.geometryType}get fullExtent(){return this._layerView.layer.fullExtent}get tileMaxRecordCount(){return this._layerView.layer.capabilities.query.tileMaxRecordCount}get maxRecordCount(){return this._layerView.layer.capabilities.query.maxRecordCount}get isDraped(){var e;return"on-the-ground"===(null===(e=this._layerView.layer.elevationInfo)||void 0===e?void 0:e.mode)}get capabilities(){var e;return null!==(e=this._capabilities)&&void 0!==e||(this._capabilities=function(e){const t=e.capabilities.query;return{supportsMultipleResolutions:V(e),supportsPagination:!(!t||!t.supportsPagination),supportsResultType:!(!t||!t.supportsResultType),supportsCacheHint:!(!t||!t.supportsCacheHint),supportsQuantization:!(!t||!t.supportsQuantization),supportsQuantizationEditMode:!(!t||!t.supportsQuantizationEditMode),supportsMaxRecordCountFactor:!(!t||!t.supportsMaxRecordCountFactor),supportsFormatPBF:!(!t||!t.supportsFormatPBF)}}(this._layerView.layer)),this._capabilities}logFetchError(e,t){var r;e.error("#fetchTile()",this._layerView.layer,null!==(r=null===t||void 0===t?void 0:t.message)&&void 0!==r?r:t)}}function V(e){switch(e.geometryType){case"polyline":return!0;case"polygon":return e.capabilities&&e.capabilities.query&&e.capabilities.query.supportsQuantization;default:return!1}}var N=r(57534),T=r(44513);let D=class extends g.c{constructor(e){super(e),this._controllerTotal=0,this._processorTotal=0,this._needsRefresh=!1,this.suspendResumeExtentMode="data"}initialize(){this.addHandles((0,a.wB)((()=>({controller:this.controller,suspended:this.suspended})),(e=>{let{controller:t,suspended:r}=e;t&&!r&&this._needsRefresh&&(t.refetch(),this._needsRefresh=!1)})))}destroy(){this._fetcherContext=(0,n.pR)(this._fetcherContext)}get maximumNumberOfFeatures(){var e,t;return null!==(e=null===(t=this.controller)||void 0===t?void 0:t.maximumNumberOfFeatures)&&void 0!==e?e:this._get("maximumNumberOfFeatures")}set maximumNumberOfFeatures(e){this._set("maximumNumberOfFeatures",e),this.controller&&(this.controller.maximumNumberOfFeatures=e)}get maximumNumberOfFeaturesExceeded(){return!!this.controller&&!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded)}get updatingProgressValue(){var e,t;let r=0;if(null!==(e=this.controller)&&void 0!==e&&e.updating){const e=this.controller.updatingRemaining,t=Math.max(this.controller.updatingTotal,this._controllerTotal);t>0&&(r=(t-e)/t,this._controllerTotal=t)}let i=0;if(null!==(t=this.processor)&&void 0!==t&&t.updating){const e=this.processor.updatingRemaining,t=Math.max(e,this._processorTotal);t>0&&(i=(t-e)/t,this._processorTotal=t)}return.5*(r+i)}get updatePolicy(){if(!this.controller)return T.q.ASYNC;switch(this.controller.mode){case"snapshot":{const e=Q.get(this.layer.geometryType);return null==e||this.controller.serviceDataCount>e?T.q.ASYNC:T.q.SYNC}case"tiles":return T.q.ASYNC}}get usedMemory(){var e,t,r,i;return(null!==(e=null===(t=this.processor)||void 0===t?void 0:t.usedMemory)&&void 0!==e?e:0)+(null!==(r=null===(i=this.controller)||void 0===i?void 0:i.memoryForUnusedFeatures)&&void 0!==r?r:0)}get unloadedMemory(){var e,t,r,i,s,o,n,a;const l=null!==(e=null===(t=this.processor)||void 0===t?void 0:t.unprocessedMemoryEstimate)&&void 0!==e?e:0,u=null!==(r=null===(i=this.controller)||void 0===i?void 0:i.expectedFeatureDiff)&&void 0!==r?r:0,d=null!==(s=null===(o=this.processor)||void 0===o?void 0:o.loadedFeatures)&&void 0!==s?s:0,c=d+u>0?d/(d+u):1;return l+u*(null!==(n=null===(a=this.processor)||void 0===a?void 0:a.usedMemoryPerFeature)&&void 0!==n?n:0)*c}get ignoresMemoryFactor(){var e;return null===(e=this.controller)||void 0===e?void 0:e.hasMaximumNumberOfFeaturesOverride}get performanceInfo(){var e,t,r,i,s,o,n;const a=null===(e=this.controller)||void 0===e?void 0:e.displayFeatureLimit,l=null!=a?a.averageSymbolComplexity:void 0,u=null!=l?"f:".concat(l.verticesPerFeature,",v:").concat(l.verticesPerCoordinate):"n/a";return new f.X(super.performanceInfo,null!==(t=null===(r=this.controller)||void 0===r||null===(r=r.performanceInfo)||void 0===r?void 0:r.storedFeatures)&&void 0!==t?t:0,null!==(i=null===(s=this.controller)||void 0===s||null===(s=s.performanceInfo)||void 0===s?void 0:s.totalVertices)&&void 0!==i?i:0,this.maximumNumberOfFeaturesExceeded,null!==(o=null===(n=this.controller)||void 0===n?void 0:n.mode)&&void 0!==o?o:"n/a",u)}async doRefresh(e){const{controller:t,processor:r,suspended:i}=this;e&&t&&(i?this._needsRefresh=!0:(t.refetch(),this._needsRefresh=!1)),r.refreshFilter()}setVisibility(e,t){var r;null===(r=this.processor)||void 0===r||r.setObjectIdVisibility(e,t)}getMissingAttributesForFeature(e){return this.controller.getMissingAttributesForFeature(e)}getHydratedGeometry(e){const t=this.graphics3DProcessor;if(null==t)return null;const r=t.graphics3DGraphicsByObjectID;if(null==r)return null;const i=r.get(e);return null==i?null:(0,y.wZ)(i.graphic.geometry)}createController(){this._fetcherContext=new S({layerView:this.layerView,returnZ:this.hasZ,returnM:this.hasM});const e=new m.e({layerView:this.layerView,context:this._fetcherContext,graphics:new N._,extent:this.clippingExtent});return this.updatingHandles.add((()=>e.serviceDataExtent),(e=>{this.processor&&(this.processor.dataExtent=e)}),a.Vh),this.addHandles((0,a.wB)((()=>this.suspended&&this.layerView.updateSuspended),(t=>{t?e.suspend():e.resume()}),a.pc)),this.updatingHandles.add((()=>{var e;return null===(e=this.processor)||void 0===e?void 0:e.displayFeatureLimit}),(t=>e.displayFeatureLimit=t),a.Vh),this.addHandles((0,a.z7)((()=>!this.updating),(()=>{this._controllerTotal=0,this._processorTotal=0}))),e}beforeSetController(e){e.maximumNumberOfFeatures=this.maximumNumberOfFeatures}get test(){return{controller:this.controller,graphics3DProcessor:this.graphics3DProcessor,heatmapProcessor:this.heatmapProcessor,loadedGraphics:this.loadedGraphics}}};(0,i._)([(0,l.MZ)()],D.prototype,"layerView",void 0),(0,i._)([(0,l.MZ)()],D.prototype,"controller",void 0),(0,i._)([(0,l.MZ)()],D.prototype,"_controllerTotal",void 0),(0,i._)([(0,l.MZ)()],D.prototype,"_processorTotal",void 0),(0,i._)([(0,l.MZ)()],D.prototype,"_needsRefresh",void 0),(0,i._)([(0,l.MZ)()],D.prototype,"maximumNumberOfFeatures",null),(0,i._)([(0,l.MZ)()],D.prototype,"maximumNumberOfFeaturesExceeded",null),(0,i._)([(0,l.MZ)()],D.prototype,"updatingProgressValue",null),(0,i._)([(0,l.MZ)()],D.prototype,"updatePolicy",null),(0,i._)([(0,l.MZ)()],D.prototype,"suspendResumeExtentMode",void 0),D=(0,i._)([(0,d.$)("esri.views.3d.layers.graphics.FeatureGraphics3DGraphicsPipeline")],D);const Q=new Map([["point",5e3],["polygon",500],["polyline",1e3]]);var L=r(93938),H=r(10252),k=r(8203),B=r(53430),j=r(46530),z=r(68295),G=r(98976),J=r(2257);const $=e=>{let t=class extends e{constructor(){super(...arguments),this._updatingRequiredFieldsPromise=null,this.dataUpdating=!1,this.filter=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){this.addHandles([(0,a.wB)((()=>{var e;const t=this.layer;return[t&&"elevationInfo"in t?null===(e=t.elevationInfo)||void 0===e?void 0:e.featureExpressionInfo:null,t&&"displayField"in t?t.displayField:null,t&&"timeInfo"in t&&t.timeInfo,t&&"renderer"in t&&t.renderer,t&&"labelingInfo"in t&&t.labelingInfo,t&&"floorInfo"in t&&t.floorInfo,this.filter,this.featureEffect,this.timeExtent]}),(()=>this._handleRequiredFieldsChange()),a.pc),(0,a.on)((()=>{var e;return null===(e=this.view)||void 0===e?void 0:e.floors}),"change",(()=>this._handleRequiredFieldsChange())),(0,a.on)((()=>{const e=this.layer;return e&&"sublayers"in e?e.sublayers:null}),"change",(()=>this._handleRequiredFieldsChange()))])}get availableFields(){if(!this.layer)return[];const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return"outFields"in e&&e.outFields?(0,B.DB)(t,[...(0,B.hL)(t,e.outFields),...r]):(0,B.DB)(t,r)}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){this._override("featureEffect",e)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){u.A.getLogger(this).error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=null!=this.filter?this.filter.createQuery(e):new z.A(e);if("floorInfo"in this.layer&&this.layer.floorInfo){const e=(0,j.E)(this);null!=e&&(t.where=t.where?"(".concat(t.where,") AND (").concat(e,")"):e)}return null!=this.timeExtent&&(t.timeExtent=null!=t.timeExtent?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}createAggregateQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return new z.A(e)}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}async fetchPopupFeaturesFromGraphics(e,t){return this._validateFetchPopupFeatures(e,t),this._fetchPopupFeatures(e,t)}_loadArcadeModules(e){var t;return null!==(t=e.expressionInfos)&&void 0!==t&&t.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?(0,G.lw)():Promise.resolve()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then((()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)}))}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e="3d"===this.view.type,{layer:t,layer:{fieldsIndex:r,objectIdField:i}}=this,s="renderer"in t&&t.renderer,o="orderBy"in t&&t.orderBy,n="featureReduction"in t?t.featureReduction:null,a=new Set,l=await Promise.allSettled([s?s.collectRequiredFields(a,r):null,(0,B.Im)(a,t),e&&"elevationInfo"in t?(0,B.NO)(a,t):null,null!=this.filter?(0,B.o)(a,t,this.filter):null,e||null==this.featureEffect?null:(0,B.o)(a,t,this.featureEffect.filter),!e&&n?(0,B.RP)(a,t,n):null,!e&&o?(0,B.f)(a,t,o):null]);if("timeInfo"in t&&t.timeInfo&&this.timeExtent&&(0,B._w)(a,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),"floorInfo"in t&&t.floorInfo&&(0,B._w)(a,t.fieldsIndex,[t.floorInfo.floorField]),"feature"===t.type&&e&&null!=t.infoFor3D&&(null==t.globalIdField&&u.A.getLogger(this).error("globalIdField missing on 3DObjectFeatureLayer"),(0,B._w)(a,t.fieldsIndex,[t.globalIdField])),"subtype-group"===t.type){(0,B.rq)(a,r,t.subtypeField);const e=t.sublayers.map((e=>{var t;return Promise.all([null===(t=e.renderer)||void 0===t?void 0:t.collectRequiredFields(a,r),(0,B.Im)(a,e)])}));await Promise.allSettled(e)}if("catalog-footprint"===t.type&&t.parent){const e=t.parent;(0,B._w)(a,r,[e.itemNameField,e.itemSourceField,e.itemTypeField,e.maxScaleField,e.minScaleField])}for(const c of l)"rejected"===c.status&&u.A.getLogger(this).error(c.reason);(0,B.rq)(a,r,i),e&&"displayField"in t&&t.displayField&&(0,B.rq)(a,r,t.displayField);const d=Array.from(a).sort();this._set("requiredFields",d)}_validateFetchPopupFeatures(e,t){if(null!=t)for(const r of e){const e=r.origin&&"layer"in r.origin?r.origin.layer:r.layer;if("popupEnabled"in e&&!e.popupEnabled)throw new s.A("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:e});if(r.isAggregate){const t="featureReduction"in e?e.featureReduction:null;if(!(t&&"popupTemplate"in t&&t.popupEnabled&&t.popupTemplate))throw new s.A("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:e})}else if("popupTemplate"in e&&!(0,J.D8)(e,t))throw new s.A("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:e})}}_popupFeatureHasRequiredFields(e,t){return(0,B.Kl)(t,e)}async _fetchPopupFeatures(e,t){const r=new Array(e.length),i=new Map,s=await this._createPopupQuery(e.map((e=>{var t,r;return null!==(t=null===(r=e.origin)||void 0===r?void 0:r.layer)&&void 0!==t?t:e.layer})),t);for(let a=0;a<e.length;a++){var o,n;const l=e[a];if(l.isAggregate){r[a]=l;continue}const u=null!==(o=null===(n=l.origin)||void 0===n?void 0:n.layer)&&void 0!==o?o:l.layer;if(!u||!("popupEnabled"in u))continue;const d=(0,B.hL)(this.layer.fieldsIndex,s.outFields),c=(0,J.D8)(u,t);if(null==c)continue;const p=await this._loadArcadeModules(c);(0,_.Te)(t),p&&p.arcadeUtils.hasGeometryOperations(c)||!this._popupFeatureHasRequiredFields(l,d)?i.set(l.getObjectId(),{graphic:l,index:a}):r[a]=l}if("stream"===this.layer.type||"parquet"===this.layer.type||0===i.size)return r.filter(Boolean);s.objectIds=Array.from(i.keys());try{const e=await this.layer.queryFeatures(s,t);for(const t of e.features){const{graphic:{geometry:e,origin:s},index:o}=i.get(t.getObjectId());t.geometry||(t.geometry=e),t.origin=s,r[o]=t}}catch{}return r.filter(Boolean)}async _createPopupQuery(e,t){const r=this.layer.createQuery(),i=new Set;let s=!1;const o=null!==e&&void 0!==e?e:[this.layer];for(const n of o){if(!("popupEnabled"in n))continue;const e=(0,J.D8)(n,t);if(null==e)continue;const r=await this._loadArcadeModules(e);(0,_.Te)(t);const o=r&&r.arcadeUtils.hasGeometryOperations(e);s=!("point"!==this.layer.geometryType&&!o);const a=await(0,J.TO)(this.layer,e);(0,_.Te)(t);for(const t of a)i.add(t)}if(r.returnGeometry=s,r.returnZ=s,r.returnM=s,r.outFields=Array.from(i),r.outSpatialReference=this.view.spatialReference,"floorInfo"in this.layer&&this.layer.floorInfo){const e=(0,j.E)(this);null!=e&&(r.where=r.where?"(".concat(r.where,") AND (").concat(e,")"):e)}return r}canResume(){return!!super.canResume()&&(null==this.timeExtent||!this.timeExtent.isEmpty)}getTest(){}get test(){}};return(0,i._)([(0,l.MZ)()],t.prototype,"_updatingRequiredFieldsPromise",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],t.prototype,"availableFields",null),(0,i._)([(0,l.MZ)({readOnly:!0})],t.prototype,"dataUpdating",void 0),(0,i._)([(0,l.MZ)({type:H.A})],t.prototype,"featureEffect",null),(0,i._)([(0,l.MZ)({type:k.A})],t.prototype,"filter",void 0),(0,i._)([(0,l.MZ)()],t.prototype,"layer",void 0),(0,i._)([(0,l.MZ)({type:Number})],t.prototype,"maximumNumberOfFeatures",null),(0,i._)([(0,l.MZ)({readOnly:!0,type:Boolean})],t.prototype,"maximumNumberOfFeaturesExceeded",null),(0,i._)([(0,l.MZ)({readOnly:!0})],t.prototype,"requiredFields",void 0),(0,i._)([(0,l.MZ)()],t.prototype,"suspended",void 0),(0,i._)([(0,l.MZ)()],t.prototype,"view",void 0),t=(0,i._)([(0,d.$)("esri.views.layers.FeatureLayerView")],t),t};var U=r(91196),Y=r(771);let W=class extends((0,Y.A)((0,p.T)($((0,h.w)(U.A))))){constructor(e){super(e)}initialize(){this.addHandles((0,a.wB)((()=>this._updatingRequiredFieldsPromise),(e=>this._updatingHandles.addPromise(e)),a.pc))}destroy(){this._updatingHandles.removeAll(),this._fetcherContext=(0,n.pR)(this._fetcherContext)}get maximumNumberOfFeatures(){return this.graphicsPipeline.maximumNumberOfFeatures}set maximumNumberOfFeatures(e){this.graphicsPipeline.maximumNumberOfFeatures=e}get maximumNumberOfFeaturesExceeded(){return null!=this.graphicsPipeline&&!this.suspended&&this.graphicsPipeline.maximumNumberOfFeaturesExceeded}get updatingProgressValue(){var e,t;return null!==(e=null===(t=this.graphicsPipeline)||void 0===t?void 0:t.updatingProgressValue)&&void 0!==e?e:0}get updatePolicy(){var e,t;return null!==(e=null===(t=this.graphicsPipeline)||void 0===t?void 0:t.updatePolicy)&&void 0!==e?e:T.q.ASYNC}get hasZ(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsZ)&&("returnZ"in e&&null!=e.returnZ?e.returnZ:t.supportsZ)}get hasM(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsM)&&"returnM"in e&&null!=e.returnM&&e.returnM}setVisibility(e,t){var r;null===(r=this.graphicsPipeline)||void 0===r||r.setVisibility(e,t)}createQuery(){return super.createQuery()}queryFeatures(e,t){const r=()=>super.queryFeatures(e,t);return"mesh"===this.layer.geometryType?this._queryFeaturesMesh(this._ensureQuery(e),r):r()}async createGraphicsPipeline(){if((0,o.A)("feature-pipeline-3d-test")){const{Feature3DPipeline:e}=await r.e(2745).then(r.bind(r,82745));return new e({layerView:this})}return new D({layerView:this})}async doRefresh(e){return await this.graphicsPipeline.doRefresh(e)}_popupFeatureHasRequiredFields(e,t){if(!super._popupFeatureHasRequiredFields(e,t))return!1;const r=(0,c.RW)(e,this.layer.objectIdField);if(null==r)return!0;const i=this.graphicsPipeline.getMissingAttributesForFeature(r);if(null==i)return!0;for(const s of t)if(i.has(s))return!1;return!0}get usedMemory(){var e,t;return null!==(e=null===(t=this.graphicsPipeline)||void 0===t?void 0:t.usedMemory)&&void 0!==e?e:0}get unloadedMemory(){var e,t;return null!==(e=null===(t=this.graphicsPipeline)||void 0===t?void 0:t.unloadedMemory)&&void 0!==e?e:0}get ignoresMemoryFactor(){var e,t;return null!==(e=null===(t=this.graphicsPipeline)||void 0===t?void 0:t.ignoresMemoryFactor)&&void 0!==e&&e}async _queryFeaturesMesh(e,t){await this._validateQueryFeaturesMesh(e);const r=await t(),i=this.graphicsPipeline;if(null!==e&&void 0!==e&&e.outStatistics||null==i)return r;const s=this.layer.objectIdField,o=[];for(const n of r.features)if(n.geometry){const e=i.getHydratedGeometry(n.attributes[s]);e&&(n.geometry=e,o.push(n))}else o.push(n);return r.features=o,r}async _validateQueryFeaturesMesh(e){if(!e)return;const t=e=>{throw new s.A("feature-layer-view:unsupported-query","Queries on Mesh feature collection layers do not support '".concat(e,"'"))},r=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const i of r)null!=e[i]&&t(i);"returnM"in e&&e.returnM&&t("returnM"),"returnCentroid"in e&&e.returnCentroid&&t("returnCentroid"),null==e.outSpatialReference||e.outSpatialReference.equals(this.view.spatialReference)||t("outSpatialReference")}get test(){}};(0,i._)([(0,l.MZ)()],W.prototype,"layer",void 0),(0,i._)([(0,l.MZ)()],W.prototype,"graphicsPipeline",void 0),(0,i._)([(0,l.MZ)()],W.prototype,"maximumNumberOfFeatures",null),(0,i._)([(0,l.MZ)()],W.prototype,"maximumNumberOfFeaturesExceeded",null),(0,i._)([(0,l.MZ)(L.S)],W.prototype,"updatingProgress",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],W.prototype,"updatingProgressValue",null),(0,i._)([(0,l.MZ)({readOnly:!0})],W.prototype,"updatePolicy",null),(0,i._)([(0,l.MZ)({readOnly:!0})],W.prototype,"hasZ",null),(0,i._)([(0,l.MZ)({readOnly:!0})],W.prototype,"hasM",null),W=(0,i._)([(0,d.$)("esri.views.3d.layers.FeatureLayerViewBase3D")],W);const K=W},14672:(e,t,r)=>{r.d(t,{X:()=>s});var i=r(65768);class s extends i.P{constructor(e,t,r,i,s,o){super(e.usedMemory,e.displayedFeatures,e.totalFeatures,e.maximumFeatures,e.nodes,e.core),this.storedFeatures=t,this.totalVertices=r,this.partial=i,this.mode=s,this.symbolComplexity=o}}},771:(e,t,r)=>{r.d(t,{A:()=>l});var i=r(35143),s=r(76460),o=r(50346),n=r(68134),a=(r(81806),r(47249),r(50076),r(85842));const l=e=>{let t=class extends e{initialize(){this.addHandles((0,n.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,o.zf)(e)||s.A.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,i._)([(0,a.$)("esri.views.layers.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=8705.c36c101b.chunk.js.map