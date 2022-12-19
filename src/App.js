import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Contacto from "./components/Contactos";
import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar";
import Proyectos from "./components/Proyectos";
import Sobremi from "./components/Sobremi";
import Teconologias from "./components/Tecnologias";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={[
          <NavBar />,
        <Inicio />,
        <Sobremi />,
        // <Teconologias />,
        <Proyectos />,
        
        <Contacto />
        ]} />
        
      </Routes>

    </Router>
  )
}