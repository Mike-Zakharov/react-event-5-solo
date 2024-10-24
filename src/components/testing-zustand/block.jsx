import React from "react";
import { useCat } from "./store";


const Block = () => {
    let cat = useCat(store => store.cat);
    const getACat = useCat(store => store.getACat)
    console.log(cat);
    const changeCat = () => {
        
        getACat()
    }
    return (
        <div>
           <img src={cat}  alt="cat" style={{width:200 + 'px', height: 200 + 'px'}}/>
           <button onClick={changeCat}>click</button>
        </div>
    )
}


export default Block;