import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Stars from "./components/Stars";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import MyHobbies from "./pages/projects/MyHobbies";
import LPLorcana from "./pages/projects/LPLorcana";
import WeatherAPI from "./pages/projects/WeatherAPI";
import WonderfulQuotes from "./pages/projects/WonderfulQuotes";
import RecipeApp from "./pages/projects/RecipeApp";
import FoodOrderingApp from "./pages/projects/FoodOrderingApp";
import LPLorcanaCaseStudy from "./pages/projects/LPLorcanaCaseStudy";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Stars />
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route
              path="/case-study/lplorcana"
              element={<LPLorcanaCaseStudy />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/my-hobbies" element={<MyHobbies />} />
            <Route path="/projects/lp-lorcana" element={<LPLorcana />} />
            <Route path="/projects/weather-api" element={<WeatherAPI />} />
            <Route
              path="/projects/wonderful-quotes"
              element={<WonderfulQuotes />}
            />
            <Route path="/projects/recipe-app" element={<RecipeApp />} />
            <Route
              path="/projects/food-ordering-app"
              element={<FoodOrderingApp />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
