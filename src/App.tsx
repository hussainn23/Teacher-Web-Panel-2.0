import React, { useState } from 'react';
import Sidebar from './Component/Sidebar';
import Navbar from './Component/Navbar';
import Dashboard from './Component/Dashboard';
import Attendence from './Component/Attendence';
import Classes from './Component/Classes';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './Component/Login';
import { Datesheet } from './Component/Datesheet';
import Result from './Component/Result';
import Timetable from './Component/Timetable';
import NoticeBoard from './Component/NoticeBoard';
import Report from './Component/Report';
import StudentReport from './Component/StudentReport';
import Diary from './Component/Diary';
import Showdiary from './Component/Showdiary';
import ForgotPassword from './Component/ForgotPassword';


const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [Username,setuserName]=useState<string>('')
  return (
    <Router>
      <div >
       
        {isLoggedIn && <Sidebar />}
        {isLoggedIn && <Navbar Username={Username} />}
        
        <Routes>
          <Route 
            path="/" 
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} setuserName={setuserName} />
              )
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              isLoggedIn ? (
                <Dashboard  />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/datesheet" 
            element={isLoggedIn ? <Datesheet /> : <Navigate to="/" replace />}
          />
          <Route 
            path="/attendence" 
            element={isLoggedIn ? <Attendence /> : <Navigate to="/" replace />}
          />
          <Route 
            path="/classes" 
            element={isLoggedIn ? <Classes /> : <Navigate to="/" replace />}
          />
          <Route path='/result'  element={isLoggedIn ? <Result /> : <Navigate to="/" replace />}/>
          <Route path='/timetable'  element={isLoggedIn ? <Timetable /> : <Navigate to="/" replace />}/>
          <Route path='/report'  element={isLoggedIn ? <Report /> : <Navigate to="/" replace />}/>
          <Route
  path="/studentreport/:name"
  element={isLoggedIn ? <StudentReport /> : <Navigate to="/" replace />}
/>

          <Route path='/noticeboard'  element={isLoggedIn ? <NoticeBoard /> : <Navigate to="/" replace />}/>
          <Route path='/diary'  element={isLoggedIn ? <Diary/> : <Navigate to="/" replace />}/>
          <Route path='/showdiary'  element={isLoggedIn ? <Showdiary/> : <Navigate to="/" replace />}/>
          <Route path='/forgotpassword'  element={ <ForgotPassword/>}/>
        
        </Routes>
       
      </div>
    </Router>
  );
};

export default App;
