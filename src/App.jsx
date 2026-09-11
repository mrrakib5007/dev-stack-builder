import Navbar from './components/Navbar'
import Banner from './components/Banner'
import TechnologySection from './components/TechnologySection/TechnologySection'
import { Slide, ToastContainer } from 'react-toastify'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
          />
      <Navbar />
      <Banner />
      <TechnologySection />
      <Footer />
    </div>
  )
}

export default App