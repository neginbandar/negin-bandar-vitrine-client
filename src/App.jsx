import "./App.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import NavTop from "./components/NavTop/NavTop.jsx";
import coverPhoto from "./assets/images/cover1.png";
import StoreProfilePage from "./pages/StoreProfilePage/StoreProfilePage";
import PostPage from "./pages/PostPage/PostPage.jsx";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductPage from "./pages/ProductPage/ProductPage";

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
