import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import PropTypes from "prop-types";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthModal({ onClose }) {
	const [activeForm, setActiveForm] = useState("login"); // 預設為登入頁面

	return (
		<div className="form_container">
			<div className="form">
				<div>
					<button type="button" className="close_btn" onClick={onClose}>
						<FontAwesomeIcon icon={faXmark} />
					</button>

					<div className="btn_group">
						<button
							type="button"
							className={`left${activeForm === "login" ? " active" : ""}`}
							onClick={() => setActiveForm("login")}
						>
							登入
						</button>
						<button
							type="button"
							className={`right${activeForm === "register" ? " active" : ""}`}
							onClick={() => setActiveForm("register")}
						>
							註冊
						</button>
					</div>

					{activeForm === "login" ? <LoginForm /> : <RegisterForm />}
				</div>
			</div>
		</div>
	);
}

AuthModal.propTypes = {
	onClose: PropTypes.func.isRequired,
};
