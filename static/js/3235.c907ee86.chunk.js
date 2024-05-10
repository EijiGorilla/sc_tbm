"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[3235],{83235:(e,t,s)=>{s.r(t),s.d(t,{default:()=>P});var i=s(35143),r=s(50346),n=s(46053),a=(s(81806),s(76460)),o=(s(47249),s(85842)),l=s(25329),u=s(63241),c=s(68134),h=s(31633),m=s(9624),d=s(16159),p=(s(35238),s(39356)),v=(s(11265),s(95444),s(59784)),_=s(30726),y=s(96820),w=s(63391),g=s(7137),f=s(63733),M=s(37209),b=s(70825),A=s(70321),L=s(56829),T=s(63860),O=s(38042),Z=s(13904),D=s(86875),k=s(7246),q=s(86659),S=s(61425),G=s(76940),C=s(23701),x=s(13312),U=s(65215);const j=1e5;let z=class extends L.g{constructor(e){super(e),this._drawActive=!1,this._measurementLayer=new f.A({internal:!0,listMode:"hide",visible:!1}),this._manipulatorLayer=new f.A({internal:!0,listMode:"hide",visible:!1}),this._vertices=[],this.geodesicDistanceThreshold=null,this.measurement=null,this.measurementLabel=null}initialize(){(0,T.ud)("esri/core/t9n/Units").then((e=>{this.messages=e})),this.addHandles((0,O.oQ)((async()=>{this.messages=await(0,T.ud)("esri/core/t9n/Units")})));const e=this.view;this._draw=new M.A({view:e}),e.map.addMany([this._measurementLayer,this._manipulatorLayer]),e.focus(),this.addHandles([(0,c.wB)((()=>[this.unit,this.geodesicDistanceThreshold,this.messages]),(()=>{this._updateGraphics()}),c.Vh),(0,c.wB)((()=>[this.view.effectiveTheme.accentColor,this.view.effectiveTheme.textColor]),(()=>{if(!this._vertices.length)return;const e=this._vertices.map((e=>{let{coord:t}=e;return t}));for(const{handle:t}of this._vertices)t.remove();this._vertices=[],this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this.manipulators.removeAll(),this._updateSketch(e)}))])}destroy(){const{map:e}=this.view;this._draw.view=null,this._draw=(0,_.pR)(this._draw),e.removeMany([this._measurementLayer,this._manipulatorLayer]),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._measurementLayer=(0,_.pR)(this._measurementLayer),this._manipulatorLayer=(0,_.pR)(this._manipulatorLayer),this._resetVertices()}get cursor(){return this._drawActive?"crosshair":null}set editable(e){this._set("editable",e),e||this._draw.reset()}onActivate(){this._drawActive||0!==this._vertices.length||this._startSketch()}onShow(){this._measurementLayer.visible=!0,this._manipulatorLayer.visible=!0}onHide(){this._measurementLayer.visible=!1,this._manipulatorLayer.visible=!1}reset(){this.manipulators.removeAll(),this._resetVertices(),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._draw.reset(),this._drawActive=!1}_resetVertices(){for(const{handle:e}of this._vertices)e.remove();this._vertices=[]}_startSketch(){this._drawActive=!0;const e=this._draw.create("polyline",{mode:"click"});e.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],(e=>this._updateSketch(e.vertices))),e.on("draw-complete",(()=>this._stopSketch()))}_stopSketch(){if(this._vertices.length<3)return this.reset(),void this._startSketch();this.manipulators.forEach((e=>{let{manipulator:t}=e;t.interactive=!0})),this._drawActive=!1,this.finishToolCreation()}_updateSketch(e){const t=this.view.spatialReference;if(t&&(!B(t)||(0,m.isLoaded)())){for(;this._vertices.length>e.length;){const{handle:e,manipulator:t}=this._vertices.pop();e.remove(),this.manipulators.remove(t)}for(let s=this._vertices.length;s<e.length;s++){const[i,r]=e[s],n=R(new Z.A({x:i,y:r,spatialReference:t}),this.view,this._manipulatorLayer);this.manipulators.add(n);const a=(0,b.Xt)(n,((e,t)=>{t.next((0,b.y$)(this.view)).next((0,b.n5)(e.graphic)).next((()=>{const t=e.graphic.geometry;this._vertices[s].coord=[t.x,t.y],this._updateGraphics()}))}));this._vertices.push({manipulator:n,coord:[i,r],handle:a})}if(this._vertices.length){const s=this._vertices.length-1,i=this._vertices[s],[r,n]=e[s];i.coord[0]===r&&i.coord[1]===n||(i.coord=[r,n],i.manipulator.graphic.geometry=new Z.A({x:r,y:n,spatialReference:t}));const a=this._drawActive?this._vertices[s].manipulator:null;this.manipulators.forEach((e=>{let{manipulator:t}=e;t.interactive=null==a||t!==a}))}this._updateGraphics()}}_updateGraphics(){var e;if(this._vertices.length<2)return void this._measurementLayer.removeAll();const t=function(e,t,s){if(2===e.length){const i=new C.A({paths:e,spatialReference:t});let r;if(null!==t&&void 0!==t&&t.isGeographic)if((0,g.TT)(t))r=(0,g.Ow)(i,j);else{const e=(0,m.project)(i,x.A.WGS84),s=(0,g.Ow)(e,j);r=(0,m.project)(s,t)}else if(null!==t&&void 0!==t&&t.isWebMercator)r=(0,w.geodesicDensify)(i,j,"meters");else if((0,w.planarLength)(i,"meters")>=V(s)){const e=(0,m.project)(i,x.A.WGS84),s=(0,g.Ow)(e,j);r=(0,m.project)(s,t)}else r=i;return{measurement:null,fillGeometry:null,outlineGeometry:r}}e.push(e[0]);const i=new C.A({paths:[e],spatialReference:t}),r=new U.A({rings:[e],spatialReference:t});let n,a,o=null,l=null;if(null!==t&&void 0!==t&&t.isGeographic)if((0,g.TT)(t)){if(o=(0,g.Ow)(i,j),l=(0,g.Ow)(r,j),l=(0,w.simplify)(l),!l)return null;n=(0,g.l1)([i],"meters")[0],a=(0,g.qy)([l],"square-meters")[0]}else{const e=x.A.WGS84,s=(0,m.project)(i,e),u=(0,m.project)(r,e);if(o=(0,g.Ow)(s,j),l=(0,g.Ow)(u,j),l=(0,w.simplify)(l),!l)return null;n=(0,g.l1)([s],"meters")[0],a=(0,g.qy)([l],"square-meters")[0],o=(0,m.project)(o,t),l=(0,m.project)(l,t)}else if(null!==t&&void 0!==t&&t.isWebMercator){if(o=(0,w.geodesicDensify)(i,j,"meters"),l=(0,w.geodesicDensify)(r,j,"meters"),l=(0,w.simplify)(l),!l)return null;n=(0,w.geodesicLength)(i,"meters"),a=(0,w.geodesicArea)(l,"square-meters")}else{const e=(0,w.planarLength)(i,"meters");if(e>=V(s)){const e=x.A.WGS84,s=(0,m.project)(i,e),u=(0,m.project)(r,e);if(o=(0,g.Ow)(s,j),l=(0,g.Ow)(u,j),l=(0,w.simplify)(l),!l)return null;n=(0,g.l1)([s],"meters")[0],a=(0,g.qy)([l],"square-meters")[0],o=(0,m.project)(o,t),l=(0,m.project)(l,t)}else{if(o=i,l=(0,w.simplify)(r),!l)return null;n=e,a=(0,w.planarArea)(l,"square-meters")}}return{measurement:{geometry:l,area:a,perimeter:n},fillGeometry:l,outlineGeometry:o}}(this._vertices.map((e=>{let{coord:t}=e;return t})),this.view.spatialReference,this.geodesicDistanceThreshold);if(!t)return;const{measurement:s,fillGeometry:i,outlineGeometry:r}=t;this._set("measurement",s);const n=s?function(e,t,s){if(!t||!e)return null;const i={area:null,perimeter:null},{area:r,perimeter:n}=t;switch(s){case"metric":i.area=(0,y.zq)(e,r,"square-meters");break;case"imperial":i.area=(0,y.Sz)(e,r,"square-meters");break;default:{const t=(0,h.oU)(r,"square-meters",s);i.area=(0,y.zJ)(e,t,s);break}}const a=function(e){switch(e){case"metric":case"ares":case"hectares":return"metric";case"imperial":case"acres":return"imperial";case"square-inches":return"inches";case"square-feet":return"feet";case"square-yards":return"yards";case"square-miles":return"miles";case"square-us-feet":return"us-feet";case"square-meters":return"meters";case"square-kilometers":return"kilometers";case"square-millimeters":return"millimeters";case"square-centimeters":return"centimeters";case"square-decimeters":return"decimeters";default:return null}}(s);if(a)switch(a){case"metric":i.perimeter=(0,y.Ee)(e,n,"meters");break;case"imperial":i.perimeter=(0,y.tr)(e,n,"meters");break;default:{const t=(0,h.oU)(n,"meters",a);i.perimeter=(0,y.zJ)(e,t,a);break}}else i.perimeter="";return i}(this.messages,s,this.unit):null;if(this._set("measurementLabel",n),!i&&!r)return;let a,o,l;const{graphics:u}=this._measurementLayer,c=3===u.length,{effectiveTheme:d}=this.view;c?(a=u.at(0),o=u.at(1),l=u.at(2)):(a=new p.A({symbol:new D.A({color:(0,v._L)(d.accentColor,.3),outline:null})}),o=new p.A({symbol:new k.A({color:d.accentColor,width:2})}),l=new p.A({symbol:new q.A({color:d.textColor,font:new S.A({size:14,family:"sans-serif"}),haloColor:(0,v._L)((0,v.bJ)(d.textColor,v.pW.Low),.5),haloSize:2})}),u.removeAll(),u.addMany([a,o,l])),a.geometry=i,o.geometry=r,l.geometry=null===i||void 0===i?void 0:i.centroid,l.symbol.text=null!==(e=null===n||void 0===n?void 0:n.area)&&void 0!==e?e:""}};function R(e,t,s){const i={style:"circle",color:(0,v._L)(t.effectiveTheme.accentColor,.5),outline:{type:"simple-line",width:0}},r=new G.A({...i,size:8}),n=new G.A({...i,size:12}),a=new p.A({geometry:e,symbol:r});return new A.l({view:t,layer:s,graphic:a,focusedSymbol:n})}function B(e){if(!e)return!1;const{isGeographic:t,isWebMercator:s,isWGS84:i}=e;return t&&!i&&!(0,g.TT)(e)||!t&&!s}function V(e){return null!==e&&void 0!==e?e:1/0}(0,i._)([(0,n.MZ)()],z.prototype,"_drawActive",void 0),(0,i._)([(0,n.MZ)({readOnly:!0})],z.prototype,"cursor",null),(0,i._)([(0,n.MZ)({value:!0})],z.prototype,"editable",null),(0,i._)([(0,n.MZ)({type:Number})],z.prototype,"geodesicDistanceThreshold",void 0),(0,i._)([(0,n.MZ)({readOnly:!0})],z.prototype,"measurement",void 0),(0,i._)([(0,n.MZ)({readOnly:!0})],z.prototype,"measurementLabel",void 0),(0,i._)([(0,n.MZ)()],z.prototype,"messages",void 0),(0,i._)([(0,n.MZ)()],z.prototype,"unit",void 0),(0,i._)([(0,n.MZ)({constructOnly:!0})],z.prototype,"view",void 0),z=(0,i._)([(0,o.$)("esri.widgets.AreaMeasurement2D.AreaMeasurement2DTool")],z);var W=s(69124);let I=class extends W.j{constructor(e){super(e),this.supportedViewType="2d",this.unsupportedErrorMessage="AreaMeasurement2DViewModel is only supported in 2D views."}initialize(){this.addHandles([(0,c.wB)((()=>{var e;return null===(e=this.view)||void 0===e?void 0:e.spatialReference}),(()=>this.clear())),(0,c.wB)((()=>this.unit),(e=>{null!=this.tool&&(this.tool.unit=e)}),c.Vh),(0,c.wB)((()=>this.geodesicDistanceThreshold),(e=>{null!=this.tool&&(this.tool.geodesicDistanceThreshold=e)}),c.Vh)])}get geodesicDistanceThreshold(){return this._get("geodesicDistanceThreshold")}set geodesicDistanceThreshold(e){(0,u.Lx)(a.A.getLogger(this),"geodesicDistanceThreshold",{version:"4.29",warnOnce:!0}),this._set("geodesicDistanceThreshold",e)}get measurement(){return null!=this.tool?this.tool.measurement:null}get measurementLabel(){return null!=this.tool?this.tool.measurementLabel:null}get state(){var e;return this.disabled||null==this.view||null==this.view.spatialReference?"disabled":null!==(e=this.tool)&&void 0!==e&&e.measurement?this.tool.active?"measuring":"measured":"ready"}get unit(){return this._validateUnit(this.defaultUnit)}set unit(e){this._overrideIfSome("unit",this._validateUnit(e))}get unitOptions(){return h.z3}set unitOptions(e){this._overrideIfSome("unitOptions",this._validateUnits(e))}async start(){const e=this.view;null!=e&&(await(0,c.C_)((()=>e.ready)),B(e.spatialReference)&&await(0,m.load)()),this.createTool({interactive:!0})}clear(){this.removeTool()}constructTool(){return new z({view:this.view,visible:this.visible,geodesicDistanceThreshold:this.geodesicDistanceThreshold,unit:this.unit})}_validateUnit(e){const{unitOptions:t,defaultUnit:s}=this;return null!=e&&t.includes(e)?e:t.includes(s)?s:t.length>0?t[0]:s}_validateUnits(e){if(null==e)return[];const t=e.filter((e=>h.z3.includes(e)));return 0===t.length?h.z3.slice():t}};(0,i._)([(0,n.MZ)(d.q)],I.prototype,"defaultUnit",void 0),(0,i._)([(0,n.MZ)()],I.prototype,"geodesicDistanceThreshold",null),(0,i._)([(0,n.MZ)({readOnly:!0})],I.prototype,"measurement",null),(0,i._)([(0,n.MZ)({readOnly:!0})],I.prototype,"measurementLabel",null),(0,i._)([(0,n.MZ)({readOnly:!0})],I.prototype,"state",null),(0,i._)([(0,n.MZ)({type:String})],I.prototype,"unit",null),(0,i._)([(0,n.MZ)({type:[String]})],I.prototype,"unitOptions",null),I=(0,i._)([(0,o.$)("esri.widgets.AreaMeasurement2D.AreaMeasurement2DViewModel")],I);const E=I;var H=s(98108),$=s(15062),J=s(19371),K=(s(76099),s(63582)),N=s(54761);const Q="esri-area-measurement-2d",X={base:Q,newMeasurementButton:"".concat(Q,"__clear-button"),widgetIcon:$.T.measureArea};let F=class extends l.A{constructor(e,t){super(e,t),this.iconClass=X.widgetIcon,this.icon=null,this.messages=null,this.messagesUnits=null,this.messagesCommon=null,this.viewModel=new E}get active(){return this.viewModel.active}get label(){var e,t;return null!==(e=null===(t=this.messages)||void 0===t?void 0:t.widgetLabel)&&void 0!==e?e:""}set label(e){this._overrideIfSome("label",e)}get unit(){return this.viewModel.unit}set unit(e){this.viewModel.unit=e}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(e){this.viewModel.unitOptions=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}get visible(){return this.viewModel.visible}set visible(e){this.viewModel.visible=e}render(){const{messages:e,messagesCommon:t,messagesUnits:s,unit:i,unitOptions:n,viewModel:a,visible:o}=this,{active:l,measurementLabel:u,state:c,supported:h}=a;return(0,N.K)("div",{"aria-label":e.widgetLabel,class:this.classes(X.base,H.D.widget,H.D.panel),key:this,role:"presentation"},o?(0,N.K)(J.I,{active:l,measurementItems:[{key:"area",title:null===s||void 0===s?void 0:s.measures.area,value:null===u||void 0===u?void 0:u.area},{key:"perimeter",title:e.perimeter,value:null===u||void 0===u?void 0:u.perimeter}],messages:{...e,notApplicable:t.notApplicable},newMeasurementButtonClass:X.newMeasurementButton,state:c,supported:h,unit:i,unitOptions:n,onNewMeasurementClick:()=>{(0,r.QZ)(a.start())},onUnitChange:e=>{this.unit=e}}):null)}};(0,i._)([(0,n.MZ)({readOnly:!0})],F.prototype,"active",null),(0,i._)([(0,n.MZ)()],F.prototype,"iconClass",void 0),(0,i._)([(0,n.MZ)()],F.prototype,"icon",void 0),(0,i._)([(0,n.MZ)()],F.prototype,"label",null),(0,i._)([(0,n.MZ)(),(0,K.G)("esri/widgets/AreaMeasurement2D/t9n/AreaMeasurement2D")],F.prototype,"messages",void 0),(0,i._)([(0,n.MZ)(),(0,K.G)("esri/core/t9n/Units")],F.prototype,"messagesUnits",void 0),(0,i._)([(0,n.MZ)(),(0,K.G)("esri/t9n/common")],F.prototype,"messagesCommon",void 0),(0,i._)([(0,n.MZ)()],F.prototype,"uiStrings",void 0),(0,i._)([(0,n.MZ)()],F.prototype,"unit",null),(0,i._)([(0,n.MZ)()],F.prototype,"unitOptions",null),(0,i._)([(0,n.MZ)()],F.prototype,"view",null),(0,i._)([(0,n.MZ)({type:E})],F.prototype,"viewModel",void 0),(0,i._)([(0,n.MZ)({type:Boolean})],F.prototype,"visible",null),F=(0,i._)([(0,o.$)("esri.widgets.AreaMeasurement2D")],F);const P=F}}]);
//# sourceMappingURL=3235.c907ee86.chunk.js.map