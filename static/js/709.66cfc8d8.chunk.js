"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[709],{50709:(t,e,s)=>{s.r(e),s.d(e,{default:()=>U});var r=s(35143),o=(s(35238),s(16868)),i=(s(63844),s(14873),s(47662),s(72690),s(17122),s(71832),s(5766),s(35039),s(86616),s(31382)),n=s(77717),p=s(50346),a=s(90534),u=s(46053),l=s(81806),d=s(76460),c=(s(47249),s(85842)),y=s(31608),h=s(25515),m=s(50076),f=s(49304),g=s(16783),v=s(40296),S=s(77725),_=s(76797),F=s(65215);let b=class extends f.A{constructor(){super(...arguments),this.type="geojson",this.refresh=(0,p.sg)((async t=>{await this.load();const{extent:e,timeExtent:s}=await this._connection.invoke("refresh",t);return this.sourceJSON.extent=e,s&&(this.sourceJSON.timeInfo.timeExtent=[s.start,s.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(t){const e=null!=t?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){var t;null!==(t=this._connection)&&void 0!==t&&t.close(),this._connection=null}applyEdits(t){return this.load().then((()=>this._applyEdits(t)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(e).then((()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e))).then((t=>S.A.fromJSON(t)))}queryFeaturesJSON(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(e).then((()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e)))}queryFeatureCount(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(e).then((()=>this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)))}queryObjectIds(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(e).then((()=>this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)))}queryExtent(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(e).then((()=>this._connection.invoke("queryExtent",t?t.toJSON():null,e))).then((t=>({count:t.count,extent:_.A.fromJSON(t.extent)})))}querySnapping(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(e).then((()=>this._connection.invoke("querySnapping",t,e)))}_applyEdits(t){if(!this._connection)throw new m.A("geojson-layer-source:edit-failure","Memory source not loaded");const e=this.layer.objectIdField,s=[],r=[],o=[];if(t.addFeatures)for(const i of t.addFeatures)s.push(this._serializeFeature(i));if(t.deleteFeatures)for(const i of t.deleteFeatures)"objectId"in i&&null!=i.objectId?r.push(i.objectId):"attributes"in i&&null!=i.attributes[e]&&r.push(i.attributes[e]);if(t.updateFeatures)for(const i of t.updateFeatures)o.push(this._serializeFeature(i));return this._connection.invoke("applyEdits",{adds:s,updates:o,deletes:r}).then((t=>{let{extent:e,timeExtent:s,featureEditResults:r}=t;return this.sourceJSON.extent=e,s&&(this.sourceJSON.timeInfo.timeExtent=[s.start,s.end]),this._createEditsResult(r)}))}_createEditsResult(t){return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(t){const e=!0===t.success?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new m.A("geojson-layer-source:edit-failure",e.description,{code:e.code}):null}}_serializeFeature(t){const{attributes:e}=t,s=this._geometryForSerialization(t);return s?{geometry:s.toJSON(),attributes:e}:{attributes:e}}_geometryForSerialization(t){const{geometry:e}=t;return null==e?null:"mesh"===e.type||"extent"===e.type?F.A.fromExtent(e.extent):e}async _startWorker(t){var e;this._connection=await(0,g.ho)("GeoJSONSourceWorker",{strategy:(0,l.A)("feature-layers-workers")?"dedicated":"local",signal:t,registryTarget:this});const{fields:s,spatialReference:r,hasZ:o,geometryType:i,objectIdField:n,url:p,timeInfo:a,customParameters:u}=this.layer,c="defaults"===this.layer.originOf("spatialReference"),h={url:p,customParameters:u,fields:s&&s.map((t=>t.toJSON())),geometryType:y.g.toJSON(i),hasZ:o,objectIdField:n,timeInfo:a?a.toJSON():null,spatialReference:c?null:r&&r.toJSON()},m=await this._connection.invoke("load",h,{signal:t});for(const l of m.warnings){var f;d.A.getLogger(this.layer).warn("#load()","".concat(l.message," (title: '").concat(this.layer.title||"no title","', id: '").concat(null!==(f=this.layer.id)&&void 0!==f?f:"no id","')"),{warning:l})}m.featureErrors.length&&d.A.getLogger(this.layer).warn("#load()","Encountered ".concat(m.featureErrors.length," validation errors while loading features. (title: '").concat(this.layer.title||"no title","', id: '").concat(null!==(e=this.layer.id)&&void 0!==e?e:"no id","')"),{errors:m.featureErrors}),this.sourceJSON=m.layerDefinition,this.capabilities=(0,v.f)(this.sourceJSON.hasZ,!0)}};(0,r._)([(0,u.MZ)()],b.prototype,"capabilities",void 0),(0,r._)([(0,u.MZ)()],b.prototype,"type",void 0),(0,r._)([(0,u.MZ)({constructOnly:!0})],b.prototype,"layer",void 0),(0,r._)([(0,u.MZ)()],b.prototype,"sourceJSON",void 0),b=(0,r._)([(0,c.$)("esri.layers.graphics.sources.GeoJSONSource")],b);var x=s(65624),O=s(31362),A=s(74440),M=s(52908),E=s(11270),R=s(37534),I=s(94729),Z=s(21617),C=s(5682),P=s(78817),w=s(95363),T=s(15427),q=s(44135),j=s(76350),J=s(53430),N=s(71401),Q=s(27937),D=s(68295),B=s(30973),k=s(67478),z=s(13312);const G=(0,j.p)();let H=class extends((0,R.f)((0,O.d)((0,M.J)((0,A.F)((0,x.dM)((0,P.e)((0,C.j)((0,Z.J)((0,E.q)((0,I.A)((0,n.P)(h.A)))))))))))){constructor(t){super(t),this.attributeTableTemplate=null,this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new b({layer:this}),this.spatialReference=z.A.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson"}destroy(){var t;null===(t=this.source)||void 0===t||t.destroy()}load(t){const e=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},t).catch(p.QP).then((()=>this.source.load(t))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),(0,J.yp)(this.renderer,this.fieldsIndex),(0,J.sv)(this.timeInfo,this.fieldsIndex)}));return this.addResolvingPromise(e),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?(0,a.An)(this.url):null}set renderer(t){(0,J.yp)(t,this.fieldsIndex),this._set("renderer",t)}set url(t){if(!t)return void this._set("url",t);const e=(0,a.An)(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async applyEdits(t,e){const{applyEdits:r}=await s.e(4610).then(s.bind(s,54610));await this.load();const o=await r(this,this.source,t,e);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),o}on(t,e){return super.on(t,e)}createPopupTemplate(t){return(0,B.tn)(this,t)}createQuery(){var t;const e=new D.A,s=null===(t=this.capabilities)||void 0===t?void 0:t.data;e.returnGeometry=!0,s&&s.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:o}=this;return e.timeExtent=null!=r&&null!=o?o.offset(-r.value,r.unit):o||null,e}getFieldDomain(t,e){var s;return null===(s=this.getField(t))||void 0===s?void 0:s.domain}getField(t){return this.fieldsIndex.get(t)}queryFeatures(t,e){return this.load().then((()=>this.source.queryFeatures(D.A.from(t)||this.createQuery(),e))).then((t=>{if(null!==t&&void 0!==t&&t.features)for(const e of t.features)e.layer=e.sourceLayer=this;return t}))}queryObjectIds(t,e){return this.load().then((()=>this.source.queryObjectIds(D.A.from(t)||this.createQuery(),e)))}queryFeatureCount(t,e){return this.load().then((()=>this.source.queryFeatureCount(D.A.from(t)||this.createQuery(),e)))}queryExtent(t,e){return this.load().then((()=>this.source.queryExtent(D.A.from(t)||this.createQuery(),e)))}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return null!=e&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}};(0,r._)([(0,u.MZ)(w.zQ)],H.prototype,"attributeTableTemplate",void 0),(0,r._)([(0,u.MZ)({readOnly:!0,json:{read:!1,write:!1}})],H.prototype,"capabilities",null),(0,r._)([(0,u.MZ)({type:String})],H.prototype,"copyright",void 0),(0,r._)([(0,u.MZ)({readOnly:!0})],H.prototype,"createQueryVersion",null),(0,r._)([(0,u.MZ)((0,k.P6)("dateFieldsTimeReference"))],H.prototype,"dateFieldsTimeZone",void 0),(0,r._)([(0,u.MZ)({readOnly:!0})],H.prototype,"defaultPopupTemplate",null),(0,r._)([(0,u.MZ)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],H.prototype,"definitionExpression",void 0),(0,r._)([(0,u.MZ)({type:String})],H.prototype,"displayField",void 0),(0,r._)([(0,u.MZ)({type:Boolean})],H.prototype,"editingEnabled",void 0),(0,r._)([(0,u.MZ)(w.Yj)],H.prototype,"elevationInfo",void 0),(0,r._)([(0,u.MZ)({type:[q.A],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],H.prototype,"fields",void 0),(0,r._)([(0,u.MZ)(G.fieldsIndex)],H.prototype,"fieldsIndex",void 0),(0,r._)([(0,u.MZ)({type:_.A,json:{name:"extent"}})],H.prototype,"fullExtent",void 0),(0,r._)([(0,u.MZ)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:y.g.read}}})],H.prototype,"geometryType",void 0),(0,r._)([(0,u.MZ)({type:Boolean})],H.prototype,"hasZ",void 0),(0,r._)([(0,u.MZ)(w.id)],H.prototype,"id",void 0),(0,r._)([(0,u.MZ)({type:Boolean,readOnly:!0})],H.prototype,"isTable",null),(0,r._)([(0,u.MZ)(w.kF)],H.prototype,"labelsVisible",void 0),(0,r._)([(0,u.MZ)({type:[N.A],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Q.w},write:!0}})],H.prototype,"labelingInfo",void 0),(0,r._)([(0,u.MZ)(w.fV)],H.prototype,"legendEnabled",void 0),(0,r._)([(0,u.MZ)({type:["show","hide"]})],H.prototype,"listMode",void 0),(0,r._)([(0,u.MZ)({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],H.prototype,"objectIdField",void 0),(0,r._)([(0,u.MZ)(w.ke)],H.prototype,"opacity",void 0),(0,r._)([(0,u.MZ)({type:["GeoJSON"]})],H.prototype,"operationalLayerType",void 0),(0,r._)([(0,u.MZ)(G.outFields)],H.prototype,"outFields",void 0),(0,r._)([(0,u.MZ)({readOnly:!0})],H.prototype,"parsedUrl",null),(0,r._)([(0,u.MZ)(w.M6)],H.prototype,"popupEnabled",void 0),(0,r._)([(0,u.MZ)({type:o.A,json:{name:"popupInfo",write:!0}})],H.prototype,"popupTemplate",void 0),(0,r._)([(0,u.MZ)({types:i.H,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:i.X}}}})],H.prototype,"renderer",null),(0,r._)([(0,u.MZ)(w.PY)],H.prototype,"screenSizePerspectiveEnabled",void 0),(0,r._)([(0,u.MZ)({readOnly:!0})],H.prototype,"source",void 0),(0,r._)([(0,u.MZ)({type:z.A})],H.prototype,"spatialReference",void 0),(0,r._)([(0,u.MZ)({type:[T.A]})],H.prototype,"templates",void 0),(0,r._)([(0,u.MZ)()],H.prototype,"title",void 0),(0,r._)([(0,u.MZ)({json:{read:!1},readOnly:!0})],H.prototype,"type",void 0),(0,r._)([(0,u.MZ)(w.OZ)],H.prototype,"url",null),H=(0,r._)([(0,c.$)("esri.layers.GeoJSONLayer")],H);const U=H},8298:(t,e,s)=>{s.d(e,{F:()=>r});const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!0,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!0,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},40296:(t,e,s)=>{s.d(e,{F0:()=>a,Vx:()=>d,e2:()=>y,f:()=>h});var r=s(81806),o=s(53084),i=s(8298),n=s(16981),p=s(44460);function a(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?p.Cb:"esriGeometryPolyline"===t?p.yM:p.WR}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function d(t,e){if((0,r.A)("esri-csp-restrictions"))return()=>({[e]:null,...t});try{let s="this".concat(c(e)," = null;");for(const e in t)s+="this".concat(c(e)," = ").concat(JSON.stringify(t[e]),";");const r=new Function("\n      return class AttributesClass$".concat(l++," {\n        constructor() {\n          ").concat(s,";\n        }\n      }\n    "))();return()=>new r}catch(s){return()=>({[e]:null,...t})}}function c(t){return u.test(t)?".".concat(t):'["'.concat(t,'"]')}function y(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,o.o8)(t)}}]}function h(t,e){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:i.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:n.$,editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},16981:(t,e,s)=>{s.d(e,{$:()=>r,P:()=>o});const r={supportsDate:!1,supportsFixedInterval:!1,supportsAutoInterval:!1,supportsFixedBoundaries:!1,supportedStatistics:void 0},o={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryBins:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:r,query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);
//# sourceMappingURL=709.66cfc8d8.chunk.js.map