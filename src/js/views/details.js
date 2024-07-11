import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PeopleDetails } from "../component/PeopleDetails";
import { PlanetsDetails } from "../component/PlanetsDetails";
import { VehiclesDetails } from "../component/VehiclesDetails";
import "../../styles/details.css";


export const Details = () => {
    const { actions } = useContext(Context);
    const { uid, type } = useParams();

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
                    <Link className="btn btn-outline-primary goBackBtn" to={"/"}>
                        Go Back!
                    </Link>
                </div>
            </div>
        </div>

    )
}