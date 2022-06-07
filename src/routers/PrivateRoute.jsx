/** @format */

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import PAGES_URL from "./router";
import { Navigate } from 'react-router-dom'



const PrivateRoute = ({ children, authenticated, ...rest }) => {

    return authenticated ? children : <Navigate to={'/'} />;
}

const mapStatetoProps = (state) => ({
    authenticated: state.user.currentUser,
});

export default connect(mapStatetoProps, null)(PrivateRoute);
