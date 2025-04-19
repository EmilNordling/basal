import { signal } from "@preact/signals-react";
import { Injectable } from "@wox-team/wox-inject";

@Injectable()
export class UniversalUiStore {
  public navbarIsOpen = signal(true);
}
