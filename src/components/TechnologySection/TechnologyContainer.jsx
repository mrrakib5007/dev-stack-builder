import React from 'react'
import TechnologyDetailsCard from './TechnologyDetailsCard'

const TechnologyContainer = ({ technologiesData, handleAddToCart, myTechStack }) => {
    if (technologiesData.length === 0) {
        return <div className='flex justify-center items-center'>
            <h2>No Technologies Data Found</h2>
        </div>
    }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {technologiesData.map((techData) => (
            <TechnologyDetailsCard key={techData.id} techData={techData} handleAddToCart={handleAddToCart} myTechStack={myTechStack} />
        ))}
    </div>
  )
}

export default TechnologyContainer