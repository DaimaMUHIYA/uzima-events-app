import "./EventsSection.css";

const EventsSection = () => {
  const events = [
    {
      date: "09 Fév 2024",
      title: "Découvrez Événements",
      location: "Lieu",
    },
    {
      date: "10 Fév 2024",
      title: "Titre 2",
      location: "Lieu 2",
    },
    {
      date: "11 Fév 2024",
      title: "Titre 3",
      location: "Lieu 3",
    },
  ];

  return (
    <div className="events-section">
      <h2 className="events-header">Événements à venir</h2>
      <ul className="events-list">
        {events.map((event, index) => (
          <li key={index} className="event-item">
            <div className="event-date">{event.date}</div>
            <div className="event-details">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-location">{event.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsSection;
