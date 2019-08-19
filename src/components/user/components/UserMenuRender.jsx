import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import LoginFormRender from "./login/components/LoginFormRender";

import "./styles.css";

function UserRender(props) {
  const { loading, avatar, name, error, logged } = props;

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const getAvatar = (loading, avatar, error) => {
    let result = "";
    if (loading) {
      result = <p>Loading...</p>;
    } else if (error) {
      result = <p>Error, try again</p>;
    } else if (avatar) {
      result = (
        <p>
          <img className="avatar" src={avatar} alt="avatar" />
        </p>
      );
    }
    return result;
  };

  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    if (logged) {
      setShowLoginForm(false);
      document.title = `Вы нажали ${name} раз`;
    }
  });
  /**
   * Render login form.
   */
  const renderLoginForm = () => {
    let loginForm = null;
    if (!logged && showLoginForm && !loading) {
      loginForm = <LoginFormRender {...props} />;
    }

    return loginForm;
  };

  /**
   * Render user links
   */
  const renderUserLinks = () => {
    let nav = null;
    if (!logged) {
      nav = (
        <ul className="nav">
          <li className="nav-item">
            <div
              className="nav-link active"
              onClick={() => {
                setShowLoginForm(true);
              }}
            >
              Login
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={() => {}}>
              Register
            </div>
          </li>
        </ul>
      );
    }
    return nav;
  };

  return (
    <div>
      {renderUserLinks()}
      {renderLoginForm()}
      {getAvatar(loading, avatar, error)}
      {name}
    </div>
  );
}

export default UserRender;
