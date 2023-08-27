'use client'


import { ScrollContainer } from 'react-nice-scroll';

import 'react-nice-scroll/dist/styles.css';
import './react-nice-scroll.css';

const SmoothScroll = ({ children }) => {
  return (
    <ScrollContainer damping={0.035}>
      {children}
    </ScrollContainer> 
  )
}

export default SmoothScroll