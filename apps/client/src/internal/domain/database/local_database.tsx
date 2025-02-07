import { Injectable } from "@wox-team/wox-inject";
import { DBSchema, IDBPDatabase, openDB } from "idb";

@Injectable({
  scope: "singleton",
})
export class LocalDatabase {
  #status: Promise<void>;
  #statusResolver: (() => void) | null = null;

  #db: IDBPDatabase<LocalDB> | null = null;

  async getDb(): AsyncResult<IDBPDatabase<LocalDB>> {
    await this.#status;

    if (this.#db == null) return Err();

    return Ok(this.#db);
  }

  constructor() {
    this.#status = new Promise((resolve) => {
      this.#statusResolver = resolve;
    });
  }

  async open() {
    // await this.removeAll();

    this.#db = await openDB("basal-db", 1, {
      upgrade(db) {
        const s = db.createObjectStore("tiles", {
          keyPath: "tile_id",
        });
        s.createIndex("tile_id", "tile_id", { unique: false });
        s.createIndex("title", "title", { unique: false });
      },
    });

    this.#statusResolver?.();
  }

  async removeAll() {
    const dbs = await indexedDB.databases();
    dbs.forEach((db) => {
      if (db.name == null) return;

      indexedDB.deleteDatabase(db.name);
    });
  }
}

export interface LocalDB extends DBSchema {
  tiles: {
    key: number;
    value: {
      tile_id: string;
      title: string;
      body: Nullable<string>;
      tags: string[];
      created_at: number;
      updated_at: Nullable<number>;
    };
    indexes: {
      tags: string[];
      title: string;
      tile_id: string;
    };
  };
}
