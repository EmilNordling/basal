import { Injectable } from "@wox-team/wox-inject";
import { AccountModel } from "../models/account_model";
import { signal } from "@preact/signals-react";
import { LocalDatabase } from "../database/local_database";

@Injectable()
export class AccountService {
  model = signal<Nullable<AccountModel>>();

  constructor(private readonly localDatabase: LocalDatabase) {
    this.critical();
  }

  async critical() {
    this.model.value = new AccountModel(
      this.localDatabase,
      "name",
      "displayName"
    );
  }
}
