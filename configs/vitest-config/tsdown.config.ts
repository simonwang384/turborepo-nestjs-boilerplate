import { defineConfig } from 'tsdown'

export default defineConfig({
	entry: ['./src/index.ts', './src/base.ts', './src/nest.ts'],
	format: ['esm', 'cjs'],
	deps: {
		skipNodeModulesBundle: true,
	},
	dts: {
		resolver: 'oxc',
	},
})
