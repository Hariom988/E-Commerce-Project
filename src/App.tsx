import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainSection from "../components/mainSection";
import BrowserSection from "../components/browserSection";
function App() {
  return (
    <>
      <Router>
        <Header />
        <MainSection />
        <BrowserSection />
        <Footer />
      </Router>
    </>
  );
}

export default App;
