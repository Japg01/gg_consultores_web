import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/landing_page/header";
import { LandingPage } from "./pages/landing_page";
import { AboutPage } from "./pages/about_page";
import ContactPage from "./pages/contact_page";


function App() {
  return (
    <Router>
      <Header />
      <main className="w-full mt-0">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage/>} />

        </Routes>
      </main>
    </Router>
  );
}

export default App;
