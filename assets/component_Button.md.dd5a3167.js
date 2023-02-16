import{V as t,_ as m,o as E,c as h,a as A,w as n,b as s,d as o,r as _}from"./app.eef461cf.js";const{defineComponent:v}=t,f=v({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:a,resolveComponent:c,withCtx:r,openBlock:p,createBlock:D}=t;function F(y,i){const C=c("a-button");return p(),D(C,{onClick:y.onClick},{default:r(()=>[a("按钮")]),_:1},8,["onClick"])}const{onMounted:e,ref:l,reactive:u}=t;return{render:F,...{setup(y,{expose:i}){i();const d={state:u({}),onClick:()=>{alert(1)},onMounted:e,ref:l,reactive:u};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}}}()}}),$=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]}],"relativePath":"component/Button.md"}');const B=s("h2",{id:"基础用法",tabindex:"-1"},[o("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),k=s("div",null,[o("请复制下方示例代码"),s("code",null,"(demo代码维护一般为：先在docs/examples/**下写好组件例子，再搬到下面vue代码中。因为vue单文件组件才有语法提示，方便写代码)")],-1),x=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"a-button"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"@click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"onClick"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"按钮"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"a-button"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"onMounted"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"ref"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"reactive"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," state "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"reactive"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"{}"),s("span",{style:{color:"#A6ACCD"}},")")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," onClick "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#82AAFF"}},"alert"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#F07178"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"less"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"scoped"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"ant-btn"),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#B2CCD6"}},"color"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," red"),s("span",{style:{color:"#89DDFF"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"})])])],-1),b=s("h2",{id:"props",tabindex:"-1"},[o("Props "),s("a",{class:"header-anchor",href:"#props","aria-hidden":"true"},"#")],-1),g=s("h2",{id:"events",tabindex:"-1"},[o("Events "),s("a",{class:"header-anchor",href:"#events","aria-hidden":"true"},"#")],-1);function V(a,c,r,p,D,F){const e=_("render-demo-0"),l=_("demo");return E(),h("div",null,[B,A(l,{customClass:"undefined",sourceCode:`<template>
  <a-button @click="onClick">按钮</a-button>
</template>

<script setup>

  import { onMounted, ref, reactive } from 'vue'
  const state = reactive({})

  const onClick = () => {
    alert(1)
  }
<\/script>

<style lang="less" scoped>
  .ant-btn{
      color: red;
  }
</style>

`},{description:n(()=>[k]),highlight:n(()=>[x]),default:n(()=>[A(e)]),_:1}),b,g])}const M=m(f,[["render",V]]);export{$ as __pageData,M as default};
