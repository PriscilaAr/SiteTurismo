import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Precos from './componentes/Precos';
import PontosTuristicos from './componentes/PontosTuristicos';
import PacotesDeViagem from './componentes/PacotesDeViagem';
import Cadastro from './componentes/Cadastro';
import Home from './componentes/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/precos" component={Precos} />
      <Route path="/PontosTuristicos" component={PontosTuristicos} />
      <Route path="/PacotesDeViagem" component={PacotesDeViagem} />
      <Route path="/cadastro" component={Cadastro} />
    </Router>
  )
}
export default App;