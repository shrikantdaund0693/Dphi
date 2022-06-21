import React, { useEffect, useState } from "react";
import "../assets/styles/Explore.css";

const getDateDiff = (date1, date2) => {
  const diff = new Date(date2.getTime() - date1.getTime());
  return {
    year: diff.getUTCFullYear() - 1970,
    month: diff.getUTCMonth(),
    day: diff.getUTCDate() - 1,
    hour: diff.getUTCHours(),
    minute: diff.getUTCMinutes(),
    second: diff.getUTCSeconds(),
  };
};

function Coutdown({ futureDate }) {
  const [diff, setDiff] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setDiff(getDateDiff(new Date(), futureDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [futureDate]);
  return (
    <div className="timer">
      <div className="timer-element">
        <span className="days">{diff.day > 9 ? diff.day : "0" + diff.day}</span>
        <div className="tiny-text">Days</div>
      </div>
      <div className="timer-element">
        <span>:</span>
      </div>
      <div className="timer-element">
        <span className="hours">
          {diff.hour > 9 ? diff.hour : "0" + diff.hour}
        </span>
        <div className="tiny-text">Hours</div>
      </div>
      <div className="timer-element">
        <span>:</span>
      </div>
      <div className="timer-element">
        <span className="minutes">
          {diff.minute > 9 ? diff.minute : "0" + diff.minute}
        </span>
        <div className="tiny-text">Mins</div>
      </div>
    </div>
  );
}

export default Coutdown;
