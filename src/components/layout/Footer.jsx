import energy from "../../assets/energy.png";

const Footer = () => {
	const footerYear = new Date().getFullYear();
	return (
		<footer className="footer p-4 bg-gray-700 text-primary-content footer-center">
			<img src={energy} alt="footer" className="w-10" />
			<p className="-mt-12">Copyright &copy; {footerYear} All rights reserved</p>
		</footer>
	);
};

export default Footer;
