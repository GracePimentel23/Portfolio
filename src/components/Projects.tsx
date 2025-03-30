import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Box, Typography, Chip, Card, CardContent } from '@mui/material';
import styled from 'styled-components';

const ProjectsContainer = styled(Container)`
  padding-top: 100px;
  padding-bottom: 50px;
`;

const FilterContainer = styled(Box)`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  height: 100%;
  transition: transform 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled(Box)`
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%);
    transition: background 0.3s ease;
  }
  
  &:hover::after {
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%);
  }
`;

const projects = [
  {
    title: 'Personalized Web Platform',
    description: 'A dynamic, personalized web platform that adapts content based on user preferences, integrating back-end data processing with a front-end React-based interface.',
    technologies: ['React', 'Java', 'PHP', 'MySQL', 'CSS', 'HTML'],
    date: 'Aug 2024 - Present',
    image: '/project-web-platform.png'
  },
  {
    title: 'C# Web Service Consumer',
    description: 'A C# front-end application that interacts with RESTful services provided by the iSchool API, featuring enhanced UI and proper API integration.',
    technologies: ['C#', 'AJAX', 'Bootstrap', 'jQuery', 'HTML', 'CSS', 'JavaScript'],
    date: 'Dec 2024',
    image: '/project-web-service.png'
  }
];

const allTechnologies = Array.from(
  new Set(projects.flatMap(project => project.technologies))
).sort();

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  const filteredProjects = projects.filter(project =>
    selectedTech.length === 0 || 
    selectedTech.some(tech => project.technologies.includes(tech))
  );

  const handleTechFilter = (tech: string) => {
    setSelectedTech(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  return (
    <ProjectsContainer id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Projects
        </Typography>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <FilterContainer>
          {allTechnologies.map(tech => (
            <Chip
              key={tech}
              label={tech}
              onClick={() => handleTechFilter(tech)}
              color={selectedTech.includes(tech) ? 'primary' : 'default'}
              variant={selectedTech.includes(tech) ? 'filled' : 'outlined'}
              sx={{ margin: '4px' }}
            />
          ))}
        </FilterContainer>
      </motion.div>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: 4, 
        mt: 4,
        '@media (min-width: 960px)': {
          gridTemplateColumns: 'repeat(2, 1fr)'
        }
      }}>
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StyledCard>
                <ProjectImage
                  sx={{
                    backgroundImage: `url(${project.image})`,
                  }}
                />
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {project.date}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map(tech => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{ margin: '2px' }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </StyledCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </Box>
    </ProjectsContainer>
  );
};

export default Projects; 