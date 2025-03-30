import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, useScrollTrigger, Container } from '@mui/material';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
`;

const NavButton = styled(Button)`
  margin: 0 2rem;
  color: #4A90E2;
  position: relative;
  font-weight: 600;
  font-size: 1.25rem;
  padding: 1.25rem 0.75rem;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 50%;
    background-color: #4A90E2;
    transition: all 0.3s ease;
    transform: translateX(-50%);
    box-shadow: 0 0 10px rgba(74, 144, 226, 0.5);
  }

  &:hover {
    color: #00D1FF;
  }

  &:hover::after {
    width: 100%;
    background-color: #00D1FF;
  }

  @media (max-width: 960px) {
    margin: 0 1.5rem;
    font-size: 1.125rem;
  }

  @media (max-width: 600px) {
    margin: 0 1rem;
    font-size: 1rem;
    padding: 1rem 0.5rem;
  }
`;

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      
      // Special handling for bottom of page
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
        setActiveSection('contact');
        return;
      }

      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const topThreshold = 100;
          const bottomThreshold = window.innerHeight - 100;
          
          // More flexible detection range
          return (rect.top <= topThreshold && rect.bottom >= topThreshold) ||
                 (rect.top <= bottomThreshold && rect.bottom >= bottomThreshold) ||
                 (rect.top >= topThreshold && rect.bottom <= bottomThreshold);
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledAppBar 
      position="fixed" 
      elevation={trigger ? 4 : 0}
      sx={{
        bgcolor: trigger ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(74, 144, 226, 0.2)',
        boxShadow: trigger ? '0 4px 20px rgba(74, 144, 226, 0.15)' : 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          sx={{ 
            justifyContent: 'center',
            minHeight: '100px',
            '@media (max-width: 600px)': {
              minHeight: '80px',
            }
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <NavButton 
              onClick={() => handleNavClick('home')}
              sx={{ 
                '&::after': { 
                  width: activeSection === 'home' ? '100%' : '0',
                  boxShadow: activeSection === 'home' ? '0 0 10px rgba(74, 144, 226, 0.5)' : 'none',
                },
                color: activeSection === 'home' ? '#4A90E2' : 'inherit',
              }}
            >
              Home
            </NavButton>
            <NavButton 
              onClick={() => handleNavClick('about')}
              sx={{ 
                '&::after': { 
                  width: activeSection === 'about' ? '100%' : '0',
                  boxShadow: activeSection === 'about' ? '0 0 10px rgba(74, 144, 226, 0.5)' : 'none',
                },
                color: activeSection === 'about' ? '#4A90E2' : 'inherit',
              }}
            >
              About
            </NavButton>
            <NavButton 
              onClick={() => handleNavClick('projects')}
              sx={{ 
                '&::after': { 
                  width: activeSection === 'projects' ? '100%' : '0',
                  boxShadow: activeSection === 'projects' ? '0 0 10px rgba(74, 144, 226, 0.5)' : 'none',
                },
                color: activeSection === 'projects' ? '#4A90E2' : 'inherit',
              }}
            >
              Projects
            </NavButton>
            <NavButton 
              onClick={() => handleNavClick('contact')}
              sx={{ 
                '&::after': { 
                  width: activeSection === 'contact' ? '100%' : '0',
                  boxShadow: activeSection === 'contact' ? '0 0 10px rgba(74, 144, 226, 0.5)' : 'none',
                },
                color: activeSection === 'contact' ? '#4A90E2' : 'inherit',
              }}
            >
              Contact
            </NavButton>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navigation; 