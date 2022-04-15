import Header from "./Components/Header.jsx";
import InputForm from "./Components/InputForm.jsx";
import ListResults from "./Components/ListResults.jsx";
import "./Styles/App.css";
import { useState } from "react";

function App() {
  const [newLongitude, setNewLongitude] = useState("-2.2426");
  const [newLatitude, setNewLatitude] = useState("53.4808");
  const [newDate, setNewDate] = useState("2022-01");
  return (
    <div className="App">
      <Header />
      <InputForm
        setNewLongitude={setNewLongitude}
        setNewLatitude={setNewLatitude}
        setNewDate={setNewDate}
      />
      <ListResults
        newLongitude={newLongitude}
        newLatitude={newLatitude}
        newDate={newDate}
      />
    </div>
  );
}

export default App;
