import React from 'react';
import "./ContactDetails.scss";
import ContactAvatar from "./../ContactList/ContactAvatar";
import { Link } from "react-router-dom";
import apiConfig from "./../../../apiConfig";
import Loader from '../../../components/library/loader';
class ContactList extends React.Component {

    /**
     * Returns the contacts in the http request
     */
    fetchContact = () => {
        return fetch(`${apiConfig.apiAddress}/contacts/${this.props.match.params.id}`)
    }

    componentWillMount() {
        this.setState({ contact: {}, isLoading: true });
        this.fetchContact()
            .then(resp => {
                return resp.json()
            }).then(resp => {
                this.contact = resp;
                this.setState({ contact: resp, isLoading: false });
            });
    }

    /**
     * 
     * 
     */
    render() {
        /**
         * Conctacts
         */
        return (
            <div className="ContactList">
                {/* Top section  */}
                {/* Go back */}
                <div className="ContactList-Top">
                    <Link to="/" className="btn btn-sm btn-light">
                        <span className="mdi mdi-24px mdi-arrow-left"></span>
                    </Link>
                </div>
                {/*  */}
                <div className="spacer-v-md"></div>
                {this.state.isLoading ? <Loader /> : <div>
                    {/*  */}
                    {/* Middle dection */}
                    <div className="ContactList-Middle">
                        {/* Left part */}
                        <div className="ContactList-Middle-L">
                            <ContactAvatar url="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200" size={200}/>
                        </div>
                        {/* Right part */}
                        <div className="ContactList-Middle-R">
                            {/*  */}
                            <div className="display-1" style={{ marginLeft: '15px', fontWeight: 'bold', textTransform: "capitalize" }}>
                                {this.contact.name}
                            </div>
                            <div className="ContactList-Middle-R-B">
                                <button className="btn"><span className="mdi mdi-message"></span></button>
                                <button className="btn"><span className="mdi mdi-phone"></span></button>
                                <button className="btn"><span className="mdi mdi-video"></span></button>
                                <button className="btn"><span className="mdi mdi-email"></span></button>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    {/* Bottom section */}
                    <div className="ContactList-Bottom">
                        {/* Phone */}
                        <div className="ContactList-Det">
                            <span className="mdi mdi-phone"></span>
                            <div className="ContactList-Det-A">
                                <div className="ContactList-Det-A-T"> {this.contact.phone_number}</div>
                                <div className="ContactList-Det-A-L">Mobile</div>
                            </div>
                        </div>
                        {/* Phone */}
                        <div className="ContactList-Det">
                            <span className="mdi mdi-home"></span>
                            <div className="ContactList-Det-A">
                                <div className="ContactList-Det-A-T">3649823 234</div>
                                <div className="ContactList-Det-A-L">Home</div>
                            </div>
                        </div>
                        {/* Phone */}
                        <div className="ContactList-Det">
                            <span className="mdi mdi-email"></span>
                            <div className="ContactList-Det-A">
                                <div className="ContactList-Det-A-T">someemail@gmail.com</div>
                                <div className="ContactList-Det-A-L">Email</div>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                    {/*  */}
                </div>}
            </div>
        )
    }
}

export default ContactList;