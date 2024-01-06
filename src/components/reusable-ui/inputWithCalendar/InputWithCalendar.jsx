import { useEffect, useRef, useState } from "react";
import "../inputWithCalendar/inputWithCalendar.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import InputForm from "../inputForm/InputForm";

export default function InputWithCalendar({ label, name, reduxAction }) {
  const OPTIONS = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const initialDateFormatted = new Date().toLocaleDateString("us-US", OPTIONS);

  const [date, setDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const dispatch = useDispatch();
  const calendarRef = useRef();

  // const dateFormatted = date?.toLocaleDateString("us-US", options);

  const handleDateChange = (newDate) => {
    // if (newDate) {
    const updatedDate = newDate?.toLocaleDateString("us-US", OPTIONS);
    setDate(updatedDate);
    dispatch(reduxAction(updatedDate));
    // }
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleClickOutsideCalendar = (e) => {
    if (calendarRef.current && !calendarRef.current.contains(e.target)) {
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutsideCalendar);
    return () => {
      window.removeEventListener("click", handleClickOutsideCalendar);
    };
  }, []);

  return (
    <div ref={calendarRef}>
      <InputForm
        // id={label}
        label={label}
        type="text"
        name={name}
        value={date}
        onChange={handleDateChange}
        readOnly={true}
        onClick={toggleCalendar}
      />
      {showCalendar && (
        <div
          className="calendar-popup"
          style={{ position: "absolute", zIndex: "2" }}
        >
          <Calendar
            onChange={handleDateChange}
            value={date}
            onClickDay={toggleCalendar}
          />
        </div>
      )}
    </div>
  );
}
