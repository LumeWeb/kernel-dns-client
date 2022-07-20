import { callModule as callModuleKernel, connectModule as connectModuleKernel, } from "libkernel";
import { callModule as callModuleModule, connectModule as connectModuleModule, } from "libkmodule";
const DNS_MODULE = "AQBLKpieqOfKVRgMa8k45P4S_ILYgJmswVso4vT1qzoG-A";
let callModule, connectModule;
if (window.document) {
    callModule = callModuleKernel;
    connectModule = connectModuleKernel;
}
else {
    callModule = callModuleModule;
    connectModule = connectModuleModule;
}
export async function resolve(domain, params, force = false) {
    const [resp, err] = await callModule(DNS_MODULE, "resolve", { domain, params, force });
    if (err) {
        throw new Error(err);
    }
    return resp;
}
