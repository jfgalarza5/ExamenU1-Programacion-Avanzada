import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const FooterBar: React.FC = () => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: '#eeeeee', p: 2, borderRadius: 1 }}>
      <Box textAlign="center">
        <Typography variant="body2" sx={{ color: 'text.primary' }}>
          Programación Avanzada – Examen de Componentes
        </Typography>
      </Box>
    </Paper>
  )
}

export default FooterBar