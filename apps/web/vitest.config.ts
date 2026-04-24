import { baseConfig } from '@repo/vitest-config'
import { playwright } from '@vitest/browser-playwright'
import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
	mergeConfig(baseConfig, viteConfig),
	defineConfig({
		test: {
			coverage: {
				include: ['src/**/*.{ts,tsx}'],
				exclude: ['main.tsx', 'theme.ts', 'vite-env.d.ts'],
			},
			setupFiles: ['./setup-tests.ts'],
			typecheck: { enabled: true },
			globals: true,
			browser: {
				enabled: true,
				provider: playwright({
					launchOptions: {
						channel: 'chromium',
					},
				}),
				headless: true,
				instances: [{ browser: 'chromium' }],
				screenshotDirectory: '.vitest-attachments/screenshots',
			},
		},
	}),
)
