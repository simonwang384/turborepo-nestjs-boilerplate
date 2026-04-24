import { describe, expect, it } from 'vitest'

import { renderWithFileRoutes } from '../../test/file-route-utils'

describe('About', () => {
	it('should render route component', async () => {
		// Arrange & Act
		const render = await renderWithFileRoutes(<div />, {
			initialLocation: '/about',
		})

		// Assert
		await expect.element(render.getByText('Hello from About!')).toBeInTheDocument()
	})
})
