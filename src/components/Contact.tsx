import React from 'react';
import { Container, Typography, Box, Link, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Email, GitHub, LinkedIn, Phone, LocationOn } from '@mui/icons-material';

const ContactContainer = styled(Container)`
  padding-top: 100px;
  padding-bottom: 50px;
  text-align: center;
`;

const ContactCard = styled(Paper)`
  padding: 3rem;
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
  gap: 1rem;

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #e74c3c;
    }
  }
`;

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <ContactContainer id="contact">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          I'm always open to new opportunities and collaborations
        </Typography>

        <ContactCard elevation={3}>
          <ContactItem variants={itemVariants}>
            <Email color="primary" />
            <Link href="mailto:pimentelgrace6@gmail.com">
              pimentelgrace6@gmail.com
            </Link>
          </ContactItem>

          <ContactItem variants={itemVariants}>
            <Phone color="primary" />
            <Link href="tel:917-391-3592">
              917-391-3592
            </Link>
          </ContactItem>

          <ContactItem variants={itemVariants}>
            <LocationOn color="primary" />
            <Typography>
              Rochester, NY
            </Typography>
          </ContactItem>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 4 }}>
            <ContactItem variants={itemVariants}>
              <Link href="https://github.com/GracePimentel23/" target="_blank" rel="noopener noreferrer">
                <GitHub />
                <Typography>GitHub</Typography>
              </Link>
            </ContactItem>

            <ContactItem variants={itemVariants}>
              <Link href="https://www.linkedin.com/in/grace-pimentel26" target="_blank" rel="noopener noreferrer">
                <LinkedIn />
                <Typography>LinkedIn</Typography>
              </Link>
            </ContactItem>
          </Box>
        </ContactCard>
      </motion.div>
    </ContactContainer>
  );
};

export default Contact; 