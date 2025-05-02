import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const notifications = [
	{ id: 1, message: "通知訊息", time: "30分鐘前" },
	{ id: 2, message: "通知訊息", time: "1小時前" },
];

export default function NotificationPanel({ active }) {
	return (
		<div className={`notification_container${active ? " active" : ""}`}>
			<div>
				<div className="notification">
					{notifications.map((noti) => (
						<div key={noti.id} className="notification_item">
							<a href="#">
								<div className="notification_avator">
									<img src="" alt="" />
								</div>
								<div className="notification_content">
									<p>通知訊息</p>
									<small>1小時前</small>
								</div>
							</a>
							<button className="edit_btn">
								<FontAwesomeIcon icon={faEllipsisVertical} />
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

NotificationPanel.propTypes = {
	active: PropTypes.bool.isRequired,
};
