import React from 'react';
import useUserData from '../store/store';

const LoginPage = () => {

  const userData = useUserData(state=> state.userData);
  const fetchUserData = useUserData(state=> state.fetchUserData);
  let data = fetchUserData()
  console.log(data);

  return <div>LoginPage</div>;

};
export default LoginPage;
