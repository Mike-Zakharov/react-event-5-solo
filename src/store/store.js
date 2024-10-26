import { create } from 'zustand';

const useUserData = create((set) => ({
  userData: [],
  auth: false,
  token: '',
  error: null,
  loading: false,
  useAuth: (newAuth) => {
    
    
    set({ auth: newAuth }, true)
  },
  fetchAuthAndToken: async () => {
    try {
        const response = await fetch(`https://natticharity.eveloth.ru/api/auth`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(errorResponse.message || 'Authentication failed');
        }
  
        const authData = await response.json();
        console.log(authData, 'authData');
        set({auth:authData.auth , token: authData.token }, true)
      } catch (err) {
        setError(err.message);
        return null;
      } finally {
        setLoading(false);
      }
    
    },
}));

export default useUserData;
