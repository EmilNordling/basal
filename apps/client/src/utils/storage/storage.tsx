function safeJsonParse<T>(data: unknown): T {
  try {
    return JSON.parse(data as string) as T;
  } catch {
    return data as T;
  }
}
export type StorageType = "session" | "local";

export interface StorageSpecification {
  prefix?: string;
  type?: StorageType;
}

export function storage<T extends Record<string, unknown>>({
  prefix,
  type,
}: StorageSpecification = {}) {
  const storeType: StorageType = type ?? "local";
  const store: Storage = storeType === "local" ? localStorage : sessionStorage;

  return {
    storeType,

    get<K extends keyof T>(key: K): T[K] | null {
      const item = store.getItem(`${prefix ?? ""}${key as string}`);
      if (!item) return null;

      return safeJsonParse<T[K]>(item);
    },

    set<K extends keyof T>(key: K, data: T[K]): void {
      store.setItem(`${prefix ?? ""}${key as string}`, JSON.stringify(data));
    },

    removeItem<K extends keyof T>(key: K): void {
      store.removeItem(`${prefix ?? ""}${key as string}`);
    },
  } as const;
}
