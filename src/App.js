import { useState } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Sidebar from "./Layout/Sidebar";
import BackMarquee from "./Component/BackMarquee/BgLayerComponent";
import BuySell from "./Page/BuySell";
import PostNormalAd from "./Page/PostNormalAd";
import { HiMenuAlt2 } from "react-icons/hi";
import MobileMenu from "./Component/MobileMenu/MobileMenu";

const App = () => {
  const [flagMobileMenu, setFlagMobileMenu] = useState(false);
  return (
    <BrowserRouter>
      <StyledComponent>
        <Header />
        <SectionCenter>
          <Sidebar />
          <SectionContent>
            <Routes>
              <Route path="/" element={<BuySell />} />
              <Route path="/post" element={<PostNormalAd />} />
            </Routes>
          </SectionContent>
          <BackMarquee />
        </SectionCenter>
        <Footer />
        <IconMenu
          onClick={() => {
            setFlagMobileMenu(true);
          }}
        >
          <HiMenuAlt2 />
        </IconMenu>
        <MobileMenu flagMobileMenu={flagMobileMenu} setFlagMobileMenu={setFlagMobileMenu} />
      </StyledComponent>
    </BrowserRouter>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #181b2e;
  overflow-y: auto;
`;

const SectionCenter = styled(Box)`
  display: flex;
  width: 100%;
`;

const IconMenu = styled(Box)`
  display: none;
  position: absolute;
  left: -5px;
  top: 43px;
  font-size: 2rem;
  color: #d6ddee;
  z-index: 100;
  cursor: pointer;
  @media (max-width: 1240px) {
    display: flex;
  }
`;

const SectionContent = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  z-index: 4;
  transition: 0.5s;
  @media (max-width: 1240px) {
    justify-content: center;
  }
`;

export default App;
