import { defineConfig } from 'vitest/config';

import angular from '@analogjs/vite-plugin-angular';

export default defineConfig(() => ({
  plugins: [angular()],
  test: {
    globals: true,
    setupFiles: ['src/test-setup.ts'],
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: {
      provider: 'v8' as const,
      reportsDirectory: './coverage/example-app',
      reporter: ['html', 'text-summary'],
    },
  },
}));
