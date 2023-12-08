import React from 'react';
import { Fragment } from 'react';
import MainNavigation from '../components/MainNavigation';

function ErrorPage () {
    return <Fragment>
        <MainNavigation/>
        <h1>
            An error occurred!
            <p>Could not find this page</p>
        </h1>

    </Fragment>;
}

export default ErrorPage;
