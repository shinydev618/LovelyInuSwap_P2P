import styled from "styled-components";
import { Box } from "@mui/material";
import iconLogo from "../Assets/Image/Icon/iconLogo.png";
import { News } from "../Component/News/News";

const Header = () => {
  return (
    <StyledComponent>
      <SectionLogo>
        <IconLogo>
          <img src={iconLogo} width={"100%"} alt="" />
        </IconLogo>
        <TextLogo>
          <span style={{ color: "rgba(214, 221, 238, 1)" }}>LOVELY</span>
          <span style={{ color: "rgba(237, 98, 139, 1)" }}>SWAP</span>
        </TextLogo>
      </SectionLogo>
      <SectionToken>
        <News />
      </SectionToken>
      <SectionConnect></SectionConnect>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 46px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  box-sizing: border-box;
  margin-top: 36px;
`;

const SectionLogo = styled(Box)`
  display: flex;
  align-items: center;
`;

const SectionToken = styled(Box)`
  display: flex;
`;

const SectionConnect = styled(Box)`
  display: flex;
`;

const IconLogo = styled(Box)`
  display: flex;
  width: 32px;
`;

const TextLogo = styled(Box)`
  display: flex;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 168%;
  /* identical to box height, or 24px */

  letter-spacing: 0.07em;
  font-feature-settings: "pnum" on, "lnum" on;

  margin-left: 8px;
`;

export default Header;
