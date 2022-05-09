import React, { useState } from "react";
import useTShirt from "../../hooks/useTShirt";
import OrderReview from "../Order-Review/OrderReview";
import TShirt from "../TShirt/TShirt";

const Home = () => {
  const [tShirt, setTShirt] = useTShirt();
  console.log(tShirt);
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(1)
  // const [isAvailable, setIsAvailable] = useState()
  // add to cart item
  const handleAddToCart = (item) => {
    const productId = cart.map(item => item._id)
    if(productId.includes(item._id)){
      setQty(qty+1)
    }else{
      setCart([...cart, item]);
    }

  };
  
  // remove from cart item
    const removeItem = (id) => {
        const restItem = cart.filter(item => item._id !== id)
        setCart(restItem)
    }

    // remove all item from cart
    const removeAllItem = () => {
      setCart([])
    }

    // increse quantity
    const incQty = () => {
      setQty(qty+1)
    }
    // increse quantity
    const decQty = () => {
      if(qty <= 1){
        return;
      }else{
        setQty(qty-1)
      }
    }

  return (
    <div className="grid grid-cols-12">
      {/* product container */}
      <div className="col-span-8 grid grid-cols-3 gap-x-4 gap-y-4 px-5">
        {tShirt.map((shirt) => (
          <TShirt
            handleAddToCart={handleAddToCart}
            key={shirt.id}
            shirt={shirt}
          />
        ))}
      </div>

      {/* review container */}
      <div className="col-span-4">
        <OrderReview removeItem={removeItem} removeAllItem={removeAllItem} cart={cart} qty={qty} incQty={incQty} decQty={decQty}/>
      </div>
    </div>
  );
};

export default Home;
