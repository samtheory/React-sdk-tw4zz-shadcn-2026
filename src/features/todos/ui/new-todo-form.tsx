import { FormEvent } from 'react'
import { useState } from 'react'
import { useCreateTodoMutation } from '../model/todos.queries'
import type { ApiError } from '@/lib/http-client/api-error'

export function NewTodoForm() {
	const [title, setTitle] = useState('')
	const {
		mutate,
		isPending, // v5
		isError,
		error,
	} = useCreateTodoMutation()

	function handleSubmit(e: FormEvent) {
		e.preventDefault()
		if (!title.trim()) return

		mutate(
			{ title: title.trim() },
			{
				onSuccess: () => {
					setTitle('')
				},
			},
		)
	}

	const apiError = isError ? (error as ApiError) : null

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
			<input
				className="border rounded px-3 py-2"
				placeholder="New todo title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				disabled={isPending}
			/>

			<button
				type="submit"
				disabled={isPending || !title.trim()}
				className="rounded bg-blue-600 text-white px-3 py-2 disabled:opacity-50"
			>
				{isPending ? 'Saving...' : 'Add Todo'}
			</button>

			{apiError && (
				<p className="text-xs text-red-600 mt-1">Failed to create todo: {apiError.message}</p>
			)}
		</form>
	)
}
