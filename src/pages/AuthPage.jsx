import React from 'react';
import useUserData from '../store/store';
import AuthForm from '../components/AuthForm/AuthForm';
import useAuth from '../hooks/useAuth';

const AuthPage = () => {
  const { authenticate, loading, error } = useAuth();
  const setAuth = useUserData((state) => state.useAuth);
  const setToken = useUserData((state) => state.useToken);

  const onSubmit = async (formData) => {
    const authData = await authenticate(formData);
    if (authData) {
      console.log(authData);
      setAuth(authData.auth);
      setToken(authData.token);
    }
  };

  return (
    <>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <AuthForm onSubmit={onSubmit} />
      {loading && <p>Авторизация...</p>}
    </>
  );
};

export default AuthPage;
