import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header";
import Toggle from "./components/Toggle";
import Selected from "./components/Selected";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(true);
  const [tab, setTab] = useState("Available Players");
  const [selected, setSelected] = useState([]);
  const handleSelected = (player, price) => {
    if (price > count) {
      toast("Not enough money to buy this player");
      return;
    }
    const isExist = selected.find((p) => p.playerId === player.playerId);
    if (isExist) {
      toast("Player already added to your team");
    } else {
      if (selected.length > 5) {
        toast("All Players were selected for you team");
      } else {
        const newSelected = [...selected, player];
        setSelected(newSelected);
        const newCredit = count - price;
        setCount(newCredit);
      }
    }
  };
  const handleDelete = (id) => {
    const finalSelected = selected.filter((player) => player.playerId !== id);
    setSelected(finalSelected);
    if (status) {
      setStatus(true);
      setTab("Availabe players");
    } else {
      setStatus(false);
      setTab(`Selected players (${finalSelected.length}/6)`);
    }
  };
  const handleCredit = (credit) => {
    const newCount = count + credit;
    setCount(newCount);
  };
  const handleAvailable = (status) => {
    if (status) {
      setStatus(true);
      setTab("Availabe players");
    } else {
      setStatus(false);
      setTab(`Selected players (${selected.length}/6)`);
    }
  };

  return (
    <>
      <Header count={count}></Header>
      <Banner handleCredit={handleCredit}></Banner>
      <Toggle
        selected={selected}
        tab={tab}
        handleAvailable={handleAvailable}
      ></Toggle>
      {status ? (
        <Blogs handleSelected={handleSelected}></Blogs>
      ) : (
        <Selected
          handleDelete={handleDelete}
          handleAvailable={handleAvailable}
          selected={selected}
        ></Selected>
      )}
      {/* <Newsletter></Newsletter> */}
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
