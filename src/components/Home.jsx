import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';
import Navbar from './ReusableNavbarComponents/Navbar.jsx';
import MobileSidebar from './ReusableNavbarComponents/MobileSidebar.jsx';
import LoansOffered from './HomePageComponents/LoansOffered.jsx';
import FAQSection from './HomePageComponents/FAQSection.jsx';
import HomePageHeroSection from './HomePageComponents/HomePageHeroSection.jsx';
import FeaturesSection from './HomePageComponents/FeaturesSection.jsx';
import Footer from './HomePageComponents/Footer.jsx';
import FeaturedPartners from './HomePageComponents/FeaturedPartners.jsx';
import HomeCardSection from './HomePageComponents/HomeCardSection.jsx';
import VisionSection from './HomePageComponents/VisionSection.jsx';
import ContactUsSection from './HomePageComponents/ContactUsSection.jsx';
import CoursesOffered from './HomePageComponents/CoursesOffered.jsx';




function Home() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <div>
      <Navbar
        user={user}
        navigate={navigate}
        logout={logout}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <MobileSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigate={navigate}
        user={user}
        logout={logout}
      />
      <HomePageHeroSection />
      <LoansOffered />
      <CoursesOffered />
      <VisionSection />
      <FeaturesSection />
      <HomeCardSection />
      <FeaturedPartners />
      <FAQSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}

export default Home;