"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[4932],{64932:(e,t,s)=>{s.r(t),s.d(t,{default:()=>C});var n=s(35143),r=s(50076),i=s(68134),o=s(46053),a=(s(81806),s(76460),s(47249),s(85842)),c=(s(35238),s(39356)),l=s(91967),d=s(30726),h=s(91291),u=s(25269),p=s(55039),_=s(57534),y=s(31608);let v=class extends c.A{getObjectId(){return this.objectId}};(0,n._)([(0,o.MZ)({type:Number,json:{read:!0}})],v.prototype,"objectId",void 0),v=(0,n._)([(0,a.$)("esri.layers.graphics.controllers.StreamGraphic")],v);class m{constructor(e){this.onUpdate=e,this._idToGraphic=new Map}destroy(){this._idToGraphic.clear()}add(e){this._idToGraphic.set(e.objectId,e)}get(e){return this._idToGraphic.get(e)}forEach(e){this._idToGraphic.forEach(e)}removeById(e){const t=this._idToGraphic.get(e);return t?(t.sourceLayer=t.layer=null,this._idToGraphic.delete(e),t):null}update(e,t){this.onUpdate(e,t)}get size(){return this._idToGraphic.size}}let g=class extends((0,h.g)(l.A)){constructor(){super(...arguments),this.isPaused=!1,this.graphics=new _._,this._updateInfo={websocket:0,client:0},this._updateIntervalId=null,this._outSpatialReference=null}initialize(){this.addResolvingPromise(this.layer.when((()=>this._startup())))}destroy(){this.clear()}_clearInterval(){null!==this._updateIntervalId&&(clearInterval(this._updateIntervalId),this._updateIntervalId=null)}clear(){this._shutdown(),this.graphics.clear()}get updating(){return!this.connection||"connected"===this.connection.connectionStatus}_shutdown(){this._clearInterval(),this.connection=(0,d.pR)(this.connection),this.store=(0,d.pR)(this.store),this.removeAllHandles()}_startup(){const{layer:e,layerView:t}=this,{spatialReference:s,definitionExpression:n,geometryDefinition:r,objectIdField:o,timeInfo:a,purgeOptions:c,maxReconnectionAttempts:l,maxReconnectionInterval:d,customParameters:h}=e,_=e.geometryType?y.g.toJSON(e.geometryType):null,v=s,g=t.view.spatialReference;this.clear(),this._set("connection",(0,p.createConnection)(e.parsedUrl,v,g,_,n,r,l,d,null!==h&&void 0!==h?h:void 0)),this._outSpatialReference=g.toJSON(),this.store=new m(this._onUpdate.bind(this)),this.featuresManager=new u.GY(this.store,o,a.toJSON(),c);const f="startup-watches";this.removeHandles(f),this.addHandles([e.on("send-message-to-socket",(e=>this.connection.sendMessageToSocket(e))),e.on("send-message-to-client",(e=>this.connection.sendMessageToClient(e))),this.connection.on("data-received",(e=>this._onFeature(e))),this.connection.on("message-received",(e=>this._onWebSocketMessage(e))),(0,i.wB)((()=>[e.definitionExpression,e.geometryDefinition,e.purgeOptions]),(()=>this._startup()))],f),this.isPaused||this._initUpdateInterval()}_onWebSocketMessage(e){if(this.layerView.emit("message-received",e),"type"in e)switch(e.type){case"delete":if(e.objectIds)for(const t of e.objectIds)this.featuresManager.removeById(t);if(e.trackIds)for(const t of e.trackIds)this.featuresManager.removeByTrackId(t);break;case"clear":this.store.forEach((e=>this.featuresManager.removeById(e.objectId)))}}_onFeature(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{null==e.geometry||e.geometry.spatialReference||(e.geometry.spatialReference=this._outSpatialReference);const t=v.fromJSON(e);t.sourceLayer=t.layer=this.layer,this.featuresManager.add(t)}catch{}}_onUpdate(e,t){null!=t&&this.graphics.removeMany(t),null!=e&&(this._updateInfo.client+=e.length,this.graphics.addMany(e))}_initUpdateInterval(){this._clearInterval();const{updateInterval:e}=this.layer;let t=performance.now();this._updateIntervalId=setInterval((()=>{const e=performance.now(),s=e-t;if(s>2500){t=e;const n=Math.round(this._updateInfo.client/(s/1e3)),r=Math.round(this._updateInfo.websocket/(s/1e3));this._updateInfo.client=0,this._updateInfo.websocket=0,this.layerView.emit("update-rate",{client:n,websocket:r})}this.featuresManager.checkForUpdates()}),e)}pauseStream(){this.isPaused=!0,this._clearInterval()}resumeStream(){this.isPaused=!1,this._initUpdateInterval()}disconnect(){this._shutdown()}connect(){null==this.connection&&this._startup()}clearGraphics(){this.graphics.clear()}};(0,n._)([(0,o.MZ)()],g.prototype,"isPaused",void 0),(0,n._)([(0,o.MZ)({constructOnly:!0})],g.prototype,"layer",void 0),(0,n._)([(0,o.MZ)({constructOnly:!0})],g.prototype,"layerView",void 0),(0,n._)([(0,o.MZ)()],g.prototype,"connection",void 0),(0,n._)([(0,o.MZ)({readOnly:!0})],g.prototype,"updating",null),g=(0,n._)([(0,a.$)("esri.layers.graphics.controllers.StreamController")],g);var f=s(68295),I=s(57867),w=s(83491),M=s(44513),S=s(91196),b=s(8203);const P=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(){super(...arguments),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&"connected"===this._streamConnectionStatus?"paused":this._streamConnectionStatus}_onSuspendedChange(e){e?this._doPause():this._isUserPaused||this._doResume()}};return(0,n._)([(0,o.MZ)()],t.prototype,"_isUserPaused",void 0),(0,n._)([(0,o.MZ)({readOnly:!0})],t.prototype,"connectionStatus",null),(0,n._)([(0,o.MZ)({type:b.A})],t.prototype,"filter",void 0),t=(0,n._)([(0,a.$)("esri.layers.mixins.StreamLayerView")],t),t};let k=class extends(P((0,I.T)((0,w.w)(S.A)))){constructor(){super(...arguments),this.type="stream-3d",this.updatePolicy=M.q.ASYNC,this.hasZ=!0,this.hasM=!1}initialize(){this.addHandles((0,i.wB)((()=>this.suspended),(e=>{this.controller&&this._onSuspendedChange(e)})))}get connectionError(){var e;const t=null===(e=this.controller)||void 0===e||null===(e=e.connection)||void 0===e?void 0:e.errorString;return t?new r.A("stream-controller",t):null}createQuery(){return new f.A({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}queryLatestObservations(e,t){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}get _streamConnectionStatus(){var e,t;return null!==(e=null===(t=this.controller)||void 0===t||null===(t=t.connection)||void 0===t?void 0:t.connectionStatus)&&void 0!==e?e:"disconnected"}createController(){return new g({layer:this.layer,layerView:this})}beforeSetController(){}_doPause(){var e;null===(e=this.controller)||void 0===e||e.pauseStream()}_doResume(){var e;null===(e=this.controller)||void 0===e||e.resumeStream()}_doDisconnect(){var e;null!==(e=this.controller)&&void 0!==e&&e.disconnect(),this._doPause()}_doConnect(){var e;null!==(e=this.controller)&&void 0!==e&&e.connect(),this.resume()}_doClear(){var e;null===(e=this.controller)||void 0===e||e.clearGraphics()}};(0,n._)([(0,o.MZ)({readOnly:!0})],k.prototype,"updatePolicy",void 0),(0,n._)([(0,o.MZ)({readOnly:!0})],k.prototype,"connectionError",null),(0,n._)([(0,o.MZ)()],k.prototype,"controller",void 0),(0,n._)([(0,o.MZ)({readOnly:!0})],k.prototype,"hasZ",void 0),(0,n._)([(0,o.MZ)({readOnly:!0})],k.prototype,"hasM",void 0),(0,n._)([(0,o.MZ)({readOnly:!0})],k.prototype,"_streamConnectionStatus",null),k=(0,n._)([(0,a.$)("esri.views.3d.layers.StreamLayerView3D")],k);const C=k}}]);
//# sourceMappingURL=4932.34518cb9.chunk.js.map