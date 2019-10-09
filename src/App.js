import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Precos from './componentes/Precos';
import PontosTuristicos from './componentes/PontosTuristicos';
import Hoteis from './componentes/Hoteis';
import Cadastro from './componentes/Cadastro';
import Home from './componentes/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="precos" coomponent={Precos} />
      <Route path="PontosTuristicos" component={PontosTuristicos} />
      <Route path="hoteis" coomponent={Hoteis} />
      <Route path="cadastro" component={Cadastro} />
    </Router>
  )
}
export default App;