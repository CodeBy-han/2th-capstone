import * as S from "../../style/SchoolCamping/Modal.style";
import * as A from "../../style/SchoolCamping/SerchModalModal.style";
import { useRef, useEffect, useState } from "react";
import UserData from "../../page/student/SchoolCamping/data/userData";

const AddUserModal = ({ closeModal, serchDept = "all", setSerchResult }) => {
  const ModalRef = useRef();
  const [selectedDept, setSelectedDept] = useState(
    serchDept === "all" ? "학생" : serchDept
  );
  const [serchInput, setSerchInput] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("1");
  const [selectedClass, setSelectedClass] = useState("1");
  const [isLoding, setIsLoding] = useState(false);

  const [modalSerchResult, setModalSerchResult] = useState([]);

  useEffect(() => {
    document.addEventListener("mousedown", clickModalOutside);
    return () => {
      document.removeEventListener("mousedown", clickModalOutside);
    };
  });

  const clickModalOutside = (event) => {
    if (!ModalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  const onResult = (user) => {
    console.log(user);
    setSerchResult({ data: user });
  };

  const onSerch = (selectedDept, selectedGrade, selectedClass, serchInput) => {
    setIsLoding(true);
    if (selectedDept === "선생님") {
      console.log(selectedDept, serchInput);
      const user = UserData.filter(
        (user) => user.dept === 2 && (!serchInput || user.name === serchInput)
      );
      setModalSerchResult(user);
      console.log(user);
    } else if (selectedDept === "학생") {
      console.log(selectedDept, selectedGrade, selectedClass, serchInput);
      const serchClass = String(selectedGrade + selectedClass);
      console.log("검색할 Class : ", serchClass);

      const users = UserData.filter(
        (user) =>
          user.dept === 1 &&
          user.class?.substring(0, 2) === serchClass &&
          (!serchInput || user.name === serchInput)
      );

      setModalSerchResult(users);
      console.log(users);
    }

    setTimeout(() => setIsLoding(false), 1000);
  };

  return (
    <S.ModalContainer>
      <S.Modal ref={ModalRef}>
        <A.Container>
          <div className="head">
            <h3>유저 검색</h3>
            <button className="close_btn" onClick={closeModal}>
              X
            </button>
          </div>
          <div className="serchForm">
            <select
              className="select"
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              {...(serchDept === "all" ? {} : { disabled: true })}
            >
              <option>학생</option>
              <option>선생님</option>
            </select>
            {serchDept !== "선생님" && (
              <>
                <select
                  className="select"
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                >
                  <option value={"1"}>1학년</option>
                  <option value={"2"}>2학년</option>
                  <option value={"3"}>3학년</option>
                </select>
                <select
                  className="select"
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                >
                  <option value={"1"}>소프트웨어개발과 1반</option>
                  <option value={"2"}>소프트웨어개발과 2반</option>
                  <option value={"3"}>인공지능개발과</option>
                  <option value={"4"}>게임개발과</option>
                </select>
              </>
            )}
            <div className="serchInputContainer">
              <input
                className="serchInput"
                value={serchInput}
                onChange={(e) => setSerchInput(e.target.value)}
              />
              <button
                className="serchBtn"
                onClick={() =>
                  onSerch(
                    selectedDept,
                    selectedGrade,
                    selectedClass,
                    serchInput
                  )
                }
              >
                검색
              </button>
            </div>
            <div className="result">
              {isLoding ? (
                <div className="spinner"></div>
              ) : (
                <div className="userSelectContainer">
                  {modalSerchResult.map((user, index) => (
                    <div key={index} className="userSelect">
                      {user.class && <div>{user.class}</div>}
                      {user.dept === 2 && <div>{index + 1}</div>}
                      <div>{user.name}</div>
                      <button className="btn" onClick={() => onResult(user)}>
                        선택
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </A.Container>
      </S.Modal>
    </S.ModalContainer>
  );
};

export default AddUserModal;
