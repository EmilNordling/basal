import { Injectable } from "@wox-team/wox-inject";
import { type LocalDB, LocalDatabase } from "../database/local_database";
import { signal } from "@preact/signals-react";
import { TileModel } from "../models/tile_model";

@Injectable()
export class ListingService {
  tiles = signal<TileModel[]>([]);

  constructor(private readonly localDatabase: LocalDatabase) {
    this.critical();
  }

  get(id: string) {
    return this.tiles.peek().find((x) => x.id === id) ?? null;
  }

  async critical() {
    this.revalidateState();
  }

  async revalidateState() {
    const result = await this.localDatabase.getDb();
    if (result.err) return result.err;
    const db = result.ok;

    const tiles = await db.getAll("tiles");
    this.tiles.value = tiles.map(
      (x) =>
        new TileModel(
          this.localDatabase,
          x.tile_id,
          true,
          x.title,
          x.body,
          x.tags,
          x.created_at,
          x.updated_at
        )
    );
  }

  async createNewTile(): AsyncResult<UUID> {
    const result = await this.localDatabase.getDb();
    if (result.err) return Err(result.err);
    const db = result.ok;

    const id = crypto.randomUUID();
    const title = "Untitled";

    const obj = {
      title: title,
      tile_id: id,
      body: null,
      created_at: Date.now(),
      updated_at: null,
      tags: [],
    } satisfies LocalDB["tiles"]["value"];

    await db.add("tiles", obj);
    this.tiles.value = [
      ...this.tiles.value,
      new TileModel(
        this.localDatabase,
        obj.tile_id,
        false,
        obj.title,
        obj.body,
        obj.tags,
        obj.created_at,
        obj.updated_at
      ),
    ];

    return Ok(id);
  }
}
