!function e(t,n,r){function o(u,c){if(!n[u]){if(!t[u]){var f="function"==typeof require&&require;if(!c&&f)return f(u,!0);if(i)return i(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var l=n[u]={exports:{}};t[u][0].call(l.exports,(function(e){return o(t[u][1][e]||e)}),l,l.exports,e,t,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,t,n){(function(e){"use strict";function t(){}void 0!==e&&e.env.METAMASK_DEBUG||void 0===typeof console||(console.log=t,console.info=t)}).call(this,e("_process"))},{_process:2}],2:[function(e,t,n){var r,o,i=t.exports={};function u(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function f(e){if(r===setTimeout)return setTimeout(e,0);if((r===u||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:u}catch(e){r=u}try{o="function"==typeof clearTimeout?clearTimeout:c}catch(e){o=c}}();var s,l=[],a=!1,h=-1;function p(){a&&s&&(a=!1,s.length?l=s.concat(l):h=-1,l.length&&m())}function m(){if(!a){var e=f(p);a=!0;for(var t=l.length;t;){for(s=l,l=[];++h<t;)s&&s[h].run();h=-1,t=l.length}s=null,a=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===c||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new d(e,t)),1!==l.length||a||f(m)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}]},{},[1]);
//# sourceMappingURL=../sourcemaps/disable-console.js.map
