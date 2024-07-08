import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/Card";
import SimpleBar from "simplebar-react";



export const Home = () => {
	const { store, actions } = useContext(Context);
	const styles = {
		maxWidth: 2000,
		width: "100%",
		maxHeight: 200,
		height: "100%"
	};


	return (
		<div className="container">
			<div className="mb-5">
				<h1 className="text-danger">Characters</h1>
				<SimpleBar style={styles}>
					<div className="d-flex flex-row">
						{store.people?.map((person) => (
							<Card name={person.name} key={person.uid} type={"person"} id={person.uid} />
						))}
					</div>
				</SimpleBar>
			</div>
			<div className="mb-5">
				<h1 className="text-danger">Planets</h1>
				<SimpleBar style={styles}>
					<div className="d-flex flex-row mb-3">
						{store.planets?.map((planet) => (
							<Card name={planet.name} key={planet.uid} type={"planet"} id={planet.uid} />
						))}
					</div>
				</SimpleBar>
			</div>
			<div className="mb-5">
				<h1 className="text-danger">Vehicles</h1>
				<SimpleBar style={styles}>
					<div className="d-flex flex-row mb-3">
						{store.vehicles?.map((vehicle) => (
							<Card name={vehicle.name} key={vehicle.uid} type={"vehicle"} id={vehicle.uid} />
						))}
					</div>
				</SimpleBar>
			</div>
		</div>
	)
};
