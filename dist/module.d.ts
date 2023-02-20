import { Client } from "@lumeweb/libkernel-universal";
import { DnsClient } from "./index.js";
import { DNSResult, ResolverOptions } from "@lumeweb/libresolver";
export declare class ResolverModule extends Client {
  private domain;
  constructor(domain: string, resolver?: DnsClient);
  private _resolver?;
  get resolver(): DnsClient;
  set resolver(value: DnsClient);
  resolve(
    domain: string,
    options: ResolverOptions,
    bypassCache: boolean
  ): Promise<DNSResult>;
  getSupportedTlds(): Promise<string[]>;
}
export declare const createModule: (
  module: string,
  client: DnsClient
) => ResolverModule;
//# sourceMappingURL=module.d.ts.map
