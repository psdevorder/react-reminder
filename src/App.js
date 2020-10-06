import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Form from "./components/Form";
import Title from "./components/Title";

export const LOCAL_KEY = "moji-rimajnderi";

function App() {
  const [reminders, setReminders] = useState(
    JSON.parse(localStorage.getItem(LOCAL_KEY)) || [
      {
        id: Math.floor(Math.random() * 100000),
        ime: "Deki",
        remindTo: "Vježbaj React, jebemusve!",
        datum: Date.now().toString(),
      },
    ]
  );
  return (
    <>
      <Title />
      <div className="container">
        <Form reminders={reminders} setReminders={setReminders} />
        <Cards reminders={reminders} setReminders={setReminders} />
      </div>
    </>
  );
}

export default App;
