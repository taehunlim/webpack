(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{38:function(e,t,r){"use strict";r.r(t);var a=r(1),u=r.n(a);function n(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach(function(e){l(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,a=[],u=!0,c=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{u||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(){var e=i(Object(a.useState)({name:"",password:""}),2),r=e[0],n=e[1],t=r.name,o=r.password,e=function(t){return function(e){n(c(c({},r),{},l({},t,e.target.value)))}};return console.log(r),u.a.createElement("div",null,u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(c({},r)),console.log(r)}},u.a.createElement("input",{placeholder:"name",type:"name",onChange:e("name"),value:t}),u.a.createElement("input",{placeholder:"password",type:"password",onChange:e("password"),value:o}),u.a.createElement("button",{type:"submit"},"submit")),u.a.createElement("p",null,t))}}}]);