import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./component/Banner/Banner";
import BestDeals from "./component/BestDeals/BestDeals";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import NewArrivel from "./component/NewArrivel/NewArrivel";
import Tvc from "./component/Tvc/Tvc";
import BDP_LB from "./pages/BDeProducts/BDP_LB";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Tvc />
      <NewArrivel />
      <BestDeals />

      {/* <Routes>
         <Route path="/" element={''}/>
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
