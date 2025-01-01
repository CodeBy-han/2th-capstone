import * as S from "../../../../style/home/home.stye.js";
import * as A from "../../../../style/SchoolCamping/ApplySection.style.js";
import Header from "../../../../components/Header.js";
import Calendar from "../../../../components/SchoolCamping/Calendar/Calendar.js";
import AddUserModal from "../../../../components/SchoolCamping/SerchUserModal.js";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SchoolCampingApply = () => {
  const navigate = useNavigate();
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [teacher, setTeacher] = useState([]);
  const [friends, setFriends] = useState([]);
  const [modal, setModal] = useState(false);
  const [serchDept, setSerchDept] = useState("all");
  const [serchResult, setSerchResult] = useState({});

  const [canSubmit, setCanSubmit] = useState(false);

  const getDaysInMonth = useCallback(
    (year, month) => new Date(year, month + 1, 0).getDate(),
    []
  );

  const getFirstDayOfMonth = useCallback(
    (year, month) => new Date(year, month, 1).getDay(),
    []
  );

  const generateCalendar = useCallback(
    (year, month) => {
      const daysInMonth = getDaysInMonth(year, month);
      const firstDay = getFirstDayOfMonth(year, month);
      const weeks = [];
      let days = Array.from({ length: firstDay }, () => ({
        day: null,
        type: "null",
      }));

      for (let i = 1; i <= daysInMonth; i++) {
        days.push({ day: i, type: "normal" });
        if (days.length === 7) {
          weeks.push(days);
          days = [];
        }
      }

      if (days.length) {
        while (days.length < 7) days.push({ day: null, type: "null" });
        weeks.push(days);
      }

      return weeks;
    },
    [getDaysInMonth, getFirstDayOfMonth]
  );

  const [calendar, setCalendar] = useState(
    generateCalendar(currentYear, currentMonth)
  );

  useEffect(() => {
    setCalendar(generateCalendar(currentYear, currentMonth));
  }, [currentMonth, currentYear, generateCalendar]);

  useEffect(() => {
    if (friends && teacher && selectedDate) {
      setCanSubmit(true);
    }
  }, [friends, teacher, selectedDate]);

  const onClickDay = (day) => {
    if (day === null) return;
    setCalendar((prevCalendar) =>
      prevCalendar.map((week) =>
        week.map((d) =>
          d.day === day
            ? { ...d, type: "check" }
            : { ...d, type: d.type === "null" ? "null" : "normal" }
        )
      )
    );
    console.log(currentYear, currentMonth, day);
    const date = new Date(currentYear, currentMonth, day);
    setSelectedDate(date);
  };

  const closeModal = () => {
    setModal(false);
  };

  const openModal = (serchDept) => {
    setSerchDept(serchDept);
    setModal(true);
  };

  const userDelete = (user) => {
    if (user.dept === 1) {
      setFriends((prevFriends) =>
        prevFriends.filter((friend) => friend.name !== user.name)
      );
    } else return;
  };

  useEffect(() => {
    if (!serchResult.data) {
      return;
    }
    if (serchResult.data.dept === 1) {
      setFriends((prevFriends) => {
        const isAlreadyFriend = prevFriends.some(
          (friend) =>
            friend.class === serchResult.data.class &&
            friend.name === serchResult.data.name
        );
        if (!isAlreadyFriend) {
          return [...prevFriends, serchResult.data];
        }
        return prevFriends;
      });
    }
    if (serchResult.data.dept === 2) {
      setTeacher(serchResult.data.name);
    }
    console.log(serchResult);
    closeModal();
  }, [serchResult]);

  const onClickApply = () => {
    if (canSubmit) {
      alert("신청 완료되었습니다.");
      navigate("/SchoolCamping");
    }
  };

  return (
    <S.ContentArea>
      {modal && (
        <AddUserModal
          serchDept={serchDept}
          closeModal={closeModal}
          setSerchResult={setSerchResult}
        />
      )}
      <Header name={"스쿨캠핑 신청"} depth={1} backLink={"/SchoolCamping"} />
      <S.Home>
        <div className="wrap">
          <div className="inner">
            <Calendar
              onClickDay={onClickDay}
              calendar={calendar}
              currentYear={currentYear}
              currentMonth={currentMonth}
              setCurrentYear={setCurrentYear}
              setCurrentMonth={setCurrentMonth}
            />
            <A.ApplySection>
              <h4>신청 날짜</h4>
              <div>
                {selectedDate
                  ? selectedDate.toLocaleDateString()
                  : "날짜를 선택하세요"}
              </div>
            </A.ApplySection>
            <A.ApplySection>
              <div className="head_section">
                <h4>선생님</h4>
                <button
                  className="add_user_button"
                  onClick={() => openModal("선생님")}
                >
                  +
                </button>
              </div>
              <div className="user_info">{teacher}</div>
            </A.ApplySection>
            <A.ApplySection>
              <div className="head_section">
                <h4>친구들</h4>
                <button
                  className="add_user_button"
                  onClick={() => openModal("학생")}
                >
                  +
                </button>
              </div>
              <div className="user_info">
                {friends.map((user, index) => (
                  <div key={index} className="user">
                    <div>{`${user.class} ${user.name}`}</div>
                    <button onClick={() => userDelete(user)} className="btn">
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </A.ApplySection>
            <A.ApplySection>
              <button
                onClick={onClickApply}
                className={`${canSubmit ? "submitTrue" : "submitFalse"}`}
              >
                신청하기
              </button>
            </A.ApplySection>
          </div>
        </div>
      </S.Home>
    </S.ContentArea>
  );
};

export default SchoolCampingApply;
