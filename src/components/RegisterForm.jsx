import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterForm() {
	// 宣告三個 state 變數，用來儲存使用者輸入的帳號、電子郵件與密碼
	const [account, setAccount] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// 宣告兩個 state 變數，用來儲存錯誤訊息與成功訊息，供畫面顯示用
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	// 定義一個非同步函式 handleSubmit，負責處理表單提交事件
	const handleSubmit = async (e) => {
		// 阻止表單預設的重新整理頁面行為
		e.preventDefault();

		// 清除之前的錯誤與成功訊息
		setError("");
		setSuccess("");

		try {
			// 使用 fetch 發送 POST 請求到後端 PHP API，註冊使用者帳號
			const response = await fetch(
				"http://localhost/php_backend/register.php", // 後端 API 的位置
				{
					method: "POST", // 使用 POST 方法送出資料
					headers: {
						"Content-Type": "application/json", // 告訴伺服器資料格式是 JSON
					},
					// 將 JS 物件轉成 JSON 字串
					body: JSON.stringify({
						// 將帳號、信箱、密碼封裝成 JSON 字串送出
						username: account,
						email: email,
						password: password,
					}),
				}
			);

			// 接收伺服器回傳的純文字內容
			const text = await response.text();

			// 宣告一個空物件，用以接收回傳的內容
			let result = {};
			try {
				// 嘗試將回傳的文字轉換為 JSON 物件
				result = JSON.parse(text);
			} catch {
				// 如果轉換失敗，說明伺服器回傳的不是合法 JSON，顯示錯誤訊息並結束函式
				setError("伺服器回傳格式錯誤：" + text);
				return;
			}

			// 根據伺服器回傳的結果顯示成功或錯誤訊息
			if (result.success) {
				setSuccess("註冊成功！現在可以登入了"); // 註冊成功
			} else {
				setError(result.message || "註冊失敗"); // 顯示伺服器提供的錯誤訊息，或預設錯誤訊息
			}
		} catch (err) {
			// 如果請求過程中發生錯誤（例如無法連線），顯示錯誤訊息
			setError("連線錯誤：" + err.message);
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

			<label htmlFor="email">信箱</label>
			<input
				type="email"
				id="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
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
					<input type="checkbox" id="policy" name="policy" required />
					我已閱讀並同意
					<Link to="#" className="agree">
						會員服務條款與隱私政策
					</Link>
				</label>
			</div>

			<button type="submit" className="btn_submit">
				<span>註</span>
				<span>冊</span>
			</button>

			{error && <p className="result_text text_fail">{error}</p>}
			{success && <p className="result_text text_success">{success}</p>}
		</form>
	);
}
