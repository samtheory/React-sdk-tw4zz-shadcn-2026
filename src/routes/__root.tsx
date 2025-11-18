// src/routes/__root.tsx
import DevPanelProvider from '@/components/custom/Devpanel'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => {
	return (
		<>
			<DevPanelProvider Active={true}>
			{/* Simple nav – replace with your real layout later */}
			<header className="flex items-center gap-4 p-4 border-b">
				<Link to="/" className="[&.active]:font-semibold">
					Home
				</Link>
				<Link to="/login" className="[&.active]:font-semibold">
					Login
				</Link>
			</header>

			<main className="min-h-[calc(100vh-4rem)]">
				<Outlet />
			</main>

			<TanStackRouterDevtools position="bottom-right" />
			</DevPanelProvider>
		</>
	)
}

export const Route = createRootRoute({
	component: RootLayout,
})
