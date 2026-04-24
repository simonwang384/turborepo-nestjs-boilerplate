import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router'
import type React from 'react'
import { type RenderOptions, render } from 'vitest-browser-react'

import { routeTree } from '../src/routeTree.gen'

export function createTestRouterFromFiles(initialLocation = '/') {
	const queryClient = new QueryClient()
	const router = createRouter({
		routeTree,
		history: createMemoryHistory({
			initialEntries: [initialLocation],
		}),
		context: {
			queryClient,
		},
	})

	return router
}

interface RenderWithFileRoutesOptions extends Omit<RenderOptions, 'wrapper'> {
	initialLocation?: string
	routerContext?: any
}

export async function renderWithFileRoutes(
	ui: React.ReactElement,
	{ initialLocation = '/', routerContext = {}, ...renderOptions }: RenderWithFileRoutesOptions = {},
) {
	const queryClient = new QueryClient()
	const router = createRouter({
		routeTree,
		history: createMemoryHistory({
			initialEntries: [initialLocation],
		}),
		context: {
			queryClient,
			...routerContext,
		},
	})

	function Wrapper() {
		return (
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		)
	}

	return {
		...(await render(ui, { wrapper: Wrapper, ...renderOptions })),
		router,
	}
}

export function createMockFileRoute(path: string, component: React.ComponentType) {
	return {
		path,
		component,
	}
}
