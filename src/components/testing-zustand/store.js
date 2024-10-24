import { create } from 'zustand';

const useCat = create((set) => ({
  cat: 'https://cdn2.thecatapi.com/images/3gp.jpg',
  error: null,
  getACat: async () => {
    try {
      const res = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await res.json();
      const url = data.map((item) => item.url);
      console.log(url);
      set({ cat: url });
    } catch (error) {
      set({ error: error.message });
    }
  },
}));

export default useCat;
