(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,r){},16:function(e,t,r){},20:function(e){e.exports={coord:{lon:41.4339,lat:52.7317},weather:[{id:600,main:"Snow",description:"light snow",icon:"13d"}],base:"stations",main:{temp:268.26,feels_like:261.26,temp_min:268.26,temp_max:268.26,pressure:1e3,humidity:89,sea_level:1e3,grnd_level:984},visibility:1e4,wind:{speed:8.46,deg:199,gust:17.38},snow:{"1h":.11},clouds:{all:99},dt:1642415922,sys:{country:"RU",sunrise:1642396617,sunset:1642426270},timezone:10800,id:484646,name:"Tambov",cod:200}},21:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(3),i=r.n(o),c=(r(14),r(4)),l=r(1);r(16),r(18);function s(){s=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:j(e,r,c)}),i}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=u;var h={};function p(){}function f(){}function d(){}var v={};l(v,o,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(S([])));g&&g!==t&&r.call(g,o)&&(v=g);var b=d.prototype=p.prototype=Object.create(v);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var l=m(e[a],e,o);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(u).then(function(e){s.value=e,i(s)},function(e){return n("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function j(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=m(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=m(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:f,configurable:!0}),f.displayName=l(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,i,function(){return this}),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(b),l(b,c,"Generator"),l(b,o,function(){return this}),l(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=S,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var u=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),o=t[0],i=(t[1],Object(n.useState)(!0)),u=Object(l.a)(i,2),m=u[0],h=(u[1],Object(n.useState)(0)),p=Object(l.a)(h,2),f=(p[0],p[1]),d=Object(n.useState)(0),v=Object(l.a)(d,2),y=(v[0],v[1]),g=Object(n.useState)(""),b=Object(l.a)(g,2),E=b[0],w=b[1],j=Object(n.useState)("--"),x=Object(l.a)(j,2),O=x[0],N=x[1],L=Object(n.useState)(new Map),S=Object(l.a)(L,2),_=S[0],k=S[1],F=function(){var e=Object(c.a)(s().mark(function e(t){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(E,",ru&appid=1e5170a66c240dfb57a00f50da9477b3")).then(function(e){return e.json()}).then(function(e){k(e),N(E)}),console.log(E);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),C=function(e){Object.entries(e).map(function(e){var t=Object(l.a)(e,2),r=t[0],n=t[1];"[object Object]"!==Object.prototype.toString.call(n)?console.log(console.log(r+" "+n)):Object.entries(n).map(function(e){var t=Object(l.a)(e,2),r=t[0],n=t[1];"[object Object]"!==Object.prototype.toString.call(n)&&console.log(console.log(r+" "+n))})})};if(0===_.size)var P="--",T="",G="";else{P=_.sys.country,T=(parseFloat(_.main.temp)-273.15).toFixed(1).split(".")[0],G=","+parseFloat(_.main.temp-273.15).toFixed(1).split(".")[1];var W=_.main.humidity,A=_.main.pressure,I=_.wind.speed+"m/s",z=_.wind.deg,B=_.wind.gust,M=(_.weather[0].description,"http://openweathermap.org/img/w/"+_.weather[0].icon+".png")}return a.a.createElement("body",{className:"App"},a.a.createElement("div",null,!0===m?a.a.createElement("div",null):void 0,!0===o?a.a.createElement("div",null,a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("title",null,"Form Weather"),a.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"}),a.a.createElement("body",null,a.a.createElement("div",{className:"container-fluid mt-3"},a.a.createElement("h4",{className:"mb-2"},"OPENWEATHERMAP:API"),a.a.createElement("form",null,a.a.createElement("div",{className:"form-row"},a.a.createElement("div",{className:"form-group col-sm-6"},a.a.createElement("label",{htmlFor:"latitude"},"\u0428\u0438\u0440\u043e\u0442\u0430"),a.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){f(e.target.value)},id:"inputLatitude",placeholder:"\u0428\u0438\u0440\u043e\u0442\u0430 \u043e\u0442 -90 \u0434\u043e 90"})),a.a.createElement("div",{className:"form-group col-sm-6"},a.a.createElement("label",{htmlFor:"longitude"},"\u0414\u043e\u043b\u0433\u043e\u0442\u0430"),a.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){y(e.target.value)},id:"inputLongitude",placeholder:"\u0414\u043e\u043b\u0433\u043e\u0442\u0430 \u043e\u0442 -180 \u0434\u043e 180"}))),a.a.createElement("div",{className:"form-row"},a.a.createElement("div",{className:"form-group col-sm-6"},a.a.createElement("label",{htmlFor:"nameCity"},"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430"),a.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){w(e.target.value)},id:"inputNameCity",placeholder:"Name City"}))),a.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:F},"\u0421heck the Weather")),a.a.createElement("p",null),a.a.createElement("button",{className:"btn btn-secondary",onClick:function(){var e,t=r(20);e=t,Object.entries(e).map(function(e){var t=Object(l.a)(e,2),r=t[0],n=t[1];"[object Object]"===Object.prototype.toString.call(n)?(console.log("\u041a\u043b\u044e\u0447 \u0433\u0440\u0443\u043f\u043f\u044b "+r),C(n)):"[object Array]"===Object.prototype.toString.call(n)?(C(n),console.log("\u041a\u043b\u044e\u0447 \u0433\u0440\u0443\u043f\u043f\u044b "+r)):console.log(r+"--"+n)})}},"Add historic weather data")),a.a.createElement("script",{src:"https://code.jquery.com/jquery-3.3.1.slim.min.js"}),a.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"}),a.a.createElement("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"})),a.a.createElement("div",{className:"tab-content",style:{marginLeft:"25px",marginTop:"15px"}},a.a.createElement("div",null,"Weather in"," ",a.a.createElement("span",{style:{color:"green",fontWeight:"bold"}},O)," ","today Contry ="," ",a.a.createElement("span",{style:{color:"red",fontWeight:"bold"}},P)),a.a.createElement("div",{className:"date"},"\u0421\u0435\u0439\u0447\u0430\u0441"),a.a.createElement("div",{className:"day","data-pattern":"G:i"},(new Date).toLocaleTimeString()),a.a.createElement("div",null,"Main"),a.a.createElement("div",{className:"weather"},a.a.createElement("div",{className:"weather-value",style:{backgroundColor:"rgba(48, 201, 255, 0.25)",width:"400px",height:"200px"}},a.a.createElement("span",{className:"unit unit_temperature_c"},a.a.createElement("span",{className:"sign",style:{color:"blue",fontWeight:"bold",fontSize:"50px"}}," ",T),a.a.createElement("span",{className:"lower",style:{color:"blue",fontSize:"30px",fontWeight:"bold"}},G)," "),a.a.createElement("p",null,a.a.createElement("img",{src:M,width:"100",height:"70"})),a.a.createElement("div",{className:"weather-feel white",style:{backgroundcolor:"rgba(20, 107, 255, 0.7)"}},"\u041f\u043e \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u044e"," ",a.a.createElement("span",{className:"measure"},a.a.createElement("span",{className:"unit unit_temperature_c"}," ",T," "))),a.a.createElement("div",{className:"tab-image"},a.a.createElement("div",{className:"tab-icon"},a.a.createElement("svg",{viewBox:"0 0 300 300"},a.a.createElement("use",{xlinkHref:"#c4_s2"},a.a.createElement("symbol",{viewBox:"0 0 300 300",id:"c4_s2"},a.a.createElement("g",{fill:"none"},a.a.createElement("path",null),a.a.createElement("path",null)))))))))),a.a.createElement("h5",null,"\u0421oordinates ",E),a.a.createElement("h5",null,"Temperature Pressure Humidity"),a.a.createElement("h6",null,"humidity - ",W),a.a.createElement("h6",null,"pressure - ",A),a.a.createElement("h5",null,"Wind"),a.a.createElement("h6",null,"speed - ",I),a.a.createElement("h6",null,"deg - ",z),a.a.createElement("h6",null,"gust - ",B),a.a.createElement("h5",null,"Snow"),a.a.createElement("h5",null,"Clouds")):void 0))},m=function(e){e&&e instanceof Function&&r.e(1).then(r.bind(null,22)).then(function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u,null))),m()},5:function(e,t,r){e.exports=r(21)}},[[5,3,2]]]);
//# sourceMappingURL=main.57b85d7e.chunk.js.map