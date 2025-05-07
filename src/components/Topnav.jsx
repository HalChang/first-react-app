import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import "../styles/topnav.css";

import NotificationPanel from "./NotificationPanel";
import AuthModal from "./AuthModal";

const navItems = [
	{ label: "首頁", link: "/" },
	{ label: "關於", link: "/About" },
	{ label: "聯絡", link: "/Contact" },
	{ label: "測試", link: "/TestNotFound" },
];

export default function Topnav() {
	const location = useLocation();
	const [notiActive, setNotiActive] = useState(false);
	const [showAuth, setShowAuth] = useState(false);

	const isNavItemActive = (currentPath, itemLink) => {
		if (itemLink === "/") return currentPath === "/";
		return currentPath.startsWith(itemLink);
	};

	return (
		<>
			<header className="topnav">
				<div className="topnav_container">
					<div>
						<nav>
							<ul className="navbar">
								{navItems.map((item, index) => (
									<li
										key={index}
										className={`navbar_item${
											isNavItemActive(location.pathname, item.link)
												? " active"
												: ""
										}`}
									>
										<Link to={item.link} className="navbar_item_link">
											<span>{item.label}</span>
										</Link>
									</li>
								))}
							</ul>
						</nav>

						<ul className="usernav">
							<li className="usernav_item">
								<button
									className="usernav_btn"
									onClick={() => setNotiActive((prev) => !prev)}
								>
									<div className="usernav_icon icon_notification">
										<FontAwesomeIcon icon={faBell} />
									</div>
									<span className="usernav_tooltip">通知</span>
								</button>
								<NotificationPanel active={notiActive} />
							</li>
							<li className="usernav_item">
								<button
									className="usernav_btn"
									onClick={() => setShowAuth((prev) => !prev)}
								>
									<div className="usernav_icon icon_user">
										<FontAwesomeIcon icon={faUser} />
									</div>
									<span className="usernav_tooltip">使用者</span>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</header>
			{showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
		</>
	);
}
