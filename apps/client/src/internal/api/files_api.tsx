import { Injectable } from '@wox-team/wox-inject';
import { HttpService } from '../http/http.service';
import { type FilesModel } from './models/files_model';
import { type FileDetailsModel } from './models/file_details_model';

@Injectable()
export class FileApi {
  constructor(private readonly httpService: HttpService) {}

  async getList() {
    return this.httpService.get<FilesModel>('/api/files/list');
  }

  async get(fileId: string) {
    return this.httpService.get<FileDetailsModel>(`/api/file/${fileId}`);
  }
}
