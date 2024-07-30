import React from "react";
import NavigationBar from "./Components/HomePage/Navbar";
import Slider from "./Components/HomePage/Crousel";
import ReviewCard from "./Components/HomePage/Review";
import Pendant from "./Components/Pendant/Pendant";
import Ring from "./Components/Ring/Ring";
import Necklace from "./Components/Necklace/Necklace";
import Offers from "./Components/Offer/offer";
import Cart from "./Components/Cart";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
      <NavigationBar />
        <Routes>
          <Route path="/pendant" element={<Pendant />} />
          <Route path="/rings" element={<Ring />} />
          <Route path="/necklace" element={<Necklace />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/Cart" element={<Cart />} />

          <Route 
            path="/" 
            element={
              <>
                
                <Slider />
                <ReviewCard />
              </>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
