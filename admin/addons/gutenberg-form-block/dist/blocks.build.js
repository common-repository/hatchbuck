!function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r(1)},function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=r(2),s=(r.n(a),r(3)),i=(r.n(s),function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}()),l=wp.i18n.__,u=wp.blocks.registerBlockType,h=wp.components.SelectControl,f=wp.element.Component,p=function(e){function t(){o(this,t);var e=n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));if(e.state=e.constructor.getInitialState(e.props.attributes.selectedForm),hatchbuck_forms&&0!==e.state.selectedForm){var r=hatchbuck_forms.find(function(t){return t.id==e.state.selectedForm});e.setState({hb_form:r,hb_forms:hatchbuck_forms})}else e.setState({hb_forms:hatchbuck_forms});return e.onChangeSelectForm=e.onChangeSelectForm.bind(e),e}return c(t,e),i(t,null,[{key:"getInitialState",value:function(e){return{hb_forms:hatchbuck_forms,selectedForm:e,hb_form:{}}}}]),i(t,[{key:"onChangeSelectForm",value:function(e){var t=this.state.hb_forms.find(function(t){return t.id==parseInt(e)});0!==t.value?(this.setState({selectedForm:parseInt(e),hb_form:t}),this.props.setAttributes({selectedForm:parseInt(e),title:t.title,content:t.content,short_code:t.short_code})):(this.setState({selectedForm:parseInt(e),hb_form:t}),this.props.setAttributes({selectedForm:parseInt(e),title:"Select a Form",content:"No Hatchbuck Form Selected",short_code:"Select a Hatchbuck Form"}))}},{key:"render",value:function(){var e=[{value:0,label:l("Select a Form")}],t=l("Loading Hatchbuck Forms");if(this.state.hb_forms.length>0){t=l("We have %d forms. Choose one.").replace("%d",this.state.hb_forms.length),this.state.hb_forms.forEach(function(t){e.push({value:t.id,label:t.title})})}else t=l("No Hatchbuck Forms found. Please create some first.");return t=l(this.props.attributes.short_code),[!!this.props.isSelected&&wp.element.createElement(h,{onChange:this.onChangeSelectForm,value:this.props.attributes.selectedForm,label:l("Select a Form"),options:e}),t]}}]),t}(f),b=wp.element.createElement,m=b("svg",{width:24,height:24,viewBox:"0 0 66.3 103.32",transform:"translate(0, -2)"},b("path",{d:"M1.19,75.29H13.48l.08-.18c-.24-.2-.47-.41-.72-.6A24.34,24.34,0,0,1,4.51,62.65a1.2,1.2,0,0,0-1.42-1c-1.42.17-2.2-.34-2.28-1.92C.66,56.91.39,54.1.18,51.28.11,50.35,0,49.42,0,48.49a1.6,1.6,0,0,1,1.33-1.83,1.55,1.55,0,0,1,.43,0,18,18,0,0,1,2.08,0A.93.93,0,0,0,4.9,46,24.62,24.62,0,0,1,20.12,31.28a.83.83,0,0,0,.68-1,4.86,4.86,0,0,1,0-.54c0-1.28.51-1.8,1.81-1.81H34c1.17,0,1.93.59,1.85,1.88a1.56,1.56,0,0,0,1.24,1.79,24.39,24.39,0,0,1,14.3,14.19c.26.63.55.91,1.24.84a13.67,13.67,0,0,1,1.81,0c1.32,0,2,.68,1.89,2-.17,2.88-.39,5.76-.6,8.64-.07,1-.13,1.92-.26,2.87a1.58,1.58,0,0,1-1.63,1.53l-.2,0c-1.45,0-1.46,0-2,1.42a24.79,24.79,0,0,1-8.29,11.47c-.21.16-.4.34-.81.7h12.7c-.12,9.61-3.81,17.28-11.42,22.92a26.64,26.64,0,0,1-30.1.9C3.83,92.74.63,81.87,1.19,75.29ZM41.57,56.77A12.92,12.92,0,1,0,28.63,69.7,12.91,12.91,0,0,0,41.57,56.77ZM14.71,76.06c3.89,4.67,8.75,7.34,15,6.84,5.42-.44,10.52-4.38,11.87-6.94C32.63,81.08,23.69,81.07,14.71,76.06Zm14-35.77A4.38,4.38,0,0,0,33,35.93a4.33,4.33,0,0,0-8.65.09,4.43,4.43,0,0,0,4.37,4.26Z"}),b("path",{d:"M33.14,46.35c1,.73,2.09,1.45,3.1,2.22a1,1,0,0,1,.23.73V64.19a1.12,1.12,0,0,1-.27.8c-1,.76-2,1.45-3.27,2.33,0-.63,0-.94,0-1.25V59.75c0-.76-.18-1.08-1-1.07H25.29c-.73,0-1,.23-1,1v7.41a9.12,9.12,0,0,1-3.39-2.22,1.31,1.31,0,0,1-.21-.84V49.5a1.52,1.52,0,0,1,.48-1.08c.92-.73,1.93-1.36,2.9-2l.22.21v7.2c0,1.28,0,1.29,1.29,1.29h6c1.21,0,1.21,0,1.21-1.18v-7.3Z"}),b("path",{d:"M26.37,36a2.3,2.3,0,0,1,2.32-2.3h0A2.39,2.39,0,0,1,31,36a2.28,2.28,0,0,1-2.2,2.34h-.1a2.2,2.2,0,0,1-2.31-2.1A1,1,0,0,1,26.37,36Z"}));u("cgb/block-gutenberg-form-block",{title:l("Hatchbuck Forms"),icon:m,category:"common",keywords:["Hatchbuck","Load","Hatchbuck Forms"],attributes:{content:{type:"array",source:"children",selector:"p"},title:{type:"string",selector:"h2"},short_code:{type:"string",selector:"p"},selectedForm:{type:"number",default:0}},edit:p,save:function(e){return e.attributes.short_code}})},function(e,t){},function(e,t){}]);