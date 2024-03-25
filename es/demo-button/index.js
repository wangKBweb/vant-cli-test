import "./index-sfc.css";
const __vue_sfc__ = {
  __name: "index",
  setup(__props, { expose: __expose }) {
    __expose();
    const a = () => {
    };
    const __returned__ = { a };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
import { renderSlot as _renderSlot, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
const _hoisted_1 = { class: "demo-button" };
function __vue_render__(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("button", _hoisted_1, [
    _renderSlot(_ctx.$slots, "default")
  ]);
}
__vue_sfc__.render = __vue_render__;
var stdin_default = __vue_sfc__;
export {
  stdin_default as default
};
