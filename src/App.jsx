import { BrowserRouter, Route, Routes } from "react-router-dom";
import  { Navbar } from "./components/header";
import Footer from "./components/footer";
import Doctors from "./Pages/Doctors/index";
import Home from "./Pages/Home";
function App() {
  return (
    <BrowserRouter>
      
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path = "/Tours" element = {<Doctors/>} />
        <Route exact path = "/home" element = {<Home/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;