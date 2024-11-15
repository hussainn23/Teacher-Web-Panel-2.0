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
                <Navigate to="/dashboard" replace /> // Redirect to dashboard if logged in
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
                <Navigate to="/" replace /> // Redirect to login if not logged in
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
