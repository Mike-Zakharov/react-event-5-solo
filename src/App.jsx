import { Outlet } from 'react-router-dom';
import { Header } from './components/header/Header.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { MainContainer } from './components/container/MainContainer.jsx';

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
