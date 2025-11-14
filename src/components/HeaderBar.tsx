import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface Props {
  title: string
  userName: string
}

const HeaderBar: React.FC<Props> = ({ title, userName }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2e7d32', borderRadius: 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ color: '#fff' }}>
          {title}
        </Typography>

        <Box>
          <Typography variant="caption" sx={{ color: '#e8f5e9' }}>
            Usuario: {userName}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderBar