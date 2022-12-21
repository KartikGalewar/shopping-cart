import React from "react";
import { CartState } from "../context/Context";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
import "./Styles.css";

function Home() {
  const {
    state: { products },
    productstate: { byStock, byFastDelivery, byRating, sort, searchQuery },
    dispatch,
  } = CartState();

  console.log("from Home js",byRating);
  console.log("from Home js",products);


  const trasform = ()=>{
      let sortedProducts = products;
      
      if(sort==="lowToHigh") {
        sortedProducts = sortedProducts.sort((a,b) => a.price-b.price);
      } else if (sort==="highToLow") {
        sortedProducts = sortedProducts.sort((a,b)=> b.price-a.price);
      }

      if(byFastDelivery){
        sortedProducts = sortedProducts.filter((prod)=> prod.fastDelivery )
      }

      if(!byStock) {
        sortedProducts = sortedProducts.filter((prod)=> prod.inStock )
      }

      if(byRating){
        sortedProducts =  sortedProducts.filter((prod)=> prod.ratings >= byRating )
      }

      if(searchQuery){
        sortedProducts = sortedProducts.filter((prod)=>
          prod.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }

      return sortedProducts
  }

  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {trasform().map((prod) => (
          <SingleProduct key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
}

export default Home;
