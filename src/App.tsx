import { useState } from "react";

import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/darkmode-toggle-btn";
import DevPanelProvider from "./components/custom/Devpanel";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<main>
				<div className="flex min-h-svh flex-col items-center justify-center">
				
					<ModeToggle />
					<Button>Click me</Button>
				</div>
			</main>
		</>
	);
}

export default App;
