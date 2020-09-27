import React from "react";
import LaunchCard from "../../molecules/launchcard/launchcard";
import './style.css'
export default function LaunchesList(props) {
    var content = props.loading ? (
        <div className="loader"></div>
    ) : (
        <div className="custom-row">
            {props.launches.length > 0 ? (
                props.launches.map((launch) => (
                    <LaunchCard key={launch.flightNumber} launch={launch} />
                ))
            ) : (
                <p className="no-launches">dang... no launches for your query...</p>
            )}
        </div>
    );
    return <div className="main-area-col ">
        {content}
    </div>
}
