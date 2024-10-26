import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import HelpRequestPage from './pages/HelpRequestPage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import './App.css';
import useUserData from './store/store';

function App() {
  const userData = useUserData(state=> state.userData)
  console.log(userData);
  
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/catalog"
            element={
              <ProtectedRoute>
                <CatalogPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help-request/:itemId"
            element={
              <ProtectedRoute>
                <HelpRequestPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
