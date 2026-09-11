import React from 'react'

const TechnologyDetailsCard = ({ techData, handleAddToCart, myTechStack }) => {
    const { id, name, category, description, icon, rating, difficulty, badge, badgeColor } = techData;
    const isExist = myTechStack.some(tech => tech.id === id);

    return (
        <div className={`bg-white border ${isExist ? "border-red-300" : "border-gray-200"} rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full`}>
            <div>
                <div className='flex justify-between items-start mb-4'>
                    <div className='w-12 h-12 flex items-center justify-center'>                         
                        <img 
                            src={icon} 
                            alt={`${name} logo`} 
                            className='w-full h-full object-contain' 
                        />
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${badgeColor || 'bg-gray-100 text-gray-600'}`}>
                            {badge}
                    </span>
                </div>

                <h3 className='text-xl font-bold text-gray-900 mb-2'>{name}</h3>
                
                <p className='text-sm text-gray-500 leading-relaxed mb-6'>
                    {description}
                </p>
            </div>

            <div>
                <div className='border-t border-gray-100 pt-4 mb-4 flex items-center justify-between text-xs font-medium text-gray-500'>
                    <span className='px-2.5 py-1 bg-gray-100 rounded-md text-gray-600'>
                        {category}
                    </span>
                    <span>{difficulty}</span>
                    <div className='flex items-center gap-1 text-gray-700 font-semibold'>
                        <span className='text-amber-400 text-sm'>★</span>
                        <span>{rating}</span>
                    </div>
                </div>

                <button onClick={() => handleAddToCart(techData)} disabled={isExist} className={`w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer disabled:bg-red-100 disabled:text-red-500`}>
                    {
                        isExist ? "✔ Added to Stack" : "Add to Stack"
                    }
                </button>
            </div>
        </div>
    )
}

export default TechnologyDetailsCard