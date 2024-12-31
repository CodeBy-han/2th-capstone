import React, { useState, useEffect } from "react";
import * as S from "../../../style/Setting/Setting.style.js";
import * as A from "../../../style/GlobalStyle.style.js";
import Header from "../../../components/Header.js";
import LogoutModal from "../../../components/modal/LogoutModal.js";

const Setting = () => {
  // State for input_2 and input_3
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);
  const [input3, setInput3] = useState(false);

  // State to control modal visibility
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Load the saved values from localStorage when the component mounts
  useEffect(() => {
    const savedInput1 = localStorage.getItem("input_1") === "true";
    const savedInput2 = localStorage.getItem("input_2") === "true";
    const savedInput3 = localStorage.getItem("input_3") === "true";

    setInput1(savedInput1);
    setInput2(savedInput2);
    setInput3(savedInput3);
  }, []);

  // Save the values to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("input_1", input1);
  }, [input1]);
  useEffect(() => {
    localStorage.setItem("input_2", input2);
  }, [input2]);
  useEffect(() => {
    localStorage.setItem("input_3", input3);
  }, [input3]);

  // Function to handle logout modal
  const HandleLogout = () => {
    setShowLogoutModal(true); // Show the logout modal when logout button is clicked
  };

  // Function to close the modal
  const closeModal = () => {
    setShowLogoutModal(false); // Hide the modal
  };
  let backlink = "";
  if (localStorage.getItem("myuserdepth") === "1") {
    backlink = "/";
  } else if (localStorage.getItem("myuserdepth") === "2") {
    backlink = "/TeacherMain";
  } else if (localStorage.getItem("myuserdepth") === "3") {
    backlink = "/ParentsMain";
  } else if (localStorage.getItem("myuserdepth") === "0") {
    backlink = "/AdminMain";
  }

  return (
    <A.ContentArea>
      <Header name={"설정"} depth={1} backLink={backlink} />
      <S.Setting>
        <div className="wrap">
          <div className="inner">
            <S.SettingBox>
              <div className="setting-box-text">카카오톡 수신 동의</div>
              <input
                type="checkbox"
                name="input_1"
                id="input_1"
                className="hidden"
                checked={input1}
                onChange={(e) => setInput1(e.target.checked)}
              />
              <label
                htmlFor="input_1"
                id="input_label_1"
                className="toggle_out"
              >
                <div className="toggle_in"></div>
              </label>
            </S.SettingBox>

            <S.SettingBox>
              <div className="setting-box-text">메인화면 급식표 위젯 추가</div>
              <input
                type="checkbox"
                name="input_2"
                id="input_2"
                className="hidden"
                checked={input2}
                onChange={(e) => setInput2(e.target.checked)}
              />
              <label
                htmlFor="input_2"
                id="input_label_2"
                className="toggle_out"
              >
                <div className="toggle_in"></div>
              </label>
            </S.SettingBox>

            <S.SettingBox>
              <div className="setting-box-text">메인화면 시간표 위젯 추가</div>
              <input
                type="checkbox"
                name="input_3"
                id="input_3"
                className="hidden"
                checked={input3}
                onChange={(e) => setInput3(e.target.checked)}
              />
              <label
                htmlFor="input_3"
                id="input_label_3"
                className="toggle_out"
              >
                <div className="toggle_in"></div>
              </label>
            </S.SettingBox>

            <S.Button onClick={HandleLogout}>로그아웃</S.Button>
          </div>
        </div>
      </S.Setting>

      {/* Conditionally render LogoutModal based on state */}
      {showLogoutModal && <LogoutModal onClose={closeModal} />}
    </A.ContentArea>
  );
};

export default Setting;
