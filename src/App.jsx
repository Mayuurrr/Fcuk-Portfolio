import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './utils/Themes';
import Navbar from './components/Navbar.jsx';
import Hero from './components/HeroSection.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const AppRoot = styled.div`
  background-color: #FAFAFA;
  color: #18181B;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 640px) {
    padding: 0 16px;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoot>
        <Navbar />
        <ContentContainer>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </ContentContainer>
        <Footer />
      </AppRoot>
    </ThemeProvider>
  );
}

export default App;

