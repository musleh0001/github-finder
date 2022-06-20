import energy from "../../assets/energy.png";

const Footer = () => {
	const footerYear = new Date().getFullYear();
	return (
		<footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
			<img src={energy} alt="footer" className="w-12" />
			<p>Copyright &copy; {footerYear} All rights reserved</p>
		</footer>
	);
};

export default Footer;
