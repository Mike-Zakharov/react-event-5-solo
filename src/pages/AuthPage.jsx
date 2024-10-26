import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUserData from '../store/store';
import AuthForm from '../components/AuthForm/AuthForm';
import useAuth from '../hooks/useAuth';

const AuthPage = () => {
  const navigate = useNavigate();
  const { authenticate, loading, error } = useAuth();
  const setAuth = useUserData((state) => state.useAuth);
  const setToken = useUserData((state) => state.useToken);

  const onSubmit = async (formData) => {
    const authData = await authenticate(formData);
    if (authData) {
      setAuth(authData.auth);
      setToken(authData.token);
      navigate('/catalogue');
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