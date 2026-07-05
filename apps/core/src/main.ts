import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module.js'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	if (import.meta.env.PROD) {
		await app.listen(3000)
	} else {
		await app.init()
	}
	return app
}

// Ensure the parentheses () are present!
export const viteNodeApp = bootstrap()
