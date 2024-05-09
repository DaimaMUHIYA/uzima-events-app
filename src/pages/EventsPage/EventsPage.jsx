// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import EventForm from "../../components/EventForm";
// import "./EventsPage.css";

// function EventsPage() {
//   const [events, setEvents] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get("/api/events");
//       setEvents(response.data);
//       setIsLoading(false);
//     } catch (error) {
//       console.error(error);
//       setIsLoading(false);
//     }
//   };

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Decouvrez les événements</h1>
//       <ul>
//         {Array.isArray(events) ? (
//           events.map((event) => <li key={event.id}>{event.name}</li>)
//         ) : (
//           <li>Pas d'evenements à afficher pour l'instant</li>
//         )}
//       </ul>
//       {isLoggedIn ? (
//         <EventForm onCreate={fetchEvents} />
//       ) : (
//         <Link to="/auth/login">
//           <button onClick={handleLogin}>Se connecter</button>
//         </Link>
//       )}
//     </div>
//   );
// }

// export default EventsPage;

// EventsPage.js
// --------------------Important--------------------------

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
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="title">Découvrez les événements</h1>
      <ul className="event-list">
        {Array.isArray(events) && events.length > 0 ? (
          events.map((event) => (
            <li key={event.id} className="event-item">
              <span className="event-name">{event.name}</span>
            </li>
          ))
        ) : (
          <li>Pas d'événements à afficher pour l'instant</li>
        )}
      </ul>
      {isLoggedIn ? (
        <EventForm onCreate={fetchEvents} />
      ) : (
        <Link to="/auth/login">
          <button className="login-button" onClick={handleLogin}>
            Se connecter
          </button>
        </Link>
      )}
    </div>
  );
}

export default EventsPage; 

// ------------------------------


// EventsPage.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EventsPage = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/events');
//       setEvents(response.data);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   };

//   const renderEvents = () => {
//     return events.map((event) => (
//       <div key={event.id}>
//         <h3>{event.title}</h3>
//         <p>{event.description}</p>
//         <p>Date: {event.date}</p>
//       </div>
//     ));
//   };

//   return (
//     <div>
//       <h2>Events</h2>
//       {renderEvents()}
//     </div>
//   );
// };

// export default EventsPage;



// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './EventsPage.css';

// const EventsPage = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/events');
//       setEvents(response.data);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   };

//   const renderEvents = () => {
//     return events.map((event) => (
//       <div key={event.id} className="event-card">
//         <h3 className="event-title">{event.title}</h3>
//         <p className="event-description">{event.description}</p>
//         <p className="event-date">Date: {event.date}</p>
//       </div>
//     ));
//   };

//   return (
//     <div className="events-container">
//       <h2>Events</h2>
//       {renderEvents()}
//     </div>
//   );
// };

// export default EventsPage;
