import styled from "styled-components";
import { Box } from "@mui/material";
import { TbRefresh } from "react-icons/tb";
import iconTether from "../Assets/Image/Icon/Chain/tether.png";
import iconBitcoin from "../Assets/Image/Icon/Chain/bitcoin.png";
import iconDai from "../Assets/Image/Icon/Chain/dai.png";
import iconBSC from "../Assets/Image/Icon/Chain/bsc.png";
import iconEther from "../Assets/Image/Icon/Chain/ethereum.png";
import iconPolygon from "../Assets/Image/Icon/Chain/polygon.png";
import iconShibaInu from "../Assets/Image/Icon/Chain/shibaInu.png";
import { dataTableBuySell } from "../Data/TableBuySell";

const Buy = () => {
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
          <ButtonTabBuy>
            <SectinoTabBuyUp></SectinoTabBuyUp>
            <BottomTabBuy></BottomTabBuy>
            BUY
          </ButtonTabBuy>
          <ButtonTabSell>
            <SectinoTabSellUp></SectinoTabSellUp>
            <BottomTabSell></BottomTabSell>
            SELL
          </ButtonTabSell>
        </GroupTabButton>
        <GroupIconChain>
          <IconChain>
            <img src={iconTether} width={"32px"} height={"32px"} alt="" />
          </IconChain>
          <IconChain>
            <img src={iconBitcoin} width={"32px"} height={"32px"} alt="" />
          </IconChain>
          <IconChain>
            <img src={iconDai} width={"32px"} height={"32px"} alt="" />
          </IconChain>
          <IconChain>
            <img src={iconBSC} width={"32px"} height={"32px"} alt="" />
          </IconChain>
          <IconChain>
            <img src={iconEther} width={"32px"} height={"32px"} alt="" />
          </IconChain>
          <IconChain>
            <img src={iconPolygon} width={"32px"} height={"32px"} alt="" />
          </IconChain>
          <IconChain>
            <img src={iconShibaInu} width={"32px"} height={"32px"} alt="" />
          </IconChain>
        </GroupIconChain>
      </SectionTab>
      <TableBuy>
        <table>
          <tr>
            <th>Advertisers</th>
            <th>Price</th>
            <th>Limit / Available</th>
            <th>Payment</th>
            <th>Trade</th>
          </tr>
          {dataTableBuySell.map((each, index) => {
            return (
              <tr>
                <td>{each.advertiserName}</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>
            );
          })}
        </table>
      </TableBuy>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 720px;
  flex-direction: column;
  margin-top: 55px;
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
  margin-top: 40px;
  > table {
    width: 100%;
    border: none;
  }
  > table > tr > th {
    text-align: left;
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
  }
`;

export default Buy;
