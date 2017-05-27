System.register("node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js",[],function(e,t){"use strict";return{setters:[],execute:function(){e("default",function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})}}}),System.register("node_modules/systemjs-plugin-babel/babel-helpers/createClass.js",[],function(e,t){"use strict";return{setters:[],execute:function(){e("default",function(){function e(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,s,r){return s&&e(t.prototype,s),r&&e(t,r),t}}())}}}),System.register("source/view/js/resource.js",[],function(e,t){"use strict";function s(e){return new Promise(function(t,s){var r=new XMLHttpRequest;r.open("GET",e),r.onload=function(){r.status>=200&&r.status<400?t(JSON.parse(r.responseText)):s("error code: "+r.status)},r.onerror=function(e){s(e)},r.send()})}return{setters:[],execute:function(){e("getAsync",s)}}}),System.register("source/view/js/assert.js",[],function(e,t){"use strict";function s(e,t){i(Array.isArray(e),t,"not an array")}function r(e,t){i("object"==typeof e&&null!==e,t,"object is empty")}function n(e,t){i("string"==typeof e&&!!e,t,"not a string or empty")}function o(e,t){i(!isNaN(parseFloat(e))&&isFinite(e),t,"not a number")}function i(e,t,s){if(!e){var r="Assert failed";throw void 0!==t?r+=": "+t:void 0!==s&&(r+=": "+s),new Error(r)}}return{setters:[],execute:function(){e("assertArray",s),e("assertObject",r),e("assertString",n),e("assertNumber",o)}}}),System.register("source/view/js/postViewModel.js",["node_modules/systemjs-plugin-babel/babel-helpers/classCallCheck.js","node_modules/systemjs-plugin-babel/babel-helpers/createClass.js","./resource.js","./assert.js","put-selector"],function(e,t){"use strict";var s,r,n,o,i,u,a,c,l;return{setters:[function(e){s=e.default},function(e){r=e.default},function(e){n=e.getAsync},function(e){o=e.assertArray,i=e.assertObject,u=e.assertString,a=e.assertNumber},function(e){c=e.default}],execute:function(){e("PostViewModel",l=function(){function e(){s(this,e)}return r(e,[{key:"inflate",value:function(){var e=this;n("post-headers.json").then(function(t){o(t,"posts headers must be an array"),e._excludeCurrent(t),e._shufflePosts(t),t.forEach(function(e){var t=document.getElementById("sidebar-list");i(t,"sidebar list element does not exist");var s=c(t,"li");c(s,"span",e.dateCreated+" "),c(s,"a[href='"+e.url+"']",e.title)})},function(e){console.log("error getting model",e)})}},{key:"_shufflePosts",value:function(e){for(var t=e.length;t;--t){var s=Math.floor(Math.random()*t),r=[e[s],e[t-1]];e[t-1]=r[0],e[s]=r[1]}}},{key:"_excludeCurrent",value:function(e){var t=document.querySelector("article");i(t,"not article found on the page. Make sure the post body resides in a 'article' tag"),u(t.id,"article id is missing. Make sure the article tag has id attribute set");for(var s=null,r=0;r<e.length;++r)if(e[r].id===t.id){s=r;break}a(s,"current post isn't found in the posts list"),e.splice(s,1)}}]),e}()),e("PostViewModel",l)}}});