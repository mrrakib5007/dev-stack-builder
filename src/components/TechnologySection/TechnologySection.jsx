import { useEffect, useState } from 'react'
import TechnologyContainer from './TechnologyContainer';
import TechnologyCartSection from './TechnologyCartSection';
import { Slide, toast } from 'react-toastify';


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
                toast.error(`Error fetching data`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                    });
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleAddToCart = (techData) => {
        const isAlreadyExist = myTechStack.find(singleTech => singleTech.id === techData.id);

        if (isAlreadyExist) {
            return toast.error(`${techData.name} already added! Duplicate not allow.`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                    });
           
        }

        setMyTechStack([...myTechStack, techData])
        toast.success(`${techData.name} successfully added.`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
            });
        
    }

    const handleRemoveFromCart = (singleTech) => {
        const remainingTech = myTechStack.filter(tech => tech.id !== singleTech.id);
        setMyTechStack(remainingTech);
        toast.success(`${singleTech.name} successfully removed.`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
            });
    }

    const handleRemoveAll = () => {
        setMyTechStack([]);
        toast.success(`Successfully removed all Stack.`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
            });
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
                <TechnologyCartSection myTechStack={myTechStack} handleRemoveFromCart={handleRemoveFromCart} handleRemoveAll={handleRemoveAll} />
            </div>
        </div>
    </div>
  )
}

export default TechnologySection