import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import {isAutenticado} from "../utils/LoginManager";

const PrivateRoute = (props) => {
    const { component: Component, ...outhers } = props;
    return(
        <Route {...outhers}
            render={propsRender => {
                    return isAutenticado()
                        ? <Component {...propsRender}/>
                        : <Redirect to={{
                            pathname: '/login',
                            state: { from: propsRender.location }
                        }}
                        />
                }
            }
        />
    )
};
export default PrivateRoute;