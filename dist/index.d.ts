import { Client } from "@lumeweb/libkernel-universal";
import { DNSResult, ResolverOptions } from "@lumeweb/libresolver";
import { ResolverModule } from "./module.js";
export declare class DnsClient extends Client {
  register(): Promise<void>;
  clear(): Promise<void>;
  get resolvers(): Promise<Set<ResolverModule>>;
  ready(): Promise<void>;
  resolve(
    domain: string,
    options?: ResolverOptions,
    bypassCache?: boolean
  ): Promise<DNSResult>;
}
export declare const createClient: (...args: any) => DnsClient;
export * from "./module.js";
//# sourceMappingURL=index.d.ts.map
