'use client'


import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { AnimatedLetters } from "@/utils/TextAnimation";
import Marquee from "react-fast-marquee";
import ApplePay from "@/components/assets/Business/Apple_Pay_logo.svg";
import PayPal from "@/components/assets/Business/PayPal.svg";
import SquareInc from "@/components/assets/Business/Square_Inc_logo.svg";
import Stripe from "@/components/assets/Business/Stripe.svg";


import "@/components/scss/Business.scss";


const Business = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <section className="business-section section">
      <Row className="financial-market container-lg">
        <Col md={5} className="financial offset-lg-1">
          <h1>
            <span>
              World’s Largest
              <br />
              Financial Market.
            </span>
          </h1>
        </Col>
        <Col md={6} lg={5} className="finance-description">
          <p className="text-about-finance">
            Arqvest is a fintech company providing financial market-related services such as consultation, investment solutions, etc. with unique membership and credit card plans.
          </p>
          <Link href="#" className="primary-link" scroll={false}>
            About Us
            <span></span>
          </Link>
        </Col>
      </Row>
      <div className="business container-md">
        <div className="content-block">
          <h5 className="text">
            <AnimatedLetters title={"Our Business Partners"} />
          </h5>
          {!isSmallScreen ? (
            <div className="partners">
              <Image className="partner apple" src={ApplePay} alt="apple_pay_logo" />
              <Image className="partner stripe" src={Stripe} alt="stripe-logo" />
              <Image className="partner paypal" src={PayPal} alt="paypal-logo" />
              <Image className="partner square-inc" src={SquareInc} alt="square-inc-logo" />
            </div>
          ) : (
            <Marquee speed={25} gradient={true} gradientColor={[250, 250, 250]} gradientWidth={140} >
              <Image className="partner apple" src={ApplePay} alt="apple_pay_logo" width={"100%"} height={"auto"} />
              <Image className="partner stripe" src={Stripe} alt="stripe-logo" width={"100%"} height={"auto"} />
              <Image className="partner paypal" src={PayPal} alt="paypal-logo" width={"100%"} height={"auto"} />
              <Image className="partner square-inc" src={SquareInc} alt="square-inc-logo" width={"100%"} height={"auto"} />
            </Marquee>
          )}
        </div>
      </div>
    </section>
  );
}

export default Business;