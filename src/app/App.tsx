import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DedicatoriaPage from "./pages/dedicatoria/page";
import LandingPage from "./pages/landing/page";
import CreatePage from "./pages/createPage/createPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/create" element={<CreatePage />} />
        <Route path="/dedicatoria" element={<DedicatoriaPage />} />
      </Routes>
    </Router>
  );
};

export default App;
