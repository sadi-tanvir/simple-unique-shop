import React from "react";
import Button from "../re-usable-components/Button";

const TShirt = ({ shirt,handleAddToCart }) => {
  const { _id, name, img, price } = shirt;
  return (
    <div className=" p-4 mt-5 shadow-2xl">
      <img className='w-full h-60' src={img} alt="" />
      <div className='mt-5'>
        <h4 title={name} className='text-2xl font-bold'>{name.length > 10 ? `${name.slice(0,10)}...`:name}</h4>
        <p className='text-md font-semibold'>Price: ${price}</p>
        <Button onClick={() => handleAddToCart(shirt)} btn_class="font-bold w-full">add to cart</Button>
      </div>
    </div>
  );
};

export default TShirt;
