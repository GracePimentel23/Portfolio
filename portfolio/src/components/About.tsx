import React from 'react';
import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled(Container)`
  padding-top: 100px;
  padding-bottom: 50px;
`;

const Section = styled(Paper)`
  padding: 2rem;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
`;

const ExperienceItem = styled(motion.div)`
  margin-bottom: 2rem;
`;

const SkillsContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const SkillItem = styled(Typography)`
  background: #f0f2f5;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <AboutContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Section elevation={3}>
          <ExperienceItem variants={itemVariants}>
            <Typography variant="h4" gutterBottom>
              Education
            </Typography>
            <Typography variant="h6" color="primary">
              Rochester Institute of Technology
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Bachelor of Science in Web and Mobile Computing
            </Typography>
            <Typography color="textSecondary">
              Expected May 2026
            </Typography>
          </ExperienceItem>
        </Section>

        <Section elevation={3}>
          <Typography variant="h4" gutterBottom>
            Experience
          </Typography>

          <ExperienceItem variants={itemVariants}>
            <Typography variant="h6" color="primary">
              CODE NATION
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Web Designer | June 2020 - Aug 2020
            </Typography>
            <Typography variant="body1" paragraph>
              • Developed proficiency in JavaScript through creative projects focused on interactive art
              <br />
              • Gained foundational skills in HTML and CSS, applying them to build basic web layouts
            </Typography>
          </ExperienceItem>

          <ExperienceItem variants={itemVariants}>
            <Typography variant="h6" color="primary">
              GOOGLE: CODE NEXT
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Software Developer/Web Designer | July 2021 - Aug 2021
            </Typography>
            <Typography variant="body1" paragraph>
              • Strengthened Python skills through hands-on learning, with a focus on using music as a medium for coding
              <br />
              • Worked closely with team members to develop optimized solutions to project requirements
            </Typography>
          </ExperienceItem>

          <ExperienceItem variants={itemVariants}>
            <Typography variant="h6" color="primary">
              CODE PATH
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Software Developer/Web Designer | July 2022 - Aug 2022
            </Typography>
            <Typography variant="body1" paragraph>
              • Deepened understanding of Python while exploring new strategies for writing clean, efficient code
              <br />
              • Applied advanced problem-solving skills to tackle real-world coding challenges
            </Typography>
          </ExperienceItem>
        </Section>

        <Section elevation={3}>
          <Typography variant="h4" gutterBottom>
            Skills
          </Typography>
          
          <Typography variant="h6" gutterBottom>
            Software
          </Typography>
          <SkillsContainer>
            {['Microsoft Office', 'Visual Studio Code', 'Figma', 'Wireshark', 'FlutterFlow', 'FileZilla', 'GitHub', 'Linux'].map((skill) => (
              <SkillItem key={skill} variant="body2">
                {skill}
              </SkillItem>
            ))}
          </SkillsContainer>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            Programming Languages
          </Typography>
          <SkillsContainer>
            {['HTML & CSS', 'Java', 'Javascript', 'PHP', 'SQL', 'Python', 'MySQL', 'React', 'Vim/Vi', 'C#'].map((skill) => (
              <SkillItem key={skill} variant="body2">
                {skill}
              </SkillItem>
            ))}
          </SkillsContainer>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            Speaking Languages
          </Typography>
          <SkillsContainer>
            {['English', 'Spanish'].map((skill) => (
              <SkillItem key={skill} variant="body2">
                {skill}
              </SkillItem>
            ))}
          </SkillsContainer>
        </Section>
      </motion.div>
    </AboutContainer>
  );
};

export default About; 