"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[7079],{17079:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var i,n,o=a(35143),s=(a(35238),a(19276)),r=a(50076),l=a(76460),d=a(87663),h=a(77717),u=a(50346),c=a(68134),y=a(46053),p=(a(81806),a(47249),a(85842)),g=a(49140),f=a(25515),m=a(98618),L=a(1484);(n=i||(i={})).MULTIPLIER="multiplier",n.ABSOLUTE="absoluteValue";var v=a(12718),C=a(83716),M=a(2948),w=a(33750),b=a(52451),T=a(65624),k=a(11270),E=a(5682),N=a(85646),I=a(88739),A=a(76797),_=a(19247),D=a(23701);let x=class extends((0,k.q)((0,T.dM)((0,E.j)((0,h.P)(f.A))))){constructor(e){if(super(e),this.dataPreloadedInLocalCache=!1,this.defaultLinkChartConfig=null,this._currentLinkChartConfig={layoutMode:"RADIAL_TREE"},this._graphTypeLookup=new Map,this.dataManager=null,this.knowledgeGraph=null,this.layers=new(s.A.ofType(C.A)),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map,this.linkChartExtent=new A.A({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7}),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="LinkChartLayer",this.sublayerIdsCache=new Map,this.tables=new(s.A.ofType(C.A)),this.type="link-chart",this.chronologicalAuxiliaryGraphics=null,this._originalInclusionList=null===e||void 0===e?void 0:e.inclusionModeDefinition,null!==e&&void 0!==e&&e.dataPreloadedInLocalCache&&(null===e||void 0===e||!e.inclusionModeDefinition))throw new r.A("knowledge-graph:linkchart-layer-constructor","If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it");this.addHandles((0,c.wB)((()=>this.layers.concat(this.tables)),((e,t)=>this._handleSublayersChange(e,t)),c.OH))}normalizeCtorArgs(e){if(!e)return{};const{url:t,title:a,dataPreloadedInLocalCache:i,defaultLinkChartConfig:n}=e;return{url:t,title:a,dataPreloadedInLocalCache:i,defaultLinkChartConfig:n}}_initializeLayerProperties(e){var t,a,i,n,o,s,d,h,u,c;if(!this.title&&this.url){const e=this.url.split("/");this.title=e[e.length-2]}const y=new Set;let p=[],g=[];if(e.inclusionModeDefinition&&(!e.inclusionModeDefinition.namedTypeDefinitions||e.inclusionModeDefinition.namedTypeDefinitions.size<1))throw new r.A("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");null!==(t=e.knowledgeGraph.dataModel.entityTypes)&&void 0!==t&&t.forEach((e=>{e.name&&this._graphTypeLookup.set(e.name,e)})),null!==(a=e.knowledgeGraph.dataModel.relationshipTypes)&&void 0!==a&&a.forEach((e=>{e.name&&this._graphTypeLookup.set(e.name,e)})),null!==(i=e.inclusionModeDefinition)&&void 0!==i&&i.generateAllSublayers?(p=null!==(n=e.knowledgeGraph.dataModel.entityTypes)&&void 0!==n?n:[],g=null!==(o=e.knowledgeGraph.dataModel.relationshipTypes)&&void 0!==o?o:[]):null!==(s=e.inclusionModeDefinition)&&void 0!==s&&s.namedTypeDefinitions&&(null===(d=e.inclusionModeDefinition)||void 0===d?void 0:d.namedTypeDefinitions.size)>0?null===(h=e.inclusionModeDefinition)||void 0===h||h.namedTypeDefinitions.forEach(((t,a)=>{var i,n;const o=this._graphTypeLookup.get(a);if(!o)return l.A.getLogger(this).warn("A named type, ".concat(a,", was in the inclusion list that wasn't in the data model and will be removed")),void(null===(i=e.inclusionModeDefinition)||void 0===i||i.namedTypeDefinitions.delete(a));"relationship"===o.type?y.has(a)||(y.add(a),g.push(o)):"entity"===o.type?y.has(a)||(y.add(a),p.push(o)):(l.A.getLogger(this).warn("A named type, ".concat(a,", was in the inclusion list that wasn't properly modeled and will be removed")),null===(n=e.inclusionModeDefinition)||void 0===n||n.namedTypeDefinitions.delete(a))})):(p=null!==(u=e.knowledgeGraph.dataModel.entityTypes)&&void 0!==u?u:[],g=null!==(c=e.knowledgeGraph.dataModel.relationshipTypes)&&void 0!==c?c:[]);const f=new v.P({knowledgeGraph:e.knowledgeGraph,inclusionModeDefinition:e.inclusionModeDefinition});this.knowledgeGraph=e.knowledgeGraph,this.memberEntityTypes=p,this.memberRelationshipTypes=g,this.dataManager=f}load(e){const t=async()=>{var e;const t=[],a=[];this.loadLayerAssumingLocalCache(),await(0,M.qN)(this),this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1),null!==(e=this.dataManager.inclusionModeDefinition)&&void 0!==e&&e.namedTypeDefinitions.forEach((e=>{e.useAllData=!1})),await this._initializeDiagram(),this.layers.forEach((e=>{a.push(e.refreshCachedQueryEngine()),t.push(new Promise((t=>{e.on("layerview-create",(()=>{t(null)}))})))})),this.tables.forEach((e=>{a.push(e.refreshCachedQueryEngine())})),await Promise.all(a)};return this.addResolvingPromise(new Promise((a=>{(0,I.fetchKnowledgeGraph)(this.url).then((async i=>{var n,o,s;if(this._initializeLayerProperties({knowledgeGraph:i,inclusionModeDefinition:this._originalInclusionList}),null!==(n=this.dataManager.inclusionModeDefinition)&&void 0!==n&&null!==(n=n.namedTypeDefinitions)&&void 0!==n&&n.size||(this.dataManager.inclusionModeDefinition={generateAllSublayers:!1,namedTypeDefinitions:new Map},null!==(o=this.dataManager.knowledgeGraph.dataModel.entityTypes)&&void 0!==o&&o.forEach((e=>{var t;e.name&&(null===(t=this.dataManager.inclusionModeDefinition)||void 0===t||t.namedTypeDefinitions.set(e.name,{useAllData:!0}))})),null!==(s=this.dataManager.knowledgeGraph.dataModel.relationshipTypes)&&void 0!==s&&s.forEach((e=>{var t;e.name&&(null===(t=this.dataManager.inclusionModeDefinition)||void 0===t||t.namedTypeDefinitions.set(e.name,{useAllData:!0}))}))),this.dataPreloadedInLocalCache){const e=w.A.getInstance();for(const[t,a]of null!==(r=null===(l=this.dataManager.inclusionModeDefinition)||void 0===l?void 0:l.namedTypeDefinitions)&&void 0!==r?r:[]){var r,l;for(const i of null!==(h=null===(c=a.members)||void 0===c?void 0:c.values())&&void 0!==h?h:[]){var h,c;const a=e.readFromStoreById("".concat(t,"__").concat(i.id));a&&(0,d.tE)(this.dataManager.sublayerCaches,t,(()=>new Map)).set(i.id,a)}}await t()}else{var y;const a="GEOGRAPHIC"===(null===(y=this.defaultLinkChartConfig)||void 0===y?void 0:y.layoutMode);this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0,!1,a,!0).then((async()=>{(0,u.Te)(e),await t()})))}a(null)}))}))),Promise.resolve(this)}set inclusionModeDefinition(e){"loaded"!==this.loadStatus&&"failed"!==this.loadStatus?this._set("inclusionModeDefinition",e):l.A.getLogger(this).error("#inclusionModeDefinition","inclusionModeDefinition cannot be changed after the layer is loaded.")}async addRecords(e,t){let a=[];(null===t||void 0===t?void 0:t.cascadeAddRelationshipEndNodes)&&this.dataManager.knowledgeGraph.dataModel&&(a=await(0,b.aq)(e,this.dataManager.knowledgeGraph));const i=e.concat(a).filter((e=>{var t;return!(null!==(t=this.sublayerIdsCache.get(e.typeName))&&void 0!==t&&t.has(e.id))}));await this._handleNewRecords(i)}async removeRecords(e){let{cascadeRemoveRelationships:t=!0,recalculateLayout:a=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{cascadeRemoveRelationships:!0,recalculateLayout:!1},i=[];for(const l of e){var n,o;!1===(null===(n=this.dataManager.inclusionModeDefinition)||void 0===n||null===(n=n.namedTypeDefinitions)||void 0===n||null===(n=n.get(l.typeName))||void 0===n?void 0:n.useAllData)&&(null===(o=this.dataManager.inclusionModeDefinition)||void 0===o||null===(o=o.namedTypeDefinitions)||void 0===o||null===(o=o.get(l.typeName))||void 0===o||null===(o=o.members)||void 0===o?void 0:o.has(l.id))&&i.push(l)}if(t){const e=new Set,t=[];for(const a of i)if(this.dataManager.nodeConnectionsLookup.has(a.id))for(const t of this.dataManager.nodeConnectionsLookup.get(a.id))e.add(t);for(const a of e)if(this.dataManager.memberIdTypeLookup.has(a))for(const e of this.dataManager.memberIdTypeLookup.get(a))this.dataManager.relationshipTypeNames.has(e)&&t.push({id:a,typeName:e});i=i.concat(t)}this.dataManager.removeFromLayer(i);for(const l of i){var s;null!==(s=this.sublayerIdsCache.get(l.typeName))&&void 0!==s&&s.delete(l.id),this.dataManager.relationshipTypeNames.has(l.typeName)?this.relationshipLinkChartDiagramLookup.delete(l.id):this.entityLinkChartDiagramLookup.delete(l.id)}a&&await this._calculateLayoutWithSublayerTimeInfo(this._currentLinkChartConfig.layoutMode,this._currentLinkChartConfig.layoutOptions);const r=[];return this.layers.forEach((e=>{r.push(e.refreshCachedQueryEngine())})),await Promise.all(r),this._refreshNamedTypes(),i}async expand(e,t){const a=await this.dataManager.getConnectedRecordIds(e,t),i=a.filter((e=>{var t;return!(null!==(t=this.sublayerIdsCache.get(e.typeName))&&void 0!==t&&t.has(e.id))}));return await this._handleNewRecords(a),{records:i}}loadLayerAssumingLocalCache(){var e;const t=[...this.memberRelationshipTypes,...this.memberEntityTypes];this.originIdOf("layers")===g.Gr.DEFAULTS?this._createSublayers(t,this.layers,(e=>!!e.geometryType)):this._updateSublayers(t,this.layers),this.originIdOf("tables")===g.Gr.DEFAULTS?this._createSublayers(t,this.tables,(e=>!e.geometryType)):this._updateSublayers(t,this.tables),null===(e=this.dataManager.inclusionModeDefinition)||void 0===e||null===(e=e.namedTypeDefinitions)||void 0===e||e.forEach(((e,t)=>{var a;const i=(0,d.tE)(this.sublayerIdsCache,t,(()=>new Set));null===(a=e.members)||void 0===a||a.forEach((e=>{let{id:a,linkChartLocation:n}=e;if(i.add(a),n){const e=n instanceof L.A?n:(0,m.Ux)(n);this.dataManager.relationshipTypeNames.has(t)?this.relationshipLinkChartDiagramLookup.set(a,e):this.entityLinkChartDiagramLookup.set(a,e)}}))}))}async calculateLinkChartLayout(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"RADIAL_TREE",t=arguments.length>1?arguments[1]:void 0;const a=[],i=[],n=[];this.dataManager.sublayerCaches.forEach(((e,t)=>{this.dataManager.entityTypeNames.has(t)?e.forEach((e=>{a.push({typeName:t,feature:e})})):this.dataManager.relationshipTypeNames.has(t)&&e.forEach((e=>{i.push({typeName:t,feature:e})}))})),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map;const o=new Map,s=new Map,d=new Map,h=new Map,u=new Uint8Array(a.length),c=new Float64Array(a.length),y=new Float64Array(a.length),p=new Float64Array(a.length),g=new Float64Array(a.length),f=new Uint32Array(i.length),L=new Uint32Array(i.length),v=new Float64Array(i.length),C=new Float64Array(i.length),w=[],b=new A.A({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7});let T,k="FORCE_DIRECTED",E=0,I=0;const x=N.i6.apply;switch(k="GEOGRAPHIC"===e?"FORCE_DIRECTED":e,k){case"FORCE_DIRECTED":T=N.pM.apply;break;case"COMMUNITY":T=N.Tu.apply;break;case"HIERARCHICAL":T=N.$C.apply;break;case"RADIAL_TREE":T=N.vJ.apply;break;case"SMART_TREE":T=N.Xq.apply;break;default:T=N.Wg.apply}let O=!1;a.forEach((a=>{var i,n,o,s,r,l;let{typeName:d,feature:f}=a;if("CHRONOLOGICAL_SINGLE"!==e&&"CHRONOLOGICAL_MULTIPLE"!==e&&null!==t&&void 0!==t&&null!==(i=t.lockedNodeLocations)&&void 0!==i&&i.has(f.attributes[M.dr])){"GEOGRAPHIC"===e&&this.dataManager.geographicLookup.has(d)?u[E]=N.tx.IsGeographic:u[E]=N.tx.None;const a=t.lockedNodeLocations.get(f.attributes[M.dr]);c[E]=a.x,y[E]=a.y}else if("GEOGRAPHIC"===e&&this.dataManager.geographicLookup.has(d)){var m;u[E]=N.tx.IsGeographic;let e=null;const t=f.attributes[this.dataManager.geographicLookup.get(d).name];switch(null===(m=this.dataManager.geographicLookup.get(d))||void 0===m?void 0:m.geometryType){case"esriGeometryPoint":c[E]=null===t||void 0===t?void 0:t.x,y[E]=null===t||void 0===t?void 0:t.y;break;case"esriGeometryPolygon":e=null===t||void 0===t?void 0:t.centroid,null!=(null===(n=e)||void 0===n?void 0:n.x)&&null!=(null===(o=e)||void 0===o?void 0:o.y)?(c[E]=e.x,y[E]=e.y):u[E]=N.tx.IsMovable;break;case"esriGeometryPolyline":case"esriGeometryMultipoint":e=null===t||void 0===t||null===(s=t.extent)||void 0===s?void 0:s.center,null!=(null===(r=e)||void 0===r?void 0:r.x)&&null!=(null===(l=e)||void 0===l?void 0:l.y)?(c[E]=e.x,y[E]=e.y):u[E]=N.tx.IsMovable;break;default:u[E]=N.tx.IsMovable}(null==c[E]||null==y[E]||Number.isNaN(c[E])||Number.isNaN(y[E]))&&(u[E]=N.tx.IsMovable,c[E]=0,y[E]=0)}else if("CHRONOLOGICAL_SINGLE"===e||"CHRONOLOGICAL_MULTIPLE"===e){var L,v;!O&&(null===t||void 0===t||null===(L=t.lockedNodeLocations)||void 0===L?void 0:L.has(f.attributes[M.dr]))&&(O=!0);const e=null===t||void 0===t||null===(v=t.timeInfoByTypeName)||void 0===v?void 0:v.get(d),a=null===e||void 0===e?void 0:e.startField,i=a&&null!==e&&void 0!==e&&e.startField?f.attributes[a]:null;p[E]=i?new Date(i).getTime():NaN;const n=null===e||void 0===e?void 0:e.endField,o=n&&null!==e&&void 0!==e&&e.endField?f.attributes[n]:null;g[E]=o?new Date(o).getTime():NaN,c[E]=0,y[E]=0,u[E]=N.tx.IsMovable}else u[E]=N.tx.IsMovable,c[E]=0,y[E]=0;h.set(f.attributes[M.dr],E),w[E]={feature:f,typeName:d},E++})),O&&l.A.getLogger(this).warn("Locked node locations are not supported for chronological layout at this time.  Requested node locations were ignored");let R=!1;const S=new Map;i.forEach((a=>{var i;const o=a.feature.attributes[M.Cz],s=a.feature.attributes[M.KQ],r=h.get(o),l=h.get(s),d=null===t||void 0===t||null===(i=t.timeInfoByTypeName)||void 0===i?void 0:i.get(a.typeName),u=null!==t&&void 0!==t&&t.timeInfoByTypeName?null===d||void 0===d?void 0:d.startField:null,c=u?a.feature.attributes[u]:null,y=null===d||void 0===d?void 0:d.endField,p=y?a.feature.attributes[y]:null;if(void 0!==r&&void 0!==l){let t=o+"-"+s;"CHRONOLOGICAL_SINGLE"!==e&&"CHRONOLOGICAL_MULTIPLE"!==e||(t=t+"-"+c+"-"+p);const i=S.get(t);(null===i||void 0===i?void 0:i.has(a.typeName))||(f[I]=r,L[I]=l,"CHRONOLOGICAL_SINGLE"!==e&&"CHRONOLOGICAL_MULTIPLE"!==e||(v[I]=c?new Date(c).getTime():NaN,C[I]=p?new Date(p).getTime():NaN),void 0===i?S.set(t,new Map([[a.typeName,I]])):i.set(a.typeName,I),I++),n.push(a)}else R=!0,this.relationshipLinkChartDiagramLookup.set(o,null)})),R&&l.A.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null");const G=this._validateLayoutSettings(e,t),P=this._convertLayoutSettingsToCalculationSettings(G);await(0,N.Hh)();let H=!1,U=null;if("CHRONOLOGICAL_SINGLE"===e||"CHRONOLOGICAL_MULTIPLE"===e){var F;let a;({success:H,links:U,graphics:a}=x(u,c,y,p,g,f.subarray(0,I),L.subarray(0,I),v.subarray(0,I),C.subarray(0,I),"CHRONOLOGICAL_MULTIPLE"===e,null!==(F=null===t||void 0===t?void 0:t.chronologicalLayoutSettings)&&void 0!==F?F:{})),H&&(this.chronologicalAuxiliaryGraphics=a)}else({success:H,links:U}=T(u,c,y,f.subarray(0,I),L.subarray(0,I),P.computationBudgetTime,P.idealEdgeLengthMultiplier,P.repulsionRadiusMultiplier));if(!H)throw new r.A("knowledge-graph:layout-failed","Attempting to arrange the records in the specified layout failed");for(let r=0;r<w.length;r++){if(y[r]>84.9999?y[r]=84.9999:y[r]<-84.9999&&(y[r]=-84.9999),c[r]>179.9999?c[r]=179.9999:c[r]<-179.9999&&(c[r]=-179.9999),w[r].feature.attributes[M.T1]=new _.A(c[r],y[r]),o.has(w[r].typeName)){const e=o.get(w[r].typeName);null===e||void 0===e||e.set(w[r].feature.attributes[M.dr],w[r].feature)}else{const e=new Map;e.set(w[r].feature.attributes[M.dr],w[r].feature),o.set(w[r].typeName,e)}d.set(w[r].feature.attributes[M.dr],w[r].feature);const e=(0,m.Ux)(w[r].feature.attributes[M.T1]);this.entityLinkChartDiagramLookup.set(w[r].feature.attributes[M.dr],w[r].feature.attributes[M.T1]?e:null),w[r].feature.attributes[M.T1].x<b.xmin&&(b.xmin=w[r].feature.attributes[M.T1].x),w[r].feature.attributes[M.T1].x>b.xmax&&(b.xmax=w[r].feature.attributes[M.T1].x),w[r].feature.attributes[M.T1].y<b.ymin&&(b.ymin=w[r].feature.attributes[M.T1].y),w[r].feature.attributes[M.T1].y>b.ymax&&(b.ymax=w[r].feature.attributes[M.T1].y)}if(this.linkChartExtent.xmin=b.xmin,this.linkChartExtent.xmax=b.xmax,this.linkChartExtent.ymin=b.ymin,this.linkChartExtent.ymax=b.ymax,!U)throw new r.A("knowledge-graph:layout-failed","Attempting to retrieve link geometry from diagram engine failed");const B=new Map,Z=new Map,z=new Map,j=new Set;for(let r=0;r<n.length;r++){var W;const a=[],i=n[r],o=i.feature.attributes[M.Cz],u=i.feature.attributes[M.KQ];let c=o+"-"+u;if("CHRONOLOGICAL_SINGLE"===e||"CHRONOLOGICAL_MULTIPLE"===e){var Q;const e=null===t||void 0===t||null===(Q=t.timeInfoByTypeName)||void 0===Q?void 0:Q.get(i.typeName),a=null!==t&&void 0!==t&&t.timeInfoByTypeName?null===e||void 0===e?void 0:e.startField:null,n=a?i.feature.attributes[a]:null,o=null===e||void 0===e?void 0:e.endField;c+="-"+n+"-"+(o?i.feature.attributes[o]:null)}const y=S.get(c).get(i.typeName),p=0===y?0:null===(W=U)||void 0===W?void 0:W.vertexEndIndex[y-1];if(!j.has(y)){if(j.add(y),U.types[y]===N.J.Recursive){const e=[U.vertices[2*p],U.vertices[2*p+1]],t=[U.vertices[2*(p+1)],U.vertices[2*(p+1)+1]],i=[.5*(e[0]+t[0]),.5*(e[1]+t[1])],n=[i[0]-e[0],i[1]-e[1]],o=[i[0]+n[1],i[1]-n[0]],s=[i[0]-n[1],i[1]+n[0]];a.push(e),a.push(o),a.push(t),a.push(s),a.push(e)}else{if(U.types[y]!==N.J.Regular){l.A.getLogger(this).warn("A relationship generated an unsupported link geometry type.  It will not be rendered");continue}for(let e=p;e<U.vertexEndIndex[y];e++)a.push([U.vertices[2*e],U.vertices[2*e+1]])}if("CHRONOLOGICAL_SINGLE"!==e&&"CHRONOLOGICAL_MULTIPLE"!==e){var q,K;const e=null===(q=w[h.get(o)])||void 0===q?void 0:q.feature.attributes[M.T1],t=null===(K=w[h.get(u)])||void 0===K?void 0:K.feature.attributes[M.T1];a[0][0]===e.x&&a[0][1]===e.y||(a[0]=[e.x,e.y]),a[a.length-1][0]===t.x&&a[a.length-1][1]===t.y||(a[a.length-1]=[t.x,t.y])}for(let e=1;e<a.length-1;e++)a[e][1]>85.5?a[e][1]=85.5:a[e][1]<-85.5&&(a[e][1]=-85.5),a[e][0]>179.9999?a[e][0]=179.9999:a[e][0]<-179.9999&&(a[e][0]=-179.9999);B.has(c)?B.get(c).push(a):B.set(c,[a])}const g=B.get(c);Z.has(c)||(Z.set(c,new Map),z.set(c,new Map));const f=Z.get(c),L=z.get(c);f.has(i.typeName)||(f.set(i.typeName,g.shift()),L.set(i.typeName,0));const v=f.get(i.typeName);L.set(i.typeName,L.get(i.typeName)+1);const C=new D.A({paths:[v]});if(i.feature.attributes[M.T1]=C,s.has(i.typeName)){const e=s.get(i.typeName);null===e||void 0===e||e.set(i.feature.attributes[M.dr],i.feature)}else{const e=new Map;e.set(i.feature.attributes[M.dr],i.feature),s.set(i.typeName,e)}d.set(i.feature.attributes[M.dr],i.feature);const b=(0,m.Ux)(i.feature.attributes[M.T1]);this.relationshipLinkChartDiagramLookup.set(i.feature.attributes[M.dr],i.feature.attributes[M.T1]?b:null)}for(const r of n){var J,Y;r.feature.attributes[M.M1]=null!==(J=null===(Y=z.get(r.feature.attributes[M.Cz]+"-"+r.feature.attributes[M.KQ]))||void 0===Y?void 0:Y.get(r.typeName))&&void 0!==J?J:null}return this._currentLinkChartConfig={layoutMode:e,layoutOptions:G},{nodes:o,links:s,idMap:d}}async applyNewLinkChartLayout(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"RADIAL_TREE",t=arguments.length>1?arguments[1]:void 0;const a=[];await this._calculateLayoutWithSublayerTimeInfo(e,t),this.layers.forEach((e=>{a.push(e.refreshCachedQueryEngine())})),await Promise.all(a),this._refreshNamedTypes()}getCurrentNodeLocations(){var e;const t=new Map;return null!==(e=this.dataManager.inclusionModeDefinition)&&void 0!==e&&null!==(e=e.namedTypeDefinitions)&&void 0!==e&&e.forEach((e=>{var a;null===e||void 0===e||null===(a=e.members)||void 0===a||a.forEach((e=>{const a=e.linkChartLocation;let i;const n=e.id;a&&(i="x"in a?{x:a.x,y:a.y}:{x:a.coords[0],y:a.coords[1]},t.set(n,new _.A({x:i.x,y:i.y})))}))})),t}async synchronizeInclusionListWithCache(){return new Promise((e=>{var t;null!==(t=this.dataManager.inclusionModeDefinition)&&void 0!==t&&t.namedTypeDefinitions.forEach(((e,t)=>{if(e.useAllData=!1,e.members&&e.members.size>0){if(!this.dataManager.sublayerCaches.get(t))return;const a=new Set(Array.from(this.dataManager.sublayerCaches.get(t).keys()));Array.from(e.members.keys()).filter((e=>!a.has(e))).forEach((t=>{var a;null===(a=e.members)||void 0===a||a.delete(t)}))}})),e()}))}async refreshLinkChartCache(e){await this.dataManager.refreshCacheContent(e);const t=[];this.layers.forEach((e=>{t.push(e.refreshCachedQueryEngine())})),await Promise.all(t),this._refreshNamedTypes()}async connectBetweenEntities(e){let t=[];for(const i of this.dataManager.relationshipTypeNames){const e=this.sublayerIdsCache.get(i);e&&(t=t.concat(Array.from(e.keys())))}const a=await this.dataManager.getRelationshipsBetweenNodes(e,t);return await this._handleNewRecords(a),{records:a}}async connectFromEntities(e){let t=[];for(const n of this.dataManager.relationshipTypeNames){const e=this.sublayerIdsCache.get(n);e&&(t=t.concat(Array.from(e.keys())))}let a=[];for(const n of this.dataManager.entityTypeNames){const e=this.sublayerIdsCache.get(n);e&&(a=a.concat(Array.from(e)))}const i=await this.dataManager.getRelationshipsFromNodes(e,a,t);return await this._handleNewRecords(i),{records:i}}getCurrentLayout(){return this._currentLinkChartConfig.layoutMode}async _calculateLayoutWithSublayerTimeInfo(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"RADIAL_TREE",t=arguments.length>1?arguments[1]:void 0;const a=new Map;this.layers.forEach((e=>{a.set(e.objectType.name,e.timeInfo)})),await this.calculateLinkChartLayout(e,{timeInfoByTypeName:a,...t})}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const i of e)this.sublayerIdsCache.has(i.typeName)||(this.sublayerIdsCache.set(i.typeName,new Set),t.push(i.typeName)),this.sublayerIdsCache.get(i.typeName).add(i.id);for(const i of t){const e=this._graphTypeLookup.get(i);if(e){const t=this._createSublayer(e);"entity"===e.type?this.dataManager.entityTypeNames.add(i):this.dataManager.relationshipTypeNames.add(i),t.geometryType?this.layers.push(t):this.tables.push(t),this.dataManager.sublayerCaches.set(i,new Map)}}await(0,M.qN)(this,t),await this.dataManager.refreshCacheContent(e.map((e=>e.id)));const a=Object.assign({},this._currentLinkChartConfig.layoutOptions);a.lockedNodeLocations=new Map;for(const[i,n]of this.entityLinkChartDiagramLookup.entries())n&&a.lockedNodeLocations.set(i,new _.A(n.coords[0],n.coords[1]));await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode,a)}_createSublayers(e,t,a){e.forEach((e=>{const i=this._createSublayer(e);a(i)&&t.push(i),this._updateSublayerCaches(e)}))}_updateSublayers(e,t){t.forEach((t=>{t.parentCompositeLayer=this;const a=e.find((e=>e.type===t.graphType&&e.name===t.graphTypeName));a&&(t.objectType=a,t.read({title:a.name},{origin:"service"}),this._updateSublayerCaches(a))}))}_updateSublayerCaches(e){const t=this.dataManager.sublayerCaches;t.has(e.name)||t.set(e.name,new Map)}async _initializeDiagram(){var e;this.defaultLinkChartConfig?this.defaultLinkChartConfig.doNotRecalculateLayout?(null!==(e=this.dataManager.inclusionModeDefinition)&&void 0!==e&&null!==(e=e.namedTypeDefinitions)&&void 0!==e&&e.forEach(((e,t)=>{var a;null===e||void 0===e||null===(a=e.members)||void 0===a||a.forEach((e=>{const a=e.linkChartLocation;let i;const n=e.id;if(!a)return;i="x"in a?{x:a.x,y:a.y}:{x:a.coords[0],y:a.coords[1]};const o=(0,m.Ux)(i);this.dataManager.relationshipTypeNames.has(t)?this.relationshipLinkChartDiagramLookup.set(n,o):this.entityLinkChartDiagramLookup.set(n,o),this.linkChartExtent.xmin>i.x&&(this.linkChartExtent.xmin=i.x),this.linkChartExtent.xmax<i.x&&(this.linkChartExtent.xmax=i.x),this.linkChartExtent.ymin>i.y&&(this.linkChartExtent.ymin=i.y),this.linkChartExtent.ymax<i.y&&(this.linkChartExtent.ymax=i.y)}))})),this.memberRelationshipTypes.forEach((e=>{var t;e.name&&(null===(t=this.dataManager.sublayerCaches.get(e.name))||void 0===t||t.forEach((e=>{const t=this.relationshipLinkChartDiagramLookup.get(e.attributes[M.Cz]),a=this.relationshipLinkChartDiagramLookup.get(e.attributes[M.KQ]);if(t&&a){const i=(0,m.Ux)(new D.A({paths:[[[t.coords[0],t.coords[1]],[a.coords[0],a.coords[1]]]]}));this.relationshipLinkChartDiagramLookup.set(e.attributes[M.dr],i)}else this.relationshipLinkChartDiagramLookup.set(e.attributes[M.dr],null)})))}))):await this._calculateLayoutWithSublayerTimeInfo(this.defaultLinkChartConfig.layoutMode,{lockedNodeLocations:this.getCurrentNodeLocations(),...this.defaultLinkChartConfig.layoutOptions||{}}):await this._calculateLayoutWithSublayerTimeInfo("RADIAL_TREE",{lockedNodeLocations:this.getCurrentNodeLocations()})}_refreshNamedTypes(){for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}_validateLayoutSettings(e,t){var a;const n=e=>"number"==typeof e&&!isNaN(e),o={organicLayoutSettings:{},chronologicalLayoutSettings:{}};if(!new Set(["FORCE_DIRECTED","COMMUNITY","GEOGRAPHIC","CHRONOLOGICAL_MULTIPLE","CHRONOLOGICAL_SINGLE"]).has(e)||!t)return o;null!==(a=t.organicLayoutSettings)&&void 0!==a||(t.organicLayoutSettings={});const{computationBudgetTime:s,repulsionRadiusMultiplier:r,idealEdgeLength:d,idealEdgeLengthType:h}=t.organicLayoutSettings;if((e=>n(e)&&e>=1)(s)?o.organicLayoutSettings.computationBudgetTime=s:void 0!==s&&l.A.getLogger(this).warn("Invalid layout computationBudgetTime setting, will revert to default setting"),(e=>n(e)&&e>=1)(r)?o.organicLayoutSettings.repulsionRadiusMultiplier=r:void 0!==r&&l.A.getLogger(this).warn("Invalid layout repulsionRadiusMultiplier setting, will revert to default setting"),"GEOGRAPHIC"===e&&(void 0!==d||void 0!==h)&&((e=>Object.values(i).includes(e))(h)?o.organicLayoutSettings.idealEdgeLengthType=h:void 0!==h&&l.A.getLogger(this).warn('Invalid layout idealEdgeLengthType setting, will revert to "multiplier" setting'),(e=>n(e)&&e>=0)(d)?o.organicLayoutSettings.idealEdgeLength=d:void 0!==d&&l.A.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting")),("CHRONOLOGICAL_MULTIPLE"===e||"CHRONOLOGICAL_SINGLE"===e)&&t.chronologicalLayoutSettings){const e=t.chronologicalLayoutSettings;e.durationLineWidth&&e.durationLineWidth<0&&l.A.getLogger(this).warn("Invalid layout durationLineWidth setting, will revert to default setting")}return o}_convertLayoutSettingsToCalculationSettings(e){var t;null!==(t=e.organicLayoutSettings)&&void 0!==t||(e.organicLayoutSettings={});let a=e.organicLayoutSettings.idealEdgeLength;return e.organicLayoutSettings.idealEdgeLengthType===i.ABSOLUTE&&(void 0===a?a=-1:a*=-1),{computationBudgetTime:e.organicLayoutSettings.computationBudgetTime,repulsionRadiusMultiplier:e.organicLayoutSettings.repulsionRadiusMultiplier,idealEdgeLengthMultiplier:a}}_createSublayer(e){return new C.A({objectType:e,parentCompositeLayer:this,graphType:e.type})}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null})),this.removeHandles("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this})),this.addHandles([e.on("after-add",(e=>{let{item:t}=e;t.parent=this})),e.on("after-remove",(e=>{let{item:t}=e;t.parent=null}))],"sublayers-owner"))}};(0,o._)([(0,y.MZ)()],x.prototype,"dataPreloadedInLocalCache",void 0),(0,o._)([(0,y.MZ)()],x.prototype,"defaultLinkChartConfig",void 0),(0,o._)([(0,y.MZ)()],x.prototype,"dataManager",void 0),(0,o._)([(0,y.MZ)()],x.prototype,"inclusionModeDefinition",null),(0,o._)([(0,y.MZ)()],x.prototype,"knowledgeGraph",void 0),(0,o._)([(0,y.MZ)({type:s.A.ofType(C.A),json:{write:{ignoreOrigin:!0}}})],x.prototype,"layers",void 0),(0,o._)([(0,y.MZ)()],x.prototype,"entityLinkChartDiagramLookup",void 0),(0,o._)([(0,y.MZ)()],x.prototype,"relationshipLinkChartDiagramLookup",void 0),(0,o._)([(0,y.MZ)()],x.prototype,"linkChartExtent",void 0),(0,o._)([(0,y.MZ)()],x.prototype,"memberEntityTypes",void 0),(0,o._)([(0,y.MZ)()],x.prototype,"memberRelationshipTypes",void 0),(0,o._)([(0,y.MZ)({type:["LinkChartLayer"]})],x.prototype,"operationalLayerType",void 0),(0,o._)([(0,y.MZ)()],x.prototype,"sublayerIdsCache",void 0),(0,o._)([(0,y.MZ)({type:s.A.ofType(C.A),json:{write:{ignoreOrigin:!0}}})],x.prototype,"tables",void 0),(0,o._)([(0,y.MZ)({json:{read:!1}})],x.prototype,"type",void 0),(0,o._)([(0,y.MZ)({json:{read:!1}})],x.prototype,"chronologicalAuxiliaryGraphics",void 0),x=(0,o._)([(0,p.$)("esri.layers.LinkChartLayer")],x);const O=x}}]);
//# sourceMappingURL=7079.cc166278.chunk.js.map