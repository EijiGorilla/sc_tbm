"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[2843],{46530:(e,t,r)=>{function n(e){var t;const r=e.layer;return"floorInfo"in r&&null!==(t=r.floorInfo)&&void 0!==t&&t.floorField&&"floors"in e.view?l(e.view.floors,r.floorInfo.floorField):null}function i(e,t){var r;return"floorInfo"in t&&null!==(r=t.floorInfo)&&void 0!==r&&r.floorField?l(e,t.floorInfo.floorField):null}function l(e,t){if(null===e||void 0===e||!e.length)return null;const r=e.filter((e=>""!==e)).map((e=>"'".concat(e,"'")));return r.push("''"),"".concat(t," IN (").concat(r.join(","),") OR ").concat(t," IS NULL")}r.d(t,{E:()=>n,f:()=>i})},12843:(e,t,r)=>{r.d(t,{FeatureSnappingEngine:()=>G});var n=r(35143),i=r(91967),l=r(18690),a=r(54901),o=r(81806),s=r(50346),u=r(68134),d=r(31633),c=r(46053),p=r(76460),v=r(85842),h=r(19555),y=r(20664),f=r(9392),g=r(53494),S=r(19451),w=r(12482),_=r(75543),m=r(23862),b=r(34154),F=(r(47249),r(8203)),M=r(46530),R=r(31933),x=r(70330),I=r(90992);let E=class extends i.A{set attributeRulesEnabled(e){this._set("attributeRulesEnabled",e),e&&this.loadRules()}get layerView(){var e;return null===(e=this.view)||void 0===e||null===(e=e.allLayerViews)||void 0===e?void 0:e.find((e=>e.layer===this.layer))}get valid(){const{_valid:e,snappingSource:t,layer:r}=this;return!(!t||!r)&&e}get subtypeFilter(){var e,t,r;const{layer:n,snappingSource:i}=this;if(!(0,R.F2)(n)||null===(e=n.subtypes)||void 0===e||!e.length||!i)return{mode:"not-in-use",filter:null};const l=i.layerSource.sublayerSources.filter((e=>{var t;return e.enabled&&e.layer.visible&&(0,I.JU)(null===(t=this.view)||void 0===t?void 0:t.scale,e.layer.effectiveScaleRange.minScale,e.layer.effectiveScaleRange.maxScale)})).map((e=>e.layer.subtypeCode));if(!l.length)return{mode:"none-visible",filter:null};if(l.length===n.subtypes.length)return{mode:"all-visible",filter:null};const a=null!==(t=null===(r=n.fieldsIndex.get(n.subtypeField))||void 0===r?void 0:r.name)&&void 0!==t?t:n.subtypeField;return 1===l.length?{mode:"in-use",filter:"".concat(a," = ").concat(l.getItemAt(0))}:{mode:"in-use",filter:"".concat(a," IN (").concat(l.join(", "),")")}}get floorFilter(){const{view:e,layer:t}=this;return e&&t?(0,M.E)({view:e,layer:t}):null}constructor(e){super(e),this.layer=null,this.snappingSource=null,this.rulesTable=null,this._valid=null}initialize(){if(!this.snappingSource||!this.layer)return void(this._valid=!1);const{layer:e,snappingSource:t}=this;if("refresh"in e){const r=e;this.addHandles(r.on("refresh",(()=>t.refresh())))}this.loadRules(),this.addHandles([(0,u.wB)((()=>t.updating),(e=>t.layerSource.updating=e),u.pc),(0,u.wB)((()=>t.availability),(e=>t.layerSource.availability=e),u.pc)])}getFetchCandidatesParameters(e,t,r){var n,i,l,a,s;if(!this.valid)return[];const{layer:u,layerView:d,floorFilter:c,rulesTable:p,subtypeFilter:v}=this,h={distance:r,mode:null!==(n=null===(i=this.view)||void 0===i?void 0:i.type)&&void 0!==n?n:"2d",point:e,coordinateHelper:t.coordinateHelper,returnEdge:!0,vertexMode:"all",filter:d&&"filter"in d?d.filter:null};if(c&&(h.filter=L(h.filter,c)),"not-in-use"!==v.mode&&"all-visible"!==v.mode){if("none-visible"===v.mode)return[];h.filter?h.filter.where=(0,b.m)(h.filter.where,v.mode):h.filter=new F.A({where:v.filter})}if(!this.attributeRulesEnabled)return[h];const y=t.feature,f="subtype-sublayer"===(null===y||void 0===y||null===(l=y.sourceLayer)||void 0===l?void 0:l.type)?y.sourceLayer.parent:null===y||void 0===y?void 0:y.sourceLayer;if(p&&y&&(0,x.Tu)(null===(a=this.view)||void 0===a?void 0:a.map)&&((0,R.yZ)(u)||(0,R.F2)(u))&&u.layerId&&((0,R.yZ)(f)||(0,R.F2)(f))&&null!==(s=this.view.map.utilityNetworks)&&void 0!==s&&s.find((e=>e.isUtilityLayer(f)))){var g,S;if("loaded"!==p.loadStatus)return[];const e=[],t=u.layerId,r=null===(g=p.getFeatureSQL(f,y))||void 0===g?void 0:g[t];if(!r)return[];const n=r.anyVertex;let i=r.endVertex;return i&&n&&i===n&&(i=""),i&&e.push({...h,returnEdge:!1,vertexMode:"ends",filter:L(h.filter,i)}),n&&e.push({...h,returnEdge:null!==(S=(0,o.A)("snapping-include-edges-when-applying-any-vertex-rule"))&&void 0!==S&&S,vertexMode:"all",filter:L(h.filter,n)}),e}return[h]}async loadRules(){this._valid=null;const{layer:e,view:t,attributeRulesEnabled:r}=this;if(r&&e&&t&&(0,x.Tu)(null===t||void 0===t?void 0:t.map)&&((0,R.yZ)(e)||(0,R.F2)(e)))try{var n,i,l,a;await Promise.allSettled(null!==(n=null===(i=t.map.utilityNetworks)||void 0===i?void 0:i.map((e=>e.load())))&&void 0!==n?n:[]);const r=null===(l=t.map.utilityNetworks)||void 0===l?void 0:l.find((t=>t.isUtilityLayer(e)));r&&(this.rulesTable=await r.getRulesTable(),await(null===(a=this.rulesTable)||void 0===a?void 0:a.load()))}catch(o){return this._valid=!1,void p.A.getLogger("esri.views.interactive.snapping.FeatureSnappingSourceInfo").error("Failed to load rules table for snapping source",e.title)}this._valid=!0}remove(){this.destroy()}destroy(){var e;null===(e=this.snappingSource)||void 0===e||e.destroy()}};function L(e,t){return null==e?new F.A({where:t}):e.where?new F.A({where:(0,b.m)(e.where,t)}):new F.A({where:t})}(0,n._)([(0,c.MZ)({constructOnly:!0})],E.prototype,"layer",void 0),(0,n._)([(0,c.MZ)({constructOnly:!0})],E.prototype,"snappingSource",void 0),(0,n._)([(0,c.MZ)({constructOnly:!0})],E.prototype,"view",void 0),(0,n._)([(0,c.MZ)({value:!1})],E.prototype,"attributeRulesEnabled",null),(0,n._)([(0,c.MZ)()],E.prototype,"layerView",null),(0,n._)([(0,c.MZ)()],E.prototype,"rulesTable",void 0),(0,n._)([(0,c.MZ)()],E.prototype,"valid",null),(0,n._)([(0,c.MZ)()],E.prototype,"subtypeFilter",null),(0,n._)([(0,c.MZ)()],E.prototype,"floorFilter",null),(0,n._)([(0,c.MZ)()],E.prototype,"_valid",void 0),E=(0,n._)([(0,v.$)("esri.views.interactive.snapping.FeatureSnappingSourceInfo")],E);var C=r(99791),A=r(80794),T=r(9876),Z=r(61751),z=r(78228),H=r(17072);let G=class extends i.A{get updating(){return this._snappingSources.some((e=>{var t;return null==(null===e||void 0===e?void 0:e.valid)||!0===e.valid&&!0===(null===(t=e.snappingSource)||void 0===t?void 0:t.updating)}))||this._updatingHandles.updating}constructor(e){super(e),this.options=null,this._domain=C.n.FEATURE,this._updatingHandles=new S.U,this._sourceModules={featureService:{module:null,loader:null},featureCollection:{module:null,loader:null},graphics:{module:null,loader:null},notes:{module:null,loader:null},scene:{module:null,loader:null}}}initialize(){const e=(0,u.lZ)((()=>{var e;return null===(e=this.options)||void 0===e?void 0:e._effectiveFeatureSources}),((e,t)=>this._createSourceInfo(e,t)));this._snappingSources=e,this.addHandles([(0,a.DQ)(e),(0,u.wB)((()=>{var e;return{rulesEnabled:!(null===(e=this.options)||void 0===e||!e.attributeRulesEnabled),sources:this._snappingSources.filter(l.Ru)}}),(e=>{let{rulesEnabled:t,sources:r}=e;for(const n of r)n.attributeRulesEnabled=t}),u.OH)])}destroy(){this._set("options",null),this._updatingHandles.destroy()}async fetchCandidates(e,t,r,n){if(!(t&this._domain&&null!=this.options&&this.options.effectiveFeatureEnabled))return[];const i=[],l=this._computeScreenSizeDistanceParameters(e,r);for(const s of this._snappingSources){var a,o;if(null===s||void 0===s||!s.valid||null===(a=s.snappingSource)||void 0===a||null===(a=a.layerSource)||void 0===a||!a.enabled||null!==(o=s.layerView)&&void 0!==o&&o.suspended)continue;const t=s.getFetchCandidatesParameters(e,r,l);for(const e of t)i.push(s.snappingSource.fetchCandidates(e,n).then((e=>e.filter((e=>!this._candidateIsExcluded(s.snappingSource,e,r.excludeFeature))))))}const u=(await(0,s.nA)(i)).flat();return this._addRightAngleCandidates(u,e,l,r),(0,s.Te)(n),(0,x.xX)(e,u),u}_addRightAngleCandidates(e,t,r,n){var i,l,a,o;const s=null!=n.vertexHandle?null===(i=n.vertexHandle.rightEdge)||void 0===i||null===(i=i.rightVertex)||void 0===i?void 0:i.pos:null!=n.editGeometryOperations&&"polygon"===n.editGeometryOperations.data.type?null===(l=n.editGeometryOperations.data.components[0])||void 0===l||null===(l=l.getFirstVertex())||void 0===l?void 0:l.pos:null,u=null!=n.vertexHandle?null===(a=n.vertexHandle.leftEdge)||void 0===a||null===(a=a.leftVertex)||void 0===a?void 0:a.pos:null!=n.editGeometryOperations?null===(o=n.editGeometryOperations.data.components[0])||void 0===o||null===(o=o.getLastVertex())||void 0===o?void 0:o.pos:null,{view:d}=this,c=(0,m.Lp)(s,d,n),p=(0,m.Lp)(u,d,n),v=e.length;for(let h=0;h<v;h++)this._addRightAngleCandidate(e[h],p,t,r,e),this._addRightAngleCandidate(e[h],c,t,r,e)}_addRightAngleCandidate(e,t,r,n,i){if(null==t||!function(e){return(e instanceof T.z||e instanceof A.X)&&!function(e){let{constraint:{start:t,end:r}}=e;const n=(0,y.s)(t,r),i=(0,h.hG)((0,m.Xz)(t),(0,m.Xz)(r));return n<(0,g.FD)()||i/n<j}(e)}(e))return;const l=e.constraint.closestTo(t),a=(l[0]-r[0])/n.x,o=(l[1]-r[1])/n.y,{start:s,end:u}=e.constraint;if(a*a+o*o<=1){const r=(0,h.hG)((0,m.Xz)(l),(0,m.Xz)(s))>(0,h.hG)((0,m.Xz)(l),(0,m.Xz)(u))?s:u,n=new z.HJ({targetPoint:(0,m.de)(l),otherVertex:t,otherVertexType:z.pn.NEXT,previousVertex:r,constraint:new _.FX(t,l),objectId:e.objectId,isDraped:e.isDraped,domain:C.n.FEATURE});i.push(n)}}_computeScreenSizeDistanceParameters(e,t){let r=null!=this.options?this.options.distance*("touch"===t.pointer?this.options.touchSensitivityMultiplier:1):0;return null==this.view?{x:r,y:r,z:r,distance:r}:"2d"===this.view.type?(r*=this.view.resolution,{x:r,y:r,z:r,distance:r}):this._computeScreenSizeDistanceParameters3D(e,r,this.view,t)}_computeScreenSizeDistanceParameters3D(e,t,r,n){const{spatialReference:i}=n;r.renderCoordsHelper.toRenderCoords(e,i,P);const l=r.state.camera.computeScreenPixelSizeAt(P),a=l*r.renderCoordsHelper.unitInMeters,o=a/(0,d.GA)(i),s=a/(0,d.G9)(i),u=t*o,c=t*s,p=(0,H.j)(e,i,w.qt,r),v=p?O(p,e,o,0,0,r,n):0,h=p?O(p,e,0,o,0,r,n):0,y=p?O(p,e,0,0,s,r,n):0;return{x:0===v?0:u/v,y:0===h?0:u/h,z:0===y?0:c/y,distance:l*t}}_candidateIsExcluded(e,t,r){if(null==r)return!1;const n=this._getCandidateObjectId(t);if(null==n)return!1;const i=e.layerSource.layer;return"graphics"===i.type?r.uid===n:r.sourceLayer===i&&!(!r.attributes||!("objectIdField"in i))&&r.attributes[i.objectIdField]===n}_getCandidateObjectId(e){return e instanceof Z.w?e.objectId:null}async _createSourceInfo(e,t){const r=e.layer;r.loaded||(await r.load(),(0,s.Te)(t));const{view:n}=this,i=await this._createFeatureSnappingSourceType(e);return(0,s.Te)(t),new E(null==i?{}:{snappingSource:i,view:n,layer:r})}async _createFeatureSnappingSourceType(e){switch(e.layer.type){case"feature":case"geojson":case"csv":case"oriented-imagery":case"subtype-group":case"wfs":return this._createFeatureSnappingSourceFeatureLayer(e);case"graphics":return this._createFeatureSnappingSourceGraphicsLayer(e);case"map-notes":return this._createFeatureSnappingSourceMapNotesLayer(e);case"scene":case"building-scene":return this._createFeatureSnappingSourceSceneLayer(e)}return null}async _createFeatureSnappingSourceSceneLayer(e){const{view:t}=this;return null==t||"3d"!==t.type?null:new((await this._getSourceModule("scene")).SceneLayerSnappingSource)({layerSource:e,view:t})}async _createFeatureSnappingSourceFeatureLayer(e){var t;switch(null===(t=e.layer.source)||void 0===t?void 0:t.type){case"feature-layer":case"oriented-imagery":return new((await this._getSourceModule("featureService")).FeatureServiceSnappingSource)({spatialReference:this.spatialReference,view:this.view,layerSource:e});case"memory":case"csv":case"geojson":case"wfs":return"mesh"===e.layer.geometryType?null:new((await this._getSourceModule("featureCollection")).FeatureCollectionSnappingSource)({layerSource:e,view:this.view})}return null}async _createFeatureSnappingSourceGraphicsLayer(e){return new((await this._getSourceModule("graphics")).GraphicsSnappingSource)({getGraphicsLayers:()=>[e.layer],spatialReference:this.spatialReference,view:this.view,layerSource:e})}async _createFeatureSnappingSourceMapNotesLayer(e){return new((await this._getSourceModule("notes")).GraphicsSnappingSource)({getGraphicsLayers:()=>{var t,r;return null!==(t=null===(r=e.layer.sublayers)||void 0===r?void 0:r.toArray())&&void 0!==t?t:[]},spatialReference:this.spatialReference,view:this.view,layerSource:e})}async _getSourceModule(e){const t=this._sourceModules[e];if(null==t.loader){const t=this._loadSourceModule(e),r={module:null,loader:t};this._sourceModules[e]=r;const n=await t,i={module:n,loader:t};return this._sourceModules[e]=i,n}return null==t.module?t.loader:t.module}_loadSourceModule(e){const t=this._updatingHandles;switch(e){case"featureService":return t.addPromise(r.e(5376).then(r.bind(r,85376)));case"featureCollection":return t.addPromise(r.e(7567).then(r.bind(r,77567)));case"graphics":case"notes":return t.addPromise(Promise.all([r.e(3620),r.e(8683),r.e(2003),r.e(6571),r.e(4439),r.e(9546)]).then(r.bind(r,99546)));case"scene":return t.addPromise(Promise.all([r.e(4527),r.e(3537)]).then(r.bind(r,13537)))}}get test(){}};function O(e,t,r,n,i,l,a){let{spatialReference:o}=a;const s=(0,y.c)(V,t);s[0]+=r,s[1]+=n,s[2]+=i;const u=(0,H.j)(s,o,w.qt,l);return u?(0,x.Mo)(u,e):1/0}(0,n._)([(0,c.MZ)({constructOnly:!0})],G.prototype,"spatialReference",void 0),(0,n._)([(0,c.MZ)({constructOnly:!0})],G.prototype,"view",void 0),(0,n._)([(0,c.MZ)()],G.prototype,"options",void 0),(0,n._)([(0,c.MZ)({readOnly:!0})],G.prototype,"updating",null),(0,n._)([(0,c.MZ)()],G.prototype,"_snappingSources",void 0),G=(0,n._)([(0,v.$)("esri.views.interactive.snapping.FeatureSnappingEngine")],G);const P=(0,f.vt)(),V=(0,f.vt)(),j=1e-4}}]);
//# sourceMappingURL=2843.23b9c21f.chunk.js.map