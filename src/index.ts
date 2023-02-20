import { Client, factory } from "@lumeweb/libkernel-universal";
import {
  DNS_RECORD_TYPE,
  DNSResult,
  ResolverOptions,
} from "@lumeweb/libresolver";
import { createModule, ResolverModule } from "./module.js";

const MODULE = "PAAUkZAnPjxi2CzQWZ7jCVcl-E9lQLvTOwE2vhU0hX5UXg";

export class DnsClient extends Client {
  public async register(): Promise<void> {
    return this.callModuleReturn("register");
  }
  public async clear(): Promise<void> {
    return this.callModuleReturn("clear");
  }
  get resolvers(): Promise<Set<ResolverModule>> {
    return this.callModuleReturn("getResolvers").then((resolvers: string[]) => {
      return new Set(
        resolvers.map((resolver: string): ResolverModule => {
          return createModule(resolver, this);
        })
      );
    });
  }
  public async ready(): Promise<void> {
    return this.callModuleReturn("ready");
  }
  public async resolve(
    domain: string,
    options: ResolverOptions = { type: DNS_RECORD_TYPE.CONTENT },
    bypassCache: boolean = false
  ): Promise<DNSResult> {
    return this.callModuleReturn("resolve", { domain, options, bypassCache });
  }
}

export const createClient = factory<DnsClient>(DnsClient, MODULE);
export * from "./module.js";
