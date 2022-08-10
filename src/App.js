import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Home from "./Pages/Homepage/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/Single-page/Single";
import Write from "./Pages/Write-page/Write";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
