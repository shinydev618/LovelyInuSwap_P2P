import { useState } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { TbRefresh } from "react-icons/tb";
import iconTether from "../Assets/Image/Icon/Chain/tether.png";
import { dataChainList } from "../Data/ChainList";
import TableBuySell from "../Component/TableBuySell/TableBuySell";

const BuySell = () => {
  // const navigate = useNavigate();
  const [flagBuySell, setFlagBuySell] = useState(false);

  return (
    <StyledComponent>
      <SectionHead>
        <TextHeadTitle>
          <TextBuySellLeft>Buy & Sell{"\u00a0"}</TextBuySellLeft>
          <TextBuySellRight>
            <IconTether>
              <img src={iconTether} width={"100%"} alt="iconTether" />
            </IconTether>
            <Box display={"flex"}>
              {"\u00a0"}Tether{"\u00a0"}
              <span style={{ fontWeight: "400", color: "#5C6081" }}>
                (USDT)
              </span>
            </Box>
          </TextBuySellRight>
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
          <ButtonTabBuy
            onClick={() => {
              setFlagBuySell(false);
            }}
          >
            <SectinoTabBuyUp
              flagbuysell={flagBuySell ? 1 : 0}
            ></SectinoTabBuyUp>
            <BottomTabBuy flagbuysell={flagBuySell ? 1 : 0}></BottomTabBuy>
            BUY
          </ButtonTabBuy>
          <ButtonTabSell
            onClick={() => {
              setFlagBuySell(true);
            }}
          >
            <SectinoTabSellUp
              flagbuysell={flagBuySell ? 1 : 0}
            ></SectinoTabSellUp>
            <BottomTabSell flagbuysell={flagBuySell ? 1 : 0}></BottomTabSell>
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
      <TableBuySell flagBuySell={flagBuySell} />
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
  transition: 0.5s;
  @media (max-width: 900px) {
    align-items: flex-start;
  }
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

  transition: 0.5s;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 370px) {
    font-size: 25px;
  }
`;

const TextBuySellLeft = styled(Box)`
  display: flex;
`;
const TextBuySellRight = styled(Box)`
  display: flex;
  align-items: center;
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

  transition: 0.5s;
  @media (max-width: 500px) {
    width: 40px;
    justify-content: center;
    align-items: center;
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

  transition: 0.5s;
  @media (max-width: 500px) {
    display: none;
  }
`;

const SectionTab = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  transition: 0.5s;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const GroupTabButton = styled(Box)`
  display: flex;

  align-items: center;
  transition: 0.5s;
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 40px;
  }
`;
const GroupIconChain = styled(Box)`
  display: flex;
  align-items: center;
  transition: 0.5s;
  @media (max-width: 350px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
  }
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
  transition: 0.5s;
  @media (max-width: 900px) {
    margin-left: 10px;
  }
  @media (max-width: 500px) {
    margin: 0px 3px;
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
  transition: 0.5s;
  @media (max-width: 500px) {
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

  transition: 0.5s;
  @media (max-width: 500px) {
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

export default BuySell;
