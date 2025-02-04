import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* Identifiants corrects en dur (exemple).
   Dans un vrai projet, il faudrait un appel API, un token, etc. */
const CORRECT_LOGIN = "admin";
const CORRECT_PASSWORD = "Lilian123";

// eslint-disable-next-line react/prop-types
const LoginPage = ({ onLogin }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === CORRECT_LOGIN && password === CORRECT_PASSWORD) {
      onLogin();
      navigate("/");
    } else {
      alert("Identifiants incorrects");
    }
  };

  return (
        <div className="login-page">
    <div className="component-box">
      <div className="container">
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="login">Identifiant :</label>
            <input
              type="text"
              id="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" style={{ marginTop: "15px" }}>
            Se connecter
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
