(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(t,e,a){t.exports={product:"product_product__3TCYX",link:"product_link__2YaM0",image:"product_image__3Pllx",modal:"product_modal__P670o",buttons:"product_buttons__24wsw",first:"product_first__2dW8B",second:"product_second__10Bw4",options:"product_options__19rm8",delete:"product_delete__3Ug-m"}},32:function(t,e,a){t.exports={app:"app_app__3pQ0x"}},37:function(t,e,a){},5:function(t,e,a){t.exports={container:"products_container__1vix_",productsList:"products_productsList__3wuxM",options:"products_options__3IYZD",modal:"products_modal__xC8Qm",add:"products_add__1ZHNg",cancel:"products_cancel__2z4SL",inputField:"products_inputField__1TCLg",buttons:"products_buttons__2Dk5f"}},53:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a(17),o=a.n(c),r=(a(37),a(11)),i=a(4),s=a(12),l=a.n(s),u=a(14),d=a(15),b=a.n(d),p=a(1),j={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"double black 5px",width:"400px",height:"100px",borderRadius:"25px",backgroundColor:"rgb(237, 238, 248)"}};b.a.setAppElement("#root");var h=function(t){var e=t.info,a=t.deleteProduct,c=t.switchCurrProduct,o=Object(n.useState)(!1),r=Object(i.a)(o,2),s=r[0],d=r[1],h=function(){return d(!1)};return Object(p.jsxs)("div",{className:l.a.product,children:[Object(p.jsx)("img",{id:l.a.image,src:e.imageUrl,alt:""}),Object(p.jsx)("h4",{children:e.name}),Object(p.jsx)("p",{children:e.description}),Object(p.jsxs)("div",{className:l.a.options,children:[Object(p.jsxs)("span",{children:[e.count," items left"]}),Object(p.jsx)(u.b,{className:l.a.link,onClick:function(){c(e)},to:"/details",children:"More details"}),Object(p.jsx)("span",{className:l.a.delete,onClick:function(){return d(!0)},children:"Delete"})]}),Object(p.jsx)(b.a,{isOpen:s,style:j,children:Object(p.jsxs)("div",{className:l.a.modal,children:[Object(p.jsx)("p",{children:"Are you sure you want to delete this product?"}),Object(p.jsxs)("div",{className:l.a.buttons,children:[Object(p.jsx)("button",{id:l.a.first,onClick:function(){a(e.id),h()},children:"Delete"}),Object(p.jsx)("button",{id:l.a.second,onClick:h,children:"Cancel"})]})]})})]})},g=a(5),O=a.n(g),m={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"double black 5px",width:"400px",height:"500px",borderRadius:"25px",backgroundColor:"rgb(237, 238, 248)"}},_=function(t){var e=t.products,a=t.addProduct,c=t.switchCurrProduct,o=Object(n.useState)(!1),r=Object(i.a)(o,2),s=r[0],l=r[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),j=d[0],g=d[1],_=Object(n.useState)(""),x=Object(i.a)(_,2),f=x[0],v=x[1],C=Object(n.useState)(""),y=Object(i.a)(C,2),N=y[0],w=y[1],P=Object(n.useState)(""),k=Object(i.a)(P,2),S=k[0],R=k[1],E=Object(n.useState)(""),L=Object(i.a)(E,2),D=L[0],F=L[1],T=Object(n.useState)(""),U=Object(i.a)(T,2),M=U[0],A=U[1],I=Object(n.useState)(!1),W=Object(i.a)(I,2),B=W[0],q=W[1],z=Object(n.useState)(!1),Y=Object(i.a)(z,2),J=Y[0],Q=Y[1],X=function(){return l(!1)};return Object(p.jsxs)("div",{className:O.a.container,children:[Object(p.jsx)("h3",{children:"Products"}),Object(p.jsxs)("div",{className:O.a.options,children:[Object(p.jsx)("button",{id:O.a.newProduct,onClick:function(){return l(!0)},children:"Add new product"}),Object(p.jsx)("button",{id:O.a.sortByName,onClick:function(){q(!0),Q(!1)},children:"Sort by name"}),Object(p.jsx)("button",{id:O.a.sortByCount,onClick:function(){Q(!0),q(!1)},children:"Sort by count"})]}),Object(p.jsx)("div",{className:O.a.productsList,children:function(){var a=e;return B?a=e.sort((function(t,e){return t.name.toLocaleLowerCase()<e.name.toLocaleLowerCase()?-1:t.name.toLocaleLowerCase()>e.name.toLocaleLowerCase()?1:0})):J&&(a=e.sort((function(t,e){return t.count-e.count}))),a.map((function(e){return Object(p.jsx)(h,{info:e,deleteProduct:t.deleteProduct,switchCurrProduct:c},e.id)}))}()}),Object(p.jsx)(b.a,{isOpen:s,style:m,children:Object(p.jsxs)("div",{className:O.a.modal,children:[Object(p.jsxs)("label",{children:["Name:",Object(p.jsx)("input",{className:O.a.inputField,type:"text",onChange:function(t){return g(t.target.value)},value:j})]}),Object(p.jsxs)("label",{children:["Decription:",Object(p.jsx)("input",{className:O.a.inputField,type:"text",onChange:function(t){return v(t.target.value)},value:f})]}),Object(p.jsxs)("label",{children:["Count:",Object(p.jsx)("input",{className:O.a.inputField,type:"text",onChange:function(t){return w(t.target.value)},value:N})]}),Object(p.jsxs)("label",{children:["Color:",Object(p.jsx)("input",{className:O.a.inputField,type:"text",onChange:function(t){return A(t.target.value)},value:M})]}),Object(p.jsxs)("label",{children:["Image URL:",Object(p.jsx)("input",{className:O.a.inputField,type:"text",onChange:function(t){return R(t.target.value)},value:S})]}),Object(p.jsxs)("label",{children:["Weight:",Object(p.jsx)("input",{className:O.a.inputField,type:"text",onChange:function(t){return F(t.target.value)},value:D})]}),Object(p.jsxs)("div",{className:O.a.buttons,children:[Object(p.jsx)("button",{id:O.a.add,onClick:function(){j.length>0&&j.length<30&&f.length>0&&f.length<45&&!isNaN(parseFloat(N))&&isFinite(N)&&S.length>0&&D.length>0&&M.length>0?(a({imageUrl:S,name:j,count:N,color:M,weight:D,description:f}),X(),g(""),R(""),A(""),F(""),w(""),v("")):alert("Incorrect data! Try again, plaese")},children:"Add"}),Object(p.jsx)("button",{id:O.a.cancel,onClick:X,children:"Cancel"})]})]})})]})},x=a(6),f=a.n(x),v={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"double black 5px",width:"400px",height:"500px",borderRadius:"25px",backgroundColor:"rgb(237, 238, 248)"}},C=function(t){var e=t.currProduct,a=t.editProduct,c=Object(n.useState)(!1),o=Object(i.a)(c,2),r=o[0],s=o[1],l=Object(n.useState)(e.name),d=Object(i.a)(l,2),j=d[0],h=d[1],g=Object(n.useState)(e.description),O=Object(i.a)(g,2),m=O[0],_=O[1],x=Object(n.useState)(e.count),C=Object(i.a)(x,2),y=C[0],N=C[1],w=Object(n.useState)(e.imageUrl),P=Object(i.a)(w,2),k=P[0],S=P[1],R=Object(n.useState)(e.weight),E=Object(i.a)(R,2),L=E[0],D=E[1],F=Object(n.useState)(e.color),T=Object(i.a)(F,2),U=T[0],M=T[1],A=function(){return s(!1)};return Object(p.jsxs)("div",{className:f.a.container,children:[Object(p.jsx)("div",{className:f.a.image,children:Object(p.jsx)("img",{src:k,alt:""})}),Object(p.jsx)("h3",{children:j}),Object(p.jsxs)("div",{className:f.a.options,children:[Object(p.jsx)("p",{children:m}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[y," items left"]}),Object(p.jsxs)("li",{children:["Color: ",U]}),Object(p.jsxs)("li",{children:["Weight: ",L]})]}),Object(p.jsx)("span",{className:f.a.edit,onClick:function(){return s(!0)},children:"Edit product"}),Object(p.jsx)(u.b,{className:f.a.link,to:"/",children:"Back to product list"})]}),Object(p.jsx)(b.a,{isOpen:r,style:v,children:Object(p.jsxs)("div",{className:f.a.modal,children:[Object(p.jsxs)("label",{children:["Name:",Object(p.jsx)("input",{className:f.a.inputField,type:"text",onChange:function(t){return h(t.target.value)},value:j})]}),Object(p.jsxs)("label",{children:["Decription:",Object(p.jsx)("input",{className:f.a.inputField,type:"text",onChange:function(t){return _(t.target.value)},value:m})]}),Object(p.jsxs)("label",{children:["Count:",Object(p.jsx)("input",{className:f.a.inputField,type:"text",onChange:function(t){return N(t.target.value)},value:y})]}),Object(p.jsxs)("label",{children:["Color:",Object(p.jsx)("input",{className:f.a.inputField,type:"text",onChange:function(t){return M(t.target.value)},value:U})]}),Object(p.jsxs)("label",{children:["Image URL:",Object(p.jsx)("input",{className:f.a.inputField,type:"text",onChange:function(t){return S(t.target.value)},value:k})]}),Object(p.jsxs)("label",{children:["Weight:",Object(p.jsx)("input",{className:f.a.inputField,type:"text",onChange:function(t){return D(t.target.value)},value:L})]}),Object(p.jsxs)("div",{className:f.a.buttons,children:[Object(p.jsx)("button",{id:f.a.save,onClick:function(){j.length>0&&j.length<100&&m.length>0&&m.length<150&&!isNaN(parseFloat(y))&&isFinite(y)&&+y>=0&&k.length>0&&L.length>0&&U.length>0?(a({id:e.id,imageUrl:k,name:j,count:y,color:U,weight:L,description:m}),A()):alert("Incorrect data! Try again, plaese")},children:"Save"}),Object(p.jsx)("button",{id:f.a.cancel,onClick:A,children:"Cancel"})]})]})})]})},y=a(32),N=a.n(y),w=a(3),P=a(22),k=a(16),S="DELETE_PRODUCT",R="ADD_PRODUCT",E="SWITCH_CURR_PRODUCT",L="EDIT_PRODUCT",D=function(t){return{type:S,payload:t}},F=function(t){return{type:R,payload:t}},T=function(t){return{type:E,payload:t}},U=function(t){return{type:L,payload:t}},M=Object(P.b)((function(t){return{products:t.products,currProduct:t.currProduct}}),(function(t){return{deleteProduct:Object(k.a)(D,t),addProduct:Object(k.a)(F,t),switchCurrProduct:Object(k.a)(T,t),editProduct:Object(k.a)(U,t)}}))((function(t){return Object(p.jsx)("div",{className:N.a.app,children:Object(p.jsxs)(w.c,{children:[Object(p.jsx)(w.a,{path:"/details",children:Object(p.jsx)(C,{currProduct:t.currProduct,editProduct:t.editProduct})}),Object(p.jsx)(w.a,{path:"/",children:Object(p.jsx)(_,Object(r.a)({},t))})]})})})),A=a(28),I={products:[{id:1,imageUrl:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194372/03/sv01/fnd/PNA/fmt/png/CELL-Fraction-Fade-Men's-Training-Shoes",name:"Fraction Fade Men's Training",count:4,weight:"700g",color:"black",description:"10CELL: Visible running technology provides stable cushioning and comfort through supportive cell structure"},{id:2,imageUrl:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192491/06/sv01/fnd/PNA/fmt/png/CELL-Regulate-Woven-Men%E2%80%99s-Running-Shoes",name:"Regulate Woven Men\u2019s Running",count:33,color:"black",weight:"200g",description:"A retro style updated for a modern performance shoe"},{id:3,imageUrl:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194373/03/sv01/fnd/PNA/fmt/png/Enzo-2-Eco-Men's-Running-Shoes",name:"Enzo 2 Eco Men's Running",count:13,color:"black+yellow",weight:"200g",description:"BETTER MATERIALS: Made with recycled materials to reduce environmental impact"},{id:4,imageUrl:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/364989/01/sv01/fnd/PNA/fmt/png/PUMA-Smash-v2-Sneakers",name:"PUMA Smash v2 Sneakers",count:7,color:"black+white",weight:"200g",description:"The tennis-inspired silhouette features a soft suede upper and classic rubber sole. Totally classic."},{id:5,imageUrl:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194373/02/sv01/fnd/PNA/fmt/png/Enzo-2-Eco-Men's-Running-Shoes",name:"Enzo 2 Eco Men's Running",count:21,color:"gray",weight:"200g",description:"BETTER MATERIALS: Made with recycled materials to reduce environmental impact"}],lastId:5,currProduct:{}},W=Object(k.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S:return Object(r.a)(Object(r.a)({},t),{},{products:Object(A.a)(t.products.filter((function(t){return t.id!==e.payload})))});case R:return Object(r.a)(Object(r.a)({},t),{},{lastId:++t.lastId,products:[].concat(Object(A.a)(t.products),[Object(r.a)({id:t.lastId},e.payload)])});case E:return Object(r.a)(Object(r.a)({},t),{},{currProduct:e.payload});case L:return Object(r.a)(Object(r.a)({},t),{},{products:t.products.map((function(t){return t.id===e.payload.id?e.payload:t}))});default:return t}}));o.a.render(Object(p.jsx)(u.a,{children:Object(p.jsx)(P.a,{store:W,children:Object(p.jsx)(M,{})})}),document.getElementById("root"))},6:function(t,e,a){t.exports={container:"productDetails_container__2Xe31",image:"productDetails_image__3bYWq",options:"productDetails_options__2VnaQ",link:"productDetails_link__2rMKg",edit:"productDetails_edit__2mYh5",modal:"productDetails_modal__3Re07",save:"productDetails_save__2UJWn",cancel:"productDetails_cancel__1otoX",inputField:"productDetails_inputField__1laKe",buttons:"productDetails_buttons__3Lzm4"}}},[[53,1,2]]]);
//# sourceMappingURL=main.04d6fe9d.chunk.js.map