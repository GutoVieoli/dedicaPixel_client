import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DedicatoriaPage from "./pages/dedicatoria/page";
import Dedicatoria2Page from "./pages/dedicatoria_v2/page";
import LandingPage from "./pages/landing/page";
import CreatePage from "./pages/createPage/createPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/create" element={<CreatePage />} />
        <Route path="/dedicatoria" element={<DedicatoriaPage />} />
        <Route path="/dedicatoria2" element={<Dedicatoria2Page />} />
      </Routes>
    </Router>
  );
};

export default App;
