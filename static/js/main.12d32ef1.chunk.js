(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var r=e(5),o=e.n(r),c=e(1),a=e.n(c),s=e(3),u=e(6),i=e(7),d=e(9),f=e(8),l=e(2),h=e.n(l),p=(e(15),e(0)),j=function(t){var n=t.goods;return Object(p.jsx)("div",{children:Object(p.jsx)("ul",{children:n.map((function(t){return Object(p.jsx)("li",{style:{color:"".concat(t.color)},children:t.name},t.id)}))})})};function b(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var g=function(){var t=Object(s.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",b().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(s.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",b().then((function(t){return t.filter((function(t){return"red"===t.color}))})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(t){Object(d.a)(e,t);var n=Object(f.a)(e);function e(){var t;Object(u.a)(this,e);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=n.call.apply(n,[this].concat(o))).state={goods:[]},t.getGoods=function(){var n=Object(s.a)(a.a.mark((function n(e){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e().then((function(n){return t.setState({goods:n})}));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),t}return Object(i.a)(e,[{key:"render",value:function(){var t=this,n=this.state.goods;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Dynamic list of Goods"}),Object(p.jsx)("button",{type:"button",onClick:function(){t.getGoods(b)},children:"Load All goods"}),Object(p.jsx)("button",{type:"button",onClick:function(){t.getGoods(g)},children:"Load 5 first goods"}),Object(p.jsx)("button",{type:"button",onClick:function(){t.getGoods(m)},children:"Load red goods"}),n.length>0&&Object(p.jsx)(j,{goods:n})]})}}]),e}(h.a.Component);o.a.render(Object(p.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.12d32ef1.chunk.js.map