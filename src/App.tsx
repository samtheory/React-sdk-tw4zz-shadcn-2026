import { Button } from './components/ui/button'
import { ModeToggle } from './components/darkmode-toggle-btn'

function App() {
	return (
		<>
			<main>
				<div className="flex min-h-svh flex-col items-center justify-center">
					<ModeToggle />
					<Button>Click me</Button>
				</div>
			</main>
		</>
	)
}

export default App
