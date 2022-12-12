import React from "react";

// components
import Landing from "./components/Landing";

// css
import './App.css'

// coingecko.com برای گرفتن اطلاعات از سایت
// استفاده می کنیم

const App = () => {
  return (
    <div className="container">
      <Landing />
    </div> 
  );
};

export default App;
