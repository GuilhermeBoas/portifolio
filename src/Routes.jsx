import EstilosGlobais from "./Componentes/EstilosGlobais"
import Cabecalho from "./Componentes/Cabecalho"
import { BrowserRouter, Route, Routes } from "react-router"
import Inicio from "./Pages/Inicio"

function AppRoute() {
  return (
    <BrowserRouter>
      <EstilosGlobais/>
      <Cabecalho/>
      
        <Routes>
          <Route path="/" element={<Inicio/>}/>

        </Routes>
    
    </BrowserRouter>
  )
}

export default AppRoute
