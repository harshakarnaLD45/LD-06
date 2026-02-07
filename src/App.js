import React, { useState, useEffect, useRef, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useParams, useLocation } from 'react-router-dom';
import { NavigationProvider , useNavigation } from './Preload/NavigationProvider';
import { useTranslation } from 'react-i18next';
import './App.css';

import CookieConsent from "react-cookie-consent";
import Header from './Components/HeaderComponent/Header';
import Footer from './Components/FooterComponent/Footer';
import PreloadLinkHandler from './Preload/PreLoadLinkHandler';
import Preloader from './Preload/PreLoader';
import CustomCursor from './Components/NoiseEffect/CustomCursor';
import ProtectedRoute from './Components/ProtectedRoute';


// home page Who we serve paths
import HotelPage from './Pages/HomePage/whowepages/HotelPage';
import CampGrounds from './Pages/HomePage/whowepages/Campground';
import Schools from './Pages/HomePage/whowepages/Schools';
import FactoryPage from './Pages/HomePage/whowepages/Factorypage';
import ClinicsPage from './Pages/HomePage/whowepages/Clinicspage';
import CitiesPage from './Pages/HomePage/whowepages/CitiesPage';
import SeniorHomes from './Pages/HomePage/whowepages/SeniorHomes';
import Transpotationpage from './Pages/HomePage/whowepages/TranspotationPage';
import EventsPage from './Pages/HomePage/whowepages/EventsPage';
import OfficesPage from './Pages/HomePage/whowepages/OfficesPage';


//home page solution section subpages
// import NafCloud from './Pages/SoftwarePage/SoftwarePage';
import NafAi from './Pages/HomePage/solutionpages/Solutions-NafAiPage';
import Telemetry from './Pages/HomePage/solutionpages/Telemetry';
import Payment from './Pages/HomePage/solutionpages/Payments';
import ReuseReturn from './Pages/HomePage/solutionpages/ReuseReturnPage';
import CloudKitchen from './Pages/HomePage/solutionpages/CloudKitchen';
import SoftwareIntegrationPage from './Pages/HomePage/solutionpages/SoftwareIntegrationpage';



import GourmetVendingMachine from './Pages/ProductsPage/GourmetVendingMachine';
import GourmetVendingMachineNoHeating from './Pages/ProductsPage/GourmatvendingMachineNoHeating.js';
//import SoftIceVendingMachine from './Pages/ProductsPage/SoftIceVendingMachine';
import PizzaVendingMachine from './Pages/ProductsPage/PizzaVendingMachine';



import Support from './Pages/Membership/support';


import ChatBot from './Components/ChatBot/ChatBot';


const HomePage = React.lazy(() => import('./Pages/HomePage/HomePage'));
const NAFCloud = React.lazy(() => import('./Pages/NafCloudPage/NafCloud'));
const AboutPage = React.lazy(() => import('./Pages/Company/AboutPage/AboutPage'));
const ContactPage = React.lazy(() => import('./Pages/ContactPage/ContactPage'));
const Menu = React.lazy(() => import('./Pages/Company/Menu/Menu'));
const AutomatsPage = React.lazy(() => import('./Pages/MachinesPage/AutomatsPage'));
const PrivacyPolicyPage = React.lazy(() => import('./Pages/PrivacyPolicy/privacypolicy'));
const ImprintsPage = React.lazy(() => import('./Pages/PrivacyPolicy/imprints'));
const TermsOfUsePage = React.lazy(() => import('./Pages/PrivacyPolicy/terms&policy'));
const Membership = React.lazy(() => import('./Pages/Membership/Membership.js'));
const Dashboard = React.lazy(() => import('./Pages/Membership/Dashboard.js'));
const PaymentPage = React.lazy(() => import('./Pages/Membership/PaymentPage.js'));


const preloadHeavyPages = () => {
  import('./Pages/MachinesPage/AutomatsPage');      // Vending Machine
  import('./Pages/NafCloudPage/NafCloud');      // NafCloud
  import('./Pages/Company/Menu/Menu');              // Food Menu
  import('./Pages/Company/AboutPage/AboutPage');    // Discover NAF
};

const LanguageWrapper = React.memo(() => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const { i18n, t } = useTranslation();
  const preloaderRef = useRef();
  const { setLoading } = useNavigation();
  const location = useLocation();


  useEffect(() => {
    preloadHeavyPages(); // Preload heavy pages in background
  }, []);

  useEffect(() => {
    if (!preloaderRef.current) return;
    preloaderRef.current.style.opacity = "1";
    preloaderRef.current.style.pointerEvents = "all";
    setLoading(true);

    const timer = setTimeout(() => {
      preloaderRef.current.style.transition = "opacity 0.3s ease";
      preloaderRef.current.style.opacity = "0";
      preloaderRef.current.style.pointerEvents = "none";
      setLoading(false);
    }, 50);

    return () => clearTimeout(timer);
  }, [location, setLoading]);




  useEffect(() => {
    const supported = ['de', 'en', 'fr', 'es', 'pl'];
    i18n.changeLanguage(supported.includes(lang) ? lang : 'de');
  }, [lang, i18n]);

  return (
    <>

      <div ref={preloaderRef} className="preloader-wrapper">
        <Preloader />
      </div>


      <Header />


      <CookieConsent
        location="bottom"
        enableDeclineButton
        buttonText={t("Header.accept")}
        declineButtonText={t("Header.reject")}
        containerClasses="cookie-container"
        contentClasses="cookie-content"
        buttonClasses="cookie-accept-button"
        declineButtonClasses="cookie-decline-button"
      >
        <div className="cookie-text bodyMediumText2" style={{ color: '#FCFCFC' }}>
          {t("Header.cookieMessage")}&nbsp;
          <a onClick={() => navigate(`/${lang}/privacy-policy`)} style={{ color: '#FCFCFC' }} className="cookie-link bodyMediumText2">
            {t("Header.privacyPolicy")}
          </a>
        </div>
      </CookieConsent>


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="hotelsresorts" element={<HotelPage />} />
        <Route path="campgrounds" element={<CampGrounds />} />
        <Route path="schools-universities" element={<Schools />} />
        <Route path="factories" element={<FactoryPage />} />
        <Route path="clinics" element={<ClinicsPage />} />
        <Route path="municipalities" element={<CitiesPage />} />
        <Route path="senior-homes" element={<SeniorHomes />} />
        <Route path="transportation" element={<Transpotationpage />} />
        <Route path='events-festivals' element={<EventsPage />} />
        <Route path='offices' element={<OfficesPage />} />


        <Route path="nafai" element={<NafAi />} />
        <Route path="telemetry-monitoring" element={<Telemetry />} />
        <Route path="payment" element={<Payment />} />
        <Route path="reuse-return" element={<ReuseReturn />} />
        <Route path="cloudKitchenPayments" element={<CloudKitchen />} />
        <Route path='software-integration' element={<SoftwareIntegrationPage />} />

        <Route path="automats" element={<AutomatsPage />} />
        {/* <Route path="maintaince" element={<MantaincePage />} / > */}
        <Route path="products/gourmet-machine" element={<GourmetVendingMachine />} />
        <Route path="products/gourmet-machine-no-heating" element={<GourmetVendingMachineNoHeating />} />
       {/* <Route path="products/softIceVendingMachine" element={<SoftIceVendingMachine />} />*/}
        <Route path="products/pizza-machine" element={<PizzaVendingMachine />} />
        <Route path="Nafcloud" element={<NAFCloud />} />
        <Route path="company/about" element={<AboutPage />} />
        <Route path="company/menu" element={<Menu />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="membership" element={<Membership />} />
        <Route path="support" element={<Support />} />
        <Route path="/login" element={<Membership />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/payment/:machineNumber/:amount" element={<PaymentPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-of-use" element={<TermsOfUsePage />} />
        <Route path="imprint" element={<ImprintsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>


      <ChatBot />
      <Footer />


    </>

  );
});



function App() {
  return (
    <NavigationProvider>
      <BrowserRouter>
        <CustomCursor />
        <PreloadLinkHandler>

          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/de" />} />
              <Route path="/:lang/*" element={<LanguageWrapper />} />
            </Routes>
          </Suspense>
        </PreloadLinkHandler>
      </BrowserRouter>
    </NavigationProvider>
  );
}

export default App;
