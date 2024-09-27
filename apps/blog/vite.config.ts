import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevelopmentProxy,
} from "@remix-run/dev";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remixCloudflareDevelopmentProxy(),
    remix({
      future: {
        unstable_lazyRouteDiscovery: true,
        unstable_optimizeDeps: true,
        unstable_singleFetch: true,
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
    tailwindcss(),
  ],
});
