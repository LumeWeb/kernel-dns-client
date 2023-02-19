import { Client } from "@lumeweb/libkernel-universal";
import { ResolverOptions } from "@lumeweb/libresolver";
export declare class DnsClient extends Client {
  register(): Promise<void>;
  clear(): Promise<void>;
  getResolvers(): Promise<string[]>;
  ready(): Promise<void>;
  resolve(
    domain: string,
    options?: ResolverOptions,
    bypassCache?: boolean
  ): Promise<void>;
}
export declare const createClient: (...args: any) => DnsClient;
//# sourceMappingURL=index.d.ts.map
