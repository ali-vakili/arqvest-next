'use client'


import { Col } from "react-bootstrap";
import Image from "next/image"
import AppHand from "../assets/GetApp/AppHand.png";
import AppStore from "../assets/GetApp/AppStore.svg";
import GooglePlay from "../assets/GetApp/GooglePlay.svg";

import "@/components/scss/GetApp.scss";

const GetApp = () => {
  return (
    <section className="get-app-section section">
      <div className="container row">
        <Col lg={6} className="app order-lg-1 order-2">
          <Image src={AppHand} alt="arqvest-app" />
        </Col>

        <Col lg={6} className="describe order-lg-2 order-1">
          <h6 className="tag">App</h6>
          <h1>
            Take control of<br />
            your investment.
          </h1>
          <div className="d-flex justify-content-lg-start justify-content-center gap-2">
            <Image src={AppStore} alt="app-store" />
            <Image src={GooglePlay} alt="google-play" />
          </div>
        </Col>
      </div>
      <div className="background">
        <div className="circle top"></div>
        <div className="circle bottom"></div>
      </div>
    </section>
  );
}

export default GetApp;