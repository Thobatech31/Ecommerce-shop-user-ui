/** @format */

import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom'


const PublicRoute = ({ children, authenticated, ...rest }) => {

    return !authenticated ? children : <Navigate to="/Home" />;
}

const mapStatetoProps = (state) => ({
    authenticated: state.user.currentUser,
});

export default connect(mapStatetoProps, null)(PublicRoute);
