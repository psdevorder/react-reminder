import React, { useState } from "react";
import { LOCAL_KEY } from "../App";

export default function Card({ reminders, reminder, setReminders }) {
  const [editMode, setEditMode] = useState(false);
  const [imePolje, setImePolje] = useState("");
  const [reminderPolje, setReminderPolje] = useState("");

  const handleDelete = () => {
    const filteredReminders = reminders.filter(
      (item) => reminder.id !== item.id
    );
    setReminders(filteredReminders);
  };

  const handleEdit = () => {
    setEditMode(true);
    setImePolje(reminder.ime);
    setReminderPolje(reminder.remindTo);
  };

  function hendlajSubmit(e) {
    const editedReminder = {
      id: reminder.id,
      ime: imePolje.trim(),
      remindTo: reminderPolje.trim(),
      datum: reminder.datum,
    };
    const localData = [
      ...reminders.filter((item) => reminder.id !== item.id),
      editedReminder,
    ];
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
        setReminders(localData),
        localStorage.setItem(LOCAL_KEY, JSON.stringify(localData)),
        setImePolje(""),
        setReminderPolje(""),
        setEditMode(false)
      );
  }

  return (
    <>
      <li>
        {/* {editMode ? <p>KE</p> : "BLČ"} */}
        {editMode ? (
          <form onSubmit={hendlajSubmit}>
            <label htmlFor="person">Remind</label>
            <input
              type="text"
              name="person"
              id="person"
              value={imePolje}
              size="10"
              onChange={(e) => setImePolje(e.target.value)}
            />
            <label htmlFor="reminder">to</label>
            <input
              type="text"
              name="reminder"
              id="reminder"
              value={reminderPolje}
              onChange={(e) => setReminderPolje(e.target.value)}
            />
            <input type="submit" style={{ display: "none" }} />
          </form>
        ) : (
          <>
            <h4>{reminder.ime}</h4>
            <p className="taskText">{reminder.remindTo}</p>
            <p className="datum">{reminder.datum}</p>
            <button className="deleteBtn" onClick={handleDelete}>
              Delete
            </button>
            <button className="editBtn" onClick={handleEdit}>
              - Edit -
            </button>
          </>
        )}
      </li>
    </>
  );
}

// function renderCards() {
//   let html = "";
//   tasks.forEach((task) => {
//     let inject = `<li id=${task.id}><h4>${task.name}</h4> <p class=taskText>${task.text}</p> <p class="datum">${task.datum}</p><button class="deleteBtn">Delete</button></li>`;
//     html = html + inject;
//   });
//   cards.innerHTML = html;
// }
