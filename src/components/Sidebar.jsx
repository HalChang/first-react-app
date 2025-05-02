import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const sidebarItems = [
	{ label: "商店", link: "/Store" },
	{ label: "個人檔案", link: "/Profile" },
	{ label: "設定", link: "/Settings" },
];

export default function Sidebar() {
	const [isCollapsed, setIsCollapsed] = useState(false);

	return (
		<div className={`sidebar${isCollapsed ? " collapsed" : ""}`}>
			<div className="sidebar_container">
				<div className="sidebar_toggle">
					<button
						className="sidebar_toggle_btn"
						onClick={() => setIsCollapsed((prev) => !prev)}
					>
						<span>
							<FontAwesomeIcon icon={faBars} />
						</span>
					</button>
				</div>
				<div className="sidebar_list">
					<ul>
						{sidebarItems.map((item, index) => (
							<li key={index} className="sidebar_list_item">
								<Link to={item.link} className="sidebar_list_link">
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
