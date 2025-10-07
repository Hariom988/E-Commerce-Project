import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductSection from "../components/ProductSection";
function App() {
  return (
    <>
      <Router>
        <Header />
        <ProductSection />
        <Footer />
      </Router>
    </>
  );
}

export default App;
