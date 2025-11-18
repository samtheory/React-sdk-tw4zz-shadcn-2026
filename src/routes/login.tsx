// src/routes/login.tsx
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useState } from 'react'
import { useAuthStore } from '@/features/auth/model/auth.store'
import { redirectIfAuthenticated } from '@/features/auth/model/auth-guard';

export const Route = createFileRoute('/login')({
	validateSearch: (search: { redirect?: string }) => search,
	// 👇 block login page if token exists
  beforeLoad: ({ search }) => {
    // if user already logged in, send them to redirect or home
    redirectIfAuthenticated({ redirectTo: search.redirect ?? "/" });
  },
	component: LoginPage,
})

function LoginPage() {
	const router = useRouter()
	const setToken = useAuthStore((s) => s.setToken)

	// read ?redirect= from URL; default to "/"
	const { redirect } = Route.useSearch()
	const [loading, setLoading] = useState(false)

	async function handleLogin(e: React.FormEvent) {
		e.preventDefault()
		setLoading(true)

		try {
			// TODO: replace with real API call:
			// const res = await axios.post("/login", credentials);
			// setToken(res.data.token);

			// demo only:
			await new Promise((r) => setTimeout(r, 500))
			setToken('fake-jwt-token')

			// navigate to original destination or home
			router.navigate({
				to: redirect ?? '/',
			})
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="flex min-h-screen items-center justify-center">
			<form onSubmit={handleLogin} className="w-full max-w-sm space-y-4 border rounded-lg p-6">
				<h1 className="text-xl font-semibold text-center">Login</h1>

				{/* Replace these with your RHF + shadcn fields */}
				<input type="text" placeholder="Username" className="w-full border rounded px-3 py-2" />
				<input type="password" placeholder="Password" className="w-full border rounded px-3 py-2" />

				<button
					type="submit"
					disabled={loading}
					className="w-full rounded bg-black text-white py-2 disabled:opacity-50"
				>
					{loading ? 'Logging in...' : 'Login'}
				</button>

				{redirect && (
					<p className="text-xs text-muted-foreground text-center">
						You will be redirected to <code>{redirect}</code> after login.
					</p>
				)}
			</form>
		</div>
	)
}
