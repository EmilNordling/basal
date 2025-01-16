import { Injectable } from '@wox-team/wox-inject';

@Injectable({
  scope: 'transient',
})
export class HostingService {
  public readonly apiBaseUri = '';

  constructor() {
    // Empty
  }
}
