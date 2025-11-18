import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider";
import DevPanelProvider from "./components/custom/Devpanel.tsx";
import {
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";

// Import the generated route tree (created by the plugin)
import { routeTree } from "./routeTree.gen";
// Create router instance
const router = createRouter({ routeTree });

// Register type for TS
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<DevPanelProvider Active={true}>
			 <RouterProvider router={router} />
				{/*<App />*/}
			</DevPanelProvider>
		</ThemeProvider>
	</StrictMode>,
);
