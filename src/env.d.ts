/// <reference types="astro/client" />

// Plausible analytics global, loaded via the inline snippet in Layout.astro.
interface PlausibleFn {
  (event: string, options?: Record<string, unknown>): void;
  q?: unknown[];
  init: (options?: Record<string, unknown>) => void;
  o?: Record<string, unknown>;
}

interface Window {
  plausible: PlausibleFn;
}

declare var plausible: PlausibleFn;
