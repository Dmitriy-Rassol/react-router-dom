import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Contacts from "./Contacts/Contacts.jsx";

function App() {
  return (
    <>
      <div className="App">
        <h1>React приложение</h1>
        <h2>Rest API</h2>
        <div className="router-nav-container">
          <nav className="navigation-menu">
            <div className="navigation-menu__container">
              <div>
                <Link to="/home" className="link">
                  Домой
                </Link>
              </div>
              <div>
                <Link to="/about" className="link">
                  О нас
                </Link>
              </div>
              <div>
                <Link to="/contacts" className="link">
                  Контакты
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
