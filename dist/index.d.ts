import { Client } from "@lumeweb/libkernel-universal";
import { DNSResult, ResolverOptions } from "@lumeweb/libresolver";
export declare class DnsClient extends Client {
  register(): Promise<void>;
  clear(): Promise<void>;
  get resolvers(): Promise<string[]>;
  ready(): Promise<void>;
  resolve(
    domain: string,
    options?: ResolverOptions,
    bypassCache?: boolean
  ): Promise<DNSResult>;
}
export declare const createClient: (...args: any) => DnsClient;
//# sourceMappingURL=index.d.ts.map
