import React, { useState, useEffect } from "react";
import './sidebar.css'
import FilterGroup from "../../molecules/filter";
import utils from "../../../utils/utils";
import constants from "../../../constants"

export default function Index(props) {
    const [yearFilter, setYearFilter] = useState(null);
    const [launchSuccessFilter, setLaunchSuccessFilter] = useState(null);
    const [landSuccessFilter, setLandSuccessFilter] = useState(null);



    useEffect(() => {
        const searchString = utils.createSearchString(
            yearFilter,
            launchSuccessFilter,
            landSuccessFilter
        );
        props.updateSearchString(searchString);
    }, [yearFilter, launchSuccessFilter, landSuccessFilter]);

    return (
        <div className="sidebar-col">
            <aside>
                <h1>Filters</h1>
                <FilterGroup
                    filterName="Launch Year"
                    filterValue={yearFilter}
                    setFilter={setYearFilter}
                    filterOptions={constants.LAUNCH_YEARS_OPTIONS}
                />
                <FilterGroup
                    filterName="Launch Status"
                    filterValue={launchSuccessFilter}
                    setFilter={setLaunchSuccessFilter}
                    filterOptions={constants.LAUNCH_STATUS_OPTIONS}
                />
                <FilterGroup
                    filterName="Landed Status"
                    filterValue={landSuccessFilter}
                    setFilter={setLandSuccessFilter}
                    filterOptions={constants.LANDING_STATUS_OPTIONS}
                />
            </aside>
        </div>
    );
}
