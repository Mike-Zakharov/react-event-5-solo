import { create } from 'zustand'

export  const useCat = create((set,get) => ({
    cat: "https://cdn2.thecatapi.com/images/3gp.jpg",
    counter: 0,
    getACat: async () => {
        
        try {
            let res = await fetch("https://api.thecatapi.com/v1/images/search")
            let data = await res.json()
            let url = data.map(item => {
                return item.url
            })
            console.log(url);
            set({cat: url})
            
                  
        }catch{

        }
    }
}))

