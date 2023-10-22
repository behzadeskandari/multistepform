import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import InitialInfo from './Pages/InitialInfoPage';import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PasswordScreen from './Pages/PasswordScreen';
import ReviewScreen from './Pages/ReviewScreen';

function App() {
  return (
    <>
       <Router>
        <>
          <Routes>
            <Route path="*" element={<InitialInfo/>} />
            <Route path="StepOne" element={<InitialInfo />} />
            <Route path="StepTwo" element={<PasswordScreen />} />
            <Route path="StepThree" element={<ReviewScreen />} />
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
