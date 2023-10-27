/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />
interface ImportMetaEnv {
  readonly GA_TRACKING_ID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
