import { Injectable } from "@wox-team/wox-inject";
import { HttpService } from "../http.service";
import { type UserModel } from "./models/user_model";

@Injectable()
export class AuthApi {
  constructor(private readonly httpService: HttpService) {}

  get() {
    return this.httpService.get<UserModel>("/api/user");
  }

  signup(data: { email: string; password: string }) {
    return this.httpService.post<null>("/api/signup", data);
  }

  signin(data: { email: string; password: string }) {
    return this.httpService.post<null>("/api/signin", data);
  }

  logout() {
    return this.httpService.post<null>("/api/logout", null);
  }
}
