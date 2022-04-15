import React from "react";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

export default function Category() {
  return (
    <FormControl fullWidth className="chicken-select">
      <InputLabel id="">Category</InputLabel>
      <Select>
        <MenuItem value={"All"}>All</MenuItem>
        <MenuItem value={"Clothing"}>Clothing</MenuItem>
        <MenuItem value={"Electronics"}>Electronics</MenuItem>
        <MenuItem value={"Household"}>Household</MenuItem>
      </Select>
    </FormControl>
  );
}
