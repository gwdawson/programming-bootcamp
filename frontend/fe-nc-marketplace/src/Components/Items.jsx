import React, { useEffect, useState } from "react";
import axios from "axios";
import Sell from "./Sell";

export default function Items() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const makeCall = async () => {
      const fetchData = await axios.get(
        "https://fe-nc-marketplace-api.herokuapp.com/api/items"
      );
      console.log(fetchData.data);
      setData(fetchData.data.items);
    };
    makeCall();
  }, []);

  return (
    <main>
      <div className="sell-item">
        <Sell setData={setData} />
      </div>
      <ul className="unorderedList">
        {data?.map((fetchData) => {
          return (
            <li className="listItem">
              <img src={fetchData.img_url} alt={fetchData.item_name} />
              <p>#{fetchData.category_name}</p>
              <h2>{fetchData.item_name}</h2>
              <h3>£{fetchData.price}</h3>
              <p>{fetchData.description}</p>
              <br></br>
              <button>Add to Basket</button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
