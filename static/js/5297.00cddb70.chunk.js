"use strict";(self.webpackChunksc_tbm=self.webpackChunksc_tbm||[]).push([[5297],{55297:(t,e,o)=>{o.r(e),o.d(e,{executeAttachmentQuery:()=>c,fetchAttachments:()=>p,processAttachmentQueryResult:()=>d});var n=o(55171),r=o(3825),i=o(90534),a=o(78238),s=o(88084);function l(t){const e=t.toJSON();return e.attachmentTypes&&(e.attachmentTypes=e.attachmentTypes.join(",")),e.keywords&&(e.keywords=e.keywords.join(",")),e.globalIds&&(e.globalIds=e.globalIds.join(",")),e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.size&&(e.size=e.size.join(",")),e}function d(t,e){const o={};for(const r of e){const{parentObjectId:e,parentGlobalId:a,attachmentInfos:l}=r;for(const r of l){const{id:l}=r,d=(0,i.yM)((0,n.Y3)("".concat(t.path,"/").concat(e,"/attachments/").concat(l))),c=s.A.fromJSON(r);c.set({url:d,parentObjectId:e,parentGlobalId:a}),o[e]?o[e].push(c):o[e]=[c]}}return o}function c(t,e,o){let n={query:(0,a.z)({...t.query,f:"json",...l(e)})};return o&&(n={...o,...n,query:{...o.query,...n.query}}),(0,r.A)(t.path+"/queryAttachments",n).then((t=>t.data.attachmentGroups))}async function p(t,e,o){const{objectIds:n}=e,i=[];for(const a of n)i.push((0,r.A)(t.path+"/"+a+"/attachments",o));return Promise.all(i).then((t=>n.map(((e,o)=>({parentObjectId:e,attachmentInfos:t[o].data.attachmentInfos})))))}},88084:(t,e,o)=>{o.d(e,{A:()=>u});var n,r=o(35143),i=o(42553),a=o(46053),s=o(40565),l=(o(47249),o(81806),o(85842));function d(t){const{exifInfo:e,exifName:o,tagName:n}=t;if(!e||!o||!n)return null;const r=e.find((t=>t.name===o));return r?function(t){const{tagName:e,tags:o}=t;if(!o||!e)return null;const n=o.find((t=>t.name===e));return(null===n||void 0===n?void 0:n.value)||null}({tagName:n,tags:r.tags}):null}const c={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let p=n=class extends i.oY{constructor(t){super(t),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:t}=this,e=d({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:t});return c[e]||null}clone(){return new n({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};(0,r._)([(0,a.MZ)({type:String})],p.prototype,"contentType",void 0),(0,r._)([(0,a.MZ)()],p.prototype,"exifInfo",void 0),(0,r._)([(0,a.MZ)({readOnly:!0})],p.prototype,"orientationInfo",null),(0,r._)([(0,a.MZ)({type:s.jz})],p.prototype,"id",void 0),(0,r._)([(0,a.MZ)({type:String})],p.prototype,"globalId",void 0),(0,r._)([(0,a.MZ)({type:String})],p.prototype,"keywords",void 0),(0,r._)([(0,a.MZ)({type:String})],p.prototype,"name",void 0),(0,r._)([(0,a.MZ)({json:{read:!1}})],p.prototype,"parentGlobalId",void 0),(0,r._)([(0,a.MZ)({json:{read:!1}})],p.prototype,"parentObjectId",void 0),(0,r._)([(0,a.MZ)({type:s.jz})],p.prototype,"size",void 0),(0,r._)([(0,a.MZ)({json:{read:!1}})],p.prototype,"url",void 0),p=n=(0,r._)([(0,l.$)("esri.layers.support.AttachmentInfo")],p);const u=p}}]);
//# sourceMappingURL=5297.00cddb70.chunk.js.map