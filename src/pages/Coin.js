import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import { settingCoinObject } from "../functions/convertObject";
import { List } from "@mui/material";

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  useEffect(() => {
    if (id) {
      axios
        .get(`http://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
          console.log("RESPONSE>>", response);
          settingCoinObject(setCoinData, response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("ERROR>>", error);
          setIsLoading(false);
        });
    }
  }, [id]);

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coinData} />
          </div>
        </>
      )}
    </div>
  );
}

export default CoinPage;
