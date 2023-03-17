import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./component/Banner/Banner";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      

      {/* <Routes>
       
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
