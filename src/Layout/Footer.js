import styled from "styled-components";
import { Box } from "@mui/material";
import {
  FaTelegramPlane,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaScroll,
} from "react-icons/fa";

const Footer = () => {
  return (
    <StyledComponent>
      <SectionLinks>
        <LinkIcon>
          <FaTelegramPlane />
        </LinkIcon>
        <LinkIcon>
          <FaYoutube />
        </LinkIcon>
        <LinkIcon>
          <FaTwitter />
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
  margin-bottom: 40px;
  margin-top: 100px;
  z-index: 5;
`;

const SectionLinks = styled(Box)`
  display: flex;
  align-items: center;
`;

const LinkIcon = styled(Box)`
  display: flex;
  margin: 0px 20px;
  justify-content: center;
  align-items: center;
  color: #5c6081;
  opacity: 0.64;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: white;
  }
`;

export default Footer;
