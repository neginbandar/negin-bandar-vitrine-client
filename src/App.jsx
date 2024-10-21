import "./App.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import NavTop from "./components/NavTop/NavTop.jsx";
import coverPhoto from "./assets/images/cover1.png";
import StoreProfilePage from "./pages/StoreProfilePage/StoreProfilePage";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";

function App() {
  return (
    <>
      <NavTop />
      <ProductPage />
      <Navbar />
    </>
  );
}

export default App;
