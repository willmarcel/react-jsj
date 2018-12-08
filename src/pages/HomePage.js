import React, {Component} from 'react';

import {Alert, Button} from 'reactstrap';

import Artigo from '../components/Artigo';
import Contador from "../components/Contador";

class HomePage extends Component {

    render() {
        return (
            <div>
                <Alert color="info">
                    <Artigo
                        nome="Willian"
                        texto="Programação Web com React JS"
                    />
                </Alert>
            </div>
        )
    }
}

export default HomePage;