import { Client, factory } from "@lumeweb/libkernel-universal";
import { DNS_RECORD_TYPE, } from "@lumeweb/libresolver";
const MODULE = "PACYNuYbp_5hgCjMK16EGcytB9QCxDLe4_uitahwePdeaA";
export class DnsClient extends Client {
    async register() {
        return this.callModuleReturn("register");
    }
    async clear() {
        return this.callModuleReturn("clear");
    }
    async getResolvers() {
        return this.callModuleReturn("getResolvers");
    }
    async ready() {
        return this.callModuleReturn("ready");
    }
    async resolve(domain, options = { type: DNS_RECORD_TYPE.CONTENT }, bypassCache = false) {
        return this.callModuleReturn("resolve", { domain, options, bypassCache });
    }
}
export const createClient = factory(DnsClient, MODULE);
