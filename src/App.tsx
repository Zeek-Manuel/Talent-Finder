import { Routes, Route } from "react-router-dom";

import Main from "./components/Layout/Main";
import LandingHero from "./components/Layout/Heros/LandingHero";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

import "./styles/Button.css";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<LandingHero />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound /> } />
      </Route>
    </Routes>
  )
}

export default App;
