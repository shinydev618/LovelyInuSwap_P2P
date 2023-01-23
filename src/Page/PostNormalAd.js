import { useState } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import imageProgressUp from "../Assets/Image/Background/Lovely Swap P2P/ProgressPostUp.png";
import imageProgressDown from "../Assets/Image/Background/Lovely Swap P2P/ProgressPostDown.png";
import InputToken from "../Component/Input/InputToken";
import iconDollar from "../Assets/Image/Icon/Chain/us_dollar.png";
import iconTether from "../Assets/Image/Icon/Chain/tether.png";
import { FaArrowRight, FaMinus, FaPlus } from "react-icons/fa";

// import { useNavigate } from "react-router-dom";

const PostNormalAd = () => {
  // const navigate = useNavigate();
  const [flagBuySell, setFlagBuySell] = useState(false);
  const [fixedPrice, setFixedPrice] = useState(33);

  return (
    <StyledComponent>
      <SectionHead>
        <TextHeadTitle>Post Normal Ad</TextHeadTitle>
      </SectionHead>
      <SectionProgress>
        <ImageProgressUp>
          <img src={imageProgressUp} width={"100%"} height={"100%"} alt="" />
        </ImageProgressUp>
        <ImageProgressDown>
          <img src={imageProgressDown} width={"100%"} height={"100%"} alt="" />
        </ImageProgressDown>
        <NumberStep01>1</NumberStep01>
        <NumberStep02>2</NumberStep02>
        <NumberStep03>3</NumberStep03>
      </SectionProgress>
      <SectionTab>
        <GroupTabButton>
          <ButtonTabBuy
            onClick={() => {
              setFlagBuySell(false);
            }}
          >
            <SectinoTabBuyUp
              flagbuysell={flagBuySell ? 1 : 0}
            ></SectinoTabBuyUp>
            <BottomTabBuy flagbuysell={flagBuySell ? 1 : 0}></BottomTabBuy>I
            WANT TO BUY
          </ButtonTabBuy>
          <ButtonTabSell
            onClick={() => {
              setFlagBuySell(true);
            }}
          >
            <SectinoTabSellUp
              flagbuysell={flagBuySell ? 1 : 0}
            ></SectinoTabSellUp>
            <BottomTabSell flagbuysell={flagBuySell ? 1 : 0}></BottomTabSell>I
            WANT TO SELL
          </ButtonTabSell>
        </GroupTabButton>
      </SectionTab>
      <SectionChangeStep01>
        <InputToken title={"Asset"} icon={iconTether} payType={"USDT"} />
        <IconArrowRight>
          <FaArrowRight />
        </IconArrowRight>
        <InputToken title={"With Fiat"} icon={iconDollar} payType={"USD"} />
      </SectionChangeStep01>
      <SectionSetPriceStep01>
        <TextFixPrice>Fixed Price</TextFixPrice>
        <InputPlusMinus>
          <ButtonMinus
            onClick={() => {
              let tempPrice = fixedPrice;
              tempPrice--;
              setFixedPrice(tempPrice);
            }}
          >
            <FaMinus />
          </ButtonMinus>
          <TextFixedPrice>{fixedPrice}</TextFixedPrice>
          <ButtonMinus
            onClick={() => {
              let tempPrice = fixedPrice;
              tempPrice++;
              setFixedPrice(tempPrice);
            }}
          >
            <FaPlus />
          </ButtonMinus>
        </InputPlusMinus>
        <SectionNextStep01>
          <SectionTextStates01>
            <TextYourPrice01>Your Price :</TextYourPrice01>
            {"\u00a0"}
            <TextYourPrice02>{fixedPrice}</TextYourPrice02>
            <TextHighestPrice01>Highest Order Price :</TextHighestPrice01>
            {"\u00a0"}
            <TextHighestPrice02>40</TextHighestPrice02>
          </SectionTextStates01>
          <ButtonNextStep01>NEXT STEP</ButtonNextStep01>
        </SectionNextStep01>
      </SectionSetPriceStep01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 1200px;
  flex-direction: column;
  margin-top: 55px;

  transition: 0.5s;
  @media (max-width: 1600px) {
    width: 900px;
  }
  @media (max-width: 1400px) {
    width: 750px;
  }
`;

const SectionHead = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const TextHeadTitle = styled(Box)`
  display: flex;
  align-items: center;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 34px;
  line-height: 140%;
  /* identical to box height, or 48px */

  letter-spacing: 0.02em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #d6ddee;
`;

const SectionTab = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
`;

const GroupTabButton = styled(Box)`
  display: flex;
  align-items: center;
`;

const ButtonTabBuy = styled(Box)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 30px;

  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.1em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #d1d5ef;
  margin-right: 20px;
  cursor: pointer;
`;

const SectinoTabBuyUp = styled(Box)`
  display: ${({ flagbuysell }) => (!flagbuysell ? "flex" : "none")};
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.16;
  background: linear-gradient(180deg, rgba(95, 132, 245, 0) 0%, #5f84f5 100%);
`;

const BottomTabBuy = styled(Box)`
  display: ${({ flagbuysell }) => (!flagbuysell ? "flex" : "none")};
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 2px;
  background: #5f84f5;
  border-radius: 32px;
`;

const ButtonTabSell = styled(Box)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 30px;

  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.1em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #d1d5ef;
  cursor: pointer;
`;

const SectinoTabSellUp = styled(Box)`
  display: ${({ flagbuysell }) => (flagbuysell ? "flex" : "none")};
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(237, 98, 139, 0) 0%, #ed628b 100%);
  opacity: 0.16;
`;

const BottomTabSell = styled(Box)`
  display: ${({ flagbuysell }) => (flagbuysell ? "flex" : "none")};
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 2px;
  background: #ed628b;
  border-radius: 32px;
`;

const SectionProgress = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  margin-top: 25px;
`;

const ImageProgressUp = styled(Box)`
  display: flex;
  width: 100%;
  height: 48px;
`;

const ImageProgressDown = styled(Box)`
  display: flex;
  width: 100%;
  height: 48px;
`;

const NumberStep01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background: #181b2e;
  border: 2px solid #ed628b;
  color: rgba(209, 213, 239, 0.96);
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.1em;
  font-feature-settings: "pnum" on, "lnum" on;
`;

const NumberStep02 = styled(Box)`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background: #181b2e;
  border: 2px solid rgba(92, 96, 129, 0.56);
  color: rgba(92, 96, 129, 0.96);
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.1em;
  font-feature-settings: "pnum" on, "lnum" on;
`;

const NumberStep03 = styled(Box)`
  display: flex;
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background: #181b2e;
  border: 2px solid rgba(92, 96, 129, 0.56);
  color: rgba(92, 96, 129, 0.96);
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.1em;
  font-feature-settings: "pnum" on, "lnum" on;
`;

const SectionChangeStep01 = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 24px;
  background: #22263d;
  backdrop-filter: blur(3px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 24px;
  padding: 24px;
  box-sizing: border-box;
  align-items: center;
`;

const IconArrowRight = styled(Box)`
  display: flex;
  margin: 0px 20px;
  color: rgba(98, 104, 143, 1);
  font-size: 1.5rem;
`;

const SectionSetPriceStep01 = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #22263d;
  backdrop-filter: blur(3px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 24px;
  padding: 24px;
  box-sizing: border-box;
  margin-top: 5px;
`;

const TextFixPrice = styled(Box)`
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 148%;
  /* identical to box height, or 24px */

  letter-spacing: 0.01em;
  font-feature-settings: "pnum" on, "lnum" on;
  color: rgba(92, 96, 129, 0.8);
`;

const InputPlusMinus = styled(Box)`
  display: flex;
  width: 100%;
  background: #22263d;
  border: 1px solid #323859;
  border-radius: 12px;
  align-items: center;
  padding: 4px;
  box-sizing: border-box;
  justify-content: space-between;
`;

const ButtonMinus = styled(Box)`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: #5f84f5;
  border-radius: 12px;
  color: rgba(255, 255, 255, 1);
  font-size: 1.2rem;
  user-select: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    font-size: 1.5rem;
  }
  &:active {
    font-size: 1.3rem;
  }
`;

const TextFixedPrice = styled(Box)`
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 148%;
  /* identical to box height, or 24px */

  letter-spacing: 0.04em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #5f84f5;
`;

const SectionNextStep01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`;

const SectionTextStates01 = styled(Box)`
  display: flex;
  align-items: center;
`;

const TextYourPrice01 = styled(Box)`
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 148%;
  /* identical to box height, or 24px */

  letter-spacing: 0.01em;
  font-feature-settings: "pnum" on, "lnum" on;
  color: rgba(92, 96, 129, 0.8);
`;

const TextYourPrice02 = styled(Box)`
  font-family: "Livvic";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 148%;
  /* identical to box height, or 24px */

  letter-spacing: 0.01em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #d1d5ef;
`;

const TextHighestPrice01 = styled(Box)`
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 148%;
  /* identical to box height, or 24px */

  letter-spacing: 0.01em;
  font-feature-settings: "pnum" on, "lnum" on;
  color: rgba(92, 96, 129, 0.8);
  margin-left: 40px;
`;

const TextHighestPrice02 = styled(Box)`
  font-family: "Livvic";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 148%;
  /* identical to box height, or 24px */

  letter-spacing: 0.01em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #d1d5ef;
`;

const ButtonNextStep01 = styled(Box)`
  display: flex;
  width: 138px;
  height: 48px;
  background: #ed628b;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.08em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #fff2f6;
  cursor: pointer;
  transition: 0.2s;
  user-select: none;
  &:hover {
    font-size: 14px;
  }
  &:active {
    font-size: 12px;
  }
`;

export default PostNormalAd;
