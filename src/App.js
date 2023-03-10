import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

// Pages
import About from "./Components/About";
import Home from "./Components/Home";
import LogIn from "./Components/LogIn";
import Users from "./Components/Users";
import Error404 from "./Components/Error404";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "red" : "black",
                };
              }}
                to="/">Home</NavLink>
            </li>
            <li>
              <NavLink style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "red" : "black",
                };
              }} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              } to="/login">LogIn</NavLink>
            </li>
            <li>
              <NavLink style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "red" : "black",
                };
              }} to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/users/*" element={<Users />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </Router >
  );
}

export default App;
