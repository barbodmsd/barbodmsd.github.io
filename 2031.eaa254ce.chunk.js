"use strict";(self.webpackChunkback=self.webpackChunkback||[]).push([[2031],{23290:(A,D,s)=>{s.d(D,{B:()=>K,D:()=>I,H:()=>U,R:()=>y});var t=s(92132),l=s(83997),d=s(30893),P=s(42455),O=s(38413),g=s(4198),m=s(55356),a=s(55506),e=s(9005),o=s(46270),E=s(54894),c=s(88880),C=s(25524),r=s(63891);const M=(0,r.Ay)(l.s)`
  svg path {
    fill: ${({theme:i})=>i.colors.neutral600};
  }
`,R=({name:i})=>(0,t.jsxs)(l.s,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,a.a8)(300),children:[(0,t.jsx)(M,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,t.jsx)(e.A,{width:`${8/16}rem`})}),(0,t.jsx)(d.o,{fontWeight:"bold",children:i})]}),I=()=>(0,t.jsx)(c.P,{renderItem:i=>{if(i.type===C.D.STAGE)return(0,t.jsx)(R,{name:typeof i.item=="string"?i.item:null})}}),y=({children:i})=>(0,t.jsx)(P.P,{children:(0,t.jsx)(O.g,{tabIndex:-1,children:(0,t.jsx)(g.s,{children:i})})}),K=({href:i})=>{const{formatMessage:T}=(0,E.A)();return(0,t.jsx)(a.N_,{startIcon:(0,t.jsx)(o.A,{}),to:i,children:T({id:"global.back",defaultMessage:"Back"})})},U=({title:i,subtitle:T,navigationAction:W,primaryAction:h})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.x7,{name:i}),(0,t.jsx)(m.Q,{navigationAction:W,primaryAction:h,title:i,subtitle:T})]})},52031:(A,D,s)=>{s.d(D,{ProtectedReviewWorkflowsPage:()=>V});var t=s(92132),l=s(21272),d=s(83997),P=s(43064),O=s(35513),g=s(40216),m=s(26127),a=s(90361),e=s(33363),o=s(30893),E=s(98765),c=s(25641),C=s(88353),r=s(55506),M=s(5194),R=s(41909),I=s(50612),y=s(54894),K=s(17703),U=s(63891),i=s(88880),T=s(48403),W=s(23290),h=s(45084),G=s(25524),Q=s(57935),ls=s(15126),Es=s(63299),ds=s(67014),Ms=s(59080),Ds=s(79275),Ps=s(14718),Os=s(82437),gs=s(61535),ms=s(5790),cs=s(12083),vs=s(35223),fs=s(5409),Cs=s(74930),Ts=s(2600),hs=s(48940),As=s(41286),Ws=s(56336),Ls=s(13426),Bs=s(84624),Rs=s(77965),Is=s(54257),ys=s(71210),Ks=s(51187),Us=s(39404),js=s(58692),xs=s(501),us=s(57646),ws=s(23120),ps=s(44414),Ss=s(25962),$s=s(14664),Ns=s(42588),Fs=s(90325),zs=s(62785),Hs=s(87443),Gs=s(41032),Qs=s(22957),Xs=s(93179),Ys=s(73055),Vs=s(15747),ks=s(85306),Js=s(26509),Zs=s(32058),bs=s(81185),qs=s(82261),st=s(91067);const X=(0,U.Ay)(r.N_)`
  align-items: center;
  height: ${(0,r.a8)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:n})=>`${n.spaces[2]}}`};
  width: ${(0,r.a8)(32)};

  svg {
    height: ${(0,r.a8)(12)};
    width: ${(0,r.a8)(12)};

    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,Y=()=>{const{formatMessage:n}=(0,y.A)(),{push:L}=(0,K.W6)(),{trackUsage:p}=(0,r.z1)(),[j,x]=l.useState(null),[k,B]=l.useState(!1),{collectionTypes:J,singleTypes:Z,isLoading:b}=(0,T.u)(),{meta:v,workflows:S,isLoading:u,deleteWorkflow:q}=(0,Q.u)(),[ss,$]=l.useState(!1),{_unstableFormatAPIError:ts}=(0,r.wq)(),w=(0,r.hN)(),{getFeature:os,isLoading:N}=(0,i.m)(),es=(0,i.j)(_=>_.admin_app.permissions.settings?.["review-workflows"]),{allowedActions:{canCreate:F,canDelete:ns}}=(0,r.ec)(es),f=os("review-workflows")?.[G.C],_s=_=>[...J,...Z].find(H=>H.uid===_)?.info.displayName,as=_=>{x(_)},rs=()=>{x(null)},is=async()=>{if(j)try{$(!0);const _=await q({id:j});if("error"in _){w({type:"warning",message:ts(_.error)});return}x(null),w({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}catch{w({type:"warning",message:{id:"notification.error.unexpected",defaultMessage:"An error occurred"}})}finally{$(!1)}};return l.useEffect(()=>{!u&&!N&&f&&v&&v?.workflowCount>parseInt(f,10)&&B(!0)},[N,u,v,v?.workflowCount,f]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(W.H,{primaryAction:F&&(0,t.jsx)(r.z9,{startIcon:(0,t.jsx)(M.A,{}),size:"S",to:"/settings/review-workflows/create",onClick:_=>{f&&v&&v?.workflowCount>=parseInt(f,10)?(_.preventDefault(),B(!0)):p("willCreateWorkflow")},children:n({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),subtitle:n({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:n({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),(0,t.jsxs)(W.R,{children:[u||b?(0,t.jsx)(d.s,{justifyContent:"center",children:(0,t.jsx)(P.a,{children:n({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"})})}):(0,t.jsxs)(O.X,{colCount:3,footer:F&&(0,t.jsx)(g.S,{icon:(0,t.jsx)(M.A,{}),onClick:()=>{f&&v&&v?.workflowCount>=parseInt(f,10)?B(!0):(L("/settings/review-workflows/create"),p("willCreateWorkflow"))},children:n({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),rowCount:1,children:[(0,t.jsx)(m.d,{children:(0,t.jsxs)(a.Tr,{children:[(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.o,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.o,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.o,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(E.s,{children:n({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"})})})]})}),(0,t.jsx)(c.N,{children:S?.map(_=>(0,l.createElement)(a.Tr,{...(0,r.qM)({fn(z){z.target.nodeName!=="BUTTON"&&L(`/settings/review-workflows/${_.id}`)}}),key:`workflow-${_.id}`},(0,t.jsx)(e.Td,{width:(0,r.a8)(250),children:(0,t.jsx)(o.o,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,t.jsx)(e.Td,{children:(0,t.jsx)(o.o,{textColor:"neutral800",children:_.stages.length})}),(0,t.jsx)(e.Td,{children:(0,t.jsx)(o.o,{textColor:"neutral800",children:(_?.contentTypes??[]).map(_s).join(", ")})}),(0,t.jsx)(e.Td,{children:(0,t.jsxs)(d.s,{alignItems:"center",justifyContent:"end",children:[(0,t.jsx)(X,{to:`/settings/review-workflows/${_.id}`,"aria-label":n({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:_.name}),children:(0,t.jsx)(R.A,{})}),S.length>1&&ns&&(0,t.jsx)(C.K,{"aria-label":n({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:(0,t.jsx)(I.A,{}),noBorder:!0,onClick:()=>{as(String(_.id))}})]})})))})]}),(0,t.jsx)(r.TM,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:ss,isOpen:!!j,onToggleDialog:rs,onConfirm:is}),(0,t.jsxs)(h.L.Root,{isOpen:k,onClose:()=>B(!1),children:[(0,t.jsx)(h.L.Title,{children:n({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(h.L.Body,{children:n({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})},V=()=>{const n=(0,i.j)(L=>L.admin_app.permissions.settings?.["review-workflows"]?.main);return(0,t.jsx)(r.kz,{permissions:n,children:(0,t.jsx)(Y,{})})}},48403:(A,D,s)=>{s.d(D,{u:()=>m});var t=s(21272),l=s(55506),d=s(88880);const P=d.n.injectEndpoints({endpoints:a=>({getComponents:a.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:e=>e.data}),getContentTypes:a.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:e=>e.data})}),overrideExisting:!1}),{useGetComponentsQuery:O,useGetContentTypesQuery:g}=P;function m(){const{_unstableFormatAPIError:a}=(0,l.wq)(),e=(0,l.hN)(),o=O(),E=g();t.useEffect(()=>{E.error&&e({type:"warning",message:a(E.error)})},[E.error,a,e]),t.useEffect(()=>{o.error&&e({type:"warning",message:a(o.error)})},[o.error,a,e]);const c=o.isLoading||E.isLoading,C=t.useMemo(()=>(E?.data??[]).filter(M=>M.kind==="collectionType"&&M.isDisplayed),[E?.data]),r=t.useMemo(()=>(E?.data??[]).filter(M=>M.kind!=="collectionType"&&M.isDisplayed),[E?.data]);return{isLoading:c,components:t.useMemo(()=>o?.data??[],[o?.data]),collectionTypes:C,singleTypes:r}}},57935:(A,D,s)=>{s.d(D,{u:()=>l});var t=s(91067);function l(d={}){const{id:P="",...O}=d,{data:g,isLoading:m}=(0,t.c)({id:P,populate:"stages",...O}),[a]=(0,t.d)(),[e]=(0,t.e)(),[o]=(0,t.f)(),{workflows:E,meta:c}=g??{};return{meta:c,workflows:E,isLoading:m,createWorkflow:a,updateWorkflow:e,deleteWorkflow:o}}},40216:(A,D,s)=>{s.d(D,{S:()=>e});var t=s(92132),l=s(63891),d=s(94061),P=s(48653),O=s(83997),g=s(30893);const m=(0,l.Ay)(d.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,a=(0,l.Ay)(d.a)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,e=({children:o,icon:E,...c})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(P.c,{}),(0,t.jsx)(a,{as:"button",background:"primary100",padding:5,...c,children:(0,t.jsxs)(O.s,{children:[(0,t.jsx)(m,{"aria-hidden":!0,background:"primary200",children:E}),(0,t.jsx)(d.a,{paddingLeft:3,children:(0,t.jsx)(g.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
