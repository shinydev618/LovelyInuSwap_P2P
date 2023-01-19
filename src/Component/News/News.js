import { memo } from "react";
import Marquee from "react-fast-marquee";
import iconToken01 from "../../Assets/Image/Icon/token01.png";
import iconToken02 from "../../Assets/Image/Icon/token02.png";
import iconToken03 from "../../Assets/Image/Icon/token03.png";
import iconToken04 from "../../Assets/Image/Icon/token04.png";

import "./News.styles.css";

export const News = memo(() => {
  return (
    <div className={`news-line`}>
      <div className="news-elements-container">
        <Marquee gradient={false}>
          <div className="news-elem">
            <img src={iconToken01} alt="token logo"></img>
            <span className="token-position">1#</span>
            <span>MANA</span>
          </div>
          <div className="news-elem">
            <img src={iconToken02} alt="token logo"></img>
            <span className="token-position">2#</span>
            <span>DAO</span>
          </div>
          <div className="news-elem">
            <img src={iconToken03} alt="token logo"></img>
            <span className="token-position">3#</span>
            <span>USDP</span>
          </div>
          {/* <div className="news-elem">
            <img
              style={{ borderRadius: "10em" }}
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/11346.png"
              alt="token logo"
            ></img>
            <span className="token-position">4#</span>
            <span>RACA</span>
          </div>
          <span style={{ width: "40px" }} /> */}
        </Marquee>
      </div>
      <div className="news-main-elem">
        <div className="token-half-bg" />
        <section>
          <span>STRIKE</span>
          <img src={iconToken04} alt="token logo" />
        </section>
      </div>
    </div>
  );
});
