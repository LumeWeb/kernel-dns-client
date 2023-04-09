import { Client } from "@lumeweb/libkernel-universal";
import { DNSResult, ResolverOptions } from "@lumeweb/libresolver";
import { ResolverModule } from "./module.js";
export declare class DnsClient extends Client {
  get resolvers(): Promise<Set<ResolverModule>>;
  register(): Promise<void>;
  registerResolver(module: string): Promise<void>;
  clear(): Promise<void>;
  resolve(
    domain: string,
    options?: ResolverOptions,
    bypassCache?: boolean
  ): Promise<DNSResult>;
}
export declare const createClient: (...args: any) => DnsClient;
export * from "./module.js";
//# sourceMappingURL=index.d.ts.map
