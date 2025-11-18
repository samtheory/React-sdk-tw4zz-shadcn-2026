import { useAuthStore } from '@/features/auth/model/auth.store'
import { Button } from '../ui/button'
import { Moon, LogOut } from 'lucide-react'
import { useRouter } from '@tanstack/react-router'

export default function LogoutBtn() {
	const token = useAuthStore((s) => s.token)
	const clearAuth = useAuthStore((s) => s.clearAuth)
	const router = useRouter()
	const handleLogout = () => {
		clearAuth()
		router.navigate({ to: '/login' })
	}
	return (
		<>
			{token && (
				<Button
					className="relative flex justify-center items-center"
					variant="outline"
					size="icon"
					aria-label="Submit"
					onClick={() => {
						handleLogout()
					}}
				>
					<LogOut className=" absolute h-[1.2rem] w-[1.2rem]  text-red-500 " />
				</Button>
			)}
		</>
	)
}
