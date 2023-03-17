import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./component/Banner/Banner";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import NewArrivel from "./component/NewArrivel/NewArrivel";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <NewArrivel />

      {/* <Routes>
       
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
