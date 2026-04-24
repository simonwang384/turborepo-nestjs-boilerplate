import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { routeTree } from './routeTree.gen'
import { theme } from './theme'

const queryClient = new QueryClient()

const router = createRouter({
	routeTree,
	scrollRestoration: true,
	context: {
		queryClient,
	},
})

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

const rootElement = document.getElementById('root') as HTMLElement
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<MantineProvider theme={theme}>
					<RouterProvider router={router} />
				</MantineProvider>
			</QueryClientProvider>
		</StrictMode>,
	)
}
