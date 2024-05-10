"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[3576],{3576:(e,t,r)=>{r.r(t),r.d(t,{_fetchWrapper:()=>Ae,executeApplyEdits:()=>ge,executeQuery:()=>we,executeQueryStreaming:()=>me,executeSearch:()=>ve,executeSearchStreaming:()=>Ee,fetchKnowledgeGraph:()=>Te,kgRestServices:()=>_e,refreshDataModel:()=>Me,refreshServiceDefinition:()=>Ie});r(35238);var n=r(55171),o=r(3825),i=r(50076),a=r(76460),s=r(35143),l=r(91967),d=r(46053),p=(r(81806),r(47249),r(85842));let u=class extends l.A{constructor(e){super(e),this.resultRows=[]}};(0,s._)([(0,d.MZ)()],u.prototype,"resultRows",void 0),u=(0,s._)([(0,p.$)("esri.rest.knowledgeGraph.GraphQueryResult")],u);const c=u;let y=class extends l.A{constructor(e){super(e),this.resultRowsStream=new ReadableStream}};(0,s._)([(0,d.MZ)()],y.prototype,"resultRowsStream",void 0),y=(0,s._)([(0,p.$)("esri.rest.knowledgeGraph.GraphQueryResult")],y);const h=y;var f=r(42553),_=r(13312),g=r(46801),w=r(84252);let m=class extends f.oY{constructor(e){super(e),this.timestamp=null,this.spatialReference=null,this.strict=null,this.objectIdField=null,this.globalIdField=null,this.arcgisManaged=null,this.identifierInfo=null,this.searchIndexes=null,this.entityTypes=null,this.relationshipTypes=null}};(0,s._)([(0,d.MZ)({type:Date,json:{type:Number,write:{writer:(e,t)=>{t.timestamp=null===e||void 0===e?void 0:e.getTime()}}}})],m.prototype,"timestamp",void 0),(0,s._)([(0,d.MZ)({type:_.A,json:{write:!0}})],m.prototype,"spatialReference",void 0),(0,s._)([(0,d.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"strict",void 0),(0,s._)([(0,d.MZ)({type:String,json:{write:!0}})],m.prototype,"objectIdField",void 0),(0,s._)([(0,d.MZ)({type:String,json:{write:!0}})],m.prototype,"globalIdField",void 0),(0,s._)([(0,d.MZ)()],m.prototype,"arcgisManaged",void 0),(0,s._)([(0,d.MZ)()],m.prototype,"identifierInfo",void 0),(0,s._)([(0,d.MZ)()],m.prototype,"searchIndexes",void 0),(0,s._)([(0,d.MZ)({type:[g.A],json:{write:!0}})],m.prototype,"entityTypes",void 0),(0,s._)([(0,d.MZ)({type:[w.A],json:{write:!0}})],m.prototype,"relationshipTypes",void 0),m=(0,s._)([(0,p.$)("esri.rest.knowledgeGraph.DataModel")],m);const v=m;let E=class extends f.oY{constructor(e){super(e),this.capabilities=[],this.supportsSearch=!1,this.supportedQueryFormats=[],this.allowGeometryUpdates=!1,this.searchMaxRecordCount=null,this.serviceCapabilities=null,this.maxRecordCount=null,this.description="",this.copyrightText="",this.units="",this.spatialReference=null,this.currentVersion=null,this.dateFieldsTimeReference=null,this.serviceItemId="",this.supportsDocuments=!1,this.dataEditingNotSupported=!1,this.schemaEditingNotSupported=!1}};(0,s._)([(0,d.MZ)({type:[String],json:{write:!0}})],E.prototype,"capabilities",void 0),(0,s._)([(0,d.MZ)({type:Boolean,json:{write:!0}})],E.prototype,"supportsSearch",void 0),(0,s._)([(0,d.MZ)({type:[String],json:{write:!0}})],E.prototype,"supportedQueryFormats",void 0),(0,s._)([(0,d.MZ)({type:Boolean,json:{write:!0}})],E.prototype,"allowGeometryUpdates",void 0),(0,s._)([(0,d.MZ)({type:Number,json:{write:!0}})],E.prototype,"searchMaxRecordCount",void 0),(0,s._)([(0,d.MZ)({type:Object,json:{write:!0}})],E.prototype,"serviceCapabilities",void 0),(0,s._)([(0,d.MZ)({type:Number,json:{write:!0}})],E.prototype,"maxRecordCount",void 0),(0,s._)([(0,d.MZ)({type:String,json:{write:!0}})],E.prototype,"description",void 0),(0,s._)([(0,d.MZ)({type:String,json:{write:!0}})],E.prototype,"copyrightText",void 0),(0,s._)([(0,d.MZ)({type:String,json:{write:!0}})],E.prototype,"units",void 0),(0,s._)([(0,d.MZ)({type:Object,json:{write:!0}})],E.prototype,"spatialReference",void 0),(0,s._)([(0,d.MZ)({type:Number,json:{write:!0}})],E.prototype,"currentVersion",void 0),(0,s._)([(0,d.MZ)({type:Object,json:{write:!0}})],E.prototype,"dateFieldsTimeReference",void 0),(0,s._)([(0,d.MZ)({type:String,json:{write:!0}})],E.prototype,"serviceItemId",void 0),(0,s._)([(0,d.MZ)({type:Boolean,json:{write:!0}})],E.prototype,"supportsDocuments",void 0),(0,s._)([(0,d.MZ)({type:Boolean,json:{write:!0}})],E.prototype,"dataEditingNotSupported",void 0),(0,s._)([(0,d.MZ)({type:Boolean,json:{write:!0}})],E.prototype,"schemaEditingNotSupported",void 0),E=(0,s._)([(0,p.$)("esri.rest.knowledgeGraph.ServiceDefinition")],E);const T=E;let M=class extends f.oY{constructor(e){super(e),this.dataModel=null,this.serviceDefinition=null}};(0,s._)([(0,d.MZ)({type:String,json:{write:!0}})],M.prototype,"url",void 0),(0,s._)([(0,d.MZ)({type:v,json:{write:!0}})],M.prototype,"dataModel",void 0),(0,s._)([(0,d.MZ)({type:T,json:{write:!0}})],M.prototype,"serviceDefinition",void 0),M=(0,s._)([(0,p.$)("esri.rest.knowledgeGraph.KnowledgeGraph")],M);const I=M;var A=r(57502),G=r(66388),R=r(13904),b=r(65215),S=r(23701),x=r(89189);function O(e,t){const r=new t.ArrayValue;return r.deleteLater(),e.forEach((e=>{r.add_value(j(e,t))})),r}function P(e,t){const r=new t.ObjectValue;r.deleteLater();for(const[n,o]of Object.entries(e))r.set_key_value(n,j(o,t));return r}function k(e,t){if(e instanceof G.A)return function(e,t){const r=new t.GeometryValue;r.deleteLater(),r.geometry_type=r.geometry_type=t.esriGeometryType.esriGeometryMultipoint,r.has_z=e.hasZ,r.has_m=e.hasM;const n=[],o=[];o[0]=e.points.length;let i=0;return e.points.forEach((e=>{e.forEach((e=>{n[i]=e,i++}))})),r.coords=new Float64Array(n),r.lengths=new Uint32Array(o),r}(e,t);if(e instanceof R.A)return function(e,t){const r=new t.GeometryValue;r.deleteLater(),r.geometry_type=t.esriGeometryType.esriGeometryPoint,r.has_z=e.hasZ,r.has_m=e.hasM;const n=[],o=[];o[0]=1,n[0]=e.x,n[1]=e.y;let i=2;return e.hasZ&&(n[i]=e.z,i++),e.hasM&&(n[i]=e.m,i++),r.coords=new Float64Array(n),r.lengths=new Uint32Array(o),r}(e,t);if(e instanceof S.A||e instanceof b.A)return function(e,t){const r=new t.GeometryValue;r.deleteLater(),r.has_z=e.hasZ,r.has_m=e.hasM;const n=[],o=[];let i=[];e instanceof S.A?(r.geometry_type=t.esriGeometryType.esriGeometryPolyline,i=e.paths):e instanceof b.A&&(r.geometry_type=t.esriGeometryType.esriGeometryPolygon,i=e.rings);let a=0,s=0;return i.forEach((e=>{let t=0;e.forEach((e=>{t++,e.forEach((e=>{n[s]=e,s++}))})),o[a]=t,a++})),r.coords=new Float64Array(n),r.lengths=new Uint32Array(o),r}(e,t);throw new i.A("knowledge-graph:unsupported-geometry","Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge",{geometry:e})}function j(e,t){if(null==e)return"";if("object"!=typeof e)return e;if(e instanceof Date)return e;if(e instanceof x.A)return k(e,t);if(Array.isArray(e)){const r=new t.ArrayValue;return r.deleteLater(),e.forEach((e=>{r.add_value(j(e,t))})),r}return P(e,t)}var F=r(9505),D=r(23908);function Z(e,t){if(!e.typeName)throw new i.A("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits");if(e instanceof F.A){const r=new t.EntityValue;r.deleteLater(),r.type_name=e.typeName;for(const[n,o]of Object.entries(e.properties))r.set_key_value(n,N(o,t));return e.id&&r.set_id(e.id),r}if(e instanceof D.A){const r=new t.RelationshipValue;r.deleteLater(),r.type_name=e.typeName;for(const[n,o]of Object.entries(e.properties))r.set_key_value(n,N(o,t));return e.id&&r.set_id(e.id),e.originId&&e.destinationId&&r.set_related_entity_ids(e.originId,e.destinationId),r}throw new i.A("knowledge-graph:applyEdits-encoding-failure","Could not determine the type of a named graph object passed to the encoder")}function N(e,t){return null==e?"":"object"!=typeof e||e instanceof Date?e:e instanceof x.A?k(e,t):""}var z=r(30578),L=(r(25623),r(13909));let C=class extends l.A{constructor(e){super(e),this.name=null,this.supportedCategory=null,this.analyzers=[],this.searchProperties=new Map}};(0,s._)([(0,d.MZ)()],C.prototype,"name",void 0),(0,s._)([(0,d.MZ)()],C.prototype,"supportedCategory",void 0),(0,s._)([(0,d.MZ)()],C.prototype,"analyzers",void 0),(0,s._)([(0,d.MZ)()],C.prototype,"searchProperties",void 0),C=(0,s._)([(0,p.$)("esri.rest.knowledgeGraph.SearchIndex")],C);const Y=C;var q=r(31830);function U(e){return e.deleteLater(),new g.A(B(e))}function Q(e){return e.deleteLater(),new z.A({name:e.name,unique:e.unique,ascending:e.ascending,description:e.description,fieldNames:K(e.fields)})}function B(e){return{name:e.name,alias:e.alias,role:q.Eq[e.role.value]?q.Eq[e.role.value]:null,strict:e.strict,properties:$(e.properties),fieldIndexes:J(e.field_indexes)}}function V(e){return e.deleteLater(),new L.A({alias:e.alias,name:e.name,fieldType:q.r5[e.field_type.value]?q.r5[e.field_type.value]:null,geometryType:q.bV[e.geometry_type.value]?q.bV[e.geometry_type.value]:null,hasM:e.has_m,hasZ:e.has_z,nullable:e.nullable,editable:e.editable,required:e.required,defaultVisibility:e.default_visibility,systemMaintained:e.system_maintained,role:q.ti[e.role.value],defaultValue:e.default_value})}function W(e){e.deleteLater();const t=B(e),r=[];for(let n=0;n<e.end_points.size();n++){const t=e.end_points.get(n);r.push({originEntityType:t.origin_entity_type,destinationEntityType:t.dest_entity_type})}return e.end_points.delete(),new w.A(Object.assign({endPoints:r},t))}function H(e){const t=[];for(let r=0;r<e.size();r++)t.push(U(e.get(r)));return e.delete(),t}function K(e){const t=[];for(let r=0;r<e.size();r++)t.push(e.get(r));return e.delete(),t}function $(e){const t=[];for(let r=0;r<e.size();r++)t.push(V(e.get(r)));return e.delete(),t}function J(e){const t=[];for(let r=0;r<e.size();r++)t.push(Q(e.get(r)));return e.delete(),t}function X(e){const t=[];for(let r=0;r<e.size();r++)t.push(W(e.get(r)));return e.delete(),t}function ee(e){const t=[];for(let r=0;r<e.size();r++){const r=new Y,n=e.get(0);r.name=n.name,r.supportedCategory=q.nP[n.supported_category.value];const o=n.analyzers.size();for(let e=0;e<o;e++)r.analyzers.push({name:n.analyzers.get(e).name});n.analyzers.delete();for(let e=0;e<n.search_properties.keys().size();e++){const t=n.search_properties.keys().get(e),o=n.search_properties.get(t),i=[];for(let e=0;e<o.property_names.size();e++)i.push(o.property_names.get(e));r.searchProperties.set(t,{propertyNames:i})}t.push(r)}return e.delete(),t}r(12831);var te,re,ne,oe=r(38156),ie=r(68325);function ae(e,t){const r={spatialReference:t},n=se(e,r),o=e.lengths,a=e.coords;let s="";if(e.geometry_type.value===te.ESRI_GEOMETRY_POLYGON)s="rings";else{if(e.geometry_type.value!==te.ESRI_GEOMETRY_POLYLINE)throw new i.A("KnowledgeGraph:illegal-geometry-type","Illegal Geometry type for multipath conversion");s="paths"}r[s]=[];let l=0;return o.forEach((e=>{const t=[];for(let r=0;r<e;r++){const e=[];for(let t=0;t<n;t++)e[t]=a[l],l++;t.push(e)}r[s].push(t)})),r}function se(e,t){let r=2;return e.has_z?(t.hasZ=e.has_z,r++):t.hasZ=!1,e.has_m?(t.hasM=e.has_m,r++):t.hasM=!1,r}!function(e){e[e.ESRI_GEOMETRY_NULL=0]="ESRI_GEOMETRY_NULL",e[e.ESRI_GEOMETRY_POINT=1]="ESRI_GEOMETRY_POINT",e[e.ESRI_GEOMETRY_MULTIPOINT=2]="ESRI_GEOMETRY_MULTIPOINT",e[e.ESRI_GEOMETRY_POLYLINE=3]="ESRI_GEOMETRY_POLYLINE",e[e.ESRI_GEOMETRY_POLYGON=4]="ESRI_GEOMETRY_POLYGON",e[e.ESRI_GEOMETRY_ENVELOPE=5]="ESRI_GEOMETRY_ENVELOPE",e[e.ESRI_GEOMETRY_ANY=6]="ESRI_GEOMETRY_ANY",e[e.ESRI_GEOMETRY_MULTI_PATCH=7]="ESRI_GEOMETRY_MULTI_PATCH"}(te||(te={})),function(e){e[e.OBJECT=0]="OBJECT",e[e.ENTITY=1]="ENTITY",e[e.RELATIONSHIP=2]="RELATIONSHIP",e[e.PATH=3]="PATH",e[e.ARRAY=4]="ARRAY"}(re||(re={})),function(e){e[e.view=0]="view",e[e.edit=1]="edit"}(ne||(ne={}));const le=()=>a.A.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors"),de={decodedWasmObjToQueryResponseObj:(e,t,r)=>{if(null==e)return null;if("object"!=typeof e)return e;if("getDate"in e)return e;if("geometry_type"in e)switch(e.geometry_type.value){case null:return null;case te.ESRI_GEOMETRY_POINT:return function(e,t){const r={spatialReference:t};let n=2;se(e,r);const o=e.coords;return r.x=o[0],r.y=o[1],e.has_z&&(r.z=o[n],n++),e.has_m&&(r.m=o[n]),new R.A(r)}(e,r);case te.ESRI_GEOMETRY_MULTIPOINT:return function(e,t){const r={spatialReference:t},n=se(e,r),o=e.lengths,i=e.coords,a=o[0];r.points=[];let s=0;for(let l=0;l<a;l++){const e=[];for(let t=0;t<n;t++)e[t]=i[s],s++;r.points.push(e)}return new G.A(r)}(e,r);case te.ESRI_GEOMETRY_POLYLINE:return function(e,t){return new S.A(ae(e,t))}(e,r);case te.ESRI_GEOMETRY_POLYGON:return function(e,t){return new b.A(ae(e,t))}(e,r);case te.ESRI_GEOMETRY_ENVELOPE:case te.ESRI_GEOMETRY_MULTI_PATCH:return le().warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"),null;case te.ESRI_GEOMETRY_NULL:case te.ESRI_GEOMETRY_ANY:default:return le().warnOnce("Unknown or blank geometry type returned - Result interpreted as null"),null}else{if(!("object_value_type"in e))return le().warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"),null;switch(e.object_value_type.value){case re.OBJECT:return function(e,t,r){return new oe.A(ce(e,t,r))}(e,t,r);case re.ENTITY:return ue(e,t,r);case re.RELATIONSHIP:return ye(e,t,r);case re.PATH:return function(e,t,r){const n=e.entity_count(),o=e.relationship_count(),i=[];for(let a=0;a<n;a++)i.push(ue(e.get_entity_at(a),t,r)),a<o&&i.push(ye(e.get_relationship_at(a),t,r));return new ie.A({path:i})}(e,t,r);case re.ARRAY:return function(e,t,r){const n=[],o=e.count();for(let i=0;i<o;i++){const o=e.get_value_at(i);n.push(pe(o,t,r))}return n}(e,t,r);default:return le().warnOnce("Unknown graph object type detected!  Result interpreted as null"),null}}}};function pe(e,t,r){return de.decodedWasmObjToQueryResponseObj(e,t,r)}function ue(e,t,r){const n=e.type_name,o=ce(e,t,r),i=e.get_id();return new F.A(Object.assign({typeName:n,id:i},o))}function ce(e,t,r){const n={},o=e.key_count();for(let i=0;i<o;i++)n[e.get_key_at(i)]=pe(e.get_value_at(i),t,r);return{properties:n}}function ye(e,t,r){const n=e.type_name,o=ce(e,t,r);return new D.A(Object.assign({typeName:n,id:e.get_id(),originId:e.get_origin_entity_id(),destinationId:e.get_destination_entity_id()},o))}let he=class extends l.A{constructor(e){super(e),this.hasError=null,this.error=null,this.editResults=[]}};(0,s._)([(0,d.MZ)()],he.prototype,"hasError",void 0),(0,s._)([(0,d.MZ)()],he.prototype,"error",void 0),(0,s._)([(0,d.MZ)()],he.prototype,"editResults",void 0),he=(0,s._)([(0,p.$)("esri.rest.knowledgeGraph.GraphApplyEdits")],he);const fe=he;const _e={fetchKnowledgeGraph:async e=>{const t=new I({url:e}),r=[];return r.push(Me(t)),r.push(Ie(t)),await Promise.all(r),t},refreshDataModel:async e=>{e.dataModel=await Pe(e)},refreshServiceDefinition:async e=>{var t,r;const n=(await(0,o.A)(e.url,{query:{f:"json"}})).data;return n.capabilities=null===n||void 0===n||null===(t=n.capabilities)||void 0===t?void 0:t.split(","),n.supportedQueryFormats=null===n||void 0===n||null===(r=n.supportedQueryFormats)||void 0===r?void 0:r.split(","),e.serviceDefinition=new T(n),e.serviceDefinition},executeQueryStreaming:async(e,t,r)=>{var n;const o="".concat(e.url,"/graph/query");await Ge(e);const a=await Se(o,r);a.data.body=await async function(e,t){var r;const n=await(0,A.I)(),o=new n.GraphQueryRequestEncoder;if(o.deleteLater(),e.outputSpatialReference?o.output_spatial_reference={wkid:e.outputSpatialReference.wkid,latestWkid:e.outputSpatialReference.latestWkid,vcsWkid:e.outputSpatialReference.vcsWkid,latestVcsWkid:e.outputSpatialReference.latestVcsWkid,wkt:null!==(r=e.outputSpatialReference.wkt)&&void 0!==r?r:""}:o.output_spatial_reference=n.SpatialReferenceUtil.WGS84(),o.open_cypher_query=e.openCypherQuery,e.bindParameters)for(const[i,a]of Object.entries(e.bindParameters))be(i,a,o,n);if(e.bindGeometryQuantizationParameters)!function(e,t){t.input_quantization_parameters={xy_resolution:e.xyResolution,x_false_origin:e.xFalseOrigin,y_false_origin:e.yFalseOrigin,z_resolution:e.zResolution,z_false_origin:e.zFalseOrigin,m_resolution:e.mResolution,m_false_origin:e.mFalseOrigin}}(e.bindGeometryQuantizationParameters,o);else{var s;if(t.dataModel||await Me(t),4326!==(null===(s=t.dataModel)||void 0===s||null===(s=s.spatialReference)||void 0===s?void 0:s.wkid))throw new i.A("knowledge-graph:SR-quantization-mismatch","If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");o.input_quantization_parameters=n.InputQuantizationUtil.WGS84_lossless()}e.outputQuantizationParameters&&function(e,t,r){if(!e.extent)throw new i.A("knowledge-graph:illegal-output-quantization","The Output quantization provided to the encoder had an illegal value as part of its extent",e.extent);if(!e.quantizeMode)throw new i.A("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal mode setting",e.quantizeMode);if(!e.tolerance)throw new i.A("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal tolerance setting",e.quantizeMode);t.output_quantization_parameters={extent:{xmax:e.extent.xmax,ymax:e.extent.ymax,xmin:e.extent.xmin,ymin:e.extent.ymin},quantize_mode:r.esriQuantizeMode[e.quantizeMode],tolerance:e.tolerance}}(e.outputQuantizationParameters,o,n);try{o.encode()}catch(a){throw new i.A("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{error:a})}const l=o.get_encoding_result();if(0!==l.error.error_code)throw new i.A("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{errorCode:l.error.error_code,errorMessage:l.error.error_message});return structuredClone(l.get_byte_buffer())}(t,e);const s=await Ae(a.data.url,a.data);if(e.dataModel)return new h({resultRowsStream:await Oe(s,e.dataModel,null!==(n=t.outputSpatialReference)&&void 0!==n?n:void 0)});throw new i.A("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},executeApplyEdits:async(e,t,r)=>{var n;if(null!==(n=e.serviceDefinition)&&void 0!==n&&n.dataEditingNotSupported)throw new i.A("knowledge-graph:data-editing-not-supported","The Knowledge Graph Service definition indicated that data editing is not supported");const o="".concat(e.url,"/graph/applyEdits");await Ge(e);const a=await Se(o,r);return a.data.body=await async function(e,t){var r,n,o;if(t.dataModel||await Me(t),!t.dataModel)throw new i.A("knowledge-graph:data-model-undefined","Encoding could not proceed because a data model was not provided and it could not be determined from the service");const a=await(0,A.I)(),s=!(null===(r=e.options)||void 0===r||!r.cascadeDelete),l=new a.GraphApplyEditsEncoder(a.SpatialReferenceUtil.WGS84(),null!==(n=e.options)&&void 0!==n&&n.inputQuantizationParameters?function(e){return{xy_resolution:e.xyResolution,x_false_origin:e.xFalseOrigin,y_false_origin:e.yFalseOrigin,z_resolution:e.zResolution,z_false_origin:e.zFalseOrigin,m_resolution:e.mResolution,m_false_origin:e.mFalseOrigin}}(null===(o=e.options)||void 0===o?void 0:o.inputQuantizationParameters):a.InputQuantizationUtil.WGS84_lossless());l.deleteLater(),l.cascade_delete=s;try{var d,p,u,c,y,h;let t;null!==(d=e.entityAdds)&&void 0!==d&&d.forEach((e=>{t=l.add_entity(Z(e,a)),Re(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")})),null!==(p=e.relationshipAdds)&&void 0!==p&&p.forEach((e=>{if(!e.originId||!e.destinationId)throw new i.A("knowledge-graph:relationship-origin-destination-missing","When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");t=l.add_relationship(Z(e,a)),Re(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")})),null!==(u=e.entityUpdates)&&void 0!==u&&u.forEach((e=>{if(!e.id)throw new i.A("knowledge-graph:entity-id-missing","When updating an entity or relationship, you must specify the id on the class level property");t=l.update_entity(Z(e,a)),Re(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")})),null!==(c=e.relationshipUpdates)&&void 0!==c&&c.forEach((e=>{if(!e.id)throw new i.A("knowledge-graph:relationship-id-missing","When updating an entity or relationship, you must specify the id on the class level property");t=l.update_relationship(Z(e,a)),Re(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")})),null!==(y=e.entityDeletes)&&void 0!==y&&y.forEach((e=>{var t;if(!e.typeName)throw new i.A("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const r=l.make_delete_helper(e.typeName,!0);r.deleteLater(),null===(t=e.ids)||void 0===t||t.forEach((e=>{r.delete_by_id(e)}))})),null!==(h=e.relationshipDeletes)&&void 0!==h&&h.forEach((e=>{var t;if(!e.typeName)throw new i.A("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const r=l.make_delete_helper(e.typeName,!1);null===(t=e.ids)||void 0===t||t.forEach((e=>{r.delete_by_id(e)}))})),l.encode()}catch(de){throw new i.A("knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed",{error:de})}const f=l.get_encoding_result();return Re(f.error,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed"),structuredClone(f.get_byte_buffer())}(t,e),async function(e){const t=e.headers.get("content-type");if(null!==t&&void 0!==t&&t.includes("application/x-protobuf")){const t=await e.arrayBuffer(),r=new((await(0,A.I)()).GraphApplyEditsDecoder);return r.deleteLater(),r.decode(new Uint8Array(t)),function(e){const t=new fe;t.hasError=e.has_error(),t.hasError&&(t.error={errorCode:e.error.error_code,errorMessage:e.error.error_message});const r=e.get_edit_results_count();for(let n=0;n<r;n++){const r=e.get_edit_results_at(n),o=e.get_edit_results_type_name_at(n),i=[],a=[],s=[],l=r.get_add_results_count(),d=r.get_update_results_count(),p=r.get_delete_results_count();for(let e=0;e<l;e++){const t=r.get_add_result_at(e);i.push({id:t.id,error:{errorCode:t.error.error_code,errorMessage:t.error.error_message}})}for(let e=0;e<d;e++){const t=r.get_update_result_at(e);a.push({id:t.id,error:{errorCode:t.error.error_code,errorMessage:t.error.error_message}})}for(let e=0;e<p;e++){const t=r.get_delete_result_at(e);s.push({id:t.id,error:{errorCode:t.error.error_code,errorMessage:t.error.error_message}})}t.editResults.push({typeName:o,adds:i,updates:a,deletes:s})}return t}(r)}throw new i.A("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:t,data:e.text()})}(await Ae(a.data.url,a.data))},executeQuery:async(e,t,r)=>{var n;const a="".concat(e.url,"/graph/query"),s=await(0,o.A)(a,{responseType:"array-buffer",query:{f:"pbf",openCypherQuery:t.openCypherQuery,...null===r||void 0===r?void 0:r.query},signal:null===r||void 0===r?void 0:r.signal,timeout:null===r||void 0===r?void 0:r.timeout}),l=null===(n=s.getHeader)||void 0===n?void 0:n.call(s,"content-type"),d=s.data;if(null!==l&&void 0!==l&&l.includes("application/x-protobuf")){const t=new((await(0,A.I)()).GraphQueryDecoder);if(t.deleteLater(),e.dataModel)return new c({resultRows:xe(t,d,e.dataModel)});throw new i.A("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new i.A("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:l,data:s.data})},executeSearch:async(e,t,r)=>{var n;const a=t.typeCategoryFilter,s="".concat(e.url,"/graph/search"),l=await(0,o.A)(s,{responseType:"array-buffer",query:{f:"pbf",searchQuery:'"'.concat(t.searchQuery,'"'),typeCategoryFilter:a,...null===r||void 0===r?void 0:r.query},signal:null===r||void 0===r?void 0:r.signal,timeout:null===r||void 0===r?void 0:r.timeout}),d=null===(n=l.getHeader)||void 0===n?void 0:n.call(l,"content-type"),p=l.data;if(null!==d&&void 0!==d&&d.includes("application/x-protobuf")){const t=new((await(0,A.I)()).GraphQueryDecoder);if(t.deleteLater(),e.dataModel)return new c({resultRows:xe(t,p,e.dataModel)});throw new i.A("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new i.A("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:d,data:l.data})},executeSearchStreaming:async(e,t,r)=>{const n="".concat(e.url,"/graph/search");await Ge(e);const o=await Se(n,r);o.data.body=await async function(e){var t;const r=await(0,A.I)(),n=new r.GraphSearchRequestEncoder;if(n.deleteLater(),n.search_query=e.searchQuery,n.type_category_filter=r.esriNamedTypeCategory[e.typeCategoryFilter],!0===e.returnSearchContext&&(n.return_search_context=e.returnSearchContext),null!=e.start&&e.start>0&&(n.start_index=e.start),null!=e.num&&(n.max_num_results=e.num),null!=e.idsFilter&&Array.isArray(e.idsFilter)&&e.idsFilter.length>0)try{n.set_ids_filter(O(e.idsFilter,r))}catch(a){throw new i.A("knowledge-graph:ids-format-error","Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string",{error:a})}null===(t=e.namedTypesFilter)||void 0===t||t.forEach((e=>{n.add_named_type_filter(e)}));try{n.encode()}catch(a){throw new i.A("knowledge-graph:search-encoding-failed","Attempting to encode the search failed",{error:a})}const o=n.get_encoding_result();if(0!==o.error.error_code)throw new i.A("knowledge-graph:search-encoding-failed","Attempting to get encoding result from the query failed",{errorCode:o.error.error_code,errorMessage:o.error.error_message});return structuredClone(o.get_byte_buffer())}(t);const a=await Ae(o.data.url,o.data);if(e.dataModel)return new h({resultRowsStream:await Oe(a,e.dataModel)});throw new i.A("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},_fetchWrapper:async(e,t)=>fetch(e,t)};async function ge(e,t,r){return _e.executeApplyEdits(e,t,r)}async function we(e,t,r){return _e.executeQuery(e,t,r)}async function me(e,t,r){return _e.executeQueryStreaming(e,t,r)}async function ve(e,t,r){return _e.executeSearch(e,t,r)}async function Ee(e,t,r){return _e.executeSearchStreaming(e,t,r)}async function Te(e){return _e.fetchKnowledgeGraph(e)}async function Me(e){return _e.refreshDataModel(e)}async function Ie(e){return _e.refreshServiceDefinition(e)}async function Ae(e,t){return _e._fetchWrapper(e,t)}async function Ge(e){(null===n.id||void 0===n.id?void 0:n.id.findCredential(e.url))||(e.dataModel?await Pe(e):await Me(e))}function Re(e,t,r){if(0!==e.error_code)throw new i.A(t,r,{errorCode:e.error_code,errorMessage:e.error_message})}function be(e,t,r,n){null==t?r.set_param_key_value(e,""):"object"!=typeof t||t instanceof Date?r.set_param_key_value(e,t):t instanceof x.A?r.set_param_key_value(e,k(t,n)):t instanceof Array?r.set_param_key_value(e,O(t,n)):r.set_param_key_value(e,P(t,n))}async function Se(e,t){return(0,o.A)(e,{responseType:"native-request-init",method:"post",query:{f:"pbf",...null===t||void 0===t?void 0:t.query},body:"x",headers:{"Content-Type":"application/octet-stream"},signal:null===t||void 0===t?void 0:t.signal,timeout:null===t||void 0===t?void 0:t.timeout})}function xe(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new _.A({wkid:_.A.WGS84.wkid});e.push_buffer(new Uint8Array(t));const o=[];let a=0;for(;e.next_row();){a||(a=e.get_header_keys().size());const t=new Array(a);for(let o=0;o<a;o++){const i=e.get_value(o);t[o]=pe(i,r,n)}o.push(t)}if(e.has_error())throw new i.A("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded",{errorCode:e.error.error_code,errorMessage:e.error.error_message});return o}async function Oe(e,t,r){const n=e.headers.get("content-type");if(e.headers.get("content-length")&&a.A.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined."),null!==n&&void 0!==n&&n.includes("application/x-protobuf")){var o;const n=null===(o=e.body)||void 0===o?void 0:o.getReader(),a=new((await(0,A.I)()).GraphQueryDecoder);return a.deleteLater(),new ReadableStream({async start(e){try{return function o(){return null===n||void 0===n?void 0:n.read().then((s=>{let{done:l,value:d}=s;if(l){let t;if(a.has_error()&&(t=new i.A("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded",{errorCode:a.error.error_code,errorMessage:a.error.error_message})),n.releaseLock(),t)throw e.error(t),t;return void e.close()}const p=xe(a,d,t,r);return p.length>0&&e.enqueue(p),o()}))}()}catch(de){null!==n&&void 0!==n&&n.releaseLock(),e.error(new i.A("knowledge-graph:stream-decoding-error","The server returned a valid response, but there was an error decoding the response stream",{error:de})),e.close()}}})}throw new i.A("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:n,data:e.text()})}async function Pe(e){var t;const r="".concat(e.url,"/dataModel/queryDataModel"),n=await(0,o.A)(r,{responseType:"array-buffer",query:{f:"pbf"}}),a=null===(t=n.getHeader)||void 0===t?void 0:t.call(n,"content-type"),s=n.data;if(null!==a&&void 0!==a&&a.includes("application/x-protobuf")){const e=(await(0,A.I)()).decode_data_model_from_protocol_buffer(new Uint8Array(s));if(!e)throw new i.A("knowledge-graph:data-model-decode-failure","The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");return function(e){var t,r,n,o;return e.deleteLater(),new v({timestamp:e.timestamp,spatialReference:new _.A(e.spatial_reference),strict:e.strict,objectIdField:e.objectid_property,globalIdField:e.globalid_property,arcgisManaged:e.arcgis_managed,identifierInfo:{identifierMappingInfo:{identifierInfoType:q.vy[null===(t=e.identifier_info)||void 0===t||null===(t=t.identifier_mapping_info)||void 0===t||null===(t=t.identifier_info_type)||void 0===t?void 0:t.value],databaseNativeIdentifier:null===(r=e.identifier_info)||void 0===r||null===(r=r.identifier_mapping_info)||void 0===r?void 0:r.database_native_identifier,uniformPropertyIdentifier:{identifierPropertyName:null===(n=e.identifier_info)||void 0===n||null===(n=n.identifier_mapping_info)||void 0===n||null===(n=n.uniform_property_identifier)||void 0===n?void 0:n.identifier_property_name}},identifierGenerationInfo:{uuidMethodHint:q.wr[null===(o=e.identifier_info)||void 0===o||null===(o=o.identifier_generation_info)||void 0===o||null===(o=o.uuid_method_hint)||void 0===o?void 0:o.value]}},searchIndexes:ee(e.search_indexes),entityTypes:H(e.entity_types),relationshipTypes:X(e.relationship_types)})}(e)}throw new i.A("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:a,data:n.data})}},46801:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(35143),o=(r(76460),r(81806),r(47249),r(50076),r(85842)),i=r(25623);let a=class extends i.A{constructor(e){super(e)}};a=(0,n._)([(0,o.$)("esri.rest.knowledgeGraph.EntityType")],a);const s=a},30578:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(35143),o=r(42553),i=r(46053),a=(r(81806),r(76460),r(47249),r(85842));let s=class extends o.oY{constructor(e){super(e),this.name=null,this.unique=null,this.ascending=null,this.description=null,this.fieldNames=null}};(0,n._)([(0,i.MZ)({type:String,json:{write:!0}})],s.prototype,"name",void 0),(0,n._)([(0,i.MZ)({type:Boolean,json:{write:!0}})],s.prototype,"unique",void 0),(0,n._)([(0,i.MZ)({type:Boolean,json:{write:!0}})],s.prototype,"ascending",void 0),(0,n._)([(0,i.MZ)({type:String,json:{write:!0}})],s.prototype,"description",void 0),(0,n._)([(0,i.MZ)({type:[String],json:{write:!0}})],s.prototype,"fieldNames",void 0),s=(0,n._)([(0,a.$)("esri.rest.knowledgeGraph.FieldIndex")],s);const l=s},25623:(e,t,r)=>{r.d(t,{A:()=>p});var n=r(35143),o=r(42553),i=r(46053),a=(r(81806),r(76460),r(47249),r(85842)),s=r(30578),l=r(13909);let d=class extends o.oY{constructor(e){super(e),this.name=null,this.alias=null,this.role=null,this.strict=null,this.properties=null,this.fieldIndexes=null}};(0,n._)([(0,i.MZ)({type:String,json:{write:!0}})],d.prototype,"name",void 0),(0,n._)([(0,i.MZ)({type:String,json:{write:!0}})],d.prototype,"alias",void 0),(0,n._)([(0,i.MZ)({type:String,json:{write:!0}})],d.prototype,"role",void 0),(0,n._)([(0,i.MZ)({type:Boolean,json:{write:!0}})],d.prototype,"strict",void 0),(0,n._)([(0,i.MZ)({type:[l.A],json:{write:!0}})],d.prototype,"properties",void 0),(0,n._)([(0,i.MZ)({type:[s.A],json:{write:!0}})],d.prototype,"fieldIndexes",void 0),d=(0,n._)([(0,a.$)("esri.rest.knowledgeGraph.GraphObjectType")],d);const p=d},13909:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(35143),o=r(42553),i=r(46053),a=(r(81806),r(76460),r(47249),r(85842));let s=class extends o.oY{constructor(e){super(e),this.name=null,this.alias=null,this.fieldType=null,this.geometryType=null,this.hasM=null,this.hasZ=null,this.nullable=null,this.editable=null,this.required=null,this.defaultVisibility=null,this.systemMaintained=null,this.role=null,this.defaultValue=null}};(0,n._)([(0,i.MZ)({type:String,json:{write:!0}})],s.prototype,"name",void 0),(0,n._)([(0,i.MZ)({type:String,json:{write:!0}})],s.prototype,"alias",void 0),(0,n._)([(0,i.MZ)({type:String,json:{write:!0}})],s.prototype,"fieldType",void 0),(0,n._)([(0,i.MZ)({type:String,json:{write:!0}})],s.prototype,"geometryType",void 0),(0,n._)([(0,i.MZ)({type:Boolean,json:{write:!0}})],s.prototype,"hasM",void 0),(0,n._)([(0,i.MZ)({type:Boolean,json:{write:!0}})],s.prototype,"hasZ",void 0),(0,n._)([(0,i.MZ)({type:Boolean,json:{write:!0}})],s.prototype,"nullable",void 0),(0,n._)([(0,i.MZ)({type:Boolean,json:{write:!0}})],s.prototype,"editable",void 0),(0,n._)([(0,i.MZ)({type:Boolean,json:{write:!0}})],s.prototype,"required",void 0),(0,n._)([(0,i.MZ)({type:Boolean,json:{write:!0}})],s.prototype,"defaultVisibility",void 0),(0,n._)([(0,i.MZ)({type:Boolean,json:{write:!0}})],s.prototype,"systemMaintained",void 0),(0,n._)([(0,i.MZ)()],s.prototype,"role",void 0),(0,n._)([(0,i.MZ)({type:Object,json:{type:String,write:{writer:(e,t)=>{t.defaultValue=null!=e?e.toString():null}}}})],s.prototype,"defaultValue",void 0),s=(0,n._)([(0,a.$)("esri.rest.knowledgeGraph.GraphProperty")],s);const l=s},84252:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(35143),o=r(46053),i=(r(81806),r(76460),r(47249),r(85842)),a=r(25623);let s=class extends a.A{constructor(e){super(e),this.endPoints=[]}};(0,n._)([(0,o.MZ)()],s.prototype,"endPoints",void 0),s=(0,n._)([(0,i.$)("esri.rest.knowledgeGraph.RelationshipType")],s);const l=s},31830:(e,t,r)=>{var n,o,i,a,s,l,d;r.d(t,{Eq:()=>n,bV:()=>i,nP:()=>s,r5:()=>o,ti:()=>l,vy:()=>d,wr:()=>a}),function(e){e[e.Regular=0]="Regular",e[e.Provenance=1]="Provenance",e[e.Document=2]="Document"}(n||(n={})),function(e){e[e.esriFieldTypeSmallInteger=0]="esriFieldTypeSmallInteger",e[e.esriFieldTypeInteger=1]="esriFieldTypeInteger",e[e.esriFieldTypeSingle=2]="esriFieldTypeSingle",e[e.esriFieldTypeDouble=3]="esriFieldTypeDouble",e[e.esriFieldTypeString=4]="esriFieldTypeString",e[e.esriFieldTypeDate=5]="esriFieldTypeDate",e[e.esriFieldTypeOID=6]="esriFieldTypeOID",e[e.esriFieldTypeGeometry=7]="esriFieldTypeGeometry",e[e.esriFieldTypeBlob=8]="esriFieldTypeBlob",e[e.esriFieldTypeRaster=9]="esriFieldTypeRaster",e[e.esriFieldTypeGUID=10]="esriFieldTypeGUID",e[e.esriFieldTypeGlobalID=11]="esriFieldTypeGlobalID",e[e.esriFieldTypeXML=12]="esriFieldTypeXML",e[e.esriFieldTypeBigInteger=13]="esriFieldTypeBigInteger",e[e.esriFieldTypeDateOnly=14]="esriFieldTypeDateOnly",e[e.esriFieldTypeTimeOnly=15]="esriFieldTypeTimeOnly",e[e.esriFieldTypeTimestampOffset=16]="esriFieldTypeTimestampOffset"}(o||(o={})),function(e){e[e.esriGeometryNull=0]="esriGeometryNull",e[e.esriGeometryPoint=1]="esriGeometryPoint",e[e.esriGeometryMultipoint=2]="esriGeometryMultipoint",e[e.esriGeometryPolyline=3]="esriGeometryPolyline",e[e.esriGeometryPolygon=4]="esriGeometryPolygon",e[e.esriGeometryEnvelope=5]="esriGeometryEnvelope",e[e.esriGeometryAny=6]="esriGeometryAny",e[e.esriGeometryMultiPatch=7]="esriGeometryMultiPatch"}(i||(i={})),function(e){e[e.esriMethodHintUNSPECIFIED=0]="esriMethodHintUNSPECIFIED",e[e.esriUUIDESRI=1]="esriUUIDESRI",e[e.esriUUIDRFC4122=2]="esriUUIDRFC4122"}(a||(a={})),function(e){e[e.esriTypeUNSPECIFIED=0]="esriTypeUNSPECIFIED",e[e.esriTypeEntity=1]="esriTypeEntity",e[e.esriTypeRelationship=2]="esriTypeRelationship",e[e.esriTypeBoth=4]="esriTypeBoth"}(s||(s={})),function(e){e[e.esriGraphPropertyUNSPECIFIED=0]="esriGraphPropertyUNSPECIFIED",e[e.esriGraphPropertyRegular=1]="esriGraphPropertyRegular",e[e.esriGraphPropertyDocumentName=2]="esriGraphPropertyDocumentName",e[e.esriGraphPropertyDocumentTitle=3]="esriGraphPropertyDocumentTitle",e[e.esriGraphPropertyDocumentUrl=4]="esriGraphPropertyDocumentUrl",e[e.esriGraphPropertyDocumentText=5]="esriGraphPropertyDocumentText",e[e.esriGraphPropertyDocumentKeywords=6]="esriGraphPropertyDocumentKeywords",e[e.esriGraphPropertyDocumentContentType=7]="esriGraphPropertyDocumentContentType",e[e.esriGraphPropertyDocumentMetadata=8]="esriGraphPropertyDocumentMetadata",e[e.esriGraphPropertyDocumentFileExtension=9]="esriGraphPropertyDocumentFileExtension"}(l||(l={})),function(e){e[e.esriIdentifierInfoTypeUNSPECIFIED=0]="esriIdentifierInfoTypeUNSPECIFIED",e[e.esriIdentifierInfoTypeDatabaseNative=1]="esriIdentifierInfoTypeDatabaseNative",e[e.esriIdentifierInfoTypeUniformProperty=2]="esriIdentifierInfoTypeUniformProperty"}(d||(d={}))},57502:(e,t,r)=>{r.d(t,{I:()=>l});var n=r(28899),o=r(81806);const i="esri/rest/knowledgeGraph/wasmInterface/";let a,s=null;async function l(){var e;const t=null!==(e=s)&&void 0!==e?e:a;if(t)return t;const r=(0,o.A)("wasm-simd");return a=d(r),a}async function d(e){if(e){const{default:e}=await r.e(2585).then(r.bind(r,82585)).then((e=>e.a));return e({locateFile:e=>(0,n.s)(i+e)})}const{default:t}=await r.e(7751).then(r.bind(r,47751)).then((e=>e.a));return t({locateFile:e=>(0,n.s)(i+e)})}}}]);
//# sourceMappingURL=3576.2af4ae6c.chunk.js.map