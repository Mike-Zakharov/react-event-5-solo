import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm';
import useAuth from '../hooks/useAuth';

const AuthPage = () => {
  const navigate = useNavigate();
  const { authenticate, loading, error } = useAuth();


  const onSubmit = async (formData) => {
    const authData = await authenticate(formData);
    if (authData) {
      console.log(authData.auth, authData.token);

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