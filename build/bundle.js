var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function a(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function r(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function f(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let h;function m(t){h=t}function g(t){(function(){if(!h)throw new Error("Function called outside component initialization");return h})().$$.on_mount.push(t)}const $=[],y=[],b=[],v=[],w=Promise.resolve();let x=!1;function _(t){b.push(t)}const O=new Set;let S=0;function T(){const t=h;do{for(;S<$.length;){const t=$[S];S++,m(t),k(t.$$)}for(m(null),$.length=0,S=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];O.has(n)||(O.add(n),n())}b.length=0}while($.length);for(;v.length;)v.pop()();x=!1,O.clear(),m(t)}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const E=new Set;let j;function C(){j={r:0,c:[],p:j}}function H(){j.r||o(j.c),j=j.p}function P(t,n){t&&t.i&&(E.delete(t),t.i(n))}function N(t,n,e,o){if(t&&t.o){if(E.has(t))return;E.add(t),j.c.push((()=>{E.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function A(t){t&&t.c()}function D(t,e,s,c){const{fragment:l,on_mount:r,on_destroy:i,after_update:u}=t.$$;l&&l.m(e,s),c||_((()=>{const e=r.map(n).filter(a);i?i.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(_)}function U(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function L(t,n){-1===t.$$.dirty[0]&&($.push(t),x||(x=!0,w.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function M(n,a,s,c,l,i,u,d=[-1]){const p=h;m(n);const f=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(p?p.$$.context:[])),callbacks:e(),dirty:d,skip_bound:!1,root:a.target||p.$$.root};u&&u(f.root);let g=!1;if(f.ctx=s?s(n,a.props||{},((t,e,...o)=>{const a=o.length?o[0]:e;return f.ctx&&l(f.ctx[t],f.ctx[t]=a)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](a),g&&L(n,t)),e})):[],f.update(),g=!0,o(f.before_update),f.fragment=!!c&&c(f.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);f.fragment&&f.fragment.l(t),t.forEach(r)}else f.fragment&&f.fragment.c();a.intro&&P(n.$$.fragment),D(n,a.target,a.anchor,a.customElement),T()}m(p)}class q{$destroy(){U(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function z(n){let e;return{c(){e=i("main"),e.innerHTML='<div class="row"><div class="col align-self-center mb-3"><a type="button" class="btn btn-outline-primary btn-lg" href="https://mukundbhudia.github.io/wembley-events/wembley-events.ics" rel="noopener" target="_blank">Download ics file</a> \n      <a type="button" class="btn btn-outline-secondary btn-lg" href="https://mukundbhudia.github.io/wembley-events/wembley-events.json" rel="noopener" target="_blank">Download JSON</a></div></div>',p(e,"class","svelte-11has9b")},m(t,n){l(t,e,n)},p:t,i:t,o:t,d(t){t&&r(e)}}}function B(t){return[]}class F extends q{constructor(t){super(),M(this,t,B,z,s,{})}}var J;function W(t){const n=new Date,e={today:[],past:[],upcoming:[],total:t.length};return t.forEach((t=>{const o=(a=n,s=t.date,a.setHours(0,0,0,0)<s.setHours(0,0,0,0)?J.Upcoming:a.setHours(0,0,0,0)===s.setHours(0,0,0,0)?J.Today:J.Past);var a,s;e[o].push(t)})),e}function G(t,n,e){const o=t.slice();return o[1]=n[e],o[3]=e,o}function I(t){let n,e,o,a,s,h,m,g,$,y,b,v=t[1].title+"",w=t[1].time_and_place+"",x=t[1].description+"";return{c(){n=i("div"),e=i("div"),o=i("h5"),a=u(v),s=d(),h=i("h6"),m=u(w),g=d(),$=i("p"),y=u(x),b=d(),p(o,"class","card-title"),p(h,"class","card-subtitle mb-2 text-muted"),p($,"class","card-text"),p(e,"class","card-body"),p(n,"class","card mb-3")},m(t,r){l(t,n,r),c(n,e),c(e,o),c(o,a),c(e,s),c(e,h),c(h,m),c(e,g),c(e,$),c($,y),c(n,b)},p(t,n){1&n&&v!==(v=t[1].title+"")&&f(a,v),1&n&&w!==(w=t[1].time_and_place+"")&&f(m,w),1&n&&x!==(x=t[1].description+"")&&f(y,x)},d(t){t&&r(n)}}}function K(n){let e,o=n[0],a=[];for(let t=0;t<o.length;t+=1)a[t]=I(G(n,o,t));return{c(){e=i("main");for(let t=0;t<a.length;t+=1)a[t].c()},m(t,n){l(t,e,n);for(let t=0;t<a.length;t+=1)a[t].m(e,null)},p(t,[n]){if(1&n){let s;for(o=t[0],s=0;s<o.length;s+=1){const c=G(t,o,s);a[s]?a[s].p(c,n):(a[s]=I(c),a[s].c(),a[s].m(e,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=o.length}},i:t,o:t,d(t){t&&r(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(a,t)}}}function Q(t,n,e){let{events:o}=n;return t.$$set=t=>{"events"in t&&e(0,o=t.events)},[o]}!function(t){t.Today="today",t.Past="past",t.Upcoming="upcoming"}(J||(J={}));class R extends q{constructor(t){super(),M(this,t,Q,K,s,{events:0})}}function V(n){let e;return{c(){e=i("div"),e.innerHTML='<div class="spinner-grow" role="status"><span class="visually-hidden">Loading...</span></div>',p(e,"class","d-flex justify-content-center")},m(t,n){l(t,e,n)},p:t,i:t,o:t,d(t){t&&r(e)}}}function X(t){let n,e,o,a,s,h,m,g,$,y,b,v,w,x,_,O,S,T,k,E,j,L,M,q,z,B,F,J,W,G,I,K,Q,V,X,tt,nt,et,ot,at=t[0].past.length+"",st=t[0].today.length+"",ct=t[0].upcoming.length+"";w=new R({props:{events:t[0].past}});const lt=[Z,Y],rt=[];function it(t,n){return t[0].today.length>0?0:1}return q=it(t),z=rt[q]=lt[q](t),et=new R({props:{events:t[0].upcoming}}),{c(){n=i("div"),e=i("div"),o=i("h2"),a=i("button"),s=u("Past events ("),h=u(at),m=u(")"),g=d(),$=i("div"),y=i("div"),b=i("h4"),b.textContent="Past events",v=d(),A(w.$$.fragment),x=d(),_=i("div"),O=i("h2"),S=i("button"),T=u("Events today ("),k=u(st),E=u(")"),j=d(),L=i("div"),M=i("div"),z.c(),B=d(),F=i("div"),J=i("h2"),W=i("button"),G=u("Upcoming events ("),I=u(ct),K=u(")"),Q=d(),V=i("div"),X=i("div"),tt=i("h4"),tt.textContent="Upcoming events",nt=d(),A(et.$$.fragment),p(a,"class","accordion-button collapsed"),p(a,"type","button"),p(a,"data-bs-toggle","collapse"),p(a,"data-bs-target","#panelsStayOpen-collapseOne"),p(a,"aria-expanded","false"),p(a,"aria-controls","panelsStayOpen-collapseOne"),p(o,"class","accordion-header"),p(o,"id","panelsStayOpen-headingOne"),p(y,"class","accordion-body"),p($,"id","panelsStayOpen-collapseOne"),p($,"class","accordion-collapse collapse"),p($,"aria-labelledby","panelsStayOpen-headingOne"),p(e,"class","accordion-item"),p(S,"class","accordion-button"),p(S,"type","button"),p(S,"data-bs-toggle","collapse"),p(S,"data-bs-target","#panelsStayOpen-collapseTwo"),p(S,"aria-expanded","true"),p(S,"aria-controls","panelsStayOpen-collapseTwo"),p(O,"class","accordion-header"),p(O,"id","panelsStayOpen-headingTwo"),p(M,"class","accordion-body"),p(L,"id","panelsStayOpen-collapseTwo"),p(L,"class","accordion-collapse show"),p(L,"aria-labelledby","panelsStayOpen-headingTwo"),p(_,"class","accordion-item"),p(W,"class","accordion-button"),p(W,"type","button"),p(W,"data-bs-toggle","collapse"),p(W,"data-bs-target","#panelsStayOpen-collapseThree"),p(W,"aria-expanded","true"),p(W,"aria-controls","panelsStayOpen-collapseThree"),p(J,"class","accordion-header"),p(J,"id","panelsStayOpen-headingThree"),p(X,"class","accordion-body"),p(V,"id","panelsStayOpen-collapseThree"),p(V,"class","accordion-collapse show"),p(V,"aria-labelledby","panelsStayOpen-headingThree"),p(F,"class","accordion-item"),p(n,"class","accordion"),p(n,"id","accordionPanelsStayOpenExample")},m(t,r){l(t,n,r),c(n,e),c(e,o),c(o,a),c(a,s),c(a,h),c(a,m),c(e,g),c(e,$),c($,y),c(y,b),c(y,v),D(w,y,null),c(n,x),c(n,_),c(_,O),c(O,S),c(S,T),c(S,k),c(S,E),c(_,j),c(_,L),c(L,M),rt[q].m(M,null),c(n,B),c(n,F),c(F,J),c(J,W),c(W,G),c(W,I),c(W,K),c(F,Q),c(F,V),c(V,X),c(X,tt),c(X,nt),D(et,X,null),ot=!0},p(t,n){(!ot||1&n)&&at!==(at=t[0].past.length+"")&&f(h,at);const e={};1&n&&(e.events=t[0].past),w.$set(e),(!ot||1&n)&&st!==(st=t[0].today.length+"")&&f(k,st);let o=q;q=it(t),q===o?rt[q].p(t,n):(C(),N(rt[o],1,1,(()=>{rt[o]=null})),H(),z=rt[q],z?z.p(t,n):(z=rt[q]=lt[q](t),z.c()),P(z,1),z.m(M,null)),(!ot||1&n)&&ct!==(ct=t[0].upcoming.length+"")&&f(I,ct);const a={};1&n&&(a.events=t[0].upcoming),et.$set(a)},i(t){ot||(P(w.$$.fragment,t),P(z),P(et.$$.fragment,t),ot=!0)},o(t){N(w.$$.fragment,t),N(z),N(et.$$.fragment,t),ot=!1},d(t){t&&r(n),U(w),rt[q].d(),U(et)}}}function Y(n){let e;return{c(){e=i("h4"),e.textContent="No events today"},m(t,n){l(t,e,n)},p:t,i:t,o:t,d(t){t&&r(e)}}}function Z(t){let n,e,o,a;return o=new R({props:{events:t[0].today}}),{c(){n=i("h4"),n.textContent="Events today",e=d(),A(o.$$.fragment)},m(t,s){l(t,n,s),l(t,e,s),D(o,t,s),a=!0},p(t,n){const e={};1&n&&(e.events=t[0].today),o.$set(e)},i(t){a||(P(o.$$.fragment,t),a=!0)},o(t){N(o.$$.fragment,t),a=!1},d(t){t&&r(n),t&&r(e),U(o,t)}}}function tt(t){let n,e,o,a;const s=[X,V],c=[];function u(t,n){return t[0].total>0?0:1}return e=u(t),o=c[e]=s[e](t),{c(){n=i("main"),o.c()},m(t,o){l(t,n,o),c[e].m(n,null),a=!0},p(t,[a]){let l=e;e=u(t),e===l?c[e].p(t,a):(C(),N(c[l],1,1,(()=>{c[l]=null})),H(),o=c[e],o?o.p(t,a):(o=c[e]=s[e](t),o.c()),P(o,1),o.m(n,null))},i(t){a||(P(o),a=!0)},o(t){N(o),a=!1},d(t){t&&r(n),c[e].d()}}}function nt(t,n,e){let o={today:[],past:[],upcoming:[],total:0};return g((async function(){let t=await async function(t){return await fetch(t).then((t=>t.json())).catch((t=>(console.error(t),[])))}("https://mukundbhudia.github.io/wembley-events/wembley-events.json");t.map((t=>{t.date=new Date(t.date)})),e(0,o=W(t))})),[o]}class et extends q{constructor(t){super(),M(this,t,nt,tt,s,{})}}function ot(t){let n,e,o,a,s,h,m,g,$;return h=new F({}),g=new et({}),{c(){n=i("main"),e=i("div"),o=i("h1"),a=u(t[0]),s=d(),A(h.$$.fragment),m=d(),A(g.$$.fragment),p(o,"class","svelte-f4956o"),p(e,"class","container py-4")},m(t,r){l(t,n,r),c(n,e),c(e,o),c(o,a),c(e,s),D(h,e,null),c(e,m),D(g,e,null),$=!0},p(t,[n]){(!$||1&n)&&f(a,t[0])},i(t){$||(P(h.$$.fragment,t),P(g.$$.fragment,t),$=!0)},o(t){N(h.$$.fragment,t),N(g.$$.fragment,t),$=!1},d(t){t&&r(n),U(h),U(g)}}}function at(t,n,e){let{title:o}=n;return t.$$set=t=>{"title"in t&&e(0,o=t.title)},[o]}return new class extends q{constructor(t){super(),M(this,t,at,ot,s,{title:0})}}({target:document.body,props:{title:"Wembley Events Calendar"}})}();
//# sourceMappingURL=bundle.js.map
