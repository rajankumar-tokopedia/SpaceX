import React from "react";
import "./launchCard.css";

export default function LaunchCard(props) {
    const { launch } = props;
    return (
        <div className="launch-card">
            <div className="card">
                <img
                    className="card-img-top mission-patch"
                    src={launch.missionPatch }
                    alt="launch avatar"
                />
                <div className="card-body">
                    <h5 className="card-title mission-name color-blue">{`${launch.missionName} #${launch.flightNumber}`}</h5>
                    <p className="detail bold">Mission Ids:</p>
                    <ul>
                        {launch.missionId.map((id) => (
                            <li className="color-blue" key={id}>
                                {id}
                            </li>
                        ))}
                    </ul>
                    <p>
                        <span className="detail bold">Launch Year: </span>
                        <span className="color-blue">{launch.launchYear}</span>
                    </p>
                    <p>
                        <span className="detail bold">Successful Launch: </span>
                        <span className="color-blue">
              {launch.launchSuccess ? "True" : "false"}
            </span>
                    </p>
                    <p>
                        <span className="detail bold">Sucessfull Landing: </span>
                        <span className="color-blue">
              {launch.landSuccess ? "True" : "false"}
            </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
