import * as wasm from "./sum_bg.wasm";
import { __wbg_set_wasm } from "./sum_bg.js";
__wbg_set_wasm(wasm);
export * from "./sum_bg.js";
