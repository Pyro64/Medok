import Header from "./Components/Header/Header";
import "../src/Style/Style.scss";
import Contacts from "./Components/Contacts/Contacts";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import AboutProject from "./Components/AboutProject/AboutProject";
import Benefit from "./Components/Benefit/Benefit";

import Medic from "./Components/Medic/Medic";
import Subscribe from "./Components/Subscribe/Subscribe";
function App(props) {
   return (
      <BrowserRouter>
         <div className="App">
            <Header />
            <Routes>
               <Route
                  path="/"
                  element={<Home />}
               />
               <Route path="/project"
                  element={<AboutProject />} />
               <Route path="/medic"
                  element={<Medic />} />
               <Route path="/blog"
                  element={<Benefit />} />
               <Route path="/contacts"
                  element={<Contacts />} />
            </Routes>
            <Subscribe />
            <Footer />
         </div>
      </BrowserRouter>
   );
}

export default App;
