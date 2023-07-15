import { Client, factory } from "@lumeweb/libkernel/module";
import {
  DNS_RECORD_TYPE,
  DNSResult,
  ResolverOptions,
} from "@lumeweb/libresolver";
import { createModule, ResolverModule } from "./module.js";

const MODULE = "zduN43vTbtVi8VVRJjpoA2feTbuDwAqv4hnhVUYN1FqMitNAf114dvQvLP";

export class DnsClient extends Client {
  get resolvers(): Promise<Set<ResolverModule>> {
    return this.callModuleReturn("getResolvers").then((resolvers: string[]) => {
      return new Set(
        resolvers.map((resolver: string): ResolverModule => {
          return createModule(resolver, this);
        }),
      );
    });
  }

  public async register(): Promise<void> {
    return this.callModuleReturn("register");
  }

  public async registerResolver(module: string): Promise<void> {
    const bag = await this.getBound(module);
    const ret = await bag.callModule("register");
    return ret[0];
  }

  public async clear(): Promise<void> {
    return this.callModuleReturn("clear");
  }

  public async resolve(
    domain: string,
    options: ResolverOptions = { type: DNS_RECORD_TYPE.CONTENT },
    bypassCache: boolean = false,
  ): Promise<DNSResult> {
    return this.callModuleReturn("resolve", { domain, options, bypassCache });
  }
}

export const createClient = factory<DnsClient>(DnsClient, MODULE);
export * from "./module.js";
