import React, { useState } from 'react'

const CartTechCard = ({singleTech, handleRemoveFromCart}) => {
    const [isSelected, setIsSelected] = useState(false);
    const {id, name, category, icon} = singleTech;
  return (
    <div className='border border-gray-200 p-3 rounded-xl flex items-center justify-between'>
        <div className='flex items-center gap-1.5'>
            <img className='w-12 h-12' src={icon} alt={`${name} logo`} />
            <div>
                <h3 className='font-bold text-sm mb-0.5'>{name}</h3>
                <p className='text-xs text-gray-400'>{category}</p>
            </div>
        </div>
        <div>
            <button onClick={() => handleRemoveFromCart(singleTech)} className='text-xl font-bold text-[#475569] cursor-pointer'>✕</button>
        </div>

    </div>
  )
}

export default CartTechCard