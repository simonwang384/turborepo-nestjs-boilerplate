import { defineConfig } from 'vite'
import { VitePluginNode } from 'vite-plugin-node'

export default defineConfig({
	build: {
		ssr: true,
		outDir: './dist',
	},
	plugins: [
		...VitePluginNode({
			adapter: 'nest',
			appPath: './src/main.ts',
			tsCompiler: 'swc',
			outputFormat: 'esm',
			initAppOnBoot: true,
			reloadAppOnFileChange: true,
			swcOptions: {
				minify: false,
			},
		}),
	],
	server: {
		port: 3000,
		watch: {
			usePolling: true,
		},
	},
})
