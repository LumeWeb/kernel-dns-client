import { Client, factory } from "@lumeweb/libkernel-universal";

const MODULE = "PACYNuYbp_5hgCjMK16EGcytB9QCxDLe4_uitahwePdeaA";

export class DnsClient extends Client {
  public async register(module: string): Promise<void> {
    const bag = await this.loadBound(module);
    const ret = await bag.callModule("register");
    this.handleError(ret);
  }
  public async clear(): Promise<void> {
    return this.callModuleReturn("clear");
  }
  public async getResolvers(): Promise<void> {
    return this.callModuleReturn("clear");
  }
  public async ready(): Promise<void> {
    return this.callModuleReturn("ready");
  }
}

export const createClient = factory<DnsClient>(DnsClient, MODULE);
