/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLIENT_PORT: number;
  // ## Firebase
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_FIREBASE_APP_ID: string;
  readonly VITE_FIREBASE_MEASUREMENT_ID: string;
  readonly VITE_YANDEX_METRICA_ID: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/**
 * Get a type of styled component props without some keys.
 * @example
 * GetStyledComponentProps<{a: string, b: number, c: boolean}, 'a'> // { $b: number, $c: boolean }
 */
type GetStyledComponentProps<T, K extends keyof T = never> = {
  [P in Exclude<keyof T, K> as `$${string & P}`]?: T[P];
};
