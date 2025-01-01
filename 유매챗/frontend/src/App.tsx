import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Character from "./pages/Character";
import NotFound from "./pages/NotFound";
import "./style/Home.css";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="center_view">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/character" element={<Character />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
