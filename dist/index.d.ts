import { Client } from "@lumeweb/libkernel-universal";
export declare class DnsClient extends Client {
  register(module: string): Promise<void>;
  clear(): Promise<void>;
  getResolvers(): Promise<void>;
  ready(): Promise<void>;
}
export declare const createClient: (...args: any) => DnsClient;
//# sourceMappingURL=index.d.ts.map
