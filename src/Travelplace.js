import React from "react"

function TravelPlace(props){
    return(
        <div className="travel-place">
            <div className="image-position"><img src={props.imageUrl}/></div>
            <div className="main-text">
                <div className="top">
                    <div>{props.location}</div>
                    <a href={props.googleMapsUrl}>location on map</a>
                </div>
                <h1>{props.title}</h1>
                <div className="date">{props.startDate} - {props.endDate}</div>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default TravelPlace