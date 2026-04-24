import { nestConfig } from '@repo/vitest-config'
import { defineConfig, mergeConfig } from 'vitest/config'

export default mergeConfig(
	nestConfig,
	defineConfig({
		test: {},
	}),
)
