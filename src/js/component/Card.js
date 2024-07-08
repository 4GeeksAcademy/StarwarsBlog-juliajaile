import React, { useContext } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({ name, uid, type }) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card h-100 me-5" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>Gender:{store.details?.properties.gender}</p>
                        <p>Hair Color:{store.details?.properties.hair_color}</p>
                        <p>Eye-color:{store.details?.properties.eye_color}</p>
                        <Link className="btn btn-outline-primary float-start" to={`/nueva/${type}/${uid}`}>
                            Learn more!
                        </Link>
                        <button href="#" className="btn btn-outline-warning float-end"><FaRegHeart /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}