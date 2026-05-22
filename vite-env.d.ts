/// <reference types="vite/client" />

declare module '*.JPG' {
  const src: string;
  export default src;
}
declare module '*.JPEG' {
  const src: string;
  export default src;
}
declare module '*.PNG' {
  const src: string;
  export default src;
}

declare const __BASE_PATH__: string;
declare const __IS_PREVIEW__: boolean;
declare const __READDY_PROJECT_ID__: string;
declare const __READDY_VERSION_ID__: string;
declare const __READDY_AI_DOMAIN__: string;