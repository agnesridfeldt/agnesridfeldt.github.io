import React, { useState } from "react";
import Calendar from "react-calendar";
import "./CalendarWidget.css";

export default function CalendarWidget() {
  const initialSelectedDate = new Date(2008, 7, 27);
  // Visible month: September 2008
  const initialVisibleMonth = new Date(2008, 8, 1);

  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
  const [activeStartDate, setActiveStartDate] = useState(initialVisibleMonth);

  return (
    <div className="calendar-widget">
      <Calendar
        value={selectedDate}
        onChange={setSelectedDate}
        activeStartDate={activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) =>
          setActiveStartDate(activeStartDate)
        }
        view="month"
        minDetail="month"
        maxDetail="month"
        showNeighboringMonth={true}
        showNavigation={true}
        prev2Label={null}
        next2Label={null}
        formatMonthYear={(locale, date) =>
          date.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })
        }
        formatShortWeekday={(locale, date) =>
          date.toLocaleDateString("en-US", { weekday: "short" }).slice(0, 3)
        }
      />
    </div>
  );
}