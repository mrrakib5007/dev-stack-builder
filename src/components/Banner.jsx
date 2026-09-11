import BannerImage from "../assets/banner-stack.png"

const Banner = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-5 my-10 px-5 text-center lg:text-left'>
        <div className="">
            <h1 className='text-center lg:text-left text-3xl lg:text-6xl font-extrabold'>Build Your Ideal <br />
            <span className="brand-gradient-text">Development Stack</span>
            </h1>
            <p className="text-sm lg:text-base text-[#475569] mt-5">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
            <div className="flex gap-2 items-center justify-center lg:justify-start mt-10 lg:mt-12">
                <button className="brand-btn-bg text-white px-4 py-2 font-semibold rounded-md cursor-pointer border border-gray-50 text-sm lg:text-base">Explore Technologies</button>
                <button className=" px-4 py-2 text-[#374151] rounded-md cursor-pointer border border-gray-200 text-sm lg:text-base">Explore Technologies</button>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <img className="max-w-full" src={BannerImage} alt="Banner Image" />
        </div>
    </div>
  )
}

export default Banner