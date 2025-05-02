import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	base: "/first-react-app/",
	plugins: [react()],
	server: {
		historyApiFallback: true, // 網址列手動輸入 /about 或 /contact 子路徑時，都不會 404 Not Found
	},
});
