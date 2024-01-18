import { useEffect, useRef, useState } from "react";
import "../inputWithCalendar/inputWithCalendar.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import InputForm from "../inputForm/InputForm";
import { formateDate } from "../../../utils/helperFunctions";

export default function InputWithCalendar({ label, name, reduxAction }) {
  const [date, setDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const dispatch = useDispatch();
  const calendarRef = useRef();

  const handleDateChange = (newDate) => {
    setDate(formateDate(newDate));
    dispatch(reduxAction(formateDate(newDate)));
  };

  const toggleCalendar = () => {
    setDate("");
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
