import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider";
import DevPanelProvider from "./components/custom/Devpanel.tsx";
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<DevPanelProvider Active={true}>
				<App />
			</DevPanelProvider>
		</ThemeProvider>
	</StrictMode>,
);
