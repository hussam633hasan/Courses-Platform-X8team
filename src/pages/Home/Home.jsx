import React from "react";
import Navbar from "./../../components/Navbar/Navbar.jsx";
import ContentInfo from "./../../components/ContentInfo/ContentInfo.jsx";
import Promotion from "./../../components/Promotion/Promotion.jsx";
import Process from "./../../components/Process/Process.jsx"
function Home() {
  return (
    <>
      <Navbar />
      <ContentInfo />
      <Process />
      <Promotion />
      
    </>
  );
}
export default Home;
