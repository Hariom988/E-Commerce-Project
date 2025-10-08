import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <main>
        {/* The <Outlet/> component is a placeholder where your child routes will be rendered */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
