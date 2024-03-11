"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[675],{675:function(n,e,t){t.r(e),t.d(e,{default:function(){return un}});var o,r,i,a,c,l,s,d,u,f=t(3050),p=t(9439),x=t(2791),h=t(9130),b=t(4420),m=t(5036),g=t(3553),Z=function(n){return n.contacts.items},j=function(n){return n.filter},v=function(n){return n.contacts.error},k=function(n){return n.contacts.isLoading},C=(0,g.P1)([Z,j],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),P=t(168),w=t(5216),y=w.ZP.form(o||(o=(0,P.Z)(["\n  align-items: center; /* Align items in the center */\n  border-radius: 8px;\n  border: 1px solid black;\n  box-shadow: inset 0 0 10px black;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 2rem;\n"]))),A=w.ZP.label(r||(r=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n"]))),N=w.ZP.input(i||(i=(0,P.Z)(["\n  /* Adaug\u0103 aici orice stil specific pentru input */\n\n  min-width: 0;\n  padding: 4px 11px;\n  color: rgba(0, 0, 0, 0.88);\n  font-size: 14px;\n  line-height: 1.5714285714285714;\n  border-radius: 6px;\n  transition: all 0.2s;\n\n  background: #ffffff;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d9d9d9;\n\n  &:hover {\n    border-color: #1677ff;\n  }\n\n  &:focus {\n    border-color: #1677ff;\n    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);\n    outline: 0;\n    background-color: #ffffff;\n  }\n"]))),z=(w.ZP.button(a||(a=(0,P.Z)(["\n  align-self: center; /* Center the button within its container */\n"]))),function(n,e){e(n.target.value.replace(/[^a-zA-Z\s'-]/g,""))}),_=function(n,e){e(n.target.value.replace(/[^+\d\s().-]|^[\s().-]+|(?<=\d)[+]|\b[+]\b/g,""))},S=t(184),q=function(){var n=(0,x.useState)(""),e=(0,p.Z)(n,2),t=e[0],o=e[1],r=(0,x.useState)(""),i=(0,p.Z)(r,2),a=i[0],c=i[1],l=(0,b.I0)(),s=(0,b.v9)(Z);return(0,S.jsxs)(y,{children:[(0,S.jsxs)(A,{children:["Name:",(0,S.jsx)(N,{type:"text",name:"name",placeholder:"Name and surname",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:function(n){return z(n,o)}})]}),(0,S.jsxs)(A,{children:["Number:",(0,S.jsx)(N,{type:"tel",name:"number",placeholder:"Telephone number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:a,onChange:function(n){return _(n,c)}})]}),(0,S.jsx)(h.Z,{type:"button",action:function(){var n=s.some((function(n){return n.name.toLowerCase()===t.toLowerCase()})),e=s.some((function(n){return n.number===a}));n?alert("".concat(t," is already in contacts!")):e?alert("".concat(a," is already in contacts!")):""!==t.trim()&&""!==a.trim()&&(l((0,m.uK)({name:t,number:a})),o(""),c(""))},children:"Add contact"})]})},F=t(3832),L=t(5820),E=t(6249),I=t(2556),T=t(7328),B=w.ZP.li(c||(c=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 10px;\n  background-color: #f5f6f7;\n  padding: 10px;\n  border-radius: 6px;\n"]))),D=w.ZP.span(l||(l=(0,P.Z)(["\n  margin-bottom: 5px;\n"]))),K=w.ZP.a(s||(s=(0,P.Z)(["\n  cursor: pointer;\n  color: #1677ff;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),G=w.ZP.button(d||(d=(0,P.Z)(["\n  background-color: #1677ff;\n  border: none;\n  border-radius: 6px;\n  color: white;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 14px;\n  outline: none;\n  padding: 8px 16px;\n  text-align: center;\n  margin-top: 5px;\n\n  &:hover {\n    background-color: #4096ff;\n    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);\n  }\n  &.active {\n    background-color: #0958d9;\n  }\n  &:focus-visible {\n    outline: 4px solid #91caff;\n    outline-offset: 1px;\n    transition: outline-offset 0s, outline 0s;\n  }\n"]))),J=w.ZP.button(u||(u=(0,P.Z)(["\n  background-color: #1677ff;\n  border: none;\n  border-radius: 6px;\n  color: red;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 14px;\n  outline: none;\n  padding: 8px 16px;\n  text-align: center;\n  margin-top: 5px;\n\n  &:hover {\n    background-color: #4096ff;\n    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);\n  }\n  &.active {\n    background-color: #0958d9;\n  }\n  &:focus-visible {\n    outline: 4px solid red;\n    outline-offset: 1px;\n    transition: outline-offset 0s, outline 0s;\n  }\n"])));var M,Y,H,O,Q,R,U,V,W=function(n){var e=n.contact,t=(0,b.I0)(),o=(0,x.useState)(!1),r=(0,p.Z)(o,2),i=r[0],a=r[1],c=(0,x.useState)(e.name),l=(0,p.Z)(c,2),s=l[0],d=l[1],u=(0,x.useState)(e.number),f=(0,p.Z)(u,2),h=f[0],g=f[1],Z=function(){t((0,m.GK)(e.id))},j=function(){a(!1)};return(0,S.jsxs)(B,{children:[(0,S.jsx)(D,{children:e.name}),(0,S.jsx)(K,{href:"tel:".concat(e.number),children:e.number}),(0,S.jsx)(G,{onClick:function(){a(!0)},children:"Edit"}),(0,S.jsx)(L.Z,{title:"Delete contact",description:"Are you sure you want to delete this contact?",onConfirm:function(n){Z(n.target.value),F.ZP.success("Click on Yes")},onCancel:function(n){console.log(n),F.ZP.error("Click on No")},okText:"Yes",cancelText:"No",children:(0,S.jsx)(J,{children:"Delete"})}),(0,S.jsx)(E.Z,{open:i,onCancel:j,footer:[(0,S.jsx)(I.ZP,{onClick:j,children:"Cancel"},"cancel"),(0,S.jsx)(I.ZP,{onClick:function(){a(!1),t((0,m.mP)({id:e.id,name:s,number:h}))},children:"Save"},"save")],children:(0,S.jsxs)("div",{className:"modal-content",children:[(0,S.jsx)("label",{children:"Edit name:"}),(0,S.jsx)(T.Z,{type:"text",value:s,onChange:function(n){return z(n,d)},title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0}),(0,S.jsx)("label",{children:"Edit phone number:"}),(0,S.jsx)(T.Z,{type:"text",value:h,onChange:function(n){return _(n,g)},title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})})]})},X=w.ZP.div(M||(M=(0,P.Z)(["\n  color: black;\n  font-size: 16px;\n"]))),$=w.ZP.ul(Y||(Y=(0,P.Z)(["\n  list-style-type: none;\n  padding: 0;\n"]))),nn=w.ZP.div(H||(H=(0,P.Z)(["\n  padding: 10px;\n"]))),en=w.ZP.p(O||(O=(0,P.Z)(["\n  color: red;\n"]))),tn=w.ZP.p(Q||(Q=(0,P.Z)(["\n  color: red;\n"]))),on=t(1314),rn=function(){var n=(0,b.I0)(),e=(0,b.v9)(C),t=(0,b.v9)(v),o=(0,b.v9)(k),r=function(e){n((0,m.GK)(e))};return(0,x.useEffect)((function(){n((0,m.yF)())}),[n]),(0,S.jsxs)(X,{children:[o&&(0,S.jsx)(on.a,{})," ",!o&&!t&&(0,S.jsx)($,{children:e&&e.length>0?e.map((function(n){return(0,S.jsx)(nn,{children:(0,S.jsx)(W,{contact:n,onDeleteContact:r})},n.id)})):(0,S.jsx)(tn,{children:"No contacts available."})}),t&&(0,S.jsx)(en,{children:"An error occurred while fetching contacts."})]})},an=t(5653),cn=w.ZP.form(R||(R=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),ln=w.ZP.label(U||(U=(0,P.Z)(["\n  color: black;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n"]))),sn=w.ZP.input(V||(V=(0,P.Z)(["\n  /* Adaug\u0103 aici orice stil specific pentru input */\n\n  min-width: 0;\n  padding: 4px 11px;\n  color: rgba(0, 0, 0, 0.88);\n  font-size: 14px;\n  line-height: 1.5714285714285714;\n  border-radius: 6px;\n  transition: all 0.2s;\n\n  background: #ffffff;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d9d9d9;\n\n  &:hover {\n    border-color: #1677ff;\n  }\n\n  &:focus {\n    border-color: #1677ff;\n    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);\n    outline: 0;\n    background-color: #ffffff;\n  }\n"]))),dn=function(){var n=(0,b.I0)(),e=(0,b.v9)(j);return(0,S.jsx)(cn,{children:(0,S.jsxs)(ln,{children:["Find contact by name:",(0,S.jsx)(sn,{type:"text",name:"filter",placeholder:"Search name...",value:e,onChange:function(e){n((0,an.T)(e.target.value.trim()))}})]})})};var un=function(){return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(f.B6,{children:[(0,S.jsx)(f.ql,{children:(0,S.jsx)("title",{children:"Phonebook"})}),(0,S.jsx)(q,{}),(0,S.jsx)("h2",{children:"Contacts:"}),(0,S.jsx)(dn,{}),(0,S.jsx)(rn,{})]})})}}}]);
//# sourceMappingURL=675.6f38f634.chunk.js.map