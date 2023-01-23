import styled from "styled-components";
import { Box } from "@mui/material";
import "./MobileMenu.styles.css";
import { useNavigate } from "react-router-dom";
import iconLogo from "../../Assets/Image/Icon/iconLogo.png";
import { BiLineChart } from "react-icons/bi";
import { FiPieChart, FiFlag, FiStar } from "react-icons/fi";
import { RiExchangeDollarFill } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const MobileMenu = ({ flagMobileMenu, setFlagMobileMenu }) => {
  const navigate = useNavigate();
  return (
    <MobileMenuComponent flagmenu={flagMobileMenu ? 1 : 0}>
      <StyledComponent>
        <SectionLogo
          onClick={() => {
            setFlagMobileMenu(false);
            navigate("/");
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <ButtonCloseMenu>
            <MdClose />
          </ButtonCloseMenu>
          <IconLogo>
            <img src={iconLogo} width={"100%"} alt="" />
          </IconLogo>
          <TextLogo>
            <span style={{ color: "rgba(214, 221, 238, 1)" }}>LOVELY</span>
            <span style={{ color: "rgba(237, 98, 139, 1)" }}>SWAP</span>
          </TextLogo>
        </SectionLogo>
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
        <LinkEach>
          <IconLink>
            <BsPeople />
          </IconLink>
          <TextLink>P2P</TextLink>
        </LinkEach>
      </StyledComponent>

      <section className="mobileMenu-bg">
        <svg
          width="385"
          height="844"
          viewBox="0 0 385 844"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_163_368)">
            <path
              d="M-2 843L1.75883 843.952C75.9091 706.975 156.355 627.876 224.235 561.132C235.492 550.064 246.403 539.336 256.882 528.74C293.713 491.499 325.275 455.824 347.604 412.766C369.953 369.67 383 319.286 383 252.67C383 109.954 289.262 -2 169.279 -2C101.967 -2 49.0588 12.0851 -1.21253 50.4092L-2 51.0095V51.9997V843Z"
              stroke="url(#paint0_linear_163_368)"
              strokeWidth="4"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_163_368"
              x="-44"
              y="-44"
              width="469"
              height="928.904"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_163_368"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_163_368"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_163_368"
              x1="-3.94818"
              y1="-2.03912e-06"
              x2="193.346"
              y2="841.87"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0705755" stopColor="#181B2E" stopOpacity="0" />
              <stop offset="0.704047" stopColor="#C92A50" />
              <stop offset="1" stopColor="#181B2E" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          style={{ marginLeft: "-387px" }}
          width="390"
          height="844"
          viewBox="0 0 390 844"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_163_367)">
            <path
              d="M-0.906339 50.8045L-1.5 51.2547V51.9997V843L1.31753 843.717C76.1903 706.139 158.192 626.908 227.441 559.999C238.607 549.209 249.443 538.74 259.863 528.398C297.377 491.167 329.56 455.537 352.346 412.548C375.149 369.529 388.5 319.221 388.5 252.67C388.5 110.137 294.404 -1.5 174.15 -1.5C106.588 -1.5 49.5379 12.5525 -0.906339 50.8045Z"
              stroke="url(#paint0_linear_163_367)"
              strokeWidth="3"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_163_367"
              x="-43"
              y="-43"
              width="473"
              height="927.434"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_163_367"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_163_367"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_163_367"
              x1="1.87419e-05"
              y1="95.5"
              x2="196.317"
              y2="842.259"
              gradientUnits="userSpaceOnUse"
            >
              <stop floodOpacity="#181B2E" stopOpacity="0" />
              <stop offset="0.251079" floodOpacity="#FF8BAD" />
              <stop offset="0.609419" floodOpacity="#FFA3AD" />
              <stop offset="1" floodOpacity="#181B2E" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          style={{ marginLeft: "-391px", zIndex: -1 }}
          width="390"
          height="844"
          viewBox="0 0 390 844"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_163_367)">
            <path
              d="M0 51.9997C50.1115 14 106.812 0 174.15 0C293.346 0 387 110.715 387 252.67C387 518 174.15 523 0 843V51.9997Z"
              fill="#181B2E"
              fillOpacity="1"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_163_367"
              x="-43"
              y="-43"
              width="473"
              height="927.434"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_163_367"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_163_367"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </section>
    </MobileMenuComponent>
  );
};

const MobileMenuComponent = styled(Box)`
  display: ${({ flagmenu }) => (!flagmenu ? "none" : "flex")};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  user-select: none;
  transition: 0.5s;
  /* padding: 50px;
  box-sizing: border-box; */
`;

const SectionLogo = styled(Box)`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 30px;
`;

const IconLogo = styled(Box)`
  display: flex;
  width: 32px;
`;

const TextLogo = styled(Box)`
  display: flex;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 168%;
  /* identical to box height, or 24px */

  letter-spacing: 0.07em;
  font-feature-settings: "pnum" on, "lnum" on;

  margin-left: 8px;
`;

const StyledComponent = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 42px 40px;
  box-sizing: border-box;
  transition: 0.5s;
`;

const LinkEach = styled(Box)`
  display: flex;
  width: fit-content;
  user-select: none;
  align-items: center;
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

const ButtonCloseMenu = styled(Box)`
  display: flex;
  margin-right: 20px;
  font-size: 2rem;
  color: rgba(92, 96, 129, 1);
  cursor: pointer;
`;

export default MobileMenu;
