import React from 'react';
import './Header.scss';
import Logo from "./../../../assets/logo.svg";
import AccountDrop from "./AccountDrop";
export default function () {
    let account = {
        name: "Admin Kahoot.it"
    }

    return (
        <div className="Header">
            <div className="Header-Containter">
                <div className="Header-Containter-H">
                    {/*Logo  */}
                    <div className="Header-Logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    {/*  */}
                    <div className="Header-Dropdown">
                        <AccountDrop account={account} />
                    </div>
                    {/*  */}
                </div>
            </div>
        </div>
    );
}