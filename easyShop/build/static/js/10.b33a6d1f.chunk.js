(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{234:function(e,t,n){},246:function(e,t,n){"use strict";n.r(t);var o,r=n(8),a=n(78),c=n(80),i=n(79),s=n(81),u=n(0),m=n.n(u),l=n(24),p=(n(234),Object(l.b)("topic")(o=Object(l.c)(o=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(a.a)(t,[{key:"goback",value:function(){this.props.history.go(-1)}},{key:"componentDidMount",value:function(){var e=this.props.location.search.slice(1).split("=")[1],t={valueId:this.props.match.params.id,typeId:Number(e)};"1"===e?this.props.topic.getCommentList(t):"0"===e&&this.props.topic.getCommentList(t)}},{key:"render",value:function(){var e=this,t=this.props.location.search.slice(1).split("=")[1];return m.a.createElement("div",{className:"comment_wrap"},m.a.createElement("div",{className:"noTabPageContent"},m.a.createElement("header",{className:"header"},m.a.createElement("div",{className:"header_left",onClick:function(){e.goback()}},m.a.createElement("span",null,m.a.createElement("i",{className:"iconfont icon-xiangzuo"}))),m.a.createElement("span",null,"\u67e5\u770b\u66f4\u591a\u8bc4\u8bba"),m.a.createElement("div",{className:"header_left"})),m.a.createElement("section",{className:"main"},"1"===t?this.props.topic.mytopicComment.data&&this.props.topic.mytopicComment.data.map(function(e){return m.a.createElement("div",{className:"main_wrap_comment_cont",key:e.id},m.a.createElement("div",{className:"userInfo"},m.a.createElement("div",null,e.user_info.name?e.user_info.name:"\u533f\u540d\u7528\u6237"),m.a.createElement("div",null,e.add_time)),m.a.createElement("div",{className:"user_cont"},e.content),m.a.createElement("div",{className:"user_parting"}))}):m.a.createElement("div",{className:"commentList"},this.props.topic.mytopicComment.data&&this.props.topic.mytopicComment.data.map(function(e){return m.a.createElement("div",{className:"commentItem",key:e.id+"id"},m.a.createElement("div",{className:"userInfo"},m.a.createElement("div",null,e.user_info.name?e.user_info.name:"\u533f\u540d\u7528\u6237"),m.a.createElement("div",null,e.add_time)),m.a.createElement("div",{className:"userComment"},e.content),m.a.createElement("div",{className:"commentPicList"},0!==e.pic_list.length?e.pic_list.map(function(e){return m.a.createElement("img",{src:e.pic_url,key:e.comment_id,alt:""})}):null))})))))}}]),t}(u.Component))||o)||o);t.default=p},78:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}n.d(t,"a",function(){return r})},79:function(e,t,n){"use strict";function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return o})},80:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}var a=n(82);function c(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(a.a)(e):t}n.d(t,"a",function(){return c})},81:function(e,t,n){"use strict";function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.d(t,"a",function(){return r})},82:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return o})}}]);
//# sourceMappingURL=10.b33a6d1f.chunk.js.map