import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

import Shop from './pages/Main.jsx';



import FooterSection from './components/persist_footer/FooterSection.jsx'

import CertificateVerify from './pages/certificate_verify/CertificateVerify.jsx';
import AboutUs from './pages/about_us/Aboutus.jsx';
import ContactUs from './pages/contactus/ContactUs.jsx';

import InternshipWrapper from './pages/internship/internship_wrapper/InternshipWrapper.jsx';
import RegistrationForm from './pages/registration/Registration.jsx';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/verify' element={<CertificateVerify/>}/>
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/apply' element={<InternshipWrapper/>} />
        <Route path="/internship/:grade" element={<RegistrationForm/>} />
        
      </Routes>
      <FooterSection
      heading="Venturing forever, together."
      text="We bring visions to life with a full suite of agencies to help companies start and scale."
      />
      </BrowserRouter>

    </div>
  );
}

export default App;
