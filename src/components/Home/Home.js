import React from "react";
import useTShirt from "../../hooks/useTShirt";
import TShirt from "../TShirt/TShirt";

const Home = () => {
  const [tShirt, setTShirt] = useTShirt();

  return (
    <div className="grid grid-cols-12">
      {/* product container */}
      <div className="col-span-8 grid grid-cols-3 gap-x-4 gap-y-4 px-5">
        {tShirt.map((shirt) => (
          <TShirt key={shirt.id} shirt={shirt} />
        ))}
      </div>

      {/* review container */}
      <div className="col-span-4 bg-cyan-200">
        <h1>Order page review</h1>
      </div>
    </div>
  );
};

export default Home;
