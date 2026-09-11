import { useEffect, useState } from 'react'
import TechnologyContainer from './TechnologyContainer';
import TechnologyCartSection from './TechnologyCartSection';


const TechnologySection = () => {
    const [technologiesData, setTechnologiesData] = useState([]);
    const [myTechStack, setMyTechStack] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/data.json");
                const data = await res.json();
                setTechnologiesData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleAddToCart = (techData) => {
        const isAlreadyExist = myTechStack.find(singleTech => singleTech.id === techData.id);

        if (!isAlreadyExist) {
           setMyTechStack([...myTechStack, techData])
        }
        
    }

    const handleRemoveFromCart = (singleTech) => {
        const remainingTech = myTechStack.filter(tech => tech.id !== singleTech.id);
        setMyTechStack(remainingTech);
    }
    
  return (
    <div className='container mx-auto my-10 p-5'>
        <div className='text-center lg:text-left'>
            <h1 className='text-2xl lg:text-3xl font-extrabold'>Explore the <span className='brand-gradient-text'>Technologies</span></h1>
            <p className='text-sm lg:text-base text-[#64748B] mt-2'>Pick one technology per category to build your ideal stack.</p>
        </div>
        <div className='flex flex-col lg:flex-row gap-8 mt-10'>
            <div className='flex-1'>
                {
                    loading ? <div className='flex justify-center items-center'>
                        <span className="loading loading-spinner loading-xl"></span> Loading...
                    </div>
                    : 
                    <TechnologyContainer technologiesData={technologiesData} handleAddToCart={handleAddToCart} myTechStack={myTechStack} />
                }
            </div>
            <div className='w-full lg:w-76'>
                <TechnologyCartSection myTechStack={myTechStack} handleRemoveFromCart={handleRemoveFromCart} />
            </div>
        </div>
    </div>
  )
}

export default TechnologySection