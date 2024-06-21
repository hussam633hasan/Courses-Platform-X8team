import React from "react";

import DiscoverLearning from "../../components/DiscoverLearning/DiscoverLearning";
import WhatWillDiscover from "../../components/WhatWillDiscover/WhatWillDiscover";
import ContentInfo from "./../../components/ContentInfo/ContentInfo.jsx";
import Promotion from "./../../components/Promotion/Promotion.jsx";
import Process from "./../../components/Process/Process.jsx"

function Home() {
  return( <>
  <DiscoverLearning />
  <WhatWillDiscover />
  <ContentInfo />
  <Process />
  <Promotion />
  </>
  )

}
export default Home;
