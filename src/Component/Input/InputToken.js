import styled from "styled-components";
import { Box } from "@mui/material";
import iconDollar from "../../Assets/Image/Icon/Chain/us_dollar.png"

const InputToken = ({ title, placeholder }) => {
  return (
    <StyledComponent>
      <TextDialogPay>{title}</TextDialogPay>
      <SectionInput>
        <InputNumber
          component={"input"}
          placeholder={placeholder}
        ></InputNumber>
      </SectionInput>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TextDialogPay = styled(Box)`
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

const SectionInput = styled(Box)`
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  margin-top: 10px;
  background: #181b2e;
  background: rgba(24, 27, 46, 0.56);
  border-radius: 16px 32px 32px 16px;
  padding: 0px 8px 0px 16px;
  box-sizing: border-box;
  justify-content: space-between;
`;

const InputNumber = styled(Box)`
  display: flex;
  outline: none;
  border: none;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 148%;
  /* identical to box height, or 24px */

  letter-spacing: 0.01em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #5c6081;
  background-color: rgba(0,0,0,0);
`;

export default InputToken;
