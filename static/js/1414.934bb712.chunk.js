"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[1414],{46530:(e,t,r)=>{function i(e){var t;const r=e.layer;return"floorInfo"in r&&null!==(t=r.floorInfo)&&void 0!==t&&t.floorField&&"floors"in e.view?o(e.view.floors,r.floorInfo.floorField):null}function n(e,t){var r;return"floorInfo"in t&&null!==(r=t.floorInfo)&&void 0!==r&&r.floorField?o(e,t.floorInfo.floorField):null}function o(e,t){if(null===e||void 0===e||!e.length)return null;const r=e.filter((e=>""!==e)).map((e=>"'".concat(e,"'")));return r.push("''"),"".concat(t," IN (").concat(r.join(","),") OR ").concat(t," IS NULL")}r.d(t,{E:()=>i,f:()=>n})},65419:(e,t,r)=>{r.d(t,{Sk:()=>o,Zx:()=>n,_X:()=>s});var i=r(49140);function n(e,t,r){const i=t.flatten((e=>{let{sublayers:t}=e;return t})).length;return i!==e.length||(!!e.some((e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r))||!l(e,t))}function o(e,t,r){return!!e.some((e=>{const t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(null==t.gdbVersion||t.gdbVersion===r))||e.originIdOf("renderer")>i.Gr.SERVICE||e.originIdOf("labelingInfo")>i.Gr.SERVICE||e.originIdOf("opacity")>i.Gr.SERVICE||e.originIdOf("labelsVisible")>i.Gr.SERVICE}))||!l(e,t)}function l(e,t){if(null===e||void 0===e||!e.length||null==t)return!0;const r=t.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let i=0;const n=r.length;for(const{id:o}of e){for(;i<n&&r[i]!==o;)i++;if(i>=n)return!1}return!0}function s(e){return!!e&&e.some((e=>{var t;return null!=e.minScale||null!=(null===(t=e.layerDefinition)||void 0===t?void 0:t.minScale)}))}},4955:(e,t,r)=>{function i(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function n(e,t){var r;return"number"==typeof e?e:null!==e&&void 0!==e&&null!==(r=e.stops)&&void 0!==r&&r.length?function(e){let t=0,r=0;for(let i=0;i<e.length;i++){const n=e[i].size;"number"==typeof n&&(t+=n,r++)}return t/r}(e.stops):t}function o(e,t){if(!t)return e;const r=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:r,minSize:i}=t;return(n(r,e)+n(i,e))/2}));let i=0;const o=r.length;if(0===o)return e;for(let n=0;n<o;n++)i+=r[n];const l=Math.floor(i/o);return Math.max(l,e)}function l(e){const t=null===e||void 0===e?void 0:e.renderer,r="touch"===(null===e||void 0===e?void 0:e.pointerType)?9:6;if(!t)return r;const n="visualVariables"in t?o(r,t.visualVariables):r;if("simple"===t.type)return i(n,t.symbol);if("unique-value"===t.type){var l;let e=n;return null!==(l=t.uniqueValueInfos)&&void 0!==l&&l.forEach((t=>{e=i(e,t.symbol)})),e}if("class-breaks"===t.type){let e=n;return t.classBreakInfos.forEach((t=>{e=i(e,t.symbol)})),e}return"dot-density"===t.type||t.type,n}r.d(t,{o:()=>l})},76117:(e,t,r)=>{r.d(t,{Uh:()=>$,ox:()=>Y});var i=r(35143),n=r(39356),o=r(91967),l=r(18690),s=r(19276),a=r(50076),u=r(54901),p=r(81806),c=r(87663),d=r(50346),y=r(68134),f=r(31633),h=r(46053),m=(r(76460),r(85842)),g=r(76797),v=r(68002),b=r(53430),w=r(46530),x=r(4955),I=r(3825),M=r(1438),_=r(54994),S=r(34154),A=r(19902),E=r(80963),F=r(65419);function O(e,t){var r;const{dpi:i,gdbVersion:n,geometry:o,geometryPrecision:l,height:s,historicMoment:a,layerOption:u,mapExtent:p,maxAllowableOffset:c,returnFieldName:d,returnGeometry:y,returnUnformattedValues:f,returnZ:h,spatialReference:m,timeExtent:g,tolerance:v,width:b}=e.toJSON(),{dynamicLayers:w,layerDefs:x,layerIds:I}=R(e),M=null!=(null===t||void 0===t?void 0:t.geometry)?t.geometry:null,_={historicMoment:a,geometryPrecision:l,maxAllowableOffset:c,returnFieldName:d,returnGeometry:y,returnUnformattedValues:f,returnZ:h,tolerance:v},S=M&&M.toJSON()||o;_.imageDisplay="".concat(b,",").concat(s,",").concat(i),n&&(_.gdbVersion=n),S&&(delete S.spatialReference,_.geometry=JSON.stringify(S),_.geometryType=(0,A.$B)(S));const F=null!==(r=null!==m&&void 0!==m?m:null===S||void 0===S?void 0:S.spatialReference)&&void 0!==r?r:null===p||void 0===p?void 0:p.spatialReference;if(F&&(_.sr=(0,E.YX)(F)),_.time=g?[g.start,g.end].join(","):null,p){const{xmin:e,ymin:t,xmax:r,ymax:i}=p;_.mapExtent="".concat(e,",").concat(t,",").concat(r,",").concat(i)}return x&&(_.layerDefs=x),w&&!x&&(_.dynamicLayers=w),_.layers="popup"===u?"visible":u,I&&!w&&(_.layers+=":".concat(I.join(","))),_}function R(e){var t;const{mapExtent:r,floors:i,width:n,sublayers:o,layerIds:l,layerOption:s,gdbVersion:a}=e,u=null===o||void 0===o||null===(t=o.find((e=>null!=e.layer)))||void 0===t||null===(t=t.layer)||void 0===t?void 0:t.serviceSublayers,p="popup"===s,c={},d=(0,v.X_)({extent:r,width:n,spatialReference:null===r||void 0===r?void 0:r.spatialReference}),y=[],f=e=>{const t=0===d,r=0===e.minScale||d<=e.minScale,i=0===e.maxScale||d>=e.maxScale;if(e.visible&&(t||r&&i))if(e.sublayers)e.sublayers.forEach(f);else{if(!1===(null===l||void 0===l?void 0:l.includes(e.id))||p&&(!e.popupTemplate||!e.popupEnabled))return;y.unshift(e)}};if(null!==o&&void 0!==o&&o.forEach(f),o&&!y.length)c.layerIds=[];else{const e=(0,F.Sk)(y,u,a),t=y.map((e=>{const t=(0,w.f)(i,e);return e.toExportImageJSON(t)}));if(e)c.dynamicLayers=JSON.stringify(t);else{if(o){let e=y.map((e=>{let{id:t}=e;return t}));l&&(e=e.filter((e=>l.includes(e)))),c.layerIds=e}else(null===l||void 0===l?void 0:l.length)&&(c.layerIds=l);const e=function(e,t){const r=!(null===e||void 0===e||!e.length),i=t.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return i.length?i.map((t=>{const r=(0,w.f)(e,t),i=(0,S.m)(r,t.definitionExpression);return{id:t.id,definitionExpression:null!==i&&void 0!==i?i:void 0}})):null}(i,y);if(null!=e&&e.length){const t={};for(const r of e)r.definitionExpression&&(t[r.id]=r.definitionExpression);Object.keys(t).length&&(c.layerDefs=JSON.stringify(t))}}}return c}var Z,V=r(35238),P=r(82111),T=r(42553),j=r(40565),G=(r(47249),r(17707)),N=r(13312);let L=Z=class extends T.oY{static from(e){return(0,j.PZ)(Z,e)}constructor(e){super(e),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}};(0,i._)([(0,h.MZ)({type:Number,json:{write:!0}})],L.prototype,"dpi",void 0),(0,i._)([(0,h.MZ)()],L.prototype,"floors",void 0),(0,i._)([(0,h.MZ)({type:String,json:{write:!0}})],L.prototype,"gdbVersion",void 0),(0,i._)([(0,h.MZ)({types:V.yR,json:{read:A.rS,write:!0}})],L.prototype,"geometry",void 0),(0,i._)([(0,h.MZ)({type:Number,json:{write:!0}})],L.prototype,"geometryPrecision",void 0),(0,i._)([(0,h.MZ)({type:Number,json:{write:!0}})],L.prototype,"height",void 0),(0,i._)([(0,h.MZ)({type:Date})],L.prototype,"historicMoment",void 0),(0,i._)([(0,G.K)("historicMoment")],L.prototype,"writeHistoricMoment",null),(0,i._)([(0,h.MZ)({type:[Number],json:{write:!0}})],L.prototype,"layerIds",void 0),(0,i._)([(0,h.MZ)({type:["top","visible","all","popup"],json:{write:!0}})],L.prototype,"layerOption",void 0),(0,i._)([(0,h.MZ)({type:g.A,json:{write:!0}})],L.prototype,"mapExtent",void 0),(0,i._)([(0,h.MZ)({type:Number,json:{write:!0}})],L.prototype,"maxAllowableOffset",void 0),(0,i._)([(0,h.MZ)({type:Boolean,json:{write:!0}})],L.prototype,"returnFieldName",void 0),(0,i._)([(0,h.MZ)({type:Boolean,json:{write:!0}})],L.prototype,"returnGeometry",void 0),(0,i._)([(0,h.MZ)({type:Boolean,json:{write:!0}})],L.prototype,"returnM",void 0),(0,i._)([(0,h.MZ)({type:Boolean,json:{write:!0}})],L.prototype,"returnUnformattedValues",void 0),(0,i._)([(0,h.MZ)({type:Boolean,json:{write:!0}})],L.prototype,"returnZ",void 0),(0,i._)([(0,h.MZ)({type:N.A,json:{write:!0}})],L.prototype,"spatialReference",void 0),(0,i._)([(0,h.MZ)()],L.prototype,"sublayers",void 0),(0,i._)([(0,h.MZ)({type:P.A,json:{write:!0}})],L.prototype,"timeExtent",void 0),(0,i._)([(0,h.MZ)({type:Number,json:{write:!0}})],L.prototype,"tolerance",void 0),(0,i._)([(0,h.MZ)({type:Number,json:{write:!0}})],L.prototype,"width",void 0),L=Z=(0,i._)([(0,m.$)("esri.rest.support.IdentifyParameters")],L);const U=L;var k=r(28379),H=r(31608);let z=class extends T.oY{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return n.A.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;const{attributes:r,geometry:i}=e;r&&(t.attributes={...r}),null!=i&&(t.geometry=i.toJSON(),t.geometryType=H.Y.toJSON(i.type))}};(0,i._)([(0,h.MZ)({type:String,json:{write:!0}})],z.prototype,"displayFieldName",void 0),(0,i._)([(0,h.MZ)({type:n.A})],z.prototype,"feature",void 0),(0,i._)([(0,k.w)("feature",["attributes","geometry"])],z.prototype,"readFeature",null),(0,i._)([(0,G.K)("feature")],z.prototype,"writeFeature",null),(0,i._)([(0,h.MZ)({type:Number,json:{write:!0}})],z.prototype,"layerId",void 0),(0,i._)([(0,h.MZ)({type:String,json:{write:!0}})],z.prototype,"layerName",void 0),z=(0,i._)([(0,m.$)("esri.rest.support.IdentifyResult")],z);const D=z;async function Q(e,t,r){const i=(o=t,t=U.from(o)).geometry?[t.geometry]:[],n=(0,_.Dl)(e);var o;return n.path+="/identify",(0,M.el)(i).then((e=>{const i=O(t,{geometry:null===e||void 0===e?void 0:e[0]}),o=(0,_.lF)({...n.query,f:"json",...i}),l=(0,_.jV)(o,r);return(0,I.A)(n.path,l).then(q).then((e=>function(e,t){if(null===t||void 0===t||!t.length)return e;const r=new Map;function i(e){r.set(e.id,e),e.sublayers&&e.sublayers.forEach(i)}t.forEach(i);for(const n of e.results)n.feature.sourceLayer=r.get(n.layerId);return e}(e,t.sublayers)))}))}function q(e){const t=e.data;return t.results=t.results||[],t.exceededTransferLimit=Boolean(t.exceededTransferLimit),t.results=t.results.map((e=>D.fromJSON(e))),t}var J=r(98976),B=r(76940),C=r(2257);let X=null;function Y(e,t){return"tile"===t.type||"map-image"===t.type}let $=class extends o.A{constructor(e){super(e),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=(0,d.sg)((async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch((()=>{})))}))}initialize(){const e=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch((()=>{}))),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([(0,y.on)((()=>this.highlightGraphics),"change",(t=>e(t.added)),{onListenerAdd:t=>e(t)})])}async fetchPopupFeaturesAtLocation(e,t){var r,i;const{layerView:{layer:n,view:{scale:o}}}=this;if(!e)throw new a.A("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:n});const l=function(e,t,r){const i=[];if(!e)return i;const n=e=>{const o=0===e.minScale||t<=e.minScale,l=0===e.maxScale||t>=e.maxScale;if(e.visible&&o&&l)if(e.sublayers)e.sublayers.forEach(n);else if(e.popupEnabled){const t=(0,C.D8)(e,{...r,defaultPopupTemplateEnabled:!1});null!=t&&i.unshift({sublayer:e,popupTemplate:t})}};return e.map(n),i}(n.sublayers,o,t);if(!l.length)return[];const s=await async function(e,t){var r;if(null!==(r=e.capabilities)&&void 0!==r&&null!==(r=r.operations)&&void 0!==r&&r.supportsQuery)return!0;try{return await Promise.any(t.map((e=>{let{sublayer:t}=e;return t.load().then((()=>t.capabilities.operations.supportsQuery))})))}catch{return!1}}(n,l);if((null!==(r=null===(i=n.capabilities)||void 0===i||null===(i=i.operations)||void 0===i?void 0:i.supportsIdentify)&&void 0!==r&&!r||!(n.version>=10.5))&&!s)throw new a.A("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:n});return s?this._fetchPopupFeaturesUsingQueries(e,l,t):this._fetchPopupFeaturesUsingIdentify(e,l,t)}clearHighlights(){var e;null===(e=this.highlightGraphics)||void 0===e||e.removeAll()}highlight(e){var t,r;const i=this.highlightGraphics;if(!i)return(0,u.hA)();let o=null;if(e instanceof n.A?o=[e]:s.A.isCollection(e)&&e.length>0?o=e.toArray():Array.isArray(e)&&e.length>0&&(o=e),o=null===(t=o)||void 0===t?void 0:t.filter(l.Ru),null===(r=o)||void 0===r||!r.length)return(0,u.hA)();for(const n of o){const e=n.sourceLayer;null!=e&&"geometryType"in e&&"point"===e.geometryType&&(n.visible=!1)}return i.addMany(o),(0,u.hA)((()=>{var e;return i.removeMany(null!==(e=o)&&void 0!==e?e:[])}))}async _updateHighlightedFeaturesSymbols(e){const{layerView:{view:t},highlightGraphics:i,highlightGraphicUpdated:n}=this;if(i&&n)for(const o of e){const e=o.sourceLayer&&"renderer"in o.sourceLayer&&o.sourceLayer.renderer;o.sourceLayer&&"geometryType"in o.sourceLayer&&"point"===o.sourceLayer.geometryType&&e&&"getSymbolAsync"in e&&e.getSymbolAsync(o).then((async l=>{var s;l||(l=new B.A);let a=null;const u="visualVariables"in e?null===(s=e.visualVariables)||void 0===s?void 0:s.find((e=>"size"===e.type)):void 0;u&&(X||(X=(await Promise.resolve().then(r.bind(r,15492))).getSize),a=X(u,o,{view:t.type,scale:t.scale,shape:"simple-marker"===l.type?l.style:null})),a||(a="width"in l&&"height"in l&&null!=l.width&&null!=l.height?Math.max(l.width,l.height):"size"in l?l.size:16),i.includes(o)&&(o.symbol=new B.A({style:"square",size:a,xoffset:"xoffset"in l?l.xoffset:0,yoffset:"yoffset"in l?l.yoffset:0}),n(o,"symbol"),o.visible=!0)}))}}async _updateHighlightedFeaturesGeometries(e){const{layerView:{layer:t,view:r},highlightGraphics:i,highlightGraphicUpdated:n}=this;if(this._highlightGeometriesResolution=e,!n||null===i||void 0===i||!i.length||!t.capabilities.operations.supportsQuery)return;const o=this._getTargetResolution(e),l=new Map;for(const u of i)if(!this._featuresResolutions.has(u)||this._featuresResolutions.get(u)>o){const e=u.sourceLayer;(0,c.tE)(l,e,(()=>new Map)).set(u.getObjectId(),u)}const s=Array.from(l,(e=>{let[t,i]=e;const n=t.createQuery();return n.objectIds=[...i.keys()],n.outFields=[t.objectIdField],n.returnGeometry=!0,n.maxAllowableOffset=o,n.outSpatialReference=r.spatialReference,t.queryFeatures(n)})),a=await Promise.all(s);if(!this.destroyed)for(const{features:u}of a)for(const e of u){const t=e.sourceLayer,r=l.get(t).get(e.getObjectId());r&&i.includes(r)&&(r.geometry=e.geometry,n(r,"geometry"),this._featuresResolutions.set(r,o))}}_getTargetResolution(e){const t=e*(0,f.GA)(this.layerView.view.spatialReference),r=t/16;return r<=10?0:e/t*r}async _fetchPopupFeaturesUsingIdentify(e,t,r){const i=await this._createIdentifyParameters(e,t,r);if(null==i)return[];const{results:n}=await Q(this.layerView.layer.parsedUrl,i,r);return n.map((e=>e.feature))}async _createIdentifyParameters(e,t,r){const{floors:i,layer:n,timeExtent:o,view:{spatialReference:l,scale:s}}=this.layerView;if(!t.length)return null;await Promise.all(t.map((e=>{let{sublayer:t}=e;return t.load(r).catch((()=>{}))})));const a=Math.min((0,p.A)("mapservice-popup-identify-max-tolerance"),n.allSublayers.reduce(((e,t)=>t.renderer?(0,x.o)({renderer:t.renderer,pointerType:null===r||void 0===r?void 0:r.pointerType}):e),2)),u=this.createFetchPopupFeaturesQueryGeometry(e,a),c=(0,v.i1)(s,l),d=Math.round(u.width/c),y=new g.A({xmin:u.center.x-c*d,ymin:u.center.y-c*d,xmax:u.center.x+c*d,ymax:u.center.y+c*d,spatialReference:u.spatialReference});return new U({floors:i,gdbVersion:"gdbVersion"in n?n.gdbVersion:void 0,geometry:e,height:d,layerOption:"popup",mapExtent:y,returnGeometry:!0,spatialReference:l,sublayers:n.sublayers,timeExtent:o,tolerance:a,width:d})}async _fetchPopupFeaturesUsingQueries(e,t,r){const{layerView:{floors:i,timeExtent:n}}=this,o=t.map((async t=>{var o;let{sublayer:l,popupTemplate:s}=t;if(await l.load(r).catch((()=>{})),l.capabilities&&!l.capabilities.operations.supportsQuery)return[];const a=l.createQuery(),u=(0,x.o)({renderer:l.renderer,pointerType:null===r||void 0===r?void 0:r.pointerType}),p=this.createFetchPopupFeaturesQueryGeometry(e,u),c=new Set,[y]=await Promise.all([(0,C.TO)(l,s),null===(o=l.renderer)||void 0===o?void 0:o.collectRequiredFields(c,l.fieldsIndex)]);(0,d.Te)(r),(0,b._w)(c,l.fieldsIndex,y);const f=Array.from(c).sort();if(a.geometry=p,a.outFields=f,a.timeExtent=n,i){const e=i.clone(),t=(0,w.f)(e,l);null!=t&&(a.where=a.where?"(".concat(a.where,") AND (").concat(t,")"):t)}const h=this._getTargetResolution(p.width/u),m=await function(e){var t;return null!==(t=e.expressionInfos)&&void 0!==t&&t.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?(0,J.lw)():Promise.resolve()}(s);(0,d.Te)(r);const g="point"===l.geometryType||m&&m.arcadeUtils.hasGeometryOperations(s);g||(a.maxAllowableOffset=h);let{features:v}=await l.queryFeatures(a,r);const I=g?0:h;v=await async function(e,t,r){const i=e.renderer;return i&&"defaultSymbol"in i&&!i.defaultSymbol&&(t=i.valueExpression?await Promise.all(t.map((e=>i.getSymbolAsync(e,r).then((t=>t?e:null))))).then((e=>e.filter((e=>null!=e)))):t.filter((e=>null!=i.getSymbol(e)))),t}(l,v,r);for(const e of v)this._featuresResolutions.set(e,I);return v}));return(await Promise.allSettled(o)).reduce(((e,t)=>"fulfilled"===t.status?[...e,...t.value]:e),[]).filter(l.Ru)}};(0,i._)([(0,h.MZ)({constructOnly:!0})],$.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),(0,i._)([(0,h.MZ)({constructOnly:!0})],$.prototype,"layerView",void 0),(0,i._)([(0,h.MZ)({constructOnly:!0})],$.prototype,"highlightGraphics",void 0),(0,i._)([(0,h.MZ)({constructOnly:!0})],$.prototype,"highlightGraphicUpdated",void 0),(0,i._)([(0,h.MZ)({constructOnly:!0})],$.prototype,"updatingHandles",void 0),$=(0,i._)([(0,m.$)("esri.views.layers.support.MapService")],$)},2257:(e,t,r)=>{r.d(t,{D8:()=>o,TO:()=>n,d0:()=>l});var i=r(53430);async function n(e){var t,r;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.popupTemplate;if(null==n)return[];const o=await n.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:l}=n,{objectIdField:s,typeIdField:a,globalIdField:u,relationships:p}=e;if(o.includes("*"))return["*"];const c=l?(0,i.eX)(e):[],d=(0,i.DB)(e.fieldsIndex,[...o,...c]);return a&&d.push(a),d&&s&&null!==(t=e.fieldsIndex)&&void 0!==t&&t.has(s)&&!d.includes(s)&&d.push(s),d&&u&&null!==(r=e.fieldsIndex)&&void 0!==r&&r.has(u)&&!d.includes(u)&&d.push(u),p&&p.forEach((t=>{var r;const{keyField:i}=t;d&&i&&(null===(r=e.fieldsIndex)||void 0===r?void 0:r.has(i))&&!d.includes(i)&&d.push(i)})),d}function o(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}function l(e,t){return null!=o(e,{defaultPopupTemplateEnabled:t})}},55754:(e,t,r)=>{r.d(t,{V:()=>l,t:()=>s});r(35238);var i=r(31633),n=r(4955),o=r(76797);function l(e,t,r){var n;let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new o.A,s=0;if("2d"===r.type)s=t*(null!==(n=r.resolution)&&void 0!==n?n:0);else if("3d"===r.type){const n=r.overlayPixelSizeInMapUnits(e),o=r.basemapSpatialReference;s=null==o||o.equals(r.spatialReference)?t*n:(0,i.GA)(o)/(0,i.GA)(r.spatialReference)}const a=e.x-s,u=e.y-s,p=e.x+s,c=e.y+s,{spatialReference:d}=r;return l.xmin=Math.min(a,p),l.ymin=Math.min(u,c),l.xmax=Math.max(a,p),l.ymax=Math.max(u,c),l.spatialReference=d,l}function s(e,t,r){const i=r.toMap(e);return null!=i&&l(i,(0,n.o)(),r,a).intersects(t)}const a=new o.A}}]);
//# sourceMappingURL=1414.934bb712.chunk.js.map