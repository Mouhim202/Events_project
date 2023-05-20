import Menu from "./pages/Menu"
import Home from "./pages/Home"
import About from "./pages/About"
import Event from "./pages/Event"
import Events from "./pages/Events"
import Allservices from "./pages/Allservices"
import Services from "./pages/Services"
import Service from "./pages/Service"
import Espaces from "./pages/Espaces"
import Espace from "./pages/Espace"
import Inscription from "./pages/Inscription"
import Connexion from "./pages/Connexion"
import Ajouter from "./pages/Ajouter"
import Modifier from "./pages/Modifier"


import Error from "./pages/Error"
import { BrowserRouter,Routes,Route} from "react-router-dom"
import { Context } from "./Context";
import {useState } from "react"
const App = () => {
    const [context, setContext] = useState(undefined);

    return (
        <Context.Provider value={[context, setContext]}>
        <>
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/event/:id" element={<Event/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                
                <Route path="/allservices" element={<Allservices/>}></Route>
                <Route path="/service/:id" element={<Service/>}></Route>
                <Route path="/services/:cat" element={<Services/>}></Route>


                <Route path="/espaces" element={<Espaces/>}></Route>
                <Route path="/espace/:id" element={<Espace/>}></Route>
                <Route path="/espaces/:cat" element={<Espaces/>}></Route>


                <Route path="/events" element={<Events/>}></Route>
                <Route path="/event/:id" element={<Event/>}></Route>
                <Route path="/events/:cat" element={<Events/>}></Route>


                <Route path="/ajouter/:cat" element={<Ajouter/>}></Route>
                <Route path="/modifier/:cat" element={<Modifier/>}></Route>


                <Route path="/connexion" element={<Connexion/>}></Route>
                <Route path="/inscription" element={<Inscription/>}></Route>
                
                

                <Route path="*" element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
        </Context.Provider>
      );
}
 
export default App;