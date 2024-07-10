import React from "react";
import { FaHeart } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";
import "../../styles/footer.css";

export const Footer = () => (
	<footer className="footer text-center">
		<h3 className="signature">Made with <FaHeart className="text-danger" /> by JJFlor <FaLaptopCode /></h3>
	</footer>
);
