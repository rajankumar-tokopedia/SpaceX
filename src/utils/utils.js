

function createSearchString(
    yearFilter,
    launchSuccessFilter,
    landSuccessFilter,
) {
    let string = "?";
    if ( yearFilter !== null ) {
        string += `&launch_year=${ yearFilter }`;
    }

    if ( launchSuccessFilter !== null ) {
        string += `&launch_success=${ launchSuccessFilter }`;
    }

    if ( landSuccessFilter !== null ) {
        string += `&land_success=${ landSuccessFilter }`;
    }
    return string;
}

export default { createSearchString };
