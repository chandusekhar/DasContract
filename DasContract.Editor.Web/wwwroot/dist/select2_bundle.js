var select2Lib;(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e,t,n,o,a){$(`#${e}`).select2({theme:"bootstrap-5",width:"100%",multiple:o}),n.forEach((t=>{var n=new Option(t.text,t.value,!1,!1);$("#"+e).append(n)})),$("#"+e).val(t),$("#"+e).on("select2:select",(function(e){a.invokeMethodAsync("OnSelect",e.params.data.id)})),$("#"+e).on("select2:unselect",(function(e){console.log(e),a.invokeMethodAsync("OnUnselect",e.params.data.id)})),$("#"+e).on("change",(function(e){a.invokeMethodAsync("OnChange")}))}function o(e,t,n){var o=new Option(n,t,!1,!1);$("#"+e).append(o)}function a(e,t){$("#"+e).find('[value="'+t+'"]').remove()}function i(e,t,n){$("#"+e+" option").remove(),t.forEach((t=>{var n=new Option(t.text,t.value,!1,!1);$("#"+e).append(n)})),l(e,n)}function r(e){return $.makeArray($("#"+e).find(":selected").map((function(){return this.value})))}function l(e,t){$("#"+e).val(null),$("#"+e).val(t)}e.r(t),e.d(t,{addOption:()=>o,getSelectedIds:()=>r,initializeSelect2:()=>n,refreshOptions:()=>i,refreshSelectedItems:()=>l,removeOption:()=>a}),select2Lib=t})();