__NUXT_JSONP__("/zh/guide/features/state-management", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI){return {data:[{page:{key:"content:zh:2.guide:2.features:6.state-management.md",generatedAt:new Date(1658636961621),mtime:new Date(1658636961606),slug:V,title:W,position:"000200020006",to:"\u002Fguide\u002Ffeatures\u002Fstate-management",draft:z,page:A,language:"zh",empty:z,description:"Nuxt provides useState composable to create a reactive and SSR-friendly shared state across components.",excerpt:X,body:{raw:"# State Management\n\nNuxt provides `useState` composable to create a reactive and SSR-friendly shared state across components.\n\n`useState` is an SSR-friendly [`ref`](https:\u002F\u002Fvuejs.org\u002Fapi\u002Freactivity-core.html#ref) replacement. Its value will be preserved after server-side rendering (during client-side hydration) and shared across all components using a unique key.\n\n::ReadMore{link=\"\u002Fapi\u002Fcomposables\u002Fuse-state\"}\n::\n\n::alert{icon=👉}\n`useState` only works during `setup` or [`Lifecycle Hooks`](https:\u002F\u002Fvuejs.org\u002Fapi\u002Fcomposition-api-lifecycle.html#composition-api-lifecycle-hooks).\n::\n\n## Best practices\n\n::alert{type=danger icon=🚨}\nNever define `const state = ref()` outside of `\u003Cscript setup\u003E` or `setup()` function.\u003Cbr\u003E\nSuch state will be shared across all users visiting your website and can lead to memory leaks!\n::\n::alert{type=success icon=✅}\nInstead use `const useX = () =\u003E useState('x')`\n::\n\n## Examples\n\n### Basic usage\n\nIn this example, we use a component-local counter state. Any other component that uses `useState('counter')` shares the same reactive state.\n\n```vue [app.vue]\n\u003Cscript setup\u003E\nconst counter = useState('counter', () =\u003E Math.round(Math.random() * 1000))\n\u003C\u002Fscript\u003E\n\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    Counter: {{ counter }}\n    \u003Cbutton @click=\"counter++\"\u003E\n      +\n    \u003C\u002Fbutton\u003E\n    \u003Cbutton @click=\"counter--\"\u003E\n      -\n    \u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n:LinkExample{link=\"\u002Fexamples\u002Fcomposables\u002Fuse-state\"}\n\n::ReadMore{link=\"\u002Fapi\u002Fcomposables\u002Fuse-state\"}\n::\n\n### Advanced\n\nIn this example, we use a composable that detects the user's default locale from the HTTP request headers and keeps it in a `locale` state.\n\n:LinkExample{link=\"\u002Fexamples\u002Fother\u002Flocale\"}\n\n## Shared state\n\nBy using [auto-imported composables](\u002Fguide\u002Fdirectory-structure\u002Fcomposables) we can define global type-safe states and import them across the app.\n\n```ts [composables\u002Fstates.ts]\nexport const useCounter = () =\u003E useState\u003Cnumber\u003E('counter', () =\u003E 0)\nexport const useColor = () =\u003E useState\u003Cstring\u003E('color', () =\u003E 'pink')\n```\n\n```vue [app.vue]\n\u003Cscript setup\u003E\nconst color = useColor() \u002F\u002F Same as useState('color')\n\u003C\u002Fscript\u003E\n\n\u003Ctemplate\u003E\n  \u003Cp\u003ECurrent color: {{ color }}\u003C\u002Fp\u003E\n\u003C\u002Ftemplate\u003E\n```\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:V},children:[{type:a,value:W}]},{type:a,value:g},{type:b,tag:o,props:{class:"d-heading-description"},children:[{type:a,value:"Nuxt provides "},{type:b,tag:k,props:{},children:[{type:a,value:s}]},{type:a,value:" composable to create a reactive and SSR-friendly shared state across components."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:s}]},{type:a,value:" is an SSR-friendly "},{type:b,tag:p,props:{href:"https:\u002F\u002Fvuejs.org\u002Fapi\u002Freactivity-core.html#ref",rel:[Y,Z,_],target:$},children:[{type:b,tag:k,props:{},children:[{type:a,value:"ref"}]}]},{type:a,value:" replacement. Its value will be preserved after server-side rendering (during client-side hydration) and shared across all components using a unique key."}]},{type:a,value:g},{type:b,tag:aa,props:{link:ab},children:[]},{type:a,value:g},{type:b,tag:H,props:{icon:"👉"},children:[{type:b,tag:o,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:s}]},{type:a,value:" only works during "},{type:b,tag:k,props:{},children:[{type:a,value:I}]},{type:a,value:ac},{type:b,tag:p,props:{href:"https:\u002F\u002Fvuejs.org\u002Fapi\u002Fcomposition-api-lifecycle.html#composition-api-lifecycle-hooks",rel:[Y,Z,_],target:$},children:[{type:b,tag:k,props:{},children:[{type:a,value:"Lifecycle Hooks"}]}]},{type:a,value:J}]}]},{type:a,value:g},{type:b,tag:K,props:{id:ad},children:[{type:b,tag:p,props:{href:"#best-practices"},children:[{type:a,value:ae}]}]},{type:a,value:g},{type:b,tag:H,props:{icon:"🚨",type:"danger"},children:[{type:b,tag:o,props:{},children:[{type:a,value:"Never define "},{type:b,tag:k,props:{},children:[{type:a,value:"const state = ref()"}]},{type:a,value:" outside of "},{type:b,tag:k,props:{},children:[{type:a,value:"\u003Cscript setup\u003E"}]},{type:a,value:ac},{type:b,tag:k,props:{},children:[{type:a,value:"setup()"}]},{type:a,value:" function."},{type:b,tag:"br",props:{},children:[]},{type:a,value:"\nSuch state will be shared across all users visiting your website and can lead to memory leaks!"}]}]},{type:a,value:g},{type:b,tag:H,props:{icon:"✅",type:"success"},children:[{type:b,tag:o,props:{},children:[{type:a,value:"Instead use "},{type:b,tag:k,props:{},children:[{type:a,value:"const useX = () =\u003E useState('x')"}]}]}]},{type:a,value:g},{type:b,tag:K,props:{id:L},children:[{type:b,tag:p,props:{href:"#examples"},children:[{type:a,value:M}]}]},{type:a,value:g},{type:b,tag:af,props:{id:ag},children:[{type:b,tag:p,props:{href:"#basic-usage"},children:[{type:a,value:ah}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"In this example, we use a component-local counter state. Any other component that uses "},{type:b,tag:k,props:{},children:[{type:a,value:"useState('counter')"}]},{type:a,value:" shares the same reactive state."}]},{type:a,value:g},{type:b,tag:N,props:{},children:[{type:b,tag:c,props:{className:[O]},children:[{type:a,value:ai}]},{type:b,tag:P,props:{className:[Q,aj]},children:[{type:b,tag:R,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:t}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,ak]},children:[{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:C}]},{type:a,value:" counter "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:v}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"arrow",j]},children:[{type:a,value:x}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,am,D]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,ao,q,ap]},children:[{type:a,value:"round"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,am,D]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,ao,q,ap]},children:[{type:a,value:"random"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"*"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:"1000"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"\n    Counter: {{ counter }}\n    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:F}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,at]},children:[{type:b,tag:c,props:{className:[d,e,au]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:"counter++"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"\n      +\n    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"\n    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:F}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,at]},children:[{type:b,tag:c,props:{className:[d,e,au]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:"counter--"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"\n      -\n    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:av,props:{link:"\u002Fexamples\u002Fcomposables\u002Fuse-state"},children:[]},{type:a,value:g},{type:b,tag:aa,props:{link:ab},children:[]},{type:a,value:g},{type:b,tag:af,props:{id:aw},children:[{type:b,tag:p,props:{href:"#advanced"},children:[{type:a,value:ax}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"In this example, we use a composable that detects the user's default locale from the HTTP request headers and keeps it in a "},{type:b,tag:k,props:{},children:[{type:a,value:"locale"}]},{type:a,value:" state."}]},{type:a,value:g},{type:b,tag:av,props:{link:"\u002Fexamples\u002Fother\u002Flocale"},children:[]},{type:a,value:g},{type:b,tag:K,props:{id:ay},children:[{type:b,tag:p,props:{href:"#shared-state"},children:[{type:a,value:az}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"By using "},{type:b,tag:p,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fcomposables"},children:[{type:a,value:"auto-imported composables"}]},{type:a,value:" we can define global type-safe states and import them across the app."}]},{type:a,value:g},{type:b,tag:N,props:{},children:[{type:b,tag:c,props:{className:[O]},children:[{type:a,value:"composables\u002Fstates.ts"}]},{type:b,tag:P,props:{className:[Q,"language-ts"]},children:[{type:b,tag:R,props:{},children:[{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aA}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:C}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,aB,q]},children:[{type:a,value:"useCounter"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:v}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,aC]},children:[{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,aD,D]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,aE]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:i}]}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:"0"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aA}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:C}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,aB,q]},children:[{type:a,value:aF}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:v}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,aC]},children:[{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,aD,D]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,aE]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:i}]}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"'color'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"'pink'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:N,props:{},children:[{type:b,tag:c,props:{className:[O]},children:[{type:a,value:ai}]},{type:b,tag:P,props:{className:[Q,aj]},children:[{type:b,tag:R,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:t}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,ak]},children:[{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:C}]},{type:a,value:" color "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:v}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u002F\u002F Same as useState('color')"}]},{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"Current color: {{ color }}"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g}]}]}]}]},toc:{title:aH,searchDepth:y,depth:y,links:[{id:ad,depth:y,text:ae},{id:L,depth:y,text:M,children:[{id:ag,depth:aI,text:ah},{id:aw,depth:aI,text:ax}]},{id:ay,depth:y,text:az}]}},template:"Docs"},templateOptions:{header:A,footer:A,aside:A,asideClass:aH,fluid:z,banner:z},_img:{}}],fetch:{"0":{headerLinks:[{title:"文档",items:[{title:"Getting Started",subtitle:"Create fast websites easily",slug:"getting-started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",subtitle:"Understand everything in Nuxt",slug:"guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"}]},{title:"API",slug:"api",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:"示例",slug:L,to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"社区",slug:"community",to:"\u002Fcommunity\u002Fgetting-help"}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:"\u002Fpartners"},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:"Announcements",to:"\u002Fannouncements"},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:"Sponsors",to:"\u002Fsponsors"},{title:"Teams",to:"\u002Fteams"},{title:"Tutorials",to:"\u002Ftutorials"},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:"\u002Fdocs"},{title:M,to:"\u002Fexamples"},{title:"Deployments",to:"\u002Fdeployments"},{title:"Master courses",href:"https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite"},{title:"Modules",href:"https:\u002F\u002Fmodules.nuxtjs.org"},{title:"Releases",to:"\u002Freleases"},{title:"Showcases",to:"\u002Fshowcases"},{title:"Themes",to:"\u002Fthemes"}]}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"data-fetching",to:"\u002Fguide\u002Ffeatures\u002Fdata-fetching",title:"Data Fetching"},next:{slug:"error-handling",to:"\u002Fguide\u002Ffeatures\u002Ferror-handling",title:"Error Handling"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample"])},mutations:X}}("text","element","span","token","punctuation","tag","\n"," ","\u003E","operator","prose-code-inline","(",")","\u003C","prose-paragraph","prose-a","function","\u003C\u002F","useState","script","keyword","=","string","=\u003E",2,false,true,"attr-name","const","class-name","template","button","\"","alert","setup",".","prose-h2","examples","Examples","prose-code","filename","pre","line-numbers","code",",","number","\n  ","state-management","State Management",void 0,"nofollow","noopener","noreferrer","_blank","read-more","\u002Fapi\u002Fcomposables\u002Fuse-state"," or ","best-practices","Best practices","prose-h3","basic-usage","Basic usage","app.vue","language-html","language-javascript","'counter'","known-class-name","Math","method","property-access","\n\n","div","@click","attr-value","attr-equals","link-example","advanced","Advanced","shared-state","Shared state","export","function-variable","generic-function","generic","builtin","useColor","p","",3)));