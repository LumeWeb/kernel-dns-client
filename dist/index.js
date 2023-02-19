import { Client, factory } from "@lumeweb/libkernel-universal";
const MODULE = "PACYNuYbp_5hgCjMK16EGcytB9QCxDLe4_uitahwePdeaA";
export class DnsClient extends Client {
    async register(module) {
        const bag = await this.loadBound(module);
        const ret = await bag.callModule("register");
        this.handleError(ret);
    }
    async clear() {
        return this.callModuleReturn("clear");
    }
    async getResolvers() {
        return this.callModuleReturn("clear");
    }
    async ready() {
        return this.callModuleReturn("ready");
    }
}
export const createClient = factory(DnsClient, MODULE);
