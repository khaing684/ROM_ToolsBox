

import React from 'react';
import ThemeToggle from './ThemeToggle';
import { Container } from 'react-bootstrap';

const Header = ({ theme, toggleTheme }) => (
  <header className="py-3 border-bottom position-relative">
    <Container
      fluid
      className="d-flex justify-content-center align-items-center flex-wrap gap-3 position-relative"
      style={{ minHeight: '56px' }} // give space for absolute toggle on big screens
    >
      {/* Title centered */}
      {/* <h2
        className="mb-0 text-center"
        style={{ whiteSpace: 'nowrap',
          color: '#2c3e50',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
         }}
      >
        ROM Toolbox Store
      </h2> */}
      <h2
  className="mb-0 text-center"
  style={{
    whiteSpace: 'nowrap',
    background: 'linear-gradient(90deg, #4facfe, #00f2fe)', // soft neon blue gradient
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '700',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
  }}
>
  ROM Toolbox Store
</h2>


      {/* Toggle inline with header on small screens */}
      <div className="d-flex d-md-none align-items-center">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>

      {/* Toggle top-right corner on medium+ screens */}
      <div
        className="d-none d-md-block position-absolute"
        style={{ top: '1rem', right: '1.5rem' }}
      >
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </Container>
  </header>
);

export default Header;
