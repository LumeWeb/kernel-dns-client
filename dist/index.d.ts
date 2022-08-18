import { ResolverOptions } from "@lumeweb/resolver-common";
export declare function resolve(
  domain: string,
  options: ResolverOptions,
  bypassCache?: boolean
): Promise<any>;
export declare function register(): Promise<void>;
export declare function clear(): Promise<void>;
export declare function ready(): Promise<any>;
//# sourceMappingURL=index.d.ts.map
