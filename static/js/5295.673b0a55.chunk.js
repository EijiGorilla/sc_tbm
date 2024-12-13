"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[5295],{55295:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var r=i(35143),n=i(19276),s=i(46053),l=(i(81806),i(76460),i(47249),i(85842)),a=i(83491);const o=e=>{let t=class extends e{constructor(){super(...arguments),this.layerViews=new n.A}get dynamicGroupLayerView(){return this.layerViews.find((e=>{var t;return e.layer===(null===(t=this.layer)||void 0===t?void 0:t.dynamicGroupLayer)}))}get footprintLayerView(){return this.layerViews.find((e=>{var t;return e.layer===(null===(t=this.layer)||void 0===t?void 0:t.footprintLayer)}))}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return(0,r._)([(0,s.MZ)()],t.prototype,"layer",void 0),(0,r._)([(0,s.MZ)()],t.prototype,"layerViews",void 0),(0,r._)([(0,s.MZ)({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),(0,r._)([(0,s.MZ)({readOnly:!0})],t.prototype,"footprintLayerView",null),t=(0,r._)([(0,l.$)("esri.views.layers.CatalogLayerView")],t),t};var d=i(91196);let u=class extends(o((0,a.w)(d.A))){constructor(){super(...arguments),this.type="catalog-3d",this.layerViews=new n.A}};(0,r._)([(0,s.MZ)()],u.prototype,"layerViews",void 0),u=(0,r._)([(0,l.$)("esri.views.3d.layers.CatalogLayerView3D")],u);const p=u},83491:(e,t,i)=>{i.d(t,{w:()=>u});var r=i(35143),n=i(54901),s=i(50346),l=i(68134),a=i(46053),o=(i(81806),i(76460),i(47249),i(85842)),d=i(47700);const u=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(){super.postscript(),(0,d.jI)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,n.hA)((()=>e.abort()))),await(0,l.C_)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),t),(0,s.Te)(t);const i=(0,d.Hu)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}};return(0,r._)([(0,a.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,a.MZ)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,r._)([(0,o.$)("esri.views.3d.layers.LayerView3D")],t),t}},91196:(e,t,i)=>{i.d(t,{A:()=>c});var r=i(35143),n=i(91967),s=i(54099),l=i(5632),a=i(76460),o=i(30726),d=i(91291),u=i(46053),p=(i(81806),i(47249),i(85842)),y=i(19451),v=i(90992);let h=class extends((0,l.sA)((0,d.g)(s.A.EventedMixin(n.A)))){constructor(e){super(e),this._updatingHandles=new y.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",r=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";a.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(r,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,o.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,r;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(r=this.parent)||void 0===r?void 0:r.fullOpacity)&&void 0!==i?i:1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){var e;const t=this.view.timeExtent,i=null===(e=this.layer)||void 0===e?void 0:e.visibilityTimeExtent;return!t||!i||!t.intersection(i).isEmpty}canResume(){var e,t,i;const r=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)&&(0,v.g7)(r)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0);const r=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,v.g7)(r)&&this.visibleAtCurrentScale||(i.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(i.outsideVisibilityTimeExtent=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,r._)([(0,u.MZ)()],h.prototype,"view",void 0),(0,r._)([(0,u.MZ)()],h.prototype,"fullOpacity",null),(0,r._)([(0,u.MZ)()],h.prototype,"layer",void 0),(0,r._)([(0,u.MZ)()],h.prototype,"parent",void 0),(0,r._)([(0,u.MZ)({readOnly:!0})],h.prototype,"suspended",null),(0,r._)([(0,u.MZ)({readOnly:!0})],h.prototype,"suspendInfo",null),(0,r._)([(0,u.MZ)({readOnly:!0})],h.prototype,"legendEnabled",null),(0,r._)([(0,u.MZ)({type:Boolean,readOnly:!0})],h.prototype,"updating",null),(0,r._)([(0,u.MZ)({readOnly:!0})],h.prototype,"updatingProgress",null),(0,r._)([(0,u.MZ)()],h.prototype,"updateSuspended",null),(0,r._)([(0,u.MZ)()],h.prototype,"visible",null),(0,r._)([(0,u.MZ)({readOnly:!0})],h.prototype,"visibleAtCurrentScale",null),(0,r._)([(0,u.MZ)({readOnly:!0})],h.prototype,"visibleAtCurrentTimeExtent",null),h=(0,r._)([(0,p.$)("esri.views.layers.LayerView")],h);const c=h}}]);
//# sourceMappingURL=5295.673b0a55.chunk.js.map