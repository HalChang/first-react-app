import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginForm() {
	const [account, setAccount] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		try {
			const response = await fetch("http://localhost/php_backend/login.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: account,
					password: password,
				}),
			});

			const text = await response.text();
			let result = {};
			try {
				result = JSON.parse(text);
			} catch {
				setError("伺服器回傳無效格式：" + text);
				return;
			}

			if (result.success) {
				alert("登入成功！");
			} else {
				setError(result.message || "登入失敗");
			}
		} catch (err) {
			setError("發生錯誤：" + err.message);
		}
	};

	return (
		<form className="login_group" onSubmit={handleSubmit}>
			<label htmlFor="account">帳號</label>
			<input
				type="text"
				id="account"
				value={account}
				onChange={(e) => setAccount(e.target.value)}
				required
			/>

			<label htmlFor="password">密碼</label>
			<input
				type="password"
				id="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>

			<div className="othersGroup">
				<label>
					<input type="checkbox" id="remember" name="remember" />
					記住帳號
				</label>
				<Link to="#" className="forget_password">
					<FontAwesomeIcon icon={faQuestion} />
					<span>忘記密碼</span>
				</Link>
			</div>

			{error && <p style={{ color: "red" }}>{error}</p>}

			<button type="submit" className="btn_submit">
				<span>登</span>
				<span>入</span>
			</button>
		</form>
	);
}
