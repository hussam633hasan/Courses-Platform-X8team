import HeaderHome from "./../../components/HeaderHome/HeaderHome";
import DiscoverLearning from "../../components/DiscoverLearning/DiscoverLearning";
import WhatWillDiscover from "../../components/WhatWillDiscover/WhatWillDiscover";
import ContentInfo from "./../../components/ContentInfo/ContentInfo.jsx";
import Promotion from "./../../components/Promotion/Promotion.jsx";
import Process from "./../../components/Process/Process.jsx";
import ProgramQuestion from '../../components/ProgramQuestion/ProgramQuestion';
import FAQ from'../../components/FAQ/FAQ';
import Testimonials from "../../components/StudentsSaycards/Testimonials";
import BlackWhiteCards from "../../components/Black&WhiteCards/BlackWhiteCards";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Home() {
  return( <>
  <Navbar/>


  <HeaderHome/>
  <ContentInfo />
  <DiscoverLearning />
  <WhatWillDiscover />
  
  <Process />
  <Promotion />
  <Testimonials />
  <BlackWhiteCards /> 
  <ProgramQuestion/>
  <FAQ/>

  <Footer />   

  </>
  )
}
export default Home;
