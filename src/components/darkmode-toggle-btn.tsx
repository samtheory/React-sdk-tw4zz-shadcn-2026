import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	function toggleTheme() {
		setTheme(theme === "dark" ? "light" : "dark");
	}

	return (
		<Button
			className="relative flex justify-center items-center"
			variant="outline"
			size="icon"
			aria-label="Submit"
			onClick={() => {
				toggleTheme();
			}}
		>
			<Moon className=" absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0  dark:-rotate-90 text-shadow-black" />
			<Sun className=" absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-blue-100" />
			{/*{theme === "dark" ? (
				<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0  dark:-rotate-90 text-red-400" />
			) : (
			)}*/}
		</Button>
		// <DropdownMenu>
		//   <DropdownMenuTrigger asChild>
		//     <Button variant="outline" size="icon">
		//       <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
		//       <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
		//       <span className="sr-only">Toggle theme</span>
		//     </Button>
		//   </DropdownMenuTrigger>
		//   <DropdownMenuContent align="end">
		//     <DropdownMenuItem onClick={() => setTheme("light")}>
		//       Light
		//     </DropdownMenuItem>
		//     <DropdownMenuItem onClick={() => setTheme("dark")}>
		//       Dark
		//     </DropdownMenuItem>
		//     <DropdownMenuItem onClick={() => setTheme("system")}>
		//       System
		//     </DropdownMenuItem>
		//   </DropdownMenuContent>
		// </DropdownMenu>
	);
}
