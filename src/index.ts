import { Client, factory } from "@lumeweb/libkernel-universal";
import {
  DNS_RECORD_TYPE,
  DNSResult,
  ResolverOptions,
} from "@lumeweb/libresolver";

const MODULE = "PACYNuYbp_5hgCjMK16EGcytB9QCxDLe4_uitahwePdeaA";

export class DnsClient extends Client {
  public async register(): Promise<void> {
    return this.callModuleReturn("register");
  }
  public async clear(): Promise<void> {
    return this.callModuleReturn("clear");
  }
  public async getResolvers(): Promise<string[]> {
    return this.callModuleReturn("getResolvers");
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
