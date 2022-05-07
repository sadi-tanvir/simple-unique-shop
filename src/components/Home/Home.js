import React, { useState } from "react";
import useTShirt from "../../hooks/useTShirt";
import OrderReview from "../Order-Review/OrderReview";
import TShirt from "../TShirt/TShirt";

const Home = () => {
  const [tShirt, setTShirt] = useTShirt();
  const [cart, setCart] = useState([]);

  // add to cart item
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
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
        <OrderReview removeItem={removeItem} removeAllItem={removeAllItem} cart={cart} />
      </div>
    </div>
  );
};

export default Home;
