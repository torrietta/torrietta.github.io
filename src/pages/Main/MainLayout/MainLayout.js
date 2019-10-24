import React from 'react';
import './MainLayout.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./../../../components/navigation/Footer";
import Header from "./../../../components/navigation/Header";
// 
// 
// Importing Pages
import ContactList from './../ContactList/ContactList';
import EditContact from './../EditContact';
import ViewContact from "./../ContactDetails/ContactDetails";
// 
import MainLayoutTitle from "./MainLayoutTitle";
// the compoment
export default function MainLayout() {

  /**
   * 
   */
  return (
    <div className="MainLayout">
      <Router>
        {/**
        * Top 
       */}
        <div className="MainLayout-Header">
          <Header />
        </div>
        {/*  
      Maain Container*/}
        <div className="MainLayout-Contents">
          <Switch>
            {/* Edit contact */}
            <Route path="/edit/:id">
              <MainLayoutTitle title="Edit Contact" />
              <EditContact type="edit" />
            </Route>
            {/*  */}
            {/* Add Contact */}
            <Route path="/add">
              <MainLayoutTitle title="Add Contact" />
              <EditContact type="add" />
            </Route>
            {/*  */}
            {/* View Contact */}
            <Route path={"/view/:id"} component={ViewContact}>
            </Route>
            {/*  */}
            {/* Contact lists */}
            <Route path="/">
              <MainLayoutTitle title="Contacts List" />
              <ContactList />
            </Route>

            {/*  */}
          </Switch>
        </div>
        {/*  */}
        {/* Footer */}
        <div className="MainLayout-Footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}
