import { React, useEffect, useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./LoginForm.css";
import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { AppConstants as config } from '../../app.constants';
import { useTranslation} from 'react-i18next';
import i18n from '../../i18n'
import Locale from "../Locale/Locale"; 

const LoginForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('');
  const [isSubmitted, setisSubmitted] = useState(false);

  useEffect(() => {
    i18n.changeLanguage('en');
  },[]);

  const onSubmit = () => {
    if(email.length === 0 || password.length === 0){
      setisSubmitted(true);
      return;
    }

    if(!validateEmail(email)){
      return;
    }

    navigate('/home');
    setisSubmitted(false);
  };

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  const handleChildData = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="form-container">
      <Locale onDataSubmit={handleChildData}></Locale>
      <div className="form-wrapper">
        {
          isSubmitted && (email.length === 0 || password.length === 0) && (
            <div className="error-msg text-center">
              {t('fields_empty')}
            </div>
          )
        }
        <div className="logo">
          <img alt="logo" src={Logo} />
        </div>
        <form onSubmit={e => e.preventDefault()}>
          <h4> {t('login')} </h4>
          <div className="input-box">
            <FaUser className="icon" />
            <input
              type="email"
              className='form-control'
              placeholder={t('email_address')}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {
              !validateEmail(email) && email.length > 0 && (
                <span className="error-msg">{t('invalid_email')}</span>
              )
            }
          </div>
          <div className="input-box">
            <FaLock className="icon" />
            <input
              type="password"
              className="form-control"
              placeholder={t('password')}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="btn-lgn">
            <button type="button" className="btn" onClick={onSubmit}>
            {t('login')}
            </button>
          </div>
        </form>
        <a href="javascript:void(0);"  className="forgot-pwd">
          {t('forgotpwd')}
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
