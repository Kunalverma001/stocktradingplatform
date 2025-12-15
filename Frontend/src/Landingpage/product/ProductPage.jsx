import React from "react";
import ProductHero from "./ProductHero.jsx";
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Universe from "./Universe.jsx";

function ProductPage() {
  return (
    <div>
      <ProductHero />

      <LeftSection
        imgURL="./media/kite.png"
        title="Kite"
        desc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        TryDemo={
          <>
            Try demo <i className="fa-solid fa-arrow-right"></i>
          </>
        }
        TryDemoLink=""
        LearnMoreLink=""
        LearnMore={
          <>
            Learn more <i className="fa-solid fa-arrow-right"></i>
          </>
        }
        PlaystoreImg="./media/googlePlayBadge.svg"
        AppstoreImg="./media/appstoreBadge.svg"
        PlaystoreLink=""
        AppstoreLink=""
      />
      <RightSection
        imgURL="./media/console.png"
        title="Console"
        titleClass="console-h2"
        desc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        LearnMoreLink=""
        LearnMore={
          <>
            Learn more <i className="fa-solid fa-arrow-right"></i>
          </>
        }
      />
      <LeftSection
        imgURL="./media/coin.png"
        title="Coin"
        desc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        Coin={
          <>
            Coin <i className="fa-solid fa-arrow-right"></i>
          </>
        }
        CoinLink=""
        PlaystoreImg="./media/googlePlayBadge.svg"
        AppstoreImg="./media/appstoreBadge.svg"
        PlaystoreLink=""
        AppstoreLink=""
      />
      <RightSection
        imgURL="./media/kiteconnect.svg"
        title="Kite Connect API"
        titleClass="kiteconnecth2"
        desc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        KiteConnectLink=""
        KiteConnect={
          <>
            KiteConnect <i className="fa-solid fa-arrow-right"></i>
          </>
        }
      />
      <LeftSection
        imgURL="./media/varsity.png"
        title="Varsity mobile"
        titleClass="varsityh2"
        desc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        PlaystoreImg="./media/googlePlayBadge.svg"
        AppstoreImg="./media/appstoreBadge.svg"
        PlaystoreLink=""
        AppstoreLink=""
        storeImgClass="varsityStoreImg"
      />
      <Universe />
    </div>
  );
}

export default ProductPage;
