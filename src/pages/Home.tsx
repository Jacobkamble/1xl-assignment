import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';

import h1 from "../assets/h1.png"
import h2 from "../assets/h2.png"
import h3 from "../assets/h3.png"
import h4 from "../assets/h4.png"
import h5 from "../assets/h5.png"

const Home: React.FC = () => {
  const [title1Completed, setTitle1Completed] = useState(false);

  const title1Props = useSpring({
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(-100%)' },
    config: { duration: 5000, easing: (t: number) => t },
    onRest: () => setTitle1Completed(true),
  });

  const title2Props = useSpring({
    from: { transform: 'translateY(-100%)' },
    to: { transform: title1Completed ? 'translateY(0%)' : 'translateY(-100%)' },
    config: { duration: 2000, easing: (t: number) => t },
  });

  const imageProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
    delay: 500,
  });

  return (
    <Hero>
      <TextContainer>
        {!title1Completed && (
          <AnimatedTitle style={title1Props}>
            <Title>Taking care for your pets!</Title>
          </AnimatedTitle>
        )}
        {title1Completed && (
          <AnimatedTitleLeft style={title2Props}>
            <Title>Get various services personalized for your pets</Title>
          </AnimatedTitleLeft>
        )}
      </TextContainer>
      <ImageContainer>
        <ImageStack>
          <animated.img style={{ ...imageProps, ...stackedImageStyle(1) }} src={h1} alt="Pet 1" />
          <animated.img style={{ ...imageProps, ...stackedImageStyle(2) }} src={h2} alt="Pet 2" />
          <animated.img style={{ ...imageProps, ...stackedImageStyle(3) }} src={h3} alt="Pet 3" />
          <animated.img style={{ ...imageProps, ...stackedImageStyle(4) }} src={h4} alt="Pet 4" />
          <animated.img style={{ ...imageProps, ...stackedImageStyle(5) }} src={h5} alt="Pet 5" />
        </ImageStack>
      </ImageContainer>
    </Hero>
  );
};

const Hero = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #f7f7f7;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const AnimatedTitle = styled(animated.div)`
  margin-left: 2rem;
  width: 100%;
  z-index: 1;
`;

const AnimatedTitleLeft = styled(animated.div)`
  margin-left: 2rem;
  width: 100%;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: left;
  padding: 0;
  margin: 0;
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageStack = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const stackedImageStyle = (index: number): React.CSSProperties => {
  const positions = [
    { top: '10%', left: '20%', zIndex: 5 },
    { top: '30%', left: '30%', zIndex: 4 },
    { top: '50%', left: '40%', zIndex: 3 },
    { top: '70%', left: '50%', zIndex: 2 },
    { top: '90%', left: '60%', zIndex: 1 },
  ];
  return {
    position: 'absolute',
    width: '150px',
    height: '150px',
    ...positions[index - 1],
  };
};

export default Home;
