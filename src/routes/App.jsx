import { Container } from "react-bootstrap";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Menu } from "../components/Menu";
import { PacienteDetalle } from "../pages/PacienteDetalle";
import { PacienteForm } from "../pages/PacienteForm";
import { PaginaInicial } from "../pages/PaginaInicial";
import { PaginaNoFound} from "../pages/PaginaNoFound";
import { PaginaPaciente } from "../pages/PaginaPaciente";

function App() {
  return (
   <Container>    
   <HashRouter>  
   <Menu/> 
    <Routes>
    <Route path="/" element={<PaginaInicial/>}/>
    <Route path="/paciente" element={<PaginaPaciente/>}/>
    <Route path="/paciente/form" element={<PacienteForm/>}/>
    <Route path="/paciente/:id" element={<PacienteDetalle/>}/>
    <Route path="*" element={<PaginaNoFound/>}/>
    </Routes>
   </HashRouter>
   </Container>
  );
}

export default App;
