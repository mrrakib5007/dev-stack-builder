import React from "react";
import CartTechCard from "./CartTechCard";

const TechnologyCartSection = ({myTechStack, handleRemoveFromCart, handleRemoveAll}) => {

  return (
    <div className="border border-gray-200 p-5 rounded-2xl">
      <h3 className="font-bold text-xl mb-2">Your Stack</h3>
      {
        myTechStack.length === 0 ? <div>
          <p className="text-[#94A3B8] text-sm">
            No technologies selected yet.
          </p>
          <div className="rounded-2xl mt-5 text-center border border-dashed border-gray-200 py-10 text-gray-400">
            <p>Your stack is empty.</p>
          </div>
        </div> : 
        <div>
            <p className="text-[#94A3B8] text-sm mb-5"> {myTechStack.length} Technology Selected </p>
            <div className="grid grid-cols-1 gap-2 mb-4">
                {
                    myTechStack.map(singleTech => <CartTechCard key={singleTech.id} singleTech={singleTech} handleRemoveFromCart={handleRemoveFromCart} />)
                }
            </div>
            <button onClick={handleRemoveAll} className="bg-transparent border border-red-300 text-red-700 p-2 w-full font-semibold rounded-xl cursor-pointer">Remove All</button>
        </div>
      }
    </div>
  );
};

export default TechnologyCartSection;
