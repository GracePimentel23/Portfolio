import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container } from '@mui/material';
import styled from 'styled-components';

// Hero section
const HeroSection = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
  padding-top: 120px;
`;

// Profile container
const ProfilePictureContainer = styled(motion.div)`
  width: 500px;
  height: 500px;
  overflow: hidden;
  position: relative;
  margin: 2rem 0 2rem auto;
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(0, 209, 255, 0.2);
  
  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
    margin: 2rem auto;
  }
`;

// Profile image
const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  border-radius: 50%;
`;

// Animated name
const AnimatedName = styled(motion.div)`
  position: absolute;
  white-space: nowrap;
  font-size: 16rem;
  font-weight: 400;
  opacity: 0.12;
  background: linear-gradient(45deg, #00D1FF, #4A90E2, #6B46C1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 0;
  width: 200%;
  text-align: center;
  font-family: 'Mea Culpa', cursive;
  letter-spacing: 2px;
  text-transform: none;
  font-style: normal;
  left: -50%;
  
  @media (max-width: 768px) {
    font-size: 12rem;
    width: 180%;
    left: -40%;
  }
`;

// Role text
const AnimatedRole = styled(motion.div)<{ size: number; top: string; direction: 'left' | 'right' }>`
  position: absolute;
  white-space: nowrap;
  font-size: ${props => props.size}rem;
  font-weight: 500;
  opacity: 0.18;
  background: linear-gradient(45deg, #00D1FF, #4A90E2, #6B46C1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 0;
  width: 100%;
  text-align: center;
  top: ${props => props.top};
  font-family: ${props => {
    switch (props.size) {
      case 4: return "'Playfair Display', serif";
      case 3.5: return "'Montserrat', sans-serif";
      case 3: return "'Raleway', sans-serif";
      case 2.5: return "'Quicksand', sans-serif";
      case 2: return "'Open Sans', sans-serif";
      default: return "'Poppins', sans-serif";
    }
  }};
  text-shadow: 0 0 20px rgba(0, 209, 255, 0.15);
`;

// Role list
const professionalRoles = [
  { text: "Creative Developer", size: 4, top: "-40%", direction: 'right' as const },
  { text: "Digital Artist", size: 3.5, top: "-20%", direction: 'left' as const },
  { text: "Code Poet", size: 3, top: "0%", direction: 'right' as const },
  { text: "Tech Dreamer", size: 3.2, top: "20%", direction: 'left' as const },
  { text: "Pixel Perfect", size: 2.8, top: "40%", direction: 'right' as const },
  { text: "Digital Craftsman", size: 2.8, top: "60%", direction: 'left' as const },
  { text: "Web Alchemist", size: 2.5, top: "80%", direction: 'right' as const },
  { text: "Digital Explorer", size: 2, top: "100%", direction: 'left' as const }
];

// Content layout
const ContentContainer = styled(Container)`
  text-align: left;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;
  padding-right: 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding-right: 24px;
  }
`;

// Text wrapper
const TextContentWrapper = styled.div`
  flex: 1;
  max-width: 600px;
`;

// Contact button
const ContactButton = styled(motion.button)`
  background: linear-gradient(45deg, #00D1FF, #4A90E2);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 2rem;
  box-shadow: 0 4px 15px rgba(0, 209, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 209, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
  }
`;

// Section wrapper
const SectionContainer = styled(motion.section)`
  padding: 100px 0;
`;

// Animation config
const fadeInUpAnimation = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Home = () => {
  return (
    <>
      <HeroSection id="home">
        <ContentContainer>
          <AnimatedName
            animate={{
              x: ['100%', '-100%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 25,
                ease: 'linear',
              },
            }}
          >
            Grace Pimentel
          </AnimatedName>

          {professionalRoles.map((role, index) => (
            <AnimatedRole
              key={role.text}
              size={role.size}
              top={role.top}
              direction={role.direction}
              animate={{
                x: role.direction === 'right' ? ['-100%', '100%'] : ['100%', '-100%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 8 + index * 0.5,
                  ease: 'linear',
                  delay: index * 0.3
                },
              }}
            >
              {role.text}
            </AnimatedRole>
          ))}
          
          <TextContentWrapper>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInUpAnimation}
            >
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom
                sx={{ 
                  fontWeight: 700,
                  color: '#1A1A1A',
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                Grace Pimentel
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: '#00D1FF',
                  marginBottom: 3,
                  fontSize: { xs: '1.5rem', md: '2rem' }
                }}
              >
                Web Designer & Software Developer
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(26, 26, 26, 0.85)',
                  marginBottom: 2,
                  fontSize: { xs: '1.1rem', md: '1.3rem' }
                }}
              >
                Pursuing a B.S. in Web and Mobile Computing at Rochester Institute of Technology.
                Passionate about creating innovative solutions through web and mobile design.
              </Typography>
              <ContactButton
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </ContactButton>
            </motion.div>
          </TextContentWrapper>

          <ProfilePictureContainer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { 
                scale: 1, 
                opacity: 1,
                transition: { duration: 0.8 }
              }
            }}
          >
            <ProfilePicture src="/Grace_Headshot.png" alt="Grace Pimentel" />
          </ProfilePictureContainer>
        </ContentContainer>
      </HeroSection>

      <SectionContainer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUpAnimation}
      >
        <Container>
          <Typography 
            variant="h3" 
            sx={{ 
              color: '#1A1A1A',
              textAlign: 'left',
              marginBottom: 4,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            About
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(26, 26, 26, 0.85)',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              lineHeight: 1.8
            }}
          >
            I'm a passionate web designer and developer with a focus on creating innovative, user-centric digital experiences. 
            My expertise spans across modern web technologies and design principles, allowing me to build solutions that are 
            both beautiful and functional.
          </Typography>
        </Container>
      </SectionContainer>
    </>
  );
};

export default Home; 