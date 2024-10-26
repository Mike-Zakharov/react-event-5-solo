import React from 'react';
import useUserData from '../store/store';
import AuthForm from '../components/AuthForm/AuthForm';

const AuthPage = () => {
  const userData = useUserData((state) => state.userData);
  const fetchUserData = useUserData((state) => state.fetchUserData);
  //let data = fetchUserData();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <AuthForm onSubmit={onSubmit} />
    </>
  );
};
export default AuthPage;
