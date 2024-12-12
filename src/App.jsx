import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header";
import Toggle from "./components/Toggle";
import Selected from "./components/Selected";

function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(true);
  const [tab, setTab] = useState("Available");
  const handleCredit = (credit) => {
    const newCount = count + credit;
    setCount(newCount);
  };
  const handlePrice = (price) => {
    const newCredit = count - price;
    setCount(newCredit);
  };
  const handleAvailable = (status) => {
    if (status) {
      setStatus(true);
      setTab("Availabe");
    }
    if (!status) {
      setStatus(false);
      setTab("Selected");
    }
  };

  return (
    <>
      <Header count={count}></Header>
      <Banner handleCredit={handleCredit}></Banner>
      <Toggle tab={tab} handleAvailable={handleAvailable}></Toggle>
      {status ? (
        <Blogs handlePrice={handlePrice}></Blogs>
      ) : (
        <Selected></Selected>
      )}
    </>
  );
}

export default App;
