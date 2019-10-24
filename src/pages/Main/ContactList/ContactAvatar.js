import React from 'react';

export default function (props) {
    /**
     * 
     * Define style based on the passed size
     * By default the size is 50px
     */
    const style  = {
        height: props.size? `${props.size}px` : "50px",
        width: props.size? `${props.size}px` : "50px",
    }
    /**
     * 
     * @defines and
     * @returns the letters oftwo letters that form the name
     */
    const defineLetters = () => {
        let lts = "";
        props.name.split(" ")
            .forEach(word => {
                lts = lts + word.charAt(0).toUpperCase()
            })
        return lts;
    }
    /**
     * 
     * IF the url is available 
     * Provide that image
     * 
     */
    if (props.url === undefined) {
        return (
            <div className="ContactAvatar ContactAvatar-Lts" style={style}>
                <div>{defineLetters()}</div>
            </div>
        )

        /**
         * 
         * Otherwise just provide the letter based avatar
         */
    } else {
        return (
            <div className="ContactAvatar" style={style}>
                <img src={props.url} alt="" />
            </div>
        )
    }
}