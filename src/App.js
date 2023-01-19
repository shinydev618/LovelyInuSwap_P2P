import styled from "styled-components";
import { Box } from "@mui/material";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Sidebar from "./Layout/Sidebar";
// import BackMarquee from "./Component/BackMarquee/BackMarquee";
import BackMarquee from "./Component/BackMarquee/BgLayerComponent";
import Buy from "./Page/Buy";

const App = () => {
  return (
    <StyledComponent>
      <Header />
      <SectionCenter>
        <Sidebar />
        <SectionContent>
          <Buy />
        </SectionContent>
        <BackMarquee />
      </SectionCenter>
      <Footer />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #181b2e;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 100px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #181b2e;
    border-radius: 100px;
  }
`;

const SectionCenter = styled(Box)`
  display: flex;
  width: 100%;
`;

const SectionContent = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  z-index: 4;
`;

export default App;
