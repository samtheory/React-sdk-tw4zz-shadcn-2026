import { createFileRoute } from '@tanstack/react-router'
import { requireAuth } from '@/features/auth/model/auth-guard'

export const Route = createFileRoute('/dashboard/')({
	beforeLoad: ({ location }) => {
		// This will throw redirect if not authenticated
		requireAuth({ location })
	},
	component: RouteComponent,
})

function RouteComponent() {
	return <div>Hello "/dashboard/"!</div>
}
