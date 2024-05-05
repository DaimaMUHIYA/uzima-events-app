import { useState } from "react";

function EventForm({ onCreate }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEvent = { name, date, time, location };
    onCreate(newEvent);
    setName("");
    setDate("");
    setTime("");
    setLocation("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </label>
      <button type="submit">Créer</button>
    </form>
  );
}

export default EventForm;
``;
