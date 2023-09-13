import "./Notifications.css";
import closeIcon from './close-icon.png';
import React from 'react';
import { getLatestNotification } from './utils';

function Notifications() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
            <button aria-label="Close" onClick={() => console.log("Close button has been clicked")} style={{ position: 'absolute', right: '0px', top: '0px' }}>
                <img src={closeIcon} alt="Close icon" />
            </button>
        </div>
    )
}

export default Notifications