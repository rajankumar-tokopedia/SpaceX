import React from "react";
import './common.css';

const Footer = () => (
    <footer>
        <h2>
            <span className="bold">Developed by: </span>Rajan Kumar
        </h2>
    </footer>
);

const Header = () => (
    <header>
        <h1>SpaceX Launch Programs</h1>
    </header>
);

const FilterOption = (props) => {
    return (<span key={props.key} className={`filter-item ${props.isActive ? "active" : null}`} onClick={props.onClick}>
        {props.title}
    </span>);

};
const ClearChips = (props) => (
    <p className="clear-filter" onClick={props.onClick}>
       Clear Filter X
    </p>
);

export {
    Footer,
    Header,
    FilterOption,
    ClearChips
};
