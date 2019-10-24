import React from 'react';
import "./EditContact.scss";
import { Link } from "react-router-dom";
import apiConfig from "./../../../apiConfig";
import Loader from '../../../components/library/loader';
import { withRouter } from "react-router-dom";
class ContactList extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { contact: {}, loading: false }
    }

    /**
     * Returns the contact in the http request
     * @param id
     */
    fetchContact = (id) => {
        return fetch(`${apiConfig.apiAddress}/contacts/${id}`)
    }

    /**
     * 
     * 
     */
    componentDidMount() {
        if (this.isEdit) {
            this.setState({ contacts: {}, loading: true });
            this.fetchContact(this.props.match.params.id)
                .then(resp => {
                    return resp.json()
                })
                .then(resp => {
                    this.setState({ contact: resp, loading: false });
                    window.editForm.fName.value = resp.name.split(" ")[0];
                    window.editForm.surName.value = resp.name.split(" ")[1];
                    window.editForm.phone_number.value = resp.phone_number;
                });
        }
    }
    /**
     * @returns the current value of type of action
     */
    get type() {
        return this.props.type;
    }
    /**
     * @returns a boolean of either if it is in editing mode or not
     */
    get isEdit() {
        return this.type === 'edit';
    }

    /**
     * 
     * Navigates to the root 
     * Viewing the contact list
     * after making the edits
     */
    moveToContactList = () => {
        this.props.history.push("/");
    }
    /**
     * 
     * Handles the submission of the contact 
     * @param {*} event 
     */
    handleSubmit(event) {
        /**
         * 
         * Handle data sending for the edit mode
         */
        if (this.isEdit) {
            let data = {
                name: event.target.fName.value + " " + event.target.surName.value,
                phone_number: event.target.phone_number.value
            };
            fetch(`${apiConfig.apiAddress}/contacts/${this.props.match.params.id}`, {
                method: "PUT",
                mode: "cors",
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
            })
                .then(resp => {
                    this.moveToContactList()
                })
        } else {
            /**
            * 
            * Handle data sending for create mode
            */
            let data = {
                name: event.target.fName.value + " " + event.target.surName.value,
                phone_number: event.target.phone_number.value
            }
            fetch(`${apiConfig.apiAddress}/contacts`, {
                method: "POST",
                mode: "cors",
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
            })
                .then(resp => {
                    this.moveToContactList()
                })
        }
        event.preventDefault();

    }
    // 
    render() {
        return (
            <div className="CForm">
                {/* Top section  */}
                {/* Go back */}
                <div className="CForm-Top">
                    <Link to="/" className="btn btn-sm btn-light">
                        <span className="mdi mdi-24px mdi-arrow-left"></span>
                    </Link>
                </div>
                {/* Middle dection */}
                <div className="CForm-Middle">
                    <form onSubmit={this.handleSubmit} name={this.isEdit ? 'editForm' : 'createForm'}>
                        {/* Pic & Name SUrname */}
                        <div className="CForm-Aside">
                            <div className="CForm-Aside-Left">
                                <div className="placeholder">
                                    <span className="mdi mdi-36px mdi-camera"></span>
                                </div>
                            </div>
                            <div className="CForm-Aside-Right">
                                {/* name */}
                                <div className="input-grp">
                                    <label htmlFor="fName" className="input-lbl">Name</label>
                                    <input id="fName" name="fName" className="input-box" placeholder="John doe" />
                                </div>
                                {/* surnName */}
                                <div className="input-grp">
                                    <label htmlFor="surName" className="input-lbl">surnName</label>
                                    <input id="surName" name="surName" className="input-box" placeholder="Nehemie" />
                                </div>
                            </div>
                        </div>
                        {/* Mobile Nbr */}
                        <div>
                            {/* Mobile */}
                            <div className="input-grp">
                                <label htmlFor="phone_number" className="input-lbl">Mobile</label>
                                <input id="phone_number" name="phone_number" className="input-box" placeholder="0382092912" />
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="CForm-Bottom">
                            <button type="submit" className="btn btn-md btn-primary">
                                <span className={this.props.type === 'edit' ? 'mdi mdi-pencil' : 'mdi mdi-check'}></span>
                                <span>{this.props.type === 'edit' ? "Edit Contact" : "Save Contact"}</span>
                            </button>
                        </div>
                        {this.state.loading ? <Loader /> : null}
                    </form>
                </div>

            </div>
        )
    }
}

export default withRouter(ContactList);