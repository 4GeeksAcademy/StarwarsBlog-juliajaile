import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const PeopleDetails = () => {
    const { store, actions } = useContext(Context);
    const { name, uid, type } = useParams();

    useEffect(() => {
        actions.getDetails(uid, type);

    }, [])


    return (
        <div className="container">
            <div className="d-flex flex-row">
                <div>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="img img-thumbnail" style={{ width: "44rem" }} alt={name} />
                </div>
                <div>
                    <h1 className="mb-3 fw-semibold">{store.details?.properties.name}</h1>
                    <p className="mt-2 lh-lg text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et erat velit. Aenean molestie euismod risus, bibendum fringilla lorem. Praesent pharetra nisi nec nisi porttitor, ut mattis justo efficitur. Maecenas ligula odio, rutrum eu sem non, ornare vestibulum lorem. In vitae ultrices augue. Aliquam sed ligula neque. Quisque convallis tortor vitae ante congue, nec fringilla quam eleifend.</p>
                </div>
            </div>
            <hr className="text-danger" />
            <div className="d-flex flex-row ms-5 justify-content-center">
                <div className="text-danger me-5"><strong>Name</strong> <br /> {store.details?.properties.name}</div>
                <div className="text-danger me-5"><strong>Birth Year</strong> <br /> {store.details?.properties.birth_year} </div>
                <div className="text-danger me-5"><strong>Gender</strong> <br /> {store.details?.properties.gender}</div>
                <div className="text-danger me-5"><strong>Height</strong> <br /> {store.details?.properties.height}</div>
                <div className="text-danger me-5"><strong>Skin Color</strong> <br /> {store.details?.properties.skin_color}</div>
                <div className="text-danger me-5"><strong>Eye Color</strong> <br /> {store.details?.properties.eye_color}</div>
            </div>
        </div>

    )
}