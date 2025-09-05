import { Route, Routes } from "react-router-dom"
import CobranzasList from "./componentes/cobranzas/CobranzasList"



function App() {
 

  return (
    <div>
 
    <Routes>
    <Route path="/" element={<CobranzasList/>}/>
    </Routes>
   
    </div> 
    )
}

export default App
