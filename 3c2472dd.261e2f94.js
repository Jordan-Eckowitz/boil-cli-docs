(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return m}));var n=a(3),l=a(7),o=(a(0),a(87)),i={id:"commands",title:"Commands"},r={unversionedId:"commands",id:"commands",isDocsHomePage:!1,title:"Commands",description:"Initialize a Boilerplate Library",source:"@site/docs/commands.md",slug:"/commands",permalink:"/boil-cli-docs/commands",version:"current",sidebar:"someSidebar",previous:{title:"How It Works",permalink:"/boil-cli-docs/how-it-works"}},p=[{value:"Initialize a Boilerplate Library",id:"initialize-a-boilerplate-library",children:[]},{value:"Create a New Template",id:"create-a-new-template",children:[]},{value:"Create a New Template Function",id:"create-a-new-template-function",children:[]},{value:"Cook Up Some Boilerplate",id:"cook-up-some-boilerplate",children:[]},{value:"List All Templates",id:"list-all-templates",children:[]}],c={toc:p};function m(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"initialize-a-boilerplate-library"},"Initialize a Boilerplate Library"),Object(o.b)("p",null,"Call this command to initialize a new Boil template directory. This generates a ",Object(o.b)("inlineCode",{parentName:"p"},".boilerplate")," folder at the root of your current directory. It contains an example template folder called ",Object(o.b)("inlineCode",{parentName:"p"},"component")," as well as a ",Object(o.b)("inlineCode",{parentName:"p"},"global.args.yml")," file and a template function."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/boil-cli-docs/how-it-works"},"See here"))," for more details on the template folder structure, syntax and purpose of the ",Object(o.b)("inlineCode",{parentName:"p"},"*.args.yml")," files."))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"USAGE\n  $ boil init\n\nOPTIONS\n  -h, --help  show CLI help\n")),Object(o.b)("h2",{id:"create-a-new-template"},"Create a New Template"),Object(o.b)("p",null,"Create a new template directory using this command."),Object(o.b)("p",null,"It will generate a new folder in the ",Object(o.b)("inlineCode",{parentName:"p"},".boilerplate")," directory, with the provided name, as well as a ",Object(o.b)("inlineCode",{parentName:"p"},"local.args.yml")," file. You can optionally pass in a list of arguments to pre-fill the ",Object(o.b)("inlineCode",{parentName:"p"},"local.args.yml")," file with settings for local arguments."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"USAGE\n  $ boil create [NAME]\n\nARGUMENTS\n  NAME  template name\n\nOPTIONS\n  -a, --args=args  local template args\n  -h, --help       show CLI help\n")),Object(o.b)("p",null,"Here's some examples."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"# template with no arguments (can be added later)\nboil create person\n\n# template with name, surname & age arguments\nboil create person --args name,surname,age\nboil create person -a name,surname,age\n")),Object(o.b)("h2",{id:"create-a-new-template-function"},"Create a New Template Function"),Object(o.b)("p",null,"Create a new boilerplate template function."),Object(o.b)("p",null,"This generates a ",Object(o.b)("inlineCode",{parentName:"p"},"*.js")," file in the ",Object(o.b)("inlineCode",{parentName:"p"},".boilerplate")," directory with the provided name."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"USAGE\n  $ boil create-function [NAME]\n\nARGUMENTS\n  NAME  template function name\n\nOPTIONS\n  -h, --help  show CLI help\n")),Object(o.b)("p",null,"Here's an example."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"# creates a function called timestamp.js\nboil create-function timestamp\n")),Object(o.b)("h2",{id:"cook-up-some-boilerplate"},"Cook Up Some Boilerplate"),Object(o.b)("p",null,"This is what you'll do when you want to generate boilerplate from one of your templates."),Object(o.b)("p",null,"After entering the command below, the CLI will prompt you where you'd like to save the generated boilerplate files and/or folders."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"USAGE\n  $ boil up TEMPLATE\n\nARGUMENTS\n  TEMPLATE  call up a template defined in the '.boilerplate' directory\n\nOPTIONS\n  -h, --help  show CLI help\n")),Object(o.b)("p",null,"Here's some examples."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"boil up component --name App --filetype js\nboil up component -n App -ft js\n")),Object(o.b)("p",null,"Don't worry if you can't remember what argument inputs are required for a template. If you simply type ",Object(o.b)("inlineCode",{parentName:"p"},"boil up [TEMPLATE NAME]")," (without any arguments) then you'll get a summary table of all required inputs."),Object(o.b)("p",null,"Here's an example output."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"$ boil up component\n\n\u26d4 your args don't match the template requirements\n\nboil up component ARGS\n\nName [--]      Shorthand [-]       Default        Options              Description\nname           n                   undefined      undefined            component name\nfiletype       ft                  js             [ 'js', 'py', 'go' ] file type\n")),Object(o.b)("h2",{id:"list-all-templates"},"List All Templates"),Object(o.b)("p",null,"If you want to see a list of all templates in your boilerplate directory then use the command below."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"USAGE\n  $ boil list\n\nOPTIONS\n  -h, --help  show CLI help\n")))}m.isMDXComponent=!0}}]);