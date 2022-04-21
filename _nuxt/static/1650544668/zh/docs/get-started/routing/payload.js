__NUXT_JSONP__("/zh/docs/get-started/routing", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD){return {data:[{page:{key:"content:zh:docs:1.get-started:2.routing.md",generatedAt:new Date(1650544694212),mtime:new Date(1650544694196),slug:I,title:v,position:"999900010002",to:"\u002Fdocs\u002Fget-started\u002Frouting",draft:q,page:n,language:"zh",description:J,category:"get-started",csb_link:"https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fgithub\u002Fnuxt-academy\u002Fguides-examples\u002Ftree\u002Fmaster\u002F01_get_started\u002F02_routing?fontsize=14&hidenavigation=1&theme=dark",video:"cKutrcn-hdE",empty:q,excerpt:void 0,body:{raw:"---\ntitle: Routing\ndescription: Most websites have more than just one page. For example a home page, about page, contact page etc. In order to show these pages we need a Router.\ncategory: get-started\ncsb_link: https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fgithub\u002Fnuxt-academy\u002Fguides-examples\u002Ftree\u002Fmaster\u002F01_get_started\u002F02_routing?fontsize=14&hidenavigation=1&theme=dark\nvideo: cKutrcn-hdE\n---\n# Routing\n\nMost websites have more than just one page. For example a home page, about page, contact page etc. In order to show these pages we need a Router.\n\n---\n\n## Automatic Routes\n\nMost websites will have more than one page (i.e. a home page, about page, contact page etc.). In order to show these pages, we need a Router. That's where `vue-router` comes in. When working with the Vue application, you have to set up a configuration file (i.e. `router.js`) and add all your routes manually to it. Nuxt automatically generates the `vue-router` configuration for you, based on your provided Vue files inside the `pages` directory. That means you never have to write a router config again! Nuxt also gives you automatic code-splitting for all your routes.\n\nIn other words, all you have to do to have routing in your application is to create `.vue` files in the `pages` folder.\n\n::alert{type=\"next\"}\nLearn more about [Routing](\u002Fdocs\u002Ffeatures\u002Ffile-system-routing)\n::\n\n## Navigation\n\nTo navigate between pages of your app, you should use the [NuxtLink](\u002Fdocs\u002Ffeatures\u002Fnuxt-components#the-nuxtlink-component) component. This component is included with Nuxt and therefore you don't have to import it as you do with other components. It is similar to the HTML `\u003Ca\u003E` tag, except that instead of using a `href=\"\u002Fabout\"` we use `to=\"\u002Fabout\"`. If you have used `vue-router` before, you can think of the `\u003CNuxtLink\u003E` as a replacement for `\u003CRouterLink\u003E`\n\nA simple link to the `index.vue` page in your `pages` folder:\n\n```html{}[pages\u002Findex.vue]\n\u003Ctemplate\u003E\n  \u003CNuxtLink to=\"\u002F\"\u003EHome page\u003C\u002FNuxtLink\u003E\n\u003C\u002Ftemplate\u003E\n```\n\nFor all links to pages within your site, use `\u003CNuxtLink\u003E`. If you have links to other websites you should use the `\u003Ca\u003E` tag. See below for an example:\n\n```html{}[pages\u002Findex.vue]\n\u003Ctemplate\u003E\n  \u003Cmain\u003E\n    \u003Ch1\u003EHome page\u003C\u002Fh1\u003E\n    \u003CNuxtLink to=\"\u002Fabout\"\u003E\n      About (internal link that belongs to the Nuxt App)\n    \u003C\u002FNuxtLink\u003E\n    \u003Ca href=\"https:\u002F\u002Fnuxtjs.org\"\u003EExternal Link to another page\u003C\u002Fa\u003E\n  \u003C\u002Fmain\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n::alert{type=\"next\"}\nLearn more about the [NuxtLink component](\u002Fdocs\u002Ffeatures\u002Fnuxt-components#the-nuxtlink-component).\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:I},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:j,props:{class:"d-heading-description"},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:g},{type:b,tag:K,props:{id:L},children:[{type:b,tag:o,props:{href:"#automatic-routes"},children:[{type:a,value:M}]}]},{type:a,value:g},{type:b,tag:j,props:{},children:[{type:a,value:"Most websites will have more than one page (i.e. a home page, about page, contact page etc.). In order to show these pages, we need a Router. That's where "},{type:b,tag:h,props:{},children:[{type:a,value:w}]},{type:a,value:" comes in. When working with the Vue application, you have to set up a configuration file (i.e. "},{type:b,tag:h,props:{},children:[{type:a,value:"router.js"}]},{type:a,value:") and add all your routes manually to it. Nuxt automatically generates the "},{type:b,tag:h,props:{},children:[{type:a,value:w}]},{type:a,value:" configuration for you, based on your provided Vue files inside the "},{type:b,tag:h,props:{},children:[{type:a,value:x}]},{type:a,value:" directory. That means you never have to write a router config again! Nuxt also gives you automatic code-splitting for all your routes."}]},{type:a,value:g},{type:b,tag:j,props:{},children:[{type:a,value:"In other words, all you have to do to have routing in your application is to create "},{type:b,tag:h,props:{},children:[{type:a,value:".vue"}]},{type:a,value:" files in the "},{type:b,tag:h,props:{},children:[{type:a,value:x}]},{type:a,value:" folder."}]},{type:a,value:g},{type:b,tag:N,props:{type:O},children:[{type:b,tag:j,props:{},children:[{type:a,value:"Learn more about "},{type:b,tag:o,props:{href:"\u002Fdocs\u002Ffeatures\u002Ffile-system-routing"},children:[{type:a,value:v}]}]}]},{type:a,value:g},{type:b,tag:K,props:{id:P},children:[{type:b,tag:o,props:{href:"#navigation"},children:[{type:a,value:Q}]}]},{type:a,value:g},{type:b,tag:j,props:{},children:[{type:a,value:"To navigate between pages of your app, you should use the "},{type:b,tag:o,props:{href:R},children:[{type:a,value:p}]},{type:a,value:" component. This component is included with Nuxt and therefore you don't have to import it as you do with other components. It is similar to the HTML "},{type:b,tag:h,props:{},children:[{type:a,value:S}]},{type:a,value:" tag, except that instead of using a "},{type:b,tag:h,props:{},children:[{type:a,value:"href=\"\u002Fabout\""}]},{type:a,value:" we use "},{type:b,tag:h,props:{},children:[{type:a,value:"to=\"\u002Fabout\""}]},{type:a,value:". If you have used "},{type:b,tag:h,props:{},children:[{type:a,value:w}]},{type:a,value:" before, you can think of the "},{type:b,tag:h,props:{},children:[{type:a,value:T}]},{type:a,value:" as a replacement for "},{type:b,tag:h,props:{},children:[{type:a,value:"\u003CRouterLink\u003E"}]}]},{type:a,value:g},{type:b,tag:j,props:{},children:[{type:a,value:"A simple link to the "},{type:b,tag:h,props:{},children:[{type:a,value:"index.vue"}]},{type:a,value:" page in your "},{type:b,tag:h,props:{},children:[{type:a,value:x}]},{type:a,value:" folder:"}]},{type:a,value:g},{type:b,tag:U,props:{},children:[{type:b,tag:c,props:{className:[V]},children:[{type:a,value:W}]},{type:b,tag:X,props:{className:[Y,Z]},children:[{type:b,tag:_,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:b,tag:c,props:{className:[d,e,C]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\u002F"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:j,props:{},children:[{type:a,value:"For all links to pages within your site, use "},{type:b,tag:h,props:{},children:[{type:a,value:T}]},{type:a,value:". If you have links to other websites you should use the "},{type:b,tag:h,props:{},children:[{type:a,value:S}]},{type:a,value:" tag. See below for an example:"}]},{type:a,value:g},{type:b,tag:U,props:{},children:[{type:b,tag:c,props:{className:[V]},children:[{type:a,value:W}]},{type:b,tag:X,props:{className:[Y,Z]},children:[{type:b,tag:_,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:b,tag:c,props:{className:[d,e,C]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\u002Fabout"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"\n      About (internal link that belongs to the Nuxt App)\n    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ad}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"href"}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:b,tag:c,props:{className:[d,e,C]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"https:\u002F\u002Fnuxtjs.org"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"External Link to another page"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:N,props:{type:O},children:[{type:b,tag:j,props:{},children:[{type:a,value:"Learn more about the "},{type:b,tag:o,props:{href:R},children:[{type:a,value:"NuxtLink component"}]},{type:a,value:"."}]}]}]},toc:{title:ae,searchDepth:s,depth:s,links:[{id:L,depth:s,text:M},{id:P,depth:s,text:Q}]}},template:af},templateOptions:{header:n,footer:n,aside:n,asideClass:ae,fluid:q,banner:n},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:ag,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:ah,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:ai,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:af,subtitle:"Create fast websites easily",slug:"docs",to:aj,icon:"docs.svg",color:"bg-green-500"},{title:ak,subtitle:"Understand everything in Nuxt",slug:"examples",to:al,icon:"examples.svg",color:"bg-green-600"},{title:am,subtitle:"Learn with concrete cases",slug:"tutorials",to:an,icon:"tutorials.svg",color:"bg-green-700"},{title:t,subtitle:F,href:u,icon:G,color:H}]},{title:"Explore",items:[{title:ao,subtitle:"How to Deploy Nuxt",slug:"deployments",to:ap,icon:"deployments.svg",color:"bg-indigo-light"},{title:aq,subtitle:"Extend the power of Nuxt",href:ar,icon:"modules.svg",color:"bg-indigo"},{title:as,subtitle:"Get started with themes",slug:"themes",to:at,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:au,subtitle:"Latest news about Nuxt",slug:"announcements",to:av,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aw,subtitle:"They are Nuxt",slug:"teams",to:ax,icon:"teams.svg",color:"bg-mint-light"},{title:ay,subtitle:"All the code we have released",slug:"releases",to:az,icon:"releases.svg",color:"bg-mint"},{title:aA,subtitle:"They trust us",slug:"sponsors",to:aB,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aC}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aC},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:au,to:av},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aA,to:aB},{title:aw,to:ax},{title:am,to:an},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:aj},{title:ak,to:al},{title:ao,to:ap},{title:t,href:u},{title:aq,href:ar},{title:ay,to:az},{title:ag,to:ah},{title:as,to:at}]}],showCookieBanner:q},"1":{lastRelease:aD,masterCoursesLink:{title:t,subtitle:F,href:u,icon:G,color:H}},"2":{lastRelease:aD,masterCoursesLink:{title:t,subtitle:F,href:u,icon:G,color:H}},"3":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fsee\u002Fpangu",prev:{slug:"hello-world",to:"\u002Fexamples\u002Frouting\u002Fhello-world",title:"Hello World"},next:{slug:"active-link-classes",to:"\u002Fexamples\u002Frouting\u002Factive-link-classes",title:"Active Link Classes"}},"4":{_error:{name:"FetchError",message:"500 Internal Server Error (https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fsee\u002Fpangu\u002Fmain\u002Fcontent\u002F)",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",ai,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections"])},mutations:[]}}("text","element","span","token","punctuation","tag","\n","prose-code-inline","\u003E","prose-paragraph","\u003C","\u003C\u002F","\"",true,"prose-a","NuxtLink",false,"template",2,"Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","Routing","vue-router","pages","\n  "," ","attr-name","attr-value","attr-equals","=","\n    ","Learn more with experts","master-courses.svg","bg-green-800","routing","Most websites have more than just one page. For example a home page, about page, contact page etc. In order to show these pages we need a Router.","prose-h2","automatic-routes","Automatic Routes","alert","next","navigation","Navigation","\u002Fdocs\u002Ffeatures\u002Fnuxt-components#the-nuxtlink-component","\u003Ca\u003E","\u003CNuxtLink\u003E","prose-code","filename","pages\u002Findex.vue","pre","language-html","line-numbers","code","to","Home page","main","h1","a","","Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));