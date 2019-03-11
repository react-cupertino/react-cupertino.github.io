import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Sidebar.css';

function Sidebar(){
    const [visibility, setVisibility] = useState('hidden');

    function handleSidebar(){
        visibility === 'hidden' ? setVisibility("visible") : setVisibility("hidden");
    }

    return(
        <React.Fragment>
        <div className={"app-sidebar " + visibility} onClick={() => handleSidebar()}>
            <Link className="sidebar-link" to="/components/accordion">Accordion</Link>
            <Link className="sidebar-link" to="/components/alert">Alert</Link>
            <Link className="sidebar-link" to="/components/checkbox">Checkbox</Link>
            <Link className="sidebar-link" to="/components/notification">Notification</Link>
            <Link className="sidebar-link" to="/components/pull-down-button">Pull Down Button</Link>
            <Link className="sidebar-link" to="/components/push-button">Push Button</Link>
            <Link className="sidebar-link" to="/components/radio-button">Radio Button</Link>
            <Link className="sidebar-link" to="/components/slider">Slider</Link>
            <Link className="sidebar-link" to="/components/switch">Switch</Link>
            <Link className="sidebar-link" to="/components/tag">Tag</Link>
            <Link className="sidebar-link" to="/components/textbox">Textbox</Link>
        </div>
         <button className="sidebar-button"
                onClick={() => handleSidebar()}>
        icon</button>
         </React.Fragment>
    );
}

export default Sidebar;
