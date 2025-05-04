import { Routes, Route } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
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
	const [showGoTop, setShowGoTop] = useState(false);
	const goTopRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 150) {
				setShowGoTop(true);
			} else {
				setShowGoTop(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

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
			<div
				ref={goTopRef}
				className={`goTopWrapper${showGoTop ? " show" : ""}`}
				onClick={scrollToTop}
			>
				<div className="gotop_link">
					<button className="gotop_link_btn">
						<FontAwesomeIcon icon={faAngleUp} className="gotop_link_icon" />
					</button>
				</div>
			</div>
		</>
	);
}
