import Header from "./Components/Header/Header";
import "../src/Style/Style.scss";
import Contacts from "./Components/Contacts/Contacts";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import AboutProject from "./Components/AboutProject/AboutProject";
import Benefit from "./Components/Benefit/Benefit";
import Subscribe from "./Components/Subscribe/Subscribe";
function App(props) {

   return (
      <BrowserRouter>
         <div className="App">
            <Header />
            <Routes>
               <Route
                  path="/"
                  element={<Home doctorData={props.state.doctorData} />}
               />
               <Route path="/project"
                  element={<AboutProject />} />
               <Route path="/benefit"
                  element={<Benefit blogData={props.state.blogData} />} />
               <Route path="/contacts"
                  element={<Contacts
                     medokMap={props.medokMap}
                     contactsData={props.state.contactsData} />} />
            </Routes>
            <Subscribe addEmail={props.addEmail} />
            <Footer />
         </div>
      </BrowserRouter>
   );
}

export default App;
