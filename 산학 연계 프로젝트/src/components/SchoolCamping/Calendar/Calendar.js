import React from "react";
import * as S from "../../../style/SchoolCamping/Calendar/Calendar.style";

const Calendar = ({
  calendar,
  onClickDay,
  currentYear,
  currentMonth,
  setCurrentYear,
  setCurrentMonth,
}) => {
  const handlePrevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((year) => year - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((year) => year + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <S.Calendar>
      <div className="calendar-container">
        <div className="calendar-nav">
          <button onClick={handlePrevMonth}>{"<"}</button>
          <h2>{`${currentYear}년 ${currentMonth + 1}월`}</h2>
          <button onClick={handleNextMonth}>{">"}</button>
        </div>
        <table className="calendar-table">
          <thead>
            <tr>
              <th>일</th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
            </tr>
          </thead>
          <tbody>
            {calendar.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((day, dayIndex) => (
                  <td
                    key={dayIndex}
                    onClick={() => day.type === "normal" && onClickDay(day.day)}
                    className={
                      day.type === "null"
                        ? "empty-day"
                        : (day.type === "normal" && "normal") ||
                          (day.type === "check" && "check") ||
                          (day.type === "impossible" && "impossible")
                    }
                  >
                    {(day.type === "check" && "✓") ||
                      (day.type === "impossible" && "✕")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </S.Calendar>
  );
};

export default Calendar;
