import { Client, factory } from "@lumeweb/libkernel/module";
import { DnsClient } from "./index.js";
import {
  DNSResult,
  resolverError,
  ResolverOptions,
} from "@lumeweb/libresolver";

export class ResolverModule extends Client {
  private domain: string;

  constructor(module: string, domain: string, resolver?: DnsClient) {
    super(module);
    this._resolver = resolver;
    this.domain = domain;
  }

  private _resolver?: DnsClient;

  get resolver(): DnsClient {
    return this._resolver as DnsClient;
  }

  set resolver(value: DnsClient) {
    this._resolver = value;
  }

  async resolve(
    domain: string,
    options: ResolverOptions,
    bypassCache: boolean,
  ): Promise<DNSResult> {
    try {
      return this.callModuleReturn("resolve", {
        domain,
        options,
        bypassCache,
      });
    } catch (e) {
      return resolverError(e as Error);
    }
  }

  async getSupportedTlds(): Promise<string[]> {
    return this.callModuleReturn("getSupportedTlds");
  }

  async ready(): Promise<any> {
    return this.callModuleReturn("ready");
  }
}

export const createModule = (
  module: string,
  client: DnsClient,
): ResolverModule =>
  factory<ResolverModule>(ResolverModule, module)(module, client);
