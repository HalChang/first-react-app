import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import "../styles/notfound.css";

export default function NotFound() {
	return (
		<div className="notfound">
			<h1>
				<FontAwesomeIcon
					icon={faTriangleExclamation}
					className="notfound_icon"
				/>
				404 - 找不到頁面
			</h1>
			<p>抱歉，你找的頁面不存在。</p>
			<Link to="/">回首頁</Link>
		</div>
	);
}
