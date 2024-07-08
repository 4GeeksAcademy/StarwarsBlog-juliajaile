import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Nueva = () => {
    const { store, actions } = useContext(Context);
    const { uid, type } = useParams();

    useEffect(() => {
        actions.getDetails(uid, type);

    }, [])


    return (
        <div>
            <div>
                <img src="..." className="img" style={{ width: "18rem" }} />
            </div>
            <div>
                <h1 className="mb-2 fw-semibold">{store.details?.properties.name}</h1>
                <p className="mt-2 lh-lg text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et erat velit. Aenean molestie euismod risus, bibendum fringilla lorem. Praesent pharetra nisi nec nisi porttitor, ut mattis justo efficitur. Maecenas ligula odio, rutrum eu sem non, ornare vestibulum lorem. In vitae ultrices augue. Aliquam sed ligula neque. Quisque convallis tortor vitae ante congue, nec fringilla quam eleifend.</p>
            </div>
            <hr className="text-danger" />
            <div className="d-flex flex-row align-text-middle">
                <div className="text-danger me-5">Name {store.details?.properties.name}</div>
                <div className="text-danger me-5">Birth Year {store.details?.properties.birth_year} </div>
                <div className="text-danger me-5">Gender {store.details?.properties.gender}</div>
                <div className="text-danger me-5">Height {store.details?.properties.height}</div>
                <div className="text-danger me-5">Skin Color {store.details?.properties.skin_color}</div>
                <div className="text-danger me-5">Eye Color {store.details?.properties.eye_color}</div>
            </div>
        </div>

    )
}