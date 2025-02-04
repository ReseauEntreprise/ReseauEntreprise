import  { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages existantes
import Home from "./pages/Home";
import FormationDetail from "./pages/FormationDetail";
import SuiviFormations from "./pages/SuiviFormations";
import Navbar from "./components/Navbar";
import "./styles.css";

// Page de login qu'on vient de créer
import LoginPage from "./pages/LoginPage";

const App = () => {
  // État de connexion
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fonction déclenchée après un login réussi
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      {/* Si utilisateur connecté -> routes protégées
          Sinon -> on affiche juste la page Login */}
      {isLoggedIn ? (
        <div className="app-wrapper">
          <header className="header">
            <h1>Portail de Formations</h1>
          </header>

          <Navbar />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/formation/:id" element={<FormationDetail />} />
              <Route path="/suivi" element={<SuiviFormations />} />
            </Routes>
          </main>
        </div>
      ) : (
        <Routes>
          <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
