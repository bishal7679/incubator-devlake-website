"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1731],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8377:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"Recurring Pipelines",sidebar_position:3,description:"Recurring Pipelines\n"},u=void 0,p={unversionedId:"UserManuals/RecurringPipelines",id:"version-v0.11.0/UserManuals/RecurringPipelines",title:"Recurring Pipelines",description:"Recurring Pipelines\n",source:"@site/versioned_docs/version-v0.11.0/UserManuals/RecurringPipelines.md",sourceDirName:"UserManuals",slug:"/UserManuals/RecurringPipelines",permalink:"/zh/docs/v0.11.0/UserManuals/RecurringPipelines",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11.0/UserManuals/RecurringPipelines.md",tags:[],version:"v0.11.0",sidebarPosition:3,frontMatter:{title:"Recurring Pipelines",sidebar_position:3,description:"Recurring Pipelines\n"},sidebar:"docsSidebar",previous:{title:"Advanced Mode",permalink:"/zh/docs/v0.11.0/UserManuals/AdvancedMode"},next:{title:"GitHub User Guide",permalink:"/zh/docs/v0.11.0/UserManuals/GitHubUserGuide"}},s={},c=[{value:"How to create recurring pipelines?",id:"how-to-create-recurring-pipelines",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-create-recurring-pipelines"},"How to create recurring pipelines?"),(0,a.kt)("p",null,"Once you've verified that a pipeline works, most likely you'll want to run that pipeline periodically to keep data fresh, and DevLake's pipeline blueprint feature have got you covered."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click 'Create Pipeline Run' and")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Toggle the plugins you'd like to run, here we use GitHub and GitExtractor plugin as an example"),(0,a.kt)("li",{parentName:"ul"},"Toggle on Automate Pipeline\n",(0,a.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/14050754/163596590-484e4300-b17e-4119-9818-52463c10b889.png",alt:"image"}))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click 'Add Blueprint'. Fill in the form and 'Save Blueprint'."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NOTE"),": The schedule syntax is standard unix cron syntax, ",(0,a.kt)("a",{parentName:"li",href:"https://crontab.guru/"},"Crontab.guru")," is an useful reference"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"IMPORANT"),": The scheduler is running using the ",(0,a.kt)("inlineCode",{parentName:"li"},"UTC")," timezone. If you want data collection to happen at 3 AM New York time (UTC-04:00) every day, use ",(0,a.kt)("strong",{parentName:"li"},"Custom Shedule")," and set it to ",(0,a.kt)("inlineCode",{parentName:"li"},"0 7 * * *"))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14050754/163596655-db59e154-405f-4739-89f2-7dceab7341fe.png",alt:"image"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click 'Save Blueprint'.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click 'Pipeline Blueprints', you can view and edit the new blueprint in the blueprint list."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14050754/163596773-4fb4237e-e3f2-4aef-993f-8a1499ca30e2.png",alt:"image"})))))}d.isMDXComponent=!0}}]);