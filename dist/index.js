import { Client, factory } from "@lumeweb/libkernel-universal";
import { DNS_RECORD_TYPE, } from "@lumeweb/libresolver";
import { createModule } from "./module.js";
const MODULE = "vAA-phmM1ztqu8zGBKF2nM3b8N_IQGWlB6J_doi2FhqS-A";
export class DnsClient extends Client {
    get resolvers() {
        return this.callModuleReturn("getResolvers").then((resolvers) => {
            return new Set(resolvers.map((resolver) => {
                return createModule(resolver, this);
            }));
        });
    }
    async register() {
        return this.callModuleReturn("register");
    }
    async registerResolver(module) {
        const bag = await this.loadBound(module);
        const ret = await bag.callModule("register");
        return ret[0];
    }
    async clear() {
        return this.callModuleReturn("clear");
    }
    async resolve(domain, options = { type: DNS_RECORD_TYPE.CONTENT }, bypassCache = false) {
        return this.callModuleReturn("resolve", { domain, options, bypassCache });
    }
}
export const createClient = factory(DnsClient, MODULE);
export * from "./module.js";
