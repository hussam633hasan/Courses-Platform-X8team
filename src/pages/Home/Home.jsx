

import DiscoverLearning from "../../components/DiscoverLearning/DiscoverLearning";
import WhatWillDiscover from "../../components/WhatWillDiscover/WhatWillDiscover";
import ContentInfo from "./../../components/ContentInfo/ContentInfo.jsx";
import Promotion from "./../../components/Promotion/Promotion.jsx";
import Process from "./../../components/Process/Process.jsx";
import ProgramQuestion from '../../components/ProgramQuestion/ProgramQuestion';
import FAQ from'../../components/FAQ/FAQ';

function Home() {
  return( <>
  <DiscoverLearning />
  <WhatWillDiscover />
  <ContentInfo />
  <Process />
  <Promotion />
  <ProgramQuestion/>
  <FAQ/>
  </>
  )

}
export default Home;
