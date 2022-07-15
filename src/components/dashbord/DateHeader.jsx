import React, { useState } from "react";

function DateHeader() {
  const [todayDate, setTodayDate] = useState({ date: "", time: "" });

  const toggleDate = () => {
    const date = new Date();
    const options = {
      weekday: "short",
      month: "short",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
    };
    const frDate = date.toLocaleDateString("fr-FR", options);

    const formatedDate = frDate.slice(0, 3) + ", " + frDate.slice(4, -8);
    const formatedTime = frDate.slice(-5);
    setTodayDate({ time: formatedTime, date: formatedDate });
  };

  setTimeout(() => {
    toggleDate();
  }, 1000);

  return (
    <div className="date-container">
      <div className="date">
        <img src="../icon/date.svg" alt="" />
        <span>{todayDate.date}</span>
      </div>
      <div className="time">
        <img src="../icon/time.svg" alt="" />
        <span>{todayDate.time}</span>
      </div>
    </div>
  );
}

export default DateHeader;
