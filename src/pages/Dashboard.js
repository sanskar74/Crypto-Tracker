import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TanbsComponent from "../components/DashBoard/Tabs";
import axios from "axios";
import Search from "../components/DashBoard/Search";

function DashboardPage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    // fetch(
    //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    // );

    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((response) => {
        console.log("RESPONSE>>", response);
        setCoins(response.data);
      })
      .catch((error) => {
        console.log("ERROR>>", error);
      });
  }, []);

  return (
    <div>
      <Search />
      <Header />
      <TanbsComponent coins={coins} />
    </div>
  );
}

export default DashboardPage;
