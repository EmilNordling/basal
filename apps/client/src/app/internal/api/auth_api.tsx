import { Injectable } from '@wox-team/wox-inject';
import { HttpService } from '../http/http.service';
import { type UserModel } from './models/user_model';

@Injectable()
export class AuthApi {
  constructor(private readonly httpService: HttpService) {}

  async get() {
    return this.httpService.get<UserModel>('/api/user');
  }

  async login(data: { username: string }) {
    return this.httpService.post<null>('/api/login', data);
  }

  async logout() {
    return this.httpService.post<null>('/api/logout', null);
  }
}
