"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[9119],{69119:(t,e,n)=>{n.r(e),n.d(e,{executeForTopIds:()=>u});var r=n(54994),o=n(10415),l=n(58672);async function u(t,e,n){const u=(0,r.Dl)(t);return(await(0,o.KW)(u,l.A.from(e),{...n})).data.objectIds}},10415:(t,e,n)=>{n.d(e,{$K:()=>m,KW:()=>p,Yb:()=>a,xs:()=>F});var r=n(3825),o=n(90534),l=n(19902),u=n(1438),i=n(80963),s=n(78238),d=n(57831);const y="Layer does not support extent calculation.";function c(t,e){var n,r;const o=t.geometry,u=t.toJSON(),s=u;if(null!=o&&(s.geometry=JSON.stringify(o),s.geometryType=(0,l.$B)(o),s.inSR=(0,i.YX)(o.spatialReference)),null!==(n=u.topFilter)&&void 0!==n&&n.groupByFields&&(s.topFilter.groupByFields=u.topFilter.groupByFields.join(",")),null!==(r=u.topFilter)&&void 0!==r&&r.orderByFields&&(s.topFilter.orderByFields=u.topFilter.orderByFields.join(",")),u.topFilter&&(s.topFilter=JSON.stringify(s.topFilter)),u.objectIds&&(s.objectIds=u.objectIds.join(",")),u.orderByFields&&(s.orderByFields=u.orderByFields.join(",")),u.outFields&&!(null!==e&&void 0!==e&&e.returnCountOnly||null!==e&&void 0!==e&&e.returnExtentOnly||null!==e&&void 0!==e&&e.returnIdsOnly)?u.outFields.includes("*")?s.outFields="*":s.outFields=u.outFields.join(","):delete s.outFields,u.outSR?s.outSR=(0,i.YX)(u.outSR):o&&u.returnGeometry&&(s.outSR=s.inSR),u.returnGeometry&&delete u.returnGeometry,u.timeExtent){const t=u.timeExtent,{start:e,end:n}=t;null==e&&null==n||(s.time=e===n?e:"".concat(null!==e&&void 0!==e?e:"null",",").concat(null!==n&&void 0!==n?n:"null")),delete u.timeExtent}return s}async function a(t,e,n,r){const o=await f(t,e,"json",r);return(0,d.q)(e,n,o.data),o}async function p(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:f(t,e,"json",n,{returnIdsOnly:!0})}async function m(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:f(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(y);if(e.hasOwnProperty("count"))throw new Error(y);return t}))}function F(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):f(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function f(t,e,n){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const d="string"==typeof t?(0,o.An)(t):t,y=e.geometry?[e.geometry]:[];return l.responseType="pbf"===n?"array-buffer":"json",(0,u.el)(y,null,l).then((t=>{const u=null===t||void 0===t?void 0:t[0];null!=u&&((e=e.clone()).geometry=u);const y=(0,s.z)({...d.query,f:n,...i,...c(e,i)});return(0,r.A)((0,o.fj)(d.path,"queryTopFeatures"),{...l,query:{...y,...l.query}})}))}}}]);
//# sourceMappingURL=9119.5eefa523.chunk.js.map