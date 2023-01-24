import styled from "styled-components";
import { Box } from "@mui/material";

const InputToken = ({ title, placeholder, icon, payType }) => {
  return (
    <StyledComponent>
      <TextDialogPay>{title}</TextDialogPay>
      <SectionInput>
        <InputNumber
          component={"input"}
          placeholder={placeholder}
        ></InputNumber>
        <SectionIcon>
          <TextPayType>{payType}</TextPayType>
          <IconPay>
            <img src={icon} width={"100%"} height={"100%"} alt="" />
          </IconPay>
        </SectionIcon>
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
  flex: 1;
  width: 100%;
  margin-right: 20px;
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
  background-color: rgba(0, 0, 0, 0);

  transition: 0.5s;
  @media (max-width: 350px) { 
    margin-right: 10px;
  }
`;

const SectionIcon = styled(Box)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const TextPayType = styled(Box)`
  font-family: "Livvic";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.05em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: rgba(99, 104, 143, 0.64);
`;

const IconPay = styled(Box)`
  display: flex;
  margin-left: 7px;
  width: 32px;
  height: 32px;
`;

export default InputToken;
