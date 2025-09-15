import { Injectable } from "@wox-team/wox-inject";
import { HttpService } from "../http.service";
import { type LogBooksModel } from "./models/logbook_model";

@Injectable()
export class LogbookApi {
  constructor(private readonly httpService: HttpService) {}

  async get(fileId: string) {
    return this.httpService.get<LogBooksModel>(`/api/file/${fileId}/logbook`);
  }
}
