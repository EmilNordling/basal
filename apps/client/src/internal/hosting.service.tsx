import { Injectable } from "@wox-team/wox-inject";

@Injectable({
  scope: "transient",
})
export class HostingService {
  readonly apiBaseUri = "http://localhost:8080";
}
