import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login/Login";
import { HomePage } from "./pages/Home/Home";
import { Secret } from "./pages/Secret";
import { ChatPage } from "./pages/Chat/Chat";
import { HistoryPage } from "./pages/Hist/Hist";
import { ProfilePage } from "./pages/Profile/Profile";
import { ChecksPage } from "./pages/Checks/Checks";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-white w-[375px] h-full absolute  m-auto left-0 right-0 mt-[2rem] px-5">
      <Navbar />
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute title="Главная">
                {" "}
                <HomePage />{" "}
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/history"
            element={
              <ProtectedRoute title="Задания">
                {" "}
                <HistoryPage />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <ProtectedRoute title="Чат">
                {" "}
                <ChatPage />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute title="Профиль">
                {" "}
                <ProfilePage />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/checks"
            element={
              <ProtectedRoute title="Операции">
                {" "}
                <ChecksPage />{" "}
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
