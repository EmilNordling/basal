import type { LocalDatabase } from "../database/local_database";

export class TileModel {
  constructor(
    private readonly localDatabase: LocalDatabase,
    public id: string,
    public synced: boolean,
    public title: Nullable<string>,
    public body: Nullable<string>,
    public tags: string[],
    public createdAt: number,
    public updateAt: Nullable<number>
  ) {}

  async update(newBody: string) {
    this.body = newBody;

    const result = await this.localDatabase.getDb();
    if (result.err) return;
    const db = result.ok;

    db.put("tiles", {
      title: this.title ?? "Untitled",
      tile_id: this.id,
      body: this.body,
      tags: this.tags,
      created_at: this.createdAt,
      updated_at: Date.now(),
    });

    return this;
  }
}
