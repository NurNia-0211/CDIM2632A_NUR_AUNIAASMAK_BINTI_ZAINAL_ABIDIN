"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[16217],{558273:(e,t,i)=>{i.d(t,{NK:()=>_,P6:()=>o,ZE:()=>x,Zt:()=>g,_J:()=>n,_S:()=>m,cL:()=>h,jL:()=>a,oN:()=>s,rM:()=>p,sV:()=>d,sY:()=>u});var r=i(115557);let s=5e3,o=s/r.gJ,l=["Uploaded by user"],a=(e,t)=>!!t&&!e,n=e=>!!e&&5!==e,d=e=>["email","messages","deep_linking"].includes(e),u=e=>!!e&&"gif"===e,c=e=>"pinstory"===e,h=({embedSrc:e,embedSubtype:t,embedType:i})=>!!e&&!u(i)&&!c(t),p=({link:e,mobileLink:t,trackedLink:i})=>!t&&!i&&!e,x=e=>/pin.it/gim.test(e||""),g=({link:e,mobileLink:t,origImageUrl:i,trackedLink:r})=>t||r||e||i||"",_=(e,t)=>({deeplinkUri:{android:`pin/${e}/repin`,iOS:`repin/${e}`},mwebUri:{pathname:`/pin/${e}/repin/`,state:{trackingParams:t.state?t.state.trackingParams:""}}});function m(e){for(let t of l)if(e===t)return!1;return!0}},637253:(e,t,i)=>{i.d(t,{Z:()=>x});var r=i(667294),s=i(702664),o=i(288240),l=i(5859),a=i(227258),n=i(638747),d=i(342513);let{Provider:u,useMaybeHook:c}=(0,d.Z)("SuspensefulResource"),h={},p=({httpStatus:e})=>!e||e>=500;function x(e,t,i,d){let{headers:u,name:x,noCache:g,options:_,schema:m}=e,b=function(){let e=c();return e?t=>e.addToBeSent(t):()=>{}}(),y=(0,n.vL)(),f=(0,s.useDispatch)(),v=(0,o.Z)(_),j=(0,r.useRef)(),T=e=>(e[x]||h)[v]||h,S=(0,s.useSelector)(({resources:e})=>{let t=T(e);return!!t.error||void 0!==t.data}),E=(0,s.useSelector)(({resources:e})=>T(e).error),P=(0,s.useSelector)(({resources:e})=>!!T(e).fetching),w=(0,r.useCallback)(e=>{f((0,a.U)(x,{options:_,schema:m,bookmark:e,headers:u},y,b))},[f,x,v,m,u]),R=(0,r.useCallback)(()=>{f((0,a.b)(x,{options:_,schema:m,headers:u},y))},[f,x,v,m,u]),{isBot:C}=(0,l.B)(),A=(0,r.useCallback)(()=>{if(!i&&j.current!==v){let e=void 0===j.current;j.current=v,!S&&!P||d&&e&&E&&p(E)?w():(!C&&g||t)&&R()}},[d,w,R,i,E,C,P,S,t,g,v]),D=(0,r.useMemo)(()=>({name:i?null:x,optionsKey:i?null:v}),[i,x,v]),I=(0,r.useMemo)(()=>({fetchResource:A,dispatchGet:w,dispatchRefresh:R,ref:D}),[A,w,R,D]);return I}},757640:(e,t,i)=>{i.d(t,{Z:()=>c});var r=i(667294),s=i(702664),o=i(616550),l=i(288240),a=i(227258),n=i(839967),d=i(637253);let u={};function c(e){let{enabledRouteRefresh:t,__unstableEnableSuspenseSupport:i,headers:c,name:h,noCache:p,options:x,schema:g}=e??{name:"DisabledResource",options:null},_=!e,m=(0,l.Z)(x),b=(0,r.useRef)(null),y=(0,o.k6)(),f=y&&"POP"!==y.action,v=e=>(e[h]||u)[m]||u,j=(0,s.useSelector)(({resources:e})=>v(e).nextBookmark),T=(0,s.useSelector)(({resources:e})=>v(e).data),S=(0,s.useSelector)(({resources:e})=>v(e).auxData),E=(0,s.useSelector)(({resources:e})=>v(e).error),P=(0,s.useSelector)(({resources:e})=>!!v(e).fetching),w=!!E||void 0!==T,R=w&&!P&&j===n.q,C=!!(w&&t&&f&&!_),[A,D]=(0,r.useState)(C),{fetchResource:I,dispatchGet:k,dispatchRefresh:O}=(0,d.Z)({headers:c,name:h,noCache:p,options:x,schema:g},C,_,!0);(0,r.useEffect)(()=>{i||I()}),i&&I();let z=(0,r.useCallback)(()=>{_||(O(),D(!0))},[_,a.b,h,m,c,D]),M=(0,r.useCallback)(()=>{!j||R||P||_||k(j)},[_,k,j,R,P]);if(b.current){if(w&&!P)b.current=null;else if(i)throw b.current}let L=(0,r.useRef)({auxData:void 0,data:void 0,error:void 0,fetchMore:M,isAtEnd:!1,isFetching:!1,isLoaded:!1,isRefreshing:!1,nextBookmark:void 0,refresh:z}),Z={auxData:S,data:T,error:E,fetchMore:M,isAtEnd:R,isFetching:P,isLoaded:w,isRefreshing:A,nextBookmark:j,refresh:z};return(0,s.shallowEqual)(Z,L.current)||(A&&(L.current.data||!C)&&!(0,s.shallowEqual)(Z.data,L.current.data)&&(Z.isRefreshing=!1,D(!1)),L.current=Z),L.current}},314018:(e,t,i)=>{i.d(t,{Z:()=>o});var r=i(860208),s=i(337478);function o({bubbleId:e,pinId:t,query:i,referringSource:o,storyCategory:l,storyId:a,title:n}){let d=[0,24,21,26].includes(l),u=(0,s.Z)({q:i,rs:o||void 0,b_id:e,source_id:a,top_pin_id:t}),c=d&&n?(0,r.x)({title:n,id:e,articleType:"discover"}):`/discover/article/${e}/`;return d?c:`/search/pins/${u?"?"+u:""}`}},115557:(e,t,i)=>{i.d(t,{$f:()=>o,Cy:()=>d,DR:()=>s,EB:()=>h,Fm:()=>n,Y7:()=>c,bR:()=>a,gJ:()=>l,lG:()=>u});var r=i(172045);let s=1,o=2,l=1e3,a=1e3,n=1e3,d=Object.freeze({DEFAULT:0,LOAD_START:1,LOADED_METADATA:2,LOADED_DATA:3,PLAYING:4,PAUSED:5,SEEKING:6,STALLING:7,FAILED:8,ENDED:9}),u=Object.freeze({MEDIA_ERR_ABORTED:1,MEDIA_ERR_NETWORK:2,MEDIA_ERR_DECODE:3,MEDIA_ERR_SRC_NOT_SUPPORTED:4});function c(e){return e+"-"+(0,r.Z)()}function h(){return(0,r.Z)()}},818385:(e,t,i)=>{i.d(t,{Z:()=>m});var r=i(667294),s=i(883119),o=i(205841),l=i(140017),a=i(184390),n=i(666472),d=i(340523),u=i(314018),c=i(575742),h=i(427514),p=i(149722),x=i(67664),g=i(739711),_=i(785893);function m({bubble:e,contextLogData:t,disableTabIndex:i,handleReport:m,height:b,imgSignature:y,isHovered:f,onClick:v,onMouseEnter:j,onMouseLeave:T,referringSource:S,searchBoxRenderStopwatch:E,showFlag:P,slotIndex:w,storyId:R,viewParameter:C,viewType:A,width:D}){let I=(0,l.ZP)(),k=(0,p.Z)(),{id:O,action:z,aux_fields:M,cover_images:L,dominant_colors:Z,identifier_icon_type:F,title:N,story_category:B,curator:H}=e,{checkExperiment:W}=(0,d.F)(),{isAuth:q}=k,U="",X="";if(q&&5===A){U=W("blp_explore_bubble_image_size").group;let e=U.split("_");e.length>1&&U.startsWith("enabled")&&(X=e[1])}let J=q&&W("web_deprecated_impression_tracker_standalone_discover_impression_auth").anyEnabled,G=L&&L[0]&&(U.startsWith("enabled")&&X?L[0][X]:L[0]["280x280"]||L[0]["236x"]),K=(0,h.Z)(N&&N.format||"",N&&N.args||{}),$=Z&&Z.length?Z[0]:"gray",Y=z?.url||(0,u.Z)({storyCategory:B,query:K,referringSource:S,bubbleId:O,storyId:R,title:N.format,pinId:M?.image_pin_id});return J?(0,_.jsx)(n.F,{contextLogData:{story_id:R,...t},impressionAuxFields:{storyCategory:B,story_id:R},impressionType:"Article",loggingId:O,pinData:null,slotIndex:w,viewParameter:C,viewType:A,children:({impressionTrackerRef:e})=>(0,_.jsx)(s.xu,{ref:e,children:(0,_.jsx)(x.Z,{backgroundColor:$,coverImage:G,disableTabIndex:i,height:b,id:O,isHovered:f,onClick:v,onMouseEnter:j,onMouseLeave:T,searchBoxRenderStopwatch:E,url:Y,width:D,children:({isHovered:e})=>(0,_.jsxs)(r.Fragment,{children:[H&&26!==B&&(0,_.jsx)(s.xu,{left:!0,padding:2,position:"absolute",top:!0,children:(0,_.jsx)(o.qE,{name:H.full_name,outline:!0,size:"xs",src:H.image_small_url})}),F&&F!==c.J&&(0,_.jsx)(s.xu,{alignItems:"center",color:"default",display:"flex",height:24,justifyContent:"center",left:!0,margin:2,opacity:.8,position:"absolute",rounding:"circle",top:!0,width:24,children:(0,_.jsx)(s.JO,{accessibilityLabel:I._('Shopping icon', 'bubble.shoppingIcon.label', 'Accessibility label for bubble shopping Icon'),color:"default",icon:(0,c.Z)(F),size:12})}),(0,_.jsx)(s.xu,{alignItems:26===B?"end":"center","data-test-id":"discover-bubble",display:"flex",height:b,justifyContent:"center",padding:3,position:"absolute",top:!0,width:D||"100%",children:(0,_.jsxs)(s.kC,{alignItems:"stretch",direction:"column",justifyContent:"start",children:[b>200?(0,_.jsx)(s.X6,{align:"center",color:"light",size:"500",children:K}):(0,_.jsx)(s.xv,{align:"center",color:"light",weight:"bold",children:K}),H&&26===B&&(0,_.jsxs)(s.xu,{alignItems:"center",display:"flex",justifyContent:"center",marginTop:4,children:[(0,_.jsx)(s.xu,{marginEnd:2,children:(0,_.jsx)(o.qE,{name:H.full_name,outline:!0,size:"xs",src:H.image_small_url})}),(0,_.jsx)(s.xv,{color:"light",size:"100",children:H.full_name})]})]})}),k.isAuth&&k.isEmployee&&P?(0,_.jsx)(s.xu,{bottom:!0,marginBottom:1,position:"absolute",right:!0,children:(0,_.jsx)(g.Z,{handleReport:m,imgSignature:y||"",isVisible:e})}):null]})})})}):(0,_.jsx)(a.Z,{contextLogData:{story_id:R,...t},impressionAuxFields:{storyCategory:B,storyIdStr:R},impressionType:"Article",loggingId:O,pinData:null,slotIndex:w,viewParameter:C,viewType:A,children:(0,_.jsx)(x.Z,{backgroundColor:$,coverImage:G,disableTabIndex:i,height:b,id:O,isHovered:f,onClick:v,onMouseEnter:j,onMouseLeave:T,searchBoxRenderStopwatch:E,url:Y,width:D,children:({isHovered:e})=>(0,_.jsxs)(r.Fragment,{children:[H&&26!==B&&(0,_.jsx)(s.xu,{left:!0,padding:2,position:"absolute",top:!0,children:(0,_.jsx)(o.qE,{name:H.full_name,outline:!0,size:"xs",src:H.image_small_url})}),F&&F!==c.J&&(0,_.jsx)(s.xu,{alignItems:"center",color:"default",display:"flex",height:24,justifyContent:"center",left:!0,margin:2,opacity:.8,position:"absolute",rounding:"circle",top:!0,width:24,children:(0,_.jsx)(s.JO,{accessibilityLabel:I._('Shopping icon', 'bubble.shoppingIcon.label', 'Accessibility label for bubble shopping Icon'),color:"default",icon:(0,c.Z)(F),size:12})}),(0,_.jsx)(s.xu,{alignItems:26===B?"end":"center","data-test-id":"discover-bubble",display:"flex",height:b,justifyContent:"center",padding:3,position:"absolute",top:!0,width:D||"100%",children:(0,_.jsxs)(s.kC,{alignItems:"stretch",direction:"column",justifyContent:"start",children:[b>200?(0,_.jsx)(s.X6,{align:"center",color:"light",size:"500",children:K}):(0,_.jsx)(s.xv,{align:"center",color:"light",weight:"bold",children:K}),H&&26===B&&(0,_.jsxs)(s.xu,{alignItems:"center",display:"flex",justifyContent:"center",marginTop:4,children:[(0,_.jsx)(s.xu,{marginEnd:2,children:(0,_.jsx)(o.qE,{name:H.full_name,outline:!0,size:"xs",src:H.image_small_url})}),(0,_.jsx)(s.xv,{color:"light",size:"100",children:H.full_name})]})]})}),k.isAuth&&k.isEmployee&&P?(0,_.jsx)(s.xu,{bottom:!0,marginBottom:1,position:"absolute",right:!0,children:(0,_.jsx)(g.Z,{handleReport:m,imgSignature:y||"",isVisible:e})}):null]})})})}},67664:(e,t,i)=>{i.d(t,{A:()=>l,Z:()=>a});var r=i(667294),s=i(883119),o=i(785893);let l={bubbleOverlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},hoverOverlay:{backgroundColor:"rgba(0, 0, 0, 0.6)"},lightHoverOverlay:{backgroundColor:"rgba(0, 0, 0, 0.1)"}};function a({backgroundColor:e,children:t,coverImage:i,disableTabIndex:a,height:n,id:d,isHovered:u,onClick:c,onMouseDown:h,onMouseEnter:p,onMouseLeave:x,searchBoxRenderStopwatch:g,url:_,width:m}){let[b,y]=(0,r.useState)(!1),f=()=>{p?p():y(!0)},v=()=>{x?x():y(!1)},j=u||b,T=j?l.hoverOverlay:l.bubbleOverlay;return(0,o.jsx)(s.Tg,{href:_,onBlur:v,onFocus:f,onMouseDown:h,onMouseEnter:f,onMouseLeave:v,onTap:()=>{c?.(d)},rounding:4,tabIndex:a?-1:void 0,children:(0,o.jsx)(s.zd,{height:n,rounding:4,width:m||"100%",children:i?.url?(0,o.jsxs)(s.Ee,{alt:"",color:e,fit:"cover",naturalHeight:i.height??1,naturalWidth:i.width??1,onLoad:()=>{g?.stop()},role:"presentation",src:i.url,children:[(0,o.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:T},height:"100%",width:"100%"}),"function"==typeof t?t({isHovered:j}):t]}):(0,o.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:e}},height:"100%",width:"100%"})})})}},739711:(e,t,i)=>{i.d(t,{Z:()=>m});var r=i(667294),s=i(883119),o=i(107366),l=i(930837),a=i(454514),n=i(140017),d=i(13848);let u={transparent:{backgroundColor:"transparent"},transparentHovered:{backgroundColor:"rgba(216, 216, 216, 0.37)"},pog:{borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},buttonFocus:{outline:"0"}};var c=i(785893);function h(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class p extends r.Component{constructor(...e){super(...e),h(this,"state",{hovered:!1}),h(this,"handleMouseEnter",()=>this.setState({hovered:!0})),h(this,"handleMouseLeave",()=>this.setState({hovered:!1}))}render(){let{backgroundHaloSize:e,onClick:t,color:i="subtle"}=this.props,r=Object.freeze({height:e,width:e}),o={border:0,display:"block",background:"transparent",cursor:"pointer",...u.buttonFocus},l={...u.pog,...u.transparent,...this.state.hovered?u.transparentHovered:{}},a={...r,...l};return(0,c.jsx)("button",{onClick:e=>t&&t({event:e}),onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,style:o,type:"button",children:(0,c.jsx)("div",{style:a,children:(0,c.jsx)(s.xu,{rounding:"circle",children:(0,c.jsx)(s.JO,{accessibilityLabel:"",color:i,icon:"flag",size:e/2})})})})}}var x=i(825784);function g(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class _ extends r.PureComponent{constructor(...e){super(...e),g(this,"state",{showModal:!1,reportType:null}),g(this,"handleDismiss",()=>this.setState({showModal:!1})),g(this,"handleClick",()=>{let{reportType:e}=this.state;"image"===e?this.reportSuggestionImage():this.reportSuggestionText()}),g(this,"reportSuggestionImage",async()=>{let{imgSignature:e,reportImage:t}=this.props;this.setState({showModal:!1});let i=await (0,o.Z)({url:"/v3/search/pin_image_sig/",data:{image_signature:e}}),{id:r,node_id:s}=i.resource_response.data;t({id:r,nodeId:s})}),g(this,"reportSuggestionText",()=>{let{handleReport:e,toastManagerContext:t}=this.props;e&&(e(),t.showToast(({hideToast:e})=>(0,c.jsx)(a.ZP,{onHide:e,text:this.props.i18n._('Thanks\xA0for\xA0your\xA0report!\xA0This\xA0will\xA0be\xA0reviewed\xA0by\xA0our\xA0Trust\xA0and\xA0Safety\xA0Team', 'ReportingFlag.Toast.text', 'Toast\xA0after\xA0reporting\xA0a\xA0search suggestion')})),this.handleDismiss())}),g(this,"showModal",({event:e})=>{e.stopPropagation(),e.preventDefault(),this.setState({showModal:!0})})}render(){let{showModal:e}=this.state;return(0,c.jsxs)(r.Fragment,{children:[this.props.isVisible&&(0,c.jsx)(p,{backgroundHaloSize:24,onClick:this.showModal}),e&&(0,c.jsx)(l.ZP,{accessibilityModalLabel:this.props.i18n._('Report\xA0search\xA0term', 'ReportingFlag.Modal.accessibilityModalLabel', 'accessible\xA0label\xA0for\xA0report\xA0suggestion modal'),heading:this.props.i18n._('Report\xA0search\xA0term', 'ReportingFlag.Modal.heading', 'Heading\xA0for\xA0report\xA0suggestion modal'),onDismiss:this.handleDismiss,size:"sm",children:(0,c.jsxs)(s.xu,{children:[(0,c.jsx)(s.xu,{padding:5,children:(0,c.jsx)(s.xv,{children:this.props.i18n._('When you flag this, our Trust and Safety team will review it. If it doesn\'t meet our Community Guidelines, it will be blocked.', 'ReportingFlag.Box.Text.report', 'What\xA0will\xA0happen\xA0when\xA0you\xA0report\xA0a\xA0suggestion')})}),(0,c.jsxs)(s.FX,{id:"reporting-flag-options-group",legend:this.props.i18n._('When you flag this, our Trust and Safety team will review it. If it doesn\'t meet our Community Guidelines, it will be blocked.', 'ReportingFlag.Box.Text.report', 'What\xA0will\xA0happen\xA0when\xA0you\xA0report\xA0a\xA0suggestion'),legendDisplay:"hidden",children:[(0,c.jsxs)(s.xu,{direction:"column",display:"flex",marginBottom:4,paddingX:5,role:"list",children:[(0,c.jsxs)(s.xu,{alignItems:"center",direction:"row",display:"flex",paddingY:1,children:[(0,c.jsx)(s.FX.RadioButton,{checked:"text"===this.state.reportType,id:"textType",onChange:()=>this.setState({reportType:"text"}),value:"Report search text"}),(0,c.jsx)(s.xu,{flex:"grow",children:(0,c.jsx)(s.__,{htmlFor:"textType",children:(0,c.jsx)(s.xu,{paddingX:2,children:(0,c.jsx)(s.xv,{children:"Report search text"})})})})]}),(0,c.jsxs)(s.xu,{alignItems:"center",direction:"row",display:"flex",paddingY:1,children:[(0,c.jsx)(s.FX.RadioButton,{checked:"image"===this.state.reportType,id:"imageType",onChange:()=>this.setState({reportType:"image"}),value:"Report search image"}),(0,c.jsx)(s.xu,{flex:"grow",children:(0,c.jsx)(s.__,{htmlFor:"imageType",children:(0,c.jsx)(s.xu,{paddingX:2,children:(0,c.jsx)(s.xv,{children:"Report search image"})})})})]})]}),(0,c.jsx)(s.iz,{}),(0,c.jsxs)(s.xu,{display:"flex",justifyContent:"end",padding:2,children:[(0,c.jsx)(s.xu,{margin:2,children:(0,c.jsx)(s.zx,{fullWidth:!0,onClick:this.handleDismiss,text:this.props.i18n._('Cancel', 'ReportingFlag.Box.Button.text.cancel', 'Text\xA0for\xA0cancel\xA0button\xA0when reporting search suggestion')})}),(0,c.jsx)(s.xu,{margin:2,children:(0,c.jsx)(s.zx,{color:"red",disabled:!this.state.reportType,fullWidth:!0,onClick:this.handleClick,text:this.props.i18n._('Report', 'ReportingFlag.Box.Button.text.report', 'Button\xA0label\xA0to\xA0report\xA0search suggestion')})})]})]})]})})]})}}function m(e){let t=(0,n.ZP)(),{reportImage:i}=(0,x.f)();return(0,c.jsx)(_,{...e,i18n:t,reportImage:i,toastManagerContext:(0,d.F9)()})}},825784:(e,t,i)=>{i.d(t,{X:()=>u,f:()=>d});var r=i(667294),s=i(342513),o=i(558273);function l(e=null,t){switch(t.type){case"REPORT_CONTENT_SHOW":return{id:t.payload.id,isProduct:t.payload.isProduct,isPromoted:t.payload.isPromoted,parentId:t.payload.parentId,videoDuration:t.payload.videoDuration,viewParameter:t.payload.viewParameter,viewType:t.payload.viewType,type:t.payload.type,isThirdPartyAd:t.payload.isThirdPartyAd,nodeId:t.payload.nodeId};case"REPORT_CONTENT_DISMISS":return null;default:return e}}var a=i(785893);let{Provider:n,useHook:d}=(0,s.Z)("ReportData");function u({children:e}){let[t,i]=(0,r.useReducer)(l,null),s=(0,r.useCallback)(()=>i({type:"REPORT_CONTENT_DISMISS"}),[]),d=(0,r.useCallback)((e,t,r)=>i({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:!1,isPromoted:!1,parentId:t,videoDuration:null,viewParameter:null,viewType:null,type:r,nodeId:null}}),[]),u=(0,r.useCallback)((e,t,r)=>i({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:!1,isPromoted:!1,videoDuration:null,viewParameter:t,viewType:r,type:"conversation",nodeId:null}}),[]),c=(0,r.useCallback)(({id:e,viewParameter:t,viewType:r,nodeId:s})=>i({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:!1,isPromoted:!1,videoDuration:null,viewParameter:t,viewType:r,type:"pin",nodeId:s}}),[]),h=(0,r.useCallback)(({pinId:e,isDownstreamPromotion:t,hasPromoter:r,firstVideoDuration:s,isProduct:l,viewParameter:a,viewType:n,isThirdPartyAd:d,nodeId:u})=>{let c=(0,o.jL)(t,r);i({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:l,isPromoted:c,videoDuration:s,viewParameter:a,viewType:n,type:"pin",isThirdPartyAd:d,nodeId:u}})},[]),p=(0,r.useMemo)(()=>({reportData:t,dismiss:s,reportComment:d,reportConversation:u,reportImage:c,reportPin:h}),[t,s,d,u,c,h]);return(0,a.jsx)(n,{value:p,children:e})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/16217-6af050da8504af4d.mjs.map