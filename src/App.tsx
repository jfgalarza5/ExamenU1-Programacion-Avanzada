import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import DashboardPage from './pages/DashboardPage'

const App: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        <DashboardPage />
      </Container>
    </Box>
  )
}

export default App