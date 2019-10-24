import React from 'react';
import './Footer.scss';

export default function () {
    let year = new Date().getFullYear();
    return (
        <div className="Footer">
            <span>All rights reserved @ {year} Nehemie</span>
        </div>
    );
}