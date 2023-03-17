import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./component/Banner/Banner";
import BestDeals from "./component/BestDeals/BestDeals";
import CategoryComp from "./component/CategoryComp/CategoryComp";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import NewArrivel from "./component/NewArrivel/NewArrivel";
import Tvc from "./component/Tvc/Tvc";
import BDP_LB from "./pages/BDeProducts/BDP_LB";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Tvc />
      <CategoryComp />
      <NewArrivel />
      <BestDeals />

      {/* <Routes>
        <Route path="/" element={Home} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
