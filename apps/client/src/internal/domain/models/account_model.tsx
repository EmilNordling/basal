import { type LocalDatabase } from "../database/local_database";

export class AccountModel {
  constructor(
    private readonly localDatabase: LocalDatabase,
    public name: string,
    public displayName: string
  ) {}

  update() {
    // Empty
  }
}
