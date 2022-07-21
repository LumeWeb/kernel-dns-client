const DNS_MODULE = "AQBLKpieqOfKVRgMa8k45P4S_ILYgJmswVso4vT1qzoG-A";
let callModule, connectModule;
async function loadLibs() {
    if (callModule && connectModule) {
        return;
    }
    if (typeof window !== "undefined" && window?.document) {
        const pkg = (await import("libkernel"));
        callModule = pkg.callModule;
        connectModule = pkg.connectModule;
    }
    else {
        const pkg = (await import("libkmodule"));
        callModule = pkg.callModule;
        connectModule = pkg.connectModule;
    }
}
export async function resolve(domain, params, force = false) {
    await loadLibs();
    const [resp, err] = await callModule(DNS_MODULE, "resolve", { domain, params, force });
    if (err) {
        throw new Error(err);
    }
    return resp;
}
