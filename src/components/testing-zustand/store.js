import { create } from 'zustand'

export  const useCat = create((set,get) => ({
    cat: "https://cataas.com/cat/gif",

    getACat: async () => {
        get({cat: set({cat: null})})
        try {
            const res = await fetch("https://cataas.com/cat/gif")
            set({cat: res.url})   
        }catch{

        }
    }
}))

