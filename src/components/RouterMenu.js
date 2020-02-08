import React from 'react';import {
    Link
} from 'react-router-dom';

function RouterMenu() {
    return (
        <div className="menu">
            <ul>
                <li>
                    <Link to="tabs">Tabs</Link>
                </li>
                <li>
                    <Link to="form">Form</Link>
                </li>
                <li>
                    <Link to="scroller">Scroll</Link>
                </li>
            </ul>
        </div>
    );
}

export default RouterMenu;
