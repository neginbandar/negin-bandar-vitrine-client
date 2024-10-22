import "./App.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import NavTop from "./components/NavTop/NavTop.jsx";
import PostUploadPage from "./pages/PostUploadPage/PostUploadPage";

function App() {
  return (
    <>
      <NavTop />
      <PostUploadPage />
      <Navbar />
    </>
  );
}

export default App;
