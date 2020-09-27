import React from "react";
import {FilterOption,ClearChips} from "../../atoms"
export default function Index(props) {
    return (
        <div>
            <h2>{props.filterName}</h2>
            {props.filterValue !== null && (
                <ClearChips onClick={() => props.setFilter(null)}  />
            )}
            <hr />
            <div className="filters-group">
                {props.filterOptions.map((option, idx) => (
                  <FilterOption key={`filter-option-${idx}`} isActive={props.filterValue === option.value} onClick={() => props.setFilter(option.value)} title={option.label} />
                ))}
            </div>
        </div>
    );
}
