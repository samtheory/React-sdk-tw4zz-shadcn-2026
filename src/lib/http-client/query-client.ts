import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query'
import { toApiError } from './api-error'

// Example: replace with your real toast or logger
function showErrorToast(message: string) {
	// e.g. use your shadcn toast here
	// toast({ variant: "destructive", title: "Error", description: message })
	console.error('[API ERROR]', message)
}

function handleApiError(error: unknown) {
	const apiError = toApiError(error)

	// You can handle specific codes / statuses here
	if (apiError.status === 401) {
		// maybe trigger logout or redirect in a central place
		// e.g. clear auth store, navigate to /login, etc.
	}

	showErrorToast(apiError.message)
}

export const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error) => {
			handleApiError(error)
		},
	}),
	mutationCache: new MutationCache({
		onError: (error) => {
			handleApiError(error)
		},
	}),
	defaultOptions: {
		queries: {
			retry: 1,
			refetchOnWindowFocus: false,
			staleTime: 60_000, // 1 minute
		},
		mutations: {
			retry: 0,
		},
	},
})
