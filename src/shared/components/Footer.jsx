'use client'


import { useRef, useState, useEffect } from 'react'
import Link from "next/link"
import { Row, Col } from "react-bootstrap"
import { motion, useScroll, useTransform ,useInView } from "framer-motion";
import { calculateSectionYTransition } from '@/utils/Calculate'
import { useGlobalState } from 'react-nice-scroll';
import detectTouch from '@/utils/isTouch';

import "@/shared/scss/Footer.scss"

const currentYear = new Date().getFullYear();

const Footer = () => {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef);
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  const [sectionStartOffset, setSectionStartOffset] = useState(0);
  const [sectionY, setSectionY] = useState(30);
  const initialSectionY = 30;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"]
  })

  const sectionYTransform = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"])
  const [smoothScrollBar] = useGlobalState('smoothScrollBar');


  useEffect(() => {
    setIsTouchScreen(detectTouch());
  })

  useEffect(() => {
    if (isInView && !isTouchScreen) {
      setSectionStartOffset(smoothScrollBar.offset.y);
    }
    else {
      setSectionStartOffset(0);
      setSectionY(30);
    }

  }, [isInView])

  useEffect(() => {
    const maxScrollHeight = smoothScrollBar?.limit?.y;

    let intervalId= null;

    if (isInView && !isTouchScreen) {
      intervalId = setInterval(() => {
        const value = calculateSectionYTransition(sectionStartOffset, maxScrollHeight, smoothScrollBar?.offset?.y);
        setSectionY(initialSectionY - (((initialSectionY * value) / 100).toFixed(2)));
      }, 1);
    }

    return () => {
      clearInterval(intervalId);
    };

  }, [isInView ,sectionStartOffset])

  return (
    <motion.footer className='container footer' ref={targetRef} style={{ y: isTouchScreen ? sectionYTransform : `-${sectionY}%` }}>
      <div className='logo mb-3'>
        <svg width="39" height="33" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.4562 24.8043H1.9912C0.884978 24.8043 0 23.9202 0 22.815V5.231C0 3.95395 1.67162 3.51189 2.31077 4.61704L11.4555 20.2609C11.898 21.0223 12.8813 21.2924 13.6434 20.8258C14.4055 20.3837 14.6759 19.4014 14.2088 18.6401L11.2835 13.6055C10.9885 13.1143 10.9885 12.5004 11.2835 11.9846L17.8225 0.810437C18.4616 -0.270146 20.0103 -0.270146 20.6495 0.810437L31.9821 20.2364C32.4246 20.9977 33.4079 21.2678 34.17 20.8012C34.932 20.3592 35.2024 19.3768 34.7354 18.6155L31.81 13.6055C31.515 13.1143 31.515 12.5004 31.81 11.9846L36.1366 4.61704C36.7757 3.51189 38.4474 3.97851 38.4474 5.231V22.7905C38.4474 23.9202 37.5624 24.8043 36.4562 24.8043Z" fill="#C9896E"/>
          <path d="M1.9912 32.0011H36.4316C37.5378 32.0011 38.4228 31.117 38.4228 30.0119C38.4228 28.9067 37.5378 28.0226 36.4316 28.0226L1.9912 27.998C0.884978 27.998 0 28.8822 0 29.9873C0 31.117 0.884978 32.0011 1.9912 32.0011Z" fill="#C9896E"/>
        </svg>
      </div>
      <Row className='mb-lg-4 mb-5 gx-0'>
        <Col md={5}>
          <h5 className='address'>
          Congress Ave,<br />
          Boynton Beach,<br />
          FL 33426
          </h5>
        </Col>

        <Col md={6} className='directories'>
          <Row className='w-100'>
            <Col xs={4}>
              <ul>
                <li>
                  <Link href="#">Plans</Link>
                </li>

                <li>
                  <Link href="#">Contact</Link>
                </li>

                <li>
                  <Link href="#">News</Link>
                </li>
              </ul>
            </Col>

            <Col xs={4}>
              <ul>
                <li>
                  <Link href="#">Company</Link>
                </li>

                <li>
                  <Link href="#">Faq</Link>
                </li>

                <li>
                  <Link href="#">Blog</Link>
                </li>
              </ul>
            </Col>

            <Col xs={4}>
              <ul>
                <li>
                  <Link href="#">Careers</Link>
                </li>

                <li>
                  <Link href="#">Legal</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className='copyright'>
        <p>© {currentYear} arqvest. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}

export default Footer