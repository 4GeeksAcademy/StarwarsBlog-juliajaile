import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const PlanetsDetails = () => {
    const { store, actions } = useContext(Context);
    const { name, uid, type} = useParams();

    useEffect(() => {
        actions.getDetails(uid, type);

    }, [])


    return (
        <div className="container">
            <div className="d-flex flex-row">
                <div>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} className="img img-thumbnail" style={{ width: "44rem" }} alt={name} />
                </div>
                <div>
                    <h1 className="mb-3 fw-semibold">{store.details?.properties.name}</h1>
                    <p className="mt-2 lh-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et erat velit. Aenean molestie euismod risus, bibendum fringilla lorem. Praesent pharetra nisi nec nisi porttitor, ut mattis justo efficitur. Maecenas ligula odio, rutrum eu sem non, ornare vestibulum lorem. In vitae ultrices augue. Aliquam sed ligula neque. Quisque convallis tortor vitae ante congue, nec fringilla quam eleifend.</p>
                </div>
            </div>
            <hr className="text-danger" />
            <div className="d-flex flex-row ms-5 justify-content-center">
                <div className="text-danger me-5">Name <br /> {store.details?.properties.name}</div>
                <div className="text-danger me-5">Climate <br /> {store.details?.properties.climate} </div>
                <div className="text-danger me-5">Diameter <br /> {store.details?.properties.diameter}</div>
                <div className="text-danger me-5">Gravity <br /> {store.details?.properties.gravity}</div>
                <div className="text-danger me-5">Population <br /> {store.details?.properties.population}</div>
                <div className="text-danger me-5">Terrain <br /> {store.details?.properties.terrain}</div>
            </div>
        </div>

    );
}