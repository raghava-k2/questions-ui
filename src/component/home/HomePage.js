import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from '../navBar/NavBar';

function HomePage(props) {
    console.log(props);
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <h1>token</h1>
        </React.Fragment>
    )
}

export default withRouter(connect(null, null)(HomePage))