import { Injectable } from "@wox-team/wox-inject";

@Injectable({
  scope: "transient",
})
export class HostingService {
  public readonly apiBaseUri = "http://localhost:8080";

  constructor() {
    // Empty
  }
}
