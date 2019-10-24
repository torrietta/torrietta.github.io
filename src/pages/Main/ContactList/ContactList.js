import React from 'react';
import "./ContactList.scss";
import ContactAvatar from "./ContactAvatar";
import { Link } from "react-router-dom";
import apiConfig from "./../../../apiConfig";
import { withRouter } from "react-router-dom";
import Loader from '../../../components/library/loader';

class ContactList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { contacts: [], loading: true };
    }
    /**
     * 
     * Navigates to the contact detail page
     * @param id id of the cintact to view details for
     */
    navigateToContact = (id) => {
        this.props.history.push(`/view/${id}`)
    }

    /**
     * 
     * Navigates to the edit contact page 
     * @param id
     */
    navigateToEdit = (id) => {
        this.props.history.push(`/edit/${id}`)
    }

    /**
     * Returns the http request observable 
     * of fetching the contacts 
     */
    fetchContacts = () => {
        return fetch(`${apiConfig.apiAddress}/contacts`)
    }
    /**
     * Fetch the contacts fx
     */
    deleteContact = (index) => {
        try {
            let id = this.state.contacts.splice(index, 1)[0].id;
            fetch(`${apiConfig.apiAddress}/contacts/${id}`, {
                method: "Delete"
            })
                .then(resp => {
                    this.setState({ contacts: this.state.contacts })
                })
                .catch(err => {
                    console.log("Failed to delete")
                })

        } catch (err) {

        }
    }


    componentDidMount() {
        this.fetchContacts()
            .then(resp => {
                return resp.json();
            }).then(resp => {
                if (resp instanceof Array) {
                    this.state.contacts = resp;
                    this.setState({ contacts: resp, loading: false });
                }
            });
    }
    // 
    render() {
        /**
         * Conctacts
         */

        return (
            <div>
                {/* The table section */}
                <div className="spacer-v-md"></div>
                {/*  */}
                {
                    this.state.loading ? <Loader /> :
                        this.state.contacts.length === 0 ?
                        // Show that we don't have any contacts
                            <div>
                                                <div className="spacer-v-md"/>
                                                <div className="display-2 txt-center txt-primary">No Contacts</div>
                                                <div className="spacer-v-md"/>

                            </div> :
                            // List the contacts
                            <div>
                                <table className="Phone-Table">
                                    {/*  */}
                                    <thead>
                                        <tr>
                                            <td>Name</td>
                                            <td>Phone Number</td>
                                            <td>Edit</td>
                                            <td>Delete</td>
                                        </tr>
                                    </thead>
                                    {/*  */}
                                    <tbody>
                                        {/*  */}
                                        {
                                            this.state.contacts.map((contact, index) => {
                                                return (
                                                    <tr key={contact.id}>
                                                        <td className="Clickable" onClick={this.navigateToContact.bind(this, contact.id)}>
                                                            <ContactAvatar name={contact.name} />
                                                            <span>{contact.name}</span>
                                                        </td>
                                                        <td className="Clickable">{contact.phone_number}</td>
                                                        <td>
                                                            <button onClick={this.navigateToEdit.bind(this, contact.id)} className="btn edit">
                                                                <span className="mdi mdi-pencil"></span>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button className="btn delete" onClick={this.deleteContact.bind(this, index)}>
                                                                <span className="mdi mdi-delete"></span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                            )}
                                        {/*  */}
                                    </tbody>
                                </table>
                            </div>

                }
                {/*  */}
                <div className="spacer-v-md"></div>
                {/* The add contact button */}
                <div>
                    <Link to="add" className="btn btn-md btn-primary">
                        <span className="mdi mdi-plus"></span>
                        <span>Add Contact</span>
                    </Link>

                </div>
            </div>
        )
    }
}

export default withRouter(ContactList);