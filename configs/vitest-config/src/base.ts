import { defineConfig } from 'vitest/config'

export const baseConfig = defineConfig({
	test: {
		coverage: {
			provider: 'v8',
			reporter: ['text'],
			enabled: true,
		},
		reporters: ['default', 'junit'],
		outputFile: {
			junit: './test-artifacts/junit.xml',
		},
	},
	plugins: [],
})
