import React, { useState } from "react";

import { LOCAL_KEY } from "../App";

export default function Form({ reminders, setReminders }) {
  const [imePolje, setImePolje] = useState("");
  const [reminderPolje, setReminderPolje] = useState("");
  let [date] = new Date().toLocaleDateString().split("/");
  function hendlajSubmit(e) {
    const newReminder = {
      id: Math.floor(Math.random() * 100000),
      ime: imePolje.trim(),
      remindTo: reminderPolje.trim(),
      datum: date,
    };
    if (
      imePolje === "" ||
      reminderPolje === "" ||
      imePolje == null ||
      reminderPolje == null
    ) {
      return e.preventDefault();
    } else
      return (
        e.preventDefault(),
        setReminders([...reminders, newReminder]),
        localStorage.setItem(
          LOCAL_KEY,
          JSON.stringify([...reminders, newReminder])
        ),
        setImePolje(""),
        setReminderPolje("")
      );
  }

  return (
    <section className="inputSection">
      <form onSubmit={hendlajSubmit}>
        <label htmlFor="person">Title</label>
        <input
          autoComplete="off"
          type="text"
          name="person"
          id="person"
          value={imePolje}
          size="10"
          onChange={(e) => setImePolje(e.target.value)}
        />
        <label htmlFor="reminder">Text</label>
        <input
          autoComplete="off"
          type="text"
          name="reminder"
          id="reminder"
          value={reminderPolje}
          onChange={(e) => setReminderPolje(e.target.value)}
        />
        <input type="submit" style={{ display: "none" }} />
      </form>
    </section>
  );
}
