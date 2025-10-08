import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
<<<<<<< HEAD
import MainSection from "../components/mainSection";
import BrowserSection from "../components/browserSection";
=======
import ProductSection from "../components/ProductSection";
>>>>>>> product-section
function App() {
  return (
    <>
      <Router>
        <Header />
<<<<<<< HEAD
        <MainSection />
        <BrowserSection />
=======

        <ProductSection />
>>>>>>> product-section
        <Footer />
      </Router>
    </>
  );
}

export default App;
