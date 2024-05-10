"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[2003],{30674:(e,n,t)=>{t.d(n,{A:()=>f});var l=t(35143),a=t(45802),i=t(42553),o=t(46053),r=(t(81806),t(76460),t(47249),t(6409)),s=t(85842);const u=new a.J({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),c=new a.J({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let d=class extends i.oY{constructor(e){super(e),this.type="class-breaks-definition",this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};(0,l._)([(0,r.e)({classBreaksDef:"class-breaks-definition"})],d.prototype,"type",void 0),(0,l._)([(0,o.MZ)({json:{write:!0}})],d.prototype,"breakCount",void 0),(0,l._)([(0,o.MZ)({json:{write:!0}})],d.prototype,"classificationField",void 0),(0,l._)([(0,o.MZ)({type:String,json:{read:u.read,write:u.write}})],d.prototype,"classificationMethod",void 0),(0,l._)([(0,o.MZ)({json:{write:!0}})],d.prototype,"normalizationField",void 0),(0,l._)([(0,o.MZ)({json:{read:c.read,write:c.write}})],d.prototype,"normalizationType",void 0),(0,l._)([(0,o.MZ)({value:null,json:{write:!0}})],d.prototype,"standardDeviationInterval",null),(0,l._)([(0,o.MZ)({value:null,json:{write:!0}})],d.prototype,"definedInterval",null),d=(0,l._)([(0,s.$)("esri.rest.support.ClassBreaksDefinition")],d);const f=d},15498:(e,n,t)=>{t.d(n,{t:()=>o});var l=t(76460);const a=()=>l.A.getLogger("esri.rest.support.generateRendererUtils");function i(e,n){return Number(e.toFixed(n))}function o(e){const{normalizationTotal:n}=e;return{classBreaks:r(e),normalizationTotal:n}}function r(e){var n;const t=e.definition,{classificationMethod:l,normalizationType:a,definedInterval:o}=t,r=null!==(n=t.breakCount)&&void 0!==n?n:1,d=[];let f=e.values;if(0===f.length)return[];f=f.sort(((e,n)=>e-n));const m=f[0],p=f[f.length-1];if("equal-interval"===l)if(f.length>=r){const e=(p-m)/r;let n=m;for(let t=1;t<r;t++){const l=i(m+t*e,6);d.push({minValue:n,maxValue:l,label:s(n,l,a)}),n=l}d.push({minValue:n,maxValue:p,label:s(n,p,a)})}else f.forEach((e=>{d.push({minValue:e,maxValue:e,label:s(e,e,a)})}));else if("natural-breaks"===l){const n=u(f),t=e.valueFrequency||n.valueFrequency,l=c(n.uniqueValues,t,r);let o=m;for(let e=1;e<r;e++)if(n.uniqueValues.length>e){const t=i(n.uniqueValues[l[e]],6);d.push({minValue:o,maxValue:t,label:s(o,t,a)}),o=t}d.push({minValue:o,maxValue:p,label:s(o,p,a)})}else if("quantile"===l)if(f.length>=r&&m!==p){let e=m,n=Math.ceil(f.length/r),t=0;for(let l=1;l<r;l++){let i=n+t-1;i>f.length&&(i=f.length-1),i<0&&(i=0),d.push({minValue:e,maxValue:f[i],label:s(e,f[i],a)}),e=f[i],t+=n,n=Math.ceil((f.length-t)/(r-l))}d.push({minValue:e,maxValue:p,label:s(e,p,a)})}else{let e=-1;for(let n=0;n<f.length;n++){const t=f[n];t!==e&&(e=t,d.push({minValue:e,maxValue:t,label:s(e,t,a)}),e=t)}}else if("standard-deviation"===l){const e=function(e){let n=0;for(let t=0;t<e.length;t++)n+=e[t];return n/=e.length,n}(f),n=function(e,n){let t=0;for(let l=0;l<e.length;l++){const a=e[l];t+=(a-n)*(a-n)}return t/=e.length,Math.sqrt(t)}(f,e);if(0===n)d.push({minValue:f[0],maxValue:f[0],label:s(f[0],f[0],a)});else{const t=function(e,n,t,l,a){let i=Math.max(l-e,n-l)/a/t;return i=i>=1?1:i>=.5?.5:.25,i}(m,p,r,e,n)*n;let l=0,o=m;for(let n=r;n>=1;n--){const r=i(e-(n-.5)*t,6);d.push({minValue:o,maxValue:r,label:s(o,r,a)}),o=r,l++}let u=i(e+.5*t,6);d.push({minValue:o,maxValue:u,label:s(o,u,a)}),o=u,l++;for(let n=1;n<=r;n++)u=l===2*r?p:i(e+(n+.5)*t,6),d.push({minValue:o,maxValue:u,label:s(o,u,a)}),o=u,l++}}else if("defined-interval"===l){if(!o)return d;const e=f[0],n=f[f.length-1],t=Math.ceil((n-e)/o);let l=e;for(let r=1;r<t;r++){const n=i(e+r*o,6);d.push({minValue:l,maxValue:n,label:s(l,n,a)}),l=n}d.push({minValue:l,maxValue:n,label:s(l,n,a)})}return d}function s(e,n,t){let l=null;return l=e===n?t&&"percent-of-total"===t?e+"%":e.toString():t&&"percent-of-total"===t?e+"% - "+n+"%":e+" - "+n,l}function u(e){const n=[],t=[];let l=Number.MIN_VALUE,a=1,i=-1;for(let o=0;o<e.length;o++){const r=e[o];r===l?(a++,t[i]=a):null!==r&&(n.push(r),l=r,a=1,t.push(a),i++)}return{uniqueValues:n,valueFrequency:t}}function c(e,n,t){const l=e.length,a=[];t>l&&(t=l);for(let o=0;o<t;o++)a.push(Math.round(o*l/t-1));a.push(l-1);let i=d(a,e,n,t);return function(e,n,t,l,a,i){let o=0,r=0,s=0,u=0,c=!0;for(let d=0;d<2&&c;d++){0===d&&(c=!1);for(let d=0;d<i-1;d++)for(;t[d+1]+1!==t[d+2];){t[d+1]=t[d+1]+1;const i=f(d,t,l,a);s=i.sbMean,o=i.sbSdcm;const m=f(d+1,t,l,a);if(u=m.sbMean,r=m.sbSdcm,!(o+r<n[d]+n[d+1])){t[d+1]=t[d+1]-1;break}n[d]=o,n[d+1]=r,e[d]=s,e[d+1]=u,c=!0}for(let d=i-1;d>0;d--)for(;t[d]!==t[d-1]+1;){t[d]=t[d]-1;const i=f(d-1,t,l,a);s=i.sbMean,o=i.sbSdcm;const m=f(d,t,l,a);if(u=m.sbMean,r=m.sbSdcm,!(o+r<n[d-1]+n[d])){t[d]=t[d]+1;break}n[d-1]=o,n[d]=r,e[d-1]=s,e[d]=u,c=!0}}return c}(i.mean,i.sdcm,a,e,n,t)&&(i=d(a,e,n,t)),a}function d(e,n,t,l){let a=[],i=[],o=[],r=0;const s=[],u=[];for(let p=0;p<l;p++){const l=f(p,e,n,t);s.push(l.sbMean),u.push(l.sbSdcm),r+=u[p]}let c,d=r,m=!0;for(;m||r<d;){m=!1,a=[];for(let n=0;n<l;n++)a.push(e[n]);for(let t=0;t<l;t++)for(let a=e[t]+1;a<=e[t+1];a++)if(c=n[a],t>0&&a!==e[t+1]&&Math.abs(c-s[t])>Math.abs(c-s[t-1]))e[t]=a;else if(t<l-1&&e[t]!==a-1&&Math.abs(c-s[t])>Math.abs(c-s[t+1])){e[t+1]=a-1;break}d=r,r=0,i=[],o=[];for(let a=0;a<l;a++){i.push(s[a]),o.push(u[a]);const l=f(a,e,n,t);s[a]=l.sbMean,u[a]=l.sbSdcm,r+=u[a]}}if(r>d){for(let n=0;n<l;n++)e[n]=a[n],s[n]=i[n],u[n]=o[n];r=d}return{mean:s,sdcm:u}}function f(e,n,t,l){let i=0,o=0;for(let a=n[e]+1;a<=n[e+1];a++){const e=l[a];i+=t[a]*e,o+=e}o<=0&&a().warn("Exception in Natural Breaks calculation");const r=i/o;let s=0;for(let a=n[e]+1;a<=n[e+1];a++)s+=l[a]*(t[a]-r)**2;return{sbMean:r,sbSdcm:s}}},72003:(e,n,t)=>{t.d(n,{$y:()=>Z,FM:()=>g,G_:()=>b,Rw:()=>E,Vb:()=>v,b3:()=>C,gJ:()=>p,jM:()=>O,lv:()=>_,oZ:()=>w,qg:()=>V,z9:()=>h,zS:()=>B});var l=t(30674),a=t(15498);const i="<Null>",o="equal-interval",r=1,s=5,u=10,c=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,d=new Set(["esriFieldTypeDate","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeOID","esriFieldTypeBigInteger"]),f=new Set(["esriFieldTypeTimeOnly","esriFieldTypeDateOnly"]),m=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function p(e){return null==e||"string"==typeof e&&!e?i:e}function v(e){const n=null!=e.normalizationField||null!=e.normalizationType,t=null!=e.minValue||null!=e.maxValue,l=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!t&&!l}function h(e){const n=e.returnDistinct?[...new Set(e.values)]:e.values,t=n.filter((e=>null!=e)).sort(),l=t.length,a={count:l,min:t[0],max:t[l-1]};return e.supportsNullCount&&(a.nullcount=n.length-l),e.percentileParams&&(a.median=V(n,e.percentileParams)),a}function b(e){const{values:n,useSampleStdDev:t,supportsNullCount:l}=e;let a=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,o=null,r=null,s=null,u=null,c=0;const d=null==e.minValue?-1/0:e.minValue,f=null==e.maxValue?1/0:e.maxValue;for(const p of n)Number.isFinite(p)?p>=d&&p<=f&&(o=null===o?p:o+p,a=Math.min(a,p),i=Math.max(i,p),c++):"string"==typeof p&&c++;if(c&&null!=o){r=o/c;let e=0;for(const t of n)Number.isFinite(t)&&t>=d&&t<=f&&(e+=(t-r)**2);u=t?c>1?e/(c-1):0:c>0?e/c:0,s=Math.sqrt(u)}else a=null,i=null;const m={avg:r,count:c,max:i,min:a,stddev:s,sum:o,variance:u};return l&&(m.nullcount=n.length-c),e.percentileParams&&(m.median=V(n,e.percentileParams)),m}function V(e,n){const{fieldType:t,value:l,orderBy:a,isDiscrete:i}=n,o=g(t,"desc"===a);if(0===(e=[...e].filter((e=>null!=e)).sort(((e,n)=>o(e,n)))).length)return null;if(l<=0)return e[0];if(l>=1)return e[e.length-1];const r=(e.length-1)*l,s=Math.floor(r),u=s+1,c=r%1,d=e[s],f=e[u];return u>=e.length||i||"string"==typeof d||"string"==typeof f?d:d*(1-c)+f*c}function g(e,n){if(e){if(d.has(e))return S(n);if(f.has(e))return D(n,!1);if("esriFieldTypeTimestampOffset"===e)return function(e){return e?M:T}(n);const t=D(n,!0);if("esriFieldTypeString"===e)return t;if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e)return(e,n)=>t(N(e),N(n))}const t=n?1:-1,l=S(n),a=D(n,!0);return(e,n)=>"number"==typeof e&&"number"==typeof n?l(e,n):"string"==typeof e&&"string"==typeof n?a(e,n):t}const y=(e,n)=>null==e?null==n?0:1:null==n?-1:null,x=(e,n)=>null==e?null==n?0:-1:null==n?1:null;const T=(e,n)=>{var t;return null!==(t=x(e,n))&&void 0!==t?t:e===n?0:new Date(e).getTime()-new Date(n).getTime()},M=(e,n)=>{var t;return null!==(t=y(e,n))&&void 0!==t?t:e===n?0:new Date(n).getTime()-new Date(e).getTime()};const F=(e,n)=>{var t;return null!==(t=x(e,n))&&void 0!==t?t:e===n?0:e<n?-1:1},z=(e,n)=>{var t;return null!==(t=y(e,n))&&void 0!==t?t:e===n?0:e<n?1:-1};function D(e,n){if(!n)return e?z:F;const t=function(e){return e?y:x}(e);return e?(e,n)=>{const l=t(e,n);return null!=l?l:(e=e.toUpperCase())>(n=n.toUpperCase())?-1:e<n?1:0}:(e,n)=>{const l=t(e,n);return null!=l?l:(e=e.toUpperCase())<(n=n.toUpperCase())?-1:e>n?1:0}}const I=(e,n)=>{var t;return null!==(t=y(e,n))&&void 0!==t?t:n-e},k=(e,n)=>{var t;return null!==(t=x(e,n))&&void 0!==t?t:e-n};function S(e){return e?I:k}function N(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function w(e,n){let t;for(t in e)m.includes(t)&&(Number.isFinite(e[t])||(e[t]=null));return n?(["avg","stddev","variance"].forEach((n=>{var t;null!=e[n]&&(e[n]=Math.ceil(null!==(t=e[n])&&void 0!==t?t:0))})),e):e}function C(e){const n={};for(let t of e)(null==t||"string"==typeof t&&""===t.trim())&&(t=null),null==n[t]?n[t]={count:1,data:t}:n[t].count++;return{count:n}}function q(e){return"coded-value"!==(null===e||void 0===e?void 0:e.type)?[]:e.codedValues.map((e=>e.code))}function _(e,n,t,l){const a=e.count,i=[];if(t&&n){const e=[],t=q(n[0]);for(const a of t)if(n[1]){const t=q(n[1]);for(const i of t)if(n[2]){const t=q(n[2]);for(const n of t)e.push("".concat(p(a)).concat(l).concat(p(i)).concat(l).concat(p(n)))}else e.push("".concat(p(a)).concat(l).concat(p(i)))}else e.push(a);for(const n of e)a.hasOwnProperty(n)||(a[n]={data:n,count:0})}for(const o in a){const e=a[o];i.push({value:e.data,count:e.count,label:e.label})}return{uniqueValueInfos:i}}function B(e,n,t,l){let a=null;switch(n){case"log":0!==e&&(a=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(a=e/l*100);break;case"field":Number.isFinite(t)&&0!==t&&(a=e/t);break;case"natural-log":e>0&&(a=Math.log(e));break;case"square-root":e>0&&(a=e**.5)}return a}function E(e,n){const t=j({field:n.field,normalizationType:n.normalizationType,normalizationField:n.normalizationField,classificationMethod:n.classificationMethod,standardDeviationInterval:n.standardDeviationInterval,breakCount:n.numClasses||s});return e=function(e,n,t){const l=null!==n&&void 0!==n?n:-1/0,a=null!==t&&void 0!==t?t:1/0;return e.filter((e=>Number.isFinite(e)&&e>=l&&e<=a))}(e,n.minValue,n.maxValue),(0,a.t)({definition:t,values:e,normalizationTotal:n.normalizationTotal})}function j(e){const{breakCount:n,field:t,normalizationField:a,normalizationType:i}=e,s=e.classificationMethod||o,u="standard-deviation"===s?e.standardDeviationInterval||r:void 0;return new l.A({breakCount:n,classificationField:t,classificationMethod:s,normalizationField:"field"===i?a:void 0,normalizationType:i,standardDeviationInterval:u})}function O(e,n){var t,l;let a=e.classBreaks;const i=a.length,o=null===(t=a[0])||void 0===t?void 0:t.minValue,r=null===(l=a[i-1])||void 0===l?void 0:l.maxValue,s="standard-deviation"===n,u=c;return a=a.map((e=>{const n=e.label,t={minValue:e.minValue,maxValue:e.maxValue,label:n};if(s&&n){var l;const e=n.match(u),a=null!==(l=null===e||void 0===e?void 0:e.map((e=>+e.trim())))&&void 0!==l?l:[];2===a.length?(t.minStdDev=a[0],t.maxStdDev=a[1],a[0]<0&&a[1]>0&&(t.hasAvg=!0)):1===a.length&&(n.includes("<")?(t.minStdDev=null,t.maxStdDev=a[0]):n.includes(">")&&(t.minStdDev=a[0],t.maxStdDev=null))}return t})),{minValue:o,maxValue:r,classBreakInfos:a,normalizationTotal:e.normalizationTotal}}function Z(e,n){var t,l;const a=P(e,n);if(null==a.min&&null==a.max)return{bins:[],minValue:a.min,maxValue:a.max,normalizationTotal:n.normalizationTotal};const i=a.intervals,o=null!==(t=a.min)&&void 0!==t?t:0,r=null!==(l=a.max)&&void 0!==l?l:0,s=i.map(((e,n)=>({minValue:i[n][0],maxValue:i[n][1],count:0})));for(const u of e)if(null!=u&&u>=o&&u<=r){const e=U(i,u);e>-1&&s[e].count++}return{bins:s,minValue:o,maxValue:r,normalizationTotal:n.normalizationTotal}}function P(e,n){const{field:t,classificationMethod:l,standardDeviationInterval:a,normalizationType:i,normalizationField:o,normalizationTotal:r,minValue:s,maxValue:c}=n,d=n.numBins||u;let f=null,m=null,p=null;if(l&&"equal-interval"!==l||i){const{classBreaks:n}=E(e,{field:t,normalizationType:i,normalizationField:o,normalizationTotal:r,classificationMethod:l,standardDeviationInterval:a,minValue:s,maxValue:c,numClasses:d});f=n[0].minValue,m=n[n.length-1].maxValue,p=n.map((e=>[e.minValue,e.maxValue]))}else{var h,V;if(null!=s&&null!=c)f=s,m=c;else{var g,y;const n=b({values:e,minValue:s,maxValue:c,useSampleStdDev:!i,supportsNullCount:v({normalizationType:i,normalizationField:o,minValue:s,maxValue:c})});f=null!==(g=n.min)&&void 0!==g?g:null,m=null!==(y=n.max)&&void 0!==y?y:null}p=function(e,n,t){const l=(n-e)/t,a=[];let i,o=e;for(let r=1;r<=t;r++)i=o+l,i=Number(i.toFixed(16)),a.push([o,r===t?n:i]),o=i;return a}(null!==(h=f)&&void 0!==h?h:0,null!==(V=m)&&void 0!==V?V:0,d)}return{min:f,max:m,intervals:p}}function U(e,n){let t=-1;for(let l=e.length-1;l>=0;l--)if(n>=e[l][0]){t=l;break}return t}}}]);
//# sourceMappingURL=2003.1703b836.chunk.js.map