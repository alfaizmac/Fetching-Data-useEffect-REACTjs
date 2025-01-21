import { useState, useEffect } from "react";
import "./TripList.css";

export default function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // Fetch the trips data when the component mounts
    fetch("http://localhost:3000/trips")
      .then((response) => response.json())
      .then((json) => setTrips(json))
      .catch((error) => console.error("Error fetching trips:", error)); // Catch errors
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <ul>
        {/* Loop through the trips and display them */}
        {trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
