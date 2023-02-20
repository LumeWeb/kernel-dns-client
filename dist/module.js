import { Client, factory } from "@lumeweb/libkernel-universal";
import { resolverError, } from "@lumeweb/libresolver";
export class ResolverModule extends Client {
    domain;
    constructor(domain, resolver) {
        super();
        this._resolver = resolver;
        this.domain = domain;
    }
    _resolver;
    get resolver() {
        return this._resolver;
    }
    set resolver(value) {
        this._resolver = value;
    }
    async resolve(domain, options, bypassCache) {
        try {
            return this.callModuleReturn("resolve", {
                domain,
                options,
                bypassCache,
            });
        }
        catch (e) {
            return resolverError(e);
        }
    }
    async getSupportedTlds() {
        return this.callModuleReturn("getSupportedTlds");
    }
}
export const createModule = (module, client) => factory(ResolverModule, module)(module, client);
