import React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Stack from '@mui/material/Stack'
import { TaskStatus } from '../types'

interface Props {
  selected: TaskStatus
  onChange: (s: TaskStatus) => void
}

const StatusFilter: React.FC<Props> = ({ selected, onChange }) => {
  const statuses: { key: TaskStatus; label: string }[] = [
    { key: 'Pendiente', label: 'Pendientes' },
    { key: 'En progreso', label: 'En progreso' },
    { key: 'Completada', label: 'Completadas' },
  ]

  const colorFor = (s: TaskStatus) => {
    if (s === 'Pendiente') return 'warning'
    if (s === 'En progreso') return 'info'
    return 'success'
  }

  return (
    <Stack direction="row" justifyContent="center">
      <ButtonGroup variant="outlined" aria-label="status filter">
        {statuses.map((st) => (
          <Button
            key={st.key}
            variant={selected === st.key ? 'contained' : 'outlined'}
            color={colorFor(st.key) as any}
            onClick={() => onChange(st.key)}
          >
            {st.label}
          </Button>
        ))}
      </ButtonGroup>
    </Stack>
  )
}

export default StatusFilter