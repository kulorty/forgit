import{_ as m,T as w}from"./Title-Jfmpcshb.js";import{u as k,r as p,i as y,o as h,c as f,b as e,a as t,q as c,v as _,s as g,x as v,j as r,k as L,p as S,f as B,y as I}from"./index-wr6nzmQR.js";const N="/menu/vueNovel/assets/LoginSlogan-BY7qztM3.jpg",d=i=>(S("data-v-da432787"),i=i(),B(),i),C={class:"login"},V={class:"left"},K={class:"loginSlogan"},M=["src"],P={class:"right"},T={class:"loginBox"},b=d(()=>e("h2",null,"用户登录",-1)),j=d(()=>e("span",null,[e("svg",{class:"icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-yonghu"})])],-1)),q=d(()=>e("span",null,[e("svg",{class:"icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-mima"})])],-1)),E={__name:"Login",setup(i){let u=k(),n=p(""),a=p(""),l=()=>{if(n.value==""&&a.value==""){I.error("用户名或密码不能为空");return}else u.$patch({logined:!0,userName:n.value,psw:a.value})};return(R,o)=>{const x=y("router-link");return h(),f("div",C,[e("div",V,[e("div",K,[e("img",{src:t(N),alt:"登录页标语"},null,8,M)])]),e("div",P,[e("div",T,[b,e("p",null,[j,c(e("input",{type:"text",placeholder:"手机/邮箱/用户名","onUpdate:modelValue":o[0]||(o[0]=s=>g(n)?n.value=s:n=s),onKeydown:o[1]||(o[1]=v((...s)=>t(l)&&t(l)(...s),["enter"]))},null,544),[[_,t(n)]])]),e("p",null,[q,c(e("input",{type:"password",placeholder:"密码","onUpdate:modelValue":o[2]||(o[2]=s=>g(a)?a.value=s:a=s),onKeydown:o[3]||(o[3]=v((...s)=>t(l)&&t(l)(...s),["enter"]))},null,544),[[_,t(a)]])]),r(x,{to:"/"},{default:L(()=>[e("button",{onClick:o[4]||(o[4]=(...s)=>t(l)&&t(l)(...s))},"登 录")]),_:1})])])])}}},U=m(E,[["__scopeId","data-v-da432787"]]),z={class:"LoginPage"},D={__name:"LoginPage",setup(i){return(u,n)=>(h(),f("div",z,[r(w),r(U)]))}},A=m(D,[["__scopeId","data-v-e2e8c046"]]);export{A as default};
