// src/routes/__root.tsx
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => {
	return (
		<>
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
		</>
	)
}

export const Route = createRootRoute({
	component: RootLayout,
})
