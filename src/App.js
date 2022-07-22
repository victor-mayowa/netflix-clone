import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Account from "./Pages/Account";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
