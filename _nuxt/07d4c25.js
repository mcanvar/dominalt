(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{283:function(e,t,n){"use strict";n.r(t);var r=n(1).a.extend({props:{active:{type:Boolean,default:!1},increasing:{type:Boolean,default:!1},decreasing:{type:Boolean,default:!1},name:{type:String,required:!0}},computed:{activeClasses:function(){return{"bg-gradient-to-r":this.active,"animate-pulse":this.active&&!this.increasing&&!this.decreasing||this.increasing||this.decreasing,"from-wave-600":this.active&&!this.increasing&&!this.decreasing,"to-indigo-500":this.active&&!this.increasing&&!this.decreasing,"hover:from-wave-500":this.active&&!this.increasing&&!this.decreasing,"hover:to-indigo-400":this.active&&!this.increasing&&!this.decreasing,"from-teal-400":this.increasing,"to-teal-600":this.increasing,"hover:from-teal-300":this.increasing,"hover:to-teal-500":this.increasing,"from-rose-400":this.decreasing,"to-rose-600":this.decreasing,"hover:from-rose-300":this.decreasing,"hover:to-rose-500":this.decreasing}}}}),o=n(14),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"inline-flex text-xs items-center justify-center w-full p-2 transition duration-150 cursor-default bg-gradient-to-r from-gray-500 to-gray-700 ease-in-out rounded-md checkout focus:outline-none disabled:opacity-25",class:e.activeClasses},[e._v("\n  "+e._s(e.name)+"\n")])}),[],!1,null,"cda5c01c",null);t.default=component.exports}}]);