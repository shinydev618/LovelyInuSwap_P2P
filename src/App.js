import styled from "styled-components";
import { Box } from "@mui/material";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Sidebar from "./Layout/Sidebar";

const App = () => {
  return (
    <StyledComponent>
      <Header />
      <SectionCenter>
        <Sidebar />
        <SectionContent></SectionContent>
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
`;

const SectionCenter = styled(Box)`
  display: flex;
  width: 100%;
`;

const SectionContent = styled(Box)`
  display: flex;
  width: 100%;
`;

export default App;
