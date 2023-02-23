"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[918],{8918:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,a,o,i,s,c,l,d=t(2791),u=t(9434),p=t(9128),x=t(5162),b=t(168),m=t(8789),f=m.ZP.li(r||(r=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: #f1895ca2;\n  margin-bottom: 15px;\n  padding: 15px;\n  border-radius: 5px;\n  transition: all 300ms ease 0s;\n  box-shadow: #2fe6be;\n  align-items: center;\n  box-shadow: rgb(0 0 0) 0px 1px 5px;\n  &:hover  {\n    opacity: 1;\n    transform: scale(1);\n    background: #f1895c;\n    scale: 1.01;\n    color: white;\n    box-shadow: rgb(0 0 0 / 89%) 0px 7px 10px;\n  }\n  &:hover button {\n    opacity: 1;\n    transform: scale(1);\n    transition: all 250ms ease 0s;\n  }\n"]))),g=m.ZP.button(a||(a=(0,b.Z)(["\n  opacity: 0;\n  transform: scale(0.8);\n  border-radius: 5px;\n  border: 1px solid rgba(14, 185, 190, 0.925);\n  transition: all 250ms ease 0s;\n  &:hover {\n    color: rgb(255, 255, 255);\n    background: linear-gradient(\n      281deg,\n      rgb(23 145 128) 0%,\n      rgb(59 207 70) 100%\n    );\n  }\n"]))),h=t(184),v=function(n){var e=n.contact,t=(0,u.I0)();return(0,h.jsxs)(f,{children:[e.name,": ",e.number,(0,h.jsx)(g,{onClick:function(){return t((0,x.GK)(e.id))},children:(0,h.jsx)(p.Ko0,{size:15})})]})},Z=function(n){return n.contacts.contactItems},j=function(n){return n.contacts.contactItems},y=function(n){return n.contacts.isLoading},w=function(n){return n.filter.filter},k=t(7402),C=k.Z.ul(o||(o=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  max-height: 367px;\n  overflow-y: auto;\n  box-shadow: inset 5px 5px 10px #d1cdc7, inset -2.5px -2.5px 5px #ffffff;\n  border-radius: 5px;\n"]))),z=function(){var n=(0,u.v9)(j),e=(0,u.v9)(w),t=function(){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}();return(0,h.jsx)(C,{children:t.map((function(n){return(0,h.jsx)(v,{contact:n},n.id)}))})},F=t(9439),I=t(5984),q=t(2007),A=t.n(q),L=k.Z.form(i||(i=(0,b.Z)(["\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 10px;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),S=k.Z.label(s||(s=(0,b.Z)(["\n  margin-right: 10px;\n"]))),_=k.Z.input(c||(c=(0,b.Z)(["\n  margin-left: 3px;\n  background-color: transparent;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-image: initial;\n  border-bottom: 2px solid rgb(34, 69, 145);\n  outline: none;\n  &::placeholder {\n    text-align: start;\n    color: #c24712;\n  }\n"]))),K=k.Z.button(l||(l=(0,b.Z)(["\n  border-radius: 5px;\n  border: 1px solid #f1895c;\n  transition: all 250ms ease 0s;\n  &:hover {\n    cursor: pointer;\n    color: rgb(255, 255, 255);\n    background: linear-gradient(\n      281deg,\n      rgb(23 145 128) 0%,\n      rgb(59 207 70) 100%\n    );\n    transition: all 250ms ease 0s;\n  }\n"])));function N(){var n=(0,d.useState)(""),e=(0,F.Z)(n,2),t=e[0],r=e[1],a=(0,d.useState)(""),o=(0,F.Z)(a,2),i=o[0],s=o[1],c=(0,I.x0)(),l=(0,I.x0)(),b=(0,u.v9)(Z),m=(0,u.I0)(),f=function(n){var e=n.currentTarget,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":s(a);break;default:return}},g=function(){r(""),s("")};return(0,h.jsxs)(L,{onSubmit:function(n){n.preventDefault();var e={name:t,number:i,id:(0,I.x0)()};b.some((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?alert("".concat(t," is already in contacts")):m((0,x.uK)(e)),g()},children:[(0,h.jsxs)(S,{htmlFor:c,children:["Name:",(0,h.jsx)(_,{id:c,type:"text",name:"name",value:t,onChange:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)(S,{htmlFor:l,children:["Number:",(0,h.jsx)(_,{id:l,type:"tel",name:"number",value:i,onChange:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)(K,{type:"submit",children:(0,h.jsx)(p.VcF,{size:15})})]})}N.prototypes={name:A().string.isRequired,number:A().string.isRequired,onSubmit:A().func.isRequired};var P,R,T,B=t(7574),D=k.Z.label(P||(P=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 15px;\n"]))),E=k.Z.input(R||(R=(0,b.Z)(["\n  margin-left: 3px;\n  background-color: transparent;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-image: initial;\n  border-bottom: 2px solid rgb(22, 69, 197);\n  outline: none;\n  ::placeholder {\n    text-align: start;\n    color: #c24712;\n  }\n"]))),G=function(){var n=(0,u.I0)(),e=(0,u.v9)(w);return(0,h.jsx)(D,{children:(0,h.jsx)(E,{type:"text",name:e,value:e,onChange:function(e){n((0,B.T)(e.target.value))},placeholder:"Find contacts by name"})})},J=k.Z.div(T||(T=(0,b.Z)(["\nmargin-top: 100px;\nposition: relative;\n"])));function M(){var n=(0,u.I0)(),e=(0,u.v9)(y);return(0,d.useEffect)((function(){n((0,x.yF)())}),[n]),(0,h.jsxs)(J,{children:[(0,h.jsx)("title",{children:"Your Contacts"}),(0,h.jsx)(N,{}),(0,h.jsx)(G,{}),e||(0,h.jsx)(z,{})]})}}}]);
//# sourceMappingURL=918.4a69db9f.chunk.js.map