import { useState } from "react";
import "./TripList.css";
import { useFetch } from "../hook/useFetch";

export default function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");

  //this can get the data of the data base the algorithm is on useFetch.js
  const { data: trips, isPending, error } = useFetch(url);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      {isPending && <div>Loading trips....</div>}
      {error && <div>{error}</div>}
      <ul>
        {trips &&
          trips.map((trips) => (
            <li key={trips.id}>
              <h3>{trips.title}</h3>
              <p>{trips.price}</p>
            </li>
          ))}
      </ul>
      <div className="filter">
        <button onClick={() => setUrl("http://localhost:3000/trips?loc=mall")}>
          Mall Trip
        </button>

        <button onClick={() => setUrl("http://localhost:3000/trips?loc=beach")}>
          Beach trip
        </button>
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=bawing")}
        >
          Bawing trip
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All trips
        </button>
      </div>
    </div>
  );
}
