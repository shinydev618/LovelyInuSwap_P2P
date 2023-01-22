import { useState } from "react";

import styled from "styled-components";
import { Box } from "@mui/material";

const RowCollapse = ({ each }) => {
  const [flagExpandBuy, setFlagExpandBuy] = useState(false);
  const handleBuy = () => {
    setFlagExpandBuy(true);
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
            <TextPriceType>{each.priceType}</TextPriceType>
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
          <ButtonTradeBuy>BUY</ButtonTradeBuy>
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
            <TextPriceType>{each.priceType}</TextPriceType>
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
        <SectionExpandRight></SectionExpandRight>
      </TableExpandRow>
    );
  }
};

const TableRow = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 25px 0px;
  border-bottom: 1px solid #5c6081;
`;

const TableExpandRow = styled(Box)`
  display: flex;
  width: 100%;
  padding: 25px 0px;
  border-bottom: 1px solid #5c6081;
`;

const SectionExpandLeft = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: 20px;
`;

const SectionExpandRight = styled(Box)`
  display: flex;
  flex: 1;
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

const TextPriceType = styled(Box)`
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
  background: #5f84f5;
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

export default RowCollapse;
