import React from "react";
import '../App.css';



const Card= ({items}) =>{
    console.log(items);
    return(
        <div className="card"> 
            <h1>Category: {items.category}</h1>
            <img src={items.image} height={150} width={200}/>
            <p>description: {items.description}</p>
            <h2>Price : {items.price}</h2>
        </div>
    )
}

export default Card;