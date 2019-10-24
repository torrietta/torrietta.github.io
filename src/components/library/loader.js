import React from "react";
import "./loader.scss";
export default function Loader() {
    return (
        <div className="Loader">
            <div>
                {/*  */}
                {/* The codes about this Spinner or loader both html and css*/}
                {/* Were authored  by @tobiasahlin with ❤ */}
                {/* The link to the online reference is https://tobiasahlin.com/spinkit/ */}
                <div className="sk-fading-circle">
                    <div className="sk-circle1 sk-circle"></div>
                    <div className="sk-circle2 sk-circle"></div>
                    <div className="sk-circle3 sk-circle"></div>
                    <div className="sk-circle4 sk-circle"></div>
                    <div className="sk-circle5 sk-circle"></div>
                    <div className="sk-circle6 sk-circle"></div>
                    <div className="sk-circle7 sk-circle"></div>
                    <div className="sk-circle8 sk-circle"></div>
                    <div className="sk-circle9 sk-circle"></div>
                    <div className="sk-circle10 sk-circle"></div>
                    <div className="sk-circle11 sk-circle"></div>
                    <div className="sk-circle12 sk-circle"></div>
                </div>
                {/*  */}
                <div className="Loader-Txt">
                    Loading ...
                   </div>
            </div>
        </div>
    )
}