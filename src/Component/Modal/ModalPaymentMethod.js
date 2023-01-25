// import { useState } from "react";
import styled from "styled-components";
import { Modal, Box } from "@mui/material";
import { MdClose, MdSearch } from "react-icons/md";
import {
  dataPaymentAll,
  dataPaymentRecommended,
} from "../../Data/PaymentMethod";
import BadgePayment from "../Badge/BadgePayment";
import { useContext } from "react";
import { RefContext } from "../../Context/ContextUseState";

const ModalPaymentMethod = () => {
  // const handleCloseModalPayment = () => setFlagModalPayment(false);
  // const [flagModalPayment, setFlagModalPayment] = useState(false);
  // const handleOpenModalPayment = () => setFlagModalPayment(true);
  const { flagModalPayment, handleCloseModalPayment } = useContext(RefContext);

  return (
    <Modal
      open={flagModalPayment}
      // onClose={handleCloseModalPayment}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropComponent={custombackdrop}
    >
      <SectionModal>
        <SectionModalUp>
          <SectionInsideModalUp>
            <TextTitleModal>Select Payment Method</TextTitleModal>
            <TextDescriptionModal>Recommended</TextDescriptionModal>
            <SectionPaymentsRecommended>
              {dataPaymentRecommended.map((each, index) => {
                return <BadgePayment each={each} key={index} />;
              })}
            </SectionPaymentsRecommended>
          </SectionInsideModalUp>
        </SectionModalUp>
        <SectionModalDown>
          <SectionInsideModalDown>
            <TextTitleModal>All Payment Methods</TextTitleModal>
            <GroupInputSearchPayment>
              <BoxSearch>
                <MdSearch />
              </BoxSearch>
              <InputSearchPayment
                component={"input"}
                placeholder={"Enter a payment method"}
              ></InputSearchPayment>
            </GroupInputSearchPayment>
            <SectionPaymentsAll>
              {dataPaymentAll.map((each, index) => {
                return <BadgePayment each={each} key={index} />;
              })}
            </SectionPaymentsAll>
            <SectionPaymentsAll>
              {dataPaymentAll.map((each, index) => {
                return <BadgePayment each={each} key={index} />;
              })}
            </SectionPaymentsAll>
          </SectionInsideModalDown>
        </SectionModalDown>
        <ButtonCloseModal
          onClick={() => {
            handleCloseModalPayment();
          }}
        >
          <MdClose />
        </ButtonCloseModal>
      </SectionModal>
    </Modal>
  );
};

const SectionModal = styled(Box)`
  display: flex;
  position: fixed;
  flex-direction: column;
  width: 600px;
  background: #22263d;
  border-radius: 24px;
  outline: none;
  border: none;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: animationModal 0.5s 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  @keyframes animationModal {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  transition: 0.5s;
  @media (max-width: 900px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 330px;
  }
  @media (max-width: 350px) {
    width: 300px;
  }
`;

const SectionModalUp = styled(Box)`
  display: flex;
  width: 100%;
  height: 330px;
  padding: 40px 5px 24px 40px;
  box-sizing: border-box;
  transition: 0.5s;
  @media (max-width: 600px) {
    padding: 40px 5px 24px 24px;
  }
`;

const SectionInsideModalUp = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
    border-radius: none;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #323859;
    border-radius: 15px;
  }
`;

const SectionModalDown = styled(Box)`
  display: flex;
  width: 100%;
  height: 330px;
  background: rgba(50, 56, 89, 0.32);
  padding: 24px 5px 40px 40px;
  box-sizing: border-box;
  border-radius: 0px 0px 24px 24px;
  transition: 0.5s;
  @media (max-width: 600px) {
    padding: 40px 5px 24px 24px;
  }
`;

const SectionInsideModalDown = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow-y: auto;
  padding-right: 35px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
    border-radius: none;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #323859;
    border-radius: 15px;
  }
`;

const TextTitleModal = styled(Box)`
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 132%;
  /* identical to box height, or 24px */

  letter-spacing: 0.04em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #d6ddee;
`;

const TextDescriptionModal = styled(Box)`
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 148%;
  /* identical to box height, or 24px */

  letter-spacing: 0.01em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: rgba(92, 96, 129, 0.8);
  margin-top: 8px;
`;

const ButtonCloseModal = styled(Box)`
  display: flex;
  position: absolute;
  right: 40px;
  top: 40px;
  font-size: 1.5rem;
  color: rgba(92, 96, 129, 1);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: rotate(180deg);
  }

  transition: 0.5s;
  @media (max-width: 600px) {
    right: 24px;
  }
  @media (max-width: 350px) {
    right: 15px;
  }
`;

const SectionPaymentsRecommended = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 20px;

  transition: 0.5s;
  @media (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const SectionPaymentsAll = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 20px;

  transition: 0.5s;
  @media (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const GroupInputSearchPayment = styled(Box)`
  display: flex;
  width: 100%;
  min-height: 48px;
  background: #22263d;
  border-radius: 16px;
  align-items: center;
  margin-top: 24px;
  padding-left: 24px;
  padding-right: 35px;
  box-sizing: border-box;
`;

const BoxSearch = styled(Box)`
  display: flex;
  font-size: 1.5rem;
  color: rgba(92, 96, 129, 1);
  margin-right: 10px;
`;

const InputSearchPayment = styled(Box)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: none;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 148%;
  /* identical to box height, or 24px */

  letter-spacing: -0.01em;
  font-feature-settings: "pnum" on, "lnum" on;
  color: rgba(92, 96, 129, 0.56);
  background: rgba(0, 0, 0, 0);
`;

export const custombackdrop = styled(Box)`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(24, 27, 46, 0.64);
  backdrop-filter: blur(20px);
`;

export default ModalPaymentMethod;
