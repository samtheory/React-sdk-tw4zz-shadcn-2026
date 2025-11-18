import { ModeToggle } from '../darkmode-toggle-btn'
import LogoutBtn from './logout'

export default function DevPanelProvider({
	children,
	Active = false,
}: Readonly<{
	children: React.ReactNode
	Active: boolean
}>) {
	return (
		<>
			{Active ? (
				<section className="">
					<div className="flex w-full  bg-zinc-100  py-0.5  dark:bg-zinc-900 border-b  border-zinc-300  dark:border-zinc-700 ">
						<div className="flex flex-row justify-center scale-80 items-center gap-2 mx-auto max-w-[1400px]">
							<ModeToggle />
							<LogoutBtn />
						</div>
					</div>
					{children}
				</section>
			) : (
				<>{children}</>
			)}
		</>
	)
}
