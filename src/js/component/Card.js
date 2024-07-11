import React, { useContext } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";




export const Card = ({ name, uid, type, typeImg }) => {
    const { actions } = useContext(Context);

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card h-100 me-5" style={{ width: "18rem" }}>
                    <img src={`https://starwars-visualguide.com/assets/img/${typeImg}/${uid}.jpg`} className="img img-thumbnail" style={{ width: "18rem" }} alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <Link className="btn btn-outline-primary float-start" to={`/details/${type}/${uid}`}>
                            Learn more!
                        </Link>
                        <button className="btn btn-outline-warning float-end" onClick={() => actions.addFavourites(name)}><FaRegHeart /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}