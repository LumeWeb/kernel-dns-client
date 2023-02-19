import { Client } from "@lumeweb/libkernel-universal";
export declare class DnsClient extends Client {
  register(): Promise<void>;
  clear(): Promise<void>;
  getResolvers(): Promise<string>;
  ready(): Promise<void>;
}
export declare const createClient: (...args: any) => DnsClient;
//# sourceMappingURL=index.d.ts.map
