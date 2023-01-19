import styled from "styled-components";
import { Box } from "@mui/material";
import { BiLineChart } from "react-icons/bi";
import { FiPieChart, FiFlag, FiStar } from "react-icons/fi";
import { RiExchangeDollarFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <StyledComponent>
      <LinkEach>
        <IconLink>
          <BiLineChart />
        </IconLink>
        <TextLink>ANALYTICS</TextLink>
      </LinkEach>
      <LinkEach>
        <IconLink>
          <FiPieChart />
        </IconLink>
        <TextLink>POOLS</TextLink>
      </LinkEach>
      <LinkEach>
        <IconLink>
          <RiExchangeDollarFill />
        </IconLink>
        <TextLink>SWAP</TextLink>
      </LinkEach>
      <LinkEach>
        <IconLink>
          <FiFlag />
        </IconLink>
        <TextLink>EVENTS</TextLink>
      </LinkEach>
      <LinkEach>
        <IconLink>
          <FiStar />
        </IconLink>
        <TextLink>LAUNCHPAD</TextLink>
      </LinkEach>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 360px;
  flex-direction: column;
  margin-left: 50px;
  margin-top: 150px;
  z-index: 3;
`;

const LinkEach = styled(Box)`
  display: flex;
  align-items: cetner;
  color: #5c6081;
  margin: 20px 0px;
  opacity: 0.96;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: white;
  }
`;

const TextLink = styled(Box)`
  margin-left: 30px;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.1em;
  font-feature-settings: "pnum" on, "lnum" on;
`;

const IconLink = styled(Box)`
  font-size: 1.5rem;
`;

export default Sidebar;
