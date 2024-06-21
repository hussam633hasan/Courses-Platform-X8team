
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
  <DiscoverLearning />
  <WhatWillDiscover />
  <ContentInfo />
  <Process />
  <Promotion />
  <ProgramQuestion/>
  <FAQ/>
  <Testimonials />
  <BlackWhiteCards />       
  </>
  )
}
export default Home;
