import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Filter = () => {
  const {
    productstate: { byStock, byFastDelivery, byRating, sort, searchQuery },
    productdispatch,
  } = CartState();

  console.log(byStock, byFastDelivery, byRating, searchQuery,sort);

  return (
    <div className="filter">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Low to High price"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() => {
            productdispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" });
          }}
          checked={sort === "lowToHigh"?true:false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="High to low price"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={ ()=> {
            productdispatch({type: "SORT_BY_PRICE",payload:"highToLow"});
          } }
          checked={sort === "highToLow"?true:false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of stock"
          name="group2"
          type="checkbox"
          id={`inline-3`}
          onChange={()=>{
            productdispatch({type:"FILTER_BY_STOCK"} )
          }}

          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery only"
          name="group2"
          type="checkbox"
          id={`inline-4`}
          onChange={()=>{
            productdispatch({type:"FILTER_BY_DELIVERY"})
          }}
          checked={byFastDelivery}
        />
      </span>

      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productdispatch({ type: "FILTER_BY_RATING", payload: i + 1 })
          }
          style={{ cursor: "pointer" }}
        />
      </span>

      <Button variant="light" className="button-mob" onClick={()=>{
            productdispatch({type:"CLEAR_FILTER"})
          }} > Clear Button </Button>
    </div>
  );
};

export default Filter;
