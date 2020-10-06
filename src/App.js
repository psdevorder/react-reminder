import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Form from "./components/Form";
import Title from "./components/Title";

function App() {
  const [reminders, setReminders] = useState([
    {
      id: Math.floor(Math.random() * 100000),
      ime: "Deki",
      remindTo: "Vježbaj React, jebemusve!",
      datum: Date.now().toString(),
    },
  ]);
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
