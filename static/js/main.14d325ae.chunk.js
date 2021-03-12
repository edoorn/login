(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(21),i=a.n(s),c=(a(27),a(0));var l=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{role:"log",className:"visually-hidden","aria-live":"assertive","aria-relevant":"additions","aria-atomic":"true"}),Object(c.jsx)("div",{id:"app-live-polite",role:"log",className:"visually-hidden","aria-live":"polite","aria-relevant":"additions","aria-atomic":"true"})]})},o=a(17),d=a(2),u=a(14),h=a(7),j=a(8),b=a(10),p=a(9);function m(e,t){var a;"assertive"===t?a=document.getElementById("app-live-assertive"):"polite"===t&&(a=document.getElementById("app-live-polite")),a&&a.innerText!==e&&(a.innerText=e)}var f=a(12),v=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).handleBlur=function(){e.validate((function(){(console.log(e.props.errors.length),e.props.errors.length)?m("Password error: ".concat(e.props.errors.join(", ")),"polite"):m("","polite")}))},e.state={touched:!1},e.input=r.a.createRef(),e}return Object(j.a)(a,[{key:"validate",value:function(e){var t=this.props.parent,a=function(e){var t=[];if(""===e)return t.push("This field is required"),t;var a=e.match(/[A-Z]/g),n=e.match(/[a-z]/g),r=e.match(/[0-9]/g);return a||t.push("Missing uppercase letter"),n||t.push("Missing lowercase letter"),r||t.push("Must contain a number"),t}(this.input.current.value);t.setState({passwordErrors:a},(function(){e&&e()}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.className,r=t.errors,s=t.label,i=t.helpText,l=t.hideLabel,o=t.update,d="".concat(a,"-help");return d+=r.length>0?" ".concat(a,"-error"):"",Object(c.jsxs)("div",{className:"field password",children:[Object(c.jsx)("label",{id:"".concat(a,"-lbl"),className:"label password__label ".concat(l?"visually-hidden":"visible"," ").concat(n||""),htmlFor:a,children:s}),Object(c.jsx)("div",{className:"note help",children:Object(c.jsx)("p",{id:"".concat(a,"-help"),className:"help__content",children:i})}),Object(c.jsx)("input",Object(f.a)(Object(f.a)({id:a,ref:this.input,className:"input password__input",name:a,required:!0,"aria-invalid":r.length>0?"true":"false","aria-required":"true",type:"password"},d&&{"aria-describedby":d}),{},{onFocus:function(){e.setState({touched:!0})},onBlur:this.handleBlur,onChange:function(){return o(a,e.input.current.value)}})),r.length>0&&Object(c.jsx)("p",{id:"".concat(a,"-error"),className:"error error--inline",children:"Error: ".concat(r.join(", "))})]})}}]),a}(r.a.Component),x=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).handleBlur=function(){e.validate((function(){e.props.error?m("Username field is required","polite"):m("","polite")}))},e.state={touched:!1},e.input=r.a.createRef(),e}return Object(j.a)(a,[{key:"validate",value:function(e){var t=this.props.parent,a=this.input.current.value;t.setState({usernameError:""===a},(function(){e&&e()}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.className,r=t.error,s=t.label,i=t.helpText,l=t.hideLabel,o=t.update,d="";return i&&(d+="".concat(a,"-help")),i&&r&&(d+=" "),r&&(d+="".concat(a,"-error")),Object(c.jsxs)("div",{className:"field username",children:[Object(c.jsx)("label",{id:"".concat(a,"-lbl"),className:"label username__label ".concat(l?"visually-hidden":"visible"," ").concat(n||""),htmlFor:a,children:s}),i&&Object(c.jsx)("div",{className:"note help",children:Object(c.jsx)("p",{id:"".concat(a,"-help"),className:"note__content",children:i})}),Object(c.jsx)("input",Object(f.a)(Object(f.a)({id:a,ref:this.input,className:"input username__input",name:a,required:!0,"aria-required":"true","aria-invalid":r,type:"text"},d&&{"aria-describedby":d}),{},{onFocus:function(){e.setState({touched:!0})},onBlur:this.handleBlur,onChange:function(){return o(a,e.input.current.value)}})),r&&Object(c.jsx)("p",{id:"".concat(a,"-error"),className:"error error--inline",children:"Error: This field is required"})]})}}]),a}(r.a.Component),O=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).focusElement=function(t){e.setState({focusIndex:t},(function(){e._focusableElements[t].focus()}))},e.checkKey=function(t){var a=e._focusableElements.length-1,n=e.state.focusIndex,r=t.shiftKey;"Tab"!==t.key||r||(t.preventDefault(),n<a?e.focusElement(n+1):e.focusElement(0)),"Tab"===t.key&&r&&(t.preventDefault(),n>0?e.focusElement(n-1):e.focusElement(a)),"Escape"===t.key&&e.closeDialog()},e.closeDialog=function(){var t=e.props,a=t.parent,n=t.callback;a.setState({showDialog:!1},(function(){n&&n()}))},e.dialogRoot=r.a.createRef(),e.state={focusIndex:0},e._focusableElements=[],e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this._focusableElements=this.dialogRoot.current.querySelectorAll("a[href]:not([tabindex='-1']),area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']),button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']),[tabindex]:not([tabindex='-1'])"),this._focusableElements[0].focus()}},{key:"render",value:function(){return Object(c.jsx)("div",{className:"dialog__backdrop",children:Object(c.jsx)("div",{id:"dialog-root",ref:this.dialogRoot,className:"dialog",role:"dialog","aria-labelledby":"dialog__heading","aria-modal":"true","aria-describedby":"dialog__description",onKeyDown:this.checkKey,children:Object(c.jsxs)("div",{className:"dialog__content",children:[Object(c.jsx)("h2",{id:"dialog__heading",className:"dialog__title",children:"Success"}),Object(c.jsx)("p",{id:"dialog__description",className:"dialog__description",children:"You have successfully logged in."}),Object(c.jsx)("button",{className:"btn",onClick:this.closeDialog,children:"Close"})]})})})}}]),a}(r.a.Component),g=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).redirect=function(){e.props.history.push("/success")},e.complete=function(){e.setState({renderErrorBlock:!1,showDialog:!0},(function(){e.login.current.reset()}))},e.renderErrorBlock=function(t){e.setState({renderErrorBlock:!0},(function(){var e=document.getElementById("login-form-error"),a=e.querySelector("p");switch(t){case"fields":a.innerText="Some fields contain errors.";break;case"login":a.innerText="Username and password are incorrect."}e.focus()}))},e.update=function(t,a){e.setState(Object(u.a)({},t,a))},e.validateForm=function(){var t=e.state,a=t.username,n=t.password,r=t.usernameError,s=t.passwordErrors,i=function(e,t){return"level"!==e||"Access123"!==t}(a,n);r||s.length?e.renderErrorBlock("fields"):i?e.renderErrorBlock("login"):e.complete()},e.handleSubmit=function(t){t.preventDefault(),e.username.current.validate(),e.password.current.validate(e.validateForm)},e.state={passwordErrors:[],usernameError:!1,renderErrorBlock:!1,showDialog:!1},e.login=r.a.createRef(),e.username=r.a.createRef(),e.password=r.a.createRef(),e}return Object(j.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"panel panel--form",children:[this.state.showDialog&&Object(c.jsx)(O,{parent:this,callback:this.redirect}),this.state.renderErrorBlock&&Object(c.jsx)("div",{id:"login-form-error",tabIndex:"-1",className:"note error error--block",children:Object(c.jsx)("p",{})}),Object(c.jsxs)("form",{ref:this.login,className:"form form--center",onSubmit:this.handleSubmit,noValidate:!0,children:[Object(c.jsx)(x,{id:"username",ref:this.username,label:"Username",error:this.state.usernameError,update:this.update,parent:this}),Object(c.jsx)(v,{id:"password",ref:this.password,label:"Password",helpText:"Password must include one capital letter, one lower case letter, and at least one number.",errors:this.state.passwordErrors,update:this.update,parent:this}),Object(c.jsx)("button",{type:"submit",className:"btn",children:"Log In"})]})]})}}]),a}(r.a.Component),_=Object(d.f)(g);var N=function(e){var t=e.view,a=e.title;return Object(c.jsxs)("main",{id:"main-content",tabIndex:"-1",className:"page","aria-labelledby":"page-title",children:[Object(c.jsx)("h1",{id:"page-title",className:"page__title",children:a}),function(e){switch(e){case"login":return Object(c.jsx)(_,{});default:return null}}(t)]})};function y(){return Object(c.jsx)(o.a,{children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{path:"/login",children:Object(c.jsx)(N,{view:"login",title:"Log In"})}),Object(c.jsx)(d.a,{path:"/home",children:Object(c.jsx)(N,{view:"home",title:"Welcome to Garden Wiki"})}),Object(c.jsx)(d.a,{path:"/almanac",children:Object(c.jsx)(N,{view:"almanac",title:"Old Farmer's Almanac"})}),Object(c.jsx)(d.a,{path:"/frost",children:Object(c.jsx)(N,{view:"frost",title:"2021 Seasonal Frost Dates"})}),Object(c.jsx)(d.a,{path:"/zone",children:Object(c.jsx)(N,{view:"zone",title:"Find Your Zone"})}),Object(c.jsx)(d.a,{path:"/success",children:Object(c.jsx)(N,{view:"success",title:"You have signed in!"})})]})})}var w=function(){return Object(c.jsxs)("div",{className:"pre-content",children:[Object(c.jsx)("a",{className:"visually-hidden focusable",href:"#main-content",children:"Skip to Main Content"}),Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("div",{className:"header__content",children:Object(c.jsx)("a",{href:"/home",className:"home",children:"Garden Wiki"})}),Object(c.jsx)("div",{className:"header__content",children:Object(c.jsxs)("nav",{className:"nav",children:[Object(c.jsx)("h2",{className:"visually-hidden",children:"Main navigation"}),Object(c.jsxs)("ul",{className:"nav__list",children:[Object(c.jsx)("li",{className:"nav__item",children:Object(c.jsx)("a",{className:"nav__link",href:"/almanac",children:"Almanac"})}),Object(c.jsx)("li",{className:"nav__item",children:Object(c.jsx)("a",{className:"nav__link",href:"/frost",children:"Frost Dates"})}),Object(c.jsx)("li",{className:"nav__item",children:Object(c.jsx)("a",{className:"nav__link",href:"/zone",children:"Find Your Zone"})}),Object(c.jsx)("li",{className:"nav__item",children:Object(c.jsx)("a",{className:"nav__link",href:"/login",children:"Log In"})})]})]})})]})]})};var k=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(l,{}),Object(c.jsx)(w,{}),Object(c.jsx)(y,{})]})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),E()}},[[34,1,2]]]);
//# sourceMappingURL=main.14d325ae.chunk.js.map