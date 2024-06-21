
import DiscoverLearning from "../../components/DiscoverLearning/DiscoverLearning";
import WhatWillDiscover from "../../components/WhatWillDiscover/WhatWillDiscover";
import ContentInfo from "./../../components/ContentInfo/ContentInfo.jsx";
import Promotion from "./../../components/Promotion/Promotion.jsx";
import Process from "./../../components/Process/Process.jsx";
import ProgramQuestion from '../../components/ProgramQuestion/ProgramQuestion';
import FAQ from'../../components/FAQ/FAQ';
import Testimonials from "../../components/StudentsSaycards/Testimonials";
import BlackWhiteCards from "../../components/Black&WhiteCards/BlackWhiteCards";

function Home() {
  return( <>
  <ContentInfo />
  <DiscoverLearning />
  <WhatWillDiscover />
  
  <Process />
  <Promotion />
  <Testimonials />
  <BlackWhiteCards /> 
  <ProgramQuestion/>
  <FAQ/>
      
  </>
  )
}
export default Home;
