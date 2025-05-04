import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/reset.css";
import "./styles/index.css";
import "./styles/main.css";

import Topnav from "./components/Topnav";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Store from "./pages/Store";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			{/*  <BrowserRouter basename={import.meta.env.BASE_URL}> */}
			{/* import.meta.env 是 Vite 內建的環境變數，BASE_URL 會根據你 vite.config.js 裡 base 設定來改變 */}
			<Topnav />
			<main className="main">
				<div className="main_container">
					<Sidebar />
					<Main>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="*" element={<NotFound />} />
							<Route path="/Store" element={<Store />} />
							<Route path="/Profile" element={<Profile />} />
							<Route path="/Settings" element={<Settings />} />
						</Routes>
					</Main>
				</div>
			</main>
		</BrowserRouter>
	</StrictMode>
);
