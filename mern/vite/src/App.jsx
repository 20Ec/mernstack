import "./App.css";
import Header from "./component/Header.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Counter from "./component/Counter.jsx";
import Default from "./component/Default.jsx";

function App() {
  return (
    <div>

      <Header />
       <Header title="Welcome to My Site" subtitle="Learn React with Vite" />
      <Header title="Another Section" subtitle="Props make components reusable" />


      <p id="ptag" className="text-primary bg-danger ptag">
        {" "}
        this is vite js{" "}
      </p>

      <Router>
        <nav>
          <Link to="/">Home</Link> | {/* {''} */}
          <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        </nav>

        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

  < Counter/>
  < Default/>

    </div>
  );
}

export default App;
