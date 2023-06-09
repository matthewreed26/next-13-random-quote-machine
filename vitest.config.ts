/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  test: {
    reporters: ['verbose', 'vitest-sonar-reporter'],
    outputFile: {
      'vitest-sonar-reporter': 'target/test-results/TESTS-results-sonar.xml',
    },
    globals: true,
    logHeapUsage: true,
    minThreads: 1,
    maxThreads: 2,
    environment: 'jsdom',
    cache: false,
    include: ['__tests__/**/*.(spec|test).(ts|tsx)'],
    exclude: ['node_modules'],
    coverage: {
      all: true,
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: [
        'src/app/page.tsx',
        'src/app/layout.tsx',
        'src/app/**/*.d.ts',
        'src/components/app/**/*.tsx',
      ],
      clean: true,
      provider: 'istanbul',
      reportsDirectory: 'target/test-results/',
      reporter: [
        'html',
        'json-summary',
        'text',
        'text-summary',
        'lcov',
        'clover',
      ],
      watermarks: {
        statements: [100, 100],
        branches: [100, 100],
        functions: [100, 100],
        lines: [100, 100],
      },
    },
  },
});
