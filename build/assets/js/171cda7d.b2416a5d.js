"use strict";(self.webpackChunkcourse_website=self.webpackChunkcourse_website||[]).push([[6155],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),g=o,m=u["".concat(l,".").concat(g)]||u[g]||c[g]||s;return a?r.createElement(m,n(n({ref:t},d),{},{components:a})):r.createElement(m,n({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,n=new Array(s);n[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,n[1]=i;for(var p=2;p<s;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},110:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=a(7462),o=(a(7294),a(3905));const s={sidebar_position:1},n="Spatial Database",i={unversionedId:"Ch01_Spatial_Databases/create-a-page",id:"Ch01_Spatial_Databases/create-a-page",title:"Spatial Database",description:"Spatial Databases store geographic information in the relational format including coordinates and topologies. There are two ways to represent data i.e. vectors and raster. Vector is high-quality geographical data, raster used to show patterns, made available large sets of data.",source:"@site/docs/Ch01_Spatial_Databases/create-a-page.md",sourceDirName:"Ch01_Spatial_Databases",slug:"/Ch01_Spatial_Databases/create-a-page",permalink:"/course-full-stack-geo/docs/Ch01_Spatial_Databases/create-a-page",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Ch01_Spatial_Databases/create-a-page.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf0d Spatial Databases",permalink:"/course-full-stack-geo/docs/category/-spatial-databases"},next:{title:"Create a Document",permalink:"/course-full-stack-geo/docs/Ch01_Spatial_Databases/create-a-document"}},l={},p=[{value:"PostGIS",id:"postgis",level:2},{value:"Installing PostGIS",id:"installing-postgis",level:2},{value:"Gather some data",id:"gather-some-data",level:2},{value:"Creating Server and databases",id:"creating-server-and-databases",level:2},{value:"Download some data",id:"download-some-data",level:2}],d={toc:p};function c(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spatial-database"},"Spatial Database"),(0,o.kt)("p",null,"Spatial Databases store geographic information in the relational format including coordinates and topologies. There are two ways to represent data i.e. vectors and raster. Vector is high-quality geographical data, raster used to show patterns, made available large sets of data."),(0,o.kt)("h2",{id:"postgis"},"PostGIS"),(0,o.kt)("p",null,"PostGIS is a spatial database and an extension of PostgreSQL. It is used to perform CRUD operations on GIS data. PostGIS extends PostgreSQL by adding three new features: spatial indexes, spatial types, and spatial functions."),(0,o.kt)("h2",{id:"installing-postgis"},"Installing PostGIS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://www.pgadmin.org/"},"https://www.pgadmin.org/")," and download the latest version of pgAdmin for your system"),(0,o.kt)("li",{parentName:"ol"},"Download PostgreSQL from ",(0,o.kt)("a",{parentName:"li",href:"https://www.enterprisedb.com/downloads/postgres-postgresql-downloads"},"https://www.enterprisedb.com/downloads/postgres-postgresql-downloads")),(0,o.kt)("li",{parentName:"ol"},"Follow downloading steps from ",(0,o.kt)("a",{parentName:"li",href:"https://postgis.net/workshops/postgis-intro/installation.html"},"https://postgis.net/workshops/postgis-intro/installation.html"),".")),(0,o.kt)("h2",{id:"gather-some-data"},"Gather some data"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://overpass-turbo.eu/"},"https://overpass-turbo.eu/")),(0,o.kt)("li",{parentName:"ol"},"Select data of your choice. (Like buildings=","*",")"),(0,o.kt)("li",{parentName:"ol"},"Download data in the form of GeoJson"),(0,o.kt)("li",{parentName:"ol"},"Place anywhere in you local storage."),(0,o.kt)("li",{parentName:"ol"},"Query for our course ",(0,o.kt)("a",{parentName:"li",href:"https://overpass-turbo.eu/s/1l0U"},"https://overpass-turbo.eu/s/1l0U")," to download lahore's neighbourhoods")),(0,o.kt)("h2",{id:"creating-server-and-databases"},"Creating Server and databases"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install OGR2OG. (Using brew on Mac.)"),(0,o.kt)("li",{parentName:"ol"},"Open pgAdmin."),(0,o.kt)("li",{parentName:"ol"},"Create Database."),(0,o.kt)("li",{parentName:"ol"},"Type your password of the master user you created while installing"),(0,o.kt)("li",{parentName:"ol"},"Right Click on servers > Register > Server...")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(813).Z,width:"1036",height:"808"})),(0,o.kt)("h2",{id:"download-some-data"},"Download some data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'wget link-to-geojson\nogr2ogr -f "PostgreSQL" PG:"dbname=mobilitydb user=docker password=docker" lahore-neighbourhoods.geojson -nln lahore_neighbourhoods\n')))}c.isMDXComponent=!0},813:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2022-08-15-15-23-55-connect-to-db-pgadmin-6b4177e5569d210ff408e903444e0094.gif"}}]);