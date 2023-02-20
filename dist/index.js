import { Client, factory } from "@lumeweb/libkernel-universal";
import { DNS_RECORD_TYPE, } from "@lumeweb/libresolver";
import { createModule } from "./module.js";
const MODULE = "PAAUkZAnPjxi2CzQWZ7jCVcl-E9lQLvTOwE2vhU0hX5UXg";
export class DnsClient extends Client {
    async register() {
        return this.callModuleReturn("register");
    }
    async clear() {
        return this.callModuleReturn("clear");
    }
    get resolvers() {
        return this.callModuleReturn("getResolvers").then((resolvers) => {
            return new Set(resolvers.map((resolver) => {
                return createModule(resolver, this);
            }));
        });
    }
    async ready() {
        return this.callModuleReturn("ready");
    }
    async resolve(domain, options = { type: DNS_RECORD_TYPE.CONTENT }, bypassCache = false) {
        return this.callModuleReturn("resolve", { domain, options, bypassCache });
    }
}
export const createClient = factory(DnsClient, MODULE);
export * from "./module.js";
