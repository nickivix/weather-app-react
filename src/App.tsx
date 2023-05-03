import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { WeatherDetails } from "./pages/WeatherDetails";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weather/:cityName" element={<WeatherDetails />} />
      </Routes>
    </>
  );
}

export default App;
