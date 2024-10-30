import "./App.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import NavTop from "./components/NavTop/NavTop.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage.jsx";
import StoreProfilePage from "./pages/StoreProfilePage/StoreProfilePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import PostUploadPage from "./pages/PostUploadPage/PostUploadPage";
import LogInPage from "./pages/LogInPage/LogInPage.jsx";
import PostPage from "./pages/PostPage/PostPage.jsx";
import MessagesPage from "./pages/MessagesPage/MessagesPage.jsx";
import FeedPage from "./pages/FeedPage/FeedPage";

function App() {
  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  return (
    <>
      <BrowserRouter>
        <NavTop />
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/users/:userId" element={<StoreProfilePage />} />
          <Route path="/posts/:userId/:postId" element={<PostPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/users/:userId/upload" element={<PostUploadPage />} />
          <Route path="users/:userId/messages" element={<MessagesPage />} />
          <Route path="/users/:userId/feed" element={<FeedPage />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
