(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{121:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/directory-2d201dc9946ac06eb5a063bc14673264.png"},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),l=(a(0),a(87)),o={id:"how-it-works",title:"How It Works"},r={unversionedId:"how-it-works",id:"how-it-works",isDocsHomePage:!1,title:"How It Works",description:"Boil Directory",source:"@site/docs/how-it-works.md",slug:"/how-it-works",permalink:"/boil-cli-docs/how-it-works",version:"current",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/boil-cli-docs/"},next:{title:"Commands",permalink:"/boil-cli-docs/commands"}},s=[{value:"Boil Directory",id:"boil-directory",children:[]},{value:"Template Arguments",id:"template-arguments",children:[]},{value:"Placeholders",id:"placeholders",children:[]},{value:"Template Functions",id:"template-functions",children:[]}],c={toc:s};function p(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"boil-directory"},"Boil Directory"),Object(l.b)("p",null,"Boilerplate templates are stored in a directory called ",Object(l.b)("inlineCode",{parentName:"p"},".boilerplate")," at the root of your project. It consists of sub-directories, a ",Object(l.b)("inlineCode",{parentName:"p"},"global.args.yml")," file and optionally some ",Object(l.b)("inlineCode",{parentName:"p"},"*.js")," files."),Object(l.b)("p",null,"Here is a simple example of a ",Object(l.b)("inlineCode",{parentName:"p"},".boilerplate")," template directory."),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("img",{alt:"img",src:a(121).default})),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Each sub-directory is a boilerplate template"),". You will be able to generate boilerplate files and/or folders from a template using the following command (",Object(l.b)("strong",{parentName:"p"},Object(l.b)("a",{parentName:"strong",href:"/boil-cli-docs/commands"},"see here for more details")),")."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"boil up [DIRECTORY] [ARGS], e.g. boil up component --name Example --filetype js\n")),Object(l.b)("h2",{id:"template-arguments"},"Template Arguments"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Template arguments are variables")," that can be used within your boilerplate templates. They can be defined globally, i.e. shared amongst all templates, within the ",Object(l.b)("inlineCode",{parentName:"p"},"global.args.yml")," file. For template-specific arguments you can define them in ",Object(l.b)("inlineCode",{parentName:"p"},"local.args.yml")," files within your individual template folders."),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Local arguments takes precedence over global arguments. If the same argument name is defined in both ",Object(l.b)("inlineCode",{parentName:"p"},"global.args.yml"),", as well as ",Object(l.b)("inlineCode",{parentName:"p"},"local.args.yml"),", then the definition from ",Object(l.b)("inlineCode",{parentName:"p"},"local.args.yml")," will be used."))),Object(l.b)("p",null,"Here is the structure of an argument definition within the ",Object(l.b)("inlineCode",{parentName:"p"},"*.args.yml")," files."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yml"},"# definition of 'filetype' arg\nfiletype: # REQUIRED: arg will be called using --filetype\n  shorthand: ft # OPTIONAL: arg can be called using -ft instead of --filetype\n  description: file type # OPTIONAL: used in help menu\n  default: js # OPTIONAL: if arg not provided by user then default to this value\n  options: # OPTIONAL: if user provides an input not in this list then throw an error\n    - js\n    - py\n    - go\n")),Object(l.b)("h2",{id:"placeholders"},"Placeholders"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Template arguments can be called within file names, folder names and within any file's content")," using template argument placeholders."),Object(l.b)("p",null,"The placeholders are defined by wrapping them in triangles. The placeholders will be replaced with the user-provided argument values when the boilerplate files and/or folders are generated."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"<| argument |>\n")),Object(l.b)("h2",{id:"template-functions"},"Template Functions"),Object(l.b)("p",null,"Template arguments are able to solve the majority of templating configuration problems. However, by adding the power of Javascript functions, there is really no limit to how dynamic and customized your templates can be."),Object(l.b)("p",null,"In order to use template functions ",Object(l.b)("strong",{parentName:"p"},"the filenames need to match the desired argument name"),". Below is the structure of a template function."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// usage in templates: <| example(arg1, arg2, ...) |>\nmodule.exports = function (/* any args incl. local & global template args */) {\n  // insert code here\n};\n")),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"You can use any arguments you like - just the way you'd write a regular Javascript function. ",Object(l.b)("strong",{parentName:"p"},"If you'd like to use template arguments as inputs to your function then match the function argument name to the desired template argument name"),"."))),Object(l.b)("p",null,"Here's a simple example."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// greeting.js\nmodule.exports = function (name) {\n  return `Hi, my name is ${name}!`;\n};\n")),Object(l.b)("p",null,"You could then invoke the function above within a template placeholder."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"<| greeting(name) |>\n")))}p.isMDXComponent=!0}}]);