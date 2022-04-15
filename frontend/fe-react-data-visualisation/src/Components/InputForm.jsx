import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../Styles/InputForm.css";

export default function InputForm({
  setNewLongitude,
  setNewLatitude,
  setNewDate,
}) {
  const [valueLatitude, setValueLatitude] = useState("");
  const [valueLongitude, setValueLongitude] = useState("");
  const [valueDate, setValueDate] = useState("2022-01");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewLongitude(valueLongitude);
    setNewLatitude(valueLatitude);
    setNewDate(valueDate);
  };

  return (
    <div>
      <form className="InputForm" onSubmit={(e) => handleSubmit(e)}>
        <TextField
          className="InputForm__Children"
          id="outlined-basic"
          label="Latitude"
          variant="outlined"
          type="text"
          value={valueLatitude}
          onChange={(e) => {
            setValueLatitude(e.target.value);
          }}
          required
        />
        <TextField
          className="InputForm__Children"
          id="outlined-basic"
          label="Longitude"
          variant="outlined"
          type="text"
          value={valueLongitude}
          onChange={(e) => {
            setValueLongitude(e.target.value);
          }}
          required
        />
        <TextField
          className="InputForm__Children"
          id="outlined-basic"
          label="Date (YYYY-MM)"
          variant="outlined"
          type="text"
          value={valueDate}
          onChange={(e) => {
            setValueDate(e.target.value);
          }}
          required
        />
        <Button
          variant="contained"
          type="submit"
          className="Button InputForm__Children"
        >
          Search
        </Button>
      </form>
    </div>
  );
}
