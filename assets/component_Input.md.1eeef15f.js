import{V as D,_ as V,o as g,c as B,a as m,w as p,b as s,d as l,r as _}from"./app.eef461cf.js";const{defineComponent:x}=D,S=x({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:F,createVNode:y,toDisplayString:u,createTextVNode:C,Fragment:i,openBlock:A,createElementBlock:a}=D;function t(e,o){const r=F("a-input-search");return A(),a(i,null,[y(r,{value:e.value,"onUpdate:value":o[0]||(o[0]=n=>e.value=n),placeholder:"input search text",style:{width:"200px"},onSearch:e.onSearch},null,8,["value","onSearch"]),C(" searchVal: "+u(e.searchVal),1)],64)}const{onMounted:f,ref:c,reactive:d}=D;return{render:t,...{setup(e,{expose:o}){o();const r=d({}),n=c(""),h=c(""),v={state:r,value:n,searchVal:h,onSearch:E=>{console.log("use value",E),console.log("or use this.value",n.value),h.value=E},onMounted:f,ref:c,reactive:d};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}}}}()}}),O=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]}],"relativePath":"component/Input.md"}'),k=s("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),N=s("div",null,[l("请复制下方示例代码"),s("code",null,"(demo代码维护一般为：先在docs/examples/**下写好组件例子，再搬到下面vue代码中。因为vue单文件组件才有语法提示，方便写代码)")],-1),b=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"a-input-search")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      "),s("span",{style:{color:"#C792EA"}},"v-model:value"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"value"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      "),s("span",{style:{color:"#C792EA"}},"placeholder"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"input search text"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      "),s("span",{style:{color:"#C792EA"}},"style"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"width: 200px"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      "),s("span",{style:{color:"#C792EA"}},"@search"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"onSearch"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    searchVal: {{ searchVal }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"onMounted"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"ref"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"reactive"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," state "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"reactive"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"{}"),s("span",{style:{color:"#A6ACCD"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," value "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"''"),s("span",{style:{color:"#A6ACCD"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," searchVal "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"''"),s("span",{style:{color:"#A6ACCD"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," onSearch "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"searchValue"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"console"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"log"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"use value"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"searchValue"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"console"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"log"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"or use this.value"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"value"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"value"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"searchVal"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"value"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"searchValue")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"less"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"scoped"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"})])])],-1),w=s("h2",{id:"props",tabindex:"-1"},[l("Props "),s("a",{class:"header-anchor",href:"#props","aria-hidden":"true"},"#")],-1),P=s("h2",{id:"events",tabindex:"-1"},[l("Events "),s("a",{class:"header-anchor",href:"#events","aria-hidden":"true"},"#")],-1);function $(F,y,u,C,i,A){const a=_("render-demo-0"),t=_("demo");return g(),B("div",null,[k,m(t,{customClass:"undefined",sourceCode:`<template>
  <a-input-search
      v-model:value="value"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />
    searchVal: {{ searchVal }}
</template>

<script setup>

  import { onMounted, ref, reactive } from 'vue'
  const state = reactive({})
  const value = ref('')
  const searchVal = ref('')

  const onSearch = (searchValue) => {
      console.log('use value', searchValue)
      console.log('or use this.value', value.value)
      searchVal.value= searchValue
  };
<\/script>

<style lang="less" scoped>
</style>

`},{description:p(()=>[N]),highlight:p(()=>[b]),default:p(()=>[m(a)]),_:1}),w,P])}const j=V(S,[["render",$]]);export{O as __pageData,j as default};
