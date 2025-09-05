import { Route, Routes } from "react-router-dom"
import CobranzasList from "./componentes/cobranzas/CobranzasList"
import AddCliente from "./componentes/cobranzas/AddCliente"



function App() {
 

  return (
    <div>
 
    <Routes>
    <Route path="/" element={<CobranzasList/>}/>
    <Route path="AddCliente" element = {<AddCliente/>}/>
    </Routes>
   
    </div> 
    )
}

export default App
