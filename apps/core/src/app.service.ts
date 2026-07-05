import { Injectable } from '@nestjs/common'
import { isEmpty } from '@repo/utils'

@Injectable()
export class AppService {
	getHello(): string {
		isEmpty('testing5')
		return 'Hello World!'
	}
}
