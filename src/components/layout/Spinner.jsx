import Radar from "../../assets/Radar.gif";

const Spinner = () => {
	return (
		<div className="w-100 mt-20">
			<img width="180" className="text-center mx-auto" src={Radar} alt="Loading..." />
		</div>
	);
};

export default Spinner;
