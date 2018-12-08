import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { HashRouter,BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './HomePage';
import SobrePage from './SobrePage';
import TarefasPage from './TarefasPage';
import LoginPage from './LoginPage';
import Menu from '../components/Menu';

import PrivateRoute from '../components/PrivateRoute';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <Container>
              <Menu />

              <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <PrivateRoute path="/tarefas" component={TarefasPage}/>
                  <Route path="/sobre" component={SobrePage}/>
                  <Route path="/login" component={LoginPage}/>
                  <Route render={() => {
                      return (<div>Página não encontrada.</div>);
                  }}
                  />
              </Switch>
          </Container>
      </BrowserRouter>
    );
  }
}

export default App;
