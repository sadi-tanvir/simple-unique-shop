import React from "react";
import DeleteIcon from "../re-usable-components/DeleteIcon";
import MinusIcon from "../re-usable-components/MinusIcon";
import PlusIcon from "../re-usable-components/PlusIcon";

const CartItem = ({ item, removeItem, qty, incQty,decQty }) => {
  const { _id, name, picture, price } = item;
  return (
    <>
      <div className=" p-4 mt-5 shadow-2xl flex items-center">
        <img className="w-20 h-20" src={picture} alt="" />
        <div className="flex ml-3 justify-center items-center">
          <div>
            <h4 className="text-xl font-bold">{name}</h4>
            <p className="text-md font-semibold">Price: ${price}</p>
            <div className="flex mt-2">
              <MinusIcon 
              onClick={decQty}
              iconClass="h-5 w-5 p-1 rounded bg-red-700 text-white cursor-pointer" />
              <input
                disabled={true}
                className="w-10 pl-3 font-bold"
                value={qty >= 10 ? qty : `0${qty}`}
                type="text"
              />
              <PlusIcon
                onClick={incQty}
                iconClass="h-5 w-5 p-1 rounded bg-green-700 text-white cursor-pointer"
              />
            </div>
          </div>

          <div className="ml-4">
            <DeleteIcon
              iconClass="h-7 w-7 p-1 rounded bg-red-700 text-white cursor-pointer"
              onClick={() => removeItem(_id)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
