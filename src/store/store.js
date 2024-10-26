import { create } from 'zustand';

const useUserData = create((set) => ({
  userData: [],
  auth: false,
  token: '',
  error: null,
  loading: false,
  useAuth: (newAuth) => set({ auth: newAuth }),
  useToken: (newToken) => set({ token: newToken }),
}));

export default useUserData;
