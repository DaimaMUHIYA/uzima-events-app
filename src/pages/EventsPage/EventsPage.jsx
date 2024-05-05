import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EventForm from "../../components/EventForm";
import "./EventsPage.css";

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/events");
      setEvents(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Decouvrez les événements</h1>
      <ul>
        {Array.isArray(events) ? (
          events.map((event) => <li key={event.id}>{event.name}</li>)
        ) : (
          <li>Pas d'evenements à afficher pour l'instant</li>
        )}
      </ul>
      {isLoggedIn ? (
        <EventForm onCreate={fetchEvents} />
      ) : (
        <Link to="/auth/login">
          <button onClick={handleLogin}>Se connecter</button>
        </Link>
      )}
    </div>
  );
}

export default EventsPage;
