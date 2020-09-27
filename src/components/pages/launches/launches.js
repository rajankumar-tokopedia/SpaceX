import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import upstream from "../../../upstream";
import LaunchesList from "../../organisms/launchcardlist/launchcardlist";
import Index from "../../organisms/sidebar";
import {Footer,Header} from "../../atoms";
import './launches.css'

export default function Launches() {
    const [launches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        const fetchFromUpstream = async () => {
            const res = await upstream.getLaunchList(location.search)
            setLaunches(res);
            setLoading(false);
        }
        fetchFromUpstream()
    }, [location.search]);

    const handleUpdateSearchString = (searchString) => {
        setLoading(true);
        history.push(searchString);
    };

    return (
        <div className="custom-container home">
            <div className="custom-row max-width-xl">
                <Header />
            </div>
            <div className="custom-row max-width-xl">
                <Index updateSearchString={handleUpdateSearchString} />
                <LaunchesList loading={loading} launches={launches} />
            </div>
            <div className="custom-row max-width-xl">
                <Footer />
            </div>
        </div>
    );
}
