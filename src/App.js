import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Instructor from "./components/Instructor/Instructor";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/home" element={<Home></Home>}></Route>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/courses" element={<Courses></Courses>}></Route>
          <Route
            exact
            path="/instructor"
            element={<Instructor></Instructor>}
          ></Route>
          <Route exact path="/about" element={<About></About>}></Route>
          <Route exact path="/contact" element={<Contact></Contact>}></Route>
          <Route exact path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
