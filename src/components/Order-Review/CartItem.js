import React from "react";
import Button from "../re-usable-components/Button";

const CartItem = ({ item,removeItem }) => {
  const { _id, name, picture, price } = item;
  return (
    <>
      <div className=" p-4 mt-5 shadow-2xl flex items-center">
        <img className="w-20 h-20" src={picture} alt="" />
        <div className="flex ml-3">
          <div>
            <h4 className="text-2xl font-bold">{name}</h4>
            <p className="text-md font-semibold">Price: ${price}</p>
          </div>
          <div className='ml-4'>
            <Button onClick={() => removeItem(_id)} btn_class="font-bold bg-red-700">x</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
