import { Swiper, SwiperSlide } from "swiper/react";
import {
	Autoplay,
	Pagination,
	Navigation,
	Thumbs,
	EffectCoverflow,
} from "swiper/modules";

import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";

import "../styles/home.css";

import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.jpg";
import img3 from "../assets/images/image3.png";

export default function Home() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className="home">
			<Swiper
				modules={[Navigation, Pagination, Autoplay, Thumbs, EffectCoverflow]} // 必須，指定使用的功能模組
				thumbs={{ swiper: thumbsSwiper }} // 綁定下方縮圖控制主輪播的狀態變數。
				spaceBetween={30}
				centeredSlides={true}
				effect="coverflow"
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 1000,
					modifier: 1,
					slideShadows: true,
				}}
				autoplay={{
					delay: 5000, // 每 5 秒自動切換
					disableOnInteraction: false, // 使用者互動後是否停止
				}}
				speed={1000} // 切換動畫速度（毫秒）
				pagination={{
					clickable: true, // 分頁點點可以點擊
				}}
				navigation={true} // 上下頁按鈕
				className="main-swiper"
			>
				<SwiperSlide>
					<img src={img1} alt="First slide" />
					<div className="slide-caption">
						<h3>First slide</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img src={img2} alt="Second slide" />
					<div className="slide-caption">
						<h3>Second slide</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img src={img3} alt="Third slide" />
					<div className="slide-caption">
						<h3>Third slide</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
			<Swiper
				modules={[Thumbs]} // 指定使用縮圖功能模組
				onSwiper={setThumbsSwiper} // 點擊縮圖時，setThumbsSwiper 更新上方的 thumbsSwiper 狀態變數
				slidesPerView={3} // 顯示 3 張縮圖
				spaceBetween={10} // 間距 10 px
				freeMode={true} // 可以自由滑動，不強制一頁一頁滑動
				watchSlidesProgress={true} // 監控目前滑動進度（Thumbs 必須）
				className="thumbs-swiper"
			>
				<SwiperSlide>
					<img src={img1} alt="Thumb 1" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img2} alt="Thumb 2" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img3} alt="Thumb 3" />
				</SwiperSlide>
			</Swiper>

			<div className="dividing_line"></div>

			<div className="home_container">
				<div className="">
					<div className="home_heading">我的主頁</div>
					<div className="home_content">
						<p>慢慢更新中...</p>
						<p>找工作中...</p>
					</div>
				</div>
			</div>
		</div>
	);
}
