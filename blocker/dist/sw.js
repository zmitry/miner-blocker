!function(t){var n={};function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=3)}([function(t,n,e){var i,r,o;r=[n],void 0===(o="function"==typeof(i=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.badFingerprints=["/google/","optimize","/widget.","load.php","95d2-d38","googleta","storage.","callback","leclick.","default_","lacement","/assets/","s/skins/","/themes/","-loader-","/header-","/public/","default/","d/jsonp/","gallery-","k/widget","-curve-m","eloader/","tooltip/","/footer/","/footer-","oogletag","google.c","uv_I-qM8","oogle.co","ogletags","bleclick","gletagse","letagser","eclick.n","click.ne","googlesy","ooglesyn","arousel/","m-0.0.12","gallery/","es-heade","-header-","message.","Callback","channel=","onp/pid=","ayer.swf","include.","amazonaw","allback&","s/client","article_","79942%22","allback_","_wrapper","wrapper.","m/tools/","takeover","_bottom_","mponent/","ference/","s/index.","ebottom.","&domain=","atic/js/","ad_type=","u4eSmzTp","ign=null","aterial.","/upload/","amazon.c","b50c29dd","dformat=","rvices.c","eywords=","2n%22:0,","C&v=404&","mazon.co","vices.co","s/views/","hardware","es-heade"],t.badSubstrings=["com","net","http","image","www","img",".js","oogl","min.","que","synd","dicat","templ","tube","page","home","mepa","mplat","tati","user","aws","omp","icros","espon","org","nalyti","acebo","lead","con","count","vers","pres","aff","atio","tent","ative","en_","fr_","es_","ha1","ha2","live","odu","esh","adm","crip","ect","tics","edia","ini","yala","ana","rac","trol","tern","card","yah","tion","erv",".co","lug","eat","ugi","ates","loud","ner","earc","atd","fro","ruct","sour","news","ddr","htm","fram","dar","flas","lay","orig","uble","om/","ext","link",".png","com/","tri","but","vity","spri"]})?i.apply(n,r):i)||(t.exports=o)},function(t,n,e){var i,r,o;r=[n],void 0===(o="function"==typeof(i=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),e=function(t){return t.split("").map(function(t){return t.charCodeAt(0)})};t.toCharCodeArray=e;var i=function(t){return function(n,e,i){return e?(e-i*Math.pow(t,n.length-1))*t+n[n.length-1]:n.reduce(function(e,i,r){return e+i*Math.pow(t,n.length-r-1)},0)}};t.simpleHashFn=i;var r=function(t,n){return t[n/8|0]|=1<<n%8};t.setBit=r;var o=function(t,n){return!!(t[n/8|0]&1<<n%8)};t.isBitSet=o;var s=function(){function t(n,e,s){if(void 0===n&&(n=10),void 0===e&&(e=5e4),function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),n.constructor===Uint8Array)this.buffer=n,e.constructor===Array&&(s=e),this.bufferBitSize=8*this.buffer.length;else if(n.constructor===Array){var a=n;e.constructor===Array&&(s=e),this.bufferBitSize=8*a.length,this.buffer=new Uint8Array(a)}else this.bufferBitSize=n*e,this.buffer=new Uint8Array(Math.ceil(this.bufferBitSize/8));this.hashFns=s||[i(11),i(17),i(23)],this.setBit=r.bind(this,this.buffer),this.isBitSet=o.bind(this,this.buffer)}return n(t,[{key:"toJSON",value:function(){return Array.from(this.buffer.values())}},{key:"print",value:function(){console.log(this.buffer)}},{key:"getLocationsForCharCodes",value:function(t){var n=this;return this.hashFns.map(function(e){return e(t)%n.bufferBitSize})}},{key:"getHashesForCharCodes",value:function(t,n,e){var i=this;return this.hashFns.map(function(r,o){return r(t,n?n[o]:void 0,e,i.bufferBitSize)})}},{key:"add",value:function(t){t.constructor!==Array&&(t=e(t)),this.getLocationsForCharCodes(t).forEach(this.setBit)}},{key:"exists",value:function(t){return t.constructor!==Array&&(t=e(t)),this.getLocationsForCharCodes(t).every(this.isBitSet)}},{key:"substringExists",value:function(t,n){var i=this;t.constructor!==Uint8Array&&(t.constructor!==Array&&(t=e(t)),t=new Uint8Array(t));for(var r=void 0,o=void 0,s=0;s<t.length-n+1;s++){if((r=this.getHashesForCharCodes(t.subarray(s,s+n),r,o)).map(function(t){return t%i.bufferBitSize}).every(this.isBitSet))return!0;o=t[s]}return!1}}],[{key:"from",value:function(n,e){return new t(n,e)}}]),t}();t.BloomFilter=s})?i.apply(n,r):i)||(t.exports=o)},function(t,n,e){var i,r,o;r=[n,e(1),e(0)],void 0===(o="function"==typeof(i=function(t,n,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseDomains=p,t.parseOptions=l,t.parseHTMLFilter=u,t.parseFilter=m,t.parse=function(t,e){e.bloomFilter=e.bloomFilter||new n.BloomFilter,e.exceptionBloomFilter=e.exceptionBloomFilter||new n.BloomFilter,e.filters=e.filters||[],e.noFingerprintFilters=e.noFingerprintFilters||[],e.exceptionFilters=e.exceptionFilters||[],e.htmlRuleFilters=e.htmlRuleFilters||[];for(var i=0,r=t.length,o="\n";i<=t.length;){-1===(r=t.indexOf(o,i))&&(o="\r",r=t.indexOf(o,i)),-1===r&&(r=t.length);var s=t.substring(i,r),a={};if(m(s,a,e.bloomFilter,e.exceptionBloomFilter)){var c=k(a.data);a.htmlRuleSelector?e.htmlRuleFilters.push(a):a.isException?e.exceptionFilters.push(a):c.length>0?e.filters.push(a):e.noFingerprintFilters.push(a)}i=r+1}},t.matchesFilter=g,t.matches=function(t,n){var e=void 0===arguments[2]?{}:arguments[2],i=void 0===arguments[3]?{}:arguments[3];i.bloomNegativeCount=i.bloomNegativeCount||0,i.bloomPositiveCount=i.bloomPositiveCount||0,i.notMatchCount=i.notMatchCount||0,i.badFingerprints=i.badFingerprints||[],i.bloomFalsePositiveCount=i.bloomFalsePositiveCount||0;var a=void 0,c=n.replace(/^https?:\/\//,"");if(c.length>o&&(c=c.substring(0,o)),t.bloomFilter&&!(t.bloomFilter.substringExists(c,s)||(i.bloomNegativeCount++,i.notMatchCount++,a=v(t.noFingerprintFilters,0,n,e,i))))return!1;if(i.bloomPositiveCount++,delete i.currentHost,i.misses=i.misses||new Set,i.missList=i.missList||[],i.missList.length>r&&(i.misses.delete(i.missList[0]),i.missList=i.missList.splice(1)),i.misses.has(n))return i.notMatchCount++,!1;if(v(t.filters,0,n,e,i)||!0===a||void 0===a&&v(t.noFingerprintFilters,0,n,e,i)){var d=t.exceptionBloomFilter&&!t.exceptionBloomFilter.substringExists(c,s);return!(!d||v(t.exceptionFilters,0,n,e,i))||(i.notMatchCount++,!1)}return i.missList.push(n),i.misses.add(n),i.notMatchCount++,i.bloomFalsePositiveCount++,function(t,n,e){for(var i=void 0===arguments[3]?s:arguments[3],r=0;r<e.length-i+1;r++){var o=e.substring(r,r+i);n.exists(o)&&t.push({badFingerprint:o,src:e})}}(i.badFingerprints,t.bloomFilter,c),!1},t.getFingerprint=k;var i={SCRIPT:1,IMAGE:2,STYLESHEET:4,OBJECT:8,XMLHTTPREQUEST:16,OBJECTSUBREQUEST:32,SUBDOCUMENT:64,DOCUMENT:128,OTHER:256};t.elementTypes=i;var r=100,o=100,s=8,a=[/.*([./&_\-=a-zA-Z0-9]{8})\$?.*/,/([./&_\-=a-zA-Z0-9]{8})\$?.*/],c=new Map([["script",i.SCRIPT],["image",i.IMAGE],["stylesheet",i.STYLESHEET],["object",i.OBJECT],["xmlhttprequest",i.XMLHTTPREQUEST],["object-subrequest",i.OBJECTSUBREQUEST],["subdocument",i.SUBDOCUMENT],["document",i.DOCUMENT],["other",i.OTHER]]);t.elementTypeMaskMap=c;var d=":?/=^";function p(t,n,e){e.domains=e.domains||[],e.skipDomains=e.skipDomains||[];var i=t.split(n);e.domains=e.domains.concat(i.filter(function(t){return"~"!==t[0]})),e.skipDomains=e.skipDomains.concat(i.filter(function(t){return"~"===t[0]}).map(function(t){return t.substring(1)}))}function l(t){var n={binaryOptions:new Set};return t.split(",").forEach(function(t){if((t=t.trim()).startsWith("domain=")){var e=t.split("=")[1].trim();p(e,"|",n)}else{var i="~"===t[0]?t.substring(1):t;c.has(i)&&("~"===t[0]?n.skipElementTypeMask|=c.get(i):n.elementTypeMask|=c.get(i)),n.binaryOptions.add(t)}}),n}function h(t,n){for(var e=n;e<t.length;e++)if(-1!==d.indexOf(t[e]))return e;return-1}function u(t,n,e){var i=t.substring(0,n);e.options={},i.length>0&&p(i,",",e.options),e.isException=!!("@"===t[n+1]^e.isException),"@"===t[n+1]&&n++,e.htmlRuleSelector=t.substring(n+2)}function m(t,n,e,i){if(0===(t=t.trim()).length)return!1;var r=0;if("["===t[r]||"!"===t[r])return n.isComment=!0,!1;n.isException="@"===t[r]&&"@"===t[r+1],n.isException&&(r=2);var o=t.indexOf("#",r);if(-1!==o&&("#"===t[o+1]||"@"===t[o+1]))return u(t.substring(r),o-r,n),!0;if(-1!==(o=t.indexOf("$",r))?(n.options=l(t.substring(o+1)),t=t.substring(0,o)):n.options={},n.isRegex="/"===t[r]&&"/"===t[t.length-1]&&r!==t.length-1,n.isRegex)return n.data=t.slice(r+1,-1),!0;if("|"===t[r])if("|"===t[r+1]){n.hostAnchored=!0;var s=h(t,r+1);-1===s&&(s=t.length),r+=2,n.host=t.substring(r,s)}else n.leftAnchored=!0,r++;return"|"===t[t.length-1]&&(n.rightAnchored=!0,t=t.substring(0,t.length-1)),n.data=t.substring(r)||"*",i&&n.isException?i.add(k(n.data)):e&&e.add(k(n.data)),!0}function b(t,n,e){if(n.length>t.length)return-1;for(var i=n.split("^"),r=e,o=-1,s=!1,a=0;a<i.length;a++)if(""!==i[a]){if(-1===(r=t.indexOf(i[a],r)))return-1;if(-1===o&&(o=r),s&&-1===d.indexOf(t[r-1]))return-1;if(a+1<i.length&&t.length>r+i[a].length&&-1===d.indexOf(t[r+i[a].length]))return-1;s=!1}else s=!0;return o}function f(t){var n=function(t){var n=t.indexOf(":");for(++n;"/"===t[n];)n++;return n}(t),e=h(t,n);return-1===e&&(e=t.length),t.substring(n,e)}function y(t,n){if(!n.endsWith(t))return!0;var e=n[n.length-t.length-1];return"."!==e&&void 0!==e}function g(t,n){var e=void 0===arguments[2]?{}:arguments[2],i=void 0===arguments[3]?{}:arguments[3];if(!function(t,n){var e=void 0===arguments[2]?{}:arguments[2];if(void 0!==e.elementTypeMask&&t.options){if(void 0!==t.options.elementTypeMask&&!(t.options.elementTypeMask&e.elementTypeMask))return!1;if(void 0!==t.options.skipElementTypeMask&&t.options.skipElementTypeMask&e.elementTypeMask)return!1}if(void 0!==e.domain&&t.options&&(t.options.domains||t.options.skipDomains)){var i=function(){var n=t.options.domains.filter(function(t){return!y(t,e.domain)}),i=t.options.skipDomains.filter(function(t){return!y(t,e.domain)}),r=n.filter(function(t){return i.every(function(n){return y(t,n)})}),o=i.filter(function(t){return n.every(function(n){return y(t,n)})});if(0===n.length&&0!==t.options.domains.length||n.length>0&&0===r.length||i.length>0&&o.length>0)return{v:!1}}();if("object"==typeof i)return i.v}if(void 0!==e["third-party"]&&function(t,n){return t.options&&t.options.binaryOptions&&t.options.binaryOptions.has(n)}(t,"third-party")){var r=f(n),o=y(t.host,r);if(o||!e["third-party"])return!1}return!0}(t,n,e))return!1;if(t.isRegex)return t.regex||(t.regex=new RegExp(t.data)),t.regex.test(n);if(t.leftAnchored&&t.rightAnchored)return t.data===n;if(t.rightAnchored)return n.slice(-t.data.length)===t.data;if(t.leftAnchored)return n.substring(0,t.data.length)===t.data;if(t.hostAnchored)return i.currentHost||(i.currentHost=f(n)),!y(t.host,i.currentHost)&&-1!==b(n,t.data);var r=t.data.split("*"),o=0,s=!0,a=!1,c=void 0;try{for(var d,p=r[Symbol.iterator]();!(s=(d=p.next()).done);s=!0){var l=d.value,h=b(n,l,o);if(-1===h)return!1;o=h+l.length}}catch(t){a=!0,c=t}finally{try{!s&&p.return&&p.return()}finally{if(a)throw c}}return!0}function v(t,n,e,i,r){return t.some(function(t){return g(t,e,i,r)})}function k(t){for(var n=!0;n;){var i=t;r=o=s=void 0,n=!1;for(var r=function(){var t=a[o],n=t.exec(i);if(t.lastIndex=0,n&&!e.badFingerprints.includes(n[1])&&!e.badSubstrings.find(function(t){return n[1].includes(t)}))return{v:n[1]}},o=0;o<a.length;o++){var s=r();if("object"==typeof s)return s.v}if(!(i.length>8))return"";t=i.slice(1,-1),n=!0}}})?i.apply(n,r):i)||(t.exports=o)},function(t,n,e){var i=e(2),r={};i.parse("[Adblock Plus 2.0]\n!-------------------------------------------------------------------------------\n! Title: NoCoin Filter List\n! Expires: 2 days (update frequency)\n! Version: 15\n! Last modified: 25 Jan 2018\n! Homepage: https://github.com/hoshsadiq/adblock-nocoin-list/\n! Contribute: https://github.com/hoshsadiq/adblock-nocoin-list/issues\n! License: https://mit-license.org/\n! Description: This filter disables browser based miners such as coin-hive\n!-------------------------------------------------------------------------------\n||cnhv.co^\n||coin-hive.com^\n||coinhive.com^$third-party\n||gus.host/coins.js\n||jsecoin.com^$third-party\n||miner.pr0gramm.com^$third-party\n||miner.pr0gramm.com^$websocket\n||minemytraffic.com^$third-party\n||ppoi.org^$third-party\n||projectpoi.com^$third-party\n||2giga.link/js/hive.js\n||2giga.link^$websocket\n||crypto-loot.com^$third-party\n||coinerra.com^$third-party\n||coin-have.com^$third-party\n||minero.pw^$third-party\n||minero-proxy-01.now.sh^$third-party\n||minero-proxy-02.now.sh^$third-party\n||minero-proxy-03.now.sh^$third-party\n||api.inwemo.com^$third-party\n||rocks.io^$third-party\n||jsccnn.com^$third-party\n||jscdndel.com^$third-party\n||coinhiveproxy.com^$third-party\n||coinblind.com^$third-party\n||coinnebula.com^$third-party\n||monerominer.rocks^$third-party\n||cdn.cloudcoins.co^$third-party\n||coinlab.biz^$third-party\n||go.megabanners.cf^$third-party\n||go.megabanners.cf^$websocket\n||baiduccdn1.com^$third-party\n||wsp.marketgid.com^$third-party\n||papoto.com^$third-party\n||flare-analytics.com^$third-party\n||sparechange.io^$third-party\n||zlx.com.br^$third-party\n||miner.nablabee.com^$third-party\n||m.anyfiles.ovh^\n||freecontent.bid^$third-party\n||mutuza.win^$third-party\n||cryptonoter.com^$third-party\n||crypto-webminer.com^$third-party\n||cryweb.github.io^\n||crywebber.github.io^\n||adless.io^$third-party\n\n! General blocking filters -----------------------------------------------------\n-crypto-miner/*\n-monero-miner-$script\n/authedmine.min.js\n/authedminer.js\n/bitcoin-plus-miner/*\n/bitcoincore/?ref=\n/bootstrap.wasm$third-party\n/bootstrap.wasm$xmlhttprequest\n/browsermine.js\n/c-hive.js\n/c.wasm\n/cloudcoins.js\n/cloudcoins.min.js\n/cn.wasm$third-party\n/coin-hive-proxy-\n/coinblind.js\n/coinblind_beta.\n/coinhive-proxy-\n/coinhive.min.js\n/coinlab.js\n/crn.wasm\n/crypto-webminer.$domain=~crypto-webminer.com\n/cryptocpu.js\n/cryptonight-worker.\n/cryptonight.wasm\n/deepMiner.js\n/deepMiner.min.js\n/dprocessor.js\n/hash.wasm\n/helper.wasm$third-party\n/inject.js?key=$script\n/jsecoin.*/?\n/lhnhelpouttab-current.min.js\n/lib/crlt.js$script,third-party\n/mine/bitcoincore/*\n/miner-ui.js\n/miner.*/crypto-\n/miner.*/loader.\n/miner.full.js\n/miner.js\n/miner.min.js\n/miner?key=\n/minera.js\n/minero-proxy-\n/nano.wasm\n/noblock.js\n/obfus.min.js\n/projectpoi.min.js\n/processor.js\n/safelinkconverter.js\n/wproxy$~third-party,websocket\n/xminer.js\n/xminer.min.js\n/xmr-monero.js\n/xmr.js\n/xmr.min.js\n?proxy=wss://$script,websocket\n\n! TLD blocking -----------------------------------------------------------------\n.accountant^$third-party,websocket\n.bid^$third-party,websocket\n.cf^$third-party,websocket\n.club^$third-party,websocket\n.cricket^$third-party,websocket\n.date^$third-party,websocket\n.download^$third-party,websocket\n.faith^$third-party,websocket\n.fun^$third-party,websocket\n.ga^$third-party,websocket\n.gq^$third-party,websocket\n.info^$third-party,websocket\n.men^$third-party,websocket\n.ml^$third-party,websocket\n.party^$third-party,websocket\n.pro^$third-party,websocket\n.racing^$third-party,websocket\n.review^$third-party,websocket\n.rocks^$third-party,websocket\n.science^$third-party,websocket\n.site^$third-party,websocket\n.space^$third-party,websocket\n.stream^$third-party,websocket\n.tk^$third-party,websocket\n.trade^$third-party,websocket\n.webcam^$third-party,websocket\n.win^$third-party,websocket\n.xyz^$third-party,websocket\n.zone^$third-party,websocket\n\n! https://github.com/hoshsadiq/adblock-nocoin-list/issues/76\n||cryptoloot.pro^third-party\n||bjorksta.men^$third-party\n\n! https://github.com/hoshsadiq/adblock-nocoin-list/issues/74\n||crypto.csgocpu.com^third-party\n\n! https://github.com/hoshsadiq/adblock-nocoin-list/issues/71\n||noblock.pro^third-party\n\n! vidoza.net\n! https://github.com/hoshsadiq/adblock-nocoin-list/issues/77\n! https://github.com/easylist/easylist/commit/1f9bd0652f35ae294b960406214308ddeb2c7186\n.science^$third-party,domain=vidoza.net\n|http://script,third-party,domain=vidoza.net\n|https://script,third-party,domain=vidoza.net\n$websocket,domain=vidoza.net\n\n! powvideo.net\n! https://github.com/hoshsadiq/adblock-nocoin-list/issues/80\n$websocket,domain=powvideo.net\n||1q2w3.me^third-party\n\n! cryptobara.com\n! https://github.com/hoshsadiq/adblock-nocoin-list/issues/85\n||cryptobara.com/client/worker.js\n||cryptobara.com^$third-party\n||reservedoffers.club^$third-party\n\n! skyback.ru\n! https://github.com/hoshsadiq/adblock-nocoin-list/issues/87\n||biberukalap.com^\n||gridiogrid.com^\n\n! extratorrent.cd\n! https://github.com/hoshsadiq/adblock-nocoin-list/issues/88\n||mine.torrent.pw^\n\n! Adminer references coinhive as well. Also authedmine for some reason.\n||adminer.com^\n||ad-miner.com^$third-party\n||77.162.125.199^$third-party\n\n! https://publicwww.com/websites/%22inject.js%3Fkey%3D%22/\n||host.d-ns.ga^third-party\n||abc.pema.cl^third-party\n\n! https://github.com/keraf/NoCoin/issues/114\n||mine.nahnoji.cz^\n||webmine.cz^\n\n! https://github.com/hoshsadiq/adblock-nocoin-list/issues/94\n||analytics.blue^\n\n! https://github.com/hoshsadiq/adblock-nocoin-list/issues/92\n||bablace.com^$third-party\n\n! https://github.com/hoshsadiq/adblock-nocoin-list/pull/93#issuecomment-356587066\n||sparnove.com^\n\n! https://github.com/hoshsadiq/adblock-nocoin-list/issues/97\n||smectapop12.pl^\n||berserkpl.net.pl^$websocket\n*$third-party,websocket,xmlhttprequest,domain=alltube.tv\n\n! https://github.com/hoshsadiq/adblock-nocoin-list/issues/101\n! https://github.com/easylist/easylist/commit/e00d565d943a72b9f2410e1f8903f990df641296\n||webminepool.com^$third-party\n||webminepool.tk^$third-party\n! https://github.com/easylist/easylist/commit/62e6fdad54f3e37863ed018a8301b104bc896eed\n||hive.tubetitties.com^\n! https://github.com/easylist/easylist/commit/5b4980e3e7b7d018712539590a726c6b44368995\n||playerassets.info^$third-party\n! https://github.com/easylist/easylist/commit/db3927149087a8c6fe11a2afc9da1d22b67f820d\n||tokyodrift.ga^$third-party\n! https://github.com/easylist/easylist/commit/2840e48e3727e2523e4b2d276b42a5b3bdafee4d\n||webassembly.stream^$third-party\n! https://github.com/easylist/easylist/commit/bbc485bb72cd6706bf08291291ab3808c1d56973\n||1q2w3.fun^$third-party\n! https://github.com/easylist/easylist/commit/58da248fc7218acc655eba09e89ff41b095ab084\n||okeyletsgo.ml^$third-party\n! https://github.com/easylist/easylist/commit/dd3cc8581666ec52252a021e9c4a15eb84f5bf28\n$websocket,xmlhttprequest,domain=lewd.ninja|love-drama.pl\n||candid.zone^$third-party\n! https://github.com/easylist/easylist/commit/cddd48146de74f29bd28379738d5312c206a2260\n||webmine.pro^$third-party\n\n! https://github.com/uBlockOrigin/uAssets/issues/1318\n||hodlers.party^\n||hodling.faith^\n||chainblock.science^\n\n! Pools\n||pool.supportxmr.com^\n\n! Obfuscated and whatnot.\n||rapidvideo.com/J5xj_2.js\n||1beb2a44.space^$third-party\n||300ca0d0.space^$third-party\n||310ca263.space^$third-party\n||320ca3f6.space^$third-party\n||330ca589.space^$third-party\n||340ca71c.space^$third-party\n||360caa42.space^$third-party\n||370cabd5.space^$third-party\n||3c0cb3b4.space^$third-party\n||3d0cb547.space^$third-party\n\n! specific block\n.info^$script,third-party,domain=oload.info|oload.tv|openload.co|streamango.com|streamcherry.com\n/^((?!(^https?):\\/\\/(vidfile\\.net|(www\\.)?youtube\\.com|openload\\.co|docs\\.google\\.com|video\\.sibnet\\.ru|oload\\.stream|streamango\\.com|vidlox\\.tv|(www\\.)?rapidvideo\\.com|tune\\.pk|(www\\.)?dailymotion\\.com|estream\\.to)\\/).)*$/$subdocument,domain=a-o.ninja|centrum-dramy.pl|love-drama.pl|vidfile.net\n||openkatalog.com^$subdocument\n\n! https://github.com/hoshsadiq/adblock-nocoin-list/issues/100 // https://github.com/MajkiIT/polish-ads-filter/issues/5612\n! https://a-o.ninja/anime/tailenders/1\n@@||gamedor.usermd.net^$subdocument,domain=a-o.ninja\n\n! Does not seem to work anymore, but keeping it here just in case it gets revived\n||xbasfbno.info^$third-party\n||azvjudwr.info^$third-party\n||jroqvbvw.info^$third-party\n||jyhfuqoh.info^$third-party\n||kdowqlpt.info^$third-party\n\n! Filters optimized for uBlock -------------------------------------------------\n!#include nocoin-ublock.txt\n!-------------------------------------------------------------------------------",r),self.addEventListener("fetch",function(t){var n,e,o=t.request.url,s=t.currentTarget.location.hostname;n=o,e=s,i.matches(r,n,{domain:e,elementTypeMaskMap:i.elementTypes.SCRIPT})&&(console.log(t),t.respondWith(function(){var t=Response.error();t.status=-20,Promise.resolve(t)}))})}]);