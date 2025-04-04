import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import GlobalStyles from './styles/GlobalStyles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00D1FF',
      light: '#5EF7FF',
      dark: '#00A3FF',
    },
    secondary: {
      main: '#FF61F6',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8FDFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: 'rgba(26, 26, 26, 0.85)',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: '4.5rem',
      '@media (max-width: 960px)': {
        fontSize: '3.75rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '3.75rem',
      '@media (max-width: 960px)': {
        fontSize: '3rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '3rem',
      '@media (max-width: 960px)': {
        fontSize: '2.5rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '2rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '2.5rem',
      '@media (max-width: 960px)': {
        fontSize: '2rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '1.75rem',
      },
    },
    h5: {
      fontWeight: 500,
      fontSize: '2rem',
      '@media (max-width: 960px)': {
        fontSize: '1.75rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '1.5rem',
      },
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.75rem',
      '@media (max-width: 960px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '1.25rem',
      },
    },
    body1: {
      fontSize: '1.25rem',
      lineHeight: 1.7,
      '@media (max-width: 960px)': {
        fontSize: '1.125rem',
      },
    },
    body2: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      '@media (max-width: 960px)': {
        fontSize: '1rem',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '10px 20px',
          '&:hover': {
            backgroundColor: 'rgba(0, 209, 255, 0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0, 209, 255, 0.15)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 209, 255, 0.2)',
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Navigation />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </ThemeProvider>
  );
};

export default App;
