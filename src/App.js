import { useEffect, useState } from "react";
import "./App.css";
import { Rooms } from "./stays";
import { useContext } from "react";
import { SearchContext } from "./contexts/search-context.jsx";
import RoomContainer from "./components/room-container/room-container";
import Navigation from "./components/navigation/navigation";

// import {Fragment} from 'react'
// let roomsCopy = [];
const App = () => {
  const { city, guest } = useContext(SearchContext);
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    let roomsCopy = Rooms.filter(
      (x) =>
        x.city.toLocaleLowerCase().includes(city.toLocaleLowerCase()) &&
        x.maxGuests >= guest
    );
    setRooms(roomsCopy);
  }, [city, guest]);
  return (
    <>
      <Navigation />
      <RoomContainer rooms={rooms} />
    </>
  );
};

export default App;
