'use client'


import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from 'framer-motion';
import { AnimatedLetters } from "@/utils/TextAnimation";
import CommunityPeople1 from "@/components/assets/Community/CommunityPeople-1.png";
import CommunityPeople2 from "@/components/assets/Community/CommunityPeople-2.png";
import CommunityPeople3 from "@/components/assets/Community/CommunityPeople-3.png";
import CommunityPeople4 from "@/components/assets/Community/CommunityPeople-4.png";
import CommunityPeople5 from "@/components/assets/Community/CommunityPeople-5.png";
import CommunityPeople6 from "@/components/assets/Community/CommunityPeople-6.png";
import CommunityPeople7 from "@/components/assets/Community/CommunityPeople-7.png";
import CommunityPeople8 from "@/components/assets/Community/CommunityPeople-8.png";
import CommunityPeople9 from "@/components/assets/Community/CommunityPeople-9.png";

import "@/components/scss/Community.scss";


const Community = () => {
  const ref = useRef(null);
  const sectionInView = useRef(null);
  const isInView = useInView(sectionInView);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [imageOffsets, setImageOffsets] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      isInView && setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    
  }, [isInView]);

  useEffect(() => {
    const imageRect = ref.current.getBoundingClientRect();
    const centerX = imageRect.left + imageRect.width / 2;
    const centerY = imageRect.top + imageRect.height / 2;

    const offsetX = (cursorPosition.x - centerX) * -0.012;
    const offsetY = (cursorPosition.y - centerY) * -0.012;

    setImageOffsets({ x: offsetX, y: offsetY });
  }, [cursorPosition]);

  return (
    <section ref={sectionInView} className="community-section section">
      <div className="container">
        <div className="wrapper">
          <h6>community</h6>
          <h1>
            <AnimatedLetters title={"Community defines"} />
            <AnimatedLetters title={"the actual value!"} />
          </h1>
          <Link className="learn primary-link" href="#" scroll={false}>
            Learn More
            <span></span>
          </Link>
        </div>
        <div className="community-members">
          <div className="members">
            <motion.span
              ref={ref}
              whileInView={{
                x: imageOffsets.x,
                y: imageOffsets.y,
              }}
              transition={{
                ease: "circOut",
                duration: 3,
              }}
            >
              <Image src={CommunityPeople1} alt="member"/>
            </motion.span>
            <motion.span
              ref={ref}
              whileInView={{
                x: imageOffsets.x,
                y: imageOffsets.y,
              }}
              transition={{
                ease: "circOut",
                duration: 3
              }}
            >
              <Image src={CommunityPeople2} alt="member"/>
            </motion.span>
            <motion.span
              ref={ref}
              whileInView={{
                x: imageOffsets.x,
                y: imageOffsets.y,
              }}
              transition={{
                ease: "circOut",
                duration: 3
              }}
            >
              <Image src={CommunityPeople3} alt="member"/>
            </motion.span>
            <motion.span
              ref={ref}
              whileInView={{
                x: imageOffsets.x,
                y: imageOffsets.y,
              }}
              transition={{
                ease: "circOut",
                duration: 3
              }}
            >
              <Image src={CommunityPeople4} alt="member"/>
            </motion.span>
          </div>
          <div className="members">
            <motion.span
              ref={ref}
              whileInView={{
                x: imageOffsets.x,
                y: imageOffsets.y,
              }}
              transition={{
                ease: "circOut",
                duration: 4
              }}
            >
              <Image src={CommunityPeople5} alt="member"/>
            </motion.span>
            <motion.span
              ref={ref}
              whileInView={{
                x: imageOffsets.x,
                y: imageOffsets.y,
              }}
              transition={{
                ease: "circOut",
                duration: 4
              }}
            >
              <Image src={CommunityPeople6} alt="member"/>
            </motion.span>
          </div>
          <div className="members">
            <motion.span
              ref={ref}
              whileInView={{
                x: imageOffsets.x,
                y: imageOffsets.y,
              }}
              transition={{
                ease: "circOut",
                duration: 5
              }}
            >
              <Image src={CommunityPeople7} alt="member"/>
            </motion.span>
            <motion.span
              ref={ref}
              whileInView={{
                x: imageOffsets.x,
                y: imageOffsets.y,
              }}
              transition={{
                ease: "circOut",
                duration: 5
              }}
            >
              <Image src={CommunityPeople8} alt="member"/>
            </motion.span>
            <motion.span
              ref={ref}
              whileInView={{
                x: imageOffsets.x,
                y: imageOffsets.y,
              }}
              transition={{
                ease: "circOut",
                duration: 5
              }}
            >
              <Image src={CommunityPeople9} alt="member"/>
            </motion.span>
          </div>
        </div>
      </div>
      <div className="background">
        <div className="circle top"></div>
        <div className="circle bottom"></div>
      </div>
    </section>
  );
}

export default Community;