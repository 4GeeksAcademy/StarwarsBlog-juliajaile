import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const VehiclesDetails = () => {
    const { store, actions } = useContext(Context);
    const { name, uid, type } = useParams();

    useEffect(() => {
        actions.getDetails(uid, type);

    }, [])


    return (
        <div className="container">
            <div className="d-flex flex-row">
                <div>
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} className="img img-thumbnail" style={{ width: "44rem" }} alt={name} />
                </div>
                <div>
                    <h1 className="mb-3 fw-semibold">{store.details?.properties.name}</h1>
                    <p className="mt-2 lh-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et erat velit. Aenean molestie euismod risus, bibendum fringilla lorem. Praesent pharetra nisi nec nisi porttitor, ut mattis justo efficitur. Maecenas ligula odio, rutrum eu sem non, ornare vestibulum lorem. In vitae ultrices augue. Aliquam sed ligula neque. Quisque convallis tortor vitae ante congue, nec fringilla quam eleifend.</p>
                </div>
            </div>
            <hr className="text-danger" />
            <div className="d-flex flex-row ms-5 justify-content-center">
                <div className="text-danger me-5">Name <br /> {store.details?.properties.name}</div>
                <div className="text-danger me-5">Crew <br /> {store.details?.properties.crew} </div>
                <div className="text-danger me-5">Cargo capacity <br /> {store.details?.properties.cargo_capacity}</div>
                <div className="text-danger me-5">Length <br /> {store.details?.properties.length}</div>
                <div className="text-danger me-5">Passengers <br /> {store.details?.properties.passengers}</div>
                <div className="text-danger me-5">Max atmosphering speed <br /> {store.details?.properties.max_atmosphering_speed}</div>
            </div>
        </div>

    )
}