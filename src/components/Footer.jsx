import Logo from '../assets/logo-text.png'

const Footer = () => {
  return (
    <div className='border-t border-gray-200 mt-20'>
        <div className='container mx-auto text-sm px-5 pt-10 pb-6 text-gray-500'>
            <div className='flex gap-8'>
                <div className='w-full lg:max-w-[35%] flex flex-col justify-center text-center lg:text-left items-center lg:items-start gap-4'>
                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <p>Curated tools, technologies, and resources for developers building modern software.</p>
                    <div className='flex items-center gap-2 lg:gap-3 text-black font-semibold'>
                        <a href='#'>GitHub</a>
                        <span className='flex lg:hidden'>•</span>
                        <a href='#'>Twitter</a>
                        <span href='#' className='flex lg:hidden'>•</span>
                        <a href='#'>LinkedIn</a>
                    </div>
                </div>
                <div className='flex-1 hidden lg:grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-extrabold text-black'>PRODUCT</h3>
                        <a href='#'>Home</a>
                        <a href='#'>Technologies</a>
                        <a href='#'>Projects</a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-extrabold text-black'>COMPANY</h3>
                        <a href='#'>About</a>
                        <a href='#'>Contact</a>
                        <a href='#'>Careers</a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-extrabold text-black'>LEGAL</h3>
                        <a href='#'>Privacy Policy</a>
                        <a href='#'>Terms of Service</a>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-200 pt-5 mt-5 flex items-center justify-between'>
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <div className='flex items-center gap-2 lg:gap-6'>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer