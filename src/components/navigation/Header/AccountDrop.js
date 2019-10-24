import React from 'react';

class AccountDrop extends React.Component {
    render() {
        return (
            <div>
                <button className="Drop">
                    {/* Image */}
                    {/* <img /> */}
                    <span className="txt-primary Account-Image mdi mdi-36px mdi-account-circle"></span>
                    <div className="Name">{this.props.account.name}</div>
                    <span className="Carret mdi mdi-24px mdi-chevron-down"></span>
                </button>
            </div>
        )
    }
}
export default AccountDrop;