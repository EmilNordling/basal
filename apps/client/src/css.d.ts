import type * as CSS from "csstype";

declare module "csstype" {
  interface Properties {
    "--transition-duration": string;
    [index: `--${string}`]: any;
  }
}
