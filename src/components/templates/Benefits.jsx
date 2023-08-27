'use client'


import { useState, useEffect, memo } from "react";
import detectTouch from '@/utils/isTouch';
import classnames from "classnames";
import { AnimatedLetters } from "@/utils/TextAnimation";
import { motion } from 'framer-motion';
import Link from "next/link";
import { Col } from "react-bootstrap";

import "@/components/scss/Benefits.scss";


const Benefits = () => {
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

  const linkEnter = () => {
    setLinkHover(true);
  };

  const linkExit = () => {
    setLinkHover(false);
  };

  useEffect(() => {
    setIsTouchScreen(detectTouch());
  }, []);

  const liEventHandlers = isTouchScreen
    ? {}
    : {
        onMouseEnter: linkEnter,
        onMouseLeave: linkExit,
      };

  return (
    <section className="benefits-section section">
      <div className="container row">
        <Col xl={4} lg={5} md={6} sm={8} className="describe offset-xl-1">
          <h6 className="tag">Benefits</h6>
          <h1>
            <AnimatedLetters title={"Benefits are much"} display="inline-flex" />
            <AnimatedLetters title={"more than money."} display="inline-flex"/>
          </h1>
          <Link href="/" className="primary-link">
            Learn More
            <span></span>
          </Link>
        </Col>

        <Col xl={5} lg={6} className="benefits offset-lg-1">
          <ul>
            <motion.li
              initial={{ visibility: "hidden", y: 30 }}
              whileInView={{ visibility: "visible", y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                ease: "easeIn",
                duration: 2,
              }}
            >
              <Link href="/" className={classnames("benefit-link", { active: !linkHover && !isTouchScreen })}>
                <h4>
                  International Contracts
                </h4>
                <div>
                  <h6>Read</h6>
                  <span></span>
                </div>
              </Link>
            </motion.li>

            <motion.li
              initial={{ visibility: "hidden", y: 50 }}
              whileInView={{ visibility: "visible", y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                ease: "easeIn",
                duration: 2,
              }}
              {...liEventHandlers}
            >
              <Link href="/" className="benefit-link">
                <h4>
                  Monthly Reports
                </h4>
                <div>
                  <h6>Read</h6>
                  <span></span>
                </div>
              </Link>
            </motion.li>

            <motion.li
              initial={{ visibility: "hidden", y: 50 }}
              whileInView={{ visibility: "visible", y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                ease: "easeIn",
                duration: 2,
              }}
              {...liEventHandlers}
            >
              <Link href="/" className="benefit-link">
                <h4>
                  24/7 Online Support
                </h4>
                <div>
                  <h6>Read</h6>
                  <span></span>
                </div>
              </Link>
            </motion.li>

            <motion.li
              initial={{ visibility: "hidden", y: 50 }}
              whileInView={{ visibility: "visible", y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                ease: "easeIn",
                duration: 2,
              }}
              {...liEventHandlers}
            >
              <Link href="/" className="benefit-link">
                <h4>
                  World Wide Agencies
                </h4>
                <div>
                  <h6>Read</h6>
                  <span></span>
                </div>
              </Link>
            </motion.li>

            <motion.li
              initial={{ visibility: "hidden", y: 50 }}
              whileInView={{ visibility: "visible", y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                ease: "easeIn",
                duration: 2,
              }}
              {...liEventHandlers}
            >
              <Link href="/" className="benefit-link">
                <h4>
                  Various IB Plans
                </h4>
                <div>
                  <h6>Read</h6>
                  <span></span>
                </div>
              </Link>
            </motion.li>

            <motion.li
              initial={{ visibility: "hidden", y: 50 }}
              whileInView={{ visibility: "visible", y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                ease: "easeIn",
                duration: 2,
              }}
              {...liEventHandlers}
            >
              <Link href="/" className="benefit-link">
                <h4>
                  Financial Consultant
                </h4>
                <div>
                  <h6>Read</h6>
                  <span></span>
                </div>
              </Link>
            </motion.li>
          </ul>
        </Col>
      </div>
    </section>
  );
}

export default Benefits;