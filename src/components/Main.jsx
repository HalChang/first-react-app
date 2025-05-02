import { Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/main.css";
import "../styles/sidebar.css";
import Sidebar from "./Sidebar";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

export default function Main() {
	return (
		<>
			<main className="main">
				<div className="main_container">
					<Sidebar />
					<div className="main_content">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/Store" element={<Store />} />
							<Route path="/Profile" element={<Profile />} />
							<Route path="/Settings" element={<Settings />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</main>
			<div className="gotop_link">
				<a href="_top" className="gotop_link_btn">
					<FontAwesomeIcon icon={faAngleUp} className="gotop_link_icon" />
				</a>
			</div>
		</>
	);
}
