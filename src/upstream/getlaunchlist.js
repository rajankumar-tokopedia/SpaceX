
export function getLaunchList(searchString = " ") {
    return fetch( `https://api.spacexdata.com/v3/launches?limit=100&${searchString.slice(1)}` )
        .then( res => res.json( ) )
        .then( res => formatResponse(res));
}

function formatResponse( launchData ) {
    return launchData.map( ( launch ) => ( {
        missionId: launch.mission_id,
        launchYear: launch.launch_year,
        launchSuccess: launch.launch_success,
        landSuccess: launch.rocket.first_stage.cores[0].land_success,
        missionName: launch.mission_name,
        flightNumber: launch.flight_number,
        missionPatch: launch.links.mission_patch_small,
    }));
}

