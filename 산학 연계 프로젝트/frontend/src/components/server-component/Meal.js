import React, { useState, useEffect } from "react";

import { ReactComponent as Left } from "../../assets/icon/Schedule/left.svg";
import { ReactComponent as Right } from "../../assets/icon/Schedule/right.svg";

const Meal = ({ date, eventName }) => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });
  const [isFoodListVisible, setFoodListVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState(today.getDate()); // Set today as the default selected day
  const [isMealAvailable, setIsMealAvailable] = useState(false);
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState(today.getDay()); // Set the current day of the week
  const [mealList, setMealList] = useState([]);
  const [meals, setMeals] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
  });

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const updateMonth = (newMonth) => {
    setCurrentDate((prevDate) => {
      const yearAdjustment = newMonth === 12 ? 1 : newMonth === -1 ? -1 : 0;
      const adjustedYear = prevDate.year + yearAdjustment;
      const adjustedMonth = (newMonth + 12) % 12;
      return { year: adjustedYear, month: adjustedMonth };
    });
    setFoodListVisible(false);
    setSelectedDay(null);
  };

  const handlePrevMonth = () => updateMonth(currentDate.month - 1);
  const handleNextMonth = () => updateMonth(currentDate.month + 1);

  const handleDayClick = (day, isCurrentMonth) => {
    if (isCurrentMonth) {
      setSelectedDay(day);
      setFoodListVisible(true);
      setMealsForDay(day); // Set meals for the selected day
    } else {
      const newMonth = day > 15 ? currentDate.month - 1 : currentDate.month + 1;
      updateMonth(newMonth);
    }
  };

  const handleDayOfWeekClick = (index) => setSelectedDayOfWeek(index);

  const renderCalendar = () => {
    const days = [];
    const firstDay = getFirstDayOfMonth(currentDate.year, currentDate.month);
    const totalDays = daysInMonth(currentDate.year, currentDate.month);
    const prevMonthDays = daysInMonth(currentDate.year, currentDate.month - 1);

    const renderDay = (day, isCurrentMonth, key, additionalClasses = "") => (
      <div
        className={`scc-table-ceil ${additionalClasses}`}
        key={key}
        onClick={() => handleDayClick(day, isCurrentMonth)}
      >
        {day}
      </div>
    );

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        renderDay(prevMonthDays - i, false, `prev-${i}`, "scc-table-ceil-no")
      );
    }

    for (let i = 1; i <= totalDays; i++) {
      const additionalClasses = selectedDay === i ? "scc-table-ceil-on" : "";
      days.push(renderDay(i, true, i, additionalClasses));
    }

    const nextMonthDays = 42 - days.length;
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push(renderDay(i, false, `next-${i}`, "scc-table-ceil-no"));
    }

    return days;
  };

  useEffect(() => {
    const fetchMealData = async () => {
      try {
        const response = await fetch(
          `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=a1527ac9e4a94dc19ddbd8f1158bc9e5&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=R10&SD_SCHUL_CODE=8750767&MLSV_FROM_YMD=${
            currentDate.year
          }${(currentDate.month + 1).toString().padStart(2, "0")}01`
        );

        const json = await response.json();
        if (json.mealServiceDietInfo && json.mealServiceDietInfo.length > 1) {
          setMealList(json.mealServiceDietInfo[1].row);
        } else {
          console.warn(
            "mealServiceDietInfo 데이터가 예상한 형식이 아닙니다.",
            json
          );
          setMealList([]);
        }
      } catch (error) {
        console.error("급식 데이터를 가져오는 중 오류가 발생했습니다.", error);
      }
    };

    fetchMealData();
  }, [currentDate]);

  useEffect(() => {
    if (selectedDay) {
      setMealsForDay(selectedDay); // Set meals for the initially selected day (today)
      setFoodListVisible(true);
    }
  }, [mealList]); // Recalculate meals once the meal list is fetched

  const setMealsForDay = (day) => {
    const selectedDate = `${currentDate.year}${(currentDate.month + 1)
      .toString()
      .padStart(2, "0")}${day.toString().padStart(2, "0")}`;

    const mealsForDay = {
      breakfast: mealList.filter(
        (meal) => meal.MLSV_YMD === selectedDate && meal.MMEAL_SC_NM === "조식"
      ),
      lunch: mealList.filter(
        (meal) => meal.MLSV_YMD === selectedDate && meal.MMEAL_SC_NM === "중식"
      ),
      dinner: mealList.filter(
        (meal) => meal.MLSV_YMD === selectedDate && meal.MMEAL_SC_NM === "석식"
      ),
    };

    setMeals(mealsForDay);
    setIsMealAvailable(
      mealsForDay.breakfast.length > 0 ||
        mealsForDay.lunch.length > 0 ||
        mealsForDay.dinner.length > 0
    );
  };

  const MealItem = ({ mealType, mealData }) => (
    <div
      className={`scc-food-item ${
        mealType === "lunch" ? "scc-food-item-on" : ""
      }`}
    >
      <div className="scc-food-item-kcal">
        ({mealData.length > 0 ? mealData[0].CAL_INFO : "칼로리 정보 없음"})
      </div>
      <div className="scc-food-item-label">
        {mealType === "breakfast"
          ? "조식"
          : mealType === "lunch"
          ? "중식"
          : "석식"}
      </div>
      <div
        className="scc-food-item-text"
        dangerouslySetInnerHTML={{
          __html:
            mealData.length > 0
              ? mealData[0].DDISH_NM
              : `${mealType} 정보가 없습니다.`,
        }}
      />
    </div>
  );

  return (
    <div className="wrap">
      <div className="inner">
        <div className="sch-schedule-calendar">
          <div className="scc-content-top">
            <div className="scc-content-top-left">
              <Left onClick={handlePrevMonth} />
            </div>
            <div className="scc-content-top-center">
              {currentDate.year}년 {currentDate.month + 1}월
            </div>
            <div className="scc-content-top-right">
              <Right onClick={handleNextMonth} />
            </div>
          </div>
          <div className="ssc-table-top">
            {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
              <div
                className={`ssc-table-top-ceil ${
                  selectedDayOfWeek === index ? "ssc-table-top-ceil-on" : ""
                }`}
                key={index}
                onClick={() => handleDayOfWeekClick(index)}
              >
                {day}
              </div>
            ))}
          </div>
          <div className="scc-table-body">{renderCalendar()}</div>
        </div>

        {isFoodListVisible && (
          <div className="scc-food-itemList">
            {isMealAvailable ? (
              <>
                <MealItem mealType="breakfast" mealData={meals.breakfast} />
                <MealItem mealType="lunch" mealData={meals.lunch} />
                <MealItem mealType="dinner" mealData={meals.dinner} />
              </>
            ) : (
              <div className="no-meal-message">급식이 존재하지 않습니다.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Meal;
