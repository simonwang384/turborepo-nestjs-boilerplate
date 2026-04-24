import { defineConfig, mergeConfig } from 'vitest/config'

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { baseConfig } from './base.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const nestConfig = mergeConfig(
	baseConfig,
	defineConfig({
		test: {
			coverage: {
				include: ['src/**/*.ts'],
				exclude: [
					'dist',
					'index.ts',
					'main.ts',
					'migrations',
					'**/*.d.ts',
					'**/*.module.ts',
					'**/*.config.ts',
					'**/*.entity.ts',
					'**/*.model.ts',
					'**/*.resource.ts',
					'**/*.response.ts',
					'**/*.interface.ts',
					'**/*.resources.ts',
					'**/*.responses.ts',
					'**/*.exception.ts',
				],
			},
			globals: true,
			root: './',
		},
		resolve: {
			alias: {
				src: path.resolve(__dirname, './src'),
			},
		},
	}),
)
