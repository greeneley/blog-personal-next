"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3145],{3145:function(e,t,r){function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}var i;r.d(t,{Db:function(){return he},aM:function(){return le}}),function(e){e.Idle="idle",e.Loading="loading",e.Error="error",e.Success="success"}(i||(i={}));var u=function(e){this.silent=e},o=0;var s="undefined"===typeof window;function c(){}var a=console||{error:c,warn:c,log:c};function h(e,t){return"function"===typeof e?e(t):e}function f(e,t){if("function"===typeof t)throw new Error;return b(t)?Object.keys(t).sort().reduce((function(e,r){return e[r]=t[r],e}),{}):t}function l(e,t){return e===t||typeof e===typeof t&&("object"===typeof e&&!Object.keys(t).some((function(r){return!l(e[r],t[r])})))}function d(e){return"number"===typeof e&&e>=0&&e!==1/0}function v(){return"undefined"===typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}function y(){return void 0===navigator.onLine||navigator.onLine}function p(e,t,r,i){var u,o,s,c;return b(e)?(u=e.queryKey,o=e.queryFn,s=e.config,c=t):b(t)?(u=e,s=t,c=r):(u=e,o=t,s=r,c=i),s=s||{},o&&(s=n({},s,{queryFn:o})),[u,s,c]}function g(e,t){if(e===t)return e;var r=Array.isArray(e)&&Array.isArray(t);if(r||b(e)&&b(t)){for(var n=r?e.length:Object.keys(e).length,i=r?t:Object.keys(t),u=i.length,o=r?[]:{},s=0,c=0;c<u;c++){var a=r?c:i[c];o[a]=g(e[a],t[a]),o[a]===e[a]&&s++}return n===u&&s===n?e:o}return t}function b(e){if(!m(e))return!1;var t=e.constructor;if("undefined"===typeof t)return!0;var r=t.prototype;return!!m(r)&&!!r.hasOwnProperty("isPrototypeOf")}function m(e){return"[object Object]"===Object.prototype.toString.call(e)}function S(e){return e instanceof u}function w(e){return{status:e,isLoading:e===i.Loading,isSuccess:e===i.Success,isError:e===i.Error,isIdle:e===i.Idle}}function Q(e){var t;return function(r){t&&t(),t=r(e)}}function C(e){Promise.resolve().then(e).catch((function(e){return setTimeout((function(){throw e}))}))}var F=function(e){e()};function q(){return F}var T={queries:{cacheTime:3e5,enabled:!0,notifyOnStatusChange:!0,queryFn:function(){return Promise.reject()},queryKeySerializerFn:function(e){try{var t=Array.isArray(e)?e:[e],r=(n=t,JSON.stringify(n,f));return[r,t=JSON.parse(r)]}catch(i){throw new Error("A valid query key is required!")}var n},refetchOnMount:!0,refetchOnReconnect:!0,refetchOnWindowFocus:!0,retry:3,retryDelay:function(e){return Math.min(1e3*Math.pow(2,e),3e4)},staleTime:0,structuralSharing:!0}};function E(e,t,r,i){var u=e.getDefaultConfig(),o=n({},T.queries,null==u?void 0:u.shared,null==u?void 0:u.queries,null==r?void 0:r.shared,null==r?void 0:r.queries,i),s=o.queryKeySerializerFn(t);return o.queryCache=e,o.queryHash=s[0],o.queryKey=s[1],o}var I=new(function(){function e(){this.queue=[],this.transactions=0}var t=e.prototype;return t.batch=function(e){this.transactions++;var t=e();return this.transactions--,this.transactions||this.flush(),t},t.schedule=function(e){this.transactions?this.queue.push(e):C((function(){e()}))},t.flush=function(){var e=this.queue;this.queue=[],e.length&&C((function(){q()((function(){e.forEach((function(e){e()}))}))}))},e}()),R=function(){function e(e){this.config=e,this.isStale=!0,this.initialUpdateCount=0,this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this),this.fetchMore=this.fetchMore.bind(this),this.unsubscribe=this.unsubscribe.bind(this),this.updateQuery()}var t=e.prototype;return t.subscribe=function(e){return this.listener=e||c,this.currentQuery.subscribeObserver(this),this.config.enabled&&(this.config.forceFetchOnMount||"always"===this.config.refetchOnMount)?this.fetch():this.optionalFetch(),this.updateTimers(),this.unsubscribe},t.unsubscribe=function(){this.listener=void 0,this.clearTimers(),this.currentQuery.unsubscribeObserver(this)},t.updateConfig=function(e){var t=this.config,r=this.currentQuery;if(this.config=function(e){return Boolean(e.queryHash)}(e)?e:this.config.queryCache.getResolvedQueryConfig(this.config.queryKey,e),this.updateQuery(),this.listener){if(this.currentQuery!==r)return this.optionalFetch(),void this.updateTimers();e.enabled&&!t.enabled&&this.optionalFetch(),e.enabled===t.enabled&&e.staleTime===t.staleTime||this.updateStaleTimeout(),e.enabled===t.enabled&&e.refetchInterval===t.refetchInterval||this.updateRefetchInterval()}},t.getCurrentQuery=function(){return this.currentQuery},t.getCurrentResult=function(){return this.currentResult},t.clear=function(){this.remove()},t.remove=function(){this.currentQuery.remove()},t.refetch=function(e){return this.currentQuery.refetch(e,this.config)},t.fetchMore=function(e,t){return this.currentQuery.fetchMore(e,t,this.config).catch(c)},t.fetch=function(){var e;return this.config.queryFn===(null==(e=T.queries)?void 0:e.queryFn)?Promise.resolve(this.currentResult.data):this.currentQuery.fetch(void 0,this.config).catch(c)},t.optionalFetch=function(){!this.config.enabled||!this.isStale||this.config.suspense&&this.currentResult.isFetched||!this.config.refetchOnMount&&1!==this.currentQuery.observers.length||this.fetch()},t.updateStaleTimeout=function(){var e=this;if(!s&&(this.clearStaleTimeout(),!this.isStale&&d(this.config.staleTime))){var t=Date.now()-this.currentResult.updatedAt,r=this.config.staleTime-t+1,n=Math.max(r,0);this.staleTimeoutId=setTimeout((function(){e.isStale||(e.isStale=!0,e.updateResult(),e.notify({listener:!0,globalListeners:!0}))}),n)}},t.updateRefetchInterval=function(){var e=this;s||(this.clearRefetchInterval(),this.config.enabled&&d(this.config.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(e.config.refetchIntervalInBackground||v())&&e.fetch()}),this.config.refetchInterval)))},t.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},t.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},t.clearStaleTimeout=function(){this.staleTimeoutId&&(clearInterval(this.staleTimeoutId),this.staleTimeoutId=void 0)},t.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},t.updateResult=function(){var e,t=this.currentQuery.state,r=t.data,u=t.status,o=t.updatedAt,s=!1,c=!1;if(this.config.keepPreviousData&&t.isInitialData&&(null==(e=this.previousQueryResult)?void 0:e.isSuccess)&&(r=this.previousQueryResult.data,o=this.previousQueryResult.updatedAt,u=this.previousQueryResult.status,s=!0),"loading"===u&&this.config.placeholderData){var a="function"===typeof this.config.placeholderData?this.config.placeholderData():this.config.placeholderData;"undefined"!==typeof a&&(u=i.Success,r=a,c=!0)}this.currentResult=n({},w(u),{canFetchMore:t.canFetchMore,clear:this.remove,data:r,error:t.error,failureCount:t.failureCount,fetchMore:this.fetchMore,isFetched:t.updateCount>0,isFetchedAfterMount:t.updateCount>this.initialUpdateCount,isFetching:t.isFetching,isFetchingMore:t.isFetchingMore,isInitialData:t.isInitialData,isPreviousData:s,isPlaceholderData:c,isStale:this.isStale,refetch:this.refetch,remove:this.remove,updatedAt:o})},t.updateQuery=function(){var e=this.config,t=this.currentQuery,r=e.queryCache.getQueryByHash(e.queryHash);r||(r=e.queryCache.createQuery(e)),r!==t&&(this.previousQueryResult=this.currentResult,this.currentQuery=r,this.initialUpdateCount=r.state.updateCount,r.state.isInitialData?e.keepPreviousData&&t?this.isStale=!0:"function"===typeof e.initialStale?this.isStale=e.initialStale():"boolean"===typeof e.initialStale?this.isStale=e.initialStale:this.isStale="undefined"===typeof r.state.data:this.isStale=r.isStaleByTime(e.staleTime),this.updateResult(),this.listener&&(null==t||t.unsubscribeObserver(this),this.currentQuery.subscribeObserver(this)))},t.onQueryUpdate=function(e){var t=this.config,r=e.type;2!==r&&3!==r&&4!==r||(this.isStale=this.currentQuery.isStaleByTime(t.staleTime));var n=this.currentResult;this.updateResult();var i=this.currentResult;if(2!==r&&3!==r&&4!==r||this.updateTimers(),4!==r||i.isStale!==n.isStale){var u={};2===r?u.onSuccess=!0:3===r&&(u.onError=!0),(t.notifyOnStatusChange||i.data!==n.data||i.error!==n.error)&&(u.listener=!0),this.notify(u)}},t.notify=function(e){var t=this.config,r=this.currentResult,n=this.currentQuery,i=this.listener,u=t.onSuccess,o=t.onSettled,s=t.onError;I.batch((function(){e.onSuccess?(u&&I.schedule((function(){u(r.data)})),o&&I.schedule((function(){o(r.data,null)}))):e.onError&&(s&&I.schedule((function(){s(r.error)})),o&&I.schedule((function(){o(void 0,r.error)}))),e.listener&&i&&I.schedule((function(){i(r)})),e.globalListeners&&t.queryCache.notifyGlobalListeners(n)}))},e}();function M(){}var O=0,D=1,L=2,A=3,P=4;function B(e,t){if(!t)return e&&e.then?e.then(M):Promise.resolve()}function k(e,t){var r=e();return r&&r.then?r.then(t):t(r)}function H(e,t,r){return r?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function j(e,t){try{var r=e()}catch(n){return t(n)}return r&&r.then?r.then(void 0,t):r}function G(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];try{return Promise.resolve(e.apply(this,t))}catch(n){return Promise.reject(n)}}}var x=function(){function e(e){this.config=e,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.queryCache=e.queryCache,this.cacheTime=e.cacheTime,this.observers=[],this.state=function(e){var t="function"===typeof e.initialData?e.initialData():e.initialData,r="undefined"!==typeof t?i.Success:e.enabled?i.Loading:i.Idle;return{canFetchMore:U(e,t),data:t,error:null,failureCount:0,isFetching:r===i.Loading,isFetchingMore:!1,isInitialData:!0,isInvalidated:!1,status:r,updateCount:0,updatedAt:Date.now()}}(e),this.scheduleGc()}var t=e.prototype;return t.updateConfig=function(e){this.config=e,this.cacheTime=Math.max(this.cacheTime,e.cacheTime)},t.dispatch=function(e){var t=this;this.state=function(e,t){var r;switch(t.type){case O:return n({},e,{failureCount:e.failureCount+1});case D:return n({},e,{failureCount:0,isFetching:!0,isFetchingMore:t.isFetchingMore||!1,status:"undefined"!==typeof e.data?i.Success:i.Loading});case L:return n({},e,{canFetchMore:t.canFetchMore,data:t.data,error:null,failureCount:0,isFetching:!1,isFetchingMore:!1,isInitialData:!1,isInvalidated:!1,status:i.Success,updateCount:e.updateCount+1,updatedAt:null!=(r=t.updatedAt)?r:Date.now()});case A:return n({},e,{error:t.error,failureCount:e.failureCount+1,isFetching:!1,isFetchingMore:!1,status:i.Error,throwInErrorBoundary:!0,updateCount:e.updateCount+1});case P:return n({},e,{isInvalidated:!0});default:return e}}(this.state,e),I.batch((function(){t.observers.forEach((function(t){t.onQueryUpdate(e)})),t.queryCache.notifyGlobalListeners(t)}))},t.scheduleGc=function(){var e=this;s||(this.clearGcTimeout(),this.observers.length>0||!d(this.cacheTime)||(this.gcTimeout=setTimeout((function(){e.remove()}),this.cacheTime)))},t.cancel=function(e){var t=this.promise;return t&&this.cancelFetch?(this.cancelFetch(e),t.then(c).catch(c)):Promise.resolve(void 0)},t.continue=function(){var e;null==(e=this.continueFetch)||e.call(this)},t.clearTimersObservers=function(){this.observers.forEach((function(e){e.clearTimers()}))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.setData=function(e,t){var r,n,i=this.state.data,u=h(e,i);this.config.structuralSharing&&(u=g(i,u)),(null==(r=(n=this.config).isDataEqual)?void 0:r.call(n,i,u))&&(u=i);var o=U(this.config,u);this.dispatch({type:L,data:u,canFetchMore:o,updatedAt:null==t?void 0:t.updatedAt})},t.clear=function(){a.warn("react-query: clear() has been deprecated, please use remove() instead"),this.remove()},t.remove=function(){this.queryCache.removeQuery(this)},t.destroy=function(){this.clearGcTimeout(),this.clearTimersObservers(),this.cancel()},t.isActive=function(){return this.observers.some((function(e){return e.config.enabled}))},t.isStale=function(){return this.state.isInvalidated||this.state.status!==i.Success||this.observers.some((function(e){return e.getCurrentResult().isStale}))},t.isStaleByTime=function(e){return void 0===e&&(e=0),this.state.isInvalidated||this.state.status!==i.Success||this.state.updatedAt+e<=Date.now()},t.onInteraction=function(e){var t=this.observers.find((function(t){var r=t.config,n=t.getCurrentResult().isStale;return r.enabled&&("focus"===e&&("always"===r.refetchOnWindowFocus||r.refetchOnWindowFocus&&n)||"online"===e&&("always"===r.refetchOnReconnect||r.refetchOnReconnect&&n))}));t&&t.fetch(),this.continue()},t.subscribe=function(e){var t=new R(this.config);return t.subscribe(e),t},t.subscribeObserver=function(e){this.observers.push(e),this.clearGcTimeout()},t.unsubscribeObserver=function(e){this.observers=this.observers.filter((function(t){return t!==e})),this.observers.length||(this.isTransportCancelable&&this.cancel(),this.scheduleGc())},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:P})},t.refetch=function(e,t){var r=this.fetch(void 0,t);return(null==e?void 0:e.throwOnError)||(r=r.catch(c)),r},t.fetchMore=function(e,t,r){return this.fetch({fetchMore:{fetchMoreVariable:e,previous:(null==t?void 0:t.previous)||!1}},r)},t.fetch=function(e,t){try{var r=!1,n=this;return k((function(){if(n.promise)return(null==e?void 0:e.fetchMore)&&n.state.data?B(n.cancel(!0)):(r=!0,n.promise)}),(function(i){if(r)return i;t&&n.updateConfig(t);var u=(t=n.config).queryFnParamsFilter,o=u?u(n.queryKey):n.queryKey;return n.promise=G((function(){return j((function(){var r;return k((function(){return t.infinite?H(n.startInfiniteFetch(t,o,e),(function(e){r=e})):H(n.startFetch(t,o,e),(function(e){r=e}))}),(function(){return n.setData(r),delete n.promise,r}))}),(function(e){throw S(e)&&e.silent||n.dispatch({type:A,error:e}),S(e)||a.error(e),delete n.promise,e}))}))(),n.promise}))}catch(i){return Promise.reject(i)}},t.startFetch=function(e,t,r){return this.state.isFetching||this.dispatch({type:D}),this.tryFetchData(e,(function(){return e.queryFn.apply(e,t)}))},t.startInfiniteFetch=function(e,t,r){var n=null==r?void 0:r.fetchMore,i=n||{},u=i.previous,o=i.fetchMoreVariable,s=!!n&&(u?"previous":"next"),c=this.state.data||[],a=G((function(r,n,i){var u=K(r,n);return"undefined"===typeof i&&"undefined"!==typeof u&&e.getFetchMore&&(i=e.getFetchMore(u,r)),Boolean(i)||"undefined"===typeof u?H(e.queryFn.apply(e,t.concat([i])),(function(e){return n?[e].concat(r):[].concat(r,[e])})):r}));return this.state.isFetching&&this.state.isFetchingMore===s||this.dispatch({type:D,isFetchingMore:s}),this.tryFetchData(e,(function(){if(s)return a(c,u,o);if(c.length){for(var e=a([]),t=1;t<c.length;t++)e=e.then(a);return e}return a([])}))},t.tryFetchData=function(e,t){var r=this;return new Promise((function(n,i){var o,s,c=!1,a=function(){c=!0,delete r.cancelFetch,delete r.continueFetch,delete r.isTransportCancelable,null==o||o()},f=function(e){a(),i(e)};r.cancelFetch=function(e){f(new u(e)),null==s||s()},r.continueFetch=function(){null==o||o()};var l=G((function(){return j((function(){var e,i=t();return"function"===typeof(null==(e=i)?void 0:e.cancel)&&(s=function(){try{i.cancel()}catch(e){}},r.isTransportCancelable=!0),H(i,(function(e){!function(e){a(),n(e)}(e)}))}),(function(t){if(!c){var n,i=r.state.failureCount,u=e.retry,s=e.retryDelay;if(!0===u||i<u||"function"===typeof u&&u(i,t))return r.dispatch({type:O}),H((n=h(s,i)||0,new Promise((function(e){setTimeout(e,n)}))),(function(){return k((function(){if(!v()||!y())return B(new Promise((function(e){o=e})))}),(function(){c||l()}))}));f(t)}}))}));l()}))},e}();function K(e,t){return t?e[0]:e[e.length-1]}function U(e,t,r){if(e.infinite&&e.getFetchMore&&Array.isArray(t))return Boolean(e.getFetchMore(K(t,r),t))}var _=function(){function e(e){this.config=e||{},this.globalListeners=[],this.queries={},this.queriesArray=[],this.isFetching=0}var t=e.prototype;return t.notifyGlobalListeners=function(e){var t=this;this.isFetching=this.getQueries().reduce((function(e,t){return t.state.isFetching?e+1:e}),0),I.batch((function(){t.globalListeners.forEach((function(r){I.schedule((function(){r(t,e)}))}))}))},t.getDefaultConfig=function(){return this.config.defaultConfig},t.getResolvedQueryConfig=function(e,t){return E(this,e,void 0,t)},t.subscribe=function(e){var t=this;return this.globalListeners.push(e),function(){t.globalListeners=t.globalListeners.filter((function(t){return t!==e}))}},t.clear=function(e){this.removeQueries(),(null==e?void 0:e.notify)&&this.notifyGlobalListeners()},t.getQueries=function(e,t){var r,n=!0===e||"undefined"===typeof e;if(n&&!t)return this.queriesArray;if("function"===typeof e)r=e;else{var i=t||{},u=i.exact,o=i.active,s=i.stale,c=this.getResolvedQueryConfig(e);r=function(e){if(!n)if(u){if(e.queryHash!==c.queryHash)return!1}else if(!l(e.queryKey,c.queryKey))return!1;return("boolean"!==typeof o||e.isActive()===o)&&("boolean"!==typeof s||e.isStale()===s)}}return this.queriesArray.filter(r)},t.getQuery=function(e){return this.getQueries(e,{exact:!0})[0]},t.getQueryByHash=function(e){return this.queries[e]},t.getQueryData=function(e){var t;return null==(t=this.getQuery(e))?void 0:t.state.data},t.removeQuery=function(e){this.queries[e.queryHash]&&(e.destroy(),delete this.queries[e.queryHash],this.queriesArray=this.queriesArray.filter((function(t){return t!==e})),this.notifyGlobalListeners(e))},t.removeQueries=function(e,t){var r=this;this.getQueries(e,t).forEach((function(e){r.removeQuery(e)}))},t.cancelQueries=function(e,t){this.getQueries(e,t).forEach((function(e){e.cancel()}))},t.invalidateQueries=function(e,t){var r=this.getQueries(e,t);I.batch((function(){r.forEach((function(e){e.invalidate()}))}));var i=t||{},u=i.refetchActive,o=void 0===u||u,s=i.refetchInactive,c=void 0!==s&&s;if(!c&&!o)return Promise.resolve(r);var a=n({},t);o&&!c?a.active=!0:c&&!o&&(a.active=!1);var h=this.refetchQueries(e,a);return(null==t?void 0:t.throwOnError)||(h=h.catch((function(){return r}))),h.then((function(){return r}))},t.refetchQueries=function(e,t){var r=this,n=[];return I.batch((function(){r.getQueries(e,t).forEach((function(e){var r=e.fetch().then((function(){return e}));(null==t?void 0:t.throwOnError)||(r=r.catch((function(){return e}))),n.push(r)}))})),Promise.all(n)},t.resetErrorBoundaries=function(){this.getQueries().forEach((function(e){e.state.throwInErrorBoundary=!1}))},t.buildQuery=function(e,t){var r=this.getResolvedQueryConfig(e,t),n=this.getQueryByHash(r.queryHash);return n||(n=this.createQuery(r)),n},t.createQuery=function(e){var t=new x(e);return this.config.frozen||(this.queries[t.queryHash]=t,this.queriesArray.push(t),this.notifyGlobalListeners(t)),t},t.fetchQuery=function(e,t,r){var i=p(e,t,r),u=i[0],o=i[1],s=this.getResolvedQueryConfig(u,n({retry:!1},o)),c=this.getQueryByHash(s.queryHash);return c||(c=this.createQuery(s)),c.isStaleByTime(o.staleTime)?c.fetch(void 0,s):Promise.resolve(c.state.data)},t.prefetchQuery=function(e,t,r,n){b(t)&&(t.hasOwnProperty("throwOnError")||t.hasOwnProperty("force"))&&(n=t,t=void 0,r=void 0);var i=p(e,t,r,n),u=i[0],o=i[1],s=i[2];(null==s?void 0:s.force)&&(o.staleTime=0);var a=this.fetchQuery(u,o);return(null==s?void 0:s.throwOnError)||(a=a.catch(c)),a},t.watchQuery=function(e,t,r){var n=p(e,t,r),i=n[0],u=n[1],o=this.getResolvedQueryConfig(i,u);return new R(o)},t.setQueryData=function(e,t,r){this.buildQuery(e,r).setData(t)},e}(),z=new _({frozen:s}),N=[z];function W(e){v()&&y()&&I.batch((function(){N.forEach((function(t){t.getQueries().forEach((function(t){t.onInteraction(e)}))}))}))}Q((function(){return W("focus")}))((function(e){var t;if(!s&&(null==(t=window)?void 0:t.addEventListener))return window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1),function(){window.removeEventListener("visibilitychange",e),window.removeEventListener("focus",e)}})),Q((function(){return W("online")}))((function(e){var t;if(!s&&(null==(t=window)?void 0:t.addEventListener))return window.addEventListener("online",e,!1),function(){window.removeEventListener("online",e)}}));var J=r(3935).unstable_batchedUpdates,V=r(7294),X=V.createContext(z),Y=function(){return V.useContext(X)},Z=V.createContext(void 0);function $(){return V.useContext(Z)}function ee(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var te=V.createContext(ee());function re(){var e=V.useRef(!1),t=V.useCallback((function(){return e.current}),[]);return V[s?"useEffect":"useLayoutEffect"]((function(){return e.current=!0,function(){e.current=!1}}),[]),t}function ne(e,t,r){return r?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}var ie=0,ue=1,oe=2,se=3;function ce(){return n({},w(i.Idle),{data:void 0,error:null})}function ae(e,t){switch(t.type){case ie:return ce();case ue:return n({},w(i.Loading),{data:void 0,error:null});case oe:return n({},w(i.Success),{data:t.data,error:null});case se:return n({},w(i.Error),{data:void 0,error:t.error});default:return e}}function he(e,t){void 0===t&&(t={});var r=function(e,t,r){var i=e.getDefaultConfig();return n({},T.mutations,null==i?void 0:i.shared,null==i?void 0:i.mutations,null==t?void 0:t.shared,null==t?void 0:t.mutations,r)}(Y(),$(),t),i=V.useReducer(ae,null,ce),u=i[0],s=function(e){var t=re();return V.useCallback((function(){if(t())return e.apply(void 0,arguments)}),[e,t])}(i[1]),c=V.useRef(),h=V.useRef(e);h.current=e;var f=V.useRef(r);f.current=r;var l,d=V.useCallback((l=function(e,t){void 0===t&&(t={});var r=f.current,n=o++;c.current=n;var i,u=function(){return c.current===n};return function(e,t){try{var r=e()}catch(n){return t(n)}return r&&r.then?r.then(void 0,t):r}((function(){return s({type:ue}),ne(null==r.onMutate?void 0:r.onMutate(e),(function(n){return i=n,ne((0,h.current)(e),(function(n){return u()&&s({type:oe,data:n}),ne(null==r.onSuccess?void 0:r.onSuccess(n,e),(function(){return ne(null==t.onSuccess?void 0:t.onSuccess(n,e),(function(){return ne(null==r.onSettled?void 0:r.onSettled(n,null,e),(function(){return ne(null==t.onSettled?void 0:t.onSettled(n,null,e),(function(){return n}))}))}))}))}))}))}),(function(n){return a.error(n),ne(null==r.onError?void 0:r.onError(n,e,i),(function(){return ne(null==t.onError?void 0:t.onError(n,e,i),(function(){return ne(null==r.onSettled?void 0:r.onSettled(void 0,n,e,i),(function(){return ne(null==t.onSettled?void 0:t.onSettled(void 0,n,e,i),(function(){if(u()&&s({type:se,error:n}),t.throwOnError||r.throwOnError)throw n}))}))}))}))}))},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(l.apply(this,e))}catch(r){return Promise.reject(r)}}),[s]);V.useEffect((function(){var e=f.current,t=e.suspense;if((e.useErrorBoundary||t)&&u.error)throw u.error}),[u.error]);var v=V.useCallback((function(){s({type:ie})}),[s]);return[d,n({},u,{reset:v})]}function fe(e,t){var r=V.useReducer((function(e){return e+1}),0)[1],n=re(),i=Y(),u=$(),o=V.useContext(te),s=E(i,e,u,t),c=V.useRef(),a=!c.current,h=c.current||new R(s);c.current=h,V.useEffect((function(){return o.clearReset(),h.subscribe((function(){n()&&r()}))}),[n,h,r,o]),a||h.updateConfig(s);var f=h.getCurrentResult();if(s.suspense||s.useErrorBoundary){var l=h.getCurrentQuery();if(f.isError&&!o.isReset()&&l.state.throwInErrorBoundary)throw f.error;if(s.enabled&&s.suspense&&!f.isSuccess){o.clearReset();var d=h.subscribe();throw h.fetch().finally(d)}}return f}function le(e,t,r){var n=p(e,t,r);return fe(n[0],n[1])}F=J}}]);