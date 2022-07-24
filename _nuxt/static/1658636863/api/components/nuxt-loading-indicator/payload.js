__NUXT_JSONP__("/api/components/nuxt-loading-indicator", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){return {data:[{page:{key:"content:en:3.api:2.components:4.nuxt-loading-indicator.md",generatedAt:new Date(1658636987166),mtime:new Date(1658636987147),slug:"nuxt-loading-indicator",title:r,position:"000300020004",to:"\u002Fapi\u002Fcomponents\u002Fnuxt-loading-indicator",draft:j,page:k,language:"en",empty:j,description:s,excerpt:x,body:{raw:"# `\u003CNuxtLoadingIndicator\u003E`\n\n::ReadMore{link=\"\u002Fguide\u002Ffeatures\u002Frouting\"}\n::\n\nNuxt provides `\u003CNuxtLoadingIndicator\u003E` to display a progress bar on page navigation.\n\n## Examples\n\n### Basic usage\n\nAdd `\u003CNuxtLoadingIndicator\u002F\u003E` in your `app.vue` or layouts.\n\n```vue [app.vue]\n\u003Ctemplate\u003E\n  \u003CNuxtLayout\u003E\n    \u003CNuxtLoadingIndicator \u002F\u003E \u003C!-- here --\u003E\n    \u003CNuxtPage \u002F\u003E\n  \u003CNuxtLayout\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n:button-link[Open on StackBlitz]{href=\"https:\u002F\u002Fstackblitz.com\u002Fgithub\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fexamples\u002Frouting\u002Fpages?terminal=dev&file=\u002Fapp.vue\" blank}\n\n## Props\n\n- **color**: The color of the loading bar.\n- **height**: Height of the loading bar, in pixels (default `3`).\n- **duration**: Duration of the loading bar, in milliseconds (default `2000`).\n- **throttle**: Throttle the appearing and hiding, in milliseconds (default `200`).\n\n::alert{type=info icon=🔎}\nThis component is completely optional. To achieve full customization, you can implement your own one based on [this file](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fnuxt\u002Fsrc\u002Fapp\u002Fcomponents\u002Fnuxt-loading-indicator.ts).\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"nuxtloadingindicator"},children:[{type:b,tag:h,props:{},children:[{type:a,value:r}]}]},{type:a,value:d},{type:b,tag:"read-more",props:{link:"\u002Fguide\u002Ffeatures\u002Frouting"},children:[]},{type:a,value:d},{type:b,tag:t,props:{},children:[{type:a,value:"Nuxt provides "},{type:b,tag:h,props:{},children:[{type:a,value:r}]},{type:a,value:" to display a progress bar on page navigation."}]},{type:a,value:d},{type:b,tag:y,props:{id:u},children:[{type:b,tag:l,props:{href:"#examples"},children:[{type:a,value:m}]}]},{type:a,value:d},{type:b,tag:"prose-h3",props:{id:z},children:[{type:b,tag:l,props:{href:"#basic-usage"},children:[{type:a,value:A}]}]},{type:a,value:d},{type:b,tag:t,props:{},children:[{type:a,value:"Add "},{type:b,tag:h,props:{},children:[{type:a,value:"\u003CNuxtLoadingIndicator\u002F\u003E"}]},{type:a,value:" in your "},{type:b,tag:h,props:{},children:[{type:a,value:B}]},{type:a,value:" or layouts."}]},{type:a,value:d},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:c,props:{className:["filename"]},children:[{type:a,value:B}]},{type:b,tag:"pre",props:{className:["language-html","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:c,props:{className:[e,f]},children:[{type:b,tag:c,props:{className:[e,f]},children:[{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:i}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:n}]}]},{type:a,value:D},{type:b,tag:c,props:{className:[e,f]},children:[{type:b,tag:c,props:{className:[e,f]},children:[{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:i}]},{type:a,value:E}]},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:n}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[e,f]},children:[{type:b,tag:c,props:{className:[e,f]},children:[{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:i}]},{type:a,value:"NuxtLoadingIndicator"}]},{type:a,value:v},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:G}]}]},{type:a,value:v},{type:b,tag:c,props:{className:[e,"comment"]},children:[{type:a,value:"\u003C!-- here --\u003E"}]},{type:a,value:F},{type:b,tag:c,props:{className:[e,f]},children:[{type:b,tag:c,props:{className:[e,f]},children:[{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:i}]},{type:a,value:"NuxtPage"}]},{type:a,value:v},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:G}]}]},{type:a,value:D},{type:b,tag:c,props:{className:[e,f]},children:[{type:b,tag:c,props:{className:[e,f]},children:[{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:i}]},{type:a,value:E}]},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:n}]}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,f]},children:[{type:b,tag:c,props:{className:[e,f]},children:[{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:"\u003C\u002F"}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:n}]}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:"button-link",props:{":blank":"true",href:"https:\u002F\u002Fstackblitz.com\u002Fgithub\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fexamples\u002Frouting\u002Fpages?terminal=dev&file=\u002Fapp.vue"},children:[{type:a,value:"Open on StackBlitz"}]},{type:a,value:d},{type:b,tag:y,props:{id:H},children:[{type:b,tag:l,props:{href:"#props"},children:[{type:a,value:I}]}]},{type:a,value:d},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:d},{type:b,tag:o,props:{},children:[{type:a,value:d},{type:b,tag:p,props:{},children:[{type:a,value:"color"}]},{type:a,value:": The color of the loading bar."},{type:a,value:d}]},{type:a,value:d},{type:b,tag:o,props:{},children:[{type:a,value:d},{type:b,tag:p,props:{},children:[{type:a,value:"height"}]},{type:a,value:": Height of the loading bar, in pixels (default "},{type:b,tag:h,props:{},children:[{type:a,value:"3"}]},{type:a,value:w},{type:a,value:d}]},{type:a,value:d},{type:b,tag:o,props:{},children:[{type:a,value:d},{type:b,tag:p,props:{},children:[{type:a,value:"duration"}]},{type:a,value:": Duration of the loading bar, in milliseconds (default "},{type:b,tag:h,props:{},children:[{type:a,value:"2000"}]},{type:a,value:w},{type:a,value:d}]},{type:a,value:d},{type:b,tag:o,props:{},children:[{type:a,value:d},{type:b,tag:p,props:{},children:[{type:a,value:"throttle"}]},{type:a,value:": Throttle the appearing and hiding, in milliseconds (default "},{type:b,tag:h,props:{},children:[{type:a,value:"200"}]},{type:a,value:w},{type:a,value:d}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:"alert",props:{icon:"🔎",type:"info"},children:[{type:b,tag:t,props:{},children:[{type:a,value:"This component is completely optional. To achieve full customization, you can implement your own one based on "},{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fnuxt\u002Fsrc\u002Fapp\u002Fcomponents\u002Fnuxt-loading-indicator.ts",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"this file"}]},{type:a,value:"."}]}]}]},toc:{title:s,searchDepth:q,depth:q,links:[{id:u,depth:q,text:m,children:[{id:z,depth:3,text:A}]},{id:H,depth:q,text:I}]}},template:J},templateOptions:{header:k,footer:k,aside:k,asideClass:s,fluid:j,banner:j},_img:{}}],fetch:{"0":{headerLinks:[{title:J,items:[{title:"Getting Started",subtitle:"Create fast websites easily",slug:"getting-started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",subtitle:"Understand everything in Nuxt",slug:"guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"}]},{title:"API",slug:"api",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:m,slug:u,to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",slug:"community",to:"\u002Fcommunity\u002Fgetting-help"}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:"\u002Fpartners"},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:"Announcements",to:"\u002Fannouncements"},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:"Sponsors",to:"\u002Fsponsors"},{title:"Teams",to:"\u002Fteams"},{title:"Tutorials",to:"\u002Ftutorials"},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:"\u002Fdocs"},{title:m,to:"\u002Fexamples"},{title:"Deployments",to:"\u002Fdeployments"},{title:"Master courses",href:"https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite"},{title:"Modules",href:"https:\u002F\u002Fmodules.nuxtjs.org"},{title:"Releases",to:"\u002Freleases"},{title:"Showcases",to:"\u002Fshowcases"},{title:"Themes",to:"\u002Fthemes"}]}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"nuxt-link",to:"\u002Fapi\u002Fcomponents\u002Fnuxt-link",title:"\u003CNuxtLink\u003E"},next:{slug:"nuxt-error-boundary",to:"\u002Fapi\u002Fcomponents\u002Fnuxt-error-boundary",title:"\u003CNuxtErrorBoundary\u003E"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:x}}("text","element","span","\n","token","tag","punctuation","prose-code-inline","\u003C",false,true,"prose-a","Examples","\u003E","prose-li","prose-strong",2,"\u003CNuxtLoadingIndicator\u003E","","prose-paragraph","examples"," ",").",void 0,"prose-h2","basic-usage","Basic usage","app.vue","template","\n  ","NuxtLayout","\n    ","\u002F\u003E","props","Props","Docs")));