import { useState } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import iconLogo from "../Assets/Image/Icon/iconLogo.png";
import iconMetamask from "../Assets/Image/Icon/iconMetamask.png";
import iconBNB from "../Assets/Image/Icon/iconBNB.png";
import { News } from "../Component/News/News";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const [flagSwitchTheme, setFlagSwitchTheme] = useState(false);

  return (
    <StyledComponent>
      <SectionLogo
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
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
      <SectionConnect>
        <SectionWallet>
          <ButtonMetamask>
            <IconMetamask>
              <img src={iconMetamask} width={"100%"} height={"100%"} alt="" />
            </IconMetamask>
            <TextWallet>0xF0 ... e252</TextWallet>
            <IconDown>
              <MdKeyboardArrowDown />
            </IconDown>
          </ButtonMetamask>
          <ButtonNetwork>
            <IconNetwork>
              <img src={iconBNB} width={"100%"} height={"100%"} alt="" />
            </IconNetwork>
            <TextNetwork>BSC Mainnet</TextNetwork>
            <IconDown>
              <MdKeyboardArrowDown />
            </IconDown>
          </ButtonNetwork>
        </SectionWallet>
        <SectionSetting>
          <IconDark flagswitchtheme={flagSwitchTheme ? 1 : 0}>
            <BsFillMoonStarsFill />
          </IconDark>
          <ButtonSwitchTheme
            onClick={() => {
              setFlagSwitchTheme(!flagSwitchTheme);
            }}
            flagswitchtheme={flagSwitchTheme ? 1 : 0}
          >
            <CircleSwitch
              flagswitchtheme={flagSwitchTheme ? 1 : 0}
            ></CircleSwitch>
          </ButtonSwitchTheme>
          <IconLight flagswitchtheme={flagSwitchTheme ? 1 : 0}>
            <BsFillSunFill />
          </IconLight>
        </SectionSetting>
      </SectionConnect>
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
  z-index: 2;
  transition: 0.5s;
`;


const SectionLogo = styled(Box)`
  display: flex;
  align-items: center;
  cursor: pointer;
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

  transition: 0.5s;
  @media (max-width: 1240px) {
    display: none;
  }
`;

const SectionWallet = styled(Box)`
  display: flex;
  align-items: center;
`;

const SectionSetting = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: 32px;

  transition: 0.5s;
  @media (max-width: 1240px) {
    display: none;
  }
`;

const ButtonMetamask = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 170px;
  height: 40px;
  background: #22263d;
  border-radius: 32px;
  padding: 0px 10px 0px 16px;
  box-sizing: border-box;
  cursor: pointer;
`;

const ButtonNetwork = styled(Box)`
  display: flex;
  align-items: center;
  width: 170px;
  height: 40px;
  background: #22263d;
  border-radius: 32px;
  margin-left: 12px;
  padding: 0px 10px 0px 16px;
  box-sizing: border-box;
  cursor: pointer;
`;

const IconMetamask = styled(Box)`
  display: flex;
  width: 24px;
  height: 22px;
  margin-right: 5px;
`;

const TextWallet = styled(Box)`
  display: flex;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.04em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #5c6081;
  opacity: 0.88;
`;

const IconDown = styled(Box)`
  display: flex;
  font-size: 2rem;
  color: rgba(98, 104, 143, 1);
  opacity: 0.64;
`;

const IconNetwork = styled(Box)`
  display: flex;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const TextNetwork = styled(Box)`
  display: flex;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.04em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #5c6081;
  opacity: 0.88;
`;

const IconDark = styled(Box)`
  display: flex;
  color: ${({ flagswitchtheme }) => (!flagswitchtheme ? "#695cff" : "#5c6081")};
  font-size: 1.3rem;
`;

const IconLight = styled(Box)`
  display: flex;
  color: ${({ flagswitchtheme }) => (!flagswitchtheme ? "#5c6081" : "#FDB434")};
  opacity: 0.88;
  font-size: 1.5rem;
`;

const ButtonSwitchTheme = styled(Box)`
  display: flex;
  width: 64px;
  height: 32px;
  align-items: center;
  background: #22263d;
  opacity: 0.88;
  border-radius: 25px;
  margin: 0px 8px;
  padding: 0px 3px;
  box-sizing: border-box;
  cursor: pointer;
  justify-content: ${({ flagswitchtheme }) =>
    !flagswitchtheme ? "flex-start" : "flex-end"};
`;

const CircleSwitch = styled(Box)`
  display: flex;
  width: 28px;
  height: 28px;
  background-color: ${({ flagswitchtheme }) =>
    !flagswitchtheme ? "#323859" : "#ED628B"};
  border-radius: 100%;
`;


export default Header;
