import React from "react";

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
  return (
    <div className="col-8 col-lg-10 p-3 border-bottom" style={{ backgroundColor:'silver' }}>
      <div className="d-flex justify-content-around align-items-center">
        <div className="col-1">
          <img src={image} style={{ width: "40px" }} />
        </div>
        <span className="col-1 d-none d-md-block d-xl-none d-xxl-block d-md-none">{name}</span>
        <span className="col-1">{symbol.toUpperCase()}</span>
        <span className="col-4 col-md-3 col-lg-2">$ {price.toLocaleString()}</span>
        <span className={`col-1 d-none d-lg-block ${priceChange > 0 ? "text-success" : "text-danger"}`}>{priceChange.toFixed(2)} %</span>
        <span className="col-2 col-lg-3 col-xl-2 d-none d-lg-block">
          $ {marketCap.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default Coin;
