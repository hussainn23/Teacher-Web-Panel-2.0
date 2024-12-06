import React, { useEffect, useState } from "react";
import Sidebar from "./Component/Sidebar";
import Navbar from "./Component/Navbar";
import Dashboard from "./Component/Dashboard";
import Attendence from "./Component/Attendence";
import Classes from "./Component/Classes";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Login } from "./Component/Login";
import { Datesheet } from "./Component/Datesheet";
import Result from "./Component/Result";
import Timetable from "./Component/Timetable";
import NoticeBoard from "./Component/NoticeBoard";
import Report from "./Component/Report";
import StudentReport from "./Component/StudentReport";
import Diary from "./Component/Diary";
import Showdiary from "./Component/Showdiary";
import ForgotPassword from "./Component/ForgotPassword";
import { ResetPassword } from "./Component/ResetPassword";
import Protectedroute from "./Component/Protectedroute";
import StudentData from "./Component/StudentData";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Username, setuserName] = useState<string>("");

  useEffect(() => {
    const accessToken=localStorage.getItem("accessToken");
    const user=localStorage.getItem("userinfo");
    if(accessToken&&user){
         setIsLoggedIn(true);
         setuserName(JSON.parse(user).username)
    }
  
  
  }, [])
  
  return (
    <Router>
      <div>
        {isLoggedIn && <Sidebar />}
        {isLoggedIn && <Navbar Username={Username} />}

        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Login
                  setIsLoggedIn={setIsLoggedIn}
                  setuserName={setuserName}
                />
              )
            }
          />

          <Route
            path="/dashboard"
            element={
              <Protectedroute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </Protectedroute>
            }
          />
          <Route
            path="/datesheet"
            element={
              <Protectedroute isLoggedIn={isLoggedIn}>
                <Datesheet />
              </Protectedroute>
            }
          />

          <Route
            path="/attendence"
            element={
              <Protectedroute isLoggedIn={isLoggedIn}>
                <Attendence />
              </Protectedroute>
            }
          />
          <Route
            path="/classes"
            element={
              <Protectedroute isLoggedIn={isLoggedIn}>
                <Classes />
              </Protectedroute>
            }
          />

          <Route
            path="/result"
            element={
              <Protectedroute isLoggedIn={isLoggedIn}>
                <Result />
              </Protectedroute>
            }
          />
          <Route
            path="/timetable"
            element={
              <Protectedroute isLoggedIn={isLoggedIn}>
                <Timetable />
              </Protectedroute>
            }
          />
          <Route
            path="/report"
            element={
              <Protectedroute isLoggedIn={isLoggedIn}>
                <Report />
              </Protectedroute>
            }
          />
          <Route
            path="/studentreport/:name"
            element={
              <Protectedroute isLoggedIn={isLoggedIn}>
                <StudentReport />
              </Protectedroute>
            }
          />

          <Route
            path="/noticeboard"
            element={
              <Protectedroute isLoggedIn={isLoggedIn}>
                <NoticeBoard />
              </Protectedroute>
            }
          />
          <Route
            path="/diary"
            element={
              <Protectedroute isLoggedIn={isLoggedIn}>
                <Diary />
              </Protectedroute>
            }
          />
          <Route
            path="/showdiary"
            element={
              <Protectedroute isLoggedIn={isLoggedIn}>
                <Showdiary />
              </Protectedroute>
            }
          />
            <Route
            path="/student"
            element={
              <Protectedroute isLoggedIn={isLoggedIn}>
                <StudentData />
              </Protectedroute>
            }
          />
        
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
