import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Items from "./Components/Items";
import Home from "./Components/Home";
import Category from "./Components/Category";
import Search from "./Components/Search";
import Users from "./Components/Users";

function App() {
  const [category, setCategory] = useState([]);

  return (
    <>
      <Navbar />
      <Search />
      <Category category={category} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
