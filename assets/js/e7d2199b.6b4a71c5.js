"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1216],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?i.createElement(k,o(o({ref:n},u),{},{components:t})):i.createElement(k,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3871:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),o=["components"],l={title:"Jenkins",description:"Jenkins Plugin\n"},s=void 0,c={unversionedId:"Plugins/jenkins",id:"Plugins/jenkins",title:"Jenkins",description:"Jenkins Plugin\n",source:"@site/docs/Plugins/jenkins.md",sourceDirName:"Plugins",slug:"/Plugins/jenkins",permalink:"/docs/Plugins/jenkins",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/jenkins.md",tags:[],version:"current",frontMatter:{title:"Jenkins",description:"Jenkins Plugin\n"},sidebar:"docsSidebar",previous:{title:"GitLab",permalink:"/docs/Plugins/gitlab"},next:{title:"Jira",permalink:"/docs/Plugins/jira"}},u={},p=[{value:"Summary",id:"summary",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"By <code>config-ui</code>",id:"by-config-ui",level:3},{value:"Collect Data From Jenkins",id:"collect-data-from-jenkins",level:2},{value:"Relationship between job and build",id:"relationship-between-job-and-build",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This plugin collects Jenkins data through ",(0,a.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/using/remote-access-api/"},"Remote Access API"),". It then computes and visualizes various DevOps metrics from the Jenkins data."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61080/141943122-dcb08c35-cb68-4967-9a7c-87b63c2d6988.png",alt:"image"})),(0,a.kt)("h2",{id:"metrics"},"Metrics"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Build Count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of builds created")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Build Success Rate"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The percentage of successful builds")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"In order to fully use this plugin, you will need to set various configurations via Dev Lake's ",(0,a.kt)("inlineCode",{parentName:"p"},"config-ui"),"."),(0,a.kt)("h3",{id:"by-config-ui"},"By ",(0,a.kt)("inlineCode",{parentName:"h3"},"config-ui")),(0,a.kt)("p",null,"The connection section of the configuration screen requires the following key fields to connect to the Jenkins API."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connection Name ","[READONLY]",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'\u26a0\ufe0f Defaults to "Jenkins" and may not be changed. As Jenkins is a ',(0,a.kt)("em",{parentName:"li"},"single-source data provider")," at the moment, the connection name is read-only as there is only one instance to manage. As we advance on our development roadmap we may enable multi-source connections for Jenkins in the future."))),(0,a.kt)("li",{parentName:"ul"},"Endpoint URL (REST URL, starts with ",(0,a.kt)("inlineCode",{parentName:"li"},"https://")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"http://"),"i, ends with ",(0,a.kt)("inlineCode",{parentName:"li"},"/"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This should be a valid REST API Endpoint eg. ",(0,a.kt)("inlineCode",{parentName:"li"},"https://ci.jenkins.io/")))),(0,a.kt)("li",{parentName:"ul"},"Username (E-mail)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Your User ID for the Jenkins Instance."))),(0,a.kt)("li",{parentName:"ul"},"Password (Secret Phrase or API Access Token)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Secret password for common credentials."),(0,a.kt)("li",{parentName:"ul"},"For help on Username and Password, please see official Jenkins Docs on Using Credentials"),(0,a.kt)("li",{parentName:"ul"},"Or you can use ",(0,a.kt)("strong",{parentName:"li"},"API Access Token")," for this field, which can be generated at ",(0,a.kt)("inlineCode",{parentName:"li"},"User")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Configure")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"API Token")," section on Jenkins.")))),(0,a.kt)("p",null,"Click Save Connection to update connection settings."),(0,a.kt)("h2",{id:"collect-data-from-jenkins"},"Collect Data From Jenkins"),(0,a.kt)("p",null,"To collect data, select ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page and paste a JSON config like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "jenkins",\n      "options": {}\n    }\n  ]\n]\n')),(0,a.kt)("h2",{id:"relationship-between-job-and-build"},"Relationship between job and build"),(0,a.kt)("p",null,"Build is kind of a snapshot of job. Running job each time creates a build."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null))}m.isMDXComponent=!0}}]);