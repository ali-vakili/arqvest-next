'use client'


import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Col } from "react-bootstrap";
// import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from "framer-motion";
import { AnimateWords, AnimateAqrvestWord } from "@/utils/TextAnimation";
import Animation from "@/components/assets/Circles-Background.json";

import goldenHand from "@/components/assets/Hero/Gold-Hand.png";
import "@/components/scss/Hero.scss";

const Hero = () => {
  
  useEffect(() => {
    const lottieDiv = document.getElementById('lottie');

    if (lottieDiv) {
      lottieDiv.style = null
      const svgElement = lottieDiv && lottieDiv.querySelector("svg");
      const firstChild = svgElement.firstChild;
  
      if (firstChild && firstChild.nodeName === 'defs') {
        svgElement.removeChild(firstChild);
      }
    }
  }, [])

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 0.7 + i;
      return {
        pathLength: [0, 1],
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 2, bounce: 0, ease: "ease" },
          opacity: { delay, duration: 0.04 }
        }
      };
    }
  };

  return (
    <section className="hero-section section">
      <div className="container row">
        <Col md={6} xl={4} className="text-content offset-xl-1">
          <div className="wrapper">
            <div className="display">
              <h1 className="display-text display-5">
                <AnimateAqrvestWord title="Arqvest," />
              </h1>
              <div className="svg">
                <svg width="195" height="21" viewBox="0 0 195 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    d="M1.12102 17.3106C49.2702 10.8615 125.747 0.364259 194.836 2.858C148.777 4.76438 92.6652 12.7658 68.2259 18.6444C113.962 13.1493 135.974 11.6547 183.062 15.0496"
                    stroke="#C9896E"
                    strokeWidth="3"
                    initial="hidden"
                    custom={0}
                    animate="visible"
                    variants={draw}
                  />
                </svg>
                <span className='sr-only'>under-line-svg</span>
              </div>
            </div>
            <h1 className="display-text display-5">
              <AnimateWords title="a smart way" delay={0} />
              <AnimateWords title="of investment!" delay={1} />
            </h1>
          </div>
          
          <Link href="#" className="join">
            <button className="button">
              Join Us Now
            </button>
          </Link>
        </Col>

        <Col md={6} xl={6} className="golden-hand offset-xl-1">
          <Image
            className="image" 
            src={goldenHand} 
            alt="golden-hand"
            width={"100%"}
            height={"auto"}
           />
        </Col>
      </div>
      <div className="background">
        {/* <Player
          autoplay
          loop
          src={Animation}
        /> */}
      </div>
    </section>
  );
}

export default Hero;