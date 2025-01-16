import { Injectable } from "@wox-team/wox-inject";
import { signal } from "@preact/signals-react";
import { AuthApi } from "../../../api/auth_api";
import { Logger } from "../../../logger";
import { type UserModel } from "../../../api/models/user_model";

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);

  user = signal<Nullable<UserModel>>(null);

  constructor(private readonly authApi: AuthApi) {}

  async load() {
    this.logger.logVerbose("load");

    const result = await this.authApi.get();
    if (result.err) return null;

    this.user.value = result.ok.data;

    return this.user.peek();
  }

  async login(username: string): AsyncResult<UserModel, unknown> {
    this.logger.logVerbose("login");

    const result = await this.authApi.login({ username });
    if (result.err) return Err(result.err);

    const user = await this.load();
    if (user == null) return Err("Failed to load user");

    return Ok(user);
  }

  async logout() {
    this.logger.logVerbose("logout");

    const result = await this.authApi.logout();
    if (result.err) return;

    this.user.value = null;
  }
}
