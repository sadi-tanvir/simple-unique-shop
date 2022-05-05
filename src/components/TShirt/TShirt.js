import React from "react";

const TShirt = ({ shirt }) => {
  const { name, picture, price } = shirt;
  return (
    <div className=" p-4 mt-5 shadow-2xl">
      <img className='w-full h-60' src={picture} alt="" />
      <div className='mt-5'>
        <h4 className='text-2xl font-bold'>{name}</h4>
        <p className='text-md font-semibold'>Price: ${price}</p>
      </div>
    </div>
  );
};

export default TShirt;
