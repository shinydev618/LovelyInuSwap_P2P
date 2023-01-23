import styled from "styled-components";
import { Box } from "@mui/material";

const BadgePayment = ({ each }) => {
  return (
    <StyledComponent color={each.color} bgcolor={each.background}>
      {each.text}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0px 12px;
  border-radius: 95px;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 148%;
  /* identical to box height, or 24px */

  letter-spacing: 0.01em;
  font-feature-settings: "pnum" on, "lnum" on;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    text-shadow: 0px 0px 5px;
  }
`;

export default BadgePayment;
