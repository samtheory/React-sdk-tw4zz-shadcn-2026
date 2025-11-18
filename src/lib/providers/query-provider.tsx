import { queryClient } from '@/lib/http-client/query-client'
import { QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

export function QueryProvider({ children }: PropsWithChildren) {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
