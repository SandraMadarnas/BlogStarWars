import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer text-white  mt-auto py-3 text-center">
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<Link to="https://github.com/SandraMadarnas"> Sandra Madarnas </Link>
		</p>
	</footer>
);
