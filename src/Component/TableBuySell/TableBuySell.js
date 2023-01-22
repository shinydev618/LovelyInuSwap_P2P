import styled from "styled-components";
import { Box } from "@mui/material";
import { dataTableBuySell } from "../../Data/TableBuySell";
import RowCollapse from "./RowCollapse";

const TableBuySell = () => {
  return (
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
          return <RowCollapse key={index} each={each} />;
        })}
      </TableBody>
    </TableBuy>
  );
};

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

export default TableBuySell;
