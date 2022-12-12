import React, { useState, useEffect } from "react";
import { getCoin } from "../services/api";

// components
import Loader from "./Loader";
import Coin from "./Coin";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCoin();
      setCoins(data);
    };
    fetchApi();
  }, []);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="d-flex flex-column align-items-center row">
      <div className="col-3 my-5">
        <input
          style={{ backgroundColor: "silver" }}
          className="form-control col-3"
          type="text"
          placeholder="Search Coin"
          value={search}
          onChange={searchHandler}
        />
      </div>
      {coins.length ? (
        <div className="row justify-content-center">
          {searchedCoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Landing;
