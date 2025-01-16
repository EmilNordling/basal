/// <reference types="vite/client" />

export {};

declare global {
  // Disables this rule since the type should extend Function
  // eslint-disable-next-line @typescript-eslint/ban-types
  type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
    ? A
    : never;

  type Nullable<T> = T | null;
  type NullableFields<T> = { [K in keyof T]: T[K] | null };

  interface Window {
    __TAURI__: Record<string, unknown>;
  }

  interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    // more env variables...
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

  type UUID = ReturnType<typeof crypto.randomUUID>;

  type Result<T = void, K = Error> =
    | {
        ok: T;
        err: null;
      }
    | {
        ok: null;
        err: K;
      };
  type Result<T, K = Error> =
    | {
        ok: T;
        err: null;
      }
    | {
        ok: null;
        err: K;
      };

  type AsyncResult<T = void, K = Error> = Promise<Result<T, K>>;
  type AsyncResult<T, K = Error> = Promise<Result<T, K>>;

  declare function Ok<T, _K>(val: T): Result<T, _K>;
  declare function Ok<T extends void, _K>(val?: T): Result<T, _K>;
  declare function Err<_T, K>(val: K): Result<_T, K>;
  declare function Err<_T, K extends void>(val?: K): Result<_T, Error>;
}
