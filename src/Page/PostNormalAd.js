import { useState } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import imageProgressUp01 from "../Assets/Image/Background/Lovely Swap P2P/ProgressPostUp01.png";
import imageProgressDown01 from "../Assets/Image/Background/Lovely Swap P2P/ProgressPostDown01.png";
import imageProgressUp02 from "../Assets/Image/Background/Lovely Swap P2P/ProgressPostUp02.png";
import imageProgressDown02 from "../Assets/Image/Background/Lovely Swap P2P/ProgressPostDown02.png";
import InputToken from "../Component/Input/InputToken";
import iconDollar from "../Assets/Image/Icon/Chain/us_dollar.png";
import iconTether from "../Assets/Image/Icon/Chain/tether.png";
import {
  FaArrowDown,
  FaArrowRight,
  FaMinus,
  FaPlus,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { MdKeyboardArrowDown, MdOutlineMultipleStop } from "react-icons/md";
import ModalPaymentMethod from "../Component/Modal/ModalPaymentMethod";
import { RefContext } from "../Context/ContextUseState";
import { useContext } from "react";
// import { useNavigate } from "react-router-dom";

const PostNormalAd = () => {
  // const navigate = useNavigate();
  const { handleOpenModalPayment } = useContext(RefContext);
  const [flagBuySell, setFlagBuySell] = useState(false);
  const [fixedPrice, setFixedPrice] = useState(33);
  const [flagNextStep, setFlagNextStep] = useState(0);
  const handleSetPaymentMethod = () => {
    handleOpenModalPayment();
  };

  return (
    <StyledComponent>
      <SectionHead>
        <TextHeadTitle>Post Normal Ad</TextHeadTitle>
      </SectionHead>
      <SectionProgress>
        <ImageProgressUp>
          <img
            src={flagNextStep === 0 ? imageProgressUp01 : imageProgressUp02}
            width={"100%"}
            height={"100%"}
            alt=""
          />
        </ImageProgressUp>
        <ImageProgressDown>
          <img
            src={flagNextStep === 0 ? imageProgressDown01 : imageProgressDown02}
            width={"100%"}
            height={"100%"}
            alt=""
          />
        </ImageProgressDown>
        <NumberStep01>1</NumberStep01>
        <NumberStep02 flagstep={flagNextStep}>2</NumberStep02>
        <NumberStep03>3</NumberStep03>
        <TextNumberStep01 flagstep={flagNextStep}>
          Set Type & Price
        </TextNumberStep01>
        <TextNumberStep02 flagstep={flagNextStep}>
          Set Total Amount & Payment Method
        </TextNumberStep02>
        <TextNumberStep03 flagstep={flagNextStep}>
          Set Remarks & Automatic Response
        </TextNumberStep03>
      </SectionProgress>
      {flagNextStep === 0 ? (
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
      ) : (
        <></>
      )}

      {flagNextStep === 0 ? (
        <SectionStep01>
          <SectionChangeStep01>
            <InputToken title={"Asset"} icon={iconTether} payType={"USDT"} />
            <IconArrowRight>
              <FaArrowRight />
            </IconArrowRight>
            <MobileIconArrowDown>
              <FaArrowDown />
            </MobileIconArrowDown>
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
                <TextYourPrice01>
                  Your Price :{"\u00a0"}
                  <TextYourPrice02>{fixedPrice}</TextYourPrice02>
                </TextYourPrice01>

                <TextHighestPrice01>
                  Highest Order Price :{"\u00a0"}
                  <TextHighestPrice02>40</TextHighestPrice02>
                </TextHighestPrice01>
              </SectionTextStates01>
              <ButtonNextStep01
                onClick={() => {
                  setFlagNextStep(1);
                }}
              >
                NEXT STEP
              </ButtonNextStep01>
            </SectionNextStep01>
          </SectionSetPriceStep01>
        </SectionStep01>
      ) : flagNextStep === 1 ? (
        <SectionStep02>
          <SectionAmountStep02>
            <InputToken
              title={"Total Amount"}
              placeholder={"0"}
              icon={iconTether}
              payType={"USDT"}
            />
            <SectionOrderLimit>
              <InputToken
                title={"Order Limit"}
                placeholder={"500"}
                icon={iconDollar}
                payType={"USD"}
              />
              <IconArrowRight>
                <MdOutlineMultipleStop />
              </IconArrowRight>
              <MobileIconArrowDown>
                <MdOutlineMultipleStop />
              </MobileIconArrowDown>

              <InputToken
                title={"With Fiat"}
                placeholder={"50,000"}
                icon={iconDollar}
                payType={"USD"}
              />
            </SectionOrderLimit>
          </SectionAmountStep02>
          <SectionPaymentMethodStep02>
            <PaymentUpStep02>
              <PaymentMethod>
                <TextDialogPaymentMethod>
                  Payment method
                </TextDialogPaymentMethod>
                <ButtonPaymentMethod
                  onClick={() => {
                    handleSetPaymentMethod();
                  }}
                >
                  Set My Payment Method
                </ButtonPaymentMethod>
              </PaymentMethod>
              <PaymentTimeLimit>
                <TextDialogPaymentMethod>
                  Payment Time Limit
                </TextDialogPaymentMethod>
                <ButtonTimeDropdown>
                  <TextTimeLimit>
                    <span style={{ color: "rgba(209, 213, 239, 1)" }}>15</span>
                    {"\u00a0"}min
                  </TextTimeLimit>
                  <IconArrowDown>
                    <MdKeyboardArrowDown />
                  </IconArrowDown>
                </ButtonTimeDropdown>
              </PaymentTimeLimit>
            </PaymentUpStep02>
            <PaymentDownStep02>
              <SectionLeftPaymentDown>
                <TextEstimatedFee>Estimated Fee</TextEstimatedFee>
                <IconQuestion>
                  <FaRegQuestionCircle />
                </IconQuestion>
                <TextPaymentType>... USDT</TextPaymentType>
              </SectionLeftPaymentDown>
              <SectionRightPaymentDown>
                <ButtonPrevious
                  onClick={() => {
                    setFlagNextStep(0);
                  }}
                >
                  Previous
                </ButtonPrevious>
                <ButtonNextStep02>NEXT STEP</ButtonNextStep02>
              </SectionRightPaymentDown>
            </PaymentDownStep02>
          </SectionPaymentMethodStep02>
        </SectionStep02>
      ) : (
        <></>
      )}
      <ModalPaymentMethod />
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
  @media (max-width: 900px) {
    width: 100%;
    padding: 0px 24px;
    box-sizing: border-box;
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
  margin-top: 80px;

  transition: 0.5s;
  @media (max-width: 600px) {
    margin-top: 40px;
  }
`;

const GroupTabButton = styled(Box)`
  display: flex;
  align-items: center;

  transition: 0.5s;
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 40px;
  }
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

  transition: 0.5s;
  @media (max-width: 600px) {
    flex: 1;
  }
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

  transition: 0.5s;
  @media (max-width: 600px) {
    flex: 1;
  }
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
  border: ${({ flagstep }) =>
    flagstep !== 0 ? "2px solid #ed628b" : "2px solid rgba(92, 96, 129, 0.56)"};
  color: ${({ flagstep }) =>
    flagstep !== 0 ? "rgba(209, 213, 239, 0.96)" : "rgba(92, 96, 129, 0.96)"};
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

const TextNumberStep01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 0px;
  bottom: -30px;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 168%;
  /* or 20px */

  letter-spacing: 0.05em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #5c6081;

  transition: 0.5s;
  @media (max-width: 900px) {
    display: ${({ flagstep }) => (flagstep === 0 ? "flex" : "none")};
  }
`;

const TextNumberStep02 = styled(Box)`
  display: flex;
  position: absolute;
  left: 50%;
  bottom: -30px;
  transform: translateX(-50%);
  font-family: "Livvic";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 168%;
  /* or 20px */

  letter-spacing: 0.05em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #5c6081;

  transition: 0.5s;
  @media (max-width: 900px) {
    display: ${({ flagstep }) => (flagstep === 1 ? "flex" : "none")};
  }
`;

const TextNumberStep03 = styled(Box)`
  display: flex;
  position: absolute;
  right: 0px;
  bottom: -30px;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 168%;
  /* or 20px */

  letter-spacing: 0.05em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #5c6081;

  transition: 0.5s;
  @media (max-width: 900px) {
    display: ${({ flagstep }) => (flagstep === 2 ? "flex" : "none")};
  }
`;

const SectionChangeStep01 = styled(Box)`
  display: flex;
  width: 100%;
  background: #22263d;
  backdrop-filter: blur(3px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 24px;
  padding: 24px;
  box-sizing: border-box;
  align-items: center;

  transition: 0.5s;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const IconArrowRight = styled(Box)`
  display: flex;
  margin: 0px 20px;
  color: rgba(98, 104, 143, 1);
  font-size: 1.5rem;

  transition: 0.5s;
  @media (max-width: 600px) {
    display: none;
  }
`;

const MobileIconArrowDown = styled(Box)`
  display: none;
  margin: 0px 20px;
  color: rgba(98, 104, 143, 1);
  font-size: 1.5rem;
  transition: 0.5s;
  @media (max-width: 600px) {
    display: flex;
    margin: 10px 0px;
  }
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

  transition: 0.5s;
  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 24px;
    align-items: flex-start;
  }
`;

const SectionTextStates01 = styled(Box)`
  display: flex;
  align-items: center;

  transition: 0.5s;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TextYourPrice01 = styled(Box)`
  display: flex;
  align-items: center;
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
  display: flex;
  align-items: center;
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

  transition: 0.5s;
  @media (max-width: 600px) {
    margin-left: 0px;
  }
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

  transition: 0.5s;
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 24px;
  }
`;

const SectionStep01 = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 24px;
`;

const SectionStep02 = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 80px;
`;

const SectionAmountStep02 = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #22263d;
  backdrop-filter: blur(3px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 24px;
  padding: 24px;
  box-sizing: border-box;
`;

const SectionOrderLimit = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 24px;

  transition: 0.5s;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const SectionPaymentMethodStep02 = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  background: #22263d;
  backdrop-filter: blur(3px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 24px;
  padding: 24px;
  box-sizing: border-box;
`;

const PaymentUpStep02 = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 0.5s;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const PaymentMethod = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  flex: 1;

  transition: 0.5s;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const PaymentTimeLimit = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  flex: 1;
  transition: 0.5s;
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 16px;
  }
`;

const TextDialogPaymentMethod = styled(Box)`
  display: flex;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.03em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #63688f;
`;

const ButtonPaymentMethod = styled(Box)`
  display: flex;
  width: 100%;
  height: 48px;
  justify-content: center;
  align-items: center;
  background: #22263d;
  border: 1px solid #323859;
  border-radius: 12px;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 148%;
  /* identical to box height, or 24px */

  letter-spacing: 0.01em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #ed628b;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px rgba(242, 245, 255, 0.5);
  }
`;

const ButtonTimeDropdown = styled(Box)`
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: space-between;
  background: #22263d;
  border: 1px solid #323859;
  border-radius: 12px;
  padding: 0px 12px 0px 16px;
  box-sizing: border-box;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;
`;

const TextTimeLimit = styled(Box)`
  display: flex;
  align-items: center;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 148%;
  /* identical to box height, or 24px */

  letter-spacing: 0.01em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: rgba(92, 96, 129, 1);
`;

const IconArrowDown = styled(Box)`
  display: flex;
  font-size: 1.8rem;
  color: rgba(98, 104, 143, 1);
`;

const PaymentDownStep02 = styled(Box)`
  display: flex;
  margin-top: 32px;
  align-items: center;
  justify-content: space-between;

  flex: 1;
  transition: 0.5s;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SectionLeftPaymentDown = styled(Box)`
  display: flex;
  align-items: center;
`;

const TextEstimatedFee = styled(Box)`
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

const IconQuestion = styled(Box)`
  font-size: 1.5rem;
  color: rgba(92, 96, 129, 1);
  margin: 0px 12px;
`;

const TextPaymentType = styled(Box)`
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

const SectionRightPaymentDown = styled(Box)`
  display: flex;
  align-items: center;
  transition: 0.5s;
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const ButtonPrevious = styled(Box)`
  display: flex;
  width: 137px;
  height: 48px;
  justify-content: center;
  align-items: center;
  background: #323859;
  border-radius: 12px;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.04em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #63688f;
  user-select: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px rgba(242, 245, 255, 0.5);
  }
  margin-right: 8px;

  transition: 0.5s;
  @media (max-width: 600px) {
    flex: 1;
    width: 100%;
  }
`;

const ButtonNextStep02 = styled(Box)`
  display: flex;
  width: 137px;
  height: 48px;
  justify-content: center;
  align-items: center;
  background: #ed628b;
  border-radius: 12px;

  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.08em;
  font-feature-settings: "pnum" on, "lnum" on;
  user-select: none;
  color: #fff2f6;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px rgba(242, 245, 255, 0.5);
  }
  transition: 0.5s;
  @media (max-width: 600px) {
    flex: 1;
    width: 100%;
  }
`;

export default PostNormalAd;
