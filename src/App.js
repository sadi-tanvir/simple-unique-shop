import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import OrderReview from "./components/Order-Review/OrderReview";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order-review" element={<OrderReview />} />
      </Routes>
    </div>
  );
};

export default App;
