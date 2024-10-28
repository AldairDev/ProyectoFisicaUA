import React from 'react';
import ConductivitySimulator from './components/ConductivitySimulator';
import { Container, CssBaseline } from '@mui/material';

function App() {
    return (
        <Container style={{ marginTop: '20px' }}>
            <CssBaseline />
            <ConductivitySimulator />
        </Container>
    );
}

export default App;
