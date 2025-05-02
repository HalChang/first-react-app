import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/store.css";

StoreCard.propTypes = {
	link: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};

StoreCategory.propTypes = {
	category: PropTypes.shape({
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
	}).isRequired,
	isActive: PropTypes.bool.isRequired,
	toggleCategory: PropTypes.func.isRequired,
};

const storeItems = [
	{ id: 1, label: "全部", link: "#" },
	{ id: 2, label: "上衣", link: "#" },
	{ id: 3, label: "褲子", link: "#" },
	{ id: 4, label: "裙子", link: "#" },
	{ id: 5, label: "外套", link: "#" },
	{ id: 6, label: "包包", link: "#" },
	{ id: 7, label: "配件", link: "#" },
];

const categories = [
	{ id: "tops", label: "上衣" },
	{ id: "pants", label: "褲子" },
];

const cardData = {
	tops: [
		{ id: Math.random(), link: "#", title: "T恤", content: "輕薄透氣" },
		{ id: Math.random(), link: "#", title: "襯衫", content: "正式穿搭" },
		{ id: Math.random(), link: "#", title: "排汗衫", content: "運動" },
		{ id: Math.random(), link: "#", title: "圓領", content: "" },
		{ id: Math.random(), link: "#", title: "V領", content: "" },
		{ id: Math.random(), link: "#", title: "毛衣", content: "" },
		{ id: Math.random(), link: "#", title: "針織上衣", content: "" },
		{ id: Math.random(), link: "#", title: "POLO衫", content: "" },
	],
	pants: [
		{ id: Math.random(), link: "#", title: "牛仔褲", content: "經典百搭" },
		{ id: Math.random(), link: "#", title: "運動短褲", content: "舒適運動" },
		{ id: Math.random(), link: "#", title: "棉褲", content: "舒適" },
		{ id: Math.random(), link: "#", title: "工裝褲", content: "經典" },
		{ id: Math.random(), link: "#", title: "束口七分褲", content: "" },
		{ id: Math.random(), link: "#", title: "透氣排汗長褲", content: "" },
		{ id: Math.random(), link: "#", title: "寬褲", content: "" },
		{ id: Math.random(), link: "#", title: "彈性牛仔褲", content: "" },
		{ id: Math.random(), link: "#", title: "直筒牛仔褲", content: "" },
		{ id: Math.random(), link: "#", title: "西裝褲", content: "" },
	],
};

function StoreCard({ link, title, content }) {
	return (
		<a href={link} className="store_card" title={title}>
			<div className="store_card_img"></div>
			<div className="store_card_title">{title}</div>
			<div className="store_card_content">{content}</div>
		</a>
	);
}

function StoreCategory({ category, isActive, toggleCategory }) {
	// 取得該分類的卡片資料，若沒找到則回傳空陣列
	const categoryCards = cardData[category.id] || [];

	return (
		<>
			<div
				className={`store_item${isActive ? " active" : ""}`}
				onClick={() => toggleCategory(category.id)}
			>
				{category.label}
			</div>
			<div className={`store_item_group${isActive ? " active" : ""}`}>
				<div>
					<div className="store_item_card">
						{categoryCards.map((card) => (
							<StoreCard
								key={card.id}
								link={card.link}
								title={card.title}
								content={card.content}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

function Store() {
	const [activeCategories, setActiveCategories] = useState(
		categories.reduce((accumulator, category) => {
			accumulator[category.id] = true; // 預設全部開啟
			return accumulator;
		}, {})
	);

	const toggle = (categoryId) => {
		setActiveCategories((prev) => ({
			...prev, // 展開舊狀態，確保其他分類的開關不變。
			[categoryId]: !prev[categoryId], // 只更新該分類，不影響其他分類
			// !prev[categoryId] 反轉該分類的開關狀態：
			// 如果 prev[categoryId] === true，則變成 false（關閉）。
			// 如果 prev[categoryId] === false（或 undefined），則變成 true（開啟）。
		}));
	};

	return (
		<div className="store">
			<header className="store_navbar">
				<nav>
					<ul>
						{storeItems.map((item) => (
							<li key={item.id} className="store_navbar_item">
								<a href={item.link} className="store_navbar_link">
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</header>
			<div className="store_item_container">
				{categories.map((category) => (
					<StoreCategory
						key={category.id}
						category={category}
						isActive={!!activeCategories[category.id]} // 確保 UI 只顯示 true/false，不會出錯。
						// !! 會將任何值轉換為 true 或 false：
						// !!true → true
						// !!false → false
						// !!undefined → false（避免 undefined 導致錯誤）
						toggleCategory={toggle}
					/>
				))}
			</div>
		</div>
	);
}

export default Store;
