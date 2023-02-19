import { Client, factory } from "@lumeweb/libkernel-universal";

const MODULE = "PACYNuYbp_5hgCjMK16EGcytB9QCxDLe4_uitahwePdeaA";

export class DnsClient extends Client {
  public async register(): Promise<void> {
    return this.callModuleReturn("register");
  }
  public async clear(): Promise<void> {
    return this.callModuleReturn("clear");
  }
  public async getResolvers(): Promise<string> {
    return this.callModuleReturn("getResolvers");
  }
  public async ready(): Promise<void> {
    return this.callModuleReturn("ready");
  }
}

export const createClient = factory<DnsClient>(DnsClient, MODULE);
