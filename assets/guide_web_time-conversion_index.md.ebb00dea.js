import{_ as o,c as e,d as a,w as t,r as c,o as p,a as s,b as l}from"./app.6edd52ae.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/web/time-conversion/index.md"}'),r={name:"guide/web/time-conversion/index.md"},y=s("div",{class:"language-vue"},[s("button",{class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"ref"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},'// import moment from "moment";')]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," date "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},'""'),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," func "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},'""'),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," args "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"([])"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," result "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},'""'),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"// console.log(moment);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"// const opts = ref(Object.keys(moment.prototype || {}));")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"// const getFuncParams = (func) => {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"//   const matches = /[^(]+([^)]*)?/gm.exec(Function.prototype.toString.call(func));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"//   if (matches[1]) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},'//     var res = matches[1].replace(/[^,\\w]*/g, "").split(",");')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"//     return res;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"//   }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"//   return [];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"// }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"// const handleChange = (val) => {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"//   const res = getFuncParams(moment.prototype[val]).map((val) => ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"//     placeholder: val,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},'//     value: "",  ')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"//   }));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"//   args.value = res;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"// }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"// const handleSubmit = () => {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"//   const params = Object.keys(args.value).map((key) => {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"//     return args.value[key].value;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"//   });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"//   result.value = moment(date.value || Date.now())[func.value](...params);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"// }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},'// console.log("matches ---------- ", getFuncParams(moment.prototype.format));')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},'// console.log("moment ------------- ", moment.prototype, Object.keys(moment.prototype));')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},'// console.log("moment ------------- ", moment().format() instanceof moment, moment.defaultFormat);')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#A6ACCD"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"less"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"scoped"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"public-width"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"width"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"220px"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"margin-right"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"16px"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"margin-bottom"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"16px"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1);function D(F,i,C,A,m,u){const n=c("DemoBlock");return p(),e("div",null,[a(n,{paths:"E:\\www\\study\\github\\vitepress-me\\docs\\guide\\web\\time-conversion\\index.vue",description:""},{highlight:t(()=>[y]),_:1})])}const g=o(r,[["render",D]]);export{d as __pageData,g as default};
