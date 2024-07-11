import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/Card";
import SimpleBar from "simplebar-react";



export const Home = () => {
	const { store } = useContext(Context);
	const styles = {
		maxWidth: 2000,
		width: "100%",
		maxHeight: 200,
		height: "100%"
	};


	return (
		<div className="container">
			<div className="cardCointainer">
				<h1 className="text-danger">Characters</h1>
				<SimpleBar style={styles}>
					<div className="d-flex flex-row">
						{store.people?.map((person) => (<Card name={person.name} key={person.uid} type={"people"} uid={person.uid} typeImg="characters" />
						))}
					</div>
				</SimpleBar>
			</div>
			<div className="cardCointainer">
				<h1 className="text-danger">Planets</h1>
				<SimpleBar style={styles}>
					<div className="d-flex flex-row mb-3">
						{store.planets?.map((planet) => (
							<Card name={planet.name} key={planet.uid} type={"planets"} uid={planet.uid} typeImg="planets" />
						))}
					</div>
				</SimpleBar>
			</div>
			<div className="cardCointainerVehicles">
				<h1 className="text-danger">Vehicles</h1>
				<SimpleBar style={styles}>
					<div className="d-flex flex-row mb-3">
						{store.vehicles?.map((vehicle) => (
							<Card name={vehicle.name} key={vehicle.uid} type={"vehicles"} uid={vehicle.uid} typeImg="vehicles" />
						))}
					</div>
				</SimpleBar>
			</div>
		</div>
	)
};
