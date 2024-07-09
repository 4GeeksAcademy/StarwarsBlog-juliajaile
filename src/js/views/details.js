import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PeopleDetails } from "../component/PeopleDetails";
import { PlanetsDetails } from "../component/PlanetsDetails";
import { VehiclesDetails } from "../component/VehiclesDetails";
import { FaRegHeart } from "react-icons/fa6";


export const Details = () => {
    const { actions } = useContext(Context);
    const { name, uid, type, typeImg } = useParams();

    useEffect(() => {
        actions.getDetails(uid, type);

    }, [])


    return (
        <div className="container">
            <div className="d-flex flex-row ms-5 text-center">
                <div className="me-5">
                    {type === 'people' ? <PeopleDetails /> : ''}
                    {type === 'planets' ? <PlanetsDetails /> : ''}
                    {type === 'vehicles' ? <VehiclesDetails /> : ''}
                    <Link className="btn btn-outline-primary mt-4 me-5" to={"/"}>
                        Go Back!
                    </Link>
                    <button href="#" className="btn btn-outline-warning mt-4"><FaRegHeart /></button>
                </div>
            </div>
        </div>

    )
}