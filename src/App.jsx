import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/landing_page/header";
import { LandingPage } from "./pages/landing_page";
import { AboutPage } from "./pages/about_page";
import ContactPage from "./pages/contact_page";

const rawBase = import.meta.env.BASE_URL || "/";
const basename = rawBase.replace(/\/$/, "");

function App() {
  return (
    <Router basename={basename}>
      <Header />
      <main className="w-full mt-0">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
