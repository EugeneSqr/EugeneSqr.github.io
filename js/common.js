"bundle";(function(){function e(e){"use strict";var r={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Specify a prefix to generated header ids",type:"string"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,description:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,description:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,description:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,description:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,description:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",description:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,description:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"}};if(!1===e)return JSON.parse(JSON.stringify(r));var t={};for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n].defaultValue);return t}function r(e,r){"use strict";var t=r?"Error in "+r+" extension->":"Error in unnamed extension",s={valid:!0,error:""};n.helper.isArray(e)||(e=[e]);for(var a=0;a<e.length;++a){var i=t+" sub-extension "+a+": ",o=e[a];if("object"!=typeof o)return s.valid=!1,s.error=i+"must be an object, but "+typeof o+" given",s;if(!n.helper.isString(o.type))return s.valid=!1,s.error=i+'property "type" must be a string, but '+typeof o.type+" given",s;var c=o.type=o.type.toLowerCase();if("language"===c&&(c=o.type="lang"),"html"===c&&(c=o.type="output"),"lang"!==c&&"output"!==c&&"listener"!==c)return s.valid=!1,s.error=i+"type "+c+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',s;if("listener"===c){if(n.helper.isUndefined(o.listeners))return s.valid=!1,s.error=i+'. Extensions of type "listener" must have a property called "listeners"',s}else if(n.helper.isUndefined(o.filter)&&n.helper.isUndefined(o.regex))return s.valid=!1,s.error=i+c+' extensions must define either a "regex" property or a "filter" method',s;if(o.listeners){if("object"!=typeof o.listeners)return s.valid=!1,s.error=i+'"listeners" property must be an object but '+typeof o.listeners+" given",s;for(var l in o.listeners)if(o.listeners.hasOwnProperty(l)&&"function"!=typeof o.listeners[l])return s.valid=!1,s.error=i+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+l+" must be a function but "+typeof o.listeners[l]+" given",s}if(o.filter){if("function"!=typeof o.filter)return s.valid=!1,s.error=i+'"filter" must be a function, but '+typeof o.filter+" given",s}else if(o.regex){if(n.helper.isString(o.regex)&&(o.regex=new RegExp(o.regex,"g")),!(o.regex instanceof RegExp))return s.valid=!1,s.error=i+'"regex" property must either be a string or a RegExp object, but '+typeof o.regex+" given",s;if(n.helper.isUndefined(o.replace))return s.valid=!1,s.error=i+'"regex" extensions must implement a replace string or function',s}}return s}function t(e,r){"use strict";return"¨E"+r.charCodeAt(0)+"E"}var n={},s={},a={},i=e(!0),o="vanilla",c={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:e(!0),allOn:function(){"use strict";var r=e(!0),t={};for(var n in r)r.hasOwnProperty(n)&&(t[n]=!0);return t}()};n.helper={},n.extensions={},n.setOption=function(e,r){"use strict";return i[e]=r,this},n.getOption=function(e){"use strict";return i[e]},n.getOptions=function(){"use strict";return i},n.resetOptions=function(){"use strict";i=e(!0)},n.setFlavor=function(e){"use strict";if(!c.hasOwnProperty(e))throw Error(e+" flavor was not found");var r=c[e];o=e;for(var t in r)r.hasOwnProperty(t)&&(i[t]=r[t])},n.getFlavor=function(){"use strict";return o},n.getFlavorOptions=function(e){"use strict";if(c.hasOwnProperty(e))return c[e]},n.getDefaultOptions=function(r){"use strict";return e(r)},n.subParser=function(e,r){"use strict";if(n.helper.isString(e)){if(void 0===r){if(s.hasOwnProperty(e))return s[e];throw Error("SubParser named "+e+" not registered!")}s[e]=r}},n.extension=function(e,t){"use strict";if(!n.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=n.helper.stdExtName(e),n.helper.isUndefined(t)){if(!a.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return a[e]}"function"==typeof t&&(t=t()),n.helper.isArray(t)||(t=[t]);var s=r(t,e);if(!s.valid)throw Error(s.error);a[e]=t},n.getAllExtensions=function(){"use strict";return a},n.removeExtension=function(e){"use strict";delete a[e]},n.resetExtensions=function(){"use strict";a={}},n.validateExtension=function(e){"use strict";var t=r(e,null);return!!t.valid||(console.warn(t.error),!1)},n.hasOwnProperty("helper")||(n.helper={}),n.helper.isString=function(e){"use strict";return"string"==typeof e||e instanceof String},n.helper.isFunction=function(e){"use strict";var r={};return e&&"[object Function]"===r.toString.call(e)},n.helper.isArray=function(e){"use strict";return e.constructor===Array},n.helper.isUndefined=function(e){"use strict";return void 0===e},n.helper.forEach=function(e,r){"use strict";if(n.helper.isUndefined(e))throw new Error("obj param is required");if(n.helper.isUndefined(r))throw new Error("callback param is required");if(!n.helper.isFunction(r))throw new Error("callback param must be a function/closure");if("function"==typeof e.forEach)e.forEach(r);else if(n.helper.isArray(e))for(var t=0;t<e.length;t++)r(e[t],t,e);else{if("object"!=typeof e)throw new Error("obj does not seem to be an array or an iterable object");for(var s in e)e.hasOwnProperty(s)&&r(e[s],s,e)}},n.helper.stdExtName=function(e){"use strict";return e.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()},n.helper.escapeCharactersCallback=t,n.helper.escapeCharacters=function(e,r,n){"use strict";var s="(["+r.replace(/([\[\]\\])/g,"\\$1")+"])";n&&(s="\\\\"+s);var a=new RegExp(s,"g");return e=e.replace(a,t)};var l=function(e,r,t,n){"use strict";var s,a,i,o,c,l=n||"",u=l.indexOf("g")>-1,p=new RegExp(r+"|"+t,"g"+l.replace(/g/g,"")),h=new RegExp(r,l.replace(/g/g,"")),d=[];do{for(s=0;i=p.exec(e);)if(h.test(i[0]))s++||(a=p.lastIndex,o=a-i[0].length);else if(s&&!--s){c=i.index+i[0].length;var f={left:{start:o,end:a},match:{start:a,end:i.index},right:{start:i.index,end:c},wholeMatch:{start:o,end:c}};if(d.push(f),!u)return d}}while(s&&(p.lastIndex=a));return d};n.helper.matchRecursiveRegExp=function(e,r,t,n){"use strict";for(var s=l(e,r,t,n),a=[],i=0;i<s.length;++i)a.push([e.slice(s[i].wholeMatch.start,s[i].wholeMatch.end),e.slice(s[i].match.start,s[i].match.end),e.slice(s[i].left.start,s[i].left.end),e.slice(s[i].right.start,s[i].right.end)]);return a},n.helper.replaceRecursiveRegExp=function(e,r,t,s,a){"use strict";if(!n.helper.isFunction(r)){var i=r;r=function(){return i}}var o=l(e,t,s,a),c=e,u=o.length;if(u>0){var p=[];0!==o[0].wholeMatch.start&&p.push(e.slice(0,o[0].wholeMatch.start));for(var h=0;h<u;++h)p.push(r(e.slice(o[h].wholeMatch.start,o[h].wholeMatch.end),e.slice(o[h].match.start,o[h].match.end),e.slice(o[h].left.start,o[h].left.end),e.slice(o[h].right.start,o[h].right.end))),h<u-1&&p.push(e.slice(o[h].wholeMatch.end,o[h+1].wholeMatch.start));o[u-1].wholeMatch.end<e.length&&p.push(e.slice(o[u-1].wholeMatch.end)),c=p.join("")}return c},n.helper.encodeEmailAddress=function(e){"use strict";var r=[function(e){return"&#"+e.charCodeAt(0)+";"},function(e){return"&#x"+e.charCodeAt(0).toString(16)+";"},function(e){return e}];return e=e.replace(/./g,function(e){if("@"===e)e=r[Math.floor(2*Math.random())](e);else{var t=Math.random();e=t>.9?r[2](e):t>.45?r[1](e):r[0](e)}return e})},"undefined"==typeof console&&(console={warn:function(e){"use strict";alert(e)},log:function(e){"use strict";alert(e)},error:function(e){"use strict";throw e}}),n.helper.regexes={asteriskAndDash:/([*_])/g},n.Converter=function(e){"use strict";function t(e,t){if(t=t||null,n.helper.isString(e)){if(e=n.helper.stdExtName(e),t=e,n.extensions[e])return console.warn("DEPRECATION WARNING: "+e+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),void s(n.extensions[e],e);if(n.helper.isUndefined(a[e]))throw Error('Extension "'+e+'" could not be loaded. It was either not found or is not a valid extension.');e=a[e]}"function"==typeof e&&(e=e()),n.helper.isArray(e)||(e=[e]);var i=r(e,t);if(!i.valid)throw Error(i.error);for(var o=0;o<e.length;++o){switch(e[o].type){case"lang":h.push(e[o]);break;case"output":d.push(e[o])}if(e[o].hasOwnProperty("listeners"))for(var c in e[o].listeners)e[o].listeners.hasOwnProperty(c)&&l(c,e[o].listeners[c])}}function s(e,t){"function"==typeof e&&(e=e(new n.Converter)),n.helper.isArray(e)||(e=[e]);var s=r(e,t);if(!s.valid)throw Error(s.error);for(var a=0;a<e.length;++a)switch(e[a].type){case"lang":h.push(e[a]);break;case"output":d.push(e[a]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function l(e,r){if(!n.helper.isString(e))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof e+" given");if("function"!=typeof r)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof r+" given");f.hasOwnProperty(e)||(f[e]=[]),f[e].push(r)}function u(e){var r=e.match(/^\s*/)[0].length,t=new RegExp("^\\s{0,"+r+"}","gm");return e.replace(t,"")}var p={},h=[],d=[],f={},g=o;!function(){e=e||{};for(var r in i)i.hasOwnProperty(r)&&(p[r]=i[r]);if("object"!=typeof e)throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.");for(var s in e)e.hasOwnProperty(s)&&(p[s]=e[s]);p.extensions&&n.helper.forEach(p.extensions,t)}(),this._dispatch=function(e,r,t,n){if(f.hasOwnProperty(e))for(var s=0;s<f[e].length;++s){var a=f[e][s](e,r,this,t,n);a&&void 0!==a&&(r=a)}return r},this.listen=function(e,r){return l(e,r),this},this.makeHtml=function(e){if(!e)return e;var r={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:h,outputModifiers:d,converter:this,ghCodeBlocks:[]};return e=e.replace(/¨/g,"¨T"),e=e.replace(/\$/g,"¨D"),e=e.replace(/\r\n/g,"\n"),e=e.replace(/\r/g,"\n"),e=e.replace(/\u00A0/g," "),p.smartIndentationFix&&(e=u(e)),e="\n\n"+e+"\n\n",e=n.subParser("detab")(e,p,r),e=e.replace(/^[ \t]+$/gm,""),n.helper.forEach(h,function(t){e=n.subParser("runExtension")(t,e,p,r)}),e=n.subParser("hashPreCodeTags")(e,p,r),e=n.subParser("githubCodeBlocks")(e,p,r),e=n.subParser("hashHTMLBlocks")(e,p,r),e=n.subParser("hashCodeTags")(e,p,r),e=n.subParser("stripLinkDefinitions")(e,p,r),e=n.subParser("blockGamut")(e,p,r),e=n.subParser("unhashHTMLSpans")(e,p,r),e=n.subParser("unescapeSpecialChars")(e,p,r),e=e.replace(/¨D/g,"$$"),e=e.replace(/¨T/g,"¨"),n.helper.forEach(d,function(t){e=n.subParser("runExtension")(t,e,p,r)}),e},this.setOption=function(e,r){p[e]=r},this.getOption=function(e){return p[e]},this.getOptions=function(){return p},this.addExtension=function(e,r){r=r||null,t(e,r)},this.useExtension=function(e){t(e)},this.setFlavor=function(e){if(!c.hasOwnProperty(e))throw Error(e+" flavor was not found");var r=c[e];g=e;for(var t in r)r.hasOwnProperty(t)&&(p[t]=r[t])},this.getFlavor=function(){return g},this.removeExtension=function(e){n.helper.isArray(e)||(e=[e]);for(var r=0;r<e.length;++r){for(var t=e[r],s=0;s<h.length;++s)h[s]===t&&h[s].splice(s,1);for(;0<d.length;++s)d[0]===t&&d[0].splice(s,1)}},this.getAllExtensions=function(){return{language:h,output:d}}},n.subParser("anchors",function(e,r,t){"use strict";e=t.converter._dispatch("anchors.before",e,r,t);var s=function(e,r,s,a,i,o,c,l){n.helper.isUndefined(l)&&(l=""),e=r;var u=s,p=a.toLowerCase(),h=i,d=l;if(!h)if(p||(p=u.toLowerCase().replace(/ ?\n/g," ")),h="#"+p,n.helper.isUndefined(t.gUrls[p])){if(!(e.search(/\(\s*\)$/m)>-1))return e;h=""}else h=t.gUrls[p],n.helper.isUndefined(t.gTitles[p])||(d=t.gTitles[p]);h=h.replace(n.helper.regexes.asteriskAndDash,n.helper.escapeCharactersCallback);var f='<a href="'+h+'"';return""!==d&&null!==d&&(d=d.replace(/"/g,"&quot;"),d=d.replace(n.helper.regexes.asteriskAndDash,n.helper.escapeCharactersCallback),f+=' title="'+d+'"'),f+=">"+u+"</a>"};return e=e.replace(/(\[((?:\[[^\]]*]|[^\[\]])*)][ ]?(?:\n[ ]*)?\[(.*?)])()()()()/g,s),e=e.replace(/(\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,s),e=e.replace(/(\[([^\[\]]+)])()()()()()/g,s),r.ghMentions&&(e=e.replace(/(^|\s)(\\)?(@([a-z\d\-]+))(?=[.!?;,[\]()]|\s|$)/gim,function(e,t,s,a,i){if("\\"===s)return t+a;if(!n.helper.isString(r.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");return t+'<a href="'+r.ghMentionsLink.replace(/\{u}/g,i)+'">'+a+"</a>"})),e=t.converter._dispatch("anchors.after",e,r,t)}),n.subParser("autoLinks",function(e,r,t){"use strict";function s(e,t,n,s,a){var i=t,o="";return/^www\./i.test(t)&&(t=t.replace(/^www\./i,"http://www.")),r.excludeTrailingPunctuationFromURLs&&a&&(o=a),'<a href="'+t+'">'+i+"</a>"+o}function a(e,s,a){var i="mailto:";return s=s||"",a=n.subParser("unescapeSpecialChars")(a,r,t),r.encodeEmails?(i=n.helper.encodeEmailAddress(i+a),a=n.helper.encodeEmailAddress(a)):i+=a,s+'<a href="'+i+'">'+a+"</a>"}e=t.converter._dispatch("autoLinks.before",e,r,t);return e=e.replace(/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi,s),e=e.replace(/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,a),r.simplifiedAutoLink&&(e=r.excludeTrailingPunctuationFromURLs?e.replace(/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?()]?)(?=\s|$)(?!["<>])/gi,s):e.replace(/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)()(?=\s|$)(?!["<>])/gi,s),e=e.replace(/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-\/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,a)),e=t.converter._dispatch("autoLinks.after",e,r,t)}),n.subParser("blockGamut",function(e,r,t){"use strict";return e=t.converter._dispatch("blockGamut.before",e,r,t),e=n.subParser("blockQuotes")(e,r,t),e=n.subParser("headers")(e,r,t),e=n.subParser("horizontalRule")(e,r,t),e=n.subParser("lists")(e,r,t),e=n.subParser("codeBlocks")(e,r,t),e=n.subParser("tables")(e,r,t),e=n.subParser("hashHTMLBlocks")(e,r,t),e=n.subParser("paragraphs")(e,r,t),e=t.converter._dispatch("blockGamut.after",e,r,t)}),n.subParser("blockQuotes",function(e,r,t){"use strict";return e=t.converter._dispatch("blockQuotes.before",e,r,t),e=e.replace(/((^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(e,s){var a=s;return a=a.replace(/^[ \t]*>[ \t]?/gm,"¨0"),a=a.replace(/¨0/g,""),a=a.replace(/^[ \t]+$/gm,""),a=n.subParser("githubCodeBlocks")(a,r,t),a=n.subParser("blockGamut")(a,r,t),a=a.replace(/(^|\n)/g,"$1  "),a=a.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,r){var t=r;return t=t.replace(/^  /gm,"¨0"),t=t.replace(/¨0/g,"")}),n.subParser("hashBlock")("<blockquote>\n"+a+"\n</blockquote>",r,t)}),e=t.converter._dispatch("blockQuotes.after",e,r,t)}),n.subParser("codeBlocks",function(e,r,t){"use strict";e=t.converter._dispatch("codeBlocks.before",e,r,t),e+="¨0";return e=e.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g,function(e,s,a){var i=s,o=a,c="\n";return i=n.subParser("outdent")(i,r,t),i=n.subParser("encodeCode")(i,r,t),i=n.subParser("detab")(i,r,t),i=i.replace(/^\n+/g,""),i=i.replace(/\n+$/g,""),r.omitExtraWLInCodeBlocks&&(c=""),i="<pre><code>"+i+c+"</code></pre>",n.subParser("hashBlock")(i,r,t)+o}),e=e.replace(/¨0/,""),e=t.converter._dispatch("codeBlocks.after",e,r,t)}),n.subParser("codeSpans",function(e,r,t){"use strict";return e=t.converter._dispatch("codeSpans.before",e,r,t),void 0===e&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,s,a,i){var o=i;return o=o.replace(/^([ \t]*)/g,""),o=o.replace(/[ \t]*$/g,""),o=n.subParser("encodeCode")(o,r,t),s+"<code>"+o+"</code>"}),e=t.converter._dispatch("codeSpans.after",e,r,t)}),n.subParser("detab",function(e,r,t){"use strict";return e=t.converter._dispatch("detab.before",e,r,t),e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"¨A¨B"),e=e.replace(/¨B(.+?)¨A/g,function(e,r){for(var t=r,n=4-t.length%4,s=0;s<n;s++)t+=" ";return t}),e=e.replace(/¨A/g,"    "),e=e.replace(/¨B/g,""),e=t.converter._dispatch("detab.after",e,r,t)}),n.subParser("encodeAmpsAndAngles",function(e,r,t){"use strict";return e=t.converter._dispatch("encodeAmpsAndAngles.before",e,r,t),e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?$!])/gi,"&lt;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=t.converter._dispatch("encodeAmpsAndAngles.after",e,r,t)}),n.subParser("encodeBackslashEscapes",function(e,r,t){"use strict";return e=t.converter._dispatch("encodeBackslashEscapes.before",e,r,t),e=e.replace(/\\(\\)/g,n.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+.!~=-])/g,n.helper.escapeCharactersCallback),e=t.converter._dispatch("encodeBackslashEscapes.after",e,r,t)}),n.subParser("encodeCode",function(e,r,t){"use strict";return e=t.converter._dispatch("encodeCode.before",e,r,t),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,n.helper.escapeCharactersCallback),e=t.converter._dispatch("encodeCode.after",e,r,t)}),n.subParser("escapeSpecialCharsWithinTagAttributes",function(e,r,t){"use strict";e=t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",e,r,t);return e=e.replace(/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi,function(e){return e.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=])/g,n.helper.escapeCharactersCallback)}),e=t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",e,r,t)}),n.subParser("githubCodeBlocks",function(e,r,t){"use strict";return r.ghCodeBlocks?(e=t.converter._dispatch("githubCodeBlocks.before",e,r,t),e+="¨0",e=e.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(e,s,a){var i=r.omitExtraWLInCodeBlocks?"":"\n";return a=n.subParser("encodeCode")(a,r,t),a=n.subParser("detab")(a,r,t),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,""),a="<pre><code"+(s?' class="'+s+" language-"+s+'"':"")+">"+a+i+"</code></pre>",a=n.subParser("hashBlock")(a,r,t),"\n\n¨G"+(t.ghCodeBlocks.push({text:e,codeblock:a})-1)+"G\n\n"}),e=e.replace(/¨0/,""),t.converter._dispatch("githubCodeBlocks.after",e,r,t)):e}),n.subParser("hashBlock",function(e,r,t){"use strict";return e=t.converter._dispatch("hashBlock.before",e,r,t),e=e.replace(/(^\n+|\n+$)/g,""),e="\n\n¨K"+(t.gHtmlBlocks.push(e)-1)+"K\n\n",e=t.converter._dispatch("hashBlock.after",e,r,t)}),n.subParser("hashCodeTags",function(e,r,t){"use strict";e=t.converter._dispatch("hashCodeTags.before",e,r,t);var s=function(e,s,a,i){var o=a+n.subParser("encodeCode")(s,r,t)+i;return"¨C"+(t.gHtmlSpans.push(o)-1)+"C"};return e=n.helper.replaceRecursiveRegExp(e,s,"<code\\b[^>]*>","</code>","gim"),e=t.converter._dispatch("hashCodeTags.after",e,r,t)}),n.subParser("hashElement",function(e,r,t){"use strict";return function(e,r){var n=r;return n=n.replace(/\n\n/g,"\n"),n=n.replace(/^\n/,""),n=n.replace(/\n+$/g,""),n="\n\n¨K"+(t.gHtmlBlocks.push(n)-1)+"K\n\n"}}),n.subParser("hashHTMLBlocks",function(e,r,t){"use strict";e=t.converter._dispatch("hashHTMLBlocks.before",e,r,t);for(var s=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],a=function(e,r,n,s){var a=e;return-1!==n.search(/\bmarkdown\b/)&&(a=n+t.converter.makeHtml(r)+s),"\n\n¨K"+(t.gHtmlBlocks.push(a)-1)+"K\n\n"},i=0;i<s.length;++i)e=n.helper.replaceRecursiveRegExp(e,a,"^ {0,3}<"+s[i]+"\\b[^>]*>","</"+s[i]+">","gim");return e=e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,n.subParser("hashElement")(e,r,t)),e=n.helper.replaceRecursiveRegExp(e,function(e){return"\n\n¨K"+(t.gHtmlBlocks.push(e)-1)+"K\n\n"},"^ {0,3}\x3c!--","--\x3e","gm"),e=e.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,n.subParser("hashElement")(e,r,t)),e=t.converter._dispatch("hashHTMLBlocks.after",e,r,t)}),n.subParser("hashHTMLSpans",function(e,r,t){"use strict";function n(e){return"¨C"+(t.gHtmlSpans.push(e)-1)+"C"}return e=t.converter._dispatch("hashHTMLSpans.before",e,r,t),e=e.replace(/<[^>]+?\/>/gi,function(e){return n(e)}),e=e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(e){return n(e)}),e=e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(e){return n(e)}),e=e.replace(/<[^>]+?>/gi,function(e){return n(e)}),e=t.converter._dispatch("hashHTMLSpans.after",e,r,t)}),n.subParser("unhashHTMLSpans",function(e,r,t){"use strict";e=t.converter._dispatch("unhashHTMLSpans.before",e,r,t);for(var n=0;n<t.gHtmlSpans.length;++n){for(var s=t.gHtmlSpans[n],a=0;/¨C(\d+)C/.test(s);){var i=RegExp.$1;if(s=s.replace("¨C"+i+"C",t.gHtmlSpans[i]),10===a)break;++a}e=e.replace("¨C"+n+"C",s)}return e=t.converter._dispatch("unhashHTMLSpans.after",e,r,t)}),n.subParser("hashPreCodeTags",function(e,r,t){"use strict";e=t.converter._dispatch("hashPreCodeTags.before",e,r,t);var s=function(e,s,a,i){var o=a+n.subParser("encodeCode")(s,r,t)+i;return"\n\n¨G"+(t.ghCodeBlocks.push({text:e,codeblock:o})-1)+"G\n\n"};return e=n.helper.replaceRecursiveRegExp(e,s,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),e=t.converter._dispatch("hashPreCodeTags.after",e,r,t)}),n.subParser("headers",function(e,r,t){"use strict";function s(e){var s;return s=n.helper.isString(r.prefixHeaderId)?r.prefixHeaderId+e:!0===r.prefixHeaderId?"section "+e:e,s=i?s.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():s.replace(/[^\w]/g,"").toLowerCase(),t.hashLinkCounts[s]?s=s+"-"+t.hashLinkCounts[s]++:t.hashLinkCounts[s]=1,s}e=t.converter._dispatch("headers.before",e,r,t);var a=isNaN(parseInt(r.headerLevelStart))?1:parseInt(r.headerLevelStart),i=r.ghCompatibleHeaderId,o=r.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,c=r.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;e=e.replace(o,function(e,i){var o=n.subParser("spanGamut")(i,r,t),c=r.noHeaderId?"":' id="'+s(i)+'"',l=a,u="<h"+l+c+">"+o+"</h"+l+">";return n.subParser("hashBlock")(u,r,t)}),e=e.replace(c,function(e,i){var o=n.subParser("spanGamut")(i,r,t),c=r.noHeaderId?"":' id="'+s(i)+'"',l=a+1,u="<h"+l+c+">"+o+"</h"+l+">";return n.subParser("hashBlock")(u,r,t)});var l=r.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;return e=e.replace(l,function(e,i,o){var c=n.subParser("spanGamut")(o,r,t),l=r.noHeaderId?"":' id="'+s(o)+'"',u=a-1+i.length,p="<h"+u+l+">"+c+"</h"+u+">";return n.subParser("hashBlock")(p,r,t)}),e=t.converter._dispatch("headers.after",e,r,t)}),n.subParser("horizontalRule",function(e,r,t){"use strict";e=t.converter._dispatch("horizontalRule.before",e,r,t);var s=n.subParser("hashBlock")("<hr />",r,t);return e=e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,s),e=e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,s),e=e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,s),e=t.converter._dispatch("horizontalRule.after",e,r,t)}),n.subParser("images",function(e,r,t){"use strict";function s(e,r,s,a,i,o,c,l){var u=t.gUrls,p=t.gTitles,h=t.gDimensions;if(s=s.toLowerCase(),l||(l=""),""===a||null===a){if(""!==s&&null!==s||(s=r.toLowerCase().replace(/ ?\n/g," ")),a="#"+s,n.helper.isUndefined(u[s]))return e;a=u[s],n.helper.isUndefined(p[s])||(l=p[s]),n.helper.isUndefined(h[s])||(i=h[s].width,o=h[s].height)}r=r.replace(/"/g,"&quot;").replace(n.helper.regexes.asteriskAndDash,n.helper.escapeCharactersCallback),a=a.replace(n.helper.regexes.asteriskAndDash,n.helper.escapeCharactersCallback);var d='<img src="'+a+'" alt="'+r+'"';return l&&(l=l.replace(/"/g,"&quot;").replace(n.helper.regexes.asteriskAndDash,n.helper.escapeCharactersCallback),d+=' title="'+l+'"'),i&&o&&(i="*"===i?"auto":i,o="*"===o?"auto":o,d+=' width="'+i+'"',d+=' height="'+o+'"'),d+=" />"}e=t.converter._dispatch("images.before",e,r,t);return e=e.replace(/!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g,s),e=e.replace(/!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g,s),e=t.converter._dispatch("images.after",e,r,t)}),n.subParser("italicsAndBold",function(e,r,t){"use strict";return e=t.converter._dispatch("italicsAndBold.before",e,r,t),r.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*)___\b/g,"<strong><em>$1</em></strong>"),e=e.replace(/\b__(\S[\s\S]*)__\b/g,"<strong>$1</strong>"),e=e.replace(/\b_(\S[\s\S]*?)_\b/g,"<em>$1</em>")):(e=e.replace(/___(\S[\s\S]*?)___/g,function(e,r){return/\S$/.test(r)?"<strong><em>"+r+"</em></strong>":e}),e=e.replace(/__(\S[\s\S]*?)__/g,function(e,r){return/\S$/.test(r)?"<strong>"+r+"</strong>":e}),e=e.replace(/_([^\s_][\s\S]*?)_/g,function(e,r){return/\S$/.test(r)?"<em>"+r+"</em>":e})),e=e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(e,r){return/\S$/.test(r)?"<strong><em>"+r+"</em></strong>":e}),e=e.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(e,r){return/\S$/.test(r)?"<strong>"+r+"</strong>":e}),e=e.replace(/\*([^\s*][\s\S]*?)\*/g,function(e,r){return/\S$/.test(r)?"<em>"+r+"</em>":e}),e=t.converter._dispatch("italicsAndBold.after",e,r,t)}),n.subParser("lists",function(e,r,t){"use strict";function s(e,s){t.gListLevel++,e=e.replace(/\n{2,}$/,"\n"),e+="¨0";var a=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,i=/\n[ \t]*\n(?!¨0)/.test(e);return r.disableForced4SpacesIndentedSublists&&(a=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),e=e.replace(a,function(e,s,a,o,c,l,u){u=u&&""!==u.trim();var p=n.subParser("outdent")(c,r,t),h="";return l&&r.tasklists&&(h=' class="task-list-item" style="list-style-type: none;"',p=p.replace(/^[ \t]*\[(x|X| )?]/m,function(){var e='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return u&&(e+=" checked"),e+=">"})),p=p.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(e){return"¨A"+e}),s||p.search(/\n{2,}/)>-1?(p=n.subParser("githubCodeBlocks")(p,r,t),p=n.subParser("blockGamut")(p,r,t)):(p=n.subParser("lists")(p,r,t),p=p.replace(/\n$/,""),p=n.subParser("hashHTMLBlocks")(p,r,t),p=p.replace(/\n\n+/g,"\n\n"),p=p.replace(/\n\n/g,"¨B"),p=i?n.subParser("paragraphs")(p,r,t):n.subParser("spanGamut")(p,r,t),p=p.replace(/¨B/g,"\n\n")),p=p.replace("¨A",""),p="<li"+h+">"+p+"</li>\n"}),e=e.replace(/¨0/g,""),t.gListLevel--,s&&(e=e.replace(/\s+$/,"")),e}function a(e,t,n){var a=r.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,i=r.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,o="ul"===t?a:i,c="";return-1!==e.search(o)?function e(r){var l=r.search(o);-1!==l?(c+="\n<"+t+">\n"+s(r.slice(0,l),!!n)+"</"+t+">\n",t="ul"===t?"ol":"ul",o="ul"===t?a:i,e(r.slice(l))):c+="\n<"+t+">\n"+s(r,!!n)+"</"+t+">\n"}(e):c="\n<"+t+">\n"+s(e,!!n)+"</"+t+">\n",c}return e=t.converter._dispatch("lists.before",e,r,t),e+="¨0",e=t.gListLevel?e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(e,r,t){return a(r,t.search(/[*+-]/g)>-1?"ul":"ol",!0)}):e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(e,r,t,n){return a(t,n.search(/[*+-]/g)>-1?"ul":"ol",!1)}),e=e.replace(/¨0/,""),e=t.converter._dispatch("lists.after",e,r,t)}),n.subParser("outdent",function(e,r,t){"use strict";return e=t.converter._dispatch("outdent.before",e,r,t),e=e.replace(/^(\t|[ ]{1,4})/gm,"¨0"),e=e.replace(/¨0/g,""),e=t.converter._dispatch("outdent.after",e,r,t)}),n.subParser("paragraphs",function(e,r,t){"use strict";e=t.converter._dispatch("paragraphs.before",e,r,t),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var s=e.split(/\n{2,}/g),a=[],i=s.length,o=0;o<i;o++){var c=s[o];c.search(/¨(K|G)(\d+)\1/g)>=0?a.push(c):c.search(/\S/)>=0&&(c=n.subParser("spanGamut")(c,r,t),c=c.replace(/^([ \t]*)/g,"<p>"),c+="</p>",a.push(c))}for(i=a.length,o=0;o<i;o++){for(var l="",u=a[o],p=!1;/¨(K|G)(\d+)\1/.test(u);){var h=RegExp.$1,d=RegExp.$2;l="K"===h?t.gHtmlBlocks[d]:p?n.subParser("encodeCode")(t.ghCodeBlocks[d].text,r,t):t.ghCodeBlocks[d].codeblock,l=l.replace(/\$/g,"$$$$"),u=u.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,l),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u)&&(p=!0)}a[o]=u}return e=a.join("\n"),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),t.converter._dispatch("paragraphs.after",e,r,t)}),n.subParser("runExtension",function(e,r,t,n){"use strict";if(e.filter)r=e.filter(r,n.converter,t);else if(e.regex){var s=e.regex;s instanceof RegExp||(s=new RegExp(s,"g")),r=r.replace(s,e.replace)}return r}),n.subParser("spanGamut",function(e,r,t){"use strict";return e=t.converter._dispatch("spanGamut.before",e,r,t),e=n.subParser("codeSpans")(e,r,t),e=n.subParser("escapeSpecialCharsWithinTagAttributes")(e,r,t),e=n.subParser("encodeBackslashEscapes")(e,r,t),e=n.subParser("images")(e,r,t),e=n.subParser("anchors")(e,r,t),e=n.subParser("autoLinks")(e,r,t),e=n.subParser("italicsAndBold")(e,r,t),e=n.subParser("strikethrough")(e,r,t),e=n.subParser("hashHTMLSpans")(e,r,t),e=n.subParser("encodeAmpsAndAngles")(e,r,t),e=r.simpleLineBreaks?e.replace(/\n/g,"<br />\n"):e.replace(/  +\n/g,"<br />\n"),e=t.converter._dispatch("spanGamut.after",e,r,t)}),n.subParser("strikethrough",function(e,r,t){"use strict";return r.strikethrough&&(e=t.converter._dispatch("strikethrough.before",e,r,t),e=e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,"<del>$1</del>"),
e=t.converter._dispatch("strikethrough.after",e,r,t)),e}),n.subParser("stripLinkDefinitions",function(e,r,t){"use strict";return e+="¨0",e=e.replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,function(e,s,a,i,o,c,l){return s=s.toLowerCase(),t.gUrls[s]=n.subParser("encodeAmpsAndAngles")(a,r,t),c?c+l:(l&&(t.gTitles[s]=l.replace(/"|'/g,"&quot;")),r.parseImgDimensions&&i&&o&&(t.gDimensions[s]={width:i,height:o}),"")}),e=e.replace(/¨0/,"")}),n.subParser("tables",function(e,r,t){"use strict";function s(e){return/^:[ \t]*--*$/.test(e)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(e)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(e)?' style="text-align:center;"':""}function a(e,s){var a="";return e=e.trim(),r.tableHeaderId&&(a=' id="'+e.replace(/ /g,"_").toLowerCase()+'"'),e=n.subParser("spanGamut")(e,r,t),"<th"+a+s+">"+e+"</th>\n"}function i(e,s){return"<td"+s+">"+n.subParser("spanGamut")(e,r,t)+"</td>\n"}function o(e,r){for(var t="<table>\n<thead>\n<tr>\n",n=e.length,s=0;s<n;++s)t+=e[s];for(t+="</tr>\n</thead>\n<tbody>\n",s=0;s<r.length;++s){t+="<tr>\n";for(var a=0;a<n;++a)t+=r[s][a];t+="</tr>\n"}return t+="</tbody>\n</table>\n"}if(!r.tables)return e;return e=t.converter._dispatch("tables.before",e,r,t),e=e.replace(/^ {0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|¨0)/gm,function(e){var r,t=e.split("\n");for(r=0;r<t.length;++r)/^ {0,3}\|/.test(t[r])&&(t[r]=t[r].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(t[r])&&(t[r]=t[r].replace(/\|[ \t]*$/,""));var c=t[0].split("|").map(function(e){return e.trim()}),l=t[1].split("|").map(function(e){return e.trim()}),u=[],p=[],h=[],d=[];for(t.shift(),t.shift(),r=0;r<t.length;++r)""!==t[r].trim()&&u.push(t[r].split("|").map(function(e){return e.trim()}));if(c.length<l.length)return e;for(r=0;r<l.length;++r)h.push(s(l[r]));for(r=0;r<c.length;++r)n.helper.isUndefined(h[r])&&(h[r]=""),p.push(a(c[r],h[r]));for(r=0;r<u.length;++r){for(var f=[],g=0;g<p.length;++g)n.helper.isUndefined(u[r][g]),f.push(i(u[r][g],h[g]));d.push(f)}return o(p,d)}),e=t.converter._dispatch("tables.after",e,r,t)}),n.subParser("unescapeSpecialChars",function(e,r,t){"use strict";return e=t.converter._dispatch("unescapeSpecialChars.before",e,r,t),e=e.replace(/¨E(\d+)E/g,function(e,r){var t=parseInt(r);return String.fromCharCode(t)}),e=t.converter._dispatch("unescapeSpecialChars.after",e,r,t)});"undefined"!=typeof module&&module.exports?module.exports=n:System.registerDynamic("node_modules/showdown/dist/showdown.js",[],!1,function(e,r,t){return function(){"use strict";return n}.call(this)})}).call(this),function(e){var r,t=/[-+,> ]/;!function(e,r,t){t=t||r,System.registerDynamic("node_modules/put-selector/put.js",[],!1,function(e,r,n){return function(){return t()}.call(this)})}(0,r=function(e,n){"use strict";function s(r,t){r.appendChild(e.createTextNode(t))}function a(r){function n(){f&&d&&f!=d&&(d==r&&(u||(u=t.test(v)&&e.createDocumentFragment()))?u:d).insertBefore(f,h||null)}for(var u,p,h,d,f,g=arguments,b=g[0],m=0;m<g.length;m++){var v=g[m];if("object"==typeof v){if(p=!1,v instanceof Array){f=e.createDocumentFragment();for(var k=0;k<v.length;k++)f.appendChild(a(v[k]));v=f}if(v.nodeType)f=v,n(),d=v,h=0;else for(var k in v)f[k]=v[k]}else if(p)p=!1,s(f,v);else{m<1&&(r=null),p=!0;var P=v.replace(o,function(t,o,u,p,b,k){o&&(n(),"-"==o||"+"==o?(d=(h=f||d).parentNode,f=null,"+"==o&&(h=h.nextSibling)):("<"==o?d=f=(f||d).parentNode:(","==o?d=r:f&&(d=f),f=null),h=0),f&&(d=f));var P=!u&&p;if(P||!f&&(u||b))if("$"==P)s(d,g[++m]);else{P=P||a.defaultTag;var x=l&&g[m+1]&&g[m+1].name;x&&(P="<"+P+' name="'+x+'">'),f=c&&~(i=P.indexOf("|"))?e.createElementNS(c[P.slice(0,i)],P.slice(i+1)):e.createElement(P)}if(u)if("$"==p&&(p=g[++m]),"#"==u)f.id=p;else{var w=f.className,y=w&&(" "+w+" ").replace(" "+p+" "," ");if("."==u)f.className=w?(y+p).substring(1):p;else if("!"==v){var C;l?a("div",f,"<").innerHTML="":(C=f.parentNode)&&C.removeChild(f)}else(y=y.substring(1,y.length-1))!=w&&(f.className=y)}if(b)if("$"==k&&(k=g[++m]),"style"==b)f.style.cssText=k;else{var S="!"==b.charAt(0)?(b=b.substring(1))&&"removeAttribute":"setAttribute";k=""===k?b:k,c&&~(i=b.indexOf("|"))?f[S+"NS"](c[b.slice(0,i)],b.slice(i+1),k):f[S](b,k)}return""});if(P)throw new SyntaxError("Unexpected char "+P+" in "+v);n(),d=b=f||d}}return r&&u&&r.appendChild(u),b}t=n||t;var i,o=/(?:\s*([-+ ,<>]))?\s*(\.|!\.?|#)?([-\w\u00A0-\uFFFF%$|]+)?(?:\[([^\]=]+)=?['"]?([^\]'"]*)['"]?\])?/g,c=!1,e=e||document,l="object"==typeof e.createElement;return a.addNamespace=function(r,t){e.createElementNS?(c||(c={}))[r]=t:e.namespaces.add(r,t)},a.defaultTag="div",a.forDocument=r,a})}();