import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieDetail } from "./containers/MovieDetail";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
