(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports={ErrorNoticeWrapper:"ErrorNotice_ErrorNoticeWrapper__qIGlW",NotFound404:"ErrorNotice_NotFound404__3486C",NotFoundHeading:"ErrorNotice_NotFoundHeading__1U5RN",NotFoundDetails:"ErrorNotice_NotFoundDetails__2-_8h",ErrorTextWrapper:"ErrorNotice_ErrorTextWrapper__zvSIU"}},,function(e){e.exports={_colorDesc:{lilac:"#C0B3BC",red:"#EF9A9A",blue:"#18B2D8",yellow:"#FCC418",grey:"#D9DEDF"},colors:{default:"#C0B3BC",error:"#EF9A9A",Rain:"#18B2D8",Clear:"#FCC418",Thunderstorm:"#D9DEDF",Snow:"#D9DEDF",Drizzle:"#18B2D8",Clouds:"#FCC418"},icons:{Rain:"Rain.svg",Drizzle:"Drizzle.svg",Clouds:"Clouds.svg",Clear:"Clear.svg",Snow:"Snow.svg",Thunderstorm:"Thunderstorm.svg"}}},function(e,t,a){e.exports={Logo:"Logo_Logo__3ui7w",Light:"Logo_Light__Lkan5",Dark:"Logo_Dark__1Rn5W"}},function(e,t,a){e.exports={WeatherDetailsWrapper:"WeatherDetails_WeatherDetailsWrapper__3ICYD",fadein:"WeatherDetails_fadein__jNFml",WeatherIconWrapper:"WeatherDetails_WeatherIconWrapper__yjWgI",WeatherDataWrapper:"WeatherDetails_WeatherDataWrapper__1AxiE"}},,,function(e,t,a){e.exports={AppWrapper:"App_AppWrapper__9Wd8A",AppMain:"App_AppMain__voJNq"}},function(e,t,a){e.exports={Footer:"Footer_Footer__238hM",Separator:"Footer_Separator__1Oeys"}},function(e,t,a){e.exports={ButtonWrapper:"Button_ButtonWrapper__1YXc2",FormButtonWrapper:"Button_FormButtonWrapper__25wk_"}},function(e,t,a){e.exports={TemperatureWrapper:"Temperature_TemperatureWrapper__LS-sZ",TemperatureSymbol:"Temperature_TemperatureSymbol__16-qn"}},,,,,function(e,t,a){e.exports=a.p+"static/media/Preview.29a0aca0.svg"},,,,,,function(e,t,a){e.exports={Card:"Card_Card__2wh8G"}},function(e,t,a){e.exports={Header:"Header_Header__2C_Ub"}},function(e,t,a){e.exports={SearchBarWrapper:"SearchBar_SearchBarWrapper__3WILl"}},function(e,t,a){e.exports={InputFieldWrapper:"InputField_InputFieldWrapper__22Nc9"}},function(e,t,a){e.exports={Icon:"Icon_Icon__3hg3F"}},function(e,t,a){e.exports={DescriptionWrapper:"Description_DescriptionWrapper__3caL_"}},,function(e,t,a){e.exports={DateWrapper:"Date_DateWrapper__Eg4G0"}},function(e,t,a){e.exports={Preview:"Preview_Preview__2YDmj"}},,,function(e,t,a){e.exports=a(85)},,,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){var r={"./Clear.svg":73,"./Cloud-wind.svg":74,"./Clouds.svg":75,"./Drizzle.svg":76,"./Moon.svg":77,"./Night-rainy.svg":78,"./Night.svg":79,"./Preview.svg":21,"./Rain.svg":80,"./Snow.svg":81,"./Thunderstorm.svg":82,"./Tonado.svg":83};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=72},function(e,t,a){e.exports=a.p+"static/media/Clear.f963a166.svg"},function(e,t,a){e.exports=a.p+"static/media/Cloud-wind.a82005aa.svg"},function(e,t,a){e.exports=a.p+"static/media/Clouds.a98369fb.svg"},function(e,t,a){e.exports=a.p+"static/media/Drizzle.1ca35fb1.svg"},function(e,t,a){e.exports=a.p+"static/media/Moon.e3158b56.svg"},function(e,t,a){e.exports=a.p+"static/media/Night-rainy.06f78ffe.svg"},function(e,t,a){e.exports=a.p+"static/media/Night.7d9c9233.svg"},function(e,t,a){e.exports=a.p+"static/media/Rain.b5e8855f.svg"},function(e,t,a){e.exports=a.p+"static/media/Snow.104ea80a.svg"},function(e,t,a){e.exports=a.p+"static/media/Thunderstorm.c623741c.svg"},function(e,t,a){e.exports=a.p+"static/media/Tonado.cd8d7fce.svg"},,function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(22),i=a.n(o),c=(a(44),a(23)),s=a(24),l=a(36),p=a(25),u=a(37),d=a(26),m=a(13),h=a.n(m),_=a(8),g=a(27),f=a.n(g),v=function(e){return n.a.createElement("div",{className:f.a.Card},e.children)},E=a(28),W=a.n(E),D=a(9),N=a.n(D),C=function(e){var t=[N.a.Logo,"dark"===e.colorScheme?N.a.Dark:N.a.Light];return n.a.createElement("h1",{className:t.join(" "),onClick:e.clicked},"My Weather")},w=function(e){return n.a.createElement("header",{className:W.a.Header,style:{backgroundColor:e.color}},n.a.createElement(C,{colorScheme:"light",clicked:e.onClickHandler}))},y=a(14),x=a.n(y),F=function(e){return n.a.createElement("footer",{className:x.a.Footer},n.a.createElement(C,{colorScheme:"dark",clicked:e.onClickHandler}),n.a.createElement("div",{className:x.a.Separator}))},k=a(29),b=a.n(k),B=a(30),S=a.n(B),H=function(e){return n.a.createElement("div",{className:S.a.InputFieldWrapper},n.a.createElement("label",{htmlFor:e.name},e.label),n.a.createElement("input",{type:e.type,id:e.name,name:e.name,placeholder:e.placeholder,value:e.value,onChange:e.handleChange,style:e.error?{borderBottomColor:_.colors.error}:null,required:!0}))},I=a(15),A=a.n(I),T=function(e){var t=[A.a.ButtonWrapper,"onForm"===e.position?A.a.FormButtonWrapper:null];return n.a.createElement("div",{className:t.join(" ")},n.a.createElement("button",{type:e.type,name:e.name,onClick:e.clicked},e.children))},L=function(e){return n.a.createElement("div",{className:b.a.SearchBarWrapper},n.a.createElement(H,{type:"text",name:"city",label:"Location",placeholder:"Enter a city",value:e.value,handleChange:e.onChangeHandler,error:e.error}),n.a.createElement(T,{name:"searchSubmit",type:"submit",position:"onForm",clicked:e.onClickHandler},"Set"))},j=a(10),z=a.n(j),O=a(31),M=a.n(O),R=function(e){return n.a.createElement("img",{src:a(72)("./".concat(e.type,".svg")),alt:e.type,className:M.a.Icon})},P=a(16),q=a.n(P),U=function(e){return n.a.createElement("div",{className:q.a.TemperatureWrapper},Math.round(e.degrees),n.a.createElement("span",{className:q.a.TemperatureSymbol},"\xb0"))},G=a(32),J=a.n(G),Y=function(e){return n.a.createElement("div",{className:J.a.DescriptionWrapper},e.type)},X=a(33),Z=a.n(X),$=a(34),K=a.n($),Q=function(e){var t=new Date;return n.a.createElement("div",{className:K.a.DateWrapper},Z()(t,"dddd, mmmm dd"))},V=function(e){return n.a.createElement("div",{className:z.a.WeatherDetailsWrapper},n.a.createElement("div",{className:z.a.WeatherIconWrapper},n.a.createElement(R,{type:e.data.description})),n.a.createElement("div",{className:z.a.WeatherDataWrapper},n.a.createElement(U,{degrees:e.data.temperature}),n.a.createElement(Y,{type:e.data.description}),n.a.createElement(Q,null)))},ee=a(35),te=a.n(ee),ae=function(e){return n.a.createElement("img",{src:a(21),alt:"Weather App Icon",className:te.a.Preview})},re=a(6),ne=a.n(re),oe=function(e){return n.a.createElement("div",{className:ne.a.ErrorNoticeWrapper},n.a.createElement("h1",{className:ne.a.NotFound404},"404"),n.a.createElement("div",{className:ne.a.ErrorTextWrapper},n.a.createElement("h2",{className:ne.a.NotFoundHeading},"Oops!"),n.a.createElement("p",{className:ne.a.NotFoundDetails},"We can't find the city you are looking for."),n.a.createElement(T,{name:"tryAgain",type:"button",position:"onErrorNotice",clicked:e.onClickHandler},"Try again")))},ie=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={searchBarInput:"",weatherDetails:{temperature:null,description:""},loading:!1,error:!1},a.searchBarHandler=function(e){a.setState({searchBarInput:e.target.value})},a.tryAgainHandler=function(){a.setState({searchBarInput:"",weatherDetails:{},error:!1})},a.setWeather=function(){var e=a.state.searchBarInput,t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("9f836203ba6b163eede15b2382b542a4","&units=metric");a.setState({weatherDetails:{},loading:!0,error:!1},function(){fetch(t).then(function(e){return e.json()}).then(function(e){if(200!==e.cod)throw e.cod;a.setState({weatherDetails:{temperature:e.main.temp,description:e.weather[0].main},loading:!1})}).catch(function(e){console.log(e),a.setState({loading:!1,error:!0})})})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=n.a.createElement(ae,null);return this.state.loading?e=n.a.createElement(d.MoonLoader,null):this.state.error?e=n.a.createElement(oe,{onClickHandler:this.tryAgainHandler}):this.state.weatherDetails.temperature&&""!==this.state.weatherDetails.description&&(e=n.a.createElement(V,{data:this.state.weatherDetails})),n.a.createElement("div",{className:h.a.AppWrapper},n.a.createElement(w,{color:_.colors[this.state.error?"error":this.state.weatherDetails.description],onClickHandler:this.tryAgainHandler}),n.a.createElement("main",{className:h.a.AppMain},n.a.createElement(L,{value:this.state.searchBarInput,onChangeHandler:this.searchBarHandler,onClickHandler:this.setWeather,error:this.state.error}),n.a.createElement(v,null,e)),n.a.createElement(F,{onClickHandler:this.tryAgainHandler}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(84);i.a.render(n.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[38,1,2]]]);
//# sourceMappingURL=main.452b8424.chunk.js.map