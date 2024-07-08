import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { FaTrash } from "react-icons/fa6";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0"><img className="starWarsPic" src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" /></span>
			</Link>
			<div class="btn-group">
				<button class="btn btn-primary btn dropdown-toggle p-2 me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favourites<span class="badge text-bg-secondary ms-1">0</span>
				</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Action</a><FaTrash /></li>
				</ul>
			</div>
		</nav>
	);
};
