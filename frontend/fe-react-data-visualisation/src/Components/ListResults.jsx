import React, { useState, useEffect } from "react";
import "../Styles/ListResults.css";

import axios from "axios";

export default function ListResults({ newLatitude, newLongitude, newDate }) {
  const [results, setResults] = useState([]);
  let count = 0;

  useEffect(() => {
    axios
      .get(
        `https://data.police.uk/api/crimes-street/all-crime?lat=${newLatitude}&lng=${newLongitude}&date=${newDate}`
      )
      .then(({ data }) => {
        setResults(data);
      });
  }, [newLongitude, newLatitude, newDate]);

  return (
    <>
      <h2 className="ListResultsTitle">ListResults for...</h2>
      <div className="TestingFlex">
        {results.map((r) => {
          count++;
          return (
            <div className={count % 2 === 0 ? "Case1" : "Case2"}>
              <p className="data">{r.category}</p>
              <p className="data">{r.location.street.name}</p>
              <p className="data">{r.outcome_status.category}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
