(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){e.exports=a(309)},308:function(e,t,a){},309:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(128),r=a.n(o),s=a(11),i=a(1);function u(e){var t=Object(n.useState)(),a=Object(s.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(e&&e.formData||{}),i=Object(s.a)(r,2),u=i[0],m=i[1],l=Object(n.useState)(!1),h=Object(s.a)(l,2),f=h[0],b=h[1],d=Object(n.useState)(),p=Object(s.a)(d,2),g=p[0],v=p[1];return Object(n.useEffect)(function(){console.log("useFormSchemaNas: formSchema changed"),m(e.formData)},[e.formData]),{schema:e.schema,uiSchema:e.uiSchema,formData:u,submittedData:g,isLoading:c,isSubmitted:f,handleChange:function(e){m(e.formData)},handleSubmit:function(e){console.log(e),o(!0),setTimeout(function(){v(e.formData),b(!0),o(!1)},700)},reset:function(){o(!1),b(!1),m(e&&e.formData||{}),v(null)}}}u.propTypes={formSchema:Object(i.shape)({schema:i.object,uiSchema:i.object,formData:i.object})};var m=u,l=a(80),h=a(129),f=a.n(h),b="http://localhost:8080/api";function d(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"content-type":"application/json"};return f()({headers:n,url:"".concat(b,"/").concat(e),method:t,data:a&&a instanceof FormData?a:a?JSON.stringify(a):null}).then(function(e){var t=e.status,a=e.data;return a?Object(l.a)({success:200===t},a):Object(l.a)({error:!0},a)}).catch(function(e){return console.log("API ERROR",e),e.response?e.response.data:e})}("schema/".concat(e))}function p(e){var t=Object(n.useState)(),a=Object(s.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(),i=Object(s.a)(r,2),u=i[0],m=i[1],l=Object(n.useState)(),h=Object(s.a)(l,2),f=h[0],b=h[1],p=Object(n.useState)(!!e),g=Object(s.a)(p,2),v=g[0],j=g[1],O=Object(n.useState)(!1),S=Object(s.a)(O,2),E=S[0],D=S[1];return Object(n.useEffect)(function(){console.log("useFetchSchema: schemaName changed"),j(!0),setTimeout(function(){d(e).then(function(e){e&&e.schema?(o(e.schema),m(e.uiSchema),b(e.formData)):e.success||D(!0),console.log("useFetchSchema response:",e),j(!1)}).catch(function(e){console.log("err",e),D(!0)})},1e3)},[e]),{schema:c,uiSchema:u,formData:f,isLoading:v,hasError:E}}p.propTypes={schemaName:i.string.isRequired};var g=p,v=a(130),j=a.n(v),O=function(e){return JSON.stringify(e,null,1)};var S=function(e){var t=e.data,a=e.onClick;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h5",null,"Your form has been submitted:"),c.a.createElement("span",null,"data:"),t&&O(t),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("button",{type:"button",onClick:a}," ","Give it another try"," "))},E=a(46);var D=function(e){var t=e.btnAction,a=Object(E.a)(e,["btnAction"]);return console.log("NasButton:",a),c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{name:t.name}," Lis\xe4\xe4 uusi "),c.a.createElement("input",{type:"hidden",name:t.name,value:t.value}))},w=function(e){var t=e.additionalProperties;return t&&t.btnAction};var N={InputWithNasButton:function(e){var t=e.schema,a=Object(E.a)(e,["schema"]);return console.log("InputWithNasButton:",t,a),c.a.createElement("div",null,c.a.createElement("input",{type:"text"}),c.a.createElement(D,{btnAction:w(t)}))}},y="".concat("http://localhost:8080/api","/form");var F=function(e){var t=e.schemaName,a=g(t),n=m(a);return n.isSubmitted?c.a.createElement(S,{data:n.submittedData,onClick:n.reset}):a.isLoading?"Fetching schema...":n.isLoading?"Loading...":n&&n.schema?c.a.createElement(j.a,{schema:n.schema,uiSchema:n.uiSchema,formData:n.formData,widgets:N,action:y,method:"post",target:"_blank",onChange:n.handleChange}):a.hasError?c.a.createElement(c.a.Fragment,null," Could not fetch schema from server!! "):c.a.createElement(c.a.Fragment,null," No schema provided to form component!! ")};a(308);var k=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(F,{schemaName:"nas"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[131,1,2]]]);
//# sourceMappingURL=main.aa024df3.chunk.js.map