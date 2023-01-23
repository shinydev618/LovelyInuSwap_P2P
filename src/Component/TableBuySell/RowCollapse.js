import { useState } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import InputToken from "../Input/InputToken";
import iconDollar from "../../Assets/Image/Icon/Chain/us_dollar.png";
import iconTether from "../../Assets/Image/Icon/Chain/tether.png";

const RowCollapse = ({ each, flagBuySell }) => {
  const [flagExpandBuy, setFlagExpandBuy] = useState(false);
  const handleBuy = () => {
    setFlagExpandBuy(true);
  };

  const handleCancelBuy = () => {
    setFlagExpandBuy(false);
  };

  if (!flagExpandBuy) {
    return (
      <TableRow>
        <TRowAdvertiser01>
          <SectionCellUp>
            <IconAdvertiser>
              <img src={each.advertiserIcon} width={"100%"} alt="" />
            </IconAdvertiser>
            <TextAdvertiserName>{each.advertiserName}</TextAdvertiserName>
          </SectionCellUp>
          <SectionCellDown>
            <TextAdevertiserOrderCompletion>
              {each.advertiserOrder}
              <span style={{ color: "#63688f", fontSize: "11px" }}>
                {"\u00a0"}orders{"\u00a0"}
              </span>
              {each.advertiserCompletion}
              <span style={{ color: "#63688f", fontSize: "11px" }}>
                {"\u00a0"}completion
              </span>
            </TextAdevertiserOrderCompletion>
          </SectionCellDown>
        </TRowAdvertiser01>
        <TRowPrice01>
          <SectionCellUp>
            <TextPriceValue>{each.priceValue}</TextPriceValue>
          </SectionCellUp>
          <SectionCellDown>
            <TextPriceType01>{each.priceType}</TextPriceType01>
          </SectionCellDown>
        </TRowPrice01>
        <TRowLimit01>
          <SectionCellUp>
            <TextAvailable>
              Available :
              <span style={{ color: "#D6DDEE", letterSpacing: "0.05rem" }}>
                {"\u00a0"}
                {each.available}
                {"\u00a0"}
              </span>
              <span style={{ letterSpacing: "0.05rem" }}>USDT</span>
            </TextAvailable>
          </SectionCellUp>
          <SectionCellDown>
            <TextLimit>
              Limit :{"\u00a0"}
              <span style={{ color: "#D6DDEE" }}>
                {each.limitFirst} - {each.limitLast}
              </span>
            </TextLimit>
          </SectionCellDown>
        </TRowLimit01>
        <TRowPayment01>
          {each.payment[0] !== "" ? <ButtonWise>Wise</ButtonWise> : <></>}
          {each.payment[1] !== "" ? <ButtonPumb>PUMB</ButtonPumb> : <></>}
          {each.payment[2] !== "" ? (
            <ButtonGeoPay>Geo Pay</ButtonGeoPay>
          ) : (
            <></>
          )}
        </TRowPayment01>
        <TRowTrade onClick={() => handleBuy()}>
          <ButtonTradeBuy flagbuysell={flagBuySell ? 1 : 0}>
            {!flagBuySell ? "BUY" : "SELL"}
          </ButtonTradeBuy>
        </TRowTrade>
      </TableRow>
    );
  } else {
    return (
      <TableExpandRow>
        <SectionExpandLeft>
          <TRowAdvertiser02>
            <IconAdvertiser>
              <img src={each.advertiserIcon} width={"100%"} alt="" />
            </IconAdvertiser>
            <TextAdvertiserName>{each.advertiserName}</TextAdvertiserName>
          </TRowAdvertiser02>
          <TRowPrice02>
            <TextPriceValue>{each.priceValue}</TextPriceValue>
            {"\u00a0"}
            <TextPriceType02>{each.priceType}</TextPriceType02>
          </TRowPrice02>
          <TRowPaymentLimit01>
            Payment Time Limit:{"\u00a0"}
            <TextTimeLimit>15 mins</TextTimeLimit>
          </TRowPaymentLimit01>
          <TRowLimit02>
            <TextAvailable>
              Available :
              <span style={{ color: "#D6DDEE", letterSpacing: "0.05rem" }}>
                {"\u00a0"}
                {each.available}
                {"\u00a0"}
              </span>
              <span style={{ letterSpacing: "0.05rem" }}>USDT</span>
            </TextAvailable>
          </TRowLimit02>
          <TRowPayment02>
            Sellers payment method :
            {each.payment[0] !== "" ? <ButtonWise>Wise</ButtonWise> : <></>}
            {each.payment[1] !== "" ? <ButtonPumb>PUMB</ButtonPumb> : <></>}
            {each.payment[2] !== "" ? (
              <ButtonGeoPay>Geo Pay</ButtonGeoPay>
            ) : (
              <></>
            )}
          </TRowPayment02>
        </SectionExpandLeft>
        <SectionExpandRight>
          <SectionInputPay>
            <InputToken
              title={!flagBuySell ? "I want to pay" : "I want to sell"}
              placeholder={"2,000.0 - 50,000.0"}
              icon={iconDollar}
              payType={"USD"}
            />
          </SectionInputPay>
          <SectionInputReceive>
            <InputToken
              title={"I will receive"}
              placeholder={"0.0"}
              icon={iconTether}
              payType={"USDT"}
            />
          </SectionInputReceive>
          {!flagBuySell ? (
            <></>
          ) : (
            <SectionPaymentMethod>
              <TextDialogPaymentMethod>Payment method</TextDialogPaymentMethod>
              <ButtonPaymentMethod>Set My Payment Method</ButtonPaymentMethod>
            </SectionPaymentMethod>
          )}
          <ButtonBuyGroup>
            <ButtonCancelBuy onClick={() => handleCancelBuy()}>
              Cancel
            </ButtonCancelBuy>
            <ButtonBuy flagbuysell={flagBuySell ? 1 : 0}>
              {!flagBuySell ? "Buy USDT" : "Sell USDT"}
            </ButtonBuy>
          </ButtonBuyGroup>
        </SectionExpandRight>
      </TableExpandRow>
    );
  }
};

const TableRow = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 25px 0px;
  border-bottom: 1px solid rgba(50, 56, 89, 0.8);
`;

const TableExpandRow = styled(Box)`
  display: flex;
  width: 100%;
  padding: 25px 0px;
  border-bottom: 1px solid rgba(50, 56, 89, 0.8);
`;

const SectionExpandLeft = styled(Box)`
  display: flex;
  flex: 1;
  height: 305px;
  flex-direction: column;
  margin-right: 20px;
`;

const SectionExpandRight = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  background: #22263d;
  backdrop-filter: blur(3px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 24px;
  padding: 25px;
  box-sizing: border-box;
`;

const TRowAdvertiser01 = styled(Box)`
  display: flex;
  flex: 4;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`;

const TRowAdvertiser02 = styled(Box)`
  display: flex;
  align-items: center;
`;

const TRowPrice01 = styled(Box)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`;

const TRowPrice02 = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

const TRowPaymentLimit01 = styled(Box)`
  display: flex;
  align-items: center;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.05em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #63688f;
  margin-top: 5px;
`;

const TRowLimit01 = styled(Box)`
  display: flex;
  flex: 4;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`;

const TRowLimit02 = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

const TRowPayment01 = styled(Box)`
  display: flex;
  flex: 3;
  flex-wrap: wrap;
  grid-gap: 5px;
  justify-content: flex-start;
`;

const TRowPayment02 = styled(Box)`
  display: flex;
  align-items: center;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.05em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #63688f;
  margin-top: 5px;
  grid-gap: 5px;
`;
const TRowTrade = styled(Box)`
  display: flex;
  flex: 1;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-between;
`;

const SectionCellUp = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const SectionCellDown = styled(Box)`
  display: flex;
  align-items: center;
`;

const IconAdvertiser = styled(Box)`
  display: flex;
  width: 24px;
`;
const TextAdvertiserName = styled(Box)`
  margin-left: 8px;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 148%;
  /* identical to box height, or 24px */

  letter-spacing: 0.01em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #63688f;
`;

const TextAdevertiserOrderCompletion = styled(Box)`
  display: flex;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.03em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #d6ddee;
`;

const TextPriceValue = styled(Box)`
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 148%;
  /* identical to box height, or 24px */

  letter-spacing: 0.05em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #d6ddee;
`;

const TextPriceType01 = styled(Box)`
  font-family: "Livvic";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.05em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #63688f;
`;

const TextPriceType02 = styled(Box)`
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 148%;
  /* identical to box height, or 24px */

  letter-spacing: 0.01em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #63688f;
`;

const TextAvailable = styled(Box)`
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 148%;
  /* identical to box height, or 24px */

  letter-spacing: 0.01em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #63688f;
`;

const TextLimit = styled(Box)`
  font-family: "Livvic";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.05em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #63688f;
`;

const ButtonWise = styled(Box)`
  display: flex;
  width: 45px;
  height: 25px;
  justify-content: center;
  align-items: center;
  background: rgba(105, 92, 255, 0.16);
  border-radius: 95px;

  font-family: "Livvic";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.02em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #695cff;
`;

const ButtonPumb = styled(Box)`
  display: flex;
  width: 55px;
  height: 25px;
  justify-content: center;
  align-items: center;
  background: rgba(239, 95, 96, 0.12);
  border-radius: 95px;

  font-family: "Livvic";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.02em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #ef5f60;
`;

const ButtonGeoPay = styled(Box)`
  display: flex;
  width: 66px;
  height: 25px;
  justify-content: center;
  align-items: center;
  background: rgba(58, 215, 205, 0.08);
  border-radius: 95px;

  font-family: "Livvic";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.02em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #3ad7cd;
`;

const TextTimeLimit = styled(Box)`
  font-family: "Livvic";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.05em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #d6ddee;
`;

const ButtonTradeBuy = styled(Box)`
  display: flex;
  width: 60px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: ${({ flagbuysell }) => (!flagbuysell ? "#5f84f5" : "#ED628B")};
  border-radius: 12px;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.08em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #f2f5ff;
  cursor: pointer;
`;

const SectionInputPay = styled(Box)`
  display: flex;
  width: 100%;
`;

const SectionInputReceive = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 16px;
`;

const ButtonBuyGroup = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const ButtonCancelBuy = styled(Box)`
  display: flex;
  background: #323859;
  height: 40px;
  flex: 1;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.04em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #63688f;
  box-shadow: 0px 0px 10px rgba(24, 27, 46, 0.72);
  cursor: pointer;
  margin-right: 10px;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px rgba(242, 245, 255, 0.5);
  }
`;

const ButtonBuy = styled(Box)`
  display: flex;
  background: ${({ flagbuysell }) => (!flagbuysell ? "#5f84f5" : "#ED628B")};
  height: 40px;
  flex: 1;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.04em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #f2f5ff;
  box-shadow: 0px 0px 10px rgba(24, 27, 46, 0.72);
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px rgba(242, 245, 255, 0.5);
  }
`;

const SectionPaymentMethod = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
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

export default RowCollapse;
