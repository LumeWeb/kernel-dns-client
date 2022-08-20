import { DNS_RECORD_TYPE } from "@lumeweb/resolver-common";
const DNS_MODULE = "AQBLKpieqOfKVRgMa8k45P4S_ILYgJmswVso4vT1qzoG-A";
let callModule, connectModule;
async function loadLibs() {
    if (callModule && connectModule) {
        return;
    }
    if (typeof window !== "undefined" && window?.document) {
        const pkg = await import("libkernel");
        callModule = pkg.callModule;
        connectModule = pkg.connectModule;
    }
    else {
        const pkg = await import("libkmodule");
        callModule = pkg.callModule;
        connectModule = pkg.connectModule;
    }
}
export async function resolve(domain, options = { type: DNS_RECORD_TYPE.CONTENT }, bypassCache = false) {
    await loadLibs();
    const [resp, err] = await callModule(DNS_MODULE, "resolve", {
        domain,
        options,
        bypassCache,
    });
    if (err) {
        throw new Error(err);
    }
    return resp;
}
export async function register() {
    await loadLibs();
    await callModule(DNS_MODULE, "register");
}
export async function clear() {
    await loadLibs();
    await callModule(DNS_MODULE, "clear");
}
export async function getResolvers() {
    await loadLibs();
    const [resp, err] = await callModule(DNS_MODULE, "getResolvers");
    if (err) {
        throw new Error(err);
    }
    return resp;
}
export async function ready() {
    await loadLibs();
    const [resp, err] = await callModule(DNS_MODULE, "ready");
    if (err) {
        throw new Error(err);
    }
    return resp;
}
