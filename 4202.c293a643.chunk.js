(self.webpackChunkback=self.webpackChunkback||[]).push([[4202,475],{29327:g=>{function u(s,t,l,_){for(var E=l-1,P=s.length;++E<P;)if(_(s[E],t))return E;return-1}g.exports=u},20920:(g,u,s)=>{var t=s(87864),l=s(80151),_=s(29327),E=s(52689),P=s(76299),L=Array.prototype,h=L.splice;function v(i,p,A,H){var Z=H?_:l,Y=-1,z=p.length,r=i;for(i===p&&(p=P(p)),A&&(r=t(i,E(A)));++Y<z;)for(var W=0,R=p[Y],S=A?A(R):R;(W=Z(r,S,W,H))>-1;)r!==i&&h.call(r,W,1),h.call(i,W,1);return i}g.exports=v},34542:(g,u,s)=>{var t=s(87864),l=s(45353),_=s(29884),E=s(82261);function P(L,h){var v=E(L)?t:_;return v(L,l(h,3))}g.exports=P},92173:(g,u,s)=>{var t=s(39226),l=s(76610),_=t(l);g.exports=_},76610:(g,u,s)=>{var t=s(20920);function l(_,E){return _&&_.length&&E&&E.length?t(_,E):_}g.exports=l},61468:(g,u,s)=>{var t=s(52196);function l(_){var E=_==null?0:_.length;return E?t(_,1,E):[]}g.exports=l},94202:(g,u,s)=>{"use strict";s.d(u,{ProtectedCreateView:()=>cs});var t=s(92132),l=s(55506),_=s(82437),E=s(92495),P=s(60475),L=s(21272),h=s(55151),v=s(79077),i=s(88880),p=s(15126),A=s(63299),H=s(67014),Z=s(59080),Y=s(79275),z=s(14718),r=s(61535),W=s(5790),R=s(12083),S=s(35223),N=s(5409),b=s(74930),k=s(2600),K=s(48940),os=s(41286),is=s(56336),ls=s(13426),_s=s(84624),ds=s(77965),Q=s(54257),Es=s(71210),V=s(51187),rs=s(39404),ss=s(58692),As=s(501),Ts=s(57646),hs=s(23120),ms=s(44414),gs=s(25962),ps=s(14664),Cs=s(42588),Is=s(90325),vs=s(62785),us=s(87443),Ls=s(41032),Rs=s(22957),ys=s(93179),Us=s(73055),Bs=s(15747),fs=s(85306),xs=s(26509),Ws=s(32058),Ks=s(81185),js=s(82261),Ss=s(13262),Ns=s(83676),ks=s(34542),Vs=s(61468),$s=s(24092),Fs=s(92173);const cs=()=>{const Ps=(0,_.d4)(E.s);return(0,t.jsx)(l.kz,{permissions:Ps.settings?.["api-tokens"].create,children:(0,t.jsx)(P.w,{})})}},60475:(g,u,s)=>{"use strict";s.d(u,{ProtectedEditView:()=>Et,w:()=>Os});var t=s(92132),l=s(21272),_=s(94061),E=s(83997),P=s(30893),L=s(90151),h=s(68074),v=s(38413),i=s(55356),p=s(85963),A=s(4198),H=s(57237),Z=s(60888),Y=s(44604),z=s(4181),r=s(55506),W=s(61535),R=s(54894),S=s(17703),N=s(88880),b=s(13262),k=s(99831),K=s(83676),os=s(95267),is=s(54514),ls=s(20415),_s=s(34542),ds=s(61468),Q=s(63891),Es=s(24092),V=s(12083),rs=s(88761),ss=s(92173),As=s(15126),Ts=s(63299),hs=s(67014),ms=s(59080),gs=s(79275),ps=s(14718),Cs=s(82437),Is=s(5790),vs=s(35223),us=s(5409),Ls=s(74930),Rs=s(2600),ys=s(48940),Us=s(41286),Bs=s(56336),fs=s(13426),xs=s(84624),Ws=s(77965),Ks=s(54257),js=s(71210),Ss=s(51187),Ns=s(39404),ks=s(58692),Vs=s(501),$s=s(57646),Fs=s(23120),cs=s(44414),Ps=s(25962),ht=s(14664),mt=s(42588),gt=s(90325),pt=s(62785),Ct=s(87443),It=s(41032),vt=s(22957),ut=s(93179),Lt=s(73055),Rt=s(15747),yt=s(85306),Ut=s(26509),Bt=s(32058),ft=s(81185),xt=s(82261);const Gs=N.n.injectEndpoints({endpoints:n=>({getPermissions:n.query({query:()=>"/admin/content-api/permissions",transformResponse:e=>e.data}),getRoutes:n.query({query:()=>"/admin/content-api/routes",transformResponse:e=>e.data})}),overrideExisting:!1}),{useGetPermissionsQuery:Hs,useGetRoutesQuery:Ys}=Gs,[zs,Qs]=(0,os.q)("ApiTokenPermissionsContext"),Js=({children:n,...e})=>(0,t.jsx)(zs,{...e,children:n}),ts=()=>Qs("useApiTokenPermissions"),Xs=({errors:n={},onChange:e,canEditInputs:a,isCreating:c,values:o={},apiToken:O={},onDispatch:d,setHasChangedPermissions:x})=>{const{formatMessage:m}=(0,R.A)(),f=({target:{value:y}})=>{x(!1),y==="full-access"&&d({type:"SELECT_ALL_ACTIONS"}),y==="read-only"&&d({type:"ON_CHANGE_READ_ONLY"})},J=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return(0,t.jsx)(_.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(E.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(P.o,{variant:"delta",as:"h2",children:m({id:"global.details",defaultMessage:"Details"})}),(0,t.jsxs)(L.x,{gap:5,children:[(0,t.jsx)(h.E,{col:6,xs:12,children:(0,t.jsx)(K.T,{error:n.name,value:o.name,canEditInputs:a,onChange:e})},"name"),(0,t.jsx)(h.E,{col:6,xs:12,children:(0,t.jsx)(K.a,{error:n.description,value:o.description,canEditInputs:a,onChange:e})},"description"),(0,t.jsx)(h.E,{col:6,xs:12,children:(0,t.jsx)(K.L,{isCreating:c,error:n.lifespan,value:o.lifespan,onChange:e,token:O})},"lifespan"),(0,t.jsx)(h.E,{col:6,xs:12,children:(0,t.jsx)(K.b,{value:o.type,error:n.type,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:y=>{f({target:{value:y}}),e({target:{name:"type",value:y}})},options:J,canEditInputs:a})},"type")]})]})})},Zs=({apiTokenName:n=null})=>{const{formatMessage:e}=(0,R.A)();return(0,r.L4)(),(0,t.jsxs)(v.g,{"aria-busy":"true",children:[(0,t.jsx)(r.x7,{name:"API Tokens"}),(0,t.jsx)(i.Q,{primaryAction:(0,t.jsx)(p.$,{disabled:!0,startIcon:(0,t.jsx)(is.A,{}),type:"button",size:"L",children:e({id:"global.save",defaultMessage:"Save"})}),title:n||e({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),(0,t.jsx)(A.s,{children:(0,t.jsx)(r.Bl,{})})]})},bs=n=>{switch(n){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},ws=(0,Q.Ay)(_.a)`
  margin: -1px;
  border-radius: ${({theme:n})=>n.spaces[1]} 0 0 ${({theme:n})=>n.spaces[1]};
`,qs=({route:n={handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}})=>{const{formatMessage:e}=(0,R.A)(),{method:a,handler:c,path:o}=n,O=o?ds(o.split("/")):[],[d="",x=""]=c?c.split("."):[],m=bs(n.method);return(0,t.jsxs)(E.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,t.jsxs)(P.o,{variant:"delta",as:"h3",children:[e({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",(0,t.jsx)("span",{children:d}),(0,t.jsxs)(P.o,{variant:"delta",textColor:"primary600",children:[".",x]})]}),(0,t.jsxs)(E.s,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[(0,t.jsx)(ws,{background:m.background,borderColor:m.border,padding:2,children:(0,t.jsx)(P.o,{fontWeight:"bold",textColor:m.text,children:a})}),(0,t.jsx)(_.a,{paddingLeft:2,paddingRight:2,children:_s(O,f=>(0,t.jsxs)(P.o,{textColor:f.includes(":")?"neutral600":"neutral900",children:["/",f]},f))})]})]})},st=()=>{const{value:{selectedAction:n,routes:e}}=ts(),{formatMessage:a}=(0,R.A)(),c=n?.split(".")[0];return(0,t.jsx)(h.E,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},children:n?(0,t.jsx)(E.s,{direction:"column",alignItems:"stretch",gap:2,children:c&&c in e&&e[c].map(o=>o.config.auth?.scope?.includes(n)||o.handler===n?(0,t.jsx)(qs,{route:o},o.handler):null)}):(0,t.jsxs)(E.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,t.jsx)(P.o,{variant:"delta",as:"h3",children:a({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})}),(0,t.jsx)(P.o,{as:"p",textColor:"neutral600",children:a({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},Ms=(0,Q.AH)`
  background: ${n=>n.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,tt=(0,Q.Ay)(_.a)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${n=>n.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${n=>n.isActive&&Ms}
  &:hover {
    ${Ms}
  }
`,et=Q.Ay.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:n})=>n.colors.neutral150};
`,nt=({controllers:n=[],label:e,orderNumber:a=0,disabled:c=!1,onExpanded:o=()=>null,indexExpandendCollapsedContent:O=null})=>{const{value:{onChangeSelectAll:d,onChange:x,selectedActions:m,setSelectedAction:f,selectedAction:J}}=ts(),[y,w]=l.useState(!1),{formatMessage:X}=(0,R.A)(),C=()=>{w(T=>!T),o(a)};l.useEffect(()=>{O!==null&&O!==a&&y&&w(!1)},[O,a,y]);const Ds=T=>T===J;return(0,t.jsxs)(H.n,{expanded:y,onToggle:C,variant:a%2?"primary":"secondary",children:[(0,t.jsx)(Z.P,{title:Es(e)}),(0,t.jsx)(Y.u,{children:n?.map(T=>{const U=T.actions.every(I=>m.includes(I.actionId)),B=T.actions.some(I=>m.includes(I.actionId));return(0,t.jsxs)(_.a,{children:[(0,t.jsxs)(E.s,{justifyContent:"space-between",alignItems:"center",padding:4,children:[(0,t.jsx)(_.a,{paddingRight:4,children:(0,t.jsx)(P.o,{variant:"sigma",textColor:"neutral600",children:T?.controller})}),(0,t.jsx)(et,{}),(0,t.jsx)(_.a,{paddingLeft:4,children:(0,t.jsx)(z.S,{value:U,indeterminate:!U&&B,onValueChange:()=>{d({target:{value:[...T.actions]}})},disabled:c,children:X({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,t.jsx)(L.x,{gap:4,padding:4,children:T?.actions&&T?.actions.map(I=>(0,t.jsx)(h.E,{col:6,children:(0,t.jsxs)(tt,{isActive:Ds(I.actionId),padding:2,hasRadius:!0,children:[(0,t.jsx)(z.S,{value:m.includes(I.actionId),name:I.actionId,onValueChange:()=>{x({target:{value:I.actionId}})},disabled:c,children:I.action}),(0,t.jsx)("button",{type:"button","data-testid":"action-cog",onClick:()=>f({target:{value:I.actionId}}),style:{display:"inline-flex",alignItems:"center"},children:(0,t.jsx)(ls.A,{})})]})},I.actionId))})]},`${e}.${T?.controller}`)})})]})},at=({section:n=null,...e})=>{const[a,c]=l.useState(null),o=O=>c(O);return(0,t.jsx)(_.a,{padding:4,background:"neutral0",children:n&&n.map((O,d)=>(0,t.jsx)(nt,{label:O.label,controllers:O.controllers,orderNumber:d,indexExpandendCollapsedContent:a,onExpanded:o,...e},O.apiId))})},ot=({...n})=>{const{value:{data:e}}=ts(),{formatMessage:a}=(0,R.A)();return(0,t.jsxs)(L.x,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[(0,t.jsxs)(h.E,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,t.jsxs)(E.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,t.jsx)(P.o,{variant:"delta",as:"h2",children:a({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})}),(0,t.jsx)(P.o,{as:"p",textColor:"neutral600",children:a({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."})})]}),e?.permissions&&(0,t.jsx)(at,{section:e?.permissions,...n})]}),(0,t.jsx)(st,{})]})},it=V.Ik().shape({name:V.Yj().max(100).required(r.iW.required),type:V.Yj().oneOf(["read-only","full-access","custom"]).required(r.iW.required),description:V.Yj().nullable(),lifespan:V.ai().integer().min(0).nullable().defined(r.iW.required)}),lt=n=>{const e={allActionsIds:[],permissions:[]};return e.permissions=Object.entries(n).map(([a,c])=>({apiId:a,label:a.split("::")[1],controllers:Object.keys(c.controllers).map(o=>({controller:o,actions:o in c.controllers?c.controllers[o].map(O=>{const d=`${a}.${o}.${O}`;return a.includes("api::")&&e.allActionsIds.push(d),{action:O,actionId:d}}).flat():[]})).flat()})),e},_t={data:{allActionsIds:[],permissions:[]},routes:{},selectedAction:"",selectedActions:[]},dt=(n,e)=>(0,rs.Ay)(n,a=>{switch(e.type){case"ON_CHANGE":{a.selectedActions.includes(e.value)?ss(a.selectedActions,e.value):a.selectedActions.push(e.value);break}case"SELECT_ALL_IN_PERMISSION":{e.value.every(o=>a.selectedActions.includes(o.actionId))?e.value.forEach(o=>{ss(a.selectedActions,o.actionId)}):e.value.forEach(o=>{a.selectedActions.push(o.actionId)});break}case"SELECT_ALL_ACTIONS":{a.selectedActions=[...a.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const c=a.data.allActionsIds.filter(o=>o.includes("find")||o.includes("findOne"));a.selectedActions=[...c];break}case"UPDATE_PERMISSIONS_LAYOUT":{a.data=lt(e.value);break}case"UPDATE_ROUTES":{a.routes={...e.value};break}case"UPDATE_PERMISSIONS":{a.selectedActions=[...e.value];break}case"SET_SELECTED_ACTION":{a.selectedAction=e.value;break}default:return a}}),Os=()=>{(0,r.L4)();const{formatMessage:n}=(0,R.A)(),e=(0,r.hN)(),{lockApp:a,unlockApp:c}=(0,r.MA)(),{state:o}=(0,S.zy)(),O=(0,N.j)(M=>M.admin_app.permissions),[d,x]=l.useState(o?.apiToken?.accessKey?{...o.apiToken}:null),{trackUsage:m}=(0,r.z1)(),{setCurrentStep:f}=(0,r.Cx)(),{allowedActions:{canCreate:J,canUpdate:y,canRegenerate:w}}=(0,r.ec)(O.settings?.["api-tokens"]),[X,C]=l.useReducer(dt,_t),T=(0,S.W5)("/settings/api-tokens/:id")?.params?.id,U=T==="create",{_unstableFormatAPIError:B,_unstableFormatValidationErrors:I}=(0,r.wq)(),rt=(0,S.W6)(),$=Hs(),F=Ys();l.useEffect(()=>{$.error&&e({type:"warning",message:B($.error)})},[$.error,B,e]),l.useEffect(()=>{F.error&&e({type:"warning",message:B(F.error)})},[F.error,B,e]),l.useEffect(()=>{$.data&&C({type:"UPDATE_PERMISSIONS_LAYOUT",value:$.data})},[$.data]),l.useEffect(()=>{F.data&&C({type:"UPDATE_ROUTES",value:F.data})},[F.data]),l.useEffect(()=>{d&&(d.type==="read-only"&&C({type:"ON_CHANGE_READ_ONLY"}),d.type==="full-access"&&C({type:"SELECT_ALL_ACTIONS"}),d.type==="custom"&&C({type:"UPDATE_PERMISSIONS",value:d?.permissions}))},[d]),l.useEffect(()=>{m(U?"didAddTokenFromList":"didEditTokenFromList",{tokenType:k.A})},[U,m]);const{data:j,error:es,isLoading:ct}=(0,b.b)(T,{skip:!T||U||!!d});l.useEffect(()=>{es&&e({type:"warning",message:B(es)})},[es,B,e]),l.useEffect(()=>{j&&(x(j),j.type==="read-only"&&C({type:"ON_CHANGE_READ_ONLY"}),j.type==="full-access"&&C({type:"SELECT_ALL_ACTIONS"}),j.type==="custom"&&C({type:"UPDATE_PERMISSIONS",value:j?.permissions}))},[j]);const[Pt]=(0,b.c)(),[Mt]=(0,b.d)(),Ot=async(M,G)=>{m(U?"willCreateToken":"willEditToken",{tokenType:k.A}),a();try{if(U){const D=await Pt({...M,lifespan:M?.lifespan||null,permissions:M.type==="custom"?X.selectedActions:null});if("error"in D){(0,N.x)(D.error)&&D.error.name==="ValidationError"?G.setErrors(I(D.error)):e({type:"warning",message:B(D.error)});return}e({type:"success",message:n({id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"})}),m("didCreateToken",{type:D.data.type,tokenType:k.A}),rt.replace(`/settings/api-tokens/${D.data.id}`,{apiToken:D.data}),f("apiTokens.success")}else{const D=await Mt({id:T,name:M.name,description:M.description,type:M.type,permissions:M.type==="custom"?X.selectedActions:null});if("error"in D){(0,N.x)(D.error)&&D.error.name==="ValidationError"?G.setErrors(I(D.error)):e({type:"warning",message:B(D.error)});return}e({type:"success",message:n({id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),m("didEditToken",{type:D.data.type,tokenType:k.A})}}catch{e({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{c()}},[Dt,ns]=l.useState(!1),At={...X,onChange:({target:{value:M}})=>{ns(!0),C({type:"ON_CHANGE",value:M})},onChangeSelectAll:({target:{value:M}})=>{ns(!0),C({type:"SELECT_ALL_IN_PERMISSION",value:M})},setSelectedAction:({target:{value:M}})=>{C({type:"SET_SELECTED_ACTION",value:M})}},as=y&&!U||J&&U;return ct?(0,t.jsx)(Zs,{apiTokenName:d?.name}):(0,t.jsx)(Js,{value:At,children:(0,t.jsxs)(v.g,{children:[(0,t.jsx)(r.x7,{name:"API Tokens"}),(0,t.jsx)(W.l1,{validationSchema:it,validateOnChange:!1,initialValues:{name:d?.name||"",description:d?.description||"",type:d?.type,lifespan:d?.lifespan},enableReinitialize:!0,onSubmit:(M,G)=>Ot(M,G),children:({errors:M,handleChange:G,isSubmitting:D,values:q,setFieldValue:Tt})=>(Dt&&q?.type!=="custom"&&Tt("type","custom"),(0,t.jsxs)(r.lV,{children:[(0,t.jsx)(K.F,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:d,setToken:x,canEditInputs:as,canRegenerate:w,isSubmitting:D,regenerateUrl:"/admin/api-tokens/"}),(0,t.jsx)(A.s,{children:(0,t.jsxs)(E.s,{direction:"column",alignItems:"stretch",gap:6,children:[Boolean(d?.name)&&(0,t.jsx)(K.c,{token:d?.accessKey,tokenType:k.A}),(0,t.jsx)(Xs,{errors:M,onChange:G,canEditInputs:as,isCreating:U,values:q,apiToken:d,onDispatch:C,setHasChangedPermissions:ns}),(0,t.jsx)(ot,{disabled:!as||q?.type==="read-only"||q?.type==="full-access"})]})})]}))})]})})},Et=()=>{const n=(0,N.j)(e=>e.admin_app.permissions.settings?.["api-tokens"].read);return(0,t.jsx)(r.kz,{permissions:n,children:(0,t.jsx)(Os,{})})}},13262:(g,u,s)=>{"use strict";s.d(u,{a:()=>L,b:()=>E,c:()=>P,d:()=>h,u:()=>_});var t=s(88880);const l=t.n.injectEndpoints({endpoints:v=>({getAPITokens:v.query({query:()=>"/admin/api-tokens",transformResponse:i=>i.data,providesTags:(i,p)=>[...i?.map(({id:A})=>({type:"ApiToken",id:A}))??[],{type:"ApiToken",id:"LIST"}]}),getAPIToken:v.query({query:i=>`/admin/api-tokens/${i}`,transformResponse:i=>i.data,providesTags:(i,p,A)=>[{type:"ApiToken",id:A}]}),createAPIToken:v.mutation({query:i=>({url:"/admin/api-tokens",method:"POST",data:i}),transformResponse:i=>i.data,invalidatesTags:[{type:"ApiToken",id:"LIST"}]}),deleteAPIToken:v.mutation({query:i=>({url:`/admin/api-tokens/${i}`,method:"DELETE"}),transformResponse:i=>i.data,invalidatesTags:(i,p,A)=>[{type:"ApiToken",id:A}]}),updateAPIToken:v.mutation({query:({id:i,...p})=>({url:`/admin/api-tokens/${i}`,method:"PUT",data:p}),transformResponse:i=>i.data,invalidatesTags:(i,p,{id:A})=>[{type:"ApiToken",id:A}]})}),overrideExisting:!1}),{useGetAPITokensQuery:_,useGetAPITokenQuery:E,useCreateAPITokenMutation:P,useDeleteAPITokenMutation:L,useUpdateAPITokenMutation:h}=l}}]);
