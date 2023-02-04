import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import Map from "./Components/Map";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const response = await fetch(
        "https://eonet.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await response.json();
      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </>
  );
}

export default App;
