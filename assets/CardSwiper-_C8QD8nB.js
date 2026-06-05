import{D as e,F as t,J as n,M as r,O as i,P as a,R as o,S as s,b as c,et as l,j as u,k as d}from"./index-BiuyUdU9.js";import{t as f}from"./ItemCard-DxFOBE6g.js";var p={key:0,class:`text-center space-y-4`},m={key:0,class:`absolute left-1/2 -translate-x-1/2 scale-95 opacity-40 w-full max-w-xl pointer-events-none`},h=t({__name:`CardSwiper`,setup(t){let h=i(()=>c.value.filter(e=>e.status===`undefined`)),g=i(()=>h.value[0]),_=i(()=>h.value[1]),v=n(0),y=n(!1),b=0;function x(e){y.value=!0,b=e.clientX}function S(e){y.value&&(v.value=e.clientX-b)}function C(){y.value=!1;let e=g.value;if(e){if(v.value>120){w(e.id,`good`,1);return}if(v.value<-120){w(e.id,`empty86`,-1);return}v.value=0}}function w(e,t,n){v.value=n*window.innerWidth*.8,setTimeout(()=>{s(e,t),v.value=0},220)}let T=i(()=>Math.min(Math.max(v.value,0)/50,1)),E=i(()=>Math.min(Math.max(-v.value,0)/50,1)),D=i(()=>({transform:`
    translateX(${v.value}px)
    rotate(${v.value*.08}deg)
  `,transition:y.value?`none`:`0.25s ease`})),O=i(()=>v.value>0?{backgroundColor:`rgba(
        34,
        197,
        94,
        ${Math.min(v.value/300,.25)}
      )`}:v.value<0?{backgroundColor:`rgba(
        239,
        68,
        68,
        ${Math.min(-v.value/300,.25)}
      )`}:{});return(t,n)=>(o(),r(`div`,{class:`relative h-full w-full flex items-center justify-center overflow-hidden rounded-3xl transition-colors duration-200`,style:l(O.value)},[g.value?(o(),r(e,{key:1},[_.value?(o(),r(`div`,m,[a(f,{item:_.value},null,8,[`item`])])):u(``,!0),d(`div`,{class:`absolute left-1/2 -translate-x-1/2 w-full max-w-xl touch-none cursor-grab active:cursor-grabbing select-none`,style:l(D.value),onPointerdown:x,onPointermove:S,onPointerup:C,onPointercancel:C,onPointerleave:C},[d(`div`,{class:`absolute top-8 right-20 z-20 border-4 border-green-500 text-green-500 bg-white/80 px-5 py-2 rounded-xl rotate-12 text-3xl font-black pointer-events-none`,style:l({opacity:T.value})},` GOOD `,4),d(`div`,{class:`absolute top-8 left-15 z-20 border-4 border-red-500 text-red-500 bg-white/80 px-5 py-2 rounded-xl -rotate-12 text-3xl font-black pointer-events-none`,style:l({opacity:E.value})},` EMPTY86 `,4),a(f,{item:g.value,variant:`swiper`},null,8,[`item`])],36)],64)):(o(),r(`div`,p,[...n[0]||=[d(`div`,{class:`text-6xl`},` 🎉 `,-1),d(`h2`,{class:`text-3xl font-bold`},` No More Cards `,-1)]]))],4))}});export{h as default};