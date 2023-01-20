import styled from "styled-components";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TbRefresh } from "react-icons/tb";
import { dataTableBuySell } from "../Data/TableBuySell";
import iconTether from "../Assets/Image/Icon/Chain/tether.png";
import { dataChainList } from "../Data/ChainList";

const Buy = () => {
  const navigate = useNavigate();
  const handleRouterBuy = () => {
    navigate("/buy");
  };

  const handleRouterSell = () => {
    navigate("/sell");
  };

  return (
    <StyledComponent>
      <SectionHead>
        <TextHeadTitle>
          <Box display={"flex"}>Buy & Sell{"\u00a0"}</Box>
          <Box display={"flex"} alignItems={"center"}>
            <IconTether>
              <img src={iconTether} width={"100%"} alt="iconTether" />
            </IconTether>
            <Box display={"flex"}>
              {"\u00a0"}Tether{"\u00a0"}
              <span style={{ fontWeight: "400", color: "#5C6081" }}>
                (USDT)
              </span>
            </Box>
          </Box>
        </TextHeadTitle>
        <ButtonRefresh>
          <IconRefresh>
            <TbRefresh />
          </IconRefresh>
          <TextRefresh>Refresh</TextRefresh>
        </ButtonRefresh>
      </SectionHead>
      <SectionHeadDescription>
        Buy & sell Tether US safely and easily on P2P. Find the best offer below
        and buy and sell USDT with Your Preferred Payment Methods.
      </SectionHeadDescription>
      <SectionTab>
        <GroupTabButton>
          <ButtonTabBuy onClick={() => handleRouterBuy()}>
            <SectinoTabBuyUp></SectinoTabBuyUp>
            <BottomTabBuy></BottomTabBuy>
            BUY
          </ButtonTabBuy>
          <ButtonTabSell onClick={() => handleRouterSell()}>
            <SectinoTabSellUp></SectinoTabSellUp>
            <BottomTabSell></BottomTabSell>
            SELL
          </ButtonTabSell>
        </GroupTabButton>
        <GroupIconChain>
          {dataChainList.map((each, index) => {
            return (
              <IconChain key={index}>
                <img
                  src={each.icon}
                  width={"32px"}
                  height={"32px"}
                  alt={each.name}
                />
              </IconChain>
            );
          })}
        </GroupIconChain>
      </SectionTab>
      <TableBuy>
        <TableHead>
          <THeadAdvertiser>Advertisers</THeadAdvertiser>
          <THeadPrice>Price</THeadPrice>
          <THeadLimit>Limit / Available</THeadLimit>
          <THeadPayment>Payment</THeadPayment>
          <THeadTrade>Trade</THeadTrade>
        </TableHead>
        <TableBody>
          {dataTableBuySell?.map((each, index) => {
            return (
              <TableRow>
                <TRowAdvertiser>
                  <SectionCellUp>
                    <IconAdvertiser>
                      <img src={each.advertiserIcon} width={"100%"} alt="" />
                    </IconAdvertiser>
                    <TextAdvertiserName>
                      {each.advertiserName}
                    </TextAdvertiserName>
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
                </TRowAdvertiser>
                <TRowPrice>
                  <SectionCellUp>
                    <TextPriceValue>{each.priceValue}</TextPriceValue>
                  </SectionCellUp>
                  <SectionCellDown>
                    <TextPriceType>{each.priceType}</TextPriceType>
                  </SectionCellDown>
                </TRowPrice>
                <TRowLimit>
                  <SectionCellUp>
                    <TextAvailable>
                      Available :
                      <span
                        style={{ color: "#D6DDEE", letterSpacing: "0.05rem" }}
                      >
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
                </TRowLimit>
                <TRowPayment>
                  {each.payment[0] !== "" ? (
                    <ButtonWise>Wise</ButtonWise>
                  ) : (
                    <></>
                  )}
                  {each.payment[1] !== "" ? (
                    <ButtonPumb>PUMB</ButtonPumb>
                  ) : (
                    <></>
                  )}
                  {each.payment[2] !== "" ? (
                    <ButtonGeoPay>Geo Pay</ButtonGeoPay>
                  ) : (
                    <></>
                  )}
                </TRowPayment>
                <TRowTrade>
                  <ButtonTradeBuy>BUY</ButtonTradeBuy>
                </TRowTrade>
              </TableRow>
            );
          })}
        </TableBody>
      </TableBuy>
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

const SectionHeadDescription = styled(Box)`
  display: flex;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 148%;
  /* or 24px */

  letter-spacing: 0.01em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #5c6081;

  opacity: 0.8;
  margin-top: 16px;
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

const IconTether = styled(Box)`
  display: flex;
  width: 40px;
`;

const ButtonRefresh = styled(Box)`
  display: flex;
  width: 115px;
  height: 40px;
  background: #22263d;
  border-radius: 12px;
  align-items: center;
  padding: 0px 16px 0px 12px;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    > div:nth-child(1) {
      transition: 0.5s;
      transform: rotate(360deg);
    }
  }
`;

const IconRefresh = styled(Box)`
  display: flex;
  font-size: 1.5rem;
  color: #5c6081;
  opacity: 0.88;
`;

const TextRefresh = styled(Box)`
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.08em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #f2f5ff;
`;

const SectionTab = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;

const GroupTabButton = styled(Box)`
  display: flex;
  align-items: center;
`;
const GroupIconChain = styled(Box)`
  display: flex;
  align-items: center;
`;

const IconChain = styled(Box)`
  display: flex;
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 100%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border: 2px solid #ed628b;
  }
`;

const ButtonTabBuy = styled(Box)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 28px;
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
  display: flex;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.16;
  background: linear-gradient(180deg, rgba(95, 132, 245, 0) 0%, #5f84f5 100%);
`;

const BottomTabBuy = styled(Box)`
  display: flex;
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
  width: 32px;
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
  display: flex;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(237, 98, 139, 0) 0%, #ed628b 100%);
  opacity: 0.16;
`;

const BottomTabSell = styled(Box)`
  display: flex;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 2px;
  background: #ed628b;
  border-radius: 32px;
`;

const TableBuy = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 40px;
`;

const TableHead = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.02em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #5c6081;

  opacity: 0.48;
`;

const THeadAdvertiser = styled(Box)`
  display: flex;
  flex: 4;
  justify-content: flex-start;
`;

const THeadPrice = styled(Box)`
  display: flex;
  flex: 1;
  justify-content: flex-start;
`;

const THeadLimit = styled(Box)`
  display: flex;
  flex: 4;
  justify-content: flex-start;
`;

const THeadPayment = styled(Box)`
  display: flex;
  flex: 3;
  justify-content: flex-start;
`;

const THeadTrade = styled(Box)`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const TableBody = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const TableRow = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
`;

const TRowAdvertiser = styled(Box)`
  display: flex;
  flex: 4;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 25px;
  margin-top: 25px;
`;
const TRowPrice = styled(Box)`
  display: flex;
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 25px;
  margin-top: 25px;
`;
const TRowLimit = styled(Box)`
  display: flex;
  flex: 4;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 25px;
  margin-top: 25px;
`;
const TRowPayment = styled(Box)`
  display: flex;
  flex: 3;
  flex-wrap: wrap;
  grid-gap: 5px;
  justify-content: flex-start;
  padding-bottom: 25px;
  margin-top: 25px;
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

export default Buy;
