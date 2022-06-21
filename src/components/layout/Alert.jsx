import React, { useContext } from "react";

import AlertContext from "../../context/alert/AlertContext";
import close from "../../assets/close.png";

const Alert = () => {
	const { alert } = useContext(AlertContext);

	return (
		alert !== null && (
			<p className="flex items-start mb-4 space-x-2">
				{alert.type === "error" && <img className="w-6" src={close} alt="close" />}
				<p className="flex-1 text-base font-semibold leading-7 text-white">
					<strong>{alert.msg}</strong>
				</p>
			</p>
		)
	);
};

export default Alert;
