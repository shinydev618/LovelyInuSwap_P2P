import styled from "styled-components";
import { Box } from "@mui/material";
import {
  FaTelegram,
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaScroll,
} from "react-icons/fa";

const Footer = () => {
  return (
    <StyledComponent>
      <SectionLinks>
        <LinkIcon>
          <FaTelegram />
        </LinkIcon>
        <LinkIcon>
          <FaYoutube />
        </LinkIcon>
        <LinkIcon>
          <FaInstagram />
        </LinkIcon>
        <LinkIcon>
          <FaGithub />
        </LinkIcon>
        <LinkIcon>
          <FaScroll />
        </LinkIcon>
      </SectionLinks>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SectionLinks = styled(Box)`
  display: flex;
  align-items: center;
`;

const LinkIcon = styled(Box)`
  display: flex;
  margin: 0px 15px;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;
  transition: .3s;
  &:hover{
    color: gray;
  }
`;

export default Footer;
