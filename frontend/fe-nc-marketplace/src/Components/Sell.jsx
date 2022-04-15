import React from "react";
import { useState } from "react";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { TextField, Alert, Button } from "@mui/material";
import Axios from "axios";

export default function Sell({ setData }) {
  const url = "https://fe-nc-marketplace-api.herokuapp.com/api/items";
  const [newItem, setNewItem] = useState({
    item_name: "",
    description: "",
    img_url: "",
    price: 0,
    category_name: "Technology",
  });

  function handleChange(event) {
    setNewItem((currentData) => {
      const newdata = { ...currentData };
      newdata[event.target.id] = event.target.value;
      console.log(event.target.id, "<<<id");
      console.log(event.target.value, "<<<value");
      console.log(newdata, "<<<newdata");
      return newdata;
    });
  }

  function submit(event) {
    event.preventDefault();
    setData((currentData) => {
      console.log(newItem, "<<<<");
      return [newItem, ...currentData];
    });
    Axios.post(url, {
      item_name: newItem.item_name,
      description: newItem.description,
      img_url: newItem.img_url,
      price: parseInt(newItem.price),
      category_name: "Clothing",
    });
  }

  return (
    <form
      onSubmit={(event) => {
        submit(event);
      }}
      className="chicken-select"
    >
      <FormControl className="chicken-select" fullWidth>
        <TextField
          id="item_name"
          value={newItem.item_name}
          onChange={(event) => handleChange(event)}
          label="Item Name"
          variant="standard"
          placeholder="1990s Gameboy"
          className="sell-children"
        />
        <TextField
          id="description"
          value={newItem.description}
          onChange={(event) => handleChange(event)}
          label="Description"
          variant="standard"
          placeholder="But mom I want one"
          className="sell-children"
        />
        <TextField
          id="img_url"
          value={newItem.img_url}
          onChange={(event) => handleChange(event)}
          label="Image URL"
          variant="standard"
          placeholder="https://images.unsplash.com/photo-1599933190257-ade62d308472?fit=crop&w=600&h=600&q=80"
          className="sell-children"
        />
        <TextField
          id="price"
          value={newItem.price}
          onChange={(event) => handleChange(event)}
          label="Price"
          variant="standard"
          placeholder="£1599"
          className="sell-children"
        />

        <InputLabel id="" value="" className="drop-children">
          Please select a category
        </InputLabel>
        {/* <Select
          id="category_name"
          value={newItem.category_name}
          onChange={(event) => handleChange(event)}
          labelId="Category"
          placeholder="Electronics"
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Clothing"}>Clothing</MenuItem>
          <MenuItem value={"Electronics"}>Electronics</MenuItem>
          <MenuItem value={"Household"}>Household</MenuItem>
        </Select> */}

        <Button variant="contained" className="btn-children" type="submit">
          List Your Item!
          {/* <Alert onClick={() => {}}>Success!!</Alert> */}
        </Button>
      </FormControl>
    </form>
  );
}

// {
// "item_id": 1,
// "item_name": "1990s Gameboy",
// "description": "But mom I want one!",
// "img_url": "https://images.unsplash.com/photo-1599933190257-ade62d308472?fit=crop&w=600&h=600&q=80",
// "price": 1599,
// "category_name": "Electronics"
// },

// {
//   "item_name": "Test item",
//   "description": "testy mc test face",
//   "img_url": "https://test.com/Test-item.jpg",
//   "price": 100,
//   "category_name": "Relics"
// }
