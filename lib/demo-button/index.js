var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => stdin_default
});
module.exports = __toCommonJS(stdin_exports);
var import_index_sfc = require("./index-sfc.css");
var import_vue = require("vue");
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
const _hoisted_1 = { class: "demo-button" };
function __vue_render__(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("button", _hoisted_1, [
    (0, import_vue.renderSlot)(_ctx.$slots, "default")
  ]);
}
__vue_sfc__.render = __vue_render__;
var stdin_default = __vue_sfc__;
