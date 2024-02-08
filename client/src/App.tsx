import React, { useState } from "react";
import "./App.css";
import requireAuth from "./requireAuth";
import { Routes, Route, useNavigate } from "react-router-dom";
import { LeftNavLayout } from "./components/leftNavLayout/leftNavLayout";

const App: React.FC = () => {
  const AuthenticatedLeftNavLayout = requireAuth(LeftNavLayout);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
    navigate("/");
  };

  return (
    <div>
      {isLogged ? (
        <Routes>
          <Route
            path="/"
            element={<AuthenticatedLeftNavLayout isLogged={isLogged} />}
          />
        </Routes>
      ) : (
        <div className="logDiv">
          <p>
            <strong>HOME PAGE</strong>
          </p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
