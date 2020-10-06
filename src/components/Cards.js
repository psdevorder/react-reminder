import React from "react";
import Card from "../components/Card";

export default function Cards({ reminders, setReminders }) {
  return (
    <ul className="cards">
      {reminders.map((reminder) => {
        return (
          <Card
            key={reminder.id}
            reminder={reminder}
            setReminders={setReminders}
            reminders={reminders}
          />
        );
      })}
    </ul>
  );
}
