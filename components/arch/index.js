import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ArcText } from '@arctext/react';
import styled from 'styled-components';

const RotatingComponent = () => {
  const [rotation, setRotation] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      const rotationValue = window.scrollY * 0.1; // Adjust rotation speed as needed
      setRotation(rotationValue);
    };

    if (inView) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inView]);

  return (
    <div ref={ref} style={{ transform: `rotate(${rotation}deg)` }}>
      <Arch />
    </div>
  );
};



function Arch() {

  // color: black;
  const Circle = styled(ArcText)`
  position: absolute;
  border-width: 10%;
  & span.character {
    font-size: 14px;
    font-family: monospace;
  }

`

    return (
            <div className='p-4 border-2 border-black rounded-full z-20 transform rotate-[45deg]'>
                <span className='w-full animate-spin-slow font-bold font-PanchangSemibold'>
                <Circle
                    text="- Ekaji Onah - Software developer"
                    characterWidth={10.5}
                    radius={70}
                >
                    <div className='w-6 h-6 bg-black rounded-full'></div>
                </Circle>
                </span>
            </div>
  );
}

export default RotatingComponent;
