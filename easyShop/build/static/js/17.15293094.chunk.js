(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{240:function(e,a,t){"use strict";t.r(a);var c,s=t(8),o=t(78),n=t(80),r=t(79),m=t(81),l=t(0),i=t.n(l),d=t(24),p=(t(96),t(41),t(147)),h=t.n(p),E=t(237),u=t(25),b=(t(148),t(149),t(150)),g=t.n(b),v=Object(d.b)("home")(c=Object(d.c)(c=function(e){function a(){return Object(s.a)(this,a),Object(n.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.home.getHomeData()}},{key:"componentDidUpdate",value:function(){new h.a(this.refs.swiperDom,{autoplay:{delay:1e3},pagination:{el:this.refs.swiperPage}}),new h.a(this.refs.swiperTop,{loop:!0,spaceBetween:15,slidesPerView:"auto",centeredSlides:!0})}},{key:"render",value:function(){var e=this,a=Object(E.a)({placeholder:"https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg",js_effect:"transition.shrinkIn",threshold:1e4});return i.a.createElement("div",{className:"home"},i.a.createElement("div",{className:"home_banner"},i.a.createElement("div",{className:"swiper-container",ref:"swiperDom"},i.a.createElement("div",{className:"swiper-wrapper"},this.props.home.homeData&&this.props.home.homeData.banner.map(function(e){return i.a.createElement("div",{className:"swiper-slide",key:e.id},i.a.createElement(a,{className:"lazy",src:e.image_url}))})),i.a.createElement("div",{className:"swiper-pagination",ref:"swiperPage"}))),i.a.createElement("nav",{className:"nav_list"},this.props.home.homeData&&this.props.home.homeData.channel.map(function(e){return i.a.createElement(u.b,{to:"/categorys/".concat(e.id),key:e.id},i.a.createElement("dl",null,i.a.createElement("dt",null,i.a.createElement(g.a,{src:e.icon_url,placeholder:"https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg"},function(e){return i.a.createElement("img",{src:e,alt:"an image"})})),i.a.createElement("dd",null,e.name)))})),i.a.createElement("div",{className:"brandBox"},i.a.createElement("div",{className:"brandTitle"},"\u54c1\u724c\u5236\u9020\u5546\u76f4\u4f9b"),i.a.createElement("div",{className:"brandWrap"},this.props.home.homeData&&this.props.home.homeData.brandList.map(function(e){return i.a.createElement(u.b,{className:"brandItem",to:"/brandDetail/".concat(e.id),key:e.id},i.a.createElement("div",{className:"brandItemName"},e.name),i.a.createElement("div",{className:"brandItemMinPrice"},e.floor_price,"\u5143\u8d77"),i.a.createElement(g.a,{src:e.new_pic_url,placeholder:"https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg"},function(e){return i.a.createElement("img",{src:e,alt:"an image"})}))}))),i.a.createElement("div",{className:"newGoodsBox"},i.a.createElement("div",{className:"newGoodsTitle"},"\u65b0\u54c1\u9996\u53d1"),i.a.createElement("div",{className:"newGoodsWrap"},this.props.home.homeData&&this.props.home.homeData.newGoodsList.map(function(e){return i.a.createElement(u.b,{className:"newGoodsItem",to:"/goods/".concat(e.id),key:e.id},i.a.createElement(g.a,{src:e.list_pic_url,placeholder:"https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg"},function(e){return i.a.createElement("img",{src:e,alt:"an image"})}),i.a.createElement("div",{className:"newGoodsName"},e.name),i.a.createElement("div",{className:"newGoodsPrice"},"\uffe5",e.retail_price))}))),i.a.createElement("div",{className:"hotGoodsBox"},i.a.createElement("div",{className:"hotGoodsTitle"},"\u4eba\u6c14\u63a8\u8350"),i.a.createElement("div",{className:"hotGoodsWrap"},this.props.home.homeData&&this.props.home.homeData.hotGoodsList.map(function(e){return i.a.createElement(u.b,{className:"hotGoodsItem",key:e.id,to:"/goods/".concat(e.id)},i.a.createElement(g.a,{src:e.list_pic_url,placeholder:"https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg"},function(e){return i.a.createElement("img",{src:e,alt:"an image"})}),i.a.createElement("div",{className:"hotGoodsInfos"},i.a.createElement("div",{className:"hotGoodsName"},e.name),i.a.createElement("div",{className:"hotGoodsInfo"},e.goods_brief),i.a.createElement("div",{className:"hotGoodsPrice"},"\uffe5",e.retail_price)))}))),i.a.createElement("div",{className:"topGoodsBox"},i.a.createElement("div",{className:"topGoodsTitle"},"\u4e13\u9898\u7cbe\u9009"),i.a.createElement("div",{className:"topGoodsWrap"},i.a.createElement("div",{className:"swiper-container",ref:"swiperTop"},i.a.createElement("div",{className:"swiper-wrapper"},this.props.home.homeData&&this.props.home.homeData.topicList.map(function(a){return i.a.createElement("div",{className:"swiper-slide",key:a.id,onClick:function(){e.props.history.push({pathname:"/topicDetail/?id=".concat(a.id)})}},i.a.createElement(g.a,{src:a.item_pic_url,placeholder:"https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg"},function(e){return i.a.createElement("img",{src:e,alt:"an image"})}),i.a.createElement("div",{className:"topGoodSubTitle"},"\u5173\u7231\u4ed6\u6210\u957f\u7684\u6bcf\u4e00\u4e2a\u8db3\u8ff9",i.a.createElement("span",{className:"topGoodPrice"},"\uffe50\u5143\u8d77")),i.a.createElement("div",{className:"topGoodTitle"},"\u4e13\u4e1a\u8fd0\u52a8\u54c1\u724c\u540c\u5382\uff0c\u6bdb\u6bdb\u866b\u978b\u4e70\u4e8c\u9001\u4e00"))}))))),i.a.createElement("div",{className:"cateGoryBox"},this.props.home.homeData&&this.props.home.homeData.categoryList.map(function(e){return i.a.createElement(l.Fragment,{key:e.id},i.a.createElement("div",{className:"cateGoryName"},e.name),i.a.createElement("div",{className:"cateGoryGoodsWrap"},e.goodsList.map(function(e){return i.a.createElement(u.b,{tag:"div",to:"/goods/".concat(e.id),key:e.id},i.a.createElement("div",{className:"goodsItemImg"},i.a.createElement(g.a,{src:e.list_pic_url,placeholder:"https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg"},function(e){return i.a.createElement("img",{src:e,alt:"an image"})})),i.a.createElement("div",{className:"goodsItemName"},e.name),i.a.createElement("div",{className:"goodsItemPrice"},"\uffe5",e.retail_price))}),i.a.createElement(u.b,{className:"categoryMoreGoods",to:"/categorys/".concat(e.id)},i.a.createElement("div",null,"\u66f4\u591a",e.name,"\u597d\u7269"),i.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==",alt:"more"}))))})))}}]),a}(l.Component))||c)||c;a.default=v},96:function(e,a,t){}}]);
//# sourceMappingURL=17.15293094.chunk.js.map