!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Wm2z:function(t,r,i){"use strict";i.r(r),i.d(r,"ProjectsModule",function(){return z});var a,c=i("ofXK"),o=i("sbAP"),s=i("tyNb"),u=i("mrSG"),b=i("lJxs"),h=i("vkgz"),l=i("fXoL"),f=i("pzbG"),p=i("GuhC"),v=((a=function(){function t(){e(this,t),this.webNavigator=null,this.webNavigator=window.navigator}return n(t,[{key:"canShare",value:function(){return null!==this.webNavigator&&void 0!==this.webNavigator.share}},{key:"canShareFile",value:function(e){return null!==this.webNavigator&&void 0!==this.webNavigator.share&&this.webNavigator.canShare({files:e})}},{key:"share",value:function(e){var t=this,n=e.title,r=e.text,i=e.url,a=e.files;return new Promise(function(e,c){return Object(u.a)(t,void 0,void 0,regeneratorRuntime.mark(function t(){var o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null===this.webNavigator||void 0===this.webNavigator.share){t.next=18;break}if(null!=r||null!=i){t.next=5;break}console.warn("text and url both can't be empty, at least provide either text or url"),t.next=16;break;case 5:return t.prev=5,o={title:n,text:r,url:i},a&&0!==a.length&&(o.files=a),t.next=10,this.webNavigator.share(o);case 10:e({shared:!0}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),c({shared:!1,error:t.t0});case 16:t.next=19;break;case 18:c({shared:!1,error:"This service/api is not supported in your Browser"});case 19:case"end":return t.stop()}},t,this,[[5,13]])}))})}}]),t}()).\u0275fac=function(e){return new(e||a)},a.\u0275prov=Object(l.Gb)({factory:function(){return new a},token:a,providedIn:"root"}),a=Object(u.b)([Object(u.c)("design:paramtypes",[])],a)),d=i("QPBi");function g(e,t){if(1&e&&(l.Pb(0,"span",9),l.rc(1,"\n          "),l.Lb(2,"img",10),l.Zb(3,"transloco"),l.rc(4,"\n        "),l.Ob()),2&e){var n=l.Yb().ngIf;l.yb(2),l.ec("src",n.thumbnail.header,l.mc),l.zb("alt",l.ac(3,2,"headerImage"))}}function m(e,t){if(1&e&&(l.Pb(0,"div",3),l.rc(1,"\n      "),l.Pb(2,"section",4),l.rc(3,"\n        "),l.pc(4,g,5,4,"span",5),l.rc(5,"\n      "),l.Ob(),l.rc(6,"\n      "),l.Pb(7,"section",6),l.rc(8,"\n        "),l.Lb(9,"scully-content"),l.rc(10,"\n        "),l.Pb(11,"div",7),l.rc(12,"\n          "),l.Pb(13,"a",8),l.rc(14),l.Ob(),l.rc(15,"\n        "),l.Ob(),l.rc(16,"\n      "),l.Ob(),l.rc(17,"\n    "),l.Ob()),2&e){var n=t.ngIf,r=l.Yb().$implicit,i=l.Yb();l.yb(4),l.ec("ngIf",n.thumbnail&&n.thumbnail.header),l.yb(9),l.ec("href",i.editOnGithubLink(),l.mc),l.yb(1),l.tc("\n            ",r("editOnGithub"),"\n          ")}}function w(e,t){if(1&e&&(l.Nb(0),l.rc(1,"\n  "),l.Pb(2,"article",1),l.rc(3,"\n    "),l.pc(4,m,18,3,"div",2),l.Zb(5,"async"),l.rc(6,"\n  "),l.Ob(),l.rc(7,"\n"),l.Mb()),2&e){var n=l.Yb();l.yb(4),l.ec("ngIf",l.ac(5,1,n.post$))}}var y,k=((y=function(){function t(n,r,i,a,c){e(this,t),this.route=n,this.srs=r,this.highlightService=i,this.metaService=a,this.ngNavigatorShareService=c}return n(t,[{key:"ngAfterViewChecked",value:function(){this.highlightService.highlightAll()}},{key:"ngOnInit",value:function(){var e=this;this.post$=this.srs.available$.pipe(Object(b.a)(function(t){return t.filter(function(t){return t.route.startsWith("/projects/")&&t.route.includes(e.route.snapshot.params.slug)})}),Object(b.a)(function(e){return e[0]}),Object(h.a)(function(t){t&&e.metaService.createMetaDataForPost(t)}))}},{key:"shareApi",value:function(e,t){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,this.ngNavigatorShareService.share({title:e,text:t,url:location.href});case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.warn("You app is not shared, reason: ",n.t0);case 8:case"end":return n.stop()}},n,this,[[0,5]])}))}},{key:"editOnGithubLink",value:function(){return"https://github.com/d-koppenhagen/d-koppenhagen.de/edit/master".concat(location.pathname,".md")}}]),t}()).\u0275fac=function(e){return new(e||y)(l.Kb(s.a),l.Kb(o.c),l.Kb(f.a),l.Kb(p.a),l.Kb(v))},y.\u0275cmp=l.Eb({type:y,selectors:[["dk-project-content"]],decls:2,vars:0,consts:[[4,"transloco"],[1,"wrapper","alt"],["class","inner",4,"ngIf"],[1,"inner"],[1,"project-header"],["class","image fit",4,"ngIf"],[1,"project-content"],[1,"edit-on-github"],["target","_blank","rel","noopener noreferrer",3,"href"],[1,"image","fit"],[3,"src"]],template:function(e,t){1&e&&(l.pc(0,w,8,3,"ng-container",0),l.rc(1,"\n"))},directives:[d.c,c.l,o.a],pipes:[c.b,d.e],styles:[".wrapper[_ngcontent-%COMP%]{margin-top:0}h1[_ngcontent-%COMP%]{font-size:1.4em}h2.sub-heading[_ngcontent-%COMP%]{font-size:.9em}.edit-on-github[_ngcontent-%COMP%]{margin:30px 0}[_ngcontent-%COMP%]::slotted(h1){color:#330625;background-color:#f8d3ec;padding:5px;border-radius:5px;font-size:1.4em;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}"]}),y),O=i("ShLU");function P(e,t){if(1&e&&(l.Nb(0),l.Pb(1,"section",1),l.Pb(2,"div",2),l.Pb(3,"h2",3),l.rc(4),l.Ob(),l.Lb(5,"dk-preview",4),l.Ob(),l.Ob(),l.Mb()),2&e){var n=t.$implicit;l.yb(4),l.sc(n("myProjects"))}}var j,x,N,S=[{path:"",component:(j=function(){function t(){e(this,t)}return n(t,[{key:"ngOnInit",value:function(){}}]),t}(),j.\u0275fac=function(e){return new(e||j)},j.\u0275cmp=l.Eb({type:j,selectors:[["dk-project-overview"]],decls:1,vars:0,consts:[[4,"transloco"],[1,"wrapper","alt"],[1,"inner"],[1,"major"],["content","projects"]],template:function(e,t){1&e&&l.pc(0,P,6,1,"ng-container",0)},directives:[d.c,O.a],styles:[".wrapper[_ngcontent-%COMP%]{margin-top:0}"]}),j)},{path:":slug",component:k}],I=((x=function t(){e(this,t)}).\u0275mod=l.Ib({type:x}),x.\u0275inj=l.Hb({factory:function(e){return new(e||x)},imports:[[s.g.forChild(S)],s.g]}),x),C=i("PCNd"),M=i("9rVU"),z=((N=function t(){e(this,t)}).\u0275mod=l.Ib({type:N}),N.\u0275inj=l.Hb({factory:function(e){return new(e||N)},imports:[[c.c,I,o.b,C.a,M.a]]}),N)}}])}();