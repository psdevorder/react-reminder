import React from "react";

export default function Card({ reminders, reminder, setReminders }) {
  const handleDelete = () => {
    const filteredReminders = reminders.filter(
      (item) => reminder.id !== item.id
    );
    setReminders(filteredReminders);
  };

  const handleEdit = () => {
    const filteredReminders = reminders.filter(
      (item) => reminder.id !== item.id
    );
    setReminders(filteredReminders);
  };

  return (
    <>
      <li>
        <h4>{reminder.ime}</h4> <p className="taskText">{reminder.remindTo}</p>{" "}
        <p className="datum">{reminder.datum}</p>
        <button className="deleteBtn" onClick={handleDelete}>
          Delete
        </button>
        <button className="editBtn" onClick={handleEdit}>
          - Edit -
        </button>
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
