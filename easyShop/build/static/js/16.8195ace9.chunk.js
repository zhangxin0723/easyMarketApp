(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{242:function(t,e,a){"use strict";a.r(e);var n,r=a(8),o=a(78),i=a(80),s=a(79),c=a(81),l=a(0),d=a.n(l),u=a(24),m=a(104),h=(a(98),a(25)),p=a(83),g=Object(u.b)("home")(n=Object(u.c)(n=function(t){function e(){return Object(r.a)(this,e),Object(i.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){this.props.home.getCatelog({categoryId:this.props.match.params.id}),this.props.home.getNav({id:this.props.match.params.id}),Object(p.a)(this.refs.load)}},{key:"change",value:function(t){var e=this.props.home.navData.brotherCategory[t.index].id;this.props.home.getCatelog({categoryId:e}),this.props.home.getNav({id:e})}},{key:"render",value:function(){var t=this;if(!this.props.home.catalog)return null;if(!this.props.home.navData)return null;var e=this.props.home.navData.brotherCategory.map(function(t){return{title:t.name}}),a=this.props.home.catalog.goodsList,n=this.props.home.navData.brotherCategory.findIndex(function(e){return e.id===1*t.props.match.params.id});return d.a.createElement("div",{className:"App",ref:"load"},d.a.createElement("div",{className:"noTabPageContent"},d.a.createElement("div",{className:"header"},d.a.createElement("div",{className:"left",onClick:function(){t.props.history.goBack()}},d.a.createElement("i",{className:"iconfont icon-angle-left"})),d.a.createElement("div",{className:"title"},"\u5947\u8da3\u5206\u7c7b"),d.a.createElement("div",{className:"right"})),d.a.createElement("div",{className:"tabWrap"},d.a.createElement(m.e,null),d.a.createElement(m.c,{tabs:e,renderTabBar:function(t){return d.a.createElement(m.c.DefaultTabBar,Object.assign({},t,{page:5}))},initialPage:n,onTabClick:function(e,a){t.change({tab:e,index:a})}}),d.a.createElement(m.e,null)),d.a.createElement("div",{className:"categoryDetail"},d.a.createElement("div",null,this.props.home.navData.currentCategory.name),d.a.createElement("div",null,this.props.home.navData.currentCategory.front_desc)),d.a.createElement("div",{className:"goodsList"},d.a.createElement("div",{className:"goodsList"},a.map(function(t){return d.a.createElement(h.b,{className:"goodsItem",key:t.id,to:"/goods/".concat(t.id)},d.a.createElement("div",{className:"goodsItemImg"},d.a.createElement("img",{src:"https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg","data-src":t.list_pic_url,alt:""})),d.a.createElement("div",{className:"goodsItemName"},t.name),d.a.createElement("div",{className:"goodsItemPrice"},"\uffe5",t.retail_price,"\u5143"))})))))}}]),e}(l.Component))||n)||n;e.default=g},83:function(t,e,a){"use strict";var n=a(84),r=a.n(n);e.a=function(t){return new r.a({el:t,mode:"default",time:300,done:!0,position:{top:0,right:0,bottom:0,left:0},before:function(){},success:function(t){t.classList.add("success")},error:function(t){t.src="./images/error.png"}})}},84:function(t,e,a){t.exports=function(){"use strict";var t=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},e=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},n=function(){function a(){t(this,a),this.images={},this.canvas=document.createElement("canvas"),this.canvas.getContext("2d").globalAlpha=0}return e(a,[{key:"toBase64",value:function(t,e,a){if(this.images[t])return this.images[t];this.canvas.width=e,this.canvas.height=a;var n=this.canvas.toDataURL("image/png");return this.images[t]=n,n}},{key:"destroy",value:function(){this.images=null,this.canvas=null}}]),a}();return function(){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,r),this.options={el:document.querySelector("body"),mode:"default",time:300,done:!0,diy:{backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"},position:{top:0,right:0,bottom:0,left:0},before:function(t){},success:function(t){},error:function(t){}},e.position=a({},this.options.position,e.position),e.diy=a({},this.options.diy,e.diy),a(this.options,e),this.start()}return e(r,[{key:"start",value:function(){this._getTransparent||(this._getTransparent=new n),this._timer=!0,this._start()}},{key:"_start",value:function(){var t=this,e=this.options;clearTimeout(this._timer),this._timer&&(this._timer=setTimeout(function(){var a=Array.prototype.slice.apply(e.el.querySelectorAll("[data-src]"));if(!a.length&&e.done)return clearTimeout(t._timer);a.forEach(function(a){!a.dataset.LazyLoadImgState&&function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.getBoundingClientRect(),n=t.offsetWidth,r=t.offsetHeight,o=window.innerWidth,i=window.innerHeight,s=!(a.right-e.left<=0&&a.left+n-e.left<=0)&&!(a.left+e.right>=o&&a.right+e.right>=n+o),c=!(a.bottom-e.top<=0&&a.top+r-e.top<=0)&&!(a.top+e.bottom>=i&&a.bottom+e.bottom>=r+i);return 0!==t.width&&0!==t.height&&s&&c}(a,e.position)&&t.loadImg(a)}),t._start()},e.time))}},{key:"loadImg",value:function(t){var e=this,n=this.options;t.dataset.LazyLoadImgState="start",n.before.call(this,t);var r=new window.Image;r.src=t.dataset.src,r.addEventListener("load",function(){return"diy"===n.mode?(t.src=e._getTransparent.toBase64(t.src,t.width,t.height),n.diy.backgroundImage="url("+r.src+")",a(t.style,n.diy)):t.src=r.src,delete t.dataset.src,delete t.dataset.LazyLoadImgState,n.success.call(e,t)},!1),r.addEventListener("error",function(){delete t.dataset.src,delete t.dataset.LazyLoadImgState,n.error.call(e,t)},!1)}},{key:"destroy",value:function(){delete this._timer,this._getTransparent.destroy(),this._getTransparent=null}}]),r}()}()},98:function(t,e,a){}}]);
//# sourceMappingURL=16.8195ace9.chunk.js.map