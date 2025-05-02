import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export default function LoginForm({ onClose }) {
	return (
		<div className="form_container">
			<div className="form">
				<button className="close_btn" onClick={onClose}>
					<FontAwesomeIcon icon={faXmark} />
				</button>
				<div className="btn_group">
					<button className="left active">登入</button>
					<button className="right">註冊</button>
				</div>
				<div className="login_group">
					<label htmlFor="account">帳號：</label>
					<input type="text" id="account" />
					<label htmlFor="password">密碼：</label>
					<input type="password" id="password" />
					<Link to="#" className="forget_password">
						忘記密碼？
					</Link>
					<button className="btn_login">登入</button>
				</div>
			</div>
		</div>
	);
}

LoginForm.propTypes = {
	onClose: PropTypes.func.isRequired,
};
