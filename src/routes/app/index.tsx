

import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/app/')({
  component: AppComponent,
})



export default function AppComponent() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1 className="text-6xl font-bold">Welcome to TanStack Router!</h1>
			<p className="text-xl text-gray-600">
				A powerful routing library for React.
			</p>
		</div>
	)
}
