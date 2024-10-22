import "./App.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import NavTop from "./components/NavTop/NavTop.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage.jsx";
import StoreProfilePage from "./pages/StoreProfilePage/StoreProfilePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import PostUploadPage from "./pages/PostUploadPage/PostUploadPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavTop />
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/store-profile" element={<StoreProfilePage />} />
          {/* <Route path="/posts/:postId" element={<PostPage />} /> */}
          <Route path="/products" element={<ProductPage />} />
          <Route path="/posts/upload" element={<PostUploadPage />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
