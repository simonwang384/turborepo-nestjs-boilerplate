import { describe, expect, it } from 'vitest'

import { routeTree } from './routeTree.gen'

describe('routeTree.gen', () => {
	it('should generate route tree from file structure', () => {
		// Assert
		expect(routeTree).toBeDefined()
		expect(routeTree.children).toBeDefined()
	})

	it('should include all expected routes', () => {
		// Arrange
		const getAllRoutePaths = (tree: any, paths: string[] = []): string[] => {
			if (tree.path) {
				paths.push(tree.path)
			}
			if (tree.children) {
				tree.children.forEach((child: any) => {
					getAllRoutePaths(child.options, paths)
				})
			}
			return paths
		}

		// Act
		const routePaths = getAllRoutePaths(routeTree)

		// Assert
		expect(routePaths).toContain('/')
		expect(routePaths).toContain('/about')
	})
})
