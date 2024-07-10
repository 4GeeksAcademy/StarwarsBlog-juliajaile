import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { FaTrash } from "react-icons/fa6";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const handleDeleteFav = (uid) => {
		const newFavs = [...store.favourites]
		newFavs.splice(uid, 1);
		setFavourites(newFavs);
	}
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0"><img className="starWarsPic" src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" /></span>
			</Link>
			<div className="btn-group">
				<button className="btn btn-primary btn dropdown-toggle p-2 me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favourites<span className="badge text-bg-secondary ms-1">{(number) => store.favourites.length() ? number = store.favourites.length() : " "}</span>
				</button>
				<ul className="dropdown-menu">
					{store.favourites?.map((favourites) => (
						<li key={favourites.uid}>
							{store.favourites}
							<button className="closing-btn" onClick={() => handleDeleteFav(uid)}><FaTrash /></button>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
