import{b as l}from"./chunk-MP6PVICO.js";import"./chunk-YGFNLDZQ.js";import{bootstrapApplication as C}from"@angular/platform-browser";import{provideRouter as h}from"@angular/router";import"@angular/core";import*as r from"@angular/core";var s=(()=>{let t=class t{constructor(){}ngOnInit(){}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=r.\u0275\u0275defineComponent({type:t,selectors:[["app-home"]],standalone:!0,features:[r.\u0275\u0275StandaloneFeature],decls:2,vars:0,template:function(i,p){i&1&&(r.\u0275\u0275elementStart(0,"h1"),r.\u0275\u0275text(1,"Welcome!"),r.\u0275\u0275elementEnd())},encapsulation:2});let n=t;return n})();import"@angular/core";import*as o from"@angular/core";var c=(()=>{let t=class t{constructor(){}ngOnInit(){}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=o.\u0275\u0275defineComponent({type:t,selectors:[["app-not-found"]],standalone:!0,features:[o.\u0275\u0275StandaloneFeature],decls:7,vars:0,template:function(i,p){i&1&&(o.\u0275\u0275elementStart(0,"h1"),o.\u0275\u0275text(1,"Not implemented yet!"),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementStart(2,"p"),o.\u0275\u0275text(3,"Implementing this will be "),o.\u0275\u0275elementStart(4,"b"),o.\u0275\u0275text(5,"your task"),o.\u0275\u0275elementEnd(),o.\u0275\u0275text(6," during this exercise."),o.\u0275\u0275elementEnd())},encapsulation:2});let n=t;return n})();var u=[{path:"",component:s,pathMatch:"full"},{path:"flights",loadComponent:()=>l("mfe","./Component").then(n=>n.AppComponent)},{path:"**",component:c}];var f={providers:[h(u)]};import"@angular/core";import{RouterModule as x}from"@angular/router";import*as e from"@angular/core";import*as a from"@angular/router";var d=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-root"]],standalone:!0,features:[e.\u0275\u0275StandaloneFeature],decls:10,vars:0,consts:[["src","../assets/angular.png","width","50"],["routerLink","/"],["routerLink","/flights"]],template:function(i,p){i&1&&(e.\u0275\u0275elementStart(0,"ul")(1,"li"),e.\u0275\u0275element(2,"img",0),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"li")(4,"a",1),e.\u0275\u0275text(5,"Home"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(6,"li")(7,"a",2),e.\u0275\u0275text(8,"Flights"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275element(9,"router-outlet"))},dependencies:[x,a.RouterOutlet,a.RouterLink],encapsulation:2});let n=t;return n})();C(d,f).catch(n=>console.error(n));
