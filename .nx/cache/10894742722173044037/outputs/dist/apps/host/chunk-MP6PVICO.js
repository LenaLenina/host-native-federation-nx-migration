import{a,b as u,c as s}from"./chunk-YGFNLDZQ.js";function l(e,t){return{imports:a(a({},e.imports),t.imports),scopes:a(a({},e.scopes),t.scopes)}}var d=new Map;function y(e){return`${e.packageName}@${e.version}`}function M(e){let t=y(e);return d.get(t)}function w(e,t){let o=y(e);d.set(o,t)}function p(e){let t=e.split("/");return t.pop(),t.join("/")}function i(e,t){for(;e.endsWith("/");)e=e.substring(0,e.length-1);return t.startsWith("./")&&(t=t.substring(2,t.length)),`${e}/${t}`}var g=new Map,f=new Map;function I(e,t){g.set(e,t),f.set(t.baseUrl,e)}function k(e){return f.get(e)}function R(e){return f.has(e)}function b(e){return g.get(e)}function h(e){document.body.appendChild(Object.assign(document.createElement("script"),{type:"importmap-shim",innerHTML:JSON.stringify(e)}))}function P(){return s(this,arguments,function*(e={}){let t=typeof e=="string"?yield j(e):e,o=yield B(),n=yield F(t),r=l(o,n);return h(r),r})}function j(e){return s(this,null,function*(){return yield fetch(e).then(t=>t.json())})}function F(e){return s(this,null,function*(){let t={imports:{},scopes:{}};for(let o of Object.keys(e))try{let n=e[o],r=yield E(n,o);t=l(t,r)}catch{console.error(`Error loading remote entry for ${o} from file ${e[o]}`)}return t})}function E(e,t){return s(this,null,function*(){let o=p(e),n=yield N(e);t||(t=n.name);let r=$(n,t,o);return I(t,u(a({},n),{baseUrl:o})),r})}function $(e,t,o){let n=z(e,t,o),r=U(e,o);return{imports:n,scopes:r}}function N(e){return s(this,null,function*(){return yield fetch(e).then(o=>o.json())})}function U(e,t){let o={},n={};for(let r of e.shared){let c=M(r)??i(t,r.outFileName);w(r,c),n[r.packageName]=c}return o[t+"/"]=n,o}function z(e,t,o){let n={};for(let r of e.exposes){let c=i(t,r.key),m=i(o,r.outFileName);n[c]=m}return n}function B(){return s(this,null,function*(){let e=yield N("./remoteEntry.json"),t=e.shared.reduce((o,n)=>u(a({},o),{[n.packageName]:"./"+n.outFileName}),{});for(let o of e.shared)w(o,"./"+o.outFileName);return{imports:t,scopes:{}}})}function S(e,t){return s(this,null,function*(){let o=v(e,t);yield T(o);let n=K(o),r=b(n);if(!r)throw new Error("unknown remote "+n);let c=r.exposes.find(x=>x.key===o.exposedModule);if(!c)throw new Error(`Unknown exposed module ${o.exposedModule} in remote ${n}`);let m=i(r.baseUrl,c.outFileName);return yield importShim(m)})}function K(e){let t;if(e.remoteName)t=e.remoteName;else if(e.remoteEntry){let o=p(e.remoteEntry);t=k(o)}else throw new Error("unexpcted arguments: Please pass remoteName or remoteEntry");if(!t)throw new Error("unknown remoteName "+t);return t}function T(e){return s(this,null,function*(){if(e.remoteEntry&&!R(p(e.remoteEntry))){let t=yield E(e.remoteEntry);h(t)}})}function v(e,t){let o;if(typeof e=="string"&&t)o={remoteName:e,exposedModule:t};else if(typeof e=="object"&&!t)o=e;else throw new Error("unexpected arguments: please pass options or a remoteName/exposedModule-pair");return o}export{P as a,S as b};
