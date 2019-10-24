import React from 'react';

class MainLayoutTitle extends React.Component {

    render(){
        return (
            <div>
                <span className="display-1">{this.props.title}</span>
            </div>
        )
    }
}
export default MainLayoutTitle;