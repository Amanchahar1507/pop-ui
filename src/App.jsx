import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { usePage } from "./context/usePage";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import FooterNav from "./components/FooterNav";

function App() {
  const { pages, pageIndex } = usePage();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(pages[pageIndex]);
  }, [pageIndex]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <FooterNav />
    </>
  );
}

export default App;
