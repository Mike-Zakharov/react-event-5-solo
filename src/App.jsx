import './App.css';
import useUserData from './store/store';

function App() {
  const userData = useUserData(state=> state.userData)
  console.log(userData);
  
  return (
    <>
      {userData}
    </>
  );
}

export default App;
