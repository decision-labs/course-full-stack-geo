"use strict";(self.webpackChunkcourse_website=self.webpackChunkcourse_website||[]).push([[6155],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),l=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=l(e.components);return r.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=n,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(g,p(p({ref:a},c),{},{components:t})):r.createElement(g,p({ref:a},c))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var l=2;l<o;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},110:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),n=(t(7294),t(3905));const o={sidebar_position:1},p="Create a Page",s={unversionedId:"Ch01_Spatial_Databases/create-a-page",id:"Ch01_Spatial_Databases/create-a-page",title:"Create a Page",description:"Add Markdown or React files to src/pages to create a standalone page:",source:"@site/docs/Ch01_Spatial_Databases/create-a-page.md",sourceDirName:"Ch01_Spatial_Databases",slug:"/Ch01_Spatial_Databases/create-a-page",permalink:"/course-full-stack-geo/docs/Ch01_Spatial_Databases/create-a-page",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Ch01_Spatial_Databases/create-a-page.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf0d Spatial Databases",permalink:"/course-full-stack-geo/docs/category/-spatial-databases"},next:{title:"Create a Document",permalink:"/course-full-stack-geo/docs/Ch01_Spatial_Databases/create-a-document"}},i={},l=[{value:"Create your first React Page",id:"create-your-first-react-page",level:2},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",level:2}],c={toc:l};function u(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-page"},"Create a Page"),(0,n.kt)("p",null,"Add ",(0,n.kt)("strong",{parentName:"p"},"Markdown or React")," files to ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages")," to create a ",(0,n.kt)("strong",{parentName:"p"},"standalone page"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/index.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/foo.md")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),(0,n.kt)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),(0,n.kt)("p",null,"Create a file at ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n")),(0,n.kt)("p",null,"A new page is now available at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/my-react-page"},"http://localhost:3000/my-react-page"),"."),(0,n.kt)("h2",{id:"create-your-first-markdown-page"},"Create your first Markdown Page"),(0,n.kt)("p",null,"Create a file at ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"# My Markdown page\n\nThis is a Markdown page\n")),(0,n.kt)("p",null,"A new page is now available at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/my-markdown-page"},"http://localhost:3000/my-markdown-page"),"."))}u.isMDXComponent=!0}}]);