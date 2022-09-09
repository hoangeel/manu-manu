import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from 'pages/Home';
import Login from 'pages/Login';
import ForgotPassword from 'component/Auth/ForgotPassword';
import Register from 'component/Auth/Register';
import ConfirmationEmail from 'component/Auth/ConfirmationEmail';
import SelectServices from 'pages/SelectServices';
import Step1 from 'component/SelectServices/FullServiceMenu/Step1';
import Step2 from 'component/SelectServices/FullServiceMenu/Step2/AddDishMenu';
import NewDish from 'component/SelectServices/FullServiceMenu/Step2/NewDish';
import Step3 from 'component/SelectServices/FullServiceMenu/Step3';
import QRStep1 from 'component/SelectServices/SimpleQRRedirectService/Step1';
import QRStep2 from 'component/SelectServices/SimpleQRRedirectService/Step2';



/*import "antd/dist/antd.css";*/

ReactDOM.render(
  <BrowserRouter className="manumanu">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/login/forgot-password" element={<ForgotPassword />}/>
        <Route path="/login/register" element={<Register />}/>
        <Route path="/login/register/confirmation-email" element={<ConfirmationEmail />}/>
        <Route path="/select-services" element={<SelectServices />}/>
        <Route path="/select-services/full-service-menu/step1" element={<Step1 />}/>
        <Route path="/select-services/full-service-menu/step2" element={<Step2 />}/>
        <Route path="/select-services/full-service-menu/step2/new-dish" element={<NewDish />}/>
        <Route path="/select-services/full-service-menu/step3" element={<Step3 />}/>
        <Route path="/select-services/simple-qr-redirect-service/step1" element={<QRStep1 />}/>
        <Route path="/select-services/simple-qr-redirect-service/step2" element={<QRStep2 />}/>
    
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
