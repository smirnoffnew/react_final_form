import React from 'react';
import { Container, Typography } from '@material-ui/core';
import FinalForm from './FinalForm'


function App() {
  return (
        
    <Container 
      maxWidth='md' 
      style={{ 
        height: '100vh',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}
    >
      <Typography variant='h6'>
        Final Form
      </Typography>

      <FinalForm />
    
    </Container>

  );
}

export default App;
